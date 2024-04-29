import React, { memo, useContext, useEffect, useState } from 'react'

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

import { useDebounce } from 'use-debounce'
import Context from '../context'
import WarningImage from '@cdc/core/assets/icon-warning-circle.svg'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { BITE_LOCATIONS, DATA_FUNCTIONS, IMAGE_POSITIONS, DATA_OPERATORS } from '../CdcDataBite'
import Layout from '@cdc/core/components/Layout'

const TextField = memo(({ label, section = null, subsection = null, fieldName, updateField, value: stateValue, tooltip, type = 'input', i = null, min = null, max = null, ...attributes }) => {
  const [value, setValue] = useState(stateValue)

  const [debouncedValue] = useDebounce(value, 500)

  useEffect(() => {
    if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [debouncedValue, section, subsection, fieldName, i, stateValue, updateField])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const onChange = e => {
    //TODO: This block gives a warning/error in the console, but it still works.
    if ('number' !== type || min === null) {
      setValue(e.target.value)
    } else {
      if (!e.target.value || (parseFloat(min) <= parseFloat(e.target.value)) & (parseFloat(max) >= parseFloat(e.target.value))) {
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
    <>
      {label && label.length > 0 && (
        <label>
          <span className='edit-label column-heading'>
            {label}
            {tooltip}
          </span>
          {formElement}
        </label>
      )}
      {(!label || label.length === 0) && formElement}
    </>
  )
})

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

const Select = memo(({ label, value, options, fieldName, section = null, subsection = null, required = false, updateField, initial: initialValue, ...attributes }) => {
  let optionsJsx = ''
  if (Array.isArray(options)) {
    //Handle basic array
    optionsJsx = options.map(optionName => (
      <option value={optionName} key={optionName}>
        {optionName}
      </option>
    ))
  } else {
    //Handle object with value/name pairs
    optionsJsx = []
    for (const [optionValue, optionName] of Object.entries(options)) {
      optionsJsx.push(
        <option value={optionValue} key={optionValue}>
          {optionName}
        </option>
      )
    }
  }

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

const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

const EditorPanel = memo(() => {
  const { config, updateConfig, loading, data, setParentConfig, isDashboard, isEditor } = useContext(Context)

  const [displayPanel, setDisplayPanel] = useState(true)

  const updateField = updateFieldFactory(config, updateConfig, true)

  const missingRequiredSections = () => {
    //Whether to show error message if something is required to show a data-bite and isn't filled in
    return false
  }

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig()
      delete newConfig.newViz

      setParentConfig(newConfig)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
    updateConfig({
      ...config,
      showEditorPanel: !displayPanel
    })
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    //if(false === missingRequiredSections()) {
    //strippedState.newViz
    //}
    delete strippedState.runtime

    return strippedState
  }

  // Filters -----------------------------------------------
  const removeFilter = index => {
    let filters = [...config.filters]

    filters.splice(index, 1)

    updateConfig({ ...config, filters })
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [...config.filters]

    filters[index][name] = value

    updateConfig({ ...config, filters })
  }

  const addNewFilter = () => {
    let filters = config.filters ? [...config.filters] : []

    filters.push({ values: [] })

    updateConfig({ ...config, filters })
  }

  const getColumns = (filter = true) => {
    let columns = {}
    if (data.length) {
      data.map(row => {
        return Object.keys(row).forEach(columnName => (columns[columnName] = true))
      })
    }

    return Object.keys(columns)
  }

  const getFilterColumnValues = index => {
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

  // Dynamic Images ----------------------------------------
  const updateDynamicImage = (name, index, subindex = null, value) => {
    let imageOptions = [...config.imageData.options]
    null === subindex ? (imageOptions[index][name] = value) : (imageOptions[index].arguments[subindex][name] = value)

    let payload = { ...config.imageData, options: imageOptions }
    updateConfig({ ...config, imageData: payload })
  }

  const setDynamicArgument = (optionIndex, name, value) => {
    let imageArguments = [...config.imageData.options[optionIndex].arguments]
    imageArguments[1] = { ...imageArguments[1], [name]: value }
    let argumentsPayload = { ...config.imageData.options[optionIndex], arguments: imageArguments }
    let optionsPayload = [...config.imageData.options]
    optionsPayload[optionIndex] = argumentsPayload
    let payload = { ...config.imageData, options: optionsPayload }
    updateConfig({ ...config, imageData: payload })
  }

  const removeDynamicArgument = optionIndex => {
    if (config.imageData.options[optionIndex].arguments.length > 1) {
      let imageArguments = [...config.imageData.options[optionIndex].arguments]
      imageArguments.pop()
      let argumentsPayload = { ...config.imageData.options[optionIndex], arguments: imageArguments }
      let optionsPayload = [...config.imageData.options]
      optionsPayload[optionIndex] = argumentsPayload
      let payload = { ...config.imageData, options: optionsPayload }
      updateConfig({ ...config, imageData: payload })
    }
  }

  const addDynamicImage = () => {
    let imageOptions = config.imageData.options ? [...config.imageData.options] : []
    imageOptions.push({ source: '', arguments: [{ operator: '', threshold: '' }], alt: '', secondArgument: false })

    let payload = { ...config.imageData, options: imageOptions }
    updateConfig({ ...config, imageData: payload })
  }

  const removeDynamicImage = index => {
    let imageOptions = [...config.imageData.options]
    imageOptions.splice(index, 1)

    let payload = { ...config.imageData, options: imageOptions }
    updateConfig({ ...config, imageData: payload })
  }

  // General -----------------------------------------------
  if (loading) {
    return null
  }

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar isEditor={true} config={config} title='Configure Data Bites' onBackClick={onBackClick} displayPanel={displayPanel}>
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
                  <Select value={config.biteStyle} fieldName='biteStyle' label='Data Bite Style' updateField={updateField} options={BITE_LOCATIONS} initial='Select' />
                  <TextField value={config.title} fieldName='title' label='Title' placeholder='Data Bite Title' updateField={updateField} />

                  <TextField
                    type='textarea'
                    value={config.biteBody}
                    fieldName='biteBody'
                    label='Message'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField
                    value={config.subtext}
                    fieldName='subtext'
                    label='Subtext/Citation'
                    placeholder='Data Bite Subtext or Citation'
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
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                {' '}
                {/*Data*/}
                <AccordionItemHeading>
                  <AccordionItemButton>Data {(!config.dataColumn || !config.dataFunction) && <WarningImage width='25' className='warning-icon' />}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul className='column-edit'>
                    <li className='two-col'>
                      <Select value={config.dataColumn || ''} fieldName='dataColumn' label='Data Column' updateField={updateField} initial='Select' required={true} options={getColumns()} />
                      <Select value={config.dataFunction || ''} fieldName='dataFunction' label='Data Function' updateField={updateField} initial='Select' required={true} options={DATA_FUNCTIONS} />
                    </li>
                  </ul>
                  <span className='divider-heading'>Number Formatting</span>
                  <ul className='column-edit'>
                    <li className='three-col'>
                      <TextField value={config.dataFormat.prefix} section='dataFormat' fieldName='prefix' label='Prefix' updateField={updateField} />
                      <TextField value={config.dataFormat.suffix} section='dataFormat' fieldName='suffix' label='Suffix' updateField={updateField} />
                      <TextField type='number' value={config.dataFormat.roundToPlace} section='dataFormat' fieldName='roundToPlace' label='Round' updateField={updateField} min='0' max='99' />
                    </li>
                  </ul>
                  <CheckBox value={config.dataFormat.commas} section='dataFormat' fieldName='commas' label='Add commas' updateField={updateField} />
                  <CheckBox value={config.dataFormat.ignoreZeros} section='dataFormat' fieldName='ignoreZeros' label='Ignore Zeros' updateField={updateField} />
                  <hr className='accordion__divider' />

                  <label style={{ marginBottom: '1rem' }}>
                    <span className='edit-label'>
                      Data Point Filters
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").</p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                  </label>
                  {config.filters && (
                    <ul className='filters-list'>
                      {config.filters.map((filter, index) => (
                        <fieldset className='edit-block' key={index}>
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
                            <span className='edit-label column-heading'>Column</span>
                            <select
                              value={filter.columnName ? filter.columnName : ''}
                              onChange={e => {
                                updateFilterProp('columnName', index, e.target.value)
                              }}
                            >
                              <option value=''>- Select Option -</option>
                              {getColumns().map((dataKey, index) => (
                                <option value={dataKey} key={index}>
                                  {dataKey}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label>
                            <span className='edit-label column-heading'>Column Value</span>
                            <select
                              value={filter.columnValue}
                              onChange={e => {
                                updateFilterProp('columnValue', index, e.target.value)
                              }}
                            >
                              <option value=''>- Select Option -</option>
                              {getFilterColumnValues(index).map((dataKey, index) => (
                                <option value={dataKey} key={index}>
                                  {dataKey}
                                </option>
                              ))}
                            </select>
                          </label>
                        </fieldset>
                      ))}
                    </ul>
                  )}
                  {(!config.filters || config.filters.length === 0) && (
                    <div>
                      <fieldset className='edit-block'>
                        <p style={{ textAlign: 'center' }}>There are currently no filters.</p>
                      </fieldset>
                    </div>
                  )}
                  <button type='button' onClick={addNewFilter} className='btn full-width'>
                    Add Filter
                  </button>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                {' '}
                {/*Visual*/}
                <AccordionItemHeading>
                  <AccordionItemButton>Visual</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <TextField type='number' value={config.biteFontSize} fieldName='biteFontSize' label='Bite Font Size' updateField={updateField} min='17' max='65' />
                  <Select value={config.fontSize} fieldName='fontSize' label='Overall Font Size' updateField={updateField} options={['small', 'medium', 'large']} />
                  <div className='checkbox-group'>
                    <CheckBox value={config.visual?.border} section='visual' fieldName='border' label='Display Border' updateField={updateField} />
                    <CheckBox value={config.visual?.borderColorTheme} section='visual' fieldName='borderColorTheme' label='Use Border Color Theme' updateField={updateField} />
                    <CheckBox value={config.visual?.accent} section='visual' fieldName='accent' label='Use Accent Style' updateField={updateField} />
                    <CheckBox value={config.visual?.background} section='visual' fieldName='background' label='Use Theme Background Color' updateField={updateField} />
                    <CheckBox value={config.visual?.hideBackgroundColor} section='visual' fieldName='hideBackgroundColor' label='Hide Background Color' updateField={updateField} />
                  </div>
                  <label>
                    <span className='edit-label'>Theme</span>
                    <ul className='color-palette'>
                      {headerColors.map(palette => (
                        <li
                          title={palette}
                          key={palette}
                          onClick={() => {
                            updateConfig({ ...config, theme: palette })
                          }}
                          className={config.theme === palette ? 'selected ' + palette : palette}
                        />
                      ))}
                    </ul>
                  </label>
                </AccordionItemPanel>
              </AccordionItem>

              {['title', 'body', 'graphic'].includes(config.biteStyle) && (
                <AccordionItem>
                  {' '}
                  {/*Image & Dynamic Images*/}
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Image
                      {['dynamic'].includes(config.imageData.display) && 's'}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Select value={config.imageData.display || ''} section='imageData' fieldName='display' label='Image Display Type' updateField={updateField} options={['none', 'static', 'dynamic']} />
                    <Select value={config.bitePosition || ''} fieldName='bitePosition' label='Image/Graphic Position' updateField={updateField} initial='Select' options={IMAGE_POSITIONS} />
                    {['static'].includes(config.imageData.display) && (
                      <>
                        <TextField value={config.imageData.url} section='imageData' fieldName='url' label='Image URL' updateField={updateField} />
                        <TextField value={config.imageData.alt} section='imageData' fieldName='alt' label='Alt Text' updateField={updateField} />
                      </>
                    )}

                    {['dynamic'].includes(config.imageData.display) && (
                      <>
                        <TextField value={config.imageData.url || ''} section='imageData' fieldName='url' label='Image URL (default)' updateField={updateField} />
                        <TextField value={config.imageData.alt} section='imageData' fieldName='alt' label='Alt Text (default)' updateField={updateField} />

                        <hr className='accordion__divider' />

                        {(!config.imageData.options || config.imageData.options.length === 0) && <p style={{ textAlign: 'center' }}>There are currently no dynamic images.</p>}
                        {config.imageData.options && config.imageData.options.length > 0 && (
                          <>
                            <ul>
                              {config.imageData.options.map((option, index) => (
                                <fieldset className='edit-block' key={index}>
                                  <button
                                    type='button'
                                    className='remove-column'
                                    onClick={() => {
                                      removeDynamicImage(index)
                                    }}
                                  >
                                    Remove
                                  </button>
                                  <label>
                                    <span className='edit-label column-heading'>
                                      <strong>{'Image #' + (index + 1)}</strong>
                                    </span>

                                    <div className='accordion__panel-row align-center'>
                                      <div className='accordion__panel-col flex-auto'>If Value</div>
                                      <div className='accordion__panel-col flex-auto'>
                                        <select
                                          value={option.arguments[0]?.operator || ''}
                                          onChange={e => {
                                            updateDynamicImage('operator', index, 0, e.target.value)
                                          }}
                                        >
                                          <option value='' disabled />
                                          {DATA_OPERATORS.map((operator, index) => (
                                            <option value={operator} key={index}>
                                              {operator}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                      <div className='accordion__panel-col flex-grow flex-shrink'>
                                        <input
                                          type='number'
                                          value={option.arguments[0]?.threshold || ''}
                                          onChange={e => {
                                            updateDynamicImage('threshold', index, 0, e.target.value)
                                          }}
                                        />
                                      </div>
                                    </div>

                                    <div className='accordion__panel-row mb-2 align-center'>
                                      <div className='accordion__panel-col flex-grow'>
                                        <select
                                          className='border-dashed text-center'
                                          value={option.secondArgument ? 'and' : 'then'}
                                          onChange={e => {
                                            if ('then' === e.target.value) {
                                              updateDynamicImage('secondArgument', index, null, false)
                                              removeDynamicArgument(index)
                                            }
                                            if ('and' === e.target.value) {
                                              updateDynamicImage('secondArgument', index, null, true)
                                            }
                                          }}
                                        >
                                          <option value={'then'}>Then</option>
                                          <option value={'and'}>And</option>
                                        </select>
                                      </div>
                                    </div>

                                    {option.secondArgument && true === option.secondArgument && (
                                      <>
                                        <div className='accordion__panel-row align-center'>
                                          <div className='accordion__panel-col flex-auto'>If Value</div>
                                          <div className='accordion__panel-col flex-auto'>
                                            <select
                                              value={option.arguments[1]?.operator || ''}
                                              onChange={e => {
                                                setDynamicArgument(index, 'operator', e.target.value)
                                              }}
                                            >
                                              <option value='' disabled />
                                              {DATA_OPERATORS.map((operator, index) => (
                                                <option value={operator} key={index}>
                                                  {operator}
                                                </option>
                                              ))}
                                            </select>
                                          </div>
                                          <div className='accordion__panel-col flex-grow flex-shrink'>
                                            <input
                                              type='number'
                                              value={option.arguments[1]?.threshold || ''}
                                              onChange={e => {
                                                setDynamicArgument(index, 'threshold', e.target.value)
                                              }}
                                            />
                                          </div>
                                        </div>
                                        <div className='accordion__panel-row mb-2 align-center text-center text-capitalize'>
                                          <div className='accordion__panel-col flex-grow'>Then</div>
                                        </div>
                                      </>
                                    )}

                                    <div className='accordion__panel-row mb-2 align-center'>
                                      <div className='accordion__panel-col flex-auto'>Show</div>
                                      <div className='accordion__panel-col flex-grow'>
                                        <input
                                          type='text'
                                          value={option.source || ''}
                                          onChange={e => {
                                            updateDynamicImage('source', index, null, e.target.value)
                                          }}
                                        />
                                      </div>
                                    </div>

                                    <div className='accordion__panel-row mb-2 align-center'>
                                      <div className='accordion__panel-col flex-auto'>Alt Text</div>
                                      <div className='accordion__panel-col flex-grow'>
                                        <input
                                          type='text'
                                          value={option.alt || ''}
                                          onChange={e => {
                                            updateDynamicImage('alt', index, null, e.target.value)
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </label>
                                </fieldset>
                              ))}
                            </ul>
                          </>
                        )}
                        <button type='button' onClick={addDynamicImage} className='btn full-width'>
                          Add Dynamic Image
                        </button>
                      </>
                    )}
                  </AccordionItemPanel>
                </AccordionItem>
              )}
            </Accordion>
          </form>
        </section>
      </Layout.Sidebar>
    </ErrorBoundary>
  )
})

export default EditorPanel
