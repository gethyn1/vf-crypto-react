import { sortTypes, getSortedAssets } from './selectors'

const entities = [{
  name: 'Tether',
  marketCapUsd: '8794784370.34',
  priceUsd: '0.99',
  changePercent24Hr: '0.00'
}, {
  name: 'Ethereum',
  marketCapUsd: '25936695642.43',
  priceUsd: '233.37',
  changePercent24Hr: '5.99'
}, {
  name: 'Bitcoin',
  marketCapUsd: '175622242995.00',
  priceUsd: '9550.24',
  changePercent24Hr: '0.99'
}]

describe('assets selectors', () => {
  describe('get sorted assets', () => {
    test('sorts assets by name', () => {
      const state = {
        assets: {
          entities,
          sort: sortTypes.CURRENCY
        }
      }

      const result = getSortedAssets(state)

      const expected = [{
        name: 'Bitcoin',
        marketCapUsd: '175622242995.00',
        priceUsd: '9550.24',
        changePercent24Hr: '0.99'
      }, {
        name: 'Ethereum',
        marketCapUsd: '25936695642.43',
        priceUsd: '233.37',
        changePercent24Hr: '5.99'
      }, {
        name: 'Tether',
        marketCapUsd: '8794784370.34',
        priceUsd: '0.99',
        changePercent24Hr: '0.00'
      }]

      expect(result).toStrictEqual(expected)
    })

    test('sorts assets by price', () => {
      const state = {
        assets: {
          entities,
          sort: sortTypes.PRICE
        }
      }

      const result = getSortedAssets(state)

      const expected = [{
        name: 'Bitcoin',
        marketCapUsd: '175622242995.00',
        priceUsd: '9550.24',
        changePercent24Hr: '0.99'
      }, {
        name: 'Ethereum',
        marketCapUsd: '25936695642.43',
        priceUsd: '233.37',
        changePercent24Hr: '5.99'
      }, {
        name: 'Tether',
        marketCapUsd: '8794784370.34',
        priceUsd: '0.99',
        changePercent24Hr: '0.00'
      }]

      expect(result).toStrictEqual(expected)
    })

    test('sorts assets by market cap', () => {
      const state = {
        assets: {
          entities,
          sort: sortTypes.MARKET_CAP
        }
      }

      const result = getSortedAssets(state)

      const expected = [{
        name: 'Bitcoin',
        marketCapUsd: '175622242995.00',
        priceUsd: '9550.24',
        changePercent24Hr: '0.99'
      }, {
        name: 'Ethereum',
        marketCapUsd: '25936695642.43',
        priceUsd: '233.37',
        changePercent24Hr: '5.99'
      }, {
        name: 'Tether',
        marketCapUsd: '8794784370.34',
        priceUsd: '0.99',
        changePercent24Hr: '0.00'
      }]

      expect(result).toStrictEqual(expected)
    })

    test('sorts assets by 24 hour change', () => {
      const state = {
        assets: {
          entities,
          sort: sortTypes.CHANGE
        }
      }

      const result = getSortedAssets(state)

      const expected = [{
        name: 'Ethereum',
        marketCapUsd: '25936695642.43',
        priceUsd: '233.37',
        changePercent24Hr: '5.99'
      }, {
        name: 'Bitcoin',
        marketCapUsd: '175622242995.00',
        priceUsd: '9550.24',
        changePercent24Hr: '0.99'
      }, {
        name: 'Tether',
        marketCapUsd: '8794784370.34',
        priceUsd: '0.99',
        changePercent24Hr: '0.00'
      }]

      expect(result).toStrictEqual(expected)
    })
  })
})
