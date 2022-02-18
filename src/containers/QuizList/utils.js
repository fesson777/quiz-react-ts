import { Link } from 'react-router-dom'

export const date = new Date().toLocaleDateString()

export const empty = () => {
  return (
    <li className="js-li">
      <Link to={'quiz-creator'}>Тесты пока что не созданы</Link>
    </li>
  )
}

export function renderQuizes() {
  const asks = getQuizFromLS()

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

export function getQuizFromLS() {
  let asks = {}
  Object.keys(localStorage).forEach((item) => {
    if (item.includes('quiz')) {
      asks[item] = JSON.parse(localStorage.getItem(item))
    }
  })

  return asks
}
