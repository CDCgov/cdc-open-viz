import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

//Context
import { useConfigContext } from '../../context/ConfigContext'

//Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

//Components
import Label from '../elements/Label'

//Styles
import '../../styles/v2/components/input/index.scss'

const InputSelect = (
  {
    label,
    options,
    initial,
    initialDisabled = true,
    initialSnap,
    required,
    tooltip,

    configField,
    value: inlineValue,
    onChange, className, ...attributes
  }
) => {
  const { config, configActions } = useConfigContext()

  const [ value, setValue ] = useState(configField ? getConfigKeyValue(configField, config) : inlineValue || '')

  const inputRef = useRef(null)

  let optionsJsx = options.map((option, index) => {
    if (option === Object(option)) { //Handle Object entry with key/value pair
      for (const [ optionKey, optionValue ] of Object.entries(option)) {
        return <option value={optionValue} key={index}>{optionValue}</option>
      }
    } else { //Handle Array entry
      return <option value={option} key={index}>{option}</option>
    }
    return null
  })

  //Add custom, initial option
  if (initial) optionsJsx.unshift(<option value="" disabled={initialDisabled || null} key={initial}>{initial}</option>)

  const isInitial = (checkValue) => {
    return initial && (checkValue === initial || checkValue === '')
  }

  const onChangeHandler = (e) => {
    let eventValue = e.target.value
    setValue(eventValue)

    // If either no initial option is set, or the option selected is not an initial value
    if (!isInitial(eventValue)) {
      // Update a config field value, if configField array was supplied
      if (configField) configActions.updateField(configField, eventValue)
      // Run any additional onChange functions supplied
      if (onChange) onChange(e)
    }

    // Resets selected option to default if initialSnap is set
    if (initialSnap && isInitial('')) setValue('')
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
      <select className={`cove-input${required && !inlineValue ? ' cove-input--warning' : ''}${className ? ' ' + className : ''}`}
              value={value} onChange={(e) => onChangeHandler(e)} {...attributes}
              ref={inputRef}
      >
        {optionsJsx.map(option => (option))}
      </select>
    </>
  )
}

InputSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,
  initial: PropTypes.string,
  initialDisabled: PropTypes.bool,
  /** Snap returns to the initial value, regardless of previous selection **/
  initialSnap: PropTypes.bool,
  required: PropTypes.bool,
  tooltip: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  onChange: PropTypes.func
}

export default InputSelect
