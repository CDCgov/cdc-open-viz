import { scaleOrdinal } from '@visx/scale'
import { describe, expect, it, vi } from 'vitest'
import { createFormatLabels } from './createFormatLabels'
import { ChartConfig } from '../../../types/ChartConfig'
import { Label } from '../../../types/Label'

const defaultLabels: Label[] = [
  { datum: 'Series A', index: 0, text: 'Series A', value: '#aa0000' },
  { datum: 'Series B', index: 1, text: 'Series B', value: '#00bb00' }
]

const buildConfig = (overrides: Partial<ChartConfig> = {}): ChartConfig =>
  ({
    visualizationType: 'Line',
    visualizationSubType: 'regular',
    general: {
      palette: {
        colorAssignmentMode: 'ordered'
      }
    },
    legend: {},
    smallMultiples: {
      mode: 'by-series',
      colorMode: 'same'
    },
    series: [
      { dataKey: 'series_a', name: 'Series A', type: 'Line' },
      { dataKey: 'series_b', name: 'Series B', type: 'Line' }
    ],
    runtime: {
      seriesKeys: ['series_a', 'series_b'],
      seriesLabels: {
        series_a: 'Series A',
        series_b: 'Series B'
      },
      seriesLabelsAll: ['Series A', 'Series B']
    },
    ...overrides
  } as ChartConfig)

const colorScale = scaleOrdinal({
  domain: ['Series A', 'Series B'],
  range: ['#aa0000', '#00bb00'],
  unknown: null
})

const formatLabels = (config: ChartConfig) => createFormatLabels(config, [], [], colorScale, vi.fn())(defaultLabels)

const forecastingSeries = {
  dataKey: 'type',
  type: 'Forecasting',
  axis: 'Left',
  tooltip: false,
  stageColumn: 'type',
  stages: [
    { key: 'Estimate', color: 'sequential-blue' },
    { key: 'Forecast', color: 'sequential-orange' }
  ],
  confidenceIntervals: [
    { high: 'Upper 50%', low: 'Lower 50%' },
    { high: 'upper_90', low: 'lower_90' }
  ]
}

const buildForecastingConfig = (confidenceIntervals = forecastingSeries.confidenceIntervals): ChartConfig =>
  buildConfig({
    visualizationType: 'Forecasting',
    smallMultiples: undefined,
    legend: {
      reverseLabelOrder: false,
      verticalSorted: false
    } as any,
    series: [
      {
        ...forecastingSeries,
        confidenceIntervals
      }
    ] as any,
    runtime: {
      series: [],
      seriesKeys: [],
      seriesLabels: {},
      seriesLabelsAll: [],
      forecastingSeriesKeys: [
        {
          ...forecastingSeries,
          confidenceIntervals
        }
      ]
    } as any
  })

describe('createFormatLabels small multiples legend colors', () => {
  it('uses the first color for by-series same-color legends by default', () => {
    const labels = formatLabels(buildConfig())

    expect(labels.map(label => label.value)).toEqual(['#aa0000', '#aa0000'])
  })

  it('preserves assigned series colors for by-series same-color legends', () => {
    const labels = formatLabels(
      buildConfig({
        general: {
          palette: {
            colorAssignmentMode: 'by-value',
            colorAssignments: [
              { key: 'series_a', color: '#aa0000' },
              { key: 'series_b', color: '#00bb00' }
            ]
          }
        } as any
      })
    )

    expect(labels.map(label => label.value)).toEqual(['#aa0000', '#00bb00'])
  })

  it('ignores stale assignments for by-series same-color legends', () => {
    const labels = formatLabels(
      buildConfig({
        general: {
          palette: {
            colorAssignmentMode: 'by-value',
            colorAssignments: [{ key: 'removed_series', color: '#00bb00' }]
          }
        } as any
      })
    )

    expect(labels.map(label => label.value)).toEqual(['#aa0000', '#aa0000'])
  })
})

describe('createFormatLabels forecast confidence interval legends', () => {
  it('expands multi-CI forecast labels by confidence interval and stage', () => {
    const labels = formatLabels(buildForecastingConfig())

    expect(labels.map(label => label.text)).toEqual([
      '50% CI Estimate',
      '50% CI Forecast',
      '90% CI Estimate',
      '90% CI Forecast'
    ])
    expect(labels.map(label => label.datum)).toEqual(['Estimate', 'Forecast', 'Estimate', 'Forecast'])
    expect(labels[0].value).toMatch(/^rgba\(\d+, \d+, \d+, 0\.75\)$/)
    expect(labels[2].value).toMatch(/^rgba\(\d+, \d+, \d+, 0\.5\)$/)
  })

  it('orders multi-CI labels by parsed confidence level', () => {
    const labels = formatLabels(
      buildForecastingConfig([
        { high: 'upper_90', low: 'lower_90' },
        { high: 'Upper 50%', low: 'Lower 50%' }
      ])
    )

    expect(labels.map(label => label.text)).toEqual([
      '50% CI Estimate',
      '50% CI Forecast',
      '90% CI Estimate',
      '90% CI Forecast'
    ])
    expect(labels[0].value).toMatch(/^rgba\(\d+, \d+, \d+, 0\.75\)$/)
    expect(labels[2].value).toMatch(/^rgba\(\d+, \d+, \d+, 0\.5\)$/)
  })

  it('preserves stage-only labels when a forecast series has one CI', () => {
    const labels = formatLabels(buildForecastingConfig([{ high: 'upper_90', low: 'lower_90' }]))

    expect(labels.map(label => label.text)).toEqual(['Estimate', 'Forecast'])
  })

  it('falls back to numbered CI labels when percentage values are unavailable', () => {
    const labels = formatLabels(
      buildForecastingConfig([
        { high: 'upper_forecast', low: 'lower_forecast' },
        { high: 'upper_prediction', low: 'lower_prediction' }
      ])
    )

    expect(labels.map(label => label.text)).toEqual([
      'CI 1 Estimate',
      'CI 1 Forecast',
      'CI 2 Estimate',
      'CI 2 Forecast'
    ])
  })
})
