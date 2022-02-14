import clsx from 'clsx'
import styles from './AnswerList.module.scss'
import AnswerItem from './AnswerItem/AnswerItem'

export interface ListAnswer {
  answers: [
    {
      text: string
    },
    {
      text: string
    },
    {
      text: string
    },
    {
      text: string
    }
  ]
}

function AnswerList(props: ListAnswer) {
  const { answers } = props

  return (
    <ul className={clsx(styles.root)}>
      <li>
        {answers.map((answer, index) => {
          return <AnswerItem answer={answer} />
        })}
      </li>
    </ul>
  )
}

export default AnswerList
