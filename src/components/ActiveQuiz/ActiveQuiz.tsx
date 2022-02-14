import styles from './ActiveQuiz.module.scss'
import { AnswerList } from './AnswerList'
import clsx from 'clsx'
import { ListAnswer } from './AnswerList/AnswerList'

function ActiveQuiz(props: ListAnswer) {
  const { answers } = props

  return (
    <div className={clsx(styles.root)}>
      <p className={clsx(styles.question)}>
        <span>
          <strong>2.</strong>&nbsp; Как дела?
        </span>

        <small>4 из 12</small>
      </p>

      <AnswerList answers={answers} />
    </div>
  )
}

export default ActiveQuiz
