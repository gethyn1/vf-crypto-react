import { combineReducers } from 'redux'
import * as types from './types'

const DEFAULT_CURRENCY_STATE = null

const currency = (state = DEFAULT_CURRENCY_STATE, { type, payload }) => {
  switch (type) {
    case types.CURRENCY_SET:
      return payload
    default:
      return state
  }
}

const reducer = combineReducers({
  currency
})

export {
  reducer
}
