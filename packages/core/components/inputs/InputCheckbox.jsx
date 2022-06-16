import React, { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'

//Context
import { useConfigContext } from '../../context/ConfigContext'

//Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

//Components
import Icon from '../ui/Icon'
import Label from '../elements/Label'

//Styles
import '../../styles/v2/components/input/index.scss'

const InputCheckbox = memo((
  {
    label,
    labelPosition = 'right',
    size = 'small',
    activeColor = null,
    activeCheckColor = null,
    tooltip,

    configField, value,
    className, ...attributes
  }
) => {

  const { config, configActions } = useConfigContext()
  const [ checkValue, setCheckValue ] = useState(value || false)

  //Set initial value
  useEffect(() => {
    let defaultValue = getConfigKeyValue(configField, config)
    if (defaultValue !== undefined && defaultValue !== null && defaultValue !== checkValue) {
      setCheckValue(defaultValue)
    }
  }, [configField, config])

  //Update config when state changes
  useEffect(() => {
    configActions.updateField(configField, checkValue)
  }, [ checkValue ])

  const onClick = () => {
    setCheckValue(!checkValue)
  }

  return (
    <div className={'cove-input__checkbox-group' + (className ? ' ' + className : '')} flow={labelPosition}>
      {label && labelPosition === 'left' &&
        <Label tooltip={tooltip} onClick={() => onClick()}>{label}</Label>
      }
      <div className={'cove-input__checkbox' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '') + (checkValue ? ' active' : '')} onClick={() => onClick()}>
        <div className={`cove-input__checkbox-box${activeColor ? ' custom-color' : ''}`}
             style={checkValue && activeColor ? { backgroundColor: activeColor } : null}>
          <Icon display="check" className="cove-input__checkbox-check" color={activeCheckColor || '#025eaa'}/>
        </div>
        <input className="cove-input--hidden" type="checkbox" checked={checkValue} readOnly/>
      </div>
      {label && labelPosition === 'right' &&
        <Label tooltip={tooltip} onClick={() => onClick()}>{label}</Label>
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
