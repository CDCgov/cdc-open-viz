import React, { useState, useEffect, memo, useContext } from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion'

import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import InputText from '@cdc/core/components/input/InputText'
import InputSelect from '@cdc/core/components/input/InputSelect'


const headerColors = [ 'theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber' ]

const EditorPanel = memo((props) => {
  const {
    config,
    updateConfig,
    loading,
    data,
    setParentConfig,
    isDashboard
  } = useContext(ConfigContext)

  const [ displayPanel, setDisplayPanel ] = useState(true)

  const updateField = (section, subsection, fieldName, newValue) => {
    // Top level
    if (null === section && null === subsection) {
      let updatedConfig = { ...config, [fieldName]: newValue }

      if ('filterColumn' === fieldName) {
        updatedConfig.filterValue = ''
      }

      updateConfig(updatedConfig)
      return
    }

    const isArray = Array.isArray(config[section])

    let sectionValue = isArray ? [ ...config[section], newValue ] : { ...config[section], [fieldName]: newValue }

    if (null !== subsection) {
      if (isArray) {
        sectionValue = [ ...config[section] ]
        sectionValue[subsection] = { ...sectionValue[subsection], [fieldName]: newValue }
      } else if (typeof newValue === 'string') {
        sectionValue[subsection] = newValue
      } else {
        sectionValue = { ...config[section], [subsection]: { ...config[section][subsection], [fieldName]: newValue } }
      }
    }

    let updatedConfig = { ...config, [section]: sectionValue }

    updateConfig(updatedConfig)
  }

  const missingRequiredSections = () => {
    return false
  }

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig()

      setParentConfig(newConfig)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ config ])

  const onBackClick = () => {
    if (isDashboard) {
      updateConfig({ ...config, editing: false })
    } else {
      setDisplayPanel(!displayPanel)
    }
  }

  const Error = () => {
    return (
      <section className="waiting">
        <section className="waiting-container">
          <h3>Error With Configuration</h3>
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
      updateConfig(newConfig)
    }

    return (
      <section className="waiting">
        <section className="waiting-container">
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display a preview of the chart.</p>
          <button className="btn" style={{ margin: '1em auto' }} disabled={missingRequiredSections()}
                  onClick={confirmDone}>I'm Done
          </button>
        </section>
      </section>
    )
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    if (false === missingRequiredSections()) {
      delete strippedState.newViz
    }
    delete strippedState.runtime

    return strippedState
  }

  if (loading) {
    return null
  }

  return (
    <ErrorBoundary component="EditorPanel">
      <>
        <div className="cove-editor">
          <button className={`cove-editor--toggle` + (!displayPanel ? ` collapsed` : ``)}
                  title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}/>
          {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error/>}
          {config.newViz && <Confirm/>}
          <section className={`cove-editor__panel` + (displayPanel ? `` : ' hidden')}>
            <div className="cove-editor__panel-container">
              <h2 className="cove-editor__heading">Configure Markup Include</h2>
              <section className="form-container">
                <form>
                  <Accordion allowZeroExpanded={true}>
                    <AccordionItem> {/* General */}
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          General
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <InputText value={config.title} fieldName="title" label="Title" placeholder="Waffle Chart Title"
                                   updateField={updateField}/>
                        <InputText type="textarea" value={config.content} fieldName="content" label="Message"
                                   updateField={updateField}/>
                        <InputText value={config.subtext} fieldName="subtext" label="Subtext/Citation"
                                   placeholder="Waffle Chart Subtext or Citation" updateField={updateField}/>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Visual
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <InputSelect value={config.shape} fieldName="shape" label="Shape"
                                     updateField={updateField} options={[ 'circle', 'square', 'person' ]}/>

                        <div className="accordion__panel-row accordion__small-inputs" style={{ marginTop: '1em' }}>
                          <div className="accordion__panel-col">
                            <InputText type="number" value={config.nodeWidth} fieldName="nodeWidth" label="Width"
                                       updateField={updateField}/>
                          </div>
                          <div className="accordion__panel-col">
                            <InputText type="number" value={config.nodeSpacer} fieldName="nodeSpacer" label="Spacer"
                                       updateField={updateField}/>
                          </div>
                        </div>

                        <InputSelect value={config.orientation} fieldName="orientation" label="Layout"
                                     updateField={updateField} options={[ 'horizontal', 'vertical' ]}/>

                        <label><span className="edit-label column-heading">Data Point Font Size</span></label>
                        <div className="accordion__panel-row accordion__small-inputs align-center">
                          <div className="accordion__panel-col">
                            <InputText type="number" value={config.fontSize} fieldName="fontSize"
                                       updateField={updateField}/>
                          </div>
                          <div className="accordion__panel-col">
                            <label className={'accordion__panel-label--muted'}>default (50px)</label>
                          </div>
                        </div>

                        <InputSelect value={config.overallFontSize} fieldName="overallFontSize"
                                     label="Overall Font Size"
                                     updateField={updateField} options={[ 'small', 'medium', 'large' ]}/>

                        <label className="header">
                          <span className="edit-label">Theme</span>
                          <ul className="color-palette">
                            {headerColors.map((palette) => (
                              <li title={palette} key={palette} onClick={() => {
                                updateConfig({ ...config, theme: palette })
                              }} className={config.theme === palette ? 'selected ' + palette : palette}>
                              </li>
                            ))}
                          </ul>
                        </label>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </form>
              </section>
            </div>
          </section>
          <div className="cove-editor__content">
            <div className="cove-editor__content-wrap">
              {props.children}
            </div>
          </div>
        </div>
      </>
    </ErrorBoundary>
  )
})

export default EditorPanel
