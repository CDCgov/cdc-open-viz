import React, { useState, useEffect, memo, useRef } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Hooks
import { useVisConfig } from '../../hooks/store/useVisConfig'

// Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

// Components
import Label from '../element/Label'

// Styles
import '../../styles/v2/components/input/index.scss'

const InputToggle = memo((
  {
    label,
    labelPosition = 'left',
    tooltip,
    toggleType = 'flat',
    size = 'small',
    activeColor = '#005eaa',
    required,

    configField,
    value: inlineValue,
    className, onClick, ...attributes
  }
) => {
  // Store Selectors
  const { config, updateVisConfigField } = useVisConfig()

  const [ value, setValue ] = useState(false)

  const inputRef = useRef(null)

  // Get initial value
  const configFieldValue = configField && getConfigKeyValue(configField, config)

  // Check initial value
  // Valid value of 'false' could be returned, so checking undefined
  const valueExistsOnConfig = Boolean(configFieldValue && typeof configFieldValue !== undefined)

  // Set initial value
  useEffect(() => {
    if (valueExistsOnConfig) {
      configFieldValue !== value && setValue(configFieldValue)
    } else {
      setValue(inlineValue)
    }
  }, [ valueExistsOnConfig ])

  useEffect(() => {
    if (configField && value !== configFieldValue) updateVisConfigField(configField, value)
  }, [ configField, value, updateVisConfigField ])

  const onClickHandler = () => inputRef.current.click()

  const onChangeHandler = (e) => {
    setValue(value => !value)
    onClick && onClick(e)
  }

  const inputClasses = () => {
    const typeArr = {
      flat: ' cove-input__toggle--flat',
      block: ' cove-input__toggle--block',
      pill: ' cove-input__toggle--pill',
      '3d': ' cove-input__toggle--3d'
    }
    return typeArr[toggleType] || ''
  }

  const tooltipCheck = () => {
    if (tooltip) return { 'data-has-tooltip': true }
    return {}
  }

  const tooltipArgs = { ...tooltipCheck() }

  const TooltipLabel = () => (
    <div className="cove-input__toggle-group__label" {...tooltipArgs}>
      <Label tooltip={tooltip} onClick={onClickHandler}>{label}</Label>
    </div>
  )

  return (
    <>
      {label && labelPosition === 'top' && <TooltipLabel/>}

      <div className={'cove-input__toggle-group' + (className ? ' ' + className : '')} flow={labelPosition}>
        {label && labelPosition === 'left' && <TooltipLabel/>}
        <div className={`cove-input__toggle${size === 'medium' ? '--medium' : size === 'large' ? '--large' : size === 'xlarge' ? '--xlarge' : ''}${inputClasses()}${value ? ' cove-input__toggle--active' : ''}${required && (value === undefined) ? ' cove-input--error' : ''}`}
          tabIndex={0}
          onKeyUp={(e) => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Space') onClickHandler()
          }}
          onClick={onClickHandler}>
          <div className="cove-input__toggle-spacer"/>
          <div className="cove-input__toggle-button"/>
          <div className="cove-input__toggle-track" style={value && activeColor ? { backgroundColor: activeColor } : null}/>
          <input className="cove-input--hidden" type="checkbox" defaultChecked={value} onChange={(e) => onChangeHandler(e)} ref={inputRef} tabIndex={-1} readOnly/>
        </div>

        {label && labelPosition === 'right' && <TooltipLabel/>}
      </div>
    </>
  )
})

InputToggle.propTypes = {
  /** Add label to the input field */
  label: PropTypes.string,
  /** Position the label relative to the toggle */
  labelPosition: PropTypes.oneOf([ 'left', 'right', 'top' ]),
  /** Add a tooltip to describe the toggle's usage; JSX markup can also be supplied */
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /** Select the preferred display style of the toggle */
  toggleType: PropTypes.oneOf([ 'flat', 'block', 'pill', '3d' ]),
  /** Select the preferred size of the toggle */
  size: PropTypes.oneOf([ 'small', 'medium', 'large', 'xlarge' ]),
  /** Select the preferred color for the toggle when active */
  activeColor: PropTypes.string,
  /** Current value of the input, usually the current config option value */
  stateValue: PropTypes.bool
}

export default InputToggle
