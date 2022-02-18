import Layout from '../src/hoc/Layout'
import Quiz from './containers/Quiz/Quiz'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Auth } from './containers/Auth'
import { QuizCreator } from './containers/QuizCreator'
import { QuizList } from './containers/QuizList'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={'/'} element={<QuizList />} />
          <Route path={'auth'} element={<Auth />} />
          <Route path={'quiz/:id'} element={<Quiz />} />
          <Route path={'quiz-creator'} element={<QuizCreator />} />
          <Route path={'*'} element={<QuizList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
