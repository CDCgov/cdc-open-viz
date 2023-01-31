import React from 'react'

// Styles
import '../../styles/components/element/card.scss'

const Card = ({children, className, ...attributes}) => {
  return (
    <div className={`cove-card${className ? ' ' + className : ''}`} {...attributes}>
      {children}
    </div>
  )
}

export default Card
