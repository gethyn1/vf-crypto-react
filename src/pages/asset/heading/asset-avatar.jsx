import React from 'react'
import { assetPropType, metaPropType } from '../../../prop-types'
import { CryptoIcon } from '../../../components/crypto-icon'
import { Circle, Text } from '../../../components/skeleton'
import { Flex, Avatar, Title, Name, Symbol } from './styles'

const Skeleton = () => (
  <Flex width={160}>
    <Avatar>
      <Circle size={32} />
    </Avatar>
    <Title>
      <Text height={18} width={100} mb={8} />
      <Text height={10} width={40} />
    </Title>
  </Flex>
)

const AssetAvatar = ({ asset, meta }) => {
  if (!meta.hasLoaded) {
    return <Skeleton />
  }

  return (
    <Flex>
      <Avatar>
        <CryptoIcon symbol={asset.symbol} />
      </Avatar>
      <Title>
        <Name>{asset.name}</Name>
        <Symbol>{asset.symbol}</Symbol>
      </Title>
    </Flex>
  )
}

AssetAvatar.propTypes = {
  asset: assetPropType,
  meta: metaPropType
}

export {
  AssetAvatar
}
