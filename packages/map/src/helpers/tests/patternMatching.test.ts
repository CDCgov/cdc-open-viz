import { describe, expect, it } from 'vitest'
import { patternValuesMatch } from '../patternMatching'

describe('patternValuesMatch', () => {
  it('matches numeric strings and numbers', () => {
    expect(patternValuesMatch('99.99', 99.99)).toBe(true)
    expect(patternValuesMatch(' 75.06 ', 75.06)).toBe(true)
    expect(patternValuesMatch('0', 0)).toBe(true)
  })

  it('compares non-numeric strings with trim and case sensitivity', () => {
    expect(patternValuesMatch(' NA ', 'NA')).toBe(true)
    expect(patternValuesMatch('NA', 'na')).toBe(false)
    expect(patternValuesMatch('20% - 29.9%', '20% - 29.9%')).toBe(true)
  })

  it('returns false for nullish values', () => {
    expect(patternValuesMatch(null, 'NA')).toBe(false)
    expect(patternValuesMatch(undefined, 'NA')).toBe(false)
    expect(patternValuesMatch('NA', null)).toBe(false)
    expect(patternValuesMatch('NA', undefined)).toBe(false)
  })
})
