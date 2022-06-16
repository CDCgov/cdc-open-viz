import React, { useRef, memo, useState } from 'react'
import PropTypes from 'prop-types'

//Context
import { useConfigContext } from '../../context/ConfigContext'

//Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

//Components
import Label from '../elements/Label'

//Styles
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
  const { config, configActions } = useConfigContext()

  const [ value, setValue ] = useState(configField ? getConfigKeyValue(configField, config) : stateValue || '')

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

  let onChangeHandler = (e) => {
    setValue(e.target.value)
    //Found reference to config update function, updating field value
    if (configField) configActions.updateField(configField, e.target.value)
    //Found additional onChange functions to run
    if (onChange) onChange(e)
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
              value={value} onChange={(e) => onChangeHandler(e)} {...attributes}
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
