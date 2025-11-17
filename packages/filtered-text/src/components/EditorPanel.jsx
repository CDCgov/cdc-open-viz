import React, { memo, useState, useEffect, useContext } from 'react'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import _ from 'lodash'
import ConfigContext from '../ConfigContext'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Accordion from '@cdc/core/components/ui/Accordion'
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Layout from '@cdc/core/components/Layout'
import { HeaderThemeSelector } from '@cdc/core/components/HeaderThemeSelector'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import '@cdc/core/styles/v2/components/editor.scss'

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
          <button className='btn btn-primary' style={{ margin: '1em auto' }} onClick={confirmDone}>
            I'm Done
          </button>
        </section>
      </section>
    )
  }
  const convertStateToConfig = () => {
    let strippedState = cloneConfig(config)
    delete strippedState.newViz
    delete strippedState.runtime

    return strippedState
  }
  const editorContent = (
    <Accordion>
      <Accordion.Section title='General'>
        <TextField
          value={config.title}
          fieldName='title'
          label='Title'
          placeholder='Filterable Text Title'
          updateField={updateField}
        />
      </Accordion.Section>
      <Accordion.Section title='Data'>
        <Select
          value={config.textColumn || ''}
          fieldName='textColumn'
          label='Text Column'
          updateField={updateField}
          initial='Select'
          options={getColumns()}
        />

        <label style={{ marginBottom: '1rem' }}>
          <span className='edit-label'>
            Data Point Filters
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a
                  column called "Sex").
                </p>
              </Tooltip.Content>
            </Tooltip>
          </span>
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
                <Select
                  label='Column'
                  value={filter.columnName || ''}
                  options={[
                    { value: '', label: '- Select Option -' },
                    ...getColumns().map(col => ({ value: col, label: col }))
                  ]}
                  onChange={e => {
                    updateFilterProp('columnName', index, e.target.value)
                  }}
                />
                <Select
                  label='Column Value'
                  value={filter.columnValue || ''}
                  options={[
                    { value: '', label: '- Select Option -' },
                    ...getFilterColumnValues(index).map(val => ({ value: val, label: val }))
                  ]}
                  onChange={e => {
                    updateFilterProp('columnValue', index, e.target.value)
                  }}
                />
              </fieldset>
            ))}
          </ul>
        )}
        <Button onClick={addNewFilter} fluid>
          Add Filter
        </Button>
      </Accordion.Section>
      <Accordion.Section title='Visual'>
        <Select
          value={config.fontSize}
          fieldName='fontSize'
          label='Font Size'
          updateField={updateField}
          options={['small', 'medium', 'large']}
        />
        <HeaderThemeSelector
          selectedTheme={config.theme}
          onThemeSelect={theme => updateConfig({ ...config, theme })}
          label='Theme'
        />

        <div className='cove-accordion__panel-section checkbox-group'>
          <CheckBox
            inline
            size='small'
            value={config.visual.border}
            section='visual'
            fieldName='border'
            label='Display Border'
            updateField={updateField}
          />
          <CheckBox
            inline
            size='small'
            value={config.visual.borderColorTheme}
            section='visual'
            fieldName='borderColorTheme'
            label='Use theme border color'
            updateField={updateField}
          />
          <CheckBox
            size='small'
            value={config.visual.accent}
            section='visual'
            fieldName='accent'
            label='Use Accent Style'
            updateField={updateField}
          />
          <CheckBox
            size='small'
            value={config.visual.background}
            section='visual'
            fieldName='background'
            label='Use Theme Background Color'
            updateField={updateField}
          />
          <CheckBox
            size='small'
            value={config.visual.hideBackgroundColor}
            section='visual'
            fieldName='hideBackgroundColor'
            label='Hide Background Color'
            updateField={updateField}
          />
        </div>
      </Accordion.Section>
    </Accordion>
  )

  if (loading) return null

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar
        displayPanel={displayPanel}
        isDashboard={isDashboard}
        title={'Configure Filtered Text'}
        onBackClick={onBackClick}
      >
        {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
        {config.newViz && showConfigConfirm && <Confirm />}
        {editorContent}
      </Layout.Sidebar>
    </ErrorBoundary>
  )
})

export default EditorPanel
