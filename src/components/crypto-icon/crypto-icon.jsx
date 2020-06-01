import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const iconMap = {
  ada: require('./svg/ada.svg'),
  bch: require('./svg/bch.svg'),
  bnb: require('./svg/bnb.svg'),
  bsv: require('./svg/bsv.svg'),
  btc: require('./svg/btc.svg'),
  dash: require('./svg/dash.svg'),
  eos: require('./svg/eos.svg'),
  etc: require('./svg/etc.svg'),
  eth: require('./svg/eth.svg'),
  ht: require('./svg/ht.svg'),
  link: require('./svg/link.svg'),
  ltc: require('./svg/ltc.svg'),
  neo: require('./svg/neo.svg'),
  trx: require('./svg/trx.svg'),
  usd: require('./svg/usd.svg'),
  usdc: require('./svg/usdc.svg'),
  usdt: require('./svg/usdt.svg'),
  xlm: require('./svg/xlm.svg'),
  xmr: require('./svg/xmr.svg'),
  xrp: require('./svg/xrp.svg'),
  xtz: require('./svg/xtz.svg')
}

const Placeholder = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 32px;
`

const CryptoIcon = ({ symbol }) => {
  const icon = iconMap[symbol.toLowerCase()]

  return (
    <Placeholder>
      <img src={icon} alt={symbol} />
    </Placeholder>
  )
}

CryptoIcon.propTypes = {
  symbol: PropTypes.string
}

export {
  CryptoIcon
}
