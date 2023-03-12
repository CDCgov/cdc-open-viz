import React, { useState, useEffect, useRef } from 'react'

// Third Party
import { useDebounce } from 'use-debounce'
import PropTypes from 'prop-types'

// Hooks
import { useVisConfig } from '../../hooks/store/useVisConfig'

// Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

// Components
import Label from '../element/Label'

// Styles
import '../../styles/v2/components/input/index.scss'

const InputText = (
  {
    label,
    type = 'text',
    tooltip,
    placeholder,
    required,

    configField,
    value: inlineValue,
    min, max, className, onChange, ...attributes
  }
) => {
  // Store Selectors
  const { config, updateVisConfigField } = useVisConfig()

  // Input will only accept either an inline value from the element, or a value from a connected config key
  const [ value, setValue ] = useState()
  const [ debouncedValue ] = useDebounce(value, 300)

  const inputRef = useRef(null)

  // Get initial value
  const configFieldValue = configField && getConfigKeyValue(configField, config)

  // Check initial value
  const valueExistsOnConfig = Boolean(configFieldValue && typeof configFieldValue !== undefined)

  // Set initial value
  useEffect(() => {
    if (valueExistsOnConfig) {
      configFieldValue !== value && setValue(configFieldValue)
    } else {
      setValue(inlineValue)
    }
    return () => {
    }
  }, [ valueExistsOnConfig ])

  useEffect(() => {
    if (configField && configFieldValue !== debouncedValue) updateVisConfigField(configField, debouncedValue)
    return () => {
    }
  }, [ configField, debouncedValue, updateVisConfigField ])

  const isNumberWithinBounds = val => {
    let inBounds = false
    if (val === '') inBounds = true
    if (min || max) {
      if (min && parseFloat(val) >= parseFloat(min)) {
        inBounds = true
      }
      if (max && parseFloat(val) <= parseFloat(max)) {
        inBounds = true
      }
    } else {
      inBounds = true
    }
    return inBounds
  }

  const onChangeHandler = e => {
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
    className: `cove-input${'textarea' === type ? ' cove-input--textarea' : ''}${required && (value === undefined || value === '') ? ' cove-input--error' : ''}${className ? ' ' + className : ''}`,
    type,
    placeholder,
    onChange: (e) => onChangeHandler(e),
    ...attributes
  }

  let formElement = 'textarea' === type
    ? (<textarea {...inputAttrs} ref={inputRef} value={value ?? ''}/>)
    : (<input {...inputAttrs} value={value ?? ''} ref={inputRef}/>)

  return (
    <>
      {label &&
        <Label tooltip={tooltip} onClick={() => inputRef.current.focus()}>{label}</Label>
      }
      {formElement}
    </>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([ 'text', 'search', 'textarea', 'number', 'date' ]),
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  tooltip: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
  placeholder: PropTypes.string,
  min: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  max: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  section: PropTypes.string,
  subsection: PropTypes.string,
  fieldName: PropTypes.string,
  updateConfigField: PropTypes.func
}

export default InputText
