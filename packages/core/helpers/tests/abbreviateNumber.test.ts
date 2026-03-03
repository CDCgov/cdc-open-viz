import { describe, it, expect } from 'vitest'
import { abbreviateNumber } from '../cove/number'

describe('abbreviateNumber', () => {
  describe('default (English) abbreviations', () => {
    it('abbreviates thousands with K', () => {
      expect(abbreviateNumber(1500)).toBe('1.5K')
    })

    it('abbreviates millions with M', () => {
      expect(abbreviateNumber(2500000)).toBe('2.5M')
    })

    it('abbreviates billions with B', () => {
      expect(abbreviateNumber(3000000000)).toBe('3B')
    })

    it('does not abbreviate numbers below 1000', () => {
      expect(abbreviateNumber(999)).toBe('999')
    })

    it('handles negative numbers', () => {
      expect(abbreviateNumber(-5000)).toBe('-5K')
    })
  })

  describe('en-US locale abbreviations', () => {
    it('uses K/M/B for en-US', () => {
      expect(abbreviateNumber(1500, 'en-US')).toBe('1.5K')
      expect(abbreviateNumber(2500000, 'en-US')).toBe('2.5M')
      expect(abbreviateNumber(3000000000, 'en-US')).toBe('3B')
    })
  })

  describe('es-MX locale abbreviations', () => {
    it('uses " mil" for thousands in Spanish', () => {
      expect(abbreviateNumber(1500, 'es-MX')).toBe('1.5 mil')
    })

    it('uses " M" for millions in Spanish', () => {
      expect(abbreviateNumber(2500000, 'es-MX')).toBe('2.5 M')
    })

    it('uses " mil M" for billions in Spanish', () => {
      expect(abbreviateNumber(3000000000, 'es-MX')).toBe('3 mil M')
    })

    it('does not abbreviate numbers below 1000 in Spanish', () => {
      expect(abbreviateNumber(999, 'es-MX')).toBe('999')
    })
  })

  describe('unknown locale', () => {
    it('falls back to English K/M/B for unknown locale', () => {
      expect(abbreviateNumber(1500, 'xx-XX')).toBe('1.5K')
      expect(abbreviateNumber(2500000, 'xx-XX')).toBe('2.5M')
    })
  })
})
