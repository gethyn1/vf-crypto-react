import { ENABLED_FIAT_SYMBOLS } from '../../lib/constants/enabled-fiat'

const rateAdapter = rate => ({
  id: rate.id,
  symbol: rate.symbol,
  rateUsd: rate.rateUsd
})

const ratesAdapter = rates =>
  rates
    .filter(rate => ENABLED_FIAT_SYMBOLS.includes(rate.symbol))
    .map(rateAdapter)

export {
  ratesAdapter
}
