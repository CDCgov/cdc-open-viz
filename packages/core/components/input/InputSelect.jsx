import React, { useRef, useState, memo } from 'react'
import PropTypes from 'prop-types'

// Store
import useConfigStore from '../../stores/configStore'

// Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

// Components
import Label from '../element/Label'

// Styles
import '../../styles/v2/components/input/index.scss'

const InputSelect = memo((
  {
    label,
    options = [ '' ],
    initial,
    initialDisabled,
    initialSnap,
    required,
    tooltip,

    configField,
    value: inlineValue = '',
    onChange, className, ...attributes
  }
) => {
  // Store Selectors
  const { config, updateConfigField } = useConfigStore(state => ({
    config: state.config,
    updateConfigField: state.updateConfigField
  }))

  const [ value, setValue ] = useState(configField ? getConfigKeyValue(configField, config) || '' : inlineValue)

  const inputRef = useRef(null)

  const isInitial = (checkValue) => {
    return initial && (checkValue === initial || checkValue === '')
  }

  let optionsJsx = null

  // Generate the select dropdown options
  if (options instanceof Array) {
    // Handle an Array entry
    optionsJsx = options.map((option, index) => <option value={option} key={index}>{option}</option>)
  } else if (options === Object(options)) {
    // Validate that the remaining non-array value is an object type
    // and handle an Object entry using its key/value pairs.
    let optionsArr = []
    for (let [ optionKey, optionValue ] of Object.entries(options)) {
      optionsArr.push(<option value={optionKey} key={optionKey}>{optionValue}</option>)
    }
    optionsJsx = optionsArr
  }

  // Add custom, initial option
  if (optionsJsx && (initial || initialDisabled)) optionsJsx.unshift(
    <option value="" hidden={(initialDisabled && value !== '') || null} disabled={initialDisabled || null} key="default">{initial}</option>
  )

  // Handle updating of config data when select option is changed
  const onChangeHandler = (e) => {
    let eventValue = e.target.value
    setValue(eventValue)

    // If either no initial option is set, or the option selected is not an initial value
    if (!isInitial(eventValue)) {
      // Update a config field value, if configField array was supplied
      if (configField) updateConfigField(configField, eventValue)

      // Run any additional onChange functions supplied
      if (onChange) onChange(e)
    }

    // Resets selected option to default if initialSnap is set
    // Used for multiple select options to add one, snap back to start, and allow another option to be selected;
    // Examples: adding filtered data keys, attaching multiple data sets, etc.
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
      {optionsJsx ?
        <select className={`cove-input${required && (value === undefined || value === '') ? ' cove-input--error' : ''}${className ? ' ' + className : ''}`}
                value={value} onChange={(e) => onChangeHandler(e)} {...attributes}
                ref={inputRef}
        >
          {optionsJsx.map(option => (option))}
        </select> :
        <p className="mb-2"><i>No options are available...</i></p>
      }
    </>
  )
})

InputSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
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
