import React, { useContext, memo, useState, useEffect } from 'react'
import ConfigContext from '../ConfigContext'
import { useDebounce } from 'use-debounce'

import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

const Select = memo(({ label, value, options, fieldName, section = null, subsection = null, required = false, tooltip, updateField, initial: initialValue, ...attributes }) => {
  let optionsJsx = options.map((optionName, index) => (
    <option value={optionName} key={index}>
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
      <span className='edit-label'>
        {label}
        {tooltip}
      </span>
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

const CheckBox = memo(({ label, value, fieldName, section = null, subsection = null, tooltip, updateField, ...attributes }) => (
  <label className='checkbox column-heading'>
    <input
      type='checkbox'
      name={fieldName}
      checked={value}
      onChange={e => {
        updateField(section, subsection, fieldName, !value)
      }}
      {...attributes}
    />
    <span className='edit-label'>
      {label}
      {tooltip}
    </span>
  </label>
))

/* eslint-disable react-hooks/rules-of-hooks */
const TextField = memo(({ label, tooltip, section = null, subsection = null, fieldName, updateField, value: stateValue, type = 'input', i = null, min = null, ...attributes }) => {
  const [value, setValue] = useState(stateValue)

  const [debouncedValue] = useDebounce(value, 500)

  useEffect(() => {
    if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [debouncedValue]) // eslint-disable-line

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

  if ('date' === type) {
    formElement = <input type='date' name={name} onChange={onChange} {...attributes} value={value} />
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

const ForestPlotSettings = () => {
  const { config, rawData: unfilteredData, updateConfig, isDebug } = useContext(ConfigContext)

  const enforceRestrictions = updatedConfig => {
    if (updatedConfig.orientation === 'horizontal') {
      updatedConfig.labels = false
    }
    if (updatedConfig.table.show === undefined) {
      updatedConfig.table.show = !isDashboard
    }
    // DEV-3293 - Force combo to always be vertical
    if (updatedConfig.visualizationType === 'Combo') {
      updatedConfig.orientation = 'vertical'
    }
  }

  const getColumns = (filter = true) => {
    let columns = {}
    unfilteredData.forEach(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    if (filter) {
      Object.keys(columns).forEach(key => {
        if (
          (config.series && config.series.filter(series => series.dataKey === key).length > 0) ||
          (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key))
          /*
            TODO: Resolve errors when config keys exist, but have no value
              Proposal:  (((confidenceUpper && confidenceLower) || confidenceUpper || confidenceLower) && Object.keys(config.confidenceKeys).includes(key))
          */
        ) {
          delete columns[key]
        }
      })
    }

    return Object.keys(columns)
  }

  const updateField = (section, subsection, fieldName, newValue) => {
    if (section === 'boxplot' && subsection === 'legend') {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config.boxplot[subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }

    if (section === 'boxplot' && subsection === 'labels') {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config.boxplot[subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }

    if (section === 'forestPlot' && subsection) {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config.forestPlot[subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }

    if (section === 'columns' && subsection !== '' && fieldName !== '') {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config[section][subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }
    if (null === section && null === subsection) {
      let updatedConfig = { ...config, [fieldName]: newValue }
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

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Forest Plot Settings
          {(!config.forestPlot.estimateField || !config.forestPlot.upper || !config.forestPlot.lower) && <WarningImage width='25' className='warning-icon' />}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TextField type='text' value={config.forestPlot?.title || ''} updateField={updateField} section='forestPlot' fieldName='title' label='Plot Title' />
        <TextField type='number' value={config.forestPlot?.width || ''} updateField={updateField} section='forestPlot' fieldName='width' label='Plot Width' />
        <TextField type='number' value={config.forestPlot?.startAt || ''} updateField={updateField} section='forestPlot' fieldName='startAt' label='Start At' />

        <Select
          value={config.forestPlot.estimateField}
          label='Point Estimate Column'
          initial={'Select'}
          required={true}
          onChange={e => {
            if (e.target.value !== '' && e.target.value !== 'Select') {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  estimateField: e.target.value
                }
              })
            }
            e.target.value = ''
          }}
          options={getColumns(false)}
        />

        <Select
          value={config.forestPlot.lower}
          label='Lower CI Column'
          required={true}
          initial={'Select'}
          onChange={e => {
            if (e.target.value !== '' && e.target.value !== 'Select') {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  lower: e.target.value
                }
              })
            }
            e.target.value = ''
          }}
          options={getColumns(false)}
        />
        <Select
          value={config.forestPlot.upper}
          label='Upper CI Column'
          initial={'Select'}
          required={true}
          onChange={e => {
            if (e.target.value !== '' && e.target.value !== 'Select') {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  upper: e.target.value
                }
              })
            }
            e.target.value = ''
          }}
          options={getColumns(false)}
        />

        <CheckBox value={config.forestPlot.showZeroLine} section='forestPlot' fieldName='showZeroLine' label='Show Line on Zero' updateField={updateField} />
        <Select
          value={config.forestPlot.shape}
          label='Point Estimate Shape'
          initial={'Select'}
          onChange={e => {
            if (e.target.value !== '' && e.target.value !== 'Select') {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  shape: e.target.value
                }
              })
            }
            e.target.value = ''
          }}
          options={['text', 'circle', 'square', 'diamond']}
        />
        <Select
          value={config.forestPlot.radius.scalingColumn}
          label='Scale Radius Column'
          initial={'Select'}
          onChange={e => {
            if (e.target.value !== '' && e.target.value !== 'Select') {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  radius: {
                    ...config.forestPlot.radius,
                    scalingColumn: e.target.value
                  }
                }
              })
            }
            e.target.value = ''
          }}
          options={getColumns(false)}
        />
        <label>
          <span className='edit-label column-heading'>Radius Minimum Size</span>
          <input
            min={1}
            max={5}
            value={config.forestPlot.radius.min}
            onChange={e => {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  radius: {
                    ...config.forestPlot.radius,
                    min: Number(e.target.value)
                  }
                }
              })
            }}
            type='number'
            label='Radius Minimum'
            placeholder=' 1'
          />
        </label>
        <label>
          <span className='edit-label column-heading'>Radius Maximum Size</span>
          <input
            min={5}
            max={10}
            value={config.forestPlot.radius.max}
            onChange={e => {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  radius: {
                    ...config.forestPlot.radius,
                    max: Number(e.target.value)
                  }
                }
              })
            }}
            type='number'
            label='Radius Minimum'
            placeholder=' 1'
          />
        </label>
        <TextField type='number' min={0} max={45} value={config.forestPlot.rowHeight ? config.forestPlot.rowHeight : 10} updateField={updateField} section='forestPlot' fieldName='rowHeight' label='Row Height' placeholder='10' />
        <br />
        <hr />
        <br />
        <h4>Add Regression Line</h4>
        <TextField type='number' value={config.forestPlot?.regression?.upper || ''} updateField={updateField} section='forestPlot' subsection='regression' fieldName='upper' label='Upper Value' />
        <TextField type='number' value={config.forestPlot?.regression?.lower || ''} updateField={updateField} section='forestPlot' subsection='regression' fieldName='lower' label='Lower Value' />
        <TextField type='number' value={config.forestPlot?.regression?.estimateField || ''} updateField={updateField} section='forestPlot' subsection='regression' fieldName='estimateField' label='Estimate Value' />
        <TextField type='text' value={config.forestPlot?.regression?.baseLineColor || 'black'} updateField={updateField} section='forestPlot' subsection='regression' fieldName='baseLineColor' label='Base Color' />
        <CheckBox value={config.forestPlot?.regression?.showBaseLine || false} section='forestPlot' subsection='regression' fieldName='showBaseLine' label='Show base line' updateField={updateField} />
        <TextField type='text' value={config.forestPlot?.regression?.description || ''} updateField={updateField} section='forestPlot' subsection='regression' fieldName='description' label='Description' />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ForestPlotSettings
