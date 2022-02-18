import { combineReducers, createStore } from 'redux'
import quizReducer from './quizReducer'

const rootReducer = combineReducers({
  quiz: quizReducer,
})

export const store = createStore(rootReducer)
