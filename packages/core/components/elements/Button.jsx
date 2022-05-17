import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LoadSpin from '../ui/LoadSpin'

import '../../styles/v2/components/button.scss'

const Button = ({
                  fluid = false,
                  hoverStyle = {},
                  loading = false,
                  flexCenter,
                  active = false,
                  children, ...attributes
                }) => {
  const [ customStyles, setCustomStyles ] = useState({ ...attributes.style })
  const [ isActive, setIsActive ] = useState()

  let attributesObj = {
    ...attributes,
    style: customStyles,
    className: 'cove-button' + (flexCenter ? ' cove-button--flex-center' : '') + (fluid ? ' fluid' : '') + (attributes.className ? ' ' + attributes.className : ''),
    onMouseOver: () => setStyles('in'),
    onMouseOut: () => setStyles('out'),
    onFocus: () => setStyles('in'),
    onBlur: () => setStyles('out')
  }

  const setStyles = (direction) => {
    return direction === 'in'
      ? setCustomStyles(style => ({ ...style, ...hoverStyle }))
      : direction === 'out'
        ? active ? null : setCustomStyles({ ...attributes.style })
        : false
  }

  return (
    <button {...attributesObj}>
      {loading ? <LoadSpin opacity={80} size={20}/> : children}
    </button>
  )
}

Button.propTypes = {
  /** Object containing styles to overwrite base styles on hover */
  hoverStyle: PropTypes.object,
  /** Enables button to stretch to the full width of the content */
  fluid: PropTypes.bool
}

export default Button
