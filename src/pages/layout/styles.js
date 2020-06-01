import styled from 'styled-components'

export const Page = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, invert }) => invert ? theme.colors.cloudBurst : 'inherit'};
`

export const Content = styled.div`
  flex: 1;
`

export const BrandMark = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.body};
  font-size: ${({ theme }) => theme.fontSizes.xlarge}px;
  color: ${({ theme }) => theme.colors.stormGrey};
  margin: 0;
`
