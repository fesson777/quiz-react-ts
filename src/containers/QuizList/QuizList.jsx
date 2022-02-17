import clsx from 'clsx'
import { Link } from 'react-router-dom'
import styles from './QuizList.module.scss'

export default function QuizList() {
  function renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <Link to={'quiz/' + quiz}>test {quiz}</Link>
        </li>
      )
    })
  }

  return (
    <div className={clsx(styles.root)}>
      <div>
        <h1>Список тестов</h1>

        <ul>{renderQuizes()}</ul>
      </div>
    </div>
  )
}
