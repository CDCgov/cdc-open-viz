import React, { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'

// Store
import useConfigStore from '../../stores/configStore'

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
    size = 'small',
    activeColor = null,
    activeCheckColor = null,
    tooltip,

    configField,
    value: inlineValue,
    className, ...attributes
  }
) => {
  const { config, updateConfigField } = useConfigStore(state => ({
    config: state.config,
    updateConfigField: state.updateConfigField
  }))

  const [ loadedConfigValue, setLoadedConfigValue ] = useState(false)
  const [ value, setValue ] = useState(configField ? getConfigKeyValue(configField, config) : inlineValue || '')

  //Set initial value
  useEffect(() => {
    if (configField) {
      if (loadedConfigValue || value === undefined) { //Ignores the first pass when initial render sets value
        if (inlineValue !== value) {
          updateConfigField(configField, value)
        }
      }

      // Initial value changed to configField value
      // updateConfigField func is now accessible
      setLoadedConfigValue(true)
    }
  }, [ value ])

  const onClickHandler = () => {
    setValue(value => !value)
  }

  return (
    <div className={'cove-input__checkbox-group' + (className ? ' ' + className : '')} flow={labelPosition}>
      {label && labelPosition === 'left' &&
        <Label tooltip={tooltip} onClick={() => onClickHandler()}>{label}</Label>
      }
      <div className={'cove-input__checkbox' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '') + (value ? ' active' : '')} onClick={() => onClickHandler()}>
        <div className={`cove-input__checkbox-box${activeColor ? ' custom-color' : ''}`}
             style={value && activeColor ? { backgroundColor: activeColor } : null}>
          <Icon display="check" className="cove-input__checkbox-check" color={activeCheckColor || '#025eaa'}/>
        </div>
        <input className="cove-input--hidden" type="checkbox" defaultChecked={value || false} readOnly/>
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
