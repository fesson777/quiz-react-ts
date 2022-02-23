import Layout from '../src/hoc/Layout'
import Quiz from './containers/Quiz/Quiz'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Auth } from './containers/Auth'
import { QuizCreator } from './containers/QuizCreator'
import { QuizList } from './containers/QuizList'
import PageNotFound from 'components/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={'/'} element={<QuizList />} />
          <Route path={'auth'} element={<Auth />} />          
          <Route path={'quiz/:id'} element={<Quiz />} />
          <Route path={'quiz-creator'} element={<QuizCreator />} />
          <Route path={'page-not-found'} element={<PageNotFound />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
