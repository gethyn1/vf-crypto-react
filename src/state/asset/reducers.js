import { combineReducers } from 'redux'
import * as types from './types'
import { metaReducerFactory } from '../meta-reducer'

const DEFAULT_ASSET_STATE = null

const entity = (state = DEFAULT_ASSET_STATE, { type, payload }) => {
  switch (type) {
    case types.GET_ASSET_SUCCEEDED:
      return payload
    default:
      return state
  }
}

const reducer = combineReducers({
  entity,
  meta: metaReducerFactory([
    types.GET_ASSET_REQUESTED,
    types.GET_ASSET_SUCCEEDED,
    types.GET_ASSET_FAILED
  ])
})

export {
  reducer
}
