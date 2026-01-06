import React from 'react'
import Icon from '../../../../ui/Icon'

interface EditorHotkeysProps {
  displayPanel: boolean
  displayGrid: boolean
  rotateAnimation: boolean
  viewportPreview: string | null
  breakpoints: string[]
  os: 'Win' | 'MacOS' | null
}

/**
 * Displays keyboard shortcut hints in the editor
 */
const EditorHotkeys: React.FC<EditorHotkeysProps> = ({
  displayPanel,
  displayGrid,
  rotateAnimation,
  viewportPreview,
  breakpoints,
  os
}) => {
  return (
    <div className='cove-editor-utils__hotkeys'>
      <div className='cove-editor-utils__hotkeys--left'>
        <p className={displayPanel ? 'hotkey--active' : null}>Editor</p>
        <p className={displayGrid ? 'hotkey--active' : null}>Grid</p>
        <p className={rotateAnimation ? 'hotkey--active' : null}>Reset</p>
        <p className={viewportPreview ? 'hotkey--active' : null}>View</p>
      </div>
      <div className='cove-editor-utils__hotkeys--right'>
        <p className={displayPanel ? 'hotkey--active' : null}>esc</p>
        <p className={displayGrid ? 'hotkey--active' : null}>G</p>
        <p className={rotateAnimation ? 'hotkey--active' : null}>R</p>
        <p className={viewportPreview ? 'hotkey--active' : null}>
          {os === 'MacOS' ? <Icon style={{ marginRight: '0.25rem' }} display='command' size={12} /> : 'Alt'} +{' '}
          {viewportPreview ? breakpoints.indexOf(viewportPreview) + 1 : `[1 - ${breakpoints.length}]`}
        </p>
      </div>
    </div>
  )
}

export default EditorHotkeys
