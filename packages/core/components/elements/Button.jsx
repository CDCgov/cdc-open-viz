import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../../styles/v2/components/button.scss'

const Button = ({ fluid = false, hoverStyle = {}, children, ...attributes }) => {
  const [ customStyles, setCustomStyles ] = useState({...attributes.style})

  let attributesObj = {
    ...attributes,
    className: 'cove-button' + (fluid ? ' fluid' : '') + (attributes.className ? ' ' + attributes.className : '')
  }

  const setStyles = (direction) => {
    return direction === 'in'
      ? setCustomStyles(style => ({...style, ...hoverStyle}))
      : direction === 'out'
        ? setCustomStyles({ ...attributes.style })
        : false
  }

  return (
    <button {...attributesObj}
            style={customStyles}
            onMouseOver={()=>setStyles('in')}
            onMouseOut={()=>setStyles('out')}>
      {children}
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
