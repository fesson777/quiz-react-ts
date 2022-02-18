import clsx from 'clsx'
import { useSelector } from 'react-redux'
import styles from './QuizList.module.scss'
import { empty, renderQuizes } from './utils'

export default function QuizList() {
  const { rootState } = useSelector((state) => state)
  console.log(rootState)
  return (
    <div className={clsx(styles.root)}>
      <div>
        <h1>Список тестов</h1>

        <ul>{renderQuizes().length ? renderQuizes() : empty()}</ul>
      </div>
    </div>
  )
}
