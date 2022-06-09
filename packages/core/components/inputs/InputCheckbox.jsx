import React, { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'

import Icon from '../ui/Icon'
import Label from '../elements/Label'

import '../../styles/v2/components/input/index.scss'

const InputCheckbox = memo((
  {
    label,
    labelPosition = 'right',
    size = 'small',
    activeColor = null,
    activeCheckColor = null,
    tooltip,

    section = null,
    subsection = null,
    fieldName,
    updateField,
    value: stateValue,
    i = null,
    className, ...attributes
  }
) => {

  const [ value, setValue ] = useState(stateValue || false)

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  useEffect(() => {
    if (stateValue !== undefined && stateValue !== value)
      setValue(stateValue)
  }, [ stateValue ])

  useEffect(() => {
    if (stateValue !== value && updateField) {
      updateField(section, subsection, fieldName, value, i)
    }
  }, [ value ])

  return (
    <div className={'cove-input__checkbox-group' + (className ? ' ' + className : '')} flow={labelPosition}>
      {label && labelPosition === 'left' &&
        <Label tooltip={tooltip} onClick={() => setValue(!value)}>{label}</Label>
      }
      <div className={'cove-input__checkbox' + (size === 'small' ? '--small' : size === 'large' ? '--large' : '') + (value ? ' active' : '')}
           onClick={() => setValue(!value)}>
        <div className={`cove-input__checkbox-box${activeColor ? ' custom-color' : ''}`}
             style={value && activeColor ? { backgroundColor: activeColor } : null}>
          <Icon display="check" className="cove-input__checkbox-check" color={activeCheckColor || '#025eaa'}/>
        </div>
        <input className="cove-input--hidden" type="checkbox" name={name} checked={value} readOnly/>
      </div>
      {label && labelPosition === 'right' &&
        <Label tooltip={tooltip} onClick={() => setValue(!value)}>{label}</Label>
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
