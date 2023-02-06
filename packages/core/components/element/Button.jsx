import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import LoadSpin from '../ui/LoadSpin'

// Styles
import '../../styles/v2/components/element/button.scss'

const Button = ({
                  style,
                  role,
                  hoverStyle = {},
                  fluid = false,
                  disabled = false,
                  loadingText = "Loading...",
                  flexCenter = false,
                  active = false,
                  onClick,
                  children, ...attributes
                }) => {

  const buttonRef = useRef(null)

  const [ buttonState, setButtonState ] = useState('out')
  const [ customStyles, setCustomStyles ] = useState({ ...style })
  const [ childrenWidth, setChildrenWidth ] = useState(0)
  const [ loadtextWidth, setLoadtextWidth ] = useState(0)

  const attributesObj = {
    ...attributes,
    style: customStyles,
    className:
      'cove-button' +
      (flexCenter || 'loader' === role ? ' cove-button--flex-center' : '') +
      (fluid ? ' cove-button--fluid' : '') +
      (disabled ? ' cove-button--loading' : '') +
      (attributes.className ? ' ' + attributes.className : ''),
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
      setChildrenWidth(ghostSpan.offsetWidth) //Toss in a -2px to account for subpixel offset
      setLoadtextWidth(ghostLoaderSpan.offsetWidth) //Toss in a 2px to account for subpixel offset

      //Remove ghost objects from document
      buttonRef.current.parentNode.removeChild(ghostSpan)
      buttonRef.current.parentNode.removeChild(ghostLoaderSpan)
    }
  }, [role, buttonRef.current])

  useEffect(() => {
    //Adjust button styles depending on cursor, focus, and active, states
    return buttonState === 'in'
      ? setCustomStyles(stateStyles => ({ ...stateStyles, ...hoverStyle }))
      : buttonState === 'out'
        ? active //If button state is out, check if its 'active'; we want to keep hover styles applied to 'active' buttons
          ? null //Button is active, so leave the 'hover' styles in place
          : setCustomStyles({ ...style }) //Button is not 'active', so reset display styles back to default
        : false //Button state is neither 'in' nor 'out' - do nothing
  }, [ buttonState, active ])

  return (
    <button {...attributesObj}
            onClick={(e) => {
              e.preventDefault()
              return disabled || onClick()
            }}
            disabled={disabled || attributesObj.disabled}
            ref={buttonRef}>
      {children &&
        <>
          {'loader' === role &&
            <>
              <span className="cove-button__text" style={disabled ? { width: loadtextWidth + 'px' } : { width: childrenWidth + 'px' }}>
                <div className="cove-button__text--loading" style={disabled ? { opacity: 1 } : null}>{loadingText}</div>
                <div className="cove-button__text--children" style={disabled ? { opacity: 0 } : null}>{children}</div>
              </span>
              <div className="cove-button__load-spin" style={disabled ? { width: '28px', opacity: 1 } : null}>
                <LoadSpin className="ml-1" size={20}/>
              </div>
            </>
          }
          {'loader' !== role && children}
        </>
      }
    </button>
  )
}

Button.propTypes = {
  /** Specify special role type for button */
  role: PropTypes.oneOf([ undefined, 'loader' ]),
  /** Provide object with styles that overwrite base styles when hovered */
  hoverStyle: PropTypes.object,
  /** Enables button to stretch to the full width of the content */
  fluid: PropTypes.bool,
  /** Prevents interaction with the button while supplied condition is `true`
   *
   * When **role** is set to `loader`, a loading spinner is also displayed */
  disabled: PropTypes.bool,
  /** Set text to appear during loading animation */
  loadingText: PropTypes.string,
  /** Displays button as flex and centers all direct children nodes. Useful for aligning icons and text */
  flexCenter: PropTypes.bool,
  /** When value condition is true, retains any custom, inline `style={}` defined */
  active: PropTypes.bool
}

export default Button
