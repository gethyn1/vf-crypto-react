import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { ratePropType } from '../../prop-types'
import { adjustPriceForRate, getSymbolForRate, formatPrice } from '../../lib/formatters/price'

const Root = styled.span`
  font-size: ${({ theme, size }) => theme.fontSizes[size]}px;
`

const Symbol = styled.span`
  color: ${({ theme }) => theme.colors.cadetBlue};
  margin-right: ${({ theme }) => theme.space.medium}px;
`

const Value = styled.span`
  margin-right: ${({ theme }) => theme.space.medium}px;
`

const CryptoSymbol = styled.span`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  color: ${({ theme }) => theme.colors.deYork};
`

const FiatValue = ({ rate, value, size = 'medium' }) => {
  const symbol = getSymbolForRate(rate.symbol)
  const adjustedValue = adjustPriceForRate(value, rate.rateUsd)

  return (
    <Root size={size}>
      <Symbol>{symbol}</Symbol>
      <Value>{adjustedValue}</Value>
    </Root>
  )
}

FiatValue.propTypes = {
  rate: ratePropType,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

const CryptoValue = ({ symbol, value, size = 'medium' }) => (
  <Root size={size}>
    <Value>{formatPrice(value || 0)}</Value>
    <CryptoSymbol>{symbol}</CryptoSymbol>
  </Root>
)

CryptoValue.propTypes = {
  symbol: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export {
  FiatValue,
  CryptoValue
}
