export const FIRSTNAME_SIGNUP_ACTION = 'FIRSTNAME_SIGNUP_ACTION'
export const LASTNAME_SIGNUP_ACTION = 'LASTNAME_SIGNUP_ACTION'
export const EMAIL_SIGNUP_ACTION = 'EMAIL_SIGNUP_ACTION'
export const PASSWORD_SIGNUP_ACTION = 'PASSWORD_SINGUP_ACTION'
export const REPASSWORD_SIGNUP_ACTION = 'PASSWORD_SINGUP_ACTION'

export const RESET_SIGNUP_ACTION = 'RESET_SIGNUP_ACTION'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  rePassword: ''
}

const signup = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FIRSTNAME_SIGNUP_ACTION:
      return {
        ...state,
        firstName: payload
      }
    case LASTNAME_SIGNUP_ACTION:
      return {
        ...state,
        lastName: payload
      }
    case EMAIL_SIGNUP_ACTION:
      return {
        ...state,
        email: payload
      }
    case PASSWORD_SIGNUP_ACTION:
      return {
        ...state,
        password: payload
      }
    case REPASSWORD_SIGNUP_ACTION:
      return {
        ...state,
        rePassword: payload
      }
    case RESET_SIGNUP_ACTION:
      return initialState
    default:
      return state
  }
}

export default signup
