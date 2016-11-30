import {Map} from 'immutable'

export function getUserInfo(state) {
  let userName = state.USER.userName
  let password = state.USER.password
  return {
    userName,
    password
  }
}

export function isUserLogin(state) {
  return state.USER.isLogin
}