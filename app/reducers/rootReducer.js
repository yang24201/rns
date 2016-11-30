import {combineReducers} from 'redux'

import configReducer from './configReducer'
import userReducer from './userReducer'

const rootReducers = combineReducers({
  CONFIG: configReducer,
  USER: userReducer,
})

const rootReducersWrapper = (state, action) => {
  action.rootState = state
  if (action.error) {
    return {
      ...state
    }
  } else {
    return rootReducers(state, action)
  }
}

export default rootReducersWrapper