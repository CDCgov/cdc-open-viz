import React, { useState, useEffect, useRef } from 'react'

import LoadSpin from '../ui/LoadSpin'

import './button.scss'

export type ButtonVariant =
  | 'primary'
  | 'editor-primary'
  | 'theme-blue'
  | 'theme-purple'
  | 'theme-brown'
  | 'theme-teal'
  | 'theme-pink'
  | 'theme-orange'
  | 'theme-slate'
  | 'theme-indigo'
  | 'theme-cyan'
  | 'theme-green'
  | 'theme-amber'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'light'
  | 'link'
  | 'outline-warning'

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'role'> & {
  role?: 'loader'
  variant?: ButtonVariant
  size?: 'sm'
  hoverStyle?: React.CSSProperties
  fluid?: boolean
  fullWidth?: boolean
  animated?: boolean
  loading?: boolean
  loadingText?: string
  flexCenter?: boolean
  active?: boolean
  secondary?: boolean
}

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
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const themedVariants = [
    'theme-blue',
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
  const isThemedVariant = !!variant && themedVariants.includes(variant)
  const isEditorPrimary = variant === 'editor-primary'
  const useLegacySecondaryClass = secondary && !variant
  const themedModeClassName = isThemedVariant && secondary ? ' cove-button--theme-secondary' : ''

  const [buttonState, setButtonState] = useState('out')
  const [customStyles, setCustomStyles] = useState<React.CSSProperties>({ ...style })
  const [childrenWidth, setChildrenWidth] = useState<number | undefined>()
  const [loadtextWidth, setLoadtextWidth] = useState<number | undefined>()

  const variantClassName =
    variant && variant !== 'primary'
      ? ` cove-button--${isThemedVariant ? 'theme-primary' : variant}`
      : ''
  const themeClassName = isThemedVariant ? ` ${variant}` : ''
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
    if ('loader' === role && buttonRef.current && buttonRef.current.parentNode) {
      const parentNode = buttonRef.current.parentNode
      //Create ghost object and text nodes for children
      const ghostSpan = document.createElement('span')
      const ghostContent = document.createTextNode(children as string)
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
      parentNode.insertBefore(ghostSpan, buttonRef.current)
      parentNode.insertBefore(ghostLoaderSpan, buttonRef.current)

      //Register ghost width values in state
      setChildrenWidth(ghostSpan.offsetWidth + 2) //Toss in a 2px to account for subpixel offset
      setLoadtextWidth(ghostLoaderSpan.offsetWidth + 2) //Toss in a 2px to account for subpixel offset

      //Remove ghost objects form document
      parentNode.removeChild(ghostSpan)
      parentNode.removeChild(ghostLoaderSpan)
    }
    return () => { }
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
                <div className='cove-button__text--loading' style={loading ? { opacity: 1 } : undefined}>
                  {loadingText}
                </div>
                <div className='cove-button__text--children' style={loading ? { opacity: 0 } : undefined}>
                  {children}
                </div>
              </span>
              <div className='cove-button__load-spin' style={loading ? { width: '28px', opacity: 1 } : undefined}>
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

export default Button
