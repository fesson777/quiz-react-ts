import clsx from 'clsx'
import { useEffect, useState } from 'react'
import styles from './Quiz.module.scss'
import { ActiveQuiz } from '../../components/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import { useNavigate, useParams } from 'react-router-dom'
import { AnswerState } from 'types'

function getQuestionList(id: string):any[] | undefined {
  const data = localStorage.getItem(`quiz-id:${id}`)
  if (data) {
    return JSON.parse(data)     
  } 
  return undefined 
}

type State = {
  isFinished: boolean,
  activeQuestion: number,
  answerState: AnswerState,
  
}

const initState: State = {
  isFinished: false,
  activeQuestion: 0,
  answerState: {}, 
}


export default function Quiz() {
  const { id } = useParams()
  const navigate = useNavigate() 
  const [state, setState] = useState(initState)
  const [list, setList] = useState<any[]>([])
  const [result, setResult] = useState({})
  
  useEffect(()=> {
    if(id) {
     const list =  getQuestionList(id)
     if(list) {
      setList(list)
     } else {
      navigate('/page-not-found')
     }     
    }
  },[id])


  function handleAnswerClick(id: number) {    
    const question = list[state.activeQuestion]
    if (question.rightAnswerId === id) {
      setResult({ ...result, [question.id]: 'success' })
      setState({
        ...state,
        answerState: { [id]: 'success' },
      })

      const timeout = setTimeout(() => {
        if (isQuizFinish()) {
          setState({ ...state, isFinished: true })
        } else {
          setState({
            ...state,
            activeQuestion: state.activeQuestion + 1,
            answerState: {},
          })
          clearTimeout(timeout)
        }
      }, 2000)
    } else {
      setResult({ ...result, [question.id]: 'error' })

      setState({
        ...state,
        answerState: { [id]: 'error' },
      })
    }
  }

  function isQuizFinish() {
    return state.activeQuestion + 1 === list.length
  }

  function handleRetry() {
    setState(initState)
    setList([])
    setResult({})
  }

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.quizWrapper)}>
        <h1>Вопросы, испытай себя!!</h1>

        {state.isFinished ? (
          <FinishedQuiz
            result={result}
            quiz={list}
            onRetry={handleRetry}
          />
        ) : (
          <ActiveQuiz
            answers={ list[state.activeQuestion]?.answers || []}
            question={list[state.activeQuestion]?.question || ''}
            onAnswerClick={handleAnswerClick}
            quizLength={list.length}
            answerNumber={state.activeQuestion + 1}
            answerState={state.answerState}
          />
        )}
      </div>
    </div>
  )
}
