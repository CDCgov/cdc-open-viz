import { describe, expect, it } from 'vitest'
import { type ChartConfig } from '../../../../types/ChartConfig'
import { HEATMAP_CONFIG_DEFAULTS } from '../../../HeatMap/heatmap.constants'
import { getVisualizationTypeConfigUpdate } from '../getVisualizationTypeConfigUpdate'

const buildConfig = (overrides: Partial<ChartConfig> = {}) =>
  ({
    visualizationType: 'Bar',
    xAxis: {
      type: 'categorical'
    },
    yAxis: {
      type: 'linear'
    },
    series: [{ dataKey: 'Value' }],
    legend: {
      position: 'bottom',
      style: 'circles',
      subStyle: 'linear blocks'
    },
    general: {},
    ...overrides
  } as ChartConfig)

describe('getVisualizationTypeConfigUpdate', () => {
  it('does not build a special config update for chart types without transition rules', () => {
    expect(getVisualizationTypeConfigUpdate(buildConfig(), 'Line')).toBeUndefined()
  })

  it('normalizes categorical x-axis settings when switching to Forecasting', () => {
    const updatedConfig = getVisualizationTypeConfigUpdate(buildConfig(), 'Forecasting')

    expect(updatedConfig?.visualizationType).toBe('Forecasting')
    expect(updatedConfig?.xAxis.type).toBe('date')
    expect(updatedConfig?.xAxis.dateParseFormat).toBe('%Y-%m-%d')
    expect(updatedConfig?.xAxis.dateDisplayFormat).toBe('%Y-%m-%d')
  })

  it('applies HeatMap defaults and required editor config when switching to HeatMap', () => {
    const updatedConfig = getVisualizationTypeConfigUpdate(buildConfig(), 'HeatMap')

    expect(updatedConfig?.visualizationType).toBe('HeatMap')
    expect(updatedConfig?.series).toEqual([])
    expect(updatedConfig?.yAxis.type).toBe('categorical')
    expect(updatedConfig?.heatmap).toEqual(HEATMAP_CONFIG_DEFAULTS)
    expect(updatedConfig?.legend.position).toBe('top')
    expect(updatedConfig?.legend.style).toBe('gradient')
    expect(updatedConfig?.legend.subStyle).toBe('smooth')
    expect(updatedConfig?.general.palette).toEqual({
      isReversed: false,
      version: '2.0',
      name: 'sequential_blue'
    })
  })
})
