import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import LoadSpin from '../ui/LoadSpin'

import './button.scss'

const Button = ({
  style,
  role,
  variant,
  size,
  hoverStyle = {},
  fluid = false,
  fullWidth = false,
  animated = false,
  loading = false,
  loadingText = 'Loading...',
  flexCenter,
  active = false,
  onClick,
  children,
  secondary,
  ...attributes
}) => {
  const buttonRef = useRef(null)
  const normalizedVariant = variant === 'theme-blue' ? 'primary' : variant
  const themedVariants = [
    'theme-purple',
    'theme-brown',
    'theme-teal',
    'theme-pink',
    'theme-orange',
    'theme-slate',
    'theme-indigo',
    'theme-cyan',
    'theme-green',
    'theme-amber'
  ]
  const isThemedVariant = themedVariants.includes(normalizedVariant)
  const isEditorPrimary = normalizedVariant === 'editor-primary'
  const useLegacySecondaryClass = secondary && !normalizedVariant
  const themedModeClassName = isThemedVariant && secondary ? ' cove-button--theme-secondary' : ''

  const [buttonState, setButtonState] = useState('out')
  const [customStyles, setCustomStyles] = useState({ ...style })
  const [childrenWidth, setChildrenWidth] = useState()
  const [loadtextWidth, setLoadtextWidth] = useState()

  const variantClassName =
    normalizedVariant && normalizedVariant !== 'primary'
      ? ` cove-button--${isThemedVariant ? 'theme-primary' : normalizedVariant}`
      : ''
  const themeClassName = isThemedVariant ? ` ${normalizedVariant}` : ''
  const sizeClassName = size ? ` cove-button--${size}` : ''

  const attributesObj = {
    ...attributes,
    style: customStyles,
    className:
      'cove-button' +
      variantClassName +
      themedModeClassName +
      themeClassName +
      sizeClassName +
      (animated ? ' cove-button--animated' : '') +
      (flexCenter || 'loader' === role ? ' cove-button--flex-center' : '') +
      (fluid ? ' fluid' : '') +
      (fullWidth || isEditorPrimary ? ' cove-button--full-width' : '') +
      (loading ? ' loading' : '') +
      (attributes.className ? ' ' + attributes.className : '') +
      (useLegacySecondaryClass ? ' secondary' : ''),
    onMouseOver: () => setButtonState('in'),
    onMouseOut: () => setButtonState('out'),
    onFocus: () => setButtonState('in'),
    onBlur: () => setButtonState('out')
  }

  useEffect(() => {
    if ('loader' === role && buttonRef.current) {
      //Create ghost object and text nodes for children
      const ghostSpan = document.createElement('span')
      const ghostContent = document.createTextNode(children)
      ghostSpan.style.opacity = '0'
      ghostSpan.style.visibility = 'hidden'

      //Create ghost object and text nodes for loading value
      const ghostLoaderSpan = document.createElement('span')
      const ghostLoaderContent = document.createTextNode(loadingText)
      ghostLoaderSpan.style.opacity = '0'
      ghostLoaderSpan.style.visibility = 'hidden'

      //Append data to ghost objects
      ghostSpan.appendChild(ghostContent)
      ghostLoaderSpan.appendChild(ghostLoaderContent)

      //Append objects to document
      buttonRef.current.parentNode.insertBefore(ghostSpan, buttonRef.current)
      buttonRef.current.parentNode.insertBefore(ghostLoaderSpan, buttonRef.current)

      //Register ghost width values in state
      setChildrenWidth(ghostSpan.offsetWidth + 2) //Toss in a 2px to account for subpixel offset
      setLoadtextWidth(ghostLoaderSpan.offsetWidth + 2) //Toss in a 2px to account for subpixel offset

      //Remove ghost objects form document
      buttonRef.current.parentNode.removeChild(ghostSpan)
      buttonRef.current.parentNode.removeChild(ghostLoaderSpan)
    }
    return () => {}
  }, [buttonRef, children, loadingText, role])

  useEffect(() => {
    //Adjust button styles depending on cursor, focus, and active, states
    if (buttonState === 'in') setCustomStyles(stateStyles => ({ ...stateStyles, ...hoverStyle }))

    // If button state is out, check if its 'active'; we want to keep hover styles applied to 'active' buttons
    if (buttonState === 'out')
      if (!active)
        // If button state is out, and not 'active', reset display styles back to default
        setCustomStyles({ ...style })
  }, [buttonState, active, style])

  return (
    <button
      {...attributesObj}
      onClick={e => {
        if (loading) {
          e.preventDefault()
          return true
        }

        return onClick?.(e)
      }}
      disabled={loading || attributesObj.disabled}
      ref={buttonRef}
    >
      {children && (
        <>
          {'loader' === role && (
            <>
              <span
                className='cove-button__text'
                style={loading ? { width: loadtextWidth + 'px' } : { width: childrenWidth + 'px' }}
              >
                <div className='cove-button__text--loading' style={loading ? { opacity: 1 } : null}>
                  {loadingText}
                </div>
                <div className='cove-button__text--children' style={loading ? { opacity: 0 } : null}>
                  {children}
                </div>
              </span>
              <div className='cove-button__load-spin' style={loading ? { width: '28px', opacity: 1 } : null}>
                <LoadSpin className='ms-1' size={20} />
              </div>
            </>
          )}
          {role !== 'loader' && children}
        </>
      )}
    </button>
  )
}

Button.propTypes = {
  /** Specify special role type for button */
  role: PropTypes.oneOf(['loader']),
  /** Applies a built-in visual treatment */
  variant: PropTypes.oneOf([
    'primary',
    'editor-primary',
    'theme-purple',
    'theme-brown',
    'theme-teal',
    'theme-pink',
    'theme-orange',
    'theme-slate',
    'theme-indigo',
    'theme-cyan',
    'theme-green',
    'theme-amber',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'link',
    'outline-warning'
  ]),
  /** Applies a built-in size treatment */
  size: PropTypes.oneOf(['sm']),
  /** Provide object with styles that overwrite base styles when hovered */
  hoverStyle: PropTypes.object,
  /** Enables button to stretch to the full width of the content */
  fluid: PropTypes.bool,
  /** Stretches the button to the full width of its container */
  fullWidth: PropTypes.bool,
  /** Displays loading spinner on button while condition is true **/
  loading: PropTypes.bool,
  /** Enables motion effects like hover lift/shadow */
  animated: PropTypes.bool,
  /** Set text to appear during loading animation **/
  loadingText: PropTypes.string,
  /** Displays button as flex and centers all direct children nodes. Useful for aligning icons and text **/
  flexCenter: PropTypes.bool,
  /** When value condition is true, retains any custom, inline `style={}` defined **/
  active: PropTypes.bool
}

export default Button
