import React from 'react'

import '../../styles/v2/components/element/ghost.scss'

const GhostEditor = () => (
  <div className="cove-ghost__editor">
  </div>
)

const GhostComponent = () => (
  <div className="cove-ghost__component">
    <div className="cove-ghost__component__header"></div>
    <div className="cove-ghost__component__content"></div>
  </div>
)

const Ghost = ({ display }) => {
  switch (display) {
    case 'editor':
      return <GhostEditor/>
    case 'component':
      return <GhostComponent/>
    default:
      return null
  }
}

export default Ghost
