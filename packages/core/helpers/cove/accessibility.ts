import chroma from 'chroma-js'

/**
 * WCAG 2.0 Standard requires 4.5:1 contrast ratio
 * https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * !important - DO NOT CHANGE.
 */
export const WCAG_CONTRAST_RATIO = 4.5

export const getContrastColor = (textColor: string, bgColor: string) => {
  if (chroma.contrast(textColor, bgColor) < WCAG_CONTRAST_RATIO) {
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
