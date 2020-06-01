import styled from 'styled-components'

export const Root = styled.div`
  color: ${({ theme }) => theme.colors.mystic};
  padding: ${({ theme }) => theme.space.xxlarge}px 0;
`

export const Flex = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

export const FlexItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`

export const Value = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xxlarge}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.cadetBlue};
  margin: 0 0 ${({ theme }) => theme.space.small}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Badge = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  background-color: rgba(0,0,0,0.1);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-left: ${({ theme }) => theme.space.medium}px;
`

export const Rank = styled.div`
  display: flex;
  align-items: center;
`
