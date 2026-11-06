import { describe, expect, it } from 'vitest'
import { resolvePatternColor } from './patternColors'

describe('resolvePatternColor', () => {
  it.each(['', undefined, '   '])('resolves automatic color %s against the actual fill', color => {
    expect(resolvePatternColor(color, '#EEEEEE')).toBe('#1C1D1F')
    expect(resolvePatternColor(color, '#023F91')).toBe('#FFFFFF')
  })

  it('chooses the stronger contrast rather than always preferring white', () => {
    expect(resolvePatternColor('', '#3497EC')).toBe('#1C1D1F')
  })

  it('preserves explicit CSS colors', () => {
    expect(resolvePatternColor('red', '#ff0000')).toBe('red')
  })

  it('handles a missing or invalid background without throwing', () => {
    expect(resolvePatternColor('', '')).toBe('#1C1D1F')
    expect(resolvePatternColor('', 'invalid')).toBe('#1C1D1F')
  })
})
