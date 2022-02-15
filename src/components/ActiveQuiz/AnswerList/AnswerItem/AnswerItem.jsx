import styles from './AnswerItem.module.scss'
import clsx from 'clsx'

// export interface ItemText {
//   answer: {
//     text: string
//     id: number
//   }
//   onAnswerClick?: Function
// }

const AnswerItem = (props) => {
  const { answer, onAnswerClick } = props
  return (
    <li
      className={clsx(styles.root, {
        [styles.success]: props.stateAnswersClass === 'success',
        [styles.error]: props.stateAnswersClass === 'error',
      })}
      onClick={() => onAnswerClick(answer.id)}
    >
      {answer.text}
    </li>
  )
}

export default AnswerItem
