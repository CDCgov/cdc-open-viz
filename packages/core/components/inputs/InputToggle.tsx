import React, { useState, useEffect } from 'react'

import '../../styles/v2/components/input/index.scss'

type InputSliderProps = {
  /** Add label to the input field */
  label: string
  /** Select the preferred display style of the slider */
  sliderType?: 'flat' | 'block' | 'pill' | '3d'
  /** Select the preferred size of the slider */
  size?: 'small' | 'medium' | 'large'
  /** Select the preferred color for the slider when active */
  activeColor?: string
  /** Parent key value of nested target config option */
  section?: string
  /** Child key value of nested target config option */
  subsection?: string
  /** Key value of targeted config option */
  fieldName?: string
  /** Prop drill down of the updateField function */
  updateField?: Function
  /** Current value of the input, usually the current config option value */
  value: boolean
}

const InputSlider: React.FC<InputSliderProps> = ({
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
  onClick,
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

  const clickHandler = e => {
    setValue(!value)
    if (onClick) onClick(e)
  }

  return (
    <div className='input-group'>
      {label && <label>{label}</label>}
      <div
        className={
          'cove-input__slider' +
          (size === 'small' ? '--small' : size === 'large' ? '--large' : '') +
          sliderTypeClass() +
          (value ? ' active' : '')
        }
        onClick={clickHandler}
      >
        <div className='cove-input__slider-button' />
        <div
          className='cove-input__slider-track'
          style={value && activeColor ? { backgroundColor: activeColor } : null}
        />
        <input className='cove-input--hidden' type='checkbox' name={name()} checked={value || false} readOnly />
      </div>
    </div>
  )
}

export default InputSlider
