import React from 'react'

const Select = ({ label, value, options, fieldName, section = null, subsection = null, required = false, tooltip, onchange, initial: initialValue, ...attributes }) => {
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
      <select className={required && !value ? 'warning' : ''} name={fieldName} value={value} onChange={onchange} {...attributes}>
        {optionsJsx}
      </select>
    </label>
  )
}
export default Select
