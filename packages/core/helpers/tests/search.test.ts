import { describe, expect, it } from 'vitest'
import { normalizeSearchText, prepareSearchQuery } from '../cove/search'

describe('cove search helpers', () => {
  it('normalizes case and accents', () => {
    expect(normalizeSearchText(' Junín ')).toBe('junin')
    expect(prepareSearchQuery('Junin').matches('Junín')).toBe(true)
  })

  it('matches multi-word accented values with unaccented queries', () => {
    expect(prepareSearchQuery('sao tome').matches('São Tomé and Príncipe')).toBe(true)
  })

  it('requires all tokens while allowing any order', () => {
    expect(prepareSearchQuery('age county').matches('County rate by age group')).toBe(true)
    expect(prepareSearchQuery('age missing').matches('County rate by age group')).toBe(false)
  })

  it('marks empty or whitespace-only queries as empty', () => {
    expect(prepareSearchQuery('').hasQuery).toBe(false)
    expect(prepareSearchQuery('   ').hasQuery).toBe(false)
  })

  it('does not transliterate non-decomposing characters', () => {
    expect(prepareSearchQuery('soren').matches('Søren')).toBe(false)
  })

  it('returns raw-string ranges for accent-insensitive highlighting', () => {
    expect(prepareSearchQuery('Junin').getMatchRanges('Junín')).toEqual([{ start: 0, end: 5 }])
  })
})
