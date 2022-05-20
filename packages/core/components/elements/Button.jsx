import React from 'react'

import '../../styles/v2/components/button.scss'

const Button = ({fluid, children, onClick, className, ...attributes}) => {

  return (
    <button className={`cove-button${fluid ? ' fluid' : ''}${className ? className : ''}`} {...attributes} onClick={(e) => {e.preventDefault(); onClick();}}>{children}</button>
  )
}

export default Button
