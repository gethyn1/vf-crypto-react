import * as types from './types'

const getAsset = (assetId) => dispatch => {
  dispatch({
    type: types.GET_ASSET_REQUESTED
  })

  fetch(`https://api.coincap.io/v2/assets/${assetId}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: types.GET_ASSET_SUCCEEDED,
      payload: data.data
    }))
    .catch(() => dispatch({
      type: types.GET_ASSET_FAILED
    }))
}

export {
  getAsset
}
