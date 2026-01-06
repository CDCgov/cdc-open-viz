import React, { ReactNode } from 'react'

interface EditorGridOverlayProps {
  children: ReactNode
  displayGrid: boolean
  displayPanel: boolean
  viewportPreview: string | null
  previewDimensions: { width: number; height: number } | null
  componentContainerRef: React.RefObject<HTMLDivElement>
}

/**
 * Grid overlay and dimension display for editor viewport preview
 */
const EditorGridOverlay: React.FC<EditorGridOverlayProps> = ({
  children,
  displayGrid,
  displayPanel,
  viewportPreview,
  previewDimensions,
  componentContainerRef
}) => {
  return (
    <div
      className='cove-editor__content-wrap--x'
      style={viewportPreview ? { maxWidth: viewportPreview + 'px', minWidth: 'unset' } : null}
    >
      <div className='cove-editor__content-wrap--y'>
        <div className='cove-editor-utils__breakpoints--px'>
          {displayGrid && displayPanel && previewDimensions && (
            <>
              {Math.round(previewDimensions.width)}
              <span className='mx-1' style={{ fontSize: '0.675rem' }}>
                ✕
              </span>
              {Math.round(previewDimensions.height)}
            </>
          )}
        </div>
        <div className='cove-editor__grid-caret--top' ref={componentContainerRef}>
          <div className='cove-editor__grid-caret--bottom'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default EditorGridOverlay
