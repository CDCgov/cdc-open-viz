import React from 'react'

import '../../styles/v2/components/button.scss'

const Button = ({ fullwidth, children, ...attributes }) => {

  let attributesObj = {
    ...attributes,
    className: 'cove-button' + (fullwidth ? ' full-width' : '') + (attributes.className ? ' ' + attributes.className : '')
  }

  return (
    <button {...attributesObj}>{children}</button>
  )
}

export default Button
