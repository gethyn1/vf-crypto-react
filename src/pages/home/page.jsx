import React from 'react'
import PropTypes from 'prop-types'
import { assetPropType, metaPropType, ratePropType } from '../../prop-types'
import { Layout } from '../layout'
import { AssetsTable } from './assets-table'

const { useEffect } = React

const HomePage = ({ getAssets, sortAssets, meta, assets, rate }) => {
  useEffect(() => {
    getAssets()
    const pollAssets = setInterval(getAssets, 60000)

    return () => {
      clearInterval(pollAssets)
    }
  }, [])

  return (
    <Layout>
      <AssetsTable
        assets={assets}
        meta={meta}
        sortAssets={sortAssets}
        rate={rate}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  getAssets: PropTypes.func,
  sortAssets: PropTypes.func,
  meta: metaPropType,
  assets: PropTypes.arrayOf(assetPropType),
  rate: ratePropType
}

export {
  HomePage
}
