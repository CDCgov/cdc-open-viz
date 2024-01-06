import { memo, useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

// todo: look into combining these with core
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

const TextField = ({ label, section = null, subsection = null, fieldName, updateField, value: stateValue, type = 'input', tooltip, ...attributes }) => {
  const [value, setValue] = useState(stateValue)

  const [debouncedValue] = useDebounce(value, 500)

  useEffect(() => {
    if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue)
    }
  }, [debouncedValue]) // eslint-disable-line

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const onChange = e => setValue(e.target.value)

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
}

export { CheckBox, TextField }
