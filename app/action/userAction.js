import * as types from '../constants/userActionConst'
import {createAction} from "redux-actions"
import Symbol from "es6-symbol"

export function userLogin(payload) {
  return (dispatch, getState) => {
    let userName = payload.userName
    let password = payload.password
    dispatch(createAction(types.USER_LOGIN_ACTION))

    // 查询用户信息
    if (userName === 'yang' && password === '123456') {
      dispatch(createAction(types.USER_LOGIN_SUCCESS))
    }
  }
}