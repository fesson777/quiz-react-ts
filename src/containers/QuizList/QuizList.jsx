import clsx from 'clsx'
import styles from './QuizList.module.scss'
import { empty, renderQuizes } from './utils'

export default function QuizList() {
  
  return (
    <div className={clsx(styles.root)}>
      <div>
        <h1>Список тестов</h1>

        <ul>{renderQuizes().length ? renderQuizes() : empty()}</ul>
      </div>
    </div>
  )
}
