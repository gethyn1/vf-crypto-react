import React from 'react'
import PropTypes from 'prop-types'
import { assetPropType, metaPropType, ratePropType } from '../../prop-types'
import { Layout } from '../layout'
import { Heading } from './heading'
import { Detail } from './detail'

const { useEffect } = React

const AssetPage = ({ getAsset, meta, asset, assetId, rate }) => {
  useEffect(() => {
    getAsset(assetId)
  }, [])

  return (
    <Layout invert heading={<Heading asset={asset} meta={meta} rate={rate} />}>
      <Detail meta={meta} asset={asset} rate={rate} />
    </Layout>
  )
}

AssetPage.propTypes = {
  assetId: PropTypes.string,
  getAsset: PropTypes.func,
  meta: metaPropType,
  asset: assetPropType,
  rate: ratePropType
}

export {
  AssetPage
}
