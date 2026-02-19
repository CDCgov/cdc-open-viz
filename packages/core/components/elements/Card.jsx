import React from 'react'

import '../../styles/components/card.css'

const Card = ({ children, className, ...attributes }) => {
  return (
    <div className={`cove-card${className ? ' ' + className : ''}`} {...attributes}>
      {children}
    </div>
  )
}

export default Card
