import clsx from 'clsx'
import { useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './QuizList.module.scss'

export default function QuizList() {
  let date = new Date().toLocaleDateString()
  const empty = () => {
    return (
      <li className="js-li">
        <Link to={'quiz-creator'}>Тесты пока что не созданы</Link>
      </li>
    )
  }
  function renderQuizes() {
    let asks = {}
    Object.keys(localStorage).forEach((item) => {
      if (item.includes('quiz')) {
        asks[item] = JSON.parse(localStorage.getItem(item))
      }
    })

    return Object.keys(asks).map((nameQuiz, index) => {
      return (
        <li key={index}>
          <Link to={'quiz/' + (+index + 1)}>
            {index + 1}. Тесты, количество вопросов: {asks[nameQuiz].length} -
            {date}
          </Link>
        </li>
      )
    })
  }
  const showQuiz = renderQuizes().length ? renderQuizes() : empty()

  return (
    <div className={clsx(styles.root)}>
      <div>
        <h1>Список тестов</h1>

        <ul>{showQuiz}</ul>
      </div>
    </div>
  )
}
