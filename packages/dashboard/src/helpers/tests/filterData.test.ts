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

  it('narrows a File Name filter by valueSelector when no filterSelector is set (default)', () => {
    const filters = [
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        active: 'groupA',
        apiFilter: { apiEndpoint: 'http://test.gov/options', valueSelector: 'fileKey' },
        key: 'selection'
      }
    ] as SharedFilter[]
    const data = [
      { fileKey: 'groupA', rowKey: 'groupA' },
      { fileKey: 'groupB', rowKey: 'groupB' }
    ]

    expect(filterData(filters, data)).toEqual([{ fileKey: 'groupA', rowKey: 'groupA' }])
  })

  it('narrows a File Name filter by its row filter field (filterSelector) when a row value is selected', () => {
    const filters = [
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        active: 'itemA1',
        apiFilter: {
          apiEndpoint: 'http://test.gov/options',
          valueSelector: 'fileKey',
          filterSelector: 'rowKey'
        },
        key: 'selection'
      }
    ] as SharedFilter[]
    const data = [
      { fileKey: 'groupA', rowKey: 'groupA' },
      { fileKey: 'groupA', rowKey: 'itemA1' },
      { fileKey: 'groupA', rowKey: 'itemA2' }
    ]

    expect(filterData(filters, data)).toEqual([{ fileKey: 'groupA', rowKey: 'itemA1' }])
  })

  it('narrows a File Name filter with a row filter field to the group-level row when the file value is selected', () => {
    const filters = [
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        active: 'groupA',
        apiFilter: {
          apiEndpoint: 'http://test.gov/options',
          valueSelector: 'fileKey',
          filterSelector: 'rowKey'
        },
        key: 'selection'
      }
    ] as SharedFilter[]
    const data = [
      { fileKey: 'groupA', rowKey: 'groupA' },
      { fileKey: 'groupA', rowKey: 'itemA1' }
    ]

    expect(filterData(filters, data)).toEqual([{ fileKey: 'groupA', rowKey: 'groupA' }])
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

describe('DEV-13957 show-all data multiselect', () => {
  const data = [
    { substance: 'Acetone', year: '2022' },
    { substance: 'Acrylamide', year: '2012' },
    { substance: 'Benzene', year: '2022' },
    { substance: 'All', year: '2020' }
  ]
  const makeFilter = (props = {}) =>
    ({
      key: 'Substance',
      columnName: 'substance',
      type: 'datafilter',
      filterStyle: 'multi-select',
      showDropdown: true,
      showAllOption: true,
      active: ['All'],
      values: ['All', 'Acetone', 'Acrylamide', 'Benzene'],
      ...props
    } as SharedFilter)

  it.each(['All', ['All']])('shows every row for an explicitly enabled All selection: %j', active => {
    expect(filterData([makeFilter({ active })], data)).toEqual(data)
  })

  it('still applies other category filters when one category is All', () => {
    expect(filterData([makeFilter(), makeFilter({ key: 'Year', columnName: 'year', active: ['2022'] })], data)).toEqual(
      [data[0], data[2]]
    )
  })

  it('ORs specific selections and ANDs categories without Master columns', () => {
    expect(
      filterData(
        [
          makeFilter({ active: ['Acetone', 'Acrylamide'] }),
          makeFilter({ key: 'Year', columnName: 'year', active: ['2022'] })
        ],
        data
      )
    ).toEqual([data[0]])
  })

  it('keeps applied multiselect values while a new selection is queued', () => {
    expect(filterData([makeFilter({ active: ['Acetone'], queuedActive: ['Benzene'] })], data)).toEqual([data[0]])
  })

  it('uses specific selections for imported mixed All and specific values', () => {
    expect(filterData([makeFilter({ active: ['All', 'Acetone'] })], data)).toEqual([data[0]])
  })

  it.each([undefined, false, null, 'true'])('retains literal All matching when flag is %j', showAllOption => {
    expect(filterData([makeFilter({ showAllOption })], data)).toEqual([data[3]])
  })

  it.each([[], '', undefined])('does not treat an empty selection as All: %j', active => {
    expect(filterData([makeFilter({ active })], data)).toEqual([])
  })

  it('does not reinterpret resetLabel as an All sentinel', () => {
    expect(filterData([makeFilter({ resetLabel: 'Choose', active: ['Choose'] })], data)).toEqual([])
  })

  it('ignores the flag on unsupported styles', () => {
    expect(filterData([makeFilter({ filterStyle: 'dropdown', active: 'All' })], data)).toEqual([data[3]])
  })
})

describe('data multiselect numeric CSV compatibility', () => {
  it('matches normalized scalar strings against numeric data without changing literal string matching', () => {
    const filter = {
      key: 'Year',
      type: 'datafilter',
      filterStyle: 'multi-select',
      columnName: 'year',
      active: ['2022']
    } as SharedFilter
    expect(filterData([filter], [{ year: 2022 }, { year: '2022' }, { year: 2012 }])).toEqual([
      { year: 2022 },
      { year: '2022' }
    ])
    expect(filterData([{ ...filter, active: [''] }], [{ year: 0 }])).toEqual([])
  })
})
