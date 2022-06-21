import React, { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'

//Context
import { useGlobalContext } from '../context/GlobalContext'
import { useConfigContext } from '../context/ConfigContext'

//Data
import { COVE_BREAKPOINTS as breakpoints } from '../data/const'

//Components
import Accordion from './ui/Accordion'
import Button from './elements/Button'
import Icon from './ui/Icon'

//Styles
import '../styles/v2/components/editor.scss'
import '../styles/v2/components/element/editor-utils.scss'

const Editor = ({ EditorPanels, children }) => {
  const { os } = useGlobalContext()
  const { config, configActions, missingRequiredSections } = useConfigContext()

  const [ displayPanel, setDisplayPanel ] = useState(true)
  const [ displayGrid, setDisplayGrid ] = useState(false)
  const [ viewportPreview, setViewportPreview ] = useState(null)
  const [ rotateAnimation, setRotateAnimation ] = useState(false)

  const [ previewDimensions, setPreviewDimensions ] = useState({})

  const resetIcon = useRef(null)
  const editorPanelRef = useRef(null)

  useEffect(() => {
    document.addEventListener('keydown', onKeypress)
    return () => document.removeEventListener('keydown', onKeypress)
  }, [])

  useEffect(() => {
    viewportPreview ? setDisplayGrid(true) : setDisplayGrid(false)
  }, [ viewportPreview ])

  const viewportPreviewController = useCallback((breakpoint) => {
    setViewportPreview(prevState => prevState !== breakpoint ? breakpoint : null)
  }, [ viewportPreview ])

  const onKeypress = (key) => {
    if (key.code === 'Escape') setDisplayPanel(display => !display)

    if (!editorPanelRef.current.contains(document.activeElement)) {
      if (key.code === 'KeyG') setDisplayGrid(display => !display)
      if (key.code === 'KeyR') resetPreview()

      const viewportCommandKey = os === 'MacOS' ? key.metaKey : key.altKey

      if (viewportCommandKey) {
        key.preventDefault()
        const keyIndex = key.key - 1
        if (keyIndex <= breakpoints.length)
          viewportPreviewController(breakpoints[keyIndex])
      }
    }
  }

  //Create viewport size observer callback
  const outerContainerRef = useCallback(node => {
    //Observe changes to viewport size
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        let { width, height } = entry.contentRect
        setPreviewDimensions({width: width, height: height})
      }
    })

    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
  }

  const Error = () => {
    return (
      <section className="cove-splash__waiting">
        <section className="cove-splash__waiting__container">
          <h3 className="cove-heading--2 mb-1">Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  const Confirm = () => {
    const confirmDone = (e) => {
      e.preventDefault()
      let newConfig = { ...config }
      delete newConfig.newViz
      configActions.updateConfig(newConfig)
    }

    return (
      <section className="cove-splash__waiting">
        <section className="cove-splash__waiting__container">
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display the preview.</p>
          <Button className="mt-2 mx-auto" disabled={missingRequiredSections} onClick={confirmDone}>I'm Done</Button>
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

  return (
    <div className={`cove-editor${displayPanel ? ' panel-shown' : ''}`}>
      {/* TODO: COVE Refactor - Change other component's config.newViz to check for undefined vs self? */}
      {config.newViz && <Confirm/>}
      <button className={`cove-editor__toggle` + (!displayPanel ? ` collapsed` : ``)}
              title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}/>
      <section className="cove-editor__panel" tabIndex={0} ref={editorPanelRef}>
        <h2 className="cove-editor__panel-heading" aria-level="2" role="heading">Configure Chart</h2>
        <div className="cove-editor__panel-container">
          <section className="cove-editor__panel-config">
            <Accordion>
              {EditorPanels().props.children.map((panel) => panel)}
            </Accordion>
          </section>
        </div>
      </section>
      <div className="cove-editor__content" data-grid={displayGrid || null}>
        <div className="cove-editor__content-wrap--x" style={viewportPreview ? { maxWidth: viewportPreview + 'px', minWidth: 'unset' } : null}>
          <div className="cove-editor__content-wrap--y">
            <div className="cove-editor-utils__breakpoints--px">
              {displayGrid && displayPanel && <>
                {Math.round(previewDimensions.width)}<span className="mx-1" style={{ fontSize: '0.675rem' }}>✕</span>{Math.round(previewDimensions.height)}
              </>}
            </div>
            <div className="cove-editor__grid-caret--top" ref={outerContainerRef}>
              <div className="cove-editor__grid-caret--bottom">
                {undefined === config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error/>}
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
            {breakpoints.map((breakpoint, index) => (
              <li className={`cove-editor-utils__breakpoints-item${viewportPreview === breakpoint ? ' active' : ''}`} onClick={() => viewportPreviewController(breakpoint)} key={index}>{breakpoint}px</li>
            ))}
            <li className="cove-editor-utils__breakpoints-item" onClick={() => {
              resetPreview()
            }}>
              <div className="reset" ref={resetIcon}><Icon display="rotateLeft"/></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
