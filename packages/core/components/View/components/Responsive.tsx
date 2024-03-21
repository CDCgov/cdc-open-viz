import React, { useState, useRef, useEffect, useCallback } from 'react'
import './../styles/editor-utils.scss'
import './../styles/editor.scss'

import Icon from '../../ui/Icon'

const breakpoints = [
  '360', // xxs (mobile) 0 - 360
  '480', // xs
  '768', // sm
  '960', // md
  '1170', // lg
  '1280' // xl
]

const Responsive = ({ children, isEditor }) => {
  if (!isEditor) return children

  const [displayPanel, setDisplayPanel] = useState(true)
  const [displayGrid, setDisplayGrid] = useState(false)
  const [viewportPreview, setViewportPreview] = useState(null)
  const [rotateAnimation, setRotateAnimation] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [previewDimensions, setPreviewDimensions] = useState({})

  const resetIcon = useRef(null)
  const editorPanelRef = useRef(null)
  const componentContainerRef = useRef(null)

  // If a subcomponent is being consumbed by Wizard or Dashboard, the update function
  // is received by the ConfigProxy and registered in the store.
  // The function is then used below when the config is updated.
  /*useEffect(() => {
    if (updateParentConfig) updateParentConfig(convertStateToConfig())
  }, [ updateParentConfig ])*/

  // Set and clean up the event listener for the hotkeys
  useEffect(() => {
    document.addEventListener('keydown', onKeypress)
    return () => document.removeEventListener('keydown', onKeypress)
  }, [])

  // Toggle the grid display with the viewport preview
  useEffect(() => {
    return viewportPreview ? setDisplayGrid(true) : setDisplayGrid(false)
  }, [viewportPreview])

  // If missing any required sections, enable the confirmation window,
  // and keep active until receiving confirmation.
  // useEffect(() => {
  //   if (config.missingRequiredSections === true) setShowConfirm(true)
  //   if (config.missingRequiredSections === false && showConfirm === true) setShowConfirm(false)
  // }, [config.missingRequiredSections, showConfirm])

  // If there is no longer a confirmation, update the component's config.
  // useEffect(() => {
  //   if (showConfirm === false) updateVisConfig(convertStateToConfig())
  // }, [showConfirm])

  const viewportPreviewController = useCallback(
    breakpoint => {
      return setViewportPreview(prevState => (prevState !== breakpoint ? breakpoint : null))
    },
    [viewportPreview]
  )

  const onKeypress = key => {}

  // Observe and set editor component widths
  useEffect(() => {
    if (!componentContainerRef.current) return

    let resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        let { width, height } = entry.contentRect
        setPreviewDimensions({ width, height })
      }
    })

    resizeObserver.observe(componentContainerRef.current)

    return () => {
      if (!resizeObserver) return
      resizeObserver.disconnect()
      resizeObserver = null
    }
  }, [])

  const onBackClick = () => setDisplayPanel(!displayPanel)

  return (
    <div className='cove-editor__content' data-grid={displayGrid || null}>
      <div className='cove-editor__content-wrap--x' style={viewportPreview ? { maxWidth: viewportPreview + 'px', minWidth: 'unset' } : null}>
        <div className='cove-editor__content-wrap--y'>
          <div className='cove-editor-utils__breakpoints--px'>
            {displayGrid && displayPanel && (
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
            <div className='cove-editor__grid-caret--bottom'>
              {/* {undefined === config?.newViz && config?.runtime?.editorErrorMessage && config?.runtime?.editorErrorMessage.length > 0 &&
              <SplashError title="Error With Configuration" message={config.runtime.editorErrorMessage}/>
            } */}
              {children}
            </div>
          </div>
        </div>
      </div>
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
          <p className={viewportPreview ? 'hotkey--active' : null}></p>
        </div>
      </div>

      <div className='cove-editor-utils__breakpoints'>
        <ul className={`cove-editor-utils__breakpoints-list${viewportPreview ? ' has-active' : ''}`}>
          <li
            className='cove-editor-utils__breakpoints-item'
            onClick={() => {
              setDisplayGrid(display => !display)
            }}
          >
            <div className='cove-editor-utils__breakpoints-grid'>Grid</div>
          </li>
          {breakpoints.map((breakpoint, index) => (
            <li className={`cove-editor-utils__breakpoints-item${viewportPreview === breakpoint ? ' active' : ''}`} onClick={() => viewportPreviewController(breakpoint)} key={index}>
              {breakpoint}px
            </li>
          ))}
          <li
            className='cove-editor-utils__breakpoints-item'
            onClick={() => {
              // resetPreview()
            }}
          >
            <div className='cove-editor-utils__breakpoints-reset' ref={resetIcon}>
              {/* <Icon display='rotateLeft' /> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Responsive
