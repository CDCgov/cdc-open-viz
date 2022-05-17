import React from 'react'

const InputGroup = ({children, ...attributes}) => {

  return (
    <div className={`cove-input-group${attributes.className ? ' ' + attributes.className : ''}`} {...attributes}>
      {children}
    </div>
  )
}

export default InputGroup
