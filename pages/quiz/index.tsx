import { useState, useEffect } from 'react'
import { useSession } from '@supabase/auth-helpers-react'
import { Database } from '@/lib/database.types';
import Container from '@/components/container';
import Layout from '@/components/layout';
import Input, { InputLabel } from '@/components/input';
import Button from '@/components/button';
import _ from 'lodash';
import Head from 'next/head';
import Quiz from '@/components/quiz';

type Question = Database['public']['Tables']['questions']['Row'];

export default function Course() {
  const session = useSession()
  const [questionType, setQuestionType] = useState('multiple choice')
  const [topic, setTopic] = useState('Chinese Herbology')
  const [outcome, setOutcome] = useState('Warm Acrid Release Exterior Herb pinyin names')
  const [quiz, setQuiz] = useState<Question[]>([{
    id: '1',
    text: 'What is the capital of France?',
    correct_answer: 'Paris',
    distractors: ['London', 'New York', 'Berlin'],
    created_at: `${Date.now()}`,
    updated_at: `${Date.now()}`,
    image_url: '',
    sound_url: ''
  }])

  useEffect(() => {
    console.log('quiz', quiz)
  }, [quiz])

  const [quizIndex, setQuizIndex] = useState(0)

  if (!session) {
    return (
      <>
        <h1>Course</h1>
        <p>Please login to access this page</p>
      </>
    )
  }

  const handleGenerateQuiz = async () => {
    console.log('generate quiz')
    if (!questionType || !topic || !outcome) {
      console.log('missing input')
      return
    }
    try {
      const response = await fetch('/api/chatgpt', {
        method: 'POST',
        body: JSON.stringify({
          questionType,
          topic,
          outcome
        })
      })
      const data = await response.json()
      console.log(data)
      setQuiz(data)
    } catch (error) {
      console.error('Error generating quiz:', error)
    }
  }

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Quiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Container>
            <InputLabel htmlFor='topic'>Topic</InputLabel>
            <Input
              id='topic'
              type="text"
              value={topic}
              onValueChange={(value) => setTopic(value)}
            />
          </Container>
          <Container>
            <InputLabel htmlFor='outcome'>Outcome</InputLabel>
            <Input
              id='outcome'
              type="text"
              value={outcome}
              onValueChange={(value) => setOutcome(value)}
            />
          </Container>
        </Layout>
      <Button onClick={() => handleGenerateQuiz()}>Generate quiz</Button>
      <Container>
        {quiz.length === 0 ? (
          <p>No quiz questions available</p>
        ) : (
          <Quiz questions={quiz} layout='multiple-choice' />
        )}
      </Container>
      </main>
    </>
  )
}

// quiz.map((q, i) => {
//   const question = q as Question;
//   const distractors = question.distractors || []; // catch null distractors
//   const options = _.shuffle([...distractors, question.correct_answer]);
//   return (
//     <div key={i}>
//       <h3>{question.text}</h3>
//       <ul>
//         {options.map((option, j) => (
//           <li key={j}>{option}</li>
//         ))}
//       </ul>
//     </div>
//   );
// })
