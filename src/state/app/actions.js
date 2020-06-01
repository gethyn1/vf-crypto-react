import * as types from './types'

const setCurrency = (currency) => ({
  type: types.CURRENCY_SET,
  payload: currency
})

export {
  setCurrency
}
