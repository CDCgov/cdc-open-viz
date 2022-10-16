import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Context
import { useConfigContext } from '../../context/ConfigContext'

// Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

// Components
import Label from '../elements/Label'

// Styles
import '../../styles/components/input/index.scss'

const InputSlider = ({
    label,
    labelPosition = 'left',
    tooltip,
    sliderType = 'flat',
    size = 'small',
    activeColor = null,

    configField,
    value: inlineValue,
    min = null, max = null,
    className, ...attributes
  }) => {

  const { config, configActions } = useConfigContext()

  const [ loadedConfigValue, setLoadedConfigValue ] = useState(false) //Prevents run on render
  const [ value, setValue ] = useState(configField ? getConfigKeyValue(configField, config) : inlineValue || false)

  //Set initial value
  useEffect(() => {
    if (configField) {
      if (loadedConfigValue || value === undefined) { //Ignores the first pass when initial render sets value
        if (inlineValue !== value) {
          configActions.updateField(configField, value, true)
        }
      }

      // Initial value changed to configField value
      // UpdateField func is now accessible
      setLoadedConfigValue(true)
    }
  }, [ value ])

  const sliderTypeClass = () => {
    const typeArr = {
      'flat': ' slider--flat',
      'block': ' slider--block',
      'pill': ' slider--pill',
      '3d': ' slider--3d'
    }
    return typeArr[sliderType] || ''
  }

  const onClickHandler = () => {
    setValue(value => !value)
  }

  return (
    <>
      {label && labelPosition === 'top' &&
        <Label tooltip={tooltip} onClick={() => onClickHandler()}>{label}</Label>
      }
      <div className={'cove-input__slider-group' + (className ? ' ' + className : '')} flow={labelPosition}>
        {label && labelPosition === 'left' &&
          <Label tooltip={tooltip} onClick={() => onClickHandler()}>{label}</Label>
        }
        <div className={
          'cove-input__slider' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '')
          + (sliderTypeClass())
          + (value ? ' active' : '')
        }
             onClick={() => onClickHandler()}>
          <div className="cove-input__slider-button"/>
          <div className="cove-input__slider-track" style={value && activeColor ? { backgroundColor: activeColor } : null }/>
          <input className="cove-input--hidden" type="checkbox" checked={value} readOnly/>
        </div>
        {label && labelPosition === 'right' &&
          <Label tooltip={tooltip} onClick={() => onClickHandler()}>{label}</Label>
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
  inlineValue: PropTypes.object
}

export default InputSlider
