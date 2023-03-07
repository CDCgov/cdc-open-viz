import React, { useEffect, useCallback, useRef } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Store
import useStore from '../../store/store'

// Components - Core
import Editor from '../editor/Editor'
import Overlay from '../ui/Overlay'

// Styles
import '../../styles/v2/main.scss'

const View = ({ editorPanels, isPreview, children }) => {
  // Store Selectors
  const { viewMode, setViewMode } = useStore()

  const winLocation = window.location.href

  useEffect(() => {
    if (winLocation.includes('editor=true')) setViewMode('isEditor', true)
    return () => {
    }
  }, [ winLocation, setViewMode ])

  const { isEditor, isDashboard, isWizard } = viewMode

  // Define the anchor ref to attach Overlay/Modals
  const overlayAnchor = useRef()

  const ReturnView = useCallback(() => {
      // Render the display of the component editor, based on the generated viewMode value in globalStore
      if (
        (isEditor && (!isDashboard && !isWizard)) || // If editor mode is enabled, but not in Dashboard or Wizard views
        (isEditor && isDashboard && !isPreview) || // If editor mode is enabled, and in Dashboard view, but not in preview mode
        isWizard // If in the Wizard view
      ) {
        return (
          <Editor editorPanels={editorPanels}>
            {children}
          </Editor>
        )
      }
      return <>{children}</>
    },
    [ isEditor, isDashboard, isWizard, isPreview ]
  )

  if (isDashboard || isWizard) return (
    <>
      <ReturnView/>
      <Overlay/>
    </>
  )
  return (
    <div className="cove" ref={overlayAnchor}>
      <ReturnView/>
      <Overlay/>
    </div>
  )
}

View.propTypes = {
  /** **[External]** Defined in the `globalStore` - Sets the Editor view mode for the component */
  'viewMode.isEditor': PropTypes.bool,
  /** **[External]** Defined in the `globalStore` - Sets the Dashboard view mode for the component */
  'viewMode.isDashboard': PropTypes.bool,
  /** **[External]** Defined in the `globalStore` - Sets the Dashboard's Preview view mode for the component */
  'viewMode.isPreview': PropTypes.bool,
  /** **[External]** Defined in the `globalStore` - Sets the Wizard view mode for the component */
  'viewMode.isWizard': PropTypes.bool,
  /** The React component export of the EditorPanels for the component */
  EditorPanels: PropTypes.func
}

export default View
