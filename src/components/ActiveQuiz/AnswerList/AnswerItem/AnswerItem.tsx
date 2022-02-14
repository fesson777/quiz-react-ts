import styles from './AnswerItem.module.scss'
import clsx from 'clsx'

type ItemText = {
  answer: {
    text: string
  }
}

export default function AnswerItem(props: ItemText) {
  const { answer } = props
  return <li className={clsx(styles.root)}>{answer.text}</li>
}
