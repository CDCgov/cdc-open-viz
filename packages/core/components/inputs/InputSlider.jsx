import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Label from '../elements/Label'

import '../../styles/v2/components/input/index.scss'
import { useConfigContext } from '../../context/ConfigContext'

const InputSlider = (
  {
    label,
    labelPosition = 'left',
    tooltip,
    sliderType = 'flat',
    size = 'small',
    activeColor = null,

    configField,
    value: stateValue,
    min = null, max = null,
    className, ...attributes
  }
) => {

  const { configActions } = useConfigContext()

  const [ value, setValue ] = useState(stateValue || false)

  const sliderTypeClass = () => {
    const typeArr = {
      'flat': ' slider--flat',
      'block': ' slider--block',
      'pill': ' slider--pill',
      '3d': ' slider--3d'
    }
    return typeArr[sliderType] || ''
  }

  useEffect(() => {
    if (stateValue !== undefined && stateValue !== value) {
      setValue(stateValue)
    }
  }, [ stateValue ])

  useEffect(() => {
    if (configField) {
      if (stateValue !== value) {
        configActions.updateField(configField, value)
      }
    }
  }, [ value ])

  return (
    <>
      {label && labelPosition === 'top' &&
        <Label tooltip={tooltip} onClick={() => setValue(!value)}>{label}</Label>
      }
      <div className={'cove-input__slider-group' + (className ? ' ' + className : '')} flow={labelPosition}>
        {label && labelPosition === 'left' &&
          <Label tooltip={tooltip} onClick={() => setValue(!value)}>{label}</Label>
        }
        <div className={
          'cove-input__slider' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '')
          + (sliderTypeClass())
          + (value ? ' active' : '')
        }
             onClick={() => setValue(!value)}>
          <div className="cove-input__slider-button"/>
          <div className="cove-input__slider-track" style={value && activeColor ? { backgroundColor: activeColor } : null }/>
          <input className="cove-input--hidden" type="checkbox" checked={value} readOnly/>
        </div>
        {label && labelPosition === 'right' &&
          <Label tooltip={tooltip} onClick={() => setValue(!value)}>{label}</Label>
        }
      </div>
    </>
  )
}

InputSlider.propTypes = {
  /** Add label to the input field **/
  label: PropTypes.string,
  /** Set position of label in relation to the slider **/
  labelPosition: PropTypes.oneOf([ 'top', 'left', 'right' ]),
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
