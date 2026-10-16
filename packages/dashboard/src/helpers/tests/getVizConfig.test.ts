import { describe, expect, it } from 'vitest'
import { coveUpdateWorker } from '@cdc/core/helpers/coveUpdateWorker'
import { getVizConfig } from '../getVizConfig'

describe('getVizConfig', () => {
  it('renders dashboard-filtered rows while preserving stable-domain rows for charts', () => {
    const fullRows = [
      { Region: 'A', Date: '2024-01-01', Value: 10 },
      { Region: 'B', Date: '2024-01-01', Value: 50 }
    ]
    const filteredRows = [fullRows[0]]
    const config = {
      dashboard: { sharedFilters: [] },
      datasets: {
        chartData: {
          data: fullRows,
          dataMetadata: {}
        }
      },
      rows: [{ dataKey: 'chartData', formattedData: fullRows }],
      visualizations: {
        chartA: {
          type: 'chart',
          dataKey: 'chartData',
          formattedData: fullRows,
          yAxis: {
            filterDomainBehavior: 'stable'
          }
        }
      }
    } as any

    const visualizationConfig = getVizConfig('chartA', 0, config, { chartData: fullRows }, { chartA: filteredRows })

    expect(visualizationConfig.data).toBe(filteredRows)
    expect(visualizationConfig.formattedData).toBe(filteredRows)
    expect(visualizationConfig.originalFormattedData).toBe(fullRows)
    expect(visualizationConfig.yAxisDomainData).toBe(fullRows)
  })

  it('provides stable-domain rows without creating originalFormattedData for dataset-backed charts', () => {
    const fullRows = [
      { Region: 'A', Date: '2024-01-01', Value: 10 },
      { Region: 'B', Date: '2024-01-01', Value: 50 }
    ]
    const filteredRows = [fullRows[0]]
    const config = {
      dashboard: { sharedFilters: [] },
      datasets: {
        chartData: {
          data: fullRows,
          dataMetadata: {}
        }
      },
      rows: [{ dataKey: 'chartData' }],
      visualizations: {
        chartA: {
          type: 'chart',
          dataKey: 'chartData',
          yAxis: {
            filterDomainBehavior: 'stable'
          }
        }
      }
    } as any

    const visualizationConfig = getVizConfig('chartA', 0, config, { chartData: fullRows }, { chartA: filteredRows })

    expect(visualizationConfig.data).toBe(filteredRows)
    expect(visualizationConfig.originalFormattedData).toBeUndefined()
    expect(visualizationConfig.yAxisDomainData).toBe(fullRows)
  })

  it('scopes stable-domain rows to a multi-viz filtered data override', () => {
    const fullRows = [
      { Measure: 'Cases', Region: 'A', Date: '2024-01-01', Value: 10 },
      { Measure: 'Cases', Region: 'B', Date: '2024-01-01', Value: 12 },
      { Measure: 'Rates', Region: 'A', Date: '2024-01-01', Value: 250 },
      { Measure: 'Rates', Region: 'B', Date: '2024-01-01', Value: 300 }
    ]
    const casesRows = fullRows.filter(row => row.Measure === 'Cases')
    const config = {
      dashboard: { sharedFilters: [] },
      datasets: {
        chartData: {
          data: fullRows,
          dataMetadata: {}
        }
      },
      rows: [{ dataKey: 'chartData', formattedData: fullRows, multiVizColumn: 'Measure' }],
      visualizations: {
        chartA: {
          type: 'chart',
          dataKey: 'chartData',
          formattedData: fullRows,
          yAxis: {
            filterDomainBehavior: 'stable'
          }
        }
      }
    } as any

    const visualizationConfig = getVizConfig(
      'chartA',
      0,
      config,
      { chartData: fullRows },
      undefined,
      casesRows,
      'Measure'
    )

    expect(visualizationConfig.data).toBe(casesRows)
    expect(visualizationConfig.formattedData).toBe(casesRows)
    expect(visualizationConfig.originalFormattedData).toBe(fullRows)
    expect(visualizationConfig.yAxisDomainData).toBe(casesRows)
  })

  it('preserves full transformed rows for table raw downloads when displayed rows are filtered', () => {
    const sourceRows = [
      { month_end: '2024-01-31', demographics_values: '12-17 years', rate_per_100000_visits: 10 },
      { month_end: '2024-01-31', demographics_values: '18-34 years', rate_per_100000_visits: 20 },
      { month_end: '2024-02-29', demographics_values: '12-17 years', rate_per_100000_visits: 30 },
      { month_end: '2024-02-29', demographics_values: '18-34 years', rate_per_100000_visits: 40 }
    ]
    const transformedRows = [
      { month_end: '2024-01-31', '12-17 years': 10, '18-34 years': 20 },
      { month_end: '2024-02-29', '12-17 years': 30, '18-34 years': 40 }
    ]
    const filteredRows = [transformedRows[0]]
    const dataDescription = {
      horizontal: false,
      series: true,
      singleRow: false,
      seriesKey: 'demographics_values',
      xKey: 'month_end',
      valueKeysTallSupport: ['rate_per_100000_visits']
    }
    const config = {
      dashboard: { sharedFilters: [] },
      datasets: {
        nsspData: {
          data: sourceRows,
          dataMetadata: {}
        }
      },
      rows: [{ columns: [{ widget: 'tableA' }] }],
      visualizations: {
        tableA: {
          type: 'table',
          dataKey: 'nsspData',
          dataDescription
        }
      }
    } as any

    const visualizationConfig = getVizConfig('tableA', 0, config, { nsspData: sourceRows }, { tableA: filteredRows })

    expect(visualizationConfig.data).toBe(filteredRows)
    expect(visualizationConfig.originalFormattedData).toEqual(transformedRows)
  })

  it('preserves full transformed rows for migrated dashboard table raw downloads', () => {
    const sourceRows = [
      { month_end: '2024-01-31', demographics_values: '12-17 years', rate_per_100000_visits: 10 },
      { month_end: '2024-01-31', demographics_values: '18-34 years', rate_per_100000_visits: 20 },
      { month_end: '2024-02-29', demographics_values: '12-17 years', rate_per_100000_visits: 30 },
      { month_end: '2024-02-29', demographics_values: '18-34 years', rate_per_100000_visits: 40 }
    ]
    const transformedRows = [
      { month_end: '2024-01-31', '12-17 years': 10, '18-34 years': 20 },
      { month_end: '2024-02-29', '12-17 years': 30, '18-34 years': 40 }
    ]
    const filteredRows = [transformedRows[0]]
    const dataDescription = {
      horizontal: false,
      series: true,
      singleRow: false,
      seriesKey: 'demographics_values',
      xKey: 'month_end',
      valueKeysTallSupport: ['rate_per_100000_visits']
    }
    const migratedConfig = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.5',
      dashboard: { sharedFilters: [] },
      table: { show: true, download: true },
      datasets: {
        nsspData: {
          data: sourceRows,
          dataDescription,
          dataMetadata: {}
        }
      },
      rows: [{ columns: [{ width: 12, widget: 'chartA' }] }],
      visualizations: {
        chartA: {
          type: 'chart',
          dataKey: 'nsspData'
        }
      }
    } as any) as any
    const generatedEntry = Object.entries(migratedConfig.visualizations).find(
      ([, visualization]: [string, any]) => visualization.migrations?.generatedFromDashboardTable
    ) as [string, any]
    const [generatedTableKey, generatedTable] = generatedEntry
    const generatedTableRowIndex = migratedConfig.rows.findIndex(row =>
      row.columns?.some(column => column.widget === generatedTableKey)
    )

    const visualizationConfig = getVizConfig(
      generatedTableKey,
      generatedTableRowIndex,
      migratedConfig,
      { nsspData: sourceRows },
      { [generatedTableKey]: filteredRows }
    )

    expect(generatedTable.dataDescription).toEqual(dataDescription)
    expect(generatedTable.migrations.generatedFromDashboardTable).toBe(true)
    expect(visualizationConfig.data).toBe(filteredRows)
    expect(visualizationConfig.originalFormattedData).toEqual(transformedRows)
  })

  it('uses selected dataset metadata when unrelated dashboard datasets are present', () => {
    const selectedRows = [{ Region: 'A', Value: 10 }]
    const config = {
      dashboard: { sharedFilters: [] },
      datasets: {
        selectedData: {
          data: selectedRows,
          dataMetadata: { source: 'Selected dataset' }
        },
        unrelatedData: {
          data: [{ Region: 'B', Value: 20 }],
          dataMetadata: { source: 'Unrelated dataset' }
        }
      },
      rows: [{ dataKey: 'selectedData' }],
      visualizations: {
        markupA: {
          type: 'markup-include',
          dataKey: 'selectedData',
          contentEditor: {
            inlineHTML: '<p>{{source}}</p>',
            useInlineHTML: true
          },
          enableMarkupVariables: true,
          markupVariables: [
            {
              sourceType: 'metadata',
              name: 'Source',
              tag: '{{source}}',
              metadataKey: 'source',
              conditions: [],
              addCommas: false
            }
          ]
        }
      }
    } as any

    const visualizationConfig = getVizConfig('markupA', 0, config, {
      selectedData: selectedRows,
      unrelatedData: [{ Region: 'B', Value: 20 }]
    })

    expect(visualizationConfig.data).toBe(selectedRows)
    expect(visualizationConfig.dataMetadata).toEqual({ source: 'Selected dataset' })
  })
})
