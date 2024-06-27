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

  it('should pivot data based on the provided filters', () => {
    const filter = { key: 'Race', type: 'datafilter', showDropdown: true, columnName: 'Race', pivot: 'Age-adjusted rate', usedBy: ['table1707935263149'] } as SharedFilter
    const data = [
      {
        Race: 'Hispanic or Latino',
        'Age-adjusted rate': '644.2',
        Year: '2016'
      },
      {
        Race: 'Non-Hispanic American Indian',
        'Age-adjusted rate': '636.1',
        Year: '2016'
      },
      {
        Race: 'Non-Hispanic Black',
        'Age-adjusted rate': '563.7',
        Year: '2016'
      },
      {
        Race: 'Hispanic or Latino',
        'Age-adjusted rate': '644.2',
        Year: '2017'
      },
      {
        Race: 'Non-Hispanic American Indian',
        'Age-adjusted rate': '636.1',
        Year: '2017'
      },
      {
        Race: 'Non-Hispanic Black',
        'Age-adjusted rate': '563.7',
        Year: '2017'
      }
    ]

    filter.values = _.uniq(data.map(row => row[filter.columnName]))
    filter.active = ['Hispanic or Latino', 'Non-Hispanic American Indian', 'Non-Hispanic Black']
    expect(filterData([filter], data)).toEqual([
      {
        'Hispanic or Latino': '644.2',
        'Non-Hispanic American Indian': '636.1',
        'Non-Hispanic Black': '563.7',
        Year: '2016'
      },
      {
        'Hispanic or Latino': '644.2',
        'Non-Hispanic American Indian': '636.1',
        'Non-Hispanic Black': '563.7',
        Year: '2017'
      }
    ])
  })
})
