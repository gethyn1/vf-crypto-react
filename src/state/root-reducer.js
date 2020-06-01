import { combineReducers } from 'redux'
import { reducer as app } from './app'
import { reducer as assets } from './assets'
import { reducer as asset } from './asset'
import { reducer as rates } from './rates'

const rootReducer = combineReducers({
  app,
  assets,
  asset,
  rates
})

export {
  rootReducer
}
