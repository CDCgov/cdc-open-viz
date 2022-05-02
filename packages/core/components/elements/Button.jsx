import React from 'react'

import '../../styles/v2/components/button.scss'

const Button = ({children, ...attributes}) => {

  let attributesObj = {...attributes, className: 'cove-button ' + attributes.className }

  return (
    <button {...attributesObj}>{children}</button>
  )
}

export default Button
