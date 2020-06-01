import styled from 'styled-components'
import { space } from 'styled-system'

const cellStyles = ({ theme }) => `
  border-top: 1px solid ${theme.colors.mystic};
  width: 25%;

  &:last-of-type {
    text-align: right;
  }
`

const Table = styled.table.attrs({ cellSpacing: 0 })`
  text-align: left;
  width: 100%;
`

const THead = styled.thead`
`

const TBody = styled.tbody`
`

const TR = styled.tr`
  cursor: pointer;

  &:hover {
    th,
    td {
      background-color: ${({ theme }) => theme.colors.mystic};
    }
  }
`

const TH = styled.th`
  ${cellStyles}
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  color: ${({ theme }) => theme.colors.cadetBlue};
  background-color: ${({ theme }) => theme.colors.mystic};
  cursor: pointer;
  padding: ${({ theme }) => theme.space.medium + 'px ' + theme.space.large + 'px'};
`

const TD = styled.td`
  ${cellStyles}
  padding: ${({ theme }) => theme.space.large}px;
  transition: background-color .05s ease-in-out;

  img {
    vertical-align: middle;
  }
`

const Rank = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.cadetBlue};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: 16px;
  ${space}
`

export {
  Table,
  THead,
  TBody,
  TR,
  TH,
  TD,
  Rank
}
