import React, { useState, useEffect, useCallback, useRef } from 'react'

// Store
import useGlobalStore from '../../store/global/globalSlice'
import useConfigStore from '../../store/config/configSlice'

// Data
import { COVE_BREAKPOINTS as breakpoints } from '../../data/const'

// Helpers
import CoveHelper from '../../helpers/cove'

// Components - Local
import Button from '../element/Button'
import Icon from '../ui/Icon'
import SplashError from '../ui/SplashError'

// Styles
import '../../styles/v2/components/editor.scss'
import '../../styles/v2/components/element/editor-utils.scss'

const Editor = ({ editorPanels, children }) => {
  // Store Selectors
  const { os } = useGlobalStore()
  const { config, updateConfig, updateParentConfig } = useConfigStore()

  const [ displayPanel, setDisplayPanel ] = useState(true)
  const [ displayGrid, setDisplayGrid ] = useState(false)
  const [ viewportPreview, setViewportPreview ] = useState(null)
  const [ rotateAnimation, setRotateAnimation ] = useState(false)
  const [ showConfirm, setShowConfirm ] = useState(false)

  const [ previewDimensions, setPreviewDimensions ] = useState({})

  const resetIcon = useRef(null)
  const editorPanelRef = useRef(null)
  const componentContainerRef = useRef(null)

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    delete strippedState.newViz
    return strippedState
  }

  // If a subcomponent is being consumbed by Wizard or Dashboard, the update function
  // is received by the ConfigProxy and registered in the store.
  // The function is then used below when the config is updated.
  useEffect(() => {
    if (updateParentConfig) updateParentConfig(convertStateToConfig())
  }, [ updateParentConfig ])

  // Set and clean up the event listener for the hotkeys
  useEffect(() => {
    document.addEventListener('keydown', onKeypress)
    return () => document.removeEventListener('keydown', onKeypress)
  }, [])

  // Toggle the grid display with the viewport preview
  useEffect(() => {
    return viewportPreview ? setDisplayGrid(true) : setDisplayGrid(false)
  }, [ viewportPreview ])

  // If missing any required sections, enable the confirmation window,
  // and keep active until receiving confirmation.
  useEffect(() => {
    if (config.missingRequiredSections === true) setShowConfirm(true)
    if (config.missingRequiredSections === false && showConfirm === true) setShowConfirm(false)
  }, [ config.missingRequiredSections, showConfirm ])

  // If there is no longer a confirmation, update the component's config.
  useEffect(() => {
    if (showConfirm === false) updateConfig(convertStateToConfig())
  }, [ showConfirm ])

  const viewportPreviewController = useCallback((breakpoint) => {
    return setViewportPreview(prevState => prevState !== breakpoint ? breakpoint : null)
  }, [ viewportPreview ])

  const onKeypress = (key) => {
    if (key.code === 'Escape') setDisplayPanel(display => !display)

    const viewportCommandKey = os === 'MacOS' ? key.metaKey : key.altKey

    if (viewportCommandKey) {
      let keyIndex = key.key

      // Validates that the hotkey pressed is a number, and that
      // the number is within the range of the provided breakpoint list range.
      if (!isNaN(keyIndex)) {
        if (keyIndex <= breakpoints.length) {
          key.preventDefault()
          viewportPreviewController(breakpoints[keyIndex - 1])
        }
      }
    }

    if (!viewportCommandKey) {
      if (editorPanelRef.current && !editorPanelRef.current.contains(document.activeElement)) {
        if (key.code === 'KeyG') setDisplayGrid(display => !display)
        if (key.code === 'KeyR') resetPreview()
      }
    }
  }

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

  const Confirm = () => {
    const confirmDone = () => setShowConfirm(false)

    return (
      <section className="cove-splash__waiting">
        <section className="cove-splash__waiting__container">
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display the preview.</p>
          <Button className="mt-2 mx-auto" disabled={config.missingRequiredSections} onClick={() => confirmDone()}>I'm Done</Button>
        </section>
      </section>
    )
  }

  //Reset Viewport Preview
  const resetPreview = useCallback(() => {
    if (!rotateAnimation && resetIcon.current) {
      setViewportPreview(null)
      setRotateAnimation(true)
      setDisplayGrid(false)
      resetIcon.current.style.transition = 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)'
      resetIcon.current.style.transform = 'rotate(-360deg)'

      const timeoutShow = setTimeout(() => {
        setRotateAnimation(false)
        resetIcon.current.style.transition = null
        resetIcon.current.style.transform = 'rotate(0deg)'
        resetIcon.current.style.transform = null
      }, 400)

      return () => clearTimeout(timeoutShow)
    }
  }, [ rotateAnimation ])

  let view = <>{children}</>

  if (editorPanels) {
    view = (
      <div className={`cove-editor${displayPanel ? ' panel-shown' : ''}`}>
        <button className={`cove-editor__toggle` + (!displayPanel ? ` collapsed` : ``)}
                title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}/>
        <section className="cove-editor__panel" tabIndex={0} ref={editorPanelRef}>
          <h2 className="cove-editor__panel-heading" aria-level="2" role="heading">
            Configure {config.type ? CoveHelper.String.convertKebabToTitle(config.type) : 'Component'}
          </h2>
          <div className="cove-editor__panel-container">
            <section className="cove-editor__panel-config">
              {editorPanels}
            </section>
          </div>
        </section>
        <div className="cove-editor__content" data-grid={displayGrid || null}>
          {showConfirm && <Confirm/>}
          <div className="cove-editor__content-wrap--x" style={viewportPreview ? { maxWidth: viewportPreview + 'px', minWidth: 'unset' } : null}>
            <div className="cove-editor__content-wrap--y">
              <div className="cove-editor-utils__breakpoints--px">
                {displayGrid && displayPanel && <>
                  {Math.round(previewDimensions.width)}<span className="mx-1" style={{ fontSize: '0.675rem' }}>✕</span>{Math.round(previewDimensions.height)}
                </>}
              </div>
              <div className="cove-editor__grid-caret--top" ref={componentContainerRef}>
                <div className="cove-editor__grid-caret--bottom">
                  {undefined === config?.newViz && config?.runtime && config?.runtime?.editorErrorMessage &&
                    <SplashError title="Error With Configuration" message={config.runtime.editorErrorMessage}/>
                  }
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="cove-editor-utils__hotkeys">
            <div className="cove-editor-utils__hotkeys--left">
              <p className={displayPanel ? 'hotkey--active' : null}>Editor</p>
              <p className={displayGrid ? 'hotkey--active' : null}>Grid</p>
              <p className={rotateAnimation ? 'hotkey--active' : null}>Reset</p>
              <p className={viewportPreview ? 'hotkey--active' : null}>View</p>
            </div>
            <div className="cove-editor-utils__hotkeys--right">
              <p className={displayPanel ? 'hotkey--active' : null}>esc</p>
              <p className={displayGrid ? 'hotkey--active' : null}>G</p>
              <p className={rotateAnimation ? 'hotkey--active' : null}>R</p>
              <p className={viewportPreview ? 'hotkey--active' : null}>
                {os === 'MacOS' ? <Icon style={{ marginRight: '0.25rem' }} display="command" size={12}/> : 'Alt'} + {viewportPreview ? (breakpoints.indexOf(viewportPreview) + 1) : `[1 - ${breakpoints.length}]`}
              </p>
            </div>
          </div>
          <div className="cove-editor-utils__breakpoints">
            <ul className={`cove-editor-utils__breakpoints-list${viewportPreview ? ' has-active' : ''}`}>
              <li className="cove-editor-utils__breakpoints-item" onClick={() => {
                setDisplayGrid(display => !display)
              }}>
                <div className="cove-editor-utils__breakpoints-grid">
                  <Icon display="squareGrid"/>
                </div>
              </li>
              {breakpoints.map((breakpoint, index) => (
                <li className={`cove-editor-utils__breakpoints-item${viewportPreview === breakpoint ? ' active' : ''}`} onClick={() => viewportPreviewController(breakpoint)} key={index}>{breakpoint}px</li>
              ))}
              <li className="cove-editor-utils__breakpoints-item" onClick={() => {
                resetPreview()
              }}>
                <div className="cove-editor-utils__breakpoints-reset" ref={resetIcon}>
                  <Icon display="rotateLeft"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return view
}

export default Editor
