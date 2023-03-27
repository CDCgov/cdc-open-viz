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
    labelPosition = 'right',
    tooltip,
    toggleType = 'flat',
    size = 'small',
    activeColor = '#005eaa',
    stretch,
    // required,

    configField,
    value: inlineValue,
    className,
    onClick,
    ...attributes
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
    if (configField && value !== configFieldValue)
      updateVisConfigField(configField, value)
  }, [ configField, value, updateVisConfigField ])

  const onClickHandler = () => inputRef.current.click()

  const onChangeHandler = (e) => {
    setValue(value => !value)
    onClick && onClick(e)
  }

  const generateWrapperClasses = () => {
    const classList = []

    // Root class
    const root = 'cove-input__toggle-group'
    classList.push(root)

    // Stretch class
    if (stretch) classList.push('cove-input__toggle-group--stretch')

    // Props classes
    if (className) classList.push(className)

    return classList.join(' ')
  }

  const generateInputClasses = () => {
    const classList = []

    // Root class
    const root = 'cove-input__toggle'
    const suffixArr = {
      small: '',
      medium: '--medium',
      large: '--large',
      xlarge: '--xlarge'
    }
    classList.push(root + suffixArr[size])

    // Type class
    const typeArr = {
      flat: 'cove-input__toggle--flat',
      block: 'cove-input__toggle--block',
      pill: 'cove-input__toggle--pill',
      '3d': 'cove-input__toggle--3d'
    }
    classList.push(typeArr[toggleType] || '')

    // Active class
    if (value) classList.push('cove-input__toggle--active')

    // Required class
    // if (required && (value === undefined)) classList.push('cove-input--error')

    return classList.join(' ')
  }

  const TooltipLabel = () => (
    <div className="cove-input__toggle-group__label">
      <Label tooltip={tooltip} onClick={onClickHandler}>{label}</Label>
    </div>
  )

  return (
    <>
      {label && labelPosition === 'top' &&
        <TooltipLabel/>
      }
      <div className={generateWrapperClasses()} flow={labelPosition}>
        {label && labelPosition === 'left' &&
          <TooltipLabel/>
        }
        <div className={generateInputClasses()}
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
        {label && labelPosition === 'right' &&
          <TooltipLabel/>
        }
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
  /** Stretch the toggle and its label to fill the width of its container; Only available when label exists, and **labelPosition** is set to `left` or `right`. */
  stretch: PropTypes.bool,
  /** Supply a reference to the config key this input connects to, if any.<br/><br/>
   * **String**<br/>
   * `configField="title"` will connect to the `config.title` value.<br/><br/>
   * **Array**<br/>
   * `configField={[ 'componentStyle', 'shadow' ]}` will connect to the `config.componentStyle.shadow` value. <br/><br/>
   * See [setConfigKeyValue](https://cdcgov.github.io/cdc-open-viz/?path=/docs/helpers-confighelpers-setconfigkeyvalue--docs) for more details. */
  configField: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
  /** Additional class to add to the input wrapper */
  className: PropTypes.string,
  /** Function to call when the input is clicked */
  onClick: PropTypes.func
}

export default InputToggle
