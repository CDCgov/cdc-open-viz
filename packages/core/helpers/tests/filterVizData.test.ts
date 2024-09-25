import { describe, it, expect } from 'vitest'
import { filterVizData } from '../filterVizData'
describe('filterVizData', () => {
  it('filters data when there is a nested filter', () => {
    const nestedFilter = {
      columnName: 'nestedColumn',
      id: 1,
      active: 'nestedValue',
      values: [],
      filterStyle: 'nested-dropdown',
      subGrouping: {
        active: 'subGroupValue',
        columnName: 'subGroupColumn',
        valuesLookup: { nestedValue: { values: ['subGroupValue'] } }
      }
    }
    const normalFilter = { columnName: 'normalColumn', id: 2, active: 'normalValue', values: [] }

    const data = [
      { nestedColumn: 'nestedValue', subGroupColumn: 'subGroupValue', normalColumn: 'normalValue' },
      { nestedColumn: 'X', subGroupColumn: 'subGroupValue', normalColumn: 'normalValue' },
      { nestedColumn: 'nestedValue', subGroupColumn: 'X', normalColumn: 'normalValue' },
      { nestedColumn: 'nestedValue', subGroupColumn: 'subGroupValue', normalColumn: 'X' },
      { nestedColumn: 'nestedValue', subGroupColumn: 'subGroupValue', normalColumn: 'normalValue' }
    ]

    const filters = [nestedFilter, normalFilter]
    const filteredData = filterVizData(filters, data)
    expect(filteredData.length).toEqual(2)
  })
})
