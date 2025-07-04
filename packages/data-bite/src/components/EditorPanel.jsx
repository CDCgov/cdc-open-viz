import { memo, useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import Context from '../context'
import WarningImage from '@cdc/core/assets/icon-warning-circle.svg'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { BITE_LOCATIONS, DATA_FUNCTIONS, IMAGE_POSITIONS, DATA_OPERATORS, HEADER_COLORS } from './../constants'
import Layout from '@cdc/core/components/Layout'
import { Select, TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'

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
    let strippedState = _.cloneDeep(config)
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
      <Layout.Sidebar
        isEditor={true}
        config={config}
        title='Configure Data Bites'
        onBackClick={onBackClick}
        displayPanel={displayPanel}
      >
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
                  <Select
                    value={config.biteStyle}
                    fieldName='biteStyle'
                    label='Data Bite Style'
                    updateField={updateField}
                    options={Object.entries(BITE_LOCATIONS).map(([key, value]) => ({ value: key, label: value }))}
                    initial='Select'
                  />
                  <TextField
                    value={config.title}
                    fieldName='title'
                    label='Title'
                    placeholder='Data Bite Title'
                    updateField={updateField}
                  />
                  <CheckBox
                    value={config.visual?.showTitle}
                    section='visual'
                    checked={config.visual?.showTitle}
                    fieldName='showTitle'
                    label='Show Title'
                    updateField={updateField}
                  />

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
                          <p>
                            Enter the message text for the visualization. The following HTML tags are supported: strong,
                            em, sup, and sub.
                          </p>
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
                          <p>
                            Enter supporting text to display below the data visualization, if applicable. The following
                            HTML tags are supported: strong, em, sup, and sub.
                          </p>
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
                  <AccordionItemButton>
                    Data{' '}
                    {(!config.dataColumn || !config.dataFunction) && (
                      <WarningImage width='25' className='warning-icon' />
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul className='column-edit'>
                    <li className='two-col'>
                      <Select
                        value={config.dataColumn || ''}
                        fieldName='dataColumn'
                        label='Data Column'
                        updateField={updateField}
                        initial='Select'
                        required={true}
                        options={getColumns() ? Array.from(getColumns()) : []}
                      />
                      <Select
                        value={config.dataFunction || ''}
                        fieldName='dataFunction'
                        label='Data Function'
                        updateField={updateField}
                        initial='Select'
                        required={true}
                        options={
                          Array.isArray(DATA_FUNCTIONS)
                            ? DATA_FUNCTIONS
                            : DATA_FUNCTIONS
                            ? Object.values(DATA_FUNCTIONS)
                            : []
                        }
                      />
                    </li>
                  </ul>
                  <span className='divider-heading'>Number Formatting</span>
                  <ul className='column-edit'>
                    <li className='three-col'>
                      <TextField
                        value={config.dataFormat.prefix}
                        section='dataFormat'
                        fieldName='prefix'
                        label='Prefix'
                        updateField={updateField}
                      />
                      <TextField
                        value={config.dataFormat.suffix}
                        section='dataFormat'
                        fieldName='suffix'
                        label='Suffix'
                        updateField={updateField}
                      />
                      <TextField
                        type='number'
                        value={config.dataFormat.roundToPlace}
                        section='dataFormat'
                        fieldName='roundToPlace'
                        label='Round'
                        updateField={updateField}
                        min='0'
                        max='99'
                      />
                    </li>
                  </ul>
                  <CheckBox
                    value={config.dataFormat.commas}
                    section='dataFormat'
                    fieldName='commas'
                    label='Add commas'
                    updateField={updateField}
                  />
                  <CheckBox
                    value={config.dataFormat.ignoreZeros}
                    section='dataFormat'
                    fieldName='ignoreZeros'
                    label='Ignore Zeros'
                    updateField={updateField}
                  />
                  <hr className='accordion__divider' />

                  <label style={{ marginBottom: '1rem' }}>
                    <span className='edit-label'>
                      Data Point Filters
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female"
                            for a column called "Sex").
                          </p>
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
                            className='btn btn-danger'
                            onClick={() => {
                              removeFilter(index)
                            }}
                          >
                            Remove
                          </button>
                          <Select
                            value={filter.columnName ? filter.columnName : ''}
                            fieldName='columnName'
                            label={'Column Name'}
                            updateField={(section, subsection, fieldName, value) =>
                              updateFilterProp(fieldName, index, value)
                            }
                            options={getColumns()}
                            initial='- Select Option -'
                          />
                          <Select
                            value={filter.columnValue || ''}
                            fieldName='columnValue'
                            label='Column Value'
                            updateField={(section, subsection, fieldName, value) =>
                              updateFilterProp(fieldName, index, value)
                            }
                            options={Array.isArray(getFilterColumnValues(index)) ? getFilterColumnValues(index) : []}
                            initial='- Select Option -'
                          />
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
                  <Button type='button' onClick={addNewFilter} className='btn btn-primary full-width mt-3'>
                    Add Filter
                  </Button>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                {' '}
                {/*Visual*/}
                <AccordionItemHeading>
                  <AccordionItemButton>Visual</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <TextField
                    type='number'
                    value={config.biteFontSize}
                    fieldName='biteFontSize'
                    label='Bite Font Size'
                    updateField={updateField}
                    min='17'
                    max='65'
                  />
                  <Select
                    value={config.fontSize}
                    fieldName='fontSize'
                    label='Overall Font Size'
                    updateField={updateField}
                    options={['small', 'medium', 'large']}
                  />
                  <div className='checkbox-group'>
                    <CheckBox
                      value={config.visual?.border}
                      section='visual'
                      fieldName='border'
                      label='Display Border'
                      updateField={updateField}
                    />
                    <CheckBox
                      value={config.visual?.borderColorTheme}
                      section='visual'
                      fieldName='borderColorTheme'
                      label='Use Border Color Theme'
                      updateField={updateField}
                    />
                    <CheckBox
                      value={config.visual?.accent}
                      section='visual'
                      fieldName='accent'
                      label='Use Accent Style'
                      updateField={updateField}
                    />
                    <CheckBox
                      value={config.visual?.background}
                      section='visual'
                      fieldName='background'
                      label='Use Theme Background Color'
                      updateField={updateField}
                    />
                    <CheckBox
                      value={config.visual?.hideBackgroundColor}
                      section='visual'
                      fieldName='hideBackgroundColor'
                      label='Hide Background Color'
                      updateField={updateField}
                    />
                  </div>
                  <label>
                    <span className='edit-label'>Theme</span>
                    <ul className='color-palette'>
                      {HEADER_COLORS.map(palette => (
                        <button
                          title={palette}
                          key={palette}
                          onClick={e => {
                            e.preventDefault()
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
                    <Select
                      value={config.imageData.display || ''}
                      section='imageData'
                      fieldName='display'
                      label='Image Display Type'
                      updateField={updateField}
                      options={['none', 'static', 'dynamic']}
                    />
                    <Select
                      value={config.bitePosition || ''}
                      fieldName='bitePosition'
                      label='Image/Graphic Position'
                      updateField={updateField}
                      initial='Select'
                      options={IMAGE_POSITIONS}
                    />
                    {['static'].includes(config.imageData.display) && (
                      <>
                        <TextField
                          value={config.imageData.url}
                          section='imageData'
                          fieldName='url'
                          label='Image URL'
                          updateField={updateField}
                        />
                        <TextField
                          value={config.imageData.alt}
                          section='imageData'
                          fieldName='alt'
                          label='Alt Text'
                          updateField={updateField}
                        />
                      </>
                    )}

                    {['dynamic'].includes(config.imageData.display) && (
                      <>
                        <TextField
                          value={config.imageData.url || ''}
                          section='imageData'
                          fieldName='url'
                          label='Image URL (default)'
                          updateField={updateField}
                        />
                        <TextField
                          value={config.imageData.alt}
                          section='imageData'
                          fieldName='alt'
                          label='Alt Text (default)'
                          updateField={updateField}
                        />

                        <hr className='accordion__divider' />

                        {(!config.imageData.options || config.imageData.options.length === 0) && (
                          <p style={{ textAlign: 'center' }}>There are currently no dynamic images.</p>
                        )}
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
                        <button type='button' onClick={addDynamicImage} className='btn btn-primary full-width'>
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
