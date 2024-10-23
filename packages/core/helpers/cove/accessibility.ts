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

export const handleDismissTooltip = (e, tooltipShowHandler) => {
  if (e.key === 'Escape') {
    tooltipShowHandler(false)
  }
  return
}
