import styled from 'styled-components'
import { space } from 'styled-system'

const loadingStyles = `
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;
  @keyframes skeleton-loading {
    0% {
      background-position:100% 50%;
    }
    100% {
      background-position:0 50%;
    }
  }
`

const invertedLoadingStyles = `
  background-color: rgba(255,255,255,0.1);
`

const Circle = styled.div`
  display: inline-block;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
  ${({ invert }) => invert ? invertedLoadingStyles : loadingStyles}
  ${space}
`

const Text = styled.span`
  display: block;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  ${({ invert }) => invert ? invertedLoadingStyles : loadingStyles}
  ${space}
`

export {
  Circle,
  Text
}
