import { describe, it, expect } from 'vitest'
import { getMapRowData } from '../mapCellMatrix'

describe('getMapRowData', () => {
  const columns = {
    geo: { dataTable: true, name: 'geo', label: 'Geo' },
    column1: { dataTable: true, name: 'column1', label: 'Column 1' },
    column2: { dataTable: true, name: 'column2', label: 'Column 2' }
  }
  const config = {
    general: { geoType: 'us-state', type: 'map' },
    columns: {
      geo: { name: 'geo' },
      column1: { name: 'column1' },
      column2: { name: 'column2' }
    },
    legend: { specialClasses: [] }
  }
  const formatLegendLocation = row => row
  const rows = ['row2', 'row1']
  const runtimeData = {
    row1: { geo: 'region1', column1: 'data1', column2: 'data2', somethingElse: 'data5' },
    row2: { geo: 'region2', column1: 'data3', column2: 'data4', somethingElse: 'data6' }
  }
  const displayGeoName = row => `displayGeoName -> ${row}`
  const sharedFilterColumns = ['somethingElse']

  it('should map rows to data rows correctly', () => {
    const result = getMapRowData(
      rows,
      columns,
      config,
      formatLegendLocation,
      runtimeData,
      displayGeoName,
      sharedFilterColumns
    )

    expect(result).toEqual([
      {
        Geo: 'displayGeoName -> row2',
        'Column 1': 'data3',
        'Column 2': 'data4',
        somethingElse: 'data6'
      },
      {
        Geo: 'displayGeoName -> row1',
        'Column 1': 'data1',
        'Column 2': 'data2',
        somethingElse: 'data5'
      }
    ])

    config.general.geoType = 'us-county'
    const result2 = getMapRowData(
      rows,
      columns,
      config,
      formatLegendLocation,
      runtimeData,
      displayGeoName,
      sharedFilterColumns
    )

    expect(result2).toEqual([
      {
        Geo: 'row2',
        'Column 1': 'data3',
        'Column 2': 'data4',
        somethingElse: 'data6'
      },
      {
        Geo: 'row1',
        'Column 1': 'data1',
        'Column 2': 'data2',
        somethingElse: 'data5'
      }
    ])
  })
})
