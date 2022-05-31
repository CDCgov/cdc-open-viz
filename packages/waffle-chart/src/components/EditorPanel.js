import React, { useState, useEffect, memo, useContext } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import ConfigContext from '../ConfigContext'

import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import InputText from '@cdc/core/components/inputs/InputText'
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox'

import '@cdc/core/styles/v2/components/editor.scss'

import { DATA_OPERATORS, DATA_FUNCTIONS } from '../CdcWaffleChart'

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
  const [ showConfigConfirm, setShowConfigConfirm ] = useState(false)

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

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig()

      setParentConfig(newConfig)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ config ])

  useEffect(()=> {
    if (!showConfigConfirm) {
      let newConfig = { ...config }
      delete newConfig.newViz
      updateConfig(newConfig)
    }
  }, [])

  useEffect(() => {
    //Verify comparate data type
    let operators = [ '<', '>', '<=', '>=' ]
    if (config.dataConditionalComparate !== '') {
      if (operators.indexOf(config.dataConditionalOperator) > -1 && isNaN(config.dataConditionalComparate)) {
        updateConfig({ ...config, invalidComparate: true })
      } else {
        if (config.invalidComparate) {
          updateConfig({ ...config, invalidComparate: false })
        }
      }
    } else {
      updateConfig({ ...config, invalidComparate: false })
    }
  }, [ config.dataConditionalOperator, config.dataConditionalComparate ])

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
          <button className="btn" style={{ margin: '1em auto' }} onClick={confirmDone}>I'm Done</button>
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

  const addNewFilter = () => {
    let filters = config.filters ? [ ...config.filters ] : []
    filters.push({ values: [] })
    updateConfig({ ...config, filters })
  }

  const removeFilter = (index) => {
    let filters = [ ...config.filters ]
    filters.splice(index, 1)
    updateConfig({ ...config, filters })
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [ ...config.filters ]
    filters[index][name] = value
    updateConfig({ ...config, filters })
  }

  const getColumns = (filter = true) => {
    let columns = {}

    data.map(row => Object.keys(row).forEach(columnName => columns[columnName] = true))

    return Object.keys(columns)
  }

  const getFilterColumnValues = (index) => {
    let filterDataOptions = []
    const filterColumnName = config.filters[index].columnName
    if (data && filterColumnName) {
      data.forEach(function (row) {
        if (undefined !== row[filterColumnName] && -1 === filterDataOptions.indexOf(row[filterColumnName])) {
          filterDataOptions.push(row[filterColumnName])
        }
      })
      filterDataOptions.sort()
    }
    return filterDataOptions
  }

  const editorContent = (

    <Accordion>
      <Accordion.Section title="General">
        <InputText value={config.title} fieldName="title" label="Title" placeholder="Waffle Chart Title"
                   updateField={updateField}/>
        <InputText type="textarea" value={config.content} fieldName="content" label="Message" updateField={updateField} tooltip={
          <Tooltip style={{textTransform: 'none'}}>
            <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
            <Tooltip.Content>
              <p>Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.</p>
            </Tooltip.Content>
          </Tooltip>
        }/>
        <InputText value={config.subtext} fieldName="subtext" label="Subtext/Citation"
                   placeholder="Waffle Chart Subtext or Citation" updateField={updateField} tooltip={
          <Tooltip style={{textTransform: 'none'}}>
            <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
            <Tooltip.Content>
              <p>Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.</p>
            </Tooltip.Content>
          </Tooltip>
        }/>
      </Accordion.Section>
      <Accordion.Section title="Data">
        <h4 style={{ fontWeight: '600' }}>Numerator</h4>
        <div className="cove-accordion__panel-section">
          <div className="cove-input-group">
            <InputSelect value={config.dataColumn || ''} fieldName="dataColumn" label="Data Column"
                         updateField={updateField} initial="Select" options={getColumns()}/>
          </div>

          <div className="cove-input-group">
            <InputSelect value={config.dataFunction || ''} fieldName="dataFunction" label="Data Function"
                         updateField={updateField} initial="Select" options={DATA_FUNCTIONS}/>
          </div>

          <div className="cove-input-group">
            <label><span className="edit-label">Data Conditional</span></label>
            <div className="cove-accordion__panel-row cove-accordion__small-inputs">
              <div className="cove-accordion__panel-col">
                <InputSelect value={config.dataConditionalColumn || ''} fieldName="dataConditionalColumn"
                             updateField={updateField} initial="Select" options={getColumns()}/>
              </div>
              <div className="cove-accordion__panel-col">
                <InputSelect value={config.dataConditionalOperator || ''} fieldName="dataConditionalOperator"
                             updateField={updateField} initial="Select" options={DATA_OPERATORS}/>
              </div>
              <div className="cove-accordion__panel-col">
                <InputText value={config.dataConditionalComparate} fieldName={'dataConditionalComparate'}
                           updateField={updateField}
                           className={config.invalidComparate ? 'cove-accordion__input-error' : ''}
                           style={{minHeight: '2rem'}}
                />
              </div>
            </div>
          </div>

          {config.invalidComparate &&
            <div className="cove-accordion__panel-error">
              Non-numerical comparate values can only be used with = or ≠.
            </div>
          }
        </div>
        <div className="cove-accordion__panel-row align-center">
          <div className="cove-accordion__panel-col">
            <h4 style={{ fontWeight: '600' }}>Denominator</h4>
          </div>
          <div className="cove-accordion__panel-col">
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <label className="cove-accordion__panel-label--inline">Select from data</label>
              <InputCheckbox size='small' value={config.customDenom} fieldName='customDenom' updateField={updateField}/>
            </div>
          </div>
        </div>
        <div className="cove-accordion__panel-section">
          {!config.customDenom &&
            <div className="cove-accordion__panel-row align-center">
              <div className="cove-accordion__panel-col">
                <InputText value={config.dataDenom} fieldName="dataDenom" updateField={updateField}/>
              </div>
              <div className="cove-accordion__panel-col" style={{display: 'flex', alignItems: 'center'}}>
                <label className="cove-accordion__panel-label--muted">default (100)</label>
              </div>
            </div>
          }
          {config.customDenom &&
            <>
              <InputSelect value={config.dataDenomColumn || ''} fieldName="dataDenomColumn" label="Data Column"
                           updateField={updateField} initial="Select" options={getColumns()}/>
              <InputSelect value={config.dataDenomFunction || ''} fieldName="dataDenomFunction" label="Data Function"
                           updateField={updateField} initial="Select" options={DATA_FUNCTIONS}/>
            </>
          }
        </div>
        <ul className="column-edit">
          <li className="three-col">
            <div style={{marginRight: '1rem'}}>
              <InputText value={config.prefix} fieldName="prefix" label="Prefix" updateField={updateField}/>
            </div>
            <div style={{marginRight: '1rem'}}>
              <InputText value={config.suffix} fieldName="suffix" label="Suffix" updateField={updateField}/>
            </div>
            <div>
              <InputText type="number" value={config.roundToPlace} fieldName="roundToPlace" label="Round" updateField={updateField}/>
            </div>
          </li>
        </ul>

        <hr className="cove-accordion__divider" />

        <label style={{marginBottom: '1rem'}}>
          <span className="edit-label">Data Point Filters</span>
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
            <Tooltip.Content>
              <p>To refine the highlighted data point, specify one or more filters (e.g., "Male" and
                "Female" for a column called "Sex").</p>
            </Tooltip.Content>
          </Tooltip>
        </label>
        {config.filters &&
          <ul className="filters-list" style={{paddingLeft: 0, marginBottom: '1rem'}}>
            {config.filters.map((filter, index) => (
              <fieldset className="edit-block" key={index}>
                <button type="button" className="remove-column" onClick={() => {
                  removeFilter(index)
                }}>Remove
                </button>
                <label>
                  <span className="edit-label column-heading">Column</span>
                  <select value={filter.columnName} onChange={(e) => {
                    updateFilterProp('columnName', index, e.target.value)
                  }}>
                    <option value="">- Select Option -</option>
                    {getColumns().map((dataKey, index) => (
                      <option value={dataKey} key={index}>{dataKey}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span className="edit-label column-heading">Column Value</span>
                  <select value={filter.columnValue} onChange={(e) => {
                    updateFilterProp('columnValue', index, e.target.value)
                  }}>
                    <option value="">- Select Option -</option>
                    {getFilterColumnValues(index).map((dataKey, index) => (
                      <option value={dataKey} key={index}>{dataKey}</option>
                    ))}
                  </select>
                </label>
              </fieldset>
            ))}
          </ul>
        }
        <Button onClick={addNewFilter} fluid>Add Filter</Button>
      </Accordion.Section>
      <Accordion.Section title="Visual">
        <InputSelect value={config.shape} fieldName="shape" label="Shape"
                     updateField={updateField} options={[ 'circle', 'square', 'person' ]}/>

        <div className="cove-accordion__panel-row cove-accordion__small-inputs" style={{marginTop: '1rem', marginBottom: '1rem'}}>
          <div className="cove-accordion__panel-col">
            <InputText type="number" value={config.nodeWidth} fieldName="nodeWidth" label="Width" updateField={updateField}/>
          </div>
          <div className="cove-accordion__panel-col">
            <InputText type="number" value={config.nodeSpacer} fieldName="nodeSpacer" label="Spacer" updateField={updateField}/>
          </div>
        </div>

        <div className="cove-input-group">
          <InputSelect value={config.orientation} fieldName="orientation" label="Layout"
                       updateField={updateField} options={[ 'horizontal', 'vertical' ]}/>
        </div>

        <div className="cove-input-group">
          <label><span className="edit-label column-heading">Data Point Font Size</span></label>
          <div className="cove-accordion__panel-row cove-accordion__small-inputs align-center">
            <div className="cove-accordion__panel-col">
              <InputText type="number" value={config.fontSize} fieldName="fontSize" updateField={updateField}/>
            </div>
            <div className="cove-accordion__panel-col" style={{display: 'flex', alignItems: 'center'}}>
              <label className="accordion__panel-label--muted">default (50px)</label>
            </div>
          </div>
        </div>

        <InputSelect value={config.overallFontSize} fieldName="overallFontSize" label="Overall Font Size"
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
      </Accordion.Section>
    </Accordion>
  )

  if (loading) return null

  return (
    <ErrorBoundary component="EditorPanel">
      <div className="cove-editor">
        {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error/>}
        {config.newViz && showConfigConfirm && <Confirm/>}
        <button className={`cove-editor--toggle` + (!displayPanel ? ` collapsed` : ``)}
                title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}/>
        <section className={`cove-editor__panel` + (displayPanel ? `` : ' hidden')}>
          <div className="cove-editor__panel-container">
            <h2 className="cove-editor__heading">Configure Waffle Chart</h2>
            <section className="cove-editor__content">
              {editorContent}
            </section>
          </div>
        </section>
        <div className="cove-editor__content">
          <div className="cove-editor__content-wrap">
            {props.children}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
})

export default EditorPanel
