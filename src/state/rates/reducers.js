import { combineReducers } from 'redux'
import * as types from './types'
import { metaReducerFactory } from '../meta-reducer'

const DEFAULT_RATES_STATE = []

const entities = (state = DEFAULT_RATES_STATE, { type, payload }) => {
  switch (type) {
    case types.GET_RATES_SUCCEEDED:
      return payload
    default:
      return state
  }
}

const reducer = combineReducers({
  entities,
  meta: metaReducerFactory([
    types.GET_RATES_REQUESTED,
    types.GET_RATES_SUCCEEDED,
    types.GET_RATES_FAILED
  ])
})

export {
  reducer
}
