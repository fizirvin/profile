import { combineReducers } from 'redux'

import login from './loginReducer'
import request from './requestReducer'
import signup from './signupReducer'
import user from './userReducer'

const reducers = combineReducers({
  login,
  request,
  signup,
  user
})

export default reducers
