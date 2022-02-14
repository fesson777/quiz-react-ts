import styles from './ActiveQuiz.module.scss'
import { AnswerList } from './AnswerList'
import clsx from 'clsx'

export interface ListAnswer {
  answers: {
    text: string
    id: number
  }[]
  question: string
  onAnswerClick?: Function
  quizLength: number
  answerNumber: number
  stateAnswers: {}
}

function ActiveQuiz(props: ListAnswer) {
  const {
    answers,
    question,
    onAnswerClick,
    answerNumber,
    quizLength,
    stateAnswers,
  } = props

  return (
    <div className={clsx(styles.root)}>
      <p className={clsx(styles.question)}>
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
        stateAnswers={stateAnswers}
      />
    </div>
  )
}

export default ActiveQuiz
