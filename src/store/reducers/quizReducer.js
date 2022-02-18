import { quizBaseState } from '../../containers/Quiz/QuizBaseState'
import { getQuizFromLS } from '../../containers/QuizList/utils'

const dataFromLS = Object.values(getQuizFromLS()) || []

const initialState = {
  quizes: [{ ...dataFromLS, ...quizBaseState }],
}

const type = {
  CREATE_QUIZ: 'CREATE_QUIZ',
  GET_QUIZ: 'GET_QUIZ',
}

export function createQuizAction(payload) {
  return {
    type: type.CREATE_QUIZ,
    payload,
  }
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case type.CREATE_QUIZCREATE_QUIZ:
      const { quizes } = state
      quizes.push(action.payload)
      return { ...state, quizes }
    // case GET_QUIZ:
    //   return { ...state, quiz: quiz.push(action.payload) }
    default:
      return state
  }
}
