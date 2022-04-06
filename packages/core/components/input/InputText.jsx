import React, { useState, useEffect, memo } from 'react'
import { useDebounce } from 'use-debounce'

const InputText = memo((
  {
    label,
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
  const [ debouncedValue ] = useDebounce(value, 500)

  useEffect(() => {
    if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [ debouncedValue, section, subsection, fieldName, i, stateValue, updateField ])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const onChange = (e) => {
    if ('number' !== type || min === null) {
      setValue(e.target.value)
    } else {
      if (!e.target.value || (parseFloat(min) <= parseFloat(e.target.value) & parseFloat(max) >= parseFloat(e.target.value))) {
        setValue(e.target.value)
      } else {
        setValue(min.toString())
      }
    }
  }

  let formElement = <input type="text" name={name} onChange={onChange} {...attributes} value={value}/>

  if ('textarea' === type) {
    formElement = (
      <textarea name={name} onChange={onChange} {...attributes} value={value}/>
    )
  }

  if ('number' === type) {
    formElement = <input type="number" name={name} onChange={onChange} {...attributes} value={value}/>
  }

  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      {formElement}
    </div>
  )
})

export default InputText
