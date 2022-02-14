import clsx from 'clsx'
import styles from './AnswerList.module.scss'
import AnswerItem from './AnswerItem/AnswerItem'

function AnswerList(props: any) {
  const { answers, onAnswerClick, stateAnswers } = props

  return (
    <ul className={clsx(styles.root)}>
      <li>
        {answers.map((answer: any, index: number) => {
          return (
            <AnswerItem
              key={index}
              answer={answer}
              onAnswerClick={onAnswerClick}
              stateAnswers={stateAnswers ? stateAnswers[answer.id] : null}
            />
          )
        })}
      </li>
    </ul>
  )
}

export default AnswerList
