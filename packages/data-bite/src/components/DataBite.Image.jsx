import React, { useState, useRef } from 'react'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

const DataBiteImage = ({ calculateDataBite }) => {
  // Store Selectors
  const { config } = useVisConfig()
  const { biteStyle, imageData } = config

  const [ imgSrc, setImgSrc ] = useState(imageData.url || '')
  const [ imgAlt, setImgAlt ] = useState(imageData.alt || '')
  const [ targetValue ] = useState(Number(calculateDataBite(false)))

  const activeArgument = useRef(false)

  const getDynamicImage = (option) => {
    let { source, alt, arguments: argumentArr } = option

    if (activeArgument.current === false && argumentArr.length > 0) { // If option has arguments
      if (argumentArr[0].operator?.length > 0 && argumentArr[0].threshold?.length > 0) { // If first argument has operator and threshold
        if (OPERATORS[argumentArr[0].operator](targetValue, argumentArr[0].threshold)) { // If first argument passes value check
          if (undefined !== argumentArr[1]) { // If option has a second argument
            if (argumentArr[1].operator?.length > 0 && argumentArr[1].threshold?.length > 0) { // If second argument has operator and threshold
              if (OPERATORS[argumentArr[1].operator](targetValue, argumentArr[1].threshold)) { // If second argument passes value check
                if (alt !== '' && alt !== undefined) setImgAlt(alt) // Set alt text
                setImgSrc(source) // Set image source
                activeArgument.current = true // Set active argument to true and break out of loop
              }
            }
          } else {
            if (alt !== '' && alt !== undefined) setImgAlt(alt)
            setImgSrc(source)
            activeArgument.current = true
          }
        }
      }
    }
  }

  // Check for Dynamic Images
  if (imageData && imageData.display === 'dynamic' && imageData.options && imageData.options?.length > 0) {
    imageData.options.forEach((option, index) => getDynamicImage(option))
  }

  return imgSrc && imgSrc.length > 0 && biteStyle !== 'graphic' && imageData.display !== 'none'
    ? <img alt={imgAlt} srcSet={imgSrc} className="cove-data-bite__image"/>
    : null
}

const OPERATORS = {
  '<': (a, b) => {
    return a < b
  },
  '>': (a, b) => {
    return a > b
  },
  '<=': (a, b) => {
    return a <= b
  },
  '>=': (a, b) => {
    return a >= b
  },
  '≠': (a, b) => {
    return a !== b
  },
  '=': (a, b) => {
    return a === b
  }
}

export default DataBiteImage
