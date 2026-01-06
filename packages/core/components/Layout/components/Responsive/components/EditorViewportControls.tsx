import React from 'react'
import Icon from '../../../../ui/Icon'

interface EditorViewportControlsProps {
  breakpoints: string[]
  viewportPreview: string | null
  resetIconRef: React.RefObject<HTMLDivElement>
  onViewportChange: (breakpoint: string) => void
  onGridToggle: () => void
  onReset: () => void
}

/**
 * Controls for viewport preview and grid overlay
 */
const EditorViewportControls: React.FC<EditorViewportControlsProps> = ({
  breakpoints,
  viewportPreview,
  resetIconRef,
  onViewportChange,
  onGridToggle,
  onReset
}) => {
  return (
    <div className='cove-editor-utils__breakpoints'>
      <ul className={`cove-editor-utils__breakpoints-list${viewportPreview ? ' has-active' : ''}`}>
        <button className='cove-editor-utils__breakpoints-item' onClick={onGridToggle}>
          <div className='cove-editor-utils__breakpoints-grid'>
            <Icon display='grid' />
          </div>
        </button>
        {breakpoints.map((breakpoint, index) => (
          <button
            className={`cove-editor-utils__breakpoints-item${viewportPreview === breakpoint ? ' active' : ''}`}
            onClick={() => onViewportChange(breakpoint)}
            key={index}
          >
            {breakpoint}px
          </button>
        ))}
        <button className='cove-editor-utils__breakpoints-item' onClick={onReset}>
          <div className='cove-editor-utils__breakpoints-reset' ref={resetIconRef}>
            <Icon display='rotateLeft' />
          </div>
        </button>
      </ul>
    </div>
  )
}

export default EditorViewportControls
