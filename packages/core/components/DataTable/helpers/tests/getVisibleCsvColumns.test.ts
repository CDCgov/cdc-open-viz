import { describe, expect, it } from 'vitest'
import { getVisibleCsvColumns } from '../getVisibleCsvColumns'

describe('getVisibleCsvColumns', () => {
  it('includes runtime-generated visible columns for standalone table CSV export', () => {
    const config = {
      type: 'table',
      visualizationType: 'Table',
      table: {},
      columns: {
        Site: { name: 'Site', dataTable: true, order: 1 },
        Population_Served: { name: 'Population_Served', dataTable: true, order: 2 },
        Source: { name: 'Source', dataTable: false, order: 3 }
      },
      xAxis: {}
    } as any

    const runtimeData = [
      {
        Site: 'A',
        Population_Served: 100,
        Date_Updated: '2025-01-01',
        Source: 'hidden'
      }
    ]

    expect(
      getVisibleCsvColumns({
        config,
        runtimeData,
        isVertical: true,
        filterColumns: ['Pathogen_Target']
      })
    ).toEqual(['Site', 'Population_Served', 'Date_Updated', 'Pathogen_Target'])
  })

  it('excludes groupBy columns because they are not visible table columns', () => {
    const config = {
      type: 'table',
      visualizationType: 'Table',
      table: { groupBy: 'Region' },
      columns: {
        Region: { name: 'Region', dataTable: true, order: 1 },
        Site: { name: 'Site', dataTable: true, order: 2 },
        Value: { name: 'Value', dataTable: true, order: 3 }
      },
      xAxis: {}
    } as any

    const runtimeData = [{ Region: 'North', Site: 'A', Value: 10 }]

    expect(
      getVisibleCsvColumns({
        config,
        runtimeData,
        isVertical: true
      })
    ).toEqual(['Site', 'Value'])
  })

  it('includes visible keyed column configs when the optional column name is omitted', () => {
    const config = {
      type: 'chart',
      visualizationType: 'HeatMap',
      table: {},
      columns: {
        category: { name: 'category', dataTable: true, order: 1 },
        population: { label: 'Population', dataTable: true, order: 2, prefix: '$', suffix: ' residents' }
      },
      xAxis: { dataKey: 'category' },
      series: [{ dataKey: 'rate' }],
      runtime: { series: [{ dataKey: 'rate' }] }
    } as any

    const runtimeData = [{ category: 'North', rate: 10, population: 1000 }]

    expect(
      getVisibleCsvColumns({
        config,
        runtimeData,
        isVertical: true
      })
    ).toEqual(['category', 'population', 'rate'])
  })
})
