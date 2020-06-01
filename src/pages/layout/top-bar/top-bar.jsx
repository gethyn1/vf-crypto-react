import React from 'react'
import { PropTypes } from 'prop-types'
import { Wrapper } from '../../../components/wrapper'
import { Currency } from './currency'
import { Root, Flex } from './styles'

const TopBar = ({ children }) => {
  return (
    <Root>
      <Wrapper>
        <Flex>
          <div>
            {children}
          </div>
          <div>
            <Currency />
          </div>
        </Flex>
      </Wrapper>
    </Root>
  )
}

TopBar.propTypes = {
  children: PropTypes.node.isRequired
}

export {
  TopBar
}
