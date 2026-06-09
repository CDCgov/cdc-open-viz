import _ from 'lodash'
import { SharedFilter } from '../../types/SharedFilter'
import { filterData } from '../filterData'

describe('filterData', () => {
  it('should filter data based on the provided filters', () => {
    const filters = [
      { tier: 1, columnName: 'name', active: 'John', queuedActive: 'John', fileName: 'abc', key: 'abc' },
      { tier: 2, columnName: 'age', active: 30, queuedActive: 30, fileName: 'abc', key: 'abc' }
    ] as SharedFilter[]
    const data = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'John', age: 35 },
      { name: 'Jane', age: 30 }
    ]

    const result = filterData(filters, data)

    expect(result).toEqual([{ name: 'John', age: 30 }])
  })

  it('filters with parents', () => {
    const filters = [
      { columnName: 'name', active: 'John', queuedActive: 'John', fileName: 'abc', key: 'abc' },
      { columnName: 'age', active: 30, queuedActive: 30, fileName: 'abc', key: 'abc', parents: ['name'] }
    ] as SharedFilter[]
    const data = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'John', age: 35 },
      { name: 'Jane', age: 30 }
    ]

    const result = filterData(filters, data)

    expect(result).toEqual([{ name: 'John', age: 30 }])
  })

  it('narrows a File Name filter by valueSelector when no filterSelector is set (dev default)', () => {
    const filters = [
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        active: 'Colorado',
        apiFilter: { apiEndpoint: 'http://test.gov/geos', valueSelector: 'geography' },
        key: 'geo'
      }
    ] as SharedFilter[]
    const data = [
      { geography: 'Colorado', county_state: 'Colorado' },
      { geography: 'Alabama', county_state: 'Alabama' }
    ]

    expect(filterData(filters, data)).toEqual([{ geography: 'Colorado', county_state: 'Colorado' }])
  })

  it('narrows a linked-geo File Name filter by filterSelector (county selected)', () => {
    const filters = [
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        active: 'Adams, CO',
        apiFilter: {
          apiEndpoint: 'http://test.gov/geos',
          valueSelector: 'geography',
          filterSelector: 'county_state'
        },
        key: 'geo'
      }
    ] as SharedFilter[]
    const data = [
      { geography: 'Colorado', county_state: 'Colorado', county: 'All' },
      { geography: 'Colorado', county_state: 'Adams, CO', county: 'Adams' },
      { geography: 'Colorado', county_state: 'Arapahoe, CO', county: 'Arapahoe' }
    ]

    expect(filterData(filters, data)).toEqual([{ geography: 'Colorado', county_state: 'Adams, CO', county: 'Adams' }])
  })

  it('narrows a linked-geo File Name filter to the state-level row (state selected)', () => {
    const filters = [
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        active: 'Colorado',
        apiFilter: {
          apiEndpoint: 'http://test.gov/geos',
          valueSelector: 'geography',
          filterSelector: 'county_state'
        },
        key: 'geo'
      }
    ] as SharedFilter[]
    const data = [
      { geography: 'Colorado', county_state: 'Colorado', county: 'All' },
      { geography: 'Colorado', county_state: 'Adams, CO', county: 'Adams' }
    ]

    expect(filterData(filters, data)).toEqual([{ geography: 'Colorado', county_state: 'Colorado', county: 'All' }])
  })

  it('should not include data that does not meet the filter criteria', () => {
    const filters = [
      //{ columnName: 'apple', fileName: 'abc', key: 'banana' },
      { columnName: 'color', active: 'red', queuedActive: 'red', fileName: 'abc', key: 'color' },
      { columnName: 'name', fileName: 'abc', key: 'name' },
      { columnName: 'age', fileName: 'abc', key: 'age', parents: ['name'] }
    ] as SharedFilter[]
    const data = [
      { name: 'Jane', age: 30, color: 'blue' },
      { name: 'John', age: 25, color: 'red' },
      { name: 'John', age: 25, color: 'green' }
      //{ name: 'John', age: 25, color: 'red', apple: 'banana' }
    ]

    const result = filterData(filters, data)
    expect(result).toEqual([{ name: 'John', age: 25, color: 'red' }])
  })
})
