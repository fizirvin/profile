export const SET_USER_ACTION = 'SET_USER_ACTION'
export const RESET_USER_ACTION = 'RESET_USER_ACTION'

const initialState = {
  userId: '',
  firstName: '',
  lastName: ''
}

const user = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER_ACTION:
      return payload
    case RESET_USER_ACTION:
      return initialState
    default:
      return state
  }
}

export default user
