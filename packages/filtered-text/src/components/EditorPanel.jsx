import React, { useState, useEffect, memo, useContext } from 'react'

import ConfigContext from '../ConfigContext'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Accordion from '@cdc/core/components/ui/Accordion'
import InputText from '@cdc/core/components/inputs/InputText'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox'
import Layout from '@cdc/core/components/Layout'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import '@cdc/core/styles/v2/components/editor.scss'

const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

const EditorPanel = memo(props => {
  const { config, updateConfig, loading, stateData: data, setParentConfig, isDashboard } = useContext(ConfigContext)

  const [displayPanel, setDisplayPanel] = useState(true)
  const [showConfigConfirm, setShowConfigConfirm] = useState(false)

  const updateField = updateFieldFactory(config, updateConfig, true)

  const missingRequiredSections = () => {
    return false
  }

  // Filters -------------------------
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
    updateConfig({
      ...config,
      showEditorPanel: !displayPanel
    })
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
  const editorContent = (
    <Accordion>
      <Accordion.Section title='General'>
        <InputText value={config.title} fieldName='title' label='Title' placeholder='Filterable Text Title' updateField={updateField} />
      </Accordion.Section>
      <Accordion.Section title='Data'>
        <div className='cove-accordion__panel-section'>
          <div className='cove-input-group'>
            <InputSelect value={config.textColumn || ''} fieldName='textColumn' label='Text Column' updateField={updateField} initial='Select' options={getColumns()} />
          </div>
        </div>
        <hr className='cove-accordion__divider' />

        <label style={{ marginBottom: '1rem' }}>
          <span className='edit-label'>Data Point Filters</span>
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").</p>
            </Tooltip.Content>
          </Tooltip>
        </label>
        {config.filters && (
          <ul className='filters-list' style={{ paddingLeft: 0, marginBottom: '1rem' }}>
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
                    value={filter.columnName}
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
        <Button onClick={addNewFilter} fluid>
          Add Filter
        </Button>
      </Accordion.Section>
      <Accordion.Section title='Visual'>
        <InputSelect value={config.fontSize} fieldName='fontSize' label='Font Size' updateField={updateField} options={['small', 'medium', 'large']} />
        <br />
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
              ></li>
            ))}
          </ul>
        </label>

        <div className='cove-accordion__panel-section checkbox-group'>
          <InputCheckbox inline size='small' value={config.visual.border} section='visual' fieldName='border' label='Display Border' updateField={updateField} />
          <InputCheckbox inline size='small' value={config.visual.borderColorTheme} section='visual' fieldName='borderColorTheme' label='Use theme border color' updateField={updateField} />
          <InputCheckbox size='small' value={config.visual.accent} section='visual' fieldName='accent' label='Use Accent Style' updateField={updateField} />
          <InputCheckbox size='small' value={config.visual.background} section='visual' fieldName='background' label='Use Theme Background Color' updateField={updateField} />
          <InputCheckbox size='small' value={config.visual.hideBackgroundColor} section='visual' fieldName='hideBackgroundColor' label='Hide Background Color' updateField={updateField} />
        </div>
      </Accordion.Section>
    </Accordion>
  )

  if (loading) return null

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar displayPanel={displayPanel} isDashboard={isDashboard} title={'Configure Filtered Text'} onBackClick={onBackClick}>
        {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
        {config.newViz && showConfigConfirm && <Confirm />}
        {editorContent}
      </Layout.Sidebar>
    </ErrorBoundary>
  )
})

export default EditorPanel
