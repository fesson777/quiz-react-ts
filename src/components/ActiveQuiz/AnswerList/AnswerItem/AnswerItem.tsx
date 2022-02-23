import {MouseEvent} from 'react'
import styles from './AnswerItem.module.scss'
import clsx from 'clsx'
import { Answer } from 'types'

export interface AnswerItemProps {
  answer: Answer
  stateAnswersClass?: string 
  onAnswerClick: (id: number) => void
}

const AnswerItem = (props: AnswerItemProps) => {
  const { answer, onAnswerClick } = props

function handleAnswerClick (id: number) {
  return (e:MouseEvent<HTMLLIElement>) => { 
    const id= e.currentTarget.id 
    onAnswerClick(+id)
  }
}

  return (
    <li
      id={String(answer.id)}
      className={clsx(styles.root, {
        [styles.success]: props.stateAnswersClass === 'success',
        [styles.error]: props.stateAnswersClass === 'error',
      })}
      onClick={handleAnswerClick(answer.id)}
     
    >
      {answer.text}
    </li>
  )
}

export default AnswerItem
