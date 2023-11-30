import React, { useContext, memo, useState, useEffect } from 'react'
import ConfigContext from '../ConfigContext'
import { useDebounce } from 'use-debounce'
import WarningImage from '../images/warning.svg'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

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
      let newConfig = {
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config.forestPlot[subsection],
            [fieldName]: newValue
          }
        }
      }

      console.log('newCOnfig', newConfig)
      updateConfig(newConfig)
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
        <Select
          value={config.forestPlot.type}
          label='Forest Plot Type'
          initial={'Select'}
          required={true}
          onChange={e => {
            if (e.target.value !== '' && e.target.value !== 'Select') {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  type: e.target.value
                }
              })
            }
            e.target.value = ''
          }}
          options={['Linear', 'Logarithmic']}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) <br />
                  <br /> Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        <TextField type='text' value={config.forestPlot?.title || ''} updateField={updateField} section='forestPlot' fieldName='title' label='Plot Title' />

        <br />
        <hr />
        <br />
        <h4>Column Settings</h4>

        <Select
          value={config.forestPlot.estimateField}
          label='Point Estimate Column'
          initial={config.forestPlot.estimateField || 'Select'}
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
          value={config.forestPlot.shape}
          label='Point Estimate Shape'
          initial={config.forestPlot.shape || 'Select'}
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
          options={['text', 'circle', 'square']}
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

        <Select
          value={config.forestPlot.lower}
          label='Lower CI Column'
          required={true}
          initial={config.forestPlot.lower || 'Select'}
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
          initial={config.forestPlot.upper || 'Select'}
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

        <Select
          value={config.forestPlot.pooledResult.column}
          label='Pooled Result Row'
          initial={config.forestPlot.pooledResult.column || 'Select'}
          required={false}
          onChange={e => {
            if (e.target.value !== '' && e.target.value !== 'Select') {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  pooledResult: {
                    ...config.forestPlot.pooledResult,
                    column: e.target.value
                  }
                }
              })
            }
            e.target.value = ''
          }}
          options={['None', ...config.data.map(d => d[config.xAxis.dataKey])]}
        />

        <CheckBox value={config.forestPlot?.hideDateCategoryCol || false} section='forestPlot' fieldName='hideDateCategoryCol' label='Hide Date Category Column' updateField={updateField} />
        <CheckBox value={config.forestPlot?.lineOfNoEffect?.show || false} section='forestPlot' subsection='lineOfNoEffect' fieldName='show' label='Show Line of No Effect' updateField={updateField} />

        <br />
        <hr />
        <br />
        <h4>Width Settings</h4>

        <label>
          <span className='edit-label column-heading'>Chart Offset Left (%)</span>
          <input
            type='number'
            min={0}
            max={100}
            value={config.forestPlot.leftWidthOffset || 0}
            onChange={e => {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  leftWidthOffset: e.target.value
                }
              })
            }}
          />
        </label>

        <label>
          <span className='edit-label column-heading'>Chart Offset Left Mobile(%)</span>
          <input
            type='number'
            min={0}
            max={100}
            value={config.forestPlot.leftWidthOffsetMobile || 0}
            onChange={e => {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  leftWidthOffsetMobile: e.target.value
                }
              })
            }}
          />
        </label>

        <label>
          <span className='edit-label column-heading'>Chart Offset Right (%)</span>
          <input
            type='number'
            min={0}
            max={100}
            value={config.forestPlot.rightWidthOffset || 0}
            onChange={e => {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  rightWidthOffset: e.target.value
                }
              })
            }}
          />
        </label>

        <label>
          <span className='edit-label column-heading'>Chart Offset Right Mobile(%)</span>
          <input
            type='number'
            min={0}
            max={100}
            value={config.forestPlot.rightWidthOffsetMobile || 0}
            onChange={e => {
              updateConfig({
                ...config,
                forestPlot: {
                  ...config.forestPlot,
                  rightWidthOffsetMobile: e.target.value
                }
              })
            }}
          />
        </label>

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
        <TextField type='number' min={20} max={45} value={config.forestPlot.rowHeight ? config.forestPlot.rowHeight : 10} updateField={updateField} section='forestPlot' fieldName='rowHeight' label='Row Height' placeholder='10' />
        <br />
        <hr />
        <br />
        <h4>Labels Settings</h4>
        <TextField type='text' value={config.forestPlot?.leftLabel || ''} updateField={updateField} section='forestPlot' fieldName='leftLabel' label='Left Label' />
        <TextField type='text' value={config.forestPlot?.rightLabel || ''} updateField={updateField} section='forestPlot' fieldName='rightLabel' label='Right Label' />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ForestPlotSettings
