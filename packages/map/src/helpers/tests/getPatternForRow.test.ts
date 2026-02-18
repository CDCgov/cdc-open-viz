import { describe, expect, it } from 'vitest'
import { getPatternForRow } from '../getPatternForRow'

const baseConfig: any = {
  map: {
    patterns: [
      { dataKey: 'Percent Vaccinated', dataValue: '99.99', pattern: 'circles', size: 'medium', color: '#000' },
      { dataKey: 'Status', dataValue: 'NA', pattern: 'lines', size: 'small', color: '#111' }
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
})
