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
  if (props.stateAnswers) {
    console.log(props.stateAnswers)
  }

  const { answer, onAnswerClick } = props
  return (
    <li className={clsx(styles.root)} onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  )
}

export default AnswerItem
