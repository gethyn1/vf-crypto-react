import styled from 'styled-components'

const Wrapper = styled.div`
  padding-right: ${({ theme }) => theme.space.large}px;
  padding-left:  ${({ theme }) => theme.space.large}px;
  margin-right: auto;
  margin-left:  auto;
  max-width: 1200px;
`

export {
  Wrapper
}
