import chroma from 'chroma-js'

export const EMPTY_PALETTE_COLOR = ''

export const isValidPaletteColor = (color: unknown): color is string => {
  return typeof color === 'string' && color.trim().length > 0 && chroma.valid(color.trim())
}

export const sanitizePaletteColor = (color: unknown): string => {
  return isValidPaletteColor(color) ? color.trim() : EMPTY_PALETTE_COLOR
}
