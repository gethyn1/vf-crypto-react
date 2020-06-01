import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { ArrowUp, ArrowDown } from 'react-feather'

const Percentage = styled.span`
  color: ${({ theme, isNegative }) => isNegative ? theme.colors.amaranth : theme.colors.deYork};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const PercentageChange = ({ value }) => {
  const isNegative = value < 0
  const Icon = isNegative ? ArrowDown : ArrowUp

  return (
    <Percentage isNegative={isNegative}>
      {parseFloat(value, 10).toFixed(2)}%
      <Icon size={10} strokeWidth={3} />
    </Percentage>
  )
}

PercentageChange.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export {
  PercentageChange
}
