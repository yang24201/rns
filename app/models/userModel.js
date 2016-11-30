import {Record, Map, List} from 'immutable'

export const UserModel = Record({
  userName: undefined,
  password: undefined,
  interest: List(),
  score: Map(),
  isLogin: false,
}, 'UserModel')