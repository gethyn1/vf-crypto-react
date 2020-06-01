import React from 'react'
import PropTypes from 'prop-types'
import { ArrowLeft } from 'react-feather'
import { CircleLink } from './styles'
import { VisuallyHidden } from '../../../components/visually-hidden'

const BackLink = ({ path }) => (
  <CircleLink to={path}>
    <ArrowLeft size={20} />
    <VisuallyHidden>Back</VisuallyHidden>
  </CircleLink>
)

BackLink.propTypes = {
  path: PropTypes.string
}

export {
  BackLink
}
