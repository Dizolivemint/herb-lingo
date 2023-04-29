import { useState } from 'react';
import { useRouter } from 'next/router';
import { Database } from '@/lib/database.types';
import Container from '@/components/container';
import Layout from '@/components/layout';
import _ from 'lodash';
import Button from '../button';

type Question = Database['public']['Tables']['questions']['Row'];
type Props = {
  questions: Question[];
  layout: string;
};

const Quiz: React.FC<Props> = ({ questions, layout }) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerSelected = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    return selectedAnswer === question.correct_answer;
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
  
  const distractors = currentQuestion.distractors || []; // catch null distractors
  const options = _.shuffle([...distractors, currentQuestion.correct_answer]);

  const questionLayout = layout;
  
  return (
    <Layout>
      <Container>
        <h1>Quiz</h1>
        <h2>{currentQuestion.text}</h2>
        {questionLayout === 'multiple-choice' && (
          <form onSubmit={handleSubmit}>
            {options.map((option: string, index: number) => (
              <div key={index}>
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
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
        {questionLayout === 'fill-in-the-blank' && (
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
        {questionLayout === 'essay' && (
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
