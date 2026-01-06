import React, { useState, useRef, useEffect, useCallback } from 'react'
import './Responsive.styles.scss'

// Sub-components
import { EditorHotkeys, EditorViewportControls, EditorGridOverlay } from './Responsive/components'

// Hooks
import { useEditorKeyboard, useDimensionTracking } from './Responsive/hooks'

const breakpoints = [
  '360', // xxs (mobile) 0 - 360
  '480', // xs
  '768', // sm
  '960', // md
  '1170', // lg
  '1280' // xl
]

const os =
  navigator.userAgent.indexOf('Win') !== -1 ? 'Win' : navigator.userAgent.indexOf('Mac') !== -1 ? 'MacOS' : null

const Responsive = ({ children, isEditor }) => {
  // State
  const [displayPanel, setDisplayPanel] = useState(false)
  const [displayGrid, setDisplayGrid] = useState(false)
  const [viewportPreview, setViewportPreview] = useState(null)
  const [rotateAnimation, setRotateAnimation] = useState(false)
  const [previewDimensions, setPreviewDimensions] = useState<{ width: number; height: number }>(null)

  // Refs
  const resetIconRef = useRef(null)
  const componentContainerRef = useRef(null)

  // Viewport preview controller
  const viewportPreviewController = useCallback(
    breakpoint => {
      return setViewportPreview(prevState => (prevState !== breakpoint ? breakpoint : null))
    },
    [viewportPreview]
  )

  // Reset viewport preview with animation
  const resetPreview = useCallback(() => {
    if (!rotateAnimation && resetIconRef.current) {
      setViewportPreview(null)
      setRotateAnimation(true)
      setDisplayGrid(false)
      resetIconRef.current.style.transition = 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)'
      resetIconRef.current.style.transform = 'rotate(-360deg)'

      const timeoutShow = setTimeout(() => {
        setRotateAnimation(false)
        resetIconRef.current.style.transition = null
        resetIconRef.current.style.transform = 'rotate(0deg)'
        resetIconRef.current.style.transform = null
      }, 400)

      return () => clearTimeout(timeoutShow)
    }
  }, [rotateAnimation])

  // Toggle grid overlay handlers
  const handleGridToggle = useCallback(() => {
    setDisplayGrid(display => !display)
  }, [])

  // Custom hooks for keyboard shortcuts and dimension tracking
  useEditorKeyboard({
    isEditor,
    breakpoints,
    os,
    setDisplayPanel,
    setDisplayGrid,
    viewportPreviewController,
    resetPreview
  })

  useDimensionTracking({
    containerRef: componentContainerRef,
    setPreviewDimensions
  })

  // Toggle the grid display with the viewport preview
  useEffect(() => {
    return viewportPreview ? setDisplayGrid(true) : setDisplayGrid(false)
  }, [viewportPreview])

  // Early return if not in editor mode or panel not displayed
  if (!isEditor || !displayPanel) return children

  return (
    <div className='cove-editor__content' data-grid={displayGrid || null}>
      <EditorGridOverlay
        displayGrid={displayGrid}
        displayPanel={displayPanel}
        viewportPreview={viewportPreview}
        previewDimensions={previewDimensions}
        componentContainerRef={componentContainerRef}
      >
        {children}
      </EditorGridOverlay>

      <EditorHotkeys
        displayPanel={displayPanel}
        displayGrid={displayGrid}
        rotateAnimation={rotateAnimation}
        viewportPreview={viewportPreview}
        breakpoints={breakpoints}
        os={os}
      />

      <EditorViewportControls
        breakpoints={breakpoints}
        viewportPreview={viewportPreview}
        resetIconRef={resetIconRef}
        onViewportChange={viewportPreviewController}
        onGridToggle={handleGridToggle}
        onReset={resetPreview}
      />
    </div>
  )
}

export default Responsive
