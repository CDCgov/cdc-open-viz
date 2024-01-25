import React, { useContext, memo, useState, useEffect } from 'react'
import ConfigContext from '../ConfigContext'
import { useDebounce } from 'use-debounce'
import WarningImage from '../images/warning.svg'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

const updateField = (section, subsection, fieldName, newValue) => {
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


const SankeySettings = () => {
    const { config } = useContext(ConfigContext)

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Sankey Settings
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
      <CheckBox value={config.enableKPIs} fieldName='enableKPIs' label='Enable KPIs'/>
      {config.enableKPIs && <TextField value={config.numKPIs} fieldName='numKPIs' label='Number of KPIs' type='number' min='1' max='3' placeholder='No. KPIs' updateField={updateField}/>}
      {config.numKPIs && <p>hi</p>}
      <CheckBox value={config.enableStoryNodes} fieldName='enableStoryNodes' label='Enable StoryNodes'  />
      <CheckBox value={config.enableTooltips} fieldName='enableTooltips' label='Enable Tooltips'  />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default SankeySettings
