import * as UserActionTypes from '../constants/userActionConst'
import {UserModel} from '../models/userModel'
import {Map, List} from 'immutable'
const initialState = new UserModel()

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_ACTION:
      return handleLogin(state, action)
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return handleLoginSuccess(state, action)
    default:
      return state
  }
}

function handleLogin(state, action) {
  console.log("action", action.payload)
  let payload = action.payload
  state.set('userName', payload.userName)
  state.set('password', payload.password)
  return state
}

function handleLoginSuccess(state, action) {
  console.log("handleLoginSuccess")
  state = state.set('isLogin', true)
  return state
}

function onRehydrate(state, action) {
  var incoming = action.payload.USER
  if (incoming) {
    state = state.set('userName', incoming.userName)
    state = state.set('password', incoming.password)
  }
  return state
}