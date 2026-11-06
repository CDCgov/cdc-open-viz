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

describe('multiselect All option', () => {
  const data = [
    { profile: 'Air', year: '2023', status: 'Final', language: 'English' },
    { profile: 'Water', year: '2024', status: 'Draft', language: 'Spanish' },
    { profile: 'Water', year: '2023', status: 'Final', language: 'English' }
  ]
  const makeFilter = (overrides = {}) =>
    ({
      key: 'Profile',
      type: 'datafilter',
      filterStyle: 'multi-select',
      showDropdown: true,
      showAllOption: true,
      columnName: 'profile',
      active: ['All'],
      values: ['Air', 'Water'],
      ...overrides
    } as SharedFilter)

  it.each(['All', ['All'], []].map(active => [active]))('skips an opted-in All selection %j', active => {
    expect(filterData([makeFilter({ active })], data)).toEqual(data)
  })

  it('supports a custom All label without treating it as an incomplete selection', () => {
    expect(filterData([makeFilter({ resetLabel: 'Any profile', active: 'Any profile' })], data)).toEqual(data)
  })

  it('combines four filters without synthetic rows or helper columns', () => {
    const filters = ['profile', 'year', 'status', 'language'].map(columnName =>
      makeFilter({ key: columnName, columnName })
    )
    expect(filterData(filters, data)).toEqual(data)
    filters[0].active = ['Water']
    filters[1].active = ['2023']
    expect(filterData(filters, data)).toEqual([data[2]])
    filters[2].active = ['Draft']
    expect(filterData(filters, data)).toEqual([])
  })

  it('keeps the applied array selection while another selection is queued', () => {
    expect(filterData([makeFilter({ active: ['Water'], queuedActive: ['Air'] })], data)).toEqual([data[1], data[2]])
  })

  it.each([undefined, false])('matches literal All when showAllOption is %j', showAllOption => {
    const rows = [{ profile: 'All' }, { profile: 'Water' }]
    expect(filterData([makeFilter({ showAllOption })], rows)).toEqual([rows[0]])
  })

  it.each(['dropdown', 'nested-dropdown'])('does not override required %s reset behavior', filterStyle => {
    expect(filterData([makeFilter({ filterStyle, active: 'All', resetLabel: 'All' })], data)).toEqual([])
  })

  it('preserves required prompts and empty selections when All is disabled', () => {
    expect(filterData([makeFilter({ showAllOption: false, active: 'Select', resetLabel: 'Select' })], data)).toEqual([])
    expect(filterData([makeFilter({ showAllOption: false, active: [] })], data)).toEqual([])
  })
})
