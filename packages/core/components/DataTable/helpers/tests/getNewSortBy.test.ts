import { describe, it, expect } from 'vitest'
import { getNewSortBy } from '../getNewSortBy'

describe('getNewSortBy()', () => {
  it('should return ascending when currently undefined', () => {
    const sortBy = { column: undefined, asc: undefined, colIndex: 0 }
    const column = 'someColumn'
    const index = 1
    const result = getNewSortBy(sortBy, column, index)
    expect(result).toEqual({ column, asc: true, colIndex: index })
  })
  it('should return ascending false when currently true', () => {
    const sortBy = { column: 'someColumn', asc: true, colIndex: 0 }
    const column = 'someColumn'
    const index = 1
    const result = getNewSortBy(sortBy, column, index)
    expect(result).toEqual({ column, asc: false, colIndex: index })
  })
  it('should return ascending undefined when currently false', () => {
    const sortBy = { column: 'someColumn', asc: false, colIndex: 0 }
    const column = 'someColumn'
    const index = 1
    const result = getNewSortBy(sortBy, column, index)
    expect(result).toEqual({ column: undefined, asc: undefined, colIndex: index })
  })
})
