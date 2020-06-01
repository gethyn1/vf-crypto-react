import React from 'react'
import PropTypes from 'prop-types'
import { assetPropType, metaPropType, ratePropType } from '../../../prop-types'
import { FiatValue, CryptoValue } from '../../../components/monetary-value'
import { Text, Circle } from '../../../components/skeleton'
import { Root, Flex, FlexItem, Value, Rank, Heading, Badge } from './styles'

const Detail = ({ meta, asset, rate }) => {
  const { hasLoaded, hasErrored } = meta

  if (hasErrored) {
    return <p>There was an error loading the asset</p>
  }

  return (
    <Root>
      <Flex>
        <FlexItem>
          <Value>
            <Rank>
              <Heading>Rank</Heading>
              {hasLoaded ?
                <Badge>{asset.rank}</Badge> :
                <Circle invert size={40} ml={8} />}
            </Rank>
          </Value>
        </FlexItem>
        <FlexItem>
          <Value>
            <Heading>Market cap</Heading>
            {hasLoaded ?
              <FiatValue rate={rate} value={asset.marketCapUsd} size='large' /> :
              <Text invert width={200} height={24} />}
          </Value>
          <Value>
            <Heading>Circulating supply</Heading>
            {hasLoaded ?
              <CryptoValue value={asset.supply} symbol={asset.symbol} size='large' /> :
              <Text invert width={200} height={24} />}
          </Value>
        </FlexItem>
        <FlexItem>
          <Value>
            <Heading>24h volume</Heading>
            {hasLoaded ?
              <FiatValue rate={rate} value={asset.volumeUsd24Hr} size='large' /> :
              <Text invert width={200} height={24} />}
          </Value>
          <Value>
            <Heading>Total supply</Heading>
            {hasLoaded ?
              <CryptoValue value={asset.maxSupply} symbol={asset.symbol} size='large' /> :
              <Text invert width={200} height={24} />}
          </Value>
        </FlexItem>
      </Flex>
    </Root>
  )
}

Detail.propTypes = {
  assetId: PropTypes.string,
  getAsset: PropTypes.func,
  meta: metaPropType,
  asset: assetPropType,
  rate: ratePropType
}

export {
  Detail
}
