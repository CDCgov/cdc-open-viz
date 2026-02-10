import { describe, it, expect } from 'vitest'
import { getDateRenderFormat, formatDate } from '../cove/date'

const NBSP = '\u00A0'

describe('getDateRenderFormat', () => {
  it('replaces space between %b. and %-d with NBSP', () => {
    expect(getDateRenderFormat('%b. %-d %Y')).toBe(`%b.${NBSP}%-d %Y`)
  })

  it('replaces space between %b and %-d with NBSP', () => {
    expect(getDateRenderFormat('%b %-d %Y')).toBe(`%b${NBSP}%-d %Y`)
  })

  it('replaces space between %B and %-d (full month name)', () => {
    expect(getDateRenderFormat('%B %-d, %Y')).toBe(`%B${NBSP}%-d, %Y`)
  })

  it('leaves format unchanged when no month-day space pattern', () => {
    expect(getDateRenderFormat('%Y-%m-%d')).toBe('%Y-%m-%d')
  })

  it('does not replace existing NBSP (idempotent)', () => {
    const alreadyNbsp = `%b.${NBSP}%-d %Y`
    expect(getDateRenderFormat(alreadyNbsp)).toBe(alreadyNbsp)
  })

  it('returns undefined for undefined input', () => {
    expect(getDateRenderFormat(undefined)).toBeUndefined()
  })

  it('returns empty string for empty string input', () => {
    expect(getDateRenderFormat('')).toBe('')
  })
})

describe('formatDate', () => {
  it('renders date with NBSP when format has space between month and day', () => {
    const date = new Date(2025, 0, 15) // Jan 15, 2025
    const result = formatDate('%b. %-d %Y', date)
    expect(result).toContain(NBSP)
    expect(result).toBe(`Jan.${NBSP}15 2025`)
  })

  it('strips trailing period from "May." when using %b. format', () => {
    const date = new Date(2025, 4, 15) // May 15, 2025
    const result = formatDate('%b. %-d, %Y', date)
    expect(result).not.toContain('May.')
    expect(result).toContain('May')
  })

  it('leaves "May" alone when format does not use %b.', () => {
    const date = new Date(2025, 4, 15) // May 15, 2025
    const result = formatDate('%b %-d, %Y', date)
    expect(result).toContain('May')
    expect(result).not.toContain('May.')
  })

  it('does not strip period from other months when using %b. format', () => {
    const date = new Date(2025, 0, 15) // Jan 15, 2025
    const result = formatDate('%b. %-d, %Y', date)
    expect(result).toContain('Jan.')
  })
})
