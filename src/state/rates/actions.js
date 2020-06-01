import * as types from './types'
import { ratesAdapter } from './adapters'

const getRates = () => dispatch => {
  dispatch({
    type: types.GET_RATES_REQUESTED
  })

  fetch('https://api.coincap.io/v2/rates')
    .then(response => response.json())
    .then(data => dispatch({
      type: types.GET_RATES_SUCCEEDED,
      payload: ratesAdapter(data.data)
    }))
    .catch(() => dispatch({
      type: types.GET_RATES_FAILED
    }))
}

export {
  getRates
}
