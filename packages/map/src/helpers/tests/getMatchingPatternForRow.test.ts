import { describe, expect, it } from 'vitest'
import { getMatchingPatternForRow } from '../getMatchingPatternForRow'
import { PatternSelection } from '../../types/MapConfig'

describe('getMatchingPatternForRow', () => {
  it('matches specific dataKey patterns first', () => {
    const row = { Rate: 55, Status: '55' }
    const patterns: PatternSelection[] = [
      {
        dataKey: '',
        dataValue: '55',
        pattern: 'lines',
        size: 'small',
        color: '#111',
        label: '',
        contrastCheck: true
      },
      {
        dataKey: 'Rate',
        dataValue: '55',
        pattern: 'circles',
        size: 'medium',
        color: '#000',
        label: '',
        contrastCheck: true
      }
    ]

    const result = getMatchingPatternForRow(row, patterns)

    expect(result?.patternIndex).toBe(1)
    expect(result?.matchedDataKey).toBe('Rate')
    expect(result?.pattern.pattern).toBe('circles')
  })

  it('falls back to broad matching when dataKey is blank', () => {
    const row = { State: 'Colorado', Rate: 55 }
    const patterns: PatternSelection[] = [
      {
        dataKey: '',
        dataValue: 'Colorado',
        pattern: 'waves',
        size: 'large',
        color: '#333',
        label: '',
        contrastCheck: true
      }
    ]

    const result = getMatchingPatternForRow(row, patterns)

    expect(result?.patternIndex).toBe(0)
    expect(result?.matchedDataKey).toBe('State')
  })

  it('does not match when dataValue is empty', () => {
    const row = { State: 'Colorado', Rate: 55 }
    const patterns: PatternSelection[] = [
      {
        dataKey: '',
        dataValue: '   ',
        pattern: 'waves',
        size: 'large',
        color: '#333',
        label: '',
        contrastCheck: true
      }
    ]

    expect(getMatchingPatternForRow(row, patterns)).toBeNull()
  })

  it('supports numeric string and number matching for broad patterns', () => {
    const row = { Rate: 55 }
    const patterns: PatternSelection[] = [
      {
        dataKey: '',
        dataValue: '55',
        pattern: 'waves',
        size: 'large',
        color: '#333',
        label: '',
        contrastCheck: true
      }
    ]

    const result = getMatchingPatternForRow(row, patterns)

    expect(result?.matchedDataKey).toBe('Rate')
    expect(result?.patternIndex).toBe(0)
  })
})
