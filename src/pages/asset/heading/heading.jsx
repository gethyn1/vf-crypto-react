import React from 'react'
import { assetPropType, metaPropType, ratePropType } from '../../../prop-types'
import { BackLink } from './back-link'
import { AssetAvatar } from './asset-avatar'
import { FiatValue } from '../../../components/monetary-value'
import { Text } from '../../../components/skeleton'
import { Flex, FlexItem } from './styles'

const Heading = ({ asset, meta, rate }) => {
  return (
    <Flex>
      <FlexItem>
        <BackLink path="/" />
      </FlexItem>
      <FlexItem>
        <AssetAvatar asset={asset} meta={meta} />
      </FlexItem>
      <FlexItem>
        {meta.hasLoaded ?
          <FiatValue rate={rate} value={asset.priceUsd} size='large' /> :
          <Text width={100} height={20} />}
      </FlexItem>
    </Flex>
  )
}

Heading.propTypes = {
  meta: metaPropType,
  asset: assetPropType,
  rate: ratePropType
}

export {
  Heading
}
