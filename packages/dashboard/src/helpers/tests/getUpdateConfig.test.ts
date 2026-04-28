import { SharedFilter } from '../../types/SharedFilter'
import { getUpdateConfig } from '../getUpdateConfig'

describe('getUpdateConfig', () => {
  const sharedFilterDefaults = { values: [], showDropdown: true, id: 123, parents: [], key: 'key' }
  const data = {
    data1: [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 35 }
    ]
  }

  const getConfig = (sharedFilters: SharedFilter[]) =>
    ({
      dashboard: { sharedFilters },
      datasets: {
        data1: { data: data.data1 }
      },
      visualizations: {
        vizA: { dataKey: 'data1' }
      },
      rows: [{ dataKey: 'data1', data: data.data1, columns: [] }, { columns: [{ width: 12, widget: 'vizA' }] }]
    } as any)

  const getFilteredData = (sharedFilters: SharedFilter[]) => {
    const [, filteredData] = getUpdateConfig({ data, filteredData: {} } as any)(getConfig(sharedFilters))
    return filteredData
  }

  it('should precompute visualization and row data for shared filters with missing usedBy', () => {
    const sharedFilters: SharedFilter[] = [
      {
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]

    expect(getFilteredData(sharedFilters)).toEqual({ '0': [data.data1[0]], '1': [], vizA: [data.data1[0]] })
  })

  it('should precompute visualization and row data for shared filters with empty usedBy', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: [],
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]

    expect(getFilteredData(sharedFilters)).toEqual({ '0': [data.data1[0]], '1': [], vizA: [data.data1[0]] })
  })

  it('should keep explicit usedBy filters scoped during precompute', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: ['vizA'],
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      },
      {
        usedBy: [0],
        active: 'Bob',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]

    expect(getFilteredData(sharedFilters)).toEqual({ '0': [data.data1[1]], vizA: [data.data1[0]] })
  })

  it('should not precompute visualization data when the visualization uses row-level data', () => {
    const sharedFilters: SharedFilter[] = [
      {
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const config = {
      ...getConfig(sharedFilters),
      rows: [{ dataKey: 'data1', data: data.data1, columns: [{ width: 12, widget: 'vizA' }] }]
    }

    const [, filteredData] = getUpdateConfig({ data, filteredData: {} } as any)(config)

    expect(filteredData).toEqual({ '0': [data.data1[0]] })
  })
})
