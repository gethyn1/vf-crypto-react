import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { app } from '../../../state'
import { Select } from '../../../components/select'
import { ENABLED_FIAT_SYMBOLS } from '../../../lib/constants/enabled-fiat'

const { setCurrency } = app.actions

const Currency = () => {
  const dispatch = useDispatch()
  const activeCurrency = useSelector(state => state.app.currency)

  const handleCurrencyChange = (event) => {
    dispatch(setCurrency(event.target.value))
  }

  return (
    <Select onChange={handleCurrencyChange} value={activeCurrency || ENABLED_FIAT_SYMBOLS[0]}>
      {ENABLED_FIAT_SYMBOLS.map(symbol => (
        <option key={symbol} value={symbol}>{symbol}</option>
      ))}
    </Select>
  )
}

export {
  Currency
}
