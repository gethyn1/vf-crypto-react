import styled from 'styled-components'

export const Root = styled.div`
  background: #fff;
  padding: ${({ theme }) => theme.space.large}px 0;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`
