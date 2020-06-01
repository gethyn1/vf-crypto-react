import { createSelector } from 'reselect'

const sortTypes = {
  CURRENCY: 'CURRENCY',
  PRICE: 'PRICE',
  MARKET_CAP: 'MARKET_CAP',
  CHANGE: 'CHANGE'
}

const getAssets = state => state.assets.entities

const getAssetsMeta = state => state.assets.meta

const getSort = state => state.assets.sort

const getSortedAssets = createSelector(
  [getAssets, getSort],
  (assets, sort) => {
    switch (sort) {
      case sortTypes.CURRENCY:
        return [...assets.sort((a, b) => a.name.localeCompare(b.name))]
      case sortTypes.PRICE:
        return [...assets.sort((a, b) => b.priceUsd - a.priceUsd)]
      case sortTypes.MARKET_CAP:
        return [...assets.sort((a, b) => b.marketCapUsd - a.marketCapUsd)]
      case sortTypes.CHANGE:
        return [...assets.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr)]
      default:
        return assets
    }
  }
)

export {
  sortTypes,
  getAssets,
  getAssetsMeta,
  getSort,
  getSortedAssets
}
