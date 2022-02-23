import { Credentials } from "types"

type State = Credentials



const initialState:State  = {
  email: '',
  password: ''
}

const types = {
  REGISTRATE: 'AUTH/registrate',
  LOGOUT: 'AUTH/logout'
} as const

export function registrationAction( payload:Credentials ) {
  return {
    type: types.REGISTRATE,
    payload,
  }
}
export function logoutAction() {
  return {
    type: types.LOGOUT   
  }
}

type Action = ReturnType <typeof registrationAction> | ReturnType <typeof logoutAction>

export function authReducer(state = initialState, action: Action):State {
  switch (action.type) {
      case types.REGISTRATE:            
         return { ...action.payload }  
      case types.LOGOUT:            
         return initialState  
    default:
      return state
  }
}
