import clsx from 'clsx'
import { useState } from 'react'
import styles from './Quiz.module.scss'
import { ActiveQuiz } from '../../components/ActiveQuiz'

interface BaseQuiz {
  quiz: [
    {
      answers: [
        { text: string },
        { text: string },
        { text: string },
        { text: string }
      ]
    }
  ]
}

export default function Quiz() {
  const [quizState, setquizState] = useState<BaseQuiz>({
    quiz: [
      {
        answers: [
          { text: 'Вопрос 1' },
          { text: 'Вопрос 2' },
          { text: 'Вопрос 3' },
          { text: 'Вопрос 4' },
        ],
      },
    ],
  })

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.quizWrapper)}>
        <h1>Quiz</h1>
        {/* <ActiveQuiz answers={[{ text: '1' }]} /> */}
        <ActiveQuiz answers={quizState.quiz[0].answers} />
      </div>
    </div>
  )
}
