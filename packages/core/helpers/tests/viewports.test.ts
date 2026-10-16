import { describe, expect, it } from 'vitest'
import { isBelowBreakpoint, isLegendWrapViewport, isMobileFontViewport } from '../viewports'

describe('viewport helpers', () => {
  it('treats smaller viewport keys as below larger breakpoint keys', () => {
    expect(isBelowBreakpoint('sm', 'xs')).toBe(true)
    expect(isBelowBreakpoint('sm', 'sm')).toBe(false)
    expect(isBelowBreakpoint('sm', 'md')).toBe(false)
  })

  it('uses core viewport ordering for shared mobile checks', () => {
    expect(isLegendWrapViewport('xs')).toBe(true)
    expect(isLegendWrapViewport('sm')).toBe(false)
    expect(isMobileFontViewport('xxs')).toBe(true)
    expect(isMobileFontViewport('lg')).toBe(false)
  })
})
