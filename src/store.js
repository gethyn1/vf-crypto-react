import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './state'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose
const preloadedState = {}

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export {
  store
}
