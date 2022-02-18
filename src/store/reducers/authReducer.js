const initialState = {
 login: '',
 password: ''
}

const type = {
  AUTH: 'AUTH', 
}

export function authAction(payload) {
  return {
    type: type.AUTH,
    payload,
  }
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case type.AUTH:            
      return { ...state, auth: action.payload }    
    default:
      return state
  }
}
