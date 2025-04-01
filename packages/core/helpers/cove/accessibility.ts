import chroma from 'chroma-js'

import { APP_FONT_COLOR } from '@cdc/core/helpers/cove/fontSettings'

/**
 * WCAG 2.1 CONSTANTS
 * TEXT (4.5 Contrast Ratio): https://www.w3.org/TR/WCAG20-TECHS/G18.html
 * NON-TEXT (3.5 Contrast Ratio): https://www.w3.org/TR/WCAG20-TECHS/G145.html
 *
 * !important - DO NOT CHANGE.
 */
export const WCAG_TEXT_CONTRAST_RATIO = 4.5
export const WCAG_NON_TEXT_CONTRAST_RATIO = 3.5

export const getContrastColor = (textColor: string, bgColor: string) => {
  if (!bgColor) return
  if (chroma.contrast(textColor, bgColor) < WCAG_TEXT_CONTRAST_RATIO) {
    switch (textColor) {
      case '#FFF':
        return APP_FONT_COLOR
      case APP_FONT_COLOR:
        return '#FFF'
      default:
        return textColor
    }
  }
  return textColor
}

export const checkColorContrast = (color1: string, color2: string) => {
  if (!chroma.valid(color1) || !chroma.valid(color2)) return false
  return chroma.contrast(color1, color2) >= WCAG_NON_TEXT_CONTRAST_RATIO
}

export const getColorContrast = (color1: string, color2: string) => {
  if (!chroma.valid(color1) || !chroma.valid(color2)) return false
  return chroma.contrast(color1, color2)
}

type OutlinedTextColors = {
  textColor: string
  strokeColor: string
}

/**
 * Get the ideal text and text-outline/stroke color for use on a given background color.
 *
 * @param {string} bgColor Color of the background
 * @returns {OutlinedTextColors} Text and outline stroke color ideal for the background in hex (e.g. '#abc123') format
 */
export const outlinedTextColor = (bgColor: string): OutlinedTextColors => {
  const white = '#ffffff'

  if (!chroma.valid(bgColor) || chroma.contrast(APP_FONT_COLOR, bgColor) >= WCAG_TEXT_CONTRAST_RATIO) {
    return { textColor: APP_FONT_COLOR, strokeColor: white }
  } else {
    return { textColor: white, strokeColor: APP_FONT_COLOR }
  }
}
