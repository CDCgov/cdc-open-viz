import chroma from 'chroma-js'

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
        return '#000'
      case '#000':
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
  const bodyStyles = getComputedStyle(document.body)
  let coolGray90 = bodyStyles.getPropertyValue('--cool-gray-90')
  if (!coolGray90 || coolGray90 === '') { coolGray90 = '#1c1d1f' }
  const white = '#ffffff'

  if (!chroma.valid(bgColor) || chroma.contrast(coolGray90, bgColor) >= WCAG_TEXT_CONTRAST_RATIO) {
    return { textColor: coolGray90, strokeColor: white }
  } else {
    return { textColor: white, strokeColor: coolGray90 }
  }
}
