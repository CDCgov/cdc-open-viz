import React from 'react'

import './Card.styles.scss'

const Card = ({ children, className, ...attributes }) => {
  return (
    <div className={`cove-card${className ? ' ' + className : ''}`} {...attributes}>
      {children}
    </div>
  )
}

export default Card
