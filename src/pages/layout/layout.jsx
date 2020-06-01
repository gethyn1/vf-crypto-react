import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { rates } from '../../state'
import { Wrapper } from '../../components/wrapper'
import { TopBar } from './top-bar'
import { Page, BrandMark, Content } from './styles'

const { useEffect } = React

const shouldGetRates = meta => !meta.hasLoaded && !meta.isLoading && !meta.hasErrored

const Layout = ({ children, heading, invert }) => {
  const dispatch = useDispatch()
  const meta = useSelector(state => state.rates.meta)

  useEffect(() => {
    if (shouldGetRates(meta)) {
      dispatch(rates.actions.getRates())
    }
  }, [])

  return (
    <Page invert={invert}>
      <TopBar>
        {heading || <BrandMark>VF Crypto</BrandMark>}
      </TopBar>
      <Content>
        <Wrapper>
          {children}
        </Wrapper>
      </Content>
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.node,
  invert: PropTypes.bool
}

export {
  Layout
}
