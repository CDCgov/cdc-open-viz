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
})
