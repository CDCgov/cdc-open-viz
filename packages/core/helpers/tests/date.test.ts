import { describe, expect, it } from 'vitest'
import { detectDateParseFormat, formatDate, getDateRenderFormat } from '../cove/date'

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
    const date = new Date(2025, 0, 15)
    const result = formatDate('%b. %-d %Y', date)
    expect(result).toContain(NBSP)
    expect(result).toBe(`Jan.${NBSP}15 2025`)
  })

  it('strips trailing period from "May." when using %b. format', () => {
    const date = new Date(2025, 4, 15)
    const result = formatDate('%b. %-d, %Y', date)
    expect(result).not.toContain('May.')
    expect(result).toContain('May')
  })

  it('leaves "May" alone when format does not use %b.', () => {
    const date = new Date(2025, 4, 15)
    const result = formatDate('%b %-d, %Y', date)
    expect(result).toContain('May')
    expect(result).not.toContain('May.')
  })

  it('does not strip period from other months when using %b. format', () => {
    const date = new Date(2025, 0, 15)
    const result = formatDate('%b. %-d, %Y', date)
    expect(result).toContain('Jan.')
  })

  describe('locale support', () => {
    it('formats month names in Spanish when locale is es-MX', () => {
      const date = new Date(2025, 0, 15)
      const result = formatDate('%B %-d, %Y', date, 'es-MX')
      expect(result).toContain('enero')
    })

    it('formats abbreviated month names in Spanish when locale is es-MX', () => {
      const date = new Date(2025, 2, 10)
      const result = formatDate('%b %Y', date, 'es-MX')
      expect(result).toContain('mar')
    })

    it('formats day names in Spanish when locale is es-MX', () => {
      const date = new Date(2025, 0, 13)
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

describe('detectDateParseFormat', () => {
  it('detects year-first slash dates', () => {
    expect(detectDateParseFormat(['2024/03/15', '2025/11/09'])).toMatchObject({
      detectedFormat: '%Y/%m/%d',
      isReliable: true,
      sampleSize: 2,
      ambiguous: false
    })
  })

  it('detects year-first dashed dates', () => {
    expect(detectDateParseFormat(['2024-03-15', '2025-11-09'])).toMatchObject({
      detectedFormat: '%Y-%m-%d',
      isReliable: true
    })
  })

  it('detects month-first and day-first formats when the sample disambiguates them', () => {
    expect(detectDateParseFormat(['03/15/2024', '11/09/2025'])).toMatchObject({
      detectedFormat: '%m/%d/%Y',
      isReliable: true
    })

    expect(detectDateParseFormat(['15/03/2024', '09/11/2025'])).toMatchObject({
      detectedFormat: '%d/%m/%Y',
      isReliable: true
    })
  })

  it('detects year-only and year-month formats', () => {
    expect(detectDateParseFormat(['2024', '2025'])).toMatchObject({
      detectedFormat: '%Y',
      isReliable: true
    })

    expect(detectDateParseFormat(['2024-03', '2025-11'])).toMatchObject({
      detectedFormat: '%Y-%m',
      isReliable: true
    })
  })

  it('ignores blank values while sampling', () => {
    expect(detectDateParseFormat(['2024/03/15', '', '  ', null, undefined, '2025/11/09'])).toMatchObject({
      detectedFormat: '%Y/%m/%d',
      isReliable: true,
      sampleSize: 2
    })
  })

  it('rejects invalid calendar dates', () => {
    expect(detectDateParseFormat(['2024/13/40'])).toMatchObject({
      isReliable: false,
      failureReason: 'no_matching_format'
    })
  })

  it('rejects mixed formats', () => {
    expect(detectDateParseFormat(['2024/03/15', '03/16/2024'])).toMatchObject({
      isReliable: false,
      failureReason: 'no_matching_format'
    })
  })

  it('treats dual-valid samples as ambiguous', () => {
    expect(detectDateParseFormat(['01/02/2024', '02/03/2024'])).toMatchObject({
      isReliable: false,
      ambiguous: true,
      failureReason: 'ambiguous'
    })
  })

  it('returns a no-sample result for empty inputs', () => {
    expect(detectDateParseFormat(['', '  ', null, undefined])).toMatchObject({
      isReliable: false,
      sampleSize: 0,
      failureReason: 'no_non_empty_values'
    })
  })

  it('caps the number of non-empty samples used for detection', () => {
    const largeSample = Array.from({ length: 75 }, (_, index) => `2024/03/${String((index % 28) + 1).padStart(2, '0')}`)

    expect(detectDateParseFormat(largeSample)).toMatchObject({
      detectedFormat: '%Y/%m/%d',
      isReliable: true,
      sampleSize: 50
    })
  })
})
