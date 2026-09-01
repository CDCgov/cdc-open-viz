import { describe, it, expect } from 'vitest'
import { customSort } from '../customSort'

describe('customSort()', () => {
  it('should return positive number when a > b', () => {
    const a = 3
    const b = 1
    const sortBy = { column: 'someColumn', asc: true, colIndex: 0 }
    const config = { type: 'map' }
    expect(customSort(a, b, sortBy, config)).greaterThan(0)
    expect(customSort(a, b, sortBy, { type: 'notMap' })).greaterThan(0)
  })
  it('should return negative number when a < b', () => {
    const a = 1
    const b = 3
    const sortBy = { column: 'someColumn', asc: true, colIndex: 0 }
    const config = { type: 'map' }
    expect(customSort(a, b, sortBy, config)).lessThan(0)
    expect(customSort(a, b, sortBy, { type: 'notMap' })).lessThan(0)
  })
  it('works for dates', () => {
    const a = 2000
    const b = 1999
    const sortBy = { column: 'someColumn', asc: true, colIndex: 0 }
    expect(
      customSort(a, b, sortBy, { xAxis: { dataKey: sortBy.column, dateParseFormat: '%Y', type: 'date' } })
    ).greaterThan(0)
    expect(
      customSort(b, a, sortBy, { xAxis: { dataKey: sortBy.column, dateParseFormat: '%Y', type: 'date' } })
    ).lessThan(0)
  })
  it('works for strings', () => {
    const a = 'banana'
    const b = 'apple'
    const sortBy = { column: 'someColumn', asc: true, colIndex: 0 }
    const config = { type: 'map' }
    expect(customSort(a, b, sortBy, config)).greaterThan(0)
    expect(customSort(a, b, sortBy, { type: 'notMap' })).greaterThan(0)
    expect(customSort(b, a, sortBy, config)).lessThan(0)
    expect(customSort(b, a, sortBy, { type: 'notMap' })).lessThan(0)
  })
  it('works for strings after number', () => {
    const a = 'banana'
    const b = '1'
    const sortBy = { column: 'someColumn', asc: true, colIndex: 0 }
    const config = { type: 'map' }
    expect(customSort(a, b, sortBy, config)).greaterThan(0)
    expect(customSort(a, b, sortBy, { type: 'notMap' })).greaterThan(0)
    expect(customSort(b, a, sortBy, config)).lessThan(0)
    expect(customSort(b, a, sortBy, { type: 'notMap' })).lessThan(0)
  })

  it('sorts zero-padded FIPS identifiers as strings', () => {
    const sortBy = { column: 'geo', asc: true, colIndex: 0 }
    const config = {
      type: 'map',
      general: { geoType: 'us-county' },
      columns: {
        geo: { name: 'Location' }
      }
    }

    expect(customSort('01010', '0102', sortBy, config)).lessThan(0)
    expect(customSort('01010', '10001', sortBy, config)).lessThan(0)
    expect(customSort('10001', '01010', { ...sortBy, asc: false }, config)).lessThan(0)
    expect(customSort('01010', '0102', sortBy, { type: 'table' })).greaterThan(0)
  })

  it('does not throw when map region values are null', () => {
    const sortBy = { column: 'someColumn', asc: true, colIndex: 0 }

    expect(() => customSort('region 2', null, sortBy, { type: 'map' })).not.toThrow()
    expect(customSort('region 2', null, sortBy, { type: 'map' })).toBeLessThan(0)
    expect(() => customSort(null, 'region 2', sortBy, { type: 'map' })).not.toThrow()
    expect(customSort(null, 'region 2', sortBy, { type: 'map' })).toBeGreaterThan(0)
  })

  it('falls back safely when map region labels do not end in digits', () => {
    const sortBy = { column: 'someColumn', asc: true, colIndex: 0 }

    expect(() => customSort('region east', 'region west', sortBy, { type: 'map' })).not.toThrow()
    expect(customSort('region east', 'region west', sortBy, { type: 'map' })).toBeLessThan(0)
  })
})
