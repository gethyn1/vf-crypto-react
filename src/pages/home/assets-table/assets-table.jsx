import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { assets as assetsState } from '../../../state'
import { assetPropType, metaPropType, ratePropType } from '../../../prop-types'
import { Table, THead, TBody, TR, TH, TD, Rank } from './styles'
import { CryptoIcon } from '../../../components/crypto-icon'
import { FiatValue } from '../../../components/monetary-value'
import { PercentageChange } from '../../../components/percentage-change'
import { Skeleton } from './skeleton'

const { selectors: { sortTypes: { CURRENCY, PRICE, MARKET_CAP, CHANGE } } } = assetsState

const AssetsTable = ({ meta, assets, sortAssets, rate }) => {
  const history = useHistory()
  const { isLoading, hasErrored } = meta

  const onSortAssets = (sortBy) => () => {
    sortAssets(sortBy)
  }

  const handleClick = (assetId) => () => {
    history.push(`/assets/${assetId}`)
  }

  if (isLoading) {
    return <Skeleton />
  }

  if (hasErrored) {
    return <p>There was an error loading assets</p>
  }

  return (
    <Table>
      <THead>
        <TR>
          <TH role="button" onClick={onSortAssets(CURRENCY)}>Cryptocurrency</TH>
          <TH role="button" onClick={onSortAssets(PRICE)}>Price</TH>
          <TH role="button" onClick={onSortAssets(MARKET_CAP)}>Market Cap</TH>
          <TH role="button" onClick={onSortAssets(CHANGE)}>24h Change</TH>
        </TR>
      </THead>
      <TBody>
        {assets.map((asset, i) => (
          <TR key={asset.id} role="button" onClick={handleClick(asset.id)}>
            <TD><Rank mr={4}>{i + 1}</Rank> <CryptoIcon symbol={asset.symbol} /> <span>{asset.name}</span></TD>
            <TD><FiatValue rate={rate} value={asset.priceUsd} size='large' /></TD>
            <TD><FiatValue rate={rate} value={asset.marketCapUsd} /></TD>
            <TD><PercentageChange value={asset.changePercent24Hr} /></TD>
          </TR>
        ))}
      </TBody>
    </Table>
  )
}

AssetsTable.propTypes = {
  sortAssets: PropTypes.func,
  meta: metaPropType,
  assets: PropTypes.arrayOf(assetPropType),
  rate: ratePropType
}

export {
  AssetsTable
}
