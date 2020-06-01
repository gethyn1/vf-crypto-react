import * as types from './types'

const getAssets = () => dispatch => {
  dispatch({
    type: types.GET_ASSETS_REQUESTED
  })

  fetch('https://api.coincap.io/v2/assets?limit=10')
    .then(response => response.json())
    .then(data => dispatch({
      type: types.GET_ASSETS_SUCCEEDED,
      payload: data.data
    }))
    .catch(() => dispatch({
      type: types.GET_ASSETS_FAILED
    }))
}

const sortAssets = (sortBy) => ({
  type: types.ASSETS_SORTED,
  payload: sortBy
})

export {
  getAssets,
  sortAssets
}
