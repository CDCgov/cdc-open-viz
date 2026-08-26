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

  it('deduplicates live source-order values in dataset and row encounter order', () => {
    const sourceFilter = {
      columnName: 'period',
      id: 44,
      values: [],
      active: 'missing',
      defaultValue: 'January',
      order: 'data',
      type: 'datafilter'
    } as SharedFilter
    const sourceData = {
      first: [{ period: 'March' }, { period: 'January' }, { period: 'March' }],
      second: [{ period: 'February' }, { period: 'January' }]
    }

    const [result] = addValuesToDashboardFilters([sourceFilter], sourceData)

    expect(result.values).toEqual(['March', 'January', 'February'])
    expect(result.active).toBe('January')
  })

  it('uses the first source-order value when neither active nor default is valid', () => {
    const sourceFilter = {
      columnName: 'period',
      id: 45,
      values: [],
      active: 'missing',
      defaultValue: 'also missing',
      resetLabel: 'All',
      order: 'data',
      type: 'datafilter'
    } as SharedFilter

    const [result] = addValuesToDashboardFilters([sourceFilter], {
      first: [{ period: 'March' }, { period: 'January' }]
    })

    expect(result.active).toBe('March')
  })

  it('uses a valid default for a source-ordered multi-select with no valid active values', () => {
    const sourceFilter = {
      columnName: 'period',
      filterStyle: 'multi-select',
      id: 47,
      values: [],
      active: ['missing'],
      defaultValue: 'January',
      order: 'data',
      type: 'datafilter'
    } as SharedFilter

    const [result] = addValuesToDashboardFilters([sourceFilter], {
      first: [{ period: 'March' }, { period: 'January' }]
    })

    expect(result.active).toEqual(['January'])
  })

  it('preserves migrated source-order arrays until the editor save transition', () => {
    const migratedFilter = {
      columnName: 'period',
      id: 46,
      values: ['January', 'March'],
      orderedValues: ['March', 'January'],
      active: 'March',
      defaultValue: 'January',
      order: 'data',
      type: 'datafilter'
    } as SharedFilter

    const [result] = addValuesToDashboardFilters([migratedFilter], {
      first: [{ period: 'April' }, { period: 'March' }]
    })

    expect(result.values).toEqual(['January', 'March'])
    expect(result.orderedValues).toEqual(['March', 'January'])
    expect(result.active).toBe('March')
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

  it('generates nested subgroup descriptions for each parent group', () => {
    const nestedData = {
      key: [
        { year: '2023', quarter: 'Q1', quarterDescription: 'First quarter of 2023' },
        { year: '2024', quarter: 'Q1', quarterDescription: 'First quarter of 2024' }
      ]
    }

    const nestedFilter = {
      columnName: 'year',
      id: 1,
      values: ['2023', '2024'],
      type: 'datafilter',
      filterStyle: 'nested-dropdown',
      subGrouping: {
        columnName: 'quarter',
        subgroupDescriptionSelector: 'quarterDescription',
        valuesLookup: {
          '2023': { values: ['Q1'] },
          '2024': { values: ['Q1'] }
        }
      }
    } as SharedFilter

    const result = addValuesToDashboardFilters([nestedFilter], nestedData)

    expect(result[0].subGrouping.valuesLookup['2023'].descriptionsByValue).toEqual({
      Q1: 'First quarter of 2023'
    })
    expect(result[0].subGrouping.valuesLookup['2024'].descriptionsByValue).toEqual({
      Q1: 'First quarter of 2024'
    })
  })

  it('clears stale nested subgroup descriptions when no subgroup description selector is configured', () => {
    const nestedData = {
      key: [{ year: '2023', quarter: 'Q1', quarterDescription: 'First quarter of 2023' }]
    }

    const nestedFilter = {
      columnName: 'year',
      id: 1,
      values: ['2023'],
      type: 'datafilter',
      filterStyle: 'nested-dropdown',
      subGrouping: {
        columnName: 'quarter',
        valuesLookup: {
          '2023': {
            values: ['Q1'],
            descriptionsByValue: {
              Q1: 'Stale description'
            }
          }
        }
      }
    } as SharedFilter

    const result = addValuesToDashboardFilters([nestedFilter], nestedData)

    expect(result[0].subGrouping.valuesLookup['2023']).not.toHaveProperty('descriptionsByValue')
  })
})
