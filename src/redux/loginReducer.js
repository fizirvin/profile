export const EMAIL_LOGIN_ACTION = 'EMAIL_LOGIN_ACTION'
export const PASSWORD_LOGIN_ACTION = 'PASSWORD_LOGIN_ACTION'

export const RESET_LOGIN_ACTION = 'RESET_LOGIN_ACTION'

const initialState = {
  email: '',
  password: ''
}

const login = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case EMAIL_LOGIN_ACTION:
      return {
        ...state,
        email: payload
      }
    case PASSWORD_LOGIN_ACTION:
      return {
        ...state,
        password: payload
      }
    case RESET_LOGIN_ACTION:
      return initialState
    default:
      return state
  }
}

export default login
