import React from 'react'

// Styles
import '../../styles/v2/components/element/card.scss'

const Card = ({children, className, ...attributes}) => {
  return (
    <div className={`cove-card${className ? ' ' + className : ''}`} {...attributes}>
      {children}
    </div>
  )
}

export default Card
