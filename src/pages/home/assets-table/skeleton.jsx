import React from 'react'
import { Text } from '../../../components/skeleton'
import { Table, THead, TBody, TR, TH, TD } from './styles'

const Skeleton = () => {
  const items = new Array(10).fill('')

  return (
    <Table>
      <THead>
        <TR>
          <TH>Cryptocurrency</TH>
          <TH>Price</TH>
          <TH>Market Cap</TH>
          <TH>24h Change</TH>
        </TR>
      </THead>
      <TBody>
        {items.map((v, i) => (
          <TR key={i} data-testid="assets-table/loading-row">
            <TD><Text width={80} height={18} ml={8} /></TD>
            <TD><Text width={80} height={32} /></TD>
            <TD><Text width={140} height={18} /></TD>
            <TD><Text width={46} height={12} /></TD>
          </TR>
        ))}
      </TBody>
    </Table>
  )
}

export {
  Skeleton
}
