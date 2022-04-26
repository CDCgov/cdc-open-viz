import React, { useState, useEffect, memo } from 'react'

const InputToggle = memo((
  {
    label,
    size = 'medium',
    section = null,
    subsection = null,
    fieldName,
    updateField,
    value: stateValue,
    type = 'input',
    i = null, min = null, max = null,
    ...attributes
  }
) => {

  const [ value, setValue ] = useState(stateValue)

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

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <div className={'cove-input__toggle' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '') + (value ? ' active' : '')} onClick={() => setValue(!value)}>
        <div className="cove-input__toggle-button"/>
        <div className="cove-input__toggle-track"/>
        <input className="cove-input__toggle-input" type="checkbox" name={name} checked={value || false} readOnly/>
      </div>
    </div>
  )
})

export default InputToggle
