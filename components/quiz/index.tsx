import { useState } from 'react';
import { useRouter } from 'next/router';
import { Question } from '@/types/question';
import Container from '@/components/container';
import Layout from '@/components/layout';

type Props = {
  questions: Question[];
};

const Quiz: React.FC<Props> = ({ questions }) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = checkAnswer(currentQuestion, selectedAnswer);

    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log('Incorrect. Please try again.');
    }

    setSelectedAnswer('');
    setIsSubmitting(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const checkAnswer = (question: Question, selectedAnswer: string): boolean => {
    switch (question.type) {
      case 'multiple_choice':
        return selectedAnswer === question.correctAnswer;
      case 'true_false':
        return selectedAnswer === question.correctAnswer;
      case 'short_answer':
        return selectedAnswer.toLowerCase() === question.correctAnswer.toLowerCase();
      case 'essay':
        return true; // TODO: Implement grading
      default:
        return false;
    }
  };

  if (!questions || questions.length === 0) {
    return (
      <Layout>
        <Container>
          <p>No questions found</p>
        </Container>
      </Layout>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <Layout>
        <Container>
          <h1>Quiz Complete</h1>
        </Container>
      </Layout>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Layout>
      <Container>
        <h1>Quiz</h1>
        <h2>{currentQuestion.text}</h2>
        {currentQuestion.type === 'multiple_choice' && (
          <form onSubmit={handleSubmit}>
            {currentQuestion.options.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleAnswerSelected}
                  />
                  {option}
                </label>
              </div>
            ))}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
        {currentQuestion.type === 'true_false' && (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="True"
                  checked={selectedAnswer === 'True'}
                  onChange={handleAnswerSelected}
                />
                True
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="False"
                  checked={selectedAnswer === 'False'}
                  onChange={handleAnswerSelected}
                />
                False
              </label>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
        {currentQuestion.type === 'short_answer' && (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Answer:
                <input
                  type="text"
                  value={selectedAnswer}
                  onChange={handleAnswerSelected}
                />
              </label>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
        {currentQuestion.type === 'essay' && (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Essay:
                <textarea value={selectedAnswer} onChange={handleAnswerSelected} />
              </label>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Container>
    </Layout>
  );
};

export default Quiz;
