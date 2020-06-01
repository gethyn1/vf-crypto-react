import PropTypes from 'prop-types'

const assetPropType = PropTypes.shape({
  id: PropTypes.string,
  rank: PropTypes.string,
  symbol: PropTypes.string,
  name: PropTypes.string,
  supply: PropTypes.string,
  maxSupply: PropTypes.string,
  marketCapUsd: PropTypes.string,
  volumeUsd24Hr: PropTypes.string,
  priceUsd: PropTypes.string,
  changePercent24Hr: PropTypes.string,
  vwap24Hr: PropTypes.string
})

const metaPropType = PropTypes.shape({
  isLoading: PropTypes.bool,
  hasLoaded: PropTypes.bool,
  hasErrored: PropTypes.bool
})

const ratePropType = PropTypes.shape({
  id: PropTypes.string,
  symbol: PropTypes.string,
  rateUsd: PropTypes.string
})

export {
  assetPropType,
  metaPropType,
  ratePropType
}
