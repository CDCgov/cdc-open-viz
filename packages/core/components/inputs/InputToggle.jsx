import React, { useState, useEffect, memo } from 'react'

import '../../styles/v2/components/input.scss'

const InputToggle = memo((
  {
    label,
    type = 'input',
    toggleType = null,
    size = 'medium',
    activeColor = null,
    section = null,
    subsection = null,
    fieldName,
    updateField,
    value: stateValue,

    i = null, min = null, max = null,
    ...attributes
  }
) => {

  const [ value, setValue ] = useState(stateValue)

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const toggleTypeClass = () => {
    const typeArr = {
      'block': ' toggle--block',
      'pill': ' toggle--pill',
      '3d': ' toggle--3d'
    }
    return typeArr[toggleType] || ''
  }

  useEffect(() => {
    if (stateValue !== undefined && stateValue !== value) {
      setValue(stateValue)
    }
  }, [ stateValue ])

  useEffect(() => {
    if (stateValue !== undefined && stateValue !== value) {
      updateField(section, subsection, fieldName, value, i)
    }
  }, [ value ])

  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <div className={'cove-input__toggle' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '') + (toggleTypeClass()) + (value ? ' active' : '')} onClick={() => setValue(!value)}>
        <div className="cove-input__toggle-button"/>
        <div className="cove-input__toggle-track" style={value && activeColor ? { backgroundColor: activeColor } : null }/>
        <input className="cove-input--hidden" type="checkbox" name={name} checked={value || false} readOnly/>
      </div>
    </div>
  )
})

export default InputToggle
