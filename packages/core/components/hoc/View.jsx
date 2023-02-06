import React from 'react'

import PropTypes from 'prop-types'

// Store
import { useGlobalStore } from '../../stores/globalStore'

// Components - Core
import Editor from '../editor/Editor'

// Styles
import '../../styles/v2/main.scss'

const View = ({ EditorPanels, children }) => {
  const { viewMode } = useGlobalStore()

  let view = <>No views match the provided view mode.</>

  switch (viewMode) {
    case 'component':
      view = children
      break
    case 'editor':
    case 'wizard':
      view = (
        <Editor EditorPanels={EditorPanels}>
          {children}
        </Editor>
      )
      break
    default:
      break
  }

  return view
}

View.propTypes = {
  /** **[External]** Retrieved from the `globalStore` - Defines the current view of the user, depending on the environment settings detected */
  viewMode: PropTypes.oneOf(['component', 'editor', 'wizard']),
  /** The React component export of the EditorPanels for the component */
  EditorPanels: PropTypes.func
}

export default View
