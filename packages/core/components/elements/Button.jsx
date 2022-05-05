import React, { useEffect, useState } from 'react'

import '../../styles/v2/components/button.scss'

const Button = ({ fullwidth, textColor = null, bgColor = null, children, ...attributes }) => {
  const [ isRendering, setIsRendering ] = useState(true)
  const [ customColors, setCustomColors ] = useState({
    color: null,
    colorHover: null,
    bg: null,
    bgHover: null
  })

  let attributesObj = {
    ...attributes,
    className: 'cove-button' + (fullwidth ? ' fluid' : '') + (attributes.className ? ' ' + attributes.className : '')
  }

  const registerColorValue = (prop, keyBase, keyHover) => {
    // Set up payload to modify state color object
    let payload = {}

    // Validate that the entry has content, else return null
    const validate = (obj) => {
      return obj.length > 0 ? obj : null
    }

    // Check provided prop to see if string or array, and parse colors accordingly
    if (prop) {
      if (typeof prop === 'string') {
        payload[[ keyBase ]] = validate(prop)
      } else if (Array.isArray(prop)) {
        if (prop.length === 1) {
          payload[[ keyBase ]] = validate(prop[0])
        } else if (prop.length === 2) {
          payload[[ keyBase ]] = validate(prop[0])
          payload[[ keyHover ]] = validate(prop[1])
        }
      }
    }

    setCustomColors(colors => ({ ...colors, ...payload }))
  }

  useEffect(() => {
    registerColorValue(textColor, 'color', 'colorHover')
    registerColorValue(bgColor, 'bg', 'bgHover')
  }, [ textColor, bgColor ])

  setTimeout(() => {
    setIsRendering(false)
  }, 200)

  let styleOverride = {
    transition: isRendering ? 'none' : null,
    color: customColors.color,
    backgroundColor: customColors.bg
  }

  const setHover = (e) => {
    e.target.style.color = customColors.colorHover
    e.target.style.backgroundColor= customColors.bgHover
  }

  const setHoverOut = (e) => {
    e.target.style.transition = isRendering ? 'none' : null
    e.target.style.color = customColors.color
    e.target.style.backgroundColor = customColors.bg
  }

  return (
    <button {...attributesObj}
            style={{...attributesObj.style, ...styleOverride}}
            onMouseOver={setHover}
            onMouseOut={setHoverOut}>
      {children}
    </button>
  )
}

export default Button
