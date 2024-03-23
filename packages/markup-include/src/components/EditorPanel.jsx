import React, { useState, useEffect, memo, useContext } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Sidebar from '@cdc/core/components/Sidebar'

import ConfigContext from '../ConfigContext'

import Accordion from '@cdc/core/components/ui/Accordion'
import InputText from '@cdc/core/components/inputs/InputText'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import '@cdc/core/styles/v2/components/editor.scss'

const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

const EditorPanel = memo(props => {
  const { config, updateConfig, loading, data, setParentConfig, isDashboard } = useContext(ConfigContext)

  const [displayPanel, setDisplayPanel] = useState(true)
  const [showConfigConfirm, setShowConfigConfirm] = useState(false)

  const updateField = updateFieldFactory(config, updateConfig, true)

  const missingRequiredSections = () => {
    return false
  }

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig()

      setParentConfig(newConfig)
    }
  }, [config])

  useEffect(() => {
    if (!showConfigConfirm) {
      let newConfig = { ...config }
      delete newConfig.newViz
      updateConfig(newConfig)
    }
  }, [])

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)

    // if (isDashboard) {
    //   updateConfig({ ...config, editing: false })
    // } else {
    //   setDisplayPanel(!displayPanel)
    // }
  }

  const Error = () => {
    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  const Confirm = () => {
    const confirmDone = e => {
      e.preventDefault()
      let newConfig = { ...config }
      delete newConfig.newViz
      updateConfig(newConfig)
    }

    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display a preview of the markup.</p>
          <button className='btn' style={{ margin: '1em auto' }} onClick={confirmDone}>
            I'm Done
          </button>
        </section>
      </section>
    )
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    delete strippedState.newViz
    delete strippedState.runtime

    return strippedState
  }

  const CheckBox = memo(({ label, value, fieldName, section = null, subsection = null, tooltip, updateField, ...attributes }) => (
    <label className='checkbox'>
      <input
        type='checkbox'
        name={fieldName}
        checked={value}
        onChange={() => {
          updateField(section, subsection, fieldName, !value)
        }}
        {...attributes}
      />
      <span className='edit-label column-heading'>{label}</span>
      <span className='cove-icon'>{tooltip}</span>
    </label>
  ))

  const editorContent = (
    <Accordion>
      <Accordion.Section title='General'>
        <InputText value={config.title || ''} fieldName='title' label='Title' placeholder='Markup Include Title' updateField={updateField} />

        <InputText value={config.srcUrl || ''} fieldName='srcUrl' label='Source URL' placeholder='https://www.example.com/file.html' updateField={updateField} />
      </Accordion.Section>
      <Accordion.Section title='Visual'>
        <div className='input-group'>
          <label>Theme</label>
          <ul className='color-palette'>
            {headerColors.map(palette => (
              <li
                title={palette}
                key={palette}
                onClick={() => {
                  updateConfig({ ...config, theme: palette })
                }}
                className={config.theme === palette ? 'selected ' + palette : palette}
              ></li>
            ))}
          </ul>
        </div>

        <div className='cove-accordion__panel-section checkbox-group'>
          <CheckBox value={config.visual.border} section='visual' fieldName='border' label='Display Border' updateField={updateField} />
          <CheckBox value={config.visual.borderColorTheme} section='visual' fieldName='borderColorTheme' label='Use Border Color Theme' updateField={updateField} />
          <CheckBox value={config.visual.accent} section='visual' fieldName='accent' label='Use Accent Style' updateField={updateField} />
          <CheckBox value={config.visual.background} section='visual' fieldName='background' label='Use Theme Background Color' updateField={updateField} />
          <CheckBox value={config.visual.hideBackgroundColor} section='visual' fieldName='hideBackgroundColor' label='Hide Background Color' updateField={updateField} />
        </div>
      </Accordion.Section>
    </Accordion>
  )

  if (loading) return null

  return (
    <ErrorBoundary component='EditorPanel'>
      <div className='cove-editor'>
        {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
        {config.newViz && showConfigConfirm && <Confirm />}
        <section className={`cove-editor__panel` + (displayPanel ? `` : ' hidden')}>
          <Sidebar displayPanel={displayPanel} onBackClick={onBackClick} isDashboard={isDashboard} title='Configure Markup Include'>
            {editorContent}
          </Sidebar>
        </section>
        <div className='cove-editor__content'>
          <div className='cove-editor__content-wrap'>{props.children}</div>
        </div>
      </div>
    </ErrorBoundary>
  )
})

export default EditorPanel
