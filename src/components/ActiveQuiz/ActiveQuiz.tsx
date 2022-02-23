import styles from './ActiveQuiz.module.scss'
import { AnswerList } from './AnswerList'
import { Answer, AnswerState } from 'types'

export interface ListAnswer {
  answers: Answer[]
  question: string
  onAnswerClick: (id: number) => void
  quizLength: number
  answerNumber: number
  answerState: AnswerState
}

function ActiveQuiz(props: ListAnswer) {
  const {
    answers,
    question,
    onAnswerClick,
    answerNumber,
    quizLength,
    answerState,
  } = props

  return (
    <div className={styles.root}>
      <p className={styles.question}>
        <span>
          <strong> {answerNumber}.</strong>&nbsp;
          {question}
        </span>

        <small>
          {answerNumber} из {quizLength}
        </small>
      </p>

      <AnswerList
        answers={answers}
        onAnswerClick={onAnswerClick}
        answerState={answerState}
      />
    </div>
  )
}

export default ActiveQuiz
