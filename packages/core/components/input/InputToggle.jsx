import React, { useState, useEffect, memo } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Store
import useConfigStore from '../../stores/configStore'

// Helpers
import { getConfigKeyValue } from '../../helpers/configHelpers'

// Components
import Label from '../element/Label'

// Styles
import '../../styles/v2/components/input/index.scss'

const InputToggle = memo(({
                       label,
                       labelPosition = 'left',
                       tooltip,
                       toggleType = 'flat',
                       size = 'small',
                       activeColor = null,

                       configField,
                       value: inlineValue,
                       className, onClick, ...attributes
                     }) => {
  // Store Selectors
  const { config, updateConfigField } = useConfigStore()

  const [ loadedConfigValue, setLoadedConfigValue ] = useState(false)
  const [ value, setValue ] = useState(configField ? getConfigKeyValue(configField, config) : inlineValue || false)

  // Set initial value
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

  const toggleTypeClass = () => {
    const typeArr = {
      flat: ' cove-input__toggle--flat',
      block: ' cove-input__toggle--block',
      pill: ' cove-input__toggle--pill',
      '3d': ' cove-input__toggle--3d'
    }
    return typeArr[toggleType] || ''
  }

  const onClickHandler = (e) => {
    setValue(value => !value)
    onClick && onClick(e)
  }

  const tooltipCheck = () => {
    if (tooltip) return { 'data-has-tooltip': true }
    return {}
  }

  const tooltipArgs = {...tooltipCheck()}

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
        <div className={'cove-input__toggle' + (size === 'medium' ? '--medium' : size === 'large' ? '--large' : '') + toggleTypeClass() + (value ? ' cove-input__toggle--active' : '')} onClick={() => onClickHandler()}>
          <div className="cove-input__toggle-button"/>
          <div className="cove-input__toggle-track" style={value && activeColor ? { backgroundColor: activeColor } : null}/>
          <input className="cove-input--hidden" type="checkbox" checked={value || false} readOnly/>
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
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  /** Select the preferred color for the toggle when active */
  activeColor: PropTypes.string,
  /** Current value of the input, usually the current config option value */
  stateValue: PropTypes.bool
}

export default InputToggle
