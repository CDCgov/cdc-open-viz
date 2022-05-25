import React, { useState, useEffect, memo } from 'react'

import Check from '../../assets/icon-check.svg'
import '../../styles/v2/components/input.scss'

const InputCheckbox = memo((
  {
    label,
    size = 'medium',
    activeColor = null,
    activeCheckColor = null,
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

  useEffect(() => {
    if (stateValue !== undefined && stateValue !== value) {
      setValue(stateValue)
    }
  }, [ stateValue ])

  useEffect(() => {
    if (stateValue !== undefined && stateValue !== value && updateField) {
      updateField(section, subsection, fieldName, value, i)
    }
  }, [ value ])

  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <div
        className={'cove-input__checkbox' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '') + (value ? ' active' : '')}
        onClick={() => setValue(!value)}>
        <div className={`cove-input__checkbox-box${activeColor ? ' custom-color' : ''}`}
             style={value && activeColor ? { backgroundColor: activeColor } : null}>
          <Check className="cove-input__checkbox-check" style={{fill: activeCheckColor || '#025eaa'}}/>
        </div>
        <input className="cove-input--hidden" type="checkbox" name={name} checked={value || false} readOnly/>
      </div>
    </div>
  )
})

export default InputCheckbox
