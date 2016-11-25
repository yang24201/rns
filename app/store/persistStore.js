import {AsyncStorage} from 'react-native'
import {persistStore} from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import createFilter from 'redux-persist-transform-filter'
import {Actions} from 'react-native-router-flux'
import * as useRecords from '../models/userModels'
import * as feedModels from '../models/feedModels'
import * as authSelectors from '../selectors/authSelector'
import {become} from '../actions/auth'
import {initMessenger} from '../actions/messengerActions'

import * as oprs from '../actions/io/databaseOprs'

const messageFilter = createFilter(
  'MESSAGE',
  [
    'activeConversation',
    'msgById',
    'convById',
    'convListSortedByUpdatedTime',
    'unreadCount'
  ]
)

export default function persist(store) {
  persistStore(store, {
    storage: AsyncStorage,
    transform: [
      immutableTransform({
        records: [
          ...useRecords,
          ...feedModels,
        ],
      }),
    ],
    transforms: [messageFilter],
    whitelist: ['AUTH', 'NOTIFY', 'MESSAGE', 'FEED', 'GROUP'],
  }, ()=> {
    store.dispatch(restoreFromPersistence())
  })
}

export function restoreFromPersistence() {
  return (dispatch, getState) => {
    if (authSelectors.isUserLogined(getState())) {
      dispatch(verifyToken())
    } else {
      Actions.LOGIN_INDEX()
      try {
      } catch (e) {
        console.log("restoreFromPersistence error is", e)
      }
    }
  }
}

function verifyToken() {
  return (dispatch, getState) => {
    let payload = {
      ...authSelectors.activeUserAndToken(getState())
    }

    become(payload).then(() => {
      return dispatch(initMessenger())
    }).then(() => {
      // Actions.HOME()
    }).catch((error) => {
      console.log('verify token error:', error)
    })
  }
}
