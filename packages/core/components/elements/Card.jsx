import React from 'react'

import '../../styles/v2/components/card.scss'

const Card = ({ children, className, ...attributes }) => {
  return (
    <div className={`cove-card${className ? ' ' + className : ''}`} {...attributes}>
      {children}
    </div>
  )
}

export default Card
