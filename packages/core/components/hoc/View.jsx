import { useEffect, useRef } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Store
import { useGlobalStore } from '../../stores/globalStore'

// Components - Core
import Editor from '../editor/Editor'
import Overlay from '../ui/Overlay'
import RenderFallback from '../loader/RenderFallback'

// Styles
import '../../styles/v2/main.scss'

const View = ({ EditorPanels, isWizard, children }) => {
  const { viewMode, setViewMode } = useGlobalStore()

  const winLocation = window.location.href

  useEffect(() => {
    if (winLocation.includes('editor=true')) return setViewMode('editor')
    if (isWizard) return setViewMode('wizard') //Supplied by Wizard (previously named Editor)
    return () => {}
  }, [winLocation, isWizard, setViewMode])

  // Define the anchor ref to attach the Overlay/Modals to
  const coveAnchor = useRef()

  let view = <>No views match the provided view mode.</>

  // Render the display of the component based on the generated viewMode value in globalStore
  switch (viewMode) {
    case 'component':
      view = (
        <div className="cove" ref={coveAnchor}>
          {children}
          <Overlay/>
        </div>
      )
      break
    case 'editor':
      view = (
        <div className="cove" ref={coveAnchor}>
          <Editor EditorPanels={EditorPanels}>
            {children}
          </Editor>
          <Overlay/>
        </div>
      )
      break
    case 'wizard':
      view = (
        <>
          <Editor EditorPanels={EditorPanels}>
            {children}
          </Editor>
          <Overlay/>
        </>
      )
      break
    default:
      view = <RenderFallback/>
      break
  }

  return <>
    {view}
  </>
}

View.propTypes = {
  /** **[External]** Defined in the `globalStore` - Sets the current view of the user, depending on the environment settings detected */
  viewMode: PropTypes.oneOf([ 'component', 'editor', 'wizard' ]),
  /** The React component export of the EditorPanels for the component */
  EditorPanels: PropTypes.func
}

export default View
