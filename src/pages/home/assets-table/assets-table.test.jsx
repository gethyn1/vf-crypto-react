import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme'
import { AssetsTable } from './assets-table'

const ASSETS = [{
  id: '1',
  name: 'Tether',
  marketCapUsd: '8794784370.34',
  priceUsd: '0.99',
  changePercent24Hr: '0.00',
  symbol: 'USDT'
}, {
  id: '2',
  name: 'Ethereum',
  marketCapUsd: '25936695642.43',
  priceUsd: '233.37',
  changePercent24Hr: '5.99',
  symbol: 'ETH'
}, {
  id: '3',
  name: 'Bitcoin',
  marketCapUsd: '175622242995.00',
  priceUsd: '9550.24',
  changePercent24Hr: '0.99',
  symbol: 'BTC'
}]

const RATE = {
  id: 'british-pound-sterling',
  symbol: 'GBP',
  rateUsd: '1.2343499851260828'
}

const META = {
  isLoading: false,
  hasLoaded: false,
  hasErrored: false
}

describe('<AssetsTable />', () => {
  test('Renders loading state', async () => {
    const meta = { ...META, isLoading: true }
    const sortAssets = jest.fn

    const { queryAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <AssetsTable assets={[]} meta={meta} sortAssets={sortAssets} rate={RATE} />
      </ThemeProvider>
    )

    expect(queryAllByTestId('assets-table/loading-row').length).toBe(10)
  })

  test('Renders error state', async () => {
    const meta = { ...META, hasErrored: true }
    const sortAssets = jest.fn

    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <AssetsTable assets={[]} meta={meta} sortAssets={sortAssets} rate={RATE} />
      </ThemeProvider>
    )

    expect(queryByText('There was an error loading assets')).toBeInTheDocument()
  })

  test('Renders all assets', async () => {
    const meta = { ...META, hasLoaded: true }
    const sortAssets = jest.fn

    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <AssetsTable assets={ASSETS} meta={meta} sortAssets={sortAssets} rate={RATE} />
      </ThemeProvider>
    )

    const expected = [{
      name: 'Tether',
      price: '0.80',
      marketCap: '7,125,032,994.14'
    }, {
      name: 'Ethereum',
      price: '189.06',
      marketCap: '21,012,432,417.85'
    }, {
      name: 'Bitcoin',
      price: '7,737.06',
      marketCap: '142,279,130,806.70'
    }]

    expected.map(asset => {
      expect(queryByText(asset.name)).toBeInTheDocument()
      expect(queryByText(asset.price)).toBeInTheDocument()
      expect(queryByText(asset.marketCap)).toBeInTheDocument()
    })
  })
})
