import { createSelector } from 'reselect'
import * as app from '../app'

const DEFAULT_RATE = {
  id: 'united-states-dollar',
  symbol: 'USD',
  rateUsd: '1'
}

const getRates = state => state.rates.entities

const getRatesMeta = state => state.rates.meta

const getActiveRate = createSelector(
  [getRates, app.selectors.getCurrency],
  (rates, currency) =>
    rates.find(rate => rate.symbol === currency) || DEFAULT_RATE
)

export {
  getRates,
  getRatesMeta,
  getActiveRate
}
