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
