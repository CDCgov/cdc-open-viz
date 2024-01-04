import chroma from 'chroma-js'

export const generateColorsArray = (color = '#000000', special = false) => {
  let colorObj = chroma(color)
  let hoverColor = special ? colorObj.brighten(0.5).hex() : colorObj.saturate(1.3).hex()

  return [color, hoverColor, colorObj.darken(0.3).hex()]
}
