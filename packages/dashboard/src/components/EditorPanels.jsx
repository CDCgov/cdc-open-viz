import React, { useState, useEffect, memo, useContext } from 'react'
import ReactTooltip from 'react-tooltip'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { useDebounce } from 'use-debounce'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import QuestionIcon from '@cdc/core/assets/icon-question-circle.svg'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import ConfigContext from '../ConfigContext'

const Helper = ({ text }) => {
  return (
    <span className='tooltip helper' data-tip={text}>
      <QuestionIcon />
    </span>
  )
}

// IE11 Custom Event polyfill
;(function () {
  if (typeof window.CustomEvent === 'function') return false

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null }
    var evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }

  window.CustomEvent = CustomEvent
})()

const TextField = memo(({ label, section = null, subsection = null, fieldName, updateField, value: stateValue, tooltip, type = 'input', i = null, min = null, ...attributes }) => {
  const [value, setValue] = useState(stateValue)

  const [debouncedValue] = useDebounce(value, 500)

  useEffect(() => {
    if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [debouncedValue])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const onChange = e => {
    if ('number' !== type || min === null) {
      setValue(e.target.value)
    } else {
      if (!e.target.value || min <= parseFloat(e.target.value)) {
        setValue(e.target.value)
      } else {
        setValue(min.toString())
      }
    }
  }

  let formElement = <input type='text' name={name} onChange={onChange} {...attributes} value={value} />

  if ('textarea' === type) {
    formElement = <textarea name={name} onChange={onChange} {...attributes} value={value}></textarea>
  }

  if ('number' === type) {
    formElement = <input type='number' name={name} onChange={onChange} {...attributes} value={value} />
  }

  return (
    <label>
      <span className='edit-label column-heading'>
        {label}
        {tooltip}
      </span>
      {formElement}
    </label>
  )
})

const CheckBox = memo(({ label, value, fieldName, section = null, subsection = null, updateField, ...attributes }) => (
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
    <span className='edit-label'>{label}</span>
    {section === 'table' && fieldName === 'show' && <Helper text=' Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.' />}
  </label>
))

const Select = memo(({ label, value, options, fieldName, section = null, subsection = null, required = false, updateField, initial: initialValue, ...attributes }) => {
  let optionsJsx = options.map(optionName => (
    <option value={optionName} key={optionName}>
      {optionName}
    </option>
  ))

  if (initialValue) {
    optionsJsx.unshift(
      <option value='' key='initial'>
        {initialValue}
      </option>
    )
  }

  return (
    <label>
      <span className='edit-label'>{label}</span>
      <select
        className={required && !value ? 'warning' : ''}
        name={fieldName}
        value={value}
        onChange={event => {
          updateField(section, subsection, fieldName, event.target.value)
        }}
        {...attributes}
      >
        {optionsJsx}
      </select>
    </label>
  )
})

const EditorPanels = memo(() => {
  const { config, updateConfig, loading, rawData, setParentConfig, setEditing } = useContext(ConfigContext)

  const enforceRestrictions = updatedConfig => {
    // TODO
  }

  const updateField = (section, subsection, fieldName, newValue) => {
    // Top level
    if (null === section && null === subsection) {
      let dashboardConfig = config.dashboard

      dashboardConfig[fieldName] = newValue

      let updatedConfig = { ...config, dashboard: dashboardConfig }

      enforceRestrictions(updatedConfig)

      updateConfig(updatedConfig)
      return
    }

    const isArray = Array.isArray(config[section])

    let sectionValue = isArray ? [...config[section], newValue] : { ...config[section], [fieldName]: newValue }

    if (null !== subsection) {
      if (isArray) {
        sectionValue = [...config[section]]
        sectionValue[subsection] = { ...sectionValue[subsection], [fieldName]: newValue }
      } else if (typeof newValue === 'string') {
        sectionValue[subsection] = newValue
      } else {
        sectionValue = { ...config[section], [subsection]: { ...config[section][subsection], [fieldName]: newValue } }
      }
    }

    let updatedConfig = { ...config, [section]: sectionValue }

    enforceRestrictions(updatedConfig)

    updateConfig(updatedConfig)
  }

  const missingRequiredSections = () => {
    //TODO

    return false
  }

  const [displayPanel, setDisplayPanel] = useState(true)

  // Used to pipe a JSON version of the config you are creating out
  const [configData, setConfigData] = useState({})

  if (loading) {
    return null
  }

  const getColumns = (filter = true) => {
    let columns = {}

    rawData.map(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    if (filter) {
      Object.keys(columns).forEach(key => {
        if ((config.series && config.series.filter(series => series.dataKey === key).length > 0) || (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key))) {
          delete columns[key]
        }
      })
    }

    return Object.keys(columns)
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

  const convertStateToConfig = (type = 'JSON') => {
    let strippedState = JSON.parse(JSON.stringify(config))
    if (false === missingRequiredSections()) {
      delete strippedState.newViz
    }
    delete strippedState.runtime

    if (type === 'JSON') {
      return JSON.stringify(strippedState)
    }

    return strippedState
  }

  useEffect(() => {
    const parsedData = convertStateToConfig()

    const formattedData = JSON.stringify(JSON.parse(parsedData), undefined, 2)

    setConfigData(formattedData)

    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData })

    window.dispatchEvent(event)

    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig('object')
      setParentConfig(newConfig)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  const removeFilter = index => {
    let dashboardConfig = config.dashboard

    dashboardConfig.filters.splice(index, 1)

    updateConfig({ ...config, dashboard: dashboardConfig })
  }

  const updateFilterProp = (name, index, value) => {
    let dashboardConfig = config.dashboard

    dashboardConfig.filters[index][name] = value

    updateConfig({ ...config, dashboard: dashboardConfig })
  }

  const addNewFilter = () => {
    let dashboardConfig = config.dashboard

    dashboardConfig.filters = dashboardConfig.filters || []

    dashboardConfig.filters.push({ values: [] })

    updateConfig({ ...config, dashboard: dashboardConfig })
  }

  return (
    <ErrorBoundary component='EditorPanel'>
      {config.runtime && config.runtime.editorErrorMessage && <Error />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={() => setDisplayPanel(!displayPanel)}></button>
      <section className={displayPanel ? 'editor-panel cove' : 'hidden editor-panel cove'}>
        <div className='heading-2'>Configure</div>
        <section className='form-container'>
          <form>
            <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                {' '}
                {/* General */}
                <AccordionItemHeading>
                  <AccordionItemButton>General</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <TextField value={config.dashboard.title} section='dashboard' fieldName='title' label='Title' updateField={updateField} />

                  <TextField
                    value={'Super Title'}
                    updateField={updateField}
                    section='general'
                    fieldName='superTitle'
                    label='Super Title'
                    placeholder='Super Title'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Super Title</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <TextField
                    type='textarea'
                    value={'Intro Text'}
                    updateField={updateField}
                    section='general'
                    fieldName='introText'
                    label='Intro Text'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Intro Text</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <TextField
                    type='textarea'
                    value={config.dashboard.description}
                    section='dashboard'
                    fieldName='description'
                    label='Description'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <TextField
                    type='textarea'
                    value={'Foootnotes'}
                    updateField={updateField}
                    section='general'
                    fieldName='footnotes'
                    label='Footnotes'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Footnotes</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Filters</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul className='filters-list'>
                    {config.dashboard.filters &&
                      config.dashboard.filters.map((filter, index) => (
                        <fieldset className='edit-block' key={filter.columnName + index}>
                          <button
                            type='button'
                            className='remove-column'
                            onClick={() => {
                              removeFilter(index)
                            }}
                          >
                            Remove
                          </button>
                          <label>
                            <span className='edit-label column-heading'>Filter</span>
                            <select
                              value={filter.columnName}
                              onChange={e => {
                                updateFilterProp('columnName', index, e.target.value)
                              }}
                            >
                              <option value=''>- Select Option -</option>
                              {getColumns().map(dataKey => (
                                <option value={dataKey} key={dataKey}>
                                  {dataKey}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label>
                            <span className='edit-label column-heading'>Label</span>
                            <input
                              type='text'
                              value={filter.label}
                              onChange={e => {
                                updateFilterProp('label', index, e.target.value)
                              }}
                            />
                          </label>
                        </fieldset>
                      ))}
                  </ul>

                  <button type='button' onClick={addNewFilter} className='btn btn-primary'>
                    Add Filter
                  </button>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Data Table</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <CheckBox value={config.table.show} section='table' fieldName='show' label='Show Table' updateField={updateField} />
                  <CheckBox value={config.table.expanded} section='table' fieldName='expanded' label='Expanded by Default' updateField={updateField} />
                  <CheckBox value={config.table.download} section='table' fieldName='download' label='Display Download Button' updateField={updateField} />
                  <TextField value={config.table.label} section='table' fieldName='label' label='Label' updateField={updateField} />
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </form>
        </section>
        <ReactTooltip html={true} multiline={true} className='helper-tooltip' />
      </section>
    </ErrorBoundary>
  )
})

export default EditorPanels
