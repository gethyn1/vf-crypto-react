import styled from 'styled-components'
import { darken } from 'polished'
import { layout } from 'styled-system'
import { Link } from 'react-router-dom'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  ${layout}
`

export const FlexItem = styled.div`
  margin-right: ${({ theme }) => theme.space.xlarge}px;
`

export const Avatar = styled.div`
  margin-right: ${({ theme }) => theme.space.medium}px;
`

export const Title = styled.div`
`

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  font-weight: ${({ theme }) => theme.fontWeights.body};
  margin: 0;
`

export const Symbol = styled.span`
  color: ${({ theme }) => theme.colors.cadetBlue};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const CircleLink = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.mystic};
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  line-height: 30px;
  text-align: center;
  transition: all .05s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.mystic)};
    color: #fff;
  }

  > svg {
    vertical-align: middle;
  }
`

