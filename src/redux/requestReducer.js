export const REQUEST_ACTION = 'REQUEST_ACTION'
export const RESPONSE_ACTION = 'RESPONSE_ACTION'
export const RESET_REQUEST_ACTION = 'RESET_REQUEST_ACTION'

const initialState = {
  message: '',
  loading: false
}

const request = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_ACTION:
      return {
        ...state,
        loading: true
      }
    case RESPONSE_ACTION:
      return {
        ...state,
        loading: false,
        message: payload
      }
    case RESET_REQUEST_ACTION:
      return initialState
    default:
      return state
  }
}

export default request
