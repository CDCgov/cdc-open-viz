import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'

//Context
import { useConfigContext } from '../../context/ConfigContext'

import Label from '../elements/Label'

import '../../styles/v2/components/input/index.scss'

const InputSelect = memo((
  {
    label,
    options,
    initial,
    required,
    tooltip,

    configField,
    value: stateValue,
    onChange, className, ...attributes
  }
) => {
  const { configActions } = useConfigContext()

  const inputRef = useRef(null)

  let optionsJsx = options.map((option, index) => {
    if (option === Object(option)) { //Handle Object entry with key/value pair
      for (const [ key, stateValue ] of Object.entries(option)) {
        return <option value={stateValue} key={index}>{stateValue}</option>
      }
    } else { //Handle Array entry
      return <option value={option} key={index}>{option}</option>
    }
  })

  if (initial) { //Add custom, initial option
    optionsJsx.unshift(<option value="" key={initial}>{initial}</option>)
  }

  let onChangeHandler = (e) => {
    if (configField) { //Found reference to config update function, updating field value
      configActions.updateField(configField, e.target.value)
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
      <select className={`cove-input${required && !stateValue ? ' cove-input--warning' : ''}${className ? ' ' + className : ''}`}
              value={stateValue} onChange={(e) => onChangeHandler(e)} {...attributes}
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
  onChange: PropTypes.func
}

export default InputSelect
