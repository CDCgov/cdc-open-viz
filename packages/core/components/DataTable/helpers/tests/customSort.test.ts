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
})
