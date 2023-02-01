import React from 'react'

// Store
import { useGlobalStore } from '../stores/globalStore'

// Components - Core
import Editor from './editor/Editor'

// Styles
import '../styles/v2/main.scss'

const View = ({ EditorPanels, children }) => {
  const { viewMode } = useGlobalStore()

  let view = <>No views match the provided view mode.</>

  switch (viewMode) {
    case 'component':
      view = (
        <div className="cove">
          {children}
        </div>
      )
      break
    case 'editor':
      view = (
        <Editor EditorPanels={EditorPanels}>
          {children}
        </Editor>
      )
      break
    default:
      break
  }

  return (
    <div className="cove">
      {view}
    </div>
  )
}

export default View
