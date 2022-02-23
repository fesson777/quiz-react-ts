import clsx from 'clsx'
import styles from './AnswerList.module.scss'
import AnswerItem, { AnswerItemProps } from './AnswerItem/AnswerItem'
import { Answer, AnswerState } from 'types'

export interface AnswerListProps {
  answers: Answer[] 
  answerState: AnswerState
  onAnswerClick: AnswerItemProps['onAnswerClick']
}

function AnswerList(props: AnswerListProps) {
  const { answers, onAnswerClick, answerState } = props

  return (
    <ul className={clsx(styles.root)}>      
        {answers.map((answer, index) => {
          return (
            <AnswerItem
              key={answer.text+index}
              answer={answer}
              onAnswerClick={onAnswerClick}
              stateAnswersClass={answerState ? answerState[answer.id] : undefined}
            />
          )
        })}      
    </ul>
  )
}

export default AnswerList
