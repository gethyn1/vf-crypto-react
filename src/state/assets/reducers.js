import { combineReducers } from 'redux'
import * as types from './types'
import { metaReducerFactory } from '../meta-reducer'

const DEFAULT_ASSETS_STATE = []

const entities = (state = DEFAULT_ASSETS_STATE, { type, payload }) => {
  switch (type) {
    case types.GET_ASSETS_SUCCEEDED:
      return payload
    default:
      return state
  }
}

const sort = (state = null, { type, payload }) => {
  switch (type) {
    case types.ASSETS_SORTED:
      return payload
    default:
      return state
  }
}

const reducer = combineReducers({
  sort,
  entities,
  meta: metaReducerFactory([
    types.GET_ASSETS_REQUESTED,
    types.GET_ASSETS_SUCCEEDED,
    types.GET_ASSETS_FAILED
  ])
})

export {
  reducer
}
