import { scaleOrdinal } from '@visx/scale'
import { describe, expect, it, vi } from 'vitest'
import { createFormatLabels } from './createFormatLabels'
import { ChartConfig } from '../../../types/ChartConfig'
import { Label } from '../../../types/Label'
import chroma from 'chroma-js'
import {
  getForecastConfidenceIntervalGroups,
  getForecastConfidenceIntervalKey,
  getForecastLegendKey,
  isForecastLegendSelectionActive
} from '../../../helpers/forecastLegend'

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
describe('createFormatLabels category-colored bar legends', () => {
  it('uses the same consecutive palette colors as category-colored bars', () => {
    const config = buildConfig({
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      general: {
        palette: {
          name: 'sequential_blue',
          version: '2.0'
        }
      } as any,
      legend: { colorCode: 'Group' } as any,
      smallMultiples: undefined as any,
      series: [{ dataKey: 'value', name: 'Value', type: 'Bar' }] as any
    })
    const tableData = [{ Group: 'Group A' }, { Group: 'Group B' }]

    const labels = createFormatLabels(config, tableData, tableData, colorScale, vi.fn())(defaultLabels)

    expect(labels.map(label => [label.text, label.value])).toEqual([
      ['Group A', '#DBE8F7'],
      ['Group B', '#BED5ED']
    ])
  })
})

const buildForecastConfig = (confidenceIntervals: any[]): ChartConfig =>
  buildConfig({
    visualizationType: 'Combo',
    smallMultiples: undefined,
    general: { palette: { name: 'qualitative_standard', version: '2.0' } } as any,
    legend: { expandForecastConfidenceIntervals: true } as any,
    series: [
      {
        dataKey: 'stage',
        type: 'Forecasting',
        confidenceIntervals,
        stages: [
          { key: 'Observed', color: 'sequential-blue' },
          { key: 'Forecast', color: 'sequential-green' }
        ]
      }
    ] as any,
    runtime: {
      seriesKeys: ['Observed', 'Forecast'],
      forecastingSeriesKeys: [
        {
          confidenceIntervals,
          stages: [
            { key: 'Observed', color: 'sequential-blue' },
            { key: 'Forecast', color: 'sequential-green' }
          ]
        }
      ]
    } as any
  })

describe('createFormatLabels forecast confidence interval legends', () => {
  it('orders resolved percentages numerically and assigns an independent identity to each interval and stage', () => {
    const labels = formatLabels(
      buildForecastConfig([
        { low: 'Lower 90%', high: 'Upper 90%' },
        { low: 'Lower 50%', high: 'Upper 50%' }
      ])
    )

    expect(labels.map(label => [label.text, label.datum])).toEqual([
      ['50% CI Observed', getForecastLegendKey('Observed', 'percentage:50')],
      ['50% CI Forecast', getForecastLegendKey('Forecast', 'percentage:50')],
      ['90% CI Observed', getForecastLegendKey('Observed', 'percentage:90')],
      ['90% CI Forecast', getForecastLegendKey('Forecast', 'percentage:90')]
    ])
    expect(chroma(labels[0].value).alpha()).toBeCloseTo(0.75)
    expect(chroma(labels[2].value).alpha()).toBeCloseTo(0.5)
  })

  it('collapses duplicate percentages while retaining their effective shade', () => {
    const labels = formatLabels(
      buildForecastConfig([
        { low: 'Lower 90%', high: 'Upper 90%' },
        { low: 'Low 90', high: 'High 90' }
      ])
    )

    expect(labels.map(label => label.text)).toEqual(['90% CI Observed', '90% CI Forecast'])
    expect(chroma(labels[0].value).alpha()).toBeCloseTo(0.75)
  })

  it('uses stable fallbacks and omits incomplete intervals', () => {
    const labels = formatLabels(
      buildForecastConfig([
        { low: 'lower', high: 'upper' },
        { low: '', high: 'Upper 80%' },
        { low: 'minimum', high: 'maximum' }
      ])
    )

    expect(labels.map(label => label.text)).toEqual([
      'CI 1 Observed',
      'CI 1 Forecast',
      'CI 2 Observed',
      'CI 2 Forecast'
    ])
  })

  it('falls back when bounds do not contain the same single percentage', () => {
    const labels = formatLabels(
      buildForecastConfig([
        { low: 'Lower 50%', high: 'Upper 95%' },
        { low: 'Lower 50 to 90%', high: 'Upper 50 to 90%' }
      ])
    )

    expect(labels.map(label => label.text)).toEqual([
      'CI 1 Observed',
      'CI 1 Forecast',
      'CI 2 Observed',
      'CI 2 Forecast'
    ])
  })

  it('keeps a single complete interval stage-only', () => {
    const labels = formatLabels(
      buildForecastConfig([
        { low: 'Lower 50%', high: 'Upper 50%' },
        { low: '', high: 'Upper 90%' }
      ])
    )

    expect(labels.map(label => [label.text, label.datum])).toEqual([
      ['Observed', 'Observed'],
      ['Forecast', 'Forecast']
    ])
    expect(labels.every(label => chroma(label.value).alpha() === 1)).toBe(true)
  })

  it.each([undefined, false])('keeps multi-interval legends stage-only when expansion is %s', expansionValue => {
    const config = buildForecastConfig([
      { low: 'Lower 50%', high: 'Upper 50%' },
      { low: 'Lower 90%', high: 'Upper 90%' }
    ])
    config.legend.expandForecastConfidenceIntervals = expansionValue

    expect(formatLabels(config).map(label => [label.text, label.datum])).toEqual([
      ['Observed', 'Observed'],
      ['Forecast', 'Forecast']
    ])
  })

  it('does not infer percentages outside the valid percentage range', () => {
    const labels = formatLabels(
      buildForecastConfig([
        { low: 'lower_2024', high: 'upper_2024' },
        { low: 'Lower 50%', high: 'Upper 50%' }
      ])
    )

    expect(labels.map(label => label.text)).toEqual([
      '50% CI Observed',
      '50% CI Forecast',
      'CI 1 Observed',
      'CI 1 Forecast'
    ])
  })

  it('preserves interval-major numeric ordering when legacy legend ordering options are enabled', () => {
    const config = buildForecastConfig([
      { low: 'Lower 90%', high: 'Upper 90%' },
      { low: 'Lower 50%', high: 'Upper 50%' }
    ])
    config.legend.reverseLabelOrder = true
    config.legend.verticalSorted = true

    expect(formatLabels(config).map(label => label.text)).toEqual([
      '50% CI Observed',
      '50% CI Forecast',
      '90% CI Observed',
      '90% CI Forecast'
    ])
  })
})

describe('forecast confidence interval interaction identity', () => {
  const confidenceIntervals = [
    { low: 'Lower 90%', high: 'Upper 90%' },
    { low: 'Lower 50%', high: 'Upper 50%' }
  ]

  it('maps configured intervals to their normalized legend keys', () => {
    expect(getForecastConfidenceIntervalKey(confidenceIntervals, 0)).toBe('percentage:90')
    expect(getForecastConfidenceIntervalKey(confidenceIntervals, 1)).toBe('percentage:50')
    expect(getForecastLegendKey('Forecast: west', 'percentage:50')).toBe(
      'forecast-ci:Forecast%3A%20west:percentage%3A50'
    )
  })

  it('activates only a matching composite row while accepting legacy stage selections', () => {
    const selectedKey = getForecastLegendKey('Forecast', 'percentage:50')

    expect(isForecastLegendSelectionActive([selectedKey], 'Forecast', 'percentage:50')).toBe(true)
    expect(isForecastLegendSelectionActive([selectedKey], 'Forecast', 'percentage:90')).toBe(false)
    expect(isForecastLegendSelectionActive([selectedKey], 'Observed', 'percentage:50')).toBe(false)
    expect(isForecastLegendSelectionActive(['Forecast'], 'Forecast', 'percentage:50')).toBe(true)
    expect(isForecastLegendSelectionActive(['Forecast'], 'Forecast', 'percentage:90')).toBe(true)
  })

  it('shares one composite identity across duplicate resolved percentages', () => {
    const duplicateIntervals = [
      { low: 'Lower 90%', high: 'Upper 90%' },
      { low: 'Low 90', high: 'High 90' }
    ]
    const groups = getForecastConfidenceIntervalGroups(duplicateIntervals)

    expect(groups).toHaveLength(1)
    expect(groups[0].intervalIndexes).toEqual([0, 1])
    expect(getForecastConfidenceIntervalKey(duplicateIntervals, 0)).toBe('percentage:90')
    expect(getForecastConfidenceIntervalKey(duplicateIntervals, 1)).toBe('percentage:90')
  })
})
