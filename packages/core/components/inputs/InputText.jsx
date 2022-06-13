import React, { useState, useEffect, useRef, memo } from 'react'
import { useDebounce } from 'use-debounce'
import PropTypes from 'prop-types'

import { useConfigContext } from '../../context/ConfigContext'

import Label from '../elements/Label'

import '../../styles/v2/components/input/index.scss'

const InputText = memo((
  {
    label,
    type = 'text',
    tooltip,
    placeholder,

    configField,
    value: stateValue,
    min, max, className, ...attributes
  }
) => {

  const { configActions } = useConfigContext()

  const [ value, setValue ] = useState(stateValue || '')
  const [ debouncedValue ] = useDebounce(value, 500)

  const inputRef = useRef(null)

  useEffect(() => {
    if (configField) {
      if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
        configActions.updateField(configField, debouncedValue)
      }
    }
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

  //TODO: COVE Refactor - Expand to support source onChange events
  const onChange = (e) => {
    if ('number' !== type) {
      setValue(e.target.value)
    } else {
      if (isNumberWithinBounds(e.target.value)) {
        setValue(e.target.value)
      } else {
        setValue(value)
      }
    }
  }

  let inputAttrs = {
    className: `cove-input${className ? ' ' + className : ''}`,
    type,
    placeholder,
    onChange,
    ...attributes
  }

  let formElement = 'textarea' === type
    ? (<textarea {...inputAttrs} ref={inputRef}/>)
    : (<input {...inputAttrs} value={value} ref={inputRef}/>)


  return (
    <>
      {label && <Label tooltip={tooltip} onClick={() => inputRef.current.focus()}>{label}</Label>}
      {formElement}
    </>
  )
})

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'textarea', 'date']),
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
  updateField: PropTypes.func
}

export default InputText
