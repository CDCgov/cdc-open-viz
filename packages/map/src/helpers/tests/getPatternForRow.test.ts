import { describe, expect, it } from 'vitest'
import { getPatternForRow } from '../getPatternForRow'

const baseConfig: any = {
  map: {
    patterns: [
      {
        dataKey: 'Percent Vaccinated',
        dataValue: '99.99',
        pattern: 'circles',
        size: 'medium',
        color: '#000',
        label: '',
        contrastCheck: true
      },
      {
        dataKey: 'Status',
        dataValue: 'NA',
        pattern: 'lines',
        size: 'small',
        color: '#111',
        label: '',
        contrastCheck: true
      }
    ]
  }
}

describe('getPatternForRow', () => {
  it('matches decimal values regardless of numeric/string type', () => {
    const row = { 'Percent Vaccinated': 99.99 }
    const result = getPatternForRow(row, baseConfig)

    expect(result).toEqual({
      pattern: 'circles',
      dataKey: 'Percent Vaccinated',
      size: 'medium',
      patternIndex: 0,
      color: '#000'
    })
  })

  it('matches trimmed strings', () => {
    const row = { Status: ' NA ' }
    const result = getPatternForRow(row, baseConfig)

    expect(result?.pattern).toBe('lines')
    expect(result?.patternIndex).toBe(1)
  })

  it('returns null when no pattern matches', () => {
    const row = { 'Percent Vaccinated': 75.06, Status: '*' }
    expect(getPatternForRow(row, baseConfig)).toBeNull()
  })

  it('matches blank dataKey patterns against any row value', () => {
    const config = {
      map: {
        patterns: [
          {
            dataKey: '',
            dataValue: 'Colorado',
            pattern: 'waves',
            size: 'large',
            color: '#222',
            label: '',
            contrastCheck: true
          }
        ]
      }
    }
    const row = { STATE: 'Colorado', Rate: 55 }
    const result = getPatternForRow(row, config)

    expect(result).toEqual({
      pattern: 'waves',
      dataKey: 'STATE',
      size: 'large',
      patternIndex: 0,
      color: '#222'
    })
  })

  it('prioritizes specific dataKey matches over broad matches', () => {
    const config = {
      map: {
        patterns: [
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
      }
    }
    const row = { Rate: 55, Category: '55' }
    const result = getPatternForRow(row, config)

    expect(result).toEqual({
      pattern: 'circles',
      dataKey: 'Rate',
      size: 'medium',
      patternIndex: 1,
      color: '#000'
    })
  })

  it('does not match blank dataKey patterns with empty values', () => {
    const config = {
      map: {
        patterns: [
          {
            dataKey: '',
            dataValue: '   ',
            pattern: 'lines',
            size: 'small',
            color: '#111',
            label: '',
            contrastCheck: true
          }
        ]
      }
    }
    const row = { STATE: 'Colorado' }
    expect(getPatternForRow(row, config)).toBeNull()
  })
})
