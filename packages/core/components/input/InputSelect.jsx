import React, { useRef, useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useVisConfig } from '../../hooks/store/useVisConfig'

// Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

// Components
import Label from '../element/Label'

// Styles
import '../../styles/v2/components/input/index.scss'

const InputSelect = (
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
  const { config, updateVisConfigField } = useVisConfig()

  const [ value, setValue ] = useState()

  const inputRef = useRef(null)

  // Get initial value
  const configFieldValue = configField && getConfigKeyValue(configField, config)

  // Check initial value
  const valueExistsOnConfig = !!(configFieldValue && typeof configFieldValue !== undefined)

  // Set initial value
  useEffect(() => {
    if (valueExistsOnConfig) {
      configFieldValue !== value && setValue(configFieldValue)
    } else {
      setValue(inlineValue)
    }
  }, [ valueExistsOnConfig ])

  useEffect(() => {
    // If either no initial option is set, or the option selected is not an initial value
    if (!isInitial(value)) {
      // Update a config field value, if configField array was supplied
      if (configField && value !== configFieldValue) {
        updateVisConfigField(configField, value)
      }
    }
  }, [ configField, value ])

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

    // Run any additional onChange functions supplied
    if (onChange) onChange(e)

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
        <select
          className={`cove-input${required && (value === undefined || value === '') ? ' cove-input--error' : ''}${className ? ' ' + className : ''}`}
          value={value ?? ''} onChange={(e) => onChangeHandler(e)} {...attributes}
          ref={inputRef}
        >
          {optionsJsx.map(option => (option))}
        </select> :
        <p className="mb-2"><i>No options are available...</i></p>
      }
    </>
  )
}

InputSelect.propTypes = {
  /** Add label to the input field */
  label: PropTypes.string,
  /** Add a tooltip to describe the input's usage; JSX markup can also be supplied */
  tooltip: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  /** Supply an array of options, or an object of key/value pairs to use as options */
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  /** Prepend a default initial option */
  initial: PropTypes.string,
  /** Allow the initial option to display, but disable selection of the initial option */
  initialDisabled: PropTypes.bool,
  /** Snap returns to the initial value, regardless of previous selection; helpful when triggering onChange() events
   * when an option is selected (like adding a filter from a list), and the select is expected to be used multiple times **/
  initialSnap: PropTypes.bool,
  /** Mark the input as required; will set error style while value is undefined */
  required: PropTypes.bool,
  /** Supply a reference to the config key this input connects to, if any.<br/><br/>
   * **String**<br/>
   * `configField="title"` will connect to the `config.title` value.<br/><br/>
   * **Array**<br/>
   * `configField={[ 'componentStyle', 'shadow' ]}` will connect to the `config.componentStyle.shadow` value. <br/><br/>
   * See [setConfigKeyValue](https://cdcgov.github.io/cdc-open-viz/?path=/docs/helpers-confighelpers-setconfigkeyvalue--docs) for more details. */
  configField: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
  /** Function to call when the input is changed */
  onChange: PropTypes.func,
}

export default memo(InputSelect)
