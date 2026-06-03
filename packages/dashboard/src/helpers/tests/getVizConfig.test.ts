import { describe, expect, it } from 'vitest'
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
})
