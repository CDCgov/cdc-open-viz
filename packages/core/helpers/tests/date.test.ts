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

  describe('locale support', () => {
    it('formats month names in Spanish when locale is es-MX', () => {
      const date = new Date(2025, 0, 15) // Jan 15, 2025
      const result = formatDate('%B %-d, %Y', date, 'es-MX')
      expect(result).toContain('enero')
    })

    it('formats abbreviated month names in Spanish when locale is es-MX', () => {
      const date = new Date(2025, 2, 10) // Mar 10, 2025
      const result = formatDate('%b %Y', date, 'es-MX')
      expect(result).toContain('mar')
    })

    it('formats day names in Spanish when locale is es-MX', () => {
      const date = new Date(2025, 0, 13) // Monday, Jan 13, 2025
      const result = formatDate('%A', date, 'es-MX')
      expect(result).toContain('lunes')
    })

    it('uses English formatting when locale is en-US', () => {
      const date = new Date(2025, 0, 15)
      const result = formatDate('%B %-d, %Y', date, 'en-US')
      expect(result).toContain('January')
    })

    it('falls back to default English when locale is unknown', () => {
      const date = new Date(2025, 0, 15)
      const result = formatDate('%B %-d, %Y', date, 'xx-XX')
      expect(result).toContain('January')
    })

    it('falls back to default English when locale is undefined', () => {
      const date = new Date(2025, 0, 15)
      const result = formatDate('%B %-d, %Y', date, undefined)
      expect(result).toContain('January')
    })

    it('formats numeric-only patterns identically regardless of locale', () => {
      const date = new Date(2025, 0, 15)
      const enResult = formatDate('%Y-%m-%d', date, 'en-US')
      const esResult = formatDate('%Y-%m-%d', date, 'es-MX')
      expect(enResult).toBe('2025-01-15')
      expect(esResult).toBe('2025-01-15')
    })
  })
})
