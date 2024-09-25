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
    expect(getFilteredData({ ...state, config }, initialFilteredData)).toEqual({ newData: [data.data1[1]], '0': [data.data1[0]], vizA: [data.data1[0]] })
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
})
