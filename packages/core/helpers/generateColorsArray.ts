import chroma from 'chroma-js'

/**
 * Generate an array of colors based on a given color [color, hoverColor, darkColor]
 * @param {string} color - The base color to generate the array from (defaults to black)
 * @param {boolean} special - A flag to determine if the hover color should be brighter or saturated
 * @returns {string[]} - An array of colors [baseColor, hoverColor, darkerColor]
 */
export const generateColorsArray = (color: string = '#000000', special: boolean = false): string[] => {
  const colorObj = chroma(color)
  const hoverColor = special ? colorObj.brighten(0.5).hex() : colorObj.saturate(1.3).hex()
  return [color, hoverColor, colorObj.darken(0.3).hex()]
}