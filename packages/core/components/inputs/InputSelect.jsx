import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'

import Label from '../elements/Label'

import '../../styles/v2/components/input/index.scss'

const InputSelect = memo((
  {
    label,
    value,
    options,
    initial,
    required,
    tooltip,

    fieldName,
    section = null,
    subsection = null,
    updateField,
    onChange, className, style, ...attributes
  }
) => {

  const inputRef = useRef(null)

  let optionsJsx = options.map((option, index) => {
    if (option === Object(option)) { //Handle Object entry with key/value pair
      for (const [ key, value ] of Object.entries(option)) {
        return <option value={value} key={index}>{value}</option>
      }
    } else { //Handle Array entry
      return <option value={option} key={index}>{option}</option>
    }
  })

  if (initial) { //Add custom, initial option
    optionsJsx.unshift(<option value="" key={initial}>{initial}</option>)
  }

  let styles = {
    ...style
  }

  let onChangeHandler = (e) => {
    if (updateField) { //Found reference to config update function, updating field value
      updateField(section, subsection, fieldName, e.target.value)
    }
    if (onChange) { //Found additional onChange functions to run
      onChange(e)
    }
  }

  return (
    <>
      {label &&
        <Label tooltip={tooltip} onClick={() => {
          inputRef.current.focus()
          inputRef.current.click()
        }}>
          {label}
        </Label>
      }
      <select className={`cove-input${required && !value ? ' cove-input--warning' : ''}${className ? ' ' + className : ''}`}
              name={fieldName} value={value} style={styles}
              onChange={(e) => onChangeHandler(e)} {...attributes}
              ref={inputRef}
      >
        {optionsJsx.map(option => (option))}
      </select>
    </>
  )
})

InputSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,
  initial: PropTypes.string,
  required: PropTypes.bool,
  tooltip: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  onChange: PropTypes.func,
  section: PropTypes.string,
  subsection: PropTypes.string,
  fieldName: PropTypes.string,
  updateField: PropTypes.func
}

export default InputSelect
