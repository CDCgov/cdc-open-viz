import React, { useState, useEffect, useRef, memo } from 'react'

// Third Party
import { useDebounce } from 'use-debounce'
import PropTypes from 'prop-types'

// Store
import useConfigStore from '../../stores/configStore'
import { useConfigStoreContext } from '../hoc/ConfigProxy'

// Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

// Components
import Label from '../element/Label'

// Styles
import '../../styles/v2/components/input/index.scss'

const InputText = memo((
  {
    label,
    type = 'text',
    tooltip,
    placeholder,
    test,

    configField,
    value: inlineValue = '',
    min, max, className, onChange, ...attributes
  }
) => {
  // Store Selectors
  const { config, updateConfigField } = useConfigStoreContext()

  // Input will only accept either an inline value from the element, or a value from a connected config key
  const [ value, setValue ] = useState(inlineValue)
  const [ debouncedValue ] = useDebounce(value, 300)

  const inputRef = useRef(null)

  //Set initial value
  const valueFromConfig = configField && getConfigKeyValue(configField, config) || false

  useEffect(() => {
    if (valueFromConfig) {
      valueFromConfig !== value && setValue(getConfigKeyValue(configField, config))
    } else {
      setValue(inlineValue)
    }
  }, [ config ])

  useEffect(() => {
    if (configField) updateConfigField(configField, debouncedValue)
  }, [ debouncedValue ])

  const isNumberWithinBounds = (val) => {
    let inBounds = false
    if (val === '') inBounds = true
    if (min || max) {
      if (min && (parseFloat(val) >= parseFloat(min))) {
        inBounds = true
      }
      if (max && (parseFloat(val) <= parseFloat(max))) {
        inBounds = true
      }
    } else {
      inBounds = true
    }
    return inBounds
  }

  //TODO: COVE Refactor - Expand to support any additional onChange events included with the call to this component
  const onChangeHandler = (e) => {
    switch (type) {
      case 'number':
        if (isNumberWithinBounds(e.target.value)) {
          setValue(e.target.value)
        } else {
          setValue(value)
        }
        break
      default:
        setValue(e.target.value)
    }
    // If supplied a custom onChange event, run after setting the debounced value
    if (onChange) onChange(e)
  }

  let inputAttrs = {
    className: `cove-input${'textarea' === type ? ' cove-input--textarea' : ''}${className ? ' ' + className : ''}`,
    type,
    placeholder,
    onChange: onChangeHandler,
    ...attributes
  }

  let formElement = 'textarea' === type
    ? (<textarea {...inputAttrs} ref={inputRef} value={value}/>)
    : (<input {...inputAttrs} value={value} ref={inputRef}/>)

  return (
    <>
      {label &&
        <Label tooltip={tooltip} onClick={() => inputRef.current.focus()}>{label}</Label>
      }
      {formElement}
    </>
  )
})

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([ 'text', 'search', 'textarea', 'number', 'date' ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  tooltip: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  placeholder: PropTypes.string,
  min: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  max: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  section: PropTypes.string,
  subsection: PropTypes.string,
  fieldName: PropTypes.string,
  updateConfigField: PropTypes.func
}

export default InputText
