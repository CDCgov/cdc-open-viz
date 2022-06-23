import React from 'react'

import '../../styles/v2/components/element/ghost.scss'

const GhostComponent = () => {
  return (
    <div className="cove-ghost__component">
      <div className="cove-ghost__component__header"></div>
      <div className="cove-ghost__component__content"></div>
    </div>
  )
}

const Ghost = ({ display }) => {
  switch (display) {
    case 'component':
      return <GhostComponent/>
    default:
      return null
  }
}

export default Ghost
