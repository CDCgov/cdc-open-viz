import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

//Context
import { useConfigContext } from '../context/ConfigContext'

//Data
import { COVE_BREAKPOINTS as breakpoints } from '../data/const'

//Components
import Accordion from './ui/Accordion'
import Button from './elements/Button'
import Icon from './ui/Icon'

//Styles
import '../styles/v2/components/editor.scss'

const Editor = ({ EditorPanels, children }) => {
  const { config, configActions, missingRequiredSections } = useConfigContext()

  const [ displayPanel, setDisplayPanel ] = useState(true)
  const [ viewportPreview, setViewportPreview ] = useState(null)
  const [ rotateAnimation, setRotateAnimation ] = useState(false)

  const resetIcon = useRef(null)

  useEffect(() => {
    document.addEventListener('keydown', onKeypress)
    return () => document.removeEventListener('keydown', onKeypress)
  }, [])

  const onKeypress = (key) => {
    console.log(key.code)
  }

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

  //Animate reset button rotate
  const rotateResetButton = () => {
    console.log(resetIcon)
    if (!rotateAnimation && resetIcon.current) {
      setRotateAnimation(true)
      resetIcon.current.style.transition = 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)'
      resetIcon.current.style.transform = 'rotate(-360deg)'

      const timeoutShow = setTimeout(() => {
        setRotateAnimation(false)
        resetIcon.current.style.transition = null
        resetIcon.current.style.transform = 'rotate(0deg)'
        resetIcon.current.style.transform = null
      }, 800)

      return () => clearTimeout(timeoutShow)
    }
  }

  return (
    <div className={`cove-editor${displayPanel ? ' panel-shown' : ''}`}>
      {/* TODO: COVE Refactor - Change other component's config.newViz to check for undefined vs self? */}
      {config.newViz && <Confirm/>}
      <button className={`cove-editor__toggle` + (!displayPanel ? ` collapsed` : ``)}
              title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}/>
      <section className="cove-editor__panel">
        <div className="cove-editor__panel-container">
          {/* TODO: COVE Refactor - Change below headers to be imported component? */}
          <h2 className="cove-editor__panel-heading" aria-level="2" role="heading">Configure Chart</h2>
          <section className="cove-editor__panel-config">
            <Accordion>
              {EditorPanels().props.children.map((panel) => panel)}
            </Accordion>
          </section>
        </div>
      </section>
      <div className="cove-editor__content" data-grid={viewportPreview}>
        <div className="cove-editor__content-wrap--x" style={viewportPreview ? { maxWidth: viewportPreview + 'px', minWidth: 'unset' } : null}>
          <div className="cove-editor__content-wrap--y">
            {undefined === config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error/>}
            {children}
          </div>
        </div>
        <div className="cove-editor-utils__breakpoints">
          <ul className={`cove-editor-utils__breakpoints-list${viewportPreview ? ' has-active' : ''}`}>
            {breakpoints.map((breakpoint, index) => (
              <li className={`cove-editor-utils__breakpoints-item${viewportPreview === breakpoint ? ' active' : ''}`} onClick={() => setViewportPreview(breakpoint)} key={index}>{breakpoint}px</li>
            ))}
            <li className="cove-editor-utils__breakpoints-item" onClick={() => {
              rotateResetButton()
              setViewportPreview(null)
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
