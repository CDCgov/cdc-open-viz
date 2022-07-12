import React from 'react'

import '../../styles/v2/components/element/ghost.scss'

const GhostEditor = () => (
  <div className="cove-ghost__editor">
    <div className="cove-ghost__editor__panel">
      <div className="cove-ghost__editor__panel-heading">&nbsp;</div>
      <ul className="cove-ghost__editor__list">
        <li className="cove-ghost__editor__list-item">&nbsp;</li>
        <li className="cove-ghost__editor__list-item">&nbsp;</li>
        <li className="cove-ghost__editor__list-item">&nbsp;</li>
        <li className="cove-ghost__editor__list-item">&nbsp;</li>
        <li className="cove-ghost__editor__list-item">&nbsp;</li>
        <li className="cove-ghost__editor__list-item">&nbsp;</li>
        <li className="cove-ghost__editor__list-item">&nbsp;</li>
        <li className="cove-ghost__editor__list-item">&nbsp;</li>
      </ul>
    </div>
    <div className="cove-ghost__editor__content">
      <GhostComponent display="component"/>
    </div>
  </div>
)

const GhostComponent = () => (
  <div className="cove-ghost__component">
    <div className="cove-ghost__component__container">
      <div className="cove-ghost__component__header"></div>
      <div className="cove-ghost__component__content"></div>
    </div>
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
