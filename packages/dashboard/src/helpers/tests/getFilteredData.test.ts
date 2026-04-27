import _ from 'lodash'
import { SharedFilter } from '../../types/SharedFilter'
import { getFilteredData } from '../getFilteredData'

describe('getFilteredData', () => {
  const sharedFilterDefaults = { values: [], showDropdown: true, id: 123, parents: [], key: 'key' }
  const data = {
    data1: [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 35 }
    ]
  }
  const state = {
    data,
    config: {
      dashboard: {
        sharedFilters: []
      },
      visualizations: {
        vizA: { dataKey: 'data1' }
      },
      rows: [{ dataKey: 'data1' }]
    }
  }

  it('should apply data to rows when there are no applicable filters', () => {
    expect(getFilteredData(state)).toEqual({ '0': data.data1 })
  })

  it('should filter visualizations', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: ['vizA'],
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const config = { ...state.config, dashboard: { sharedFilters } }
    expect(getFilteredData({ ...state, config })).toEqual({ '0': data.data1, vizA: [data.data1[0]] })
  })

  it('should filter visualizations and rows', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: ['vizA', '0'],
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const config = { ...state.config, dashboard: { sharedFilters } }
    expect(getFilteredData({ ...state, config })).toEqual({ '0': [data.data1[0]], vizA: [data.data1[0]] })
  })

  it('should use initialFilteredData', () => {
    const initialFilteredData = { newData: [data.data1[1]] }
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: ['vizA', '0'],
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const config = { ...state.config, dashboard: { sharedFilters } }
    expect(getFilteredData({ ...state, config }, initialFilteredData)).toEqual({
      newData: [data.data1[1]],
      '0': [data.data1[0]],
      vizA: [data.data1[0]]
    })
  })

  it('should filter visualizations and rows', () => {
    const sharedFilters: SharedFilter[] = [
      {
        usedBy: ['vizA', '0'],
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const dataOverride = _.cloneDeep(data)
    dataOverride.data1[0] = { id: 1, name: 'Alice', age: 30 }
    const config = { ...state.config, dashboard: { sharedFilters } }
    const filteredData = getFilteredData({ ...state, config }, undefined, dataOverride)
    expect(filteredData.vizA[0].age).toEqual(30)
  })

  it('should preserve legacy behavior where unscoped shared filters apply in the row and visualization filtering path', () => {
    const sharedFilters: SharedFilter[] = [
      {
        active: 'Alice',
        columnName: 'name',
        ...sharedFilterDefaults
      }
    ]
    const config = { ...state.config, dashboard: { sharedFilters } }

    expect(getFilteredData({ ...state, config })).toEqual({ '0': [data.data1[0]], vizA: [data.data1[0]] })
  })

  it('should precompute dashboard condition targets into filteredData by condition id', () => {
    const config = {
      ...state.config,
      rows: [
        {
          dataKey: 'data1',
          dashboardCondition: {
            id: 'row-condition-1',
            datasetKey: 'data1',
            operator: 'hasData'
          },
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'vizA',
                  dashboardCondition: {
                    id: 'column-condition-1',
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
      ],
      dashboard: {
        sharedFilters: [
          {
            active: 'Alice',
            columnName: 'name',
            usedBy: ['row-condition-1', 'column-condition-1'],
            ...sharedFilterDefaults
          }
        ]
      }
    }

    expect(getFilteredData({ ...state, config } as any)).toEqual({
      '0': data.data1,
      'row-condition-1': [data.data1[0]],
      'column-condition-1': [data.data1[0]]
    })
  })

  it('should clear stale dashboard condition data when a condition becomes unresolved', () => {
    const config = {
      ...state.config,
      rows: [
        {
          dataKey: 'data1',
          dashboardCondition: {
            id: 'row-condition-1',
            datasetKey: 'data1',
            operator: 'hasData'
          },
          columns: [{ width: 12, widget: 'vizA' }]
        }
      ],
      dashboard: {
        sharedFilters: [
          {
            active: '',
            columnName: 'name',
            usedBy: ['row-condition-1'],
            ...sharedFilterDefaults
          }
        ]
      }
    }

    const initialFilteredData = {
      unrelatedCacheEntry: [data.data1[1]],
      'row-condition-1': [data.data1[0]]
    }

    expect(getFilteredData({ ...state, config } as any, initialFilteredData)).toEqual({
      '0': data.data1,
      unrelatedCacheEntry: [data.data1[1]]
    })
  })
})
