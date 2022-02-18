import clsx from 'clsx'
import { useEffect, useLayoutEffect, useState } from 'react'
import styles from './Quiz.module.scss'
import { ActiveQuiz } from '../../components/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import { useNavigate, useParams } from 'react-router-dom'
import { QuizBaseState } from './QuizBaseState'

export default function Quiz() {
  const { id } = useParams()
  console.log(localStorage.getItem(`quiz-id:${id}`))
  const navigate = useNavigate()
  let quizLS = [...QuizBaseState]

  if (localStorage.getItem(`quiz-id:${id}`)) {
    quizLS = JSON.parse(localStorage.getItem(`quiz-id:${id}`))
  } else {
    navigate('/') // почему не работает ?
  }

  const [quizState, setquizState] = useState({
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [...quizLS],
  })

  const [result, setResult] = useState({})

  function onAnswerClickHandler(answerId) {
    const question = quizState.quiz[quizState.activeQuestion]
    if (question.rightAnswerId === answerId) {
      setResult({ ...result, [question.id]: 'success' })
      setquizState({
        ...quizState,
        answerState: { [answerId]: 'success' },
      })

      const timeout = setTimeout(() => {
        if (isQuizFinish()) {
          setquizState({ ...quizState, isFinished: true })
        } else {
          setquizState({
            ...quizState,
            activeQuestion: quizState.activeQuestion + 1,
            answerState: null,
          })
          clearTimeout(timeout)
        }
      }, 2000)
    } else {
      setResult({ ...result, [question.id]: 'error' })

      setquizState({
        ...quizState,
        answerState: { [answerId]: 'error' },
      })
    }
  }

  function isQuizFinish() {
    return quizState.activeQuestion + 1 === quizState.quiz.length
  }

  function handleRetry() {
    setquizState({
      ...quizState,
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
    })
    setResult({})
  }

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.quizWrapper)}>
        <h1>Вопросы, испытай себя!!</h1>

        {quizState.isFinished ? (
          <FinishedQuiz
            result={result}
            quiz={quizState.quiz}
            onRetry={handleRetry}
          />
        ) : (
          <ActiveQuiz
            answers={quizState.quiz[quizState.activeQuestion].answers}
            question={quizState.quiz[quizState.activeQuestion].question}
            onAnswerClick={onAnswerClickHandler}
            quizLength={quizState.quiz.length}
            answerNumber={quizState.activeQuestion + 1}
            stateAnswers={quizState.answerState}
          />
        )}
      </div>
    </div>
  )
}
