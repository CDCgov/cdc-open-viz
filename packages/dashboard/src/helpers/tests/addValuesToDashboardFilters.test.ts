import { SharedFilter } from '../../types/SharedFilter'
import { addValuesToDashboardFilters } from '../addValuesToDashboardFilters'

describe('addValuesToDashboardFilters', () => {
  const colA = { columnName: 'colA', id: 11, active: 'apple', values: [], type: 'datafilter' } as SharedFilter
  const colB = { columnName: 'colB', id: 22, active: '1', values: [], type: 'datafilter' } as SharedFilter
  const colC = {
    columnName: 'colC',
    id: 33,
    values: [],
    setByQueryParameter: 'colC',
    type: 'datafilter'
  } as SharedFilter

  const data = {
    key: [
      { colA: 'apple', colB: 3, colC: 'abc' },
      { colA: 'apple', colB: 1, colC: 'bcd' },
      { colA: 'pear', colB: 4, colC: 'test' }
    ]
  }
  const filters = [colA, colC, colB]
  it('adds filter values', () => {
    const newFilters = addValuesToDashboardFilters(filters, data)
    expect(newFilters[0].values).toEqual(['apple', 'pear'])
  })
  it('converts to multiselect', () => {
    colA.multiSelect = true
    const newFilters = addValuesToDashboardFilters(filters, data)
    expect(newFilters[0].active).toEqual(['apple'])
  })

  it('sets active value by query string', () => {
    delete window.location
    window.location = new URL('https://www.example.com?colC=test')
    const newFilters = addValuesToDashboardFilters(filters, data)
    expect(newFilters[1].active).toEqual('test')
  })
  const colA2 = {
    apiFilter: { valueSelector: 'colA' },
    id: 11,
    active: 'apple',
    values: [],
    type: 'urlfilter'
  } as SharedFilter
  const colB2 = {
    apiFilter: { valueSelector: 'colB' },
    id: 22,
    active: '1',
    values: [],
    type: 'urlfilter'
  } as SharedFilter
  const colC2 = {
    apiFilter: { valueSelector: 'colC' },
    id: 33,
    values: [],
    setByQueryParameter: 'colC',
    type: 'urlfilter'
  } as SharedFilter
  const filters2 = [colA2, colC2, colB2]
  it('skips urlfilters', () => {
    // urlfilter reloading happens in the dashboard in the loadAPIFilters function
    delete window.location
    window.location = new URL('https://www.example.com?colC=test')
    const newFilters = addValuesToDashboardFilters(filters2, data)
    expect(newFilters[1].active).toEqual(undefined)
  })

  it('respects nested dropdown default values for both group and subgroup', () => {
    const nestedData = {
      key: [
        { year: '2022', quarter: 'Q1', region: 'North' },
        { year: '2022', quarter: 'Q2', region: 'North' },
        { year: '2023', quarter: 'Q1', region: 'North' },
        { year: '2023', quarter: 'Q2', region: 'North' },
        { year: '2023', quarter: 'Q3', region: 'North' },
        { year: '2024', quarter: 'Q1', region: 'North' }
      ]
    }

    const nestedFilter = {
      columnName: 'year',
      id: 1,
      values: ['2022', '2023', '2024'],
      type: 'datafilter',
      filterStyle: 'nested-dropdown',
      defaultValue: '2023',
      subGrouping: {
        columnName: 'quarter',
        defaultValue: 'Q2',
        valuesLookup: {
          '2022': { values: ['Q1', 'Q2'] },
          '2023': { values: ['Q1', 'Q2', 'Q3'] },
          '2024': { values: ['Q1'] }
        }
      }
    } as SharedFilter

    const result = addValuesToDashboardFilters([nestedFilter], nestedData)

    // Should use configured defaultValue for main group
    expect(result[0].active).toBe('2023')

    // Should use configured defaultValue for subgroup
    expect(result[0].subGrouping.active).toBe('Q2')
  })

  it('uses first available subgroup value when defaultValue is not in current group', () => {
    const nestedData = {
      key: [
        { year: '2022', quarter: 'Q1', region: 'North' },
        { year: '2024', quarter: 'Q1', region: 'North' }
      ]
    }

    const nestedFilter = {
      columnName: 'year',
      id: 1,
      values: ['2022', '2024'],
      type: 'datafilter',
      filterStyle: 'nested-dropdown',
      defaultValue: '2024',
      subGrouping: {
        columnName: 'quarter',
        defaultValue: 'Q2', // Q2 doesn't exist for 2024
        valuesLookup: {
          '2022': { values: ['Q1'] },
          '2024': { values: ['Q1'] }
        }
      }
    } as SharedFilter

    const result = addValuesToDashboardFilters([nestedFilter], nestedData)

    // Should use configured defaultValue for main group
    expect(result[0].active).toBe('2024')

    // Should fall back to first available value since Q2 doesn't exist for 2024
    expect(result[0].subGrouping.active).toBe('Q1')
  })
})
