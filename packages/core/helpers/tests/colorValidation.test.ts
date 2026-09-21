import { describe, expect, it } from 'vitest'
import {
  EMPTY_PALETTE_COLOR,
  isValidPaletteColor,
  sanitizePaletteColor
} from '../palettes/colorValidation'

describe('palette color validation', () => {
  it('accepts hex values and CSS color names', () => {
    expect(isValidPaletteColor('#ffffff')).toBe(true)
    expect(isValidPaletteColor('white')).toBe(true)
  })

  it('sanitizes a single invalid palette color to empty', () => {
    expect(sanitizePaletteColor('#')).toBe(EMPTY_PALETTE_COLOR)
    expect(sanitizePaletteColor('whyte')).toBe(EMPTY_PALETTE_COLOR)
    expect(sanitizePaletteColor('white')).toBe('white')
  })
})
