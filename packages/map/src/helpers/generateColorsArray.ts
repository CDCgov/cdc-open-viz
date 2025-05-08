import chroma from 'chroma-js'
import { DEFAULT_MAP_BACKGROUND } from './constants'

/**
 * Generate an array of colors based on a given color [color, hoverColor, darkColor]
 * @param {string} color - The base color to generate the array from
 * @param {boolean} special - A flag to determine if the hover color should be brighter or saturated
 * @returns {string[]} - An array of colors
 */
export const generateColorsArray = (color: string = DEFAULT_MAP_BACKGROUND, special: boolean = false) => {
  let colorObj = chroma(color)
  let hoverColor = special ? colorObj.brighten(0.5).hex() : colorObj.saturate(1.3).hex()
  return [color, hoverColor, colorObj.darken(0.3).hex()]
}
