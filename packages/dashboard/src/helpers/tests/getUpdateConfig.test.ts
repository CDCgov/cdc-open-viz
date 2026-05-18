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

    expect(getFilteredData(sharedFilters)).toEqual({ '0': [data.data1[0]], vizA: [data.data1[0]] })
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

    expect(getFilteredData(sharedFilters)).toEqual({ '0': [data.data1[0]], vizA: [data.data1[0]] })
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

  it('should not create row cache entries for unscoped filters on visualization-data rows', () => {
    const sharedFilters: SharedFilter[] = [
      {
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]

    const [, filteredData] = getUpdateConfig({ data, filteredData: {} } as any)(getConfig(sharedFilters))

    expect(filteredData).toHaveProperty('vizA', [data.data1[0]])
    expect(filteredData).not.toHaveProperty('1')
  })

  it('should precompute row data from row.dataKey when row data is not stored by row index', () => {
    const rowData = [
      { id: 1, measure: 'Coverage', location: 'Alabama' },
      { id: 2, measure: 'Barriers', location: 'Georgia' }
    ]
    const dataKey = 'private-multiviz-row-data'
    const config = {
      dashboard: {
        sharedFilters: [
          {
            active: 'Alabama',
            columnName: 'location',
            ...sharedFilterDefaults
          }
        ]
      },
      datasets: {
        [dataKey]: {}
      },
      visualizations: {
        vizA: { dataKey }
      },
      rows: [
        { columns: [] },
        { columns: [] },
        { columns: [] },
        {
          dataKey,
          multiVizColumn: 'measure',
          columns: [{ width: 12, widget: 'vizA' }]
        }
      ]
    }

    const [, filteredData] = getUpdateConfig({
      data: { [dataKey]: rowData },
      filteredData: {}
    } as any)(config)

    expect(filteredData).toEqual({ '3': [rowData[0]] })
  })

  it('should precompute row dashboard conditions using row owner filters', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: [0],
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const config = {
      ...getConfig(sharedFilters),
      rows: [
        {
          dataKey: 'data1',
          data: data.data1,
          dashboardCondition: {
            id: 'row-condition-1',
            datasetKey: 'data1',
            operator: 'hasData'
          },
          columns: []
        }
      ]
    }

    const [, filteredData] = getUpdateConfig({ data, filteredData: {} } as any)(config)

    expect(filteredData).toEqual({
      '0': [data.data1[0]],
      'row-condition-1': [data.data1[0]]
    })
  })

  it('should precompute component conditions using widget owner filters when data is configured on the widget', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: ['vizA'],
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const config = {
      ...getConfig(sharedFilters),
      rows: [
        {
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'vizA',
                  dashboardCondition: {
                    id: 'component-condition-1',
                    datasetKey: 'data1',
                    operator: 'columnHasAnyValue',
                    columnName: 'name',
                    values: ['Alice']
                  }
                }
              ]
            }
          ]
        }
      ]
    }

    const [, filteredData] = getUpdateConfig({ data, filteredData: {} } as any)(config)

    expect(filteredData).toEqual({
      vizA: [data.data1[0]],
      'component-condition-1': [data.data1[0]]
    })
  })

  it('should precompute component conditions using row owner filters when data is configured on the row', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: [0],
        active: 'Bob',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const config = {
      ...getConfig(sharedFilters),
      rows: [
        {
          dataKey: 'data1',
          data: data.data1,
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'vizA',
                  dashboardCondition: {
                    id: 'component-condition-row-data',
                    datasetKey: 'data1',
                    operator: 'hasData'
                  }
                }
              ]
            }
          ]
        }
      ]
    }

    const [, filteredData] = getUpdateConfig({ data, filteredData: {} } as any)(config)

    expect(filteredData).toEqual({
      '0': [data.data1[1]],
      'component-condition-row-data': [data.data1[1]]
    })
  })

  it('should leave reset-state data conditions unresolved during precompute', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: [0],
        active: '',
        columnName: 'name',
        ...sharedFilterDefaults,
        values: ['Alice', 'Bob', 'Charlie']
      }
    ]
    const config = {
      ...getConfig(sharedFilters),
      rows: [
        {
          dataKey: 'data1',
          data: data.data1,
          dashboardCondition: {
            id: 'row-condition-1',
            datasetKey: 'data1',
            operator: 'hasNoData'
          },
          columns: []
        }
      ]
    }

    const [, filteredData] = getUpdateConfig({ data, filteredData: {} } as any)(config)

    expect(filteredData).toEqual({ '0': [] })
    expect(filteredData).not.toHaveProperty('row-condition-1')
  })

  it('should precompute filtersIncomplete conditions from owner filter state', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: ['vizA'],
        active: '',
        columnName: 'name',
        ...sharedFilterDefaults,
        values: ['Alice', 'Bob', 'Charlie']
      }
    ]
    const config = {
      ...getConfig(sharedFilters),
      rows: [
        {
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'vizA',
                  dashboardCondition: {
                    id: 'filters-incomplete-condition',
                    operator: 'filtersIncomplete'
                  }
                }
              ]
            }
          ]
        }
      ]
    }

    const [, filteredData] = getUpdateConfig({ data, filteredData: {} } as any)(config)

    expect(filteredData).toEqual({
      vizA: [],
      'filters-incomplete-condition': [{}]
    })
  })
})
