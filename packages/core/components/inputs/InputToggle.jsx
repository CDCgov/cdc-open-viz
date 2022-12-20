import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import '../../styles/v2/components/input/index.scss'

const InputSlider = ({
  label,
  sliderType = 'flat',
  size = 'medium',
  activeColor = null,
  section = null,
  subsection = null,
  fieldName,
  updateField,
  value: stateValue,

  i = null,
  min = null,
  max = null,
  ...attributes
}) => {
  const [value, setValue] = useState(stateValue)

  let name = () => {
    let str = ''
    if (section) str += section + '-'
    if (subsection) str += subsection + '-'
    if (fieldName) str += fieldName
    return str
  }

  const sliderTypeClass = () => {
    const typeArr = {
      flat: ' slider--flat',
      block: ' slider--block',
      pill: ' slider--pill',
      '3d': ' slider--3d'
    }
    return typeArr[sliderType] || ''
  }

  useEffect(() => {
    if (stateValue !== undefined && stateValue !== value) {
      setValue(stateValue)
    }
  }, [stateValue])

  useEffect(() => {
    if (stateValue !== undefined && stateValue !== value && updateField) {
      updateField(section, subsection, fieldName, value, i)
    }
  }, [value])

  return (
    <div className='input-group'>
      {label && <label>{label}</label>}
      <div className={'cove-input__slider' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '') + sliderTypeClass() + (value ? ' active' : '')} onClick={() => setValue(!value)}>
        <div className='cove-input__slider-button' />
        <div className='cove-input__slider-track' style={value && activeColor ? { backgroundColor: activeColor } : null} />
        <input className='cove-input--hidden' type='checkbox' name={name()} checked={value || false} readOnly />
      </div>
    </div>
  )
}

InputSlider.propTypes = {
  /** Add label to the input field */
  label: PropTypes.string,
  /** Select the preferred display style of the slider */
  sliderType: PropTypes.oneOf(['flat', 'block', 'pill', '3d']),
  /** Select the preferred size of the slider */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Select the preferred color for the slider when active */
  activeColor: PropTypes.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: PropTypes.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: PropTypes.string,
  /** Key value of targeted config option */
  fieldName: PropTypes.string,
  /** Prop drill down of the updateField function */
  updateField: PropTypes.func,
  /** Current value of the input, usually the current config option value */
  stateValue: PropTypes.object
}

export default InputSlider
