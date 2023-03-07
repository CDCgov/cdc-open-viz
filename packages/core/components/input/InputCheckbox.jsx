import React, { useState, useEffect, memo, useRef } from 'react'
import PropTypes from 'prop-types'

// Store
import useStore from '../../store/store'

// Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

// Components
import Icon from '../ui/Icon'
import Label from '../element/Label'

// Styles
import '../../styles/v2/components/input/index.scss'


const InputCheckbox = memo((
  {
    label,
    labelPosition = 'right',
    tooltip,
    size = 'small',
    activeColor = null,
    activeCheckColor = null,

    configField,
    value: inlineValue,
    className, onClick, ...attributes
  }
) => {
  const { config, updateConfigField } = useStore()

  const [ value, setValue ] = useState(inlineValue || false)

  const inputRef = useRef(null)

  const valueFromConfig = configField && getConfigKeyValue(configField, config) !== undefined && getConfigKeyValue(configField, config)
  const configValueIsValid = valueFromConfig || (valueFromConfig === false && valueFromConfig !== undefined)

  //Set initial value
  useEffect(() => {
    if (configValueIsValid) {
      setValue(getConfigKeyValue(configField, config))
    } else {
      setValue(inlineValue)
    }
  }, [ config ])

  useEffect(() => {
    if (configValueIsValid && valueFromConfig !== value) updateConfigField(configField, value)
  }, [ value ])

  const onClickHandler = () => {
    inputRef.current.click()
  }

  const onChangeHandler = (e) => {
    setValue(value => !value)
    onClick && onClick(e)
  }

  return (
    <div className={'cove-input__checkbox-group' + (className ? ' ' + className : '')} flow={labelPosition}>
      {label && labelPosition === 'left' &&
        <Label tooltip={tooltip} onClick={() => onClickHandler()}>{label}</Label>
      }
      <div className={'cove-input__checkbox'
        + (size === 'small' ? '--small' : size === 'large' ? '--large' : '')
        + (value ? ' active' : '')}
           onClick={() => onClickHandler()}
      >
        <div className={`cove-input__checkbox-box${activeColor ? ' custom-color' : ''}`}
             style={value && activeColor ? { backgroundColor: activeColor } : null}>
          <Icon display="check" className="cove-input__checkbox-check" color={activeCheckColor || '#025eaa'}/>
        </div>
        <input className="cove-input--hidden" type="checkbox" defaultChecked={value} onChange={(e) => onChangeHandler(e)} ref={inputRef} readOnly/>
      </div>
      {label && labelPosition === 'right' &&
        <Label tooltip={tooltip} onClick={() => onClickHandler()}>{label}</Label>
      }
    </div>
  )
})

InputCheckbox.propTypes = {
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf([ 'left', 'right' ]),
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  activeColor: PropTypes.string,
  activeCheckColor: PropTypes.string,
  tooltip: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  value: PropTypes.bool
}

export default InputCheckbox
