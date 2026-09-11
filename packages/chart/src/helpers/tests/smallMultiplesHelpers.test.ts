import { scaleOrdinal } from '@visx/scale'
import { describe, expect, it } from 'vitest'
import { applyTileOrder, createTileColorScale, getTileKeys } from '../smallMultiplesHelpers'
import { ChartConfig } from '../../types/ChartConfig'

const buildConfig = (overrides: Partial<ChartConfig> = {}): ChartConfig =>
  ({
    visualizationType: 'Line',
    visualizationSubType: 'regular',
    general: {
      palette: {
        customColors: ['#111111', '#222222'],
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

describe('smallMultiplesHelpers createTileColorScale', () => {
  it('uses the same first color for by-series tiles in same color mode by default', () => {
    const colorScale = scaleOrdinal({
      domain: ['Series A', 'Series B'],
      range: ['#111111', '#222222'],
      unknown: null
    })

    const tileScale = createTileColorScale(
      { mode: 'by-series', seriesKey: 'series_b' },
      buildConfig(),
      colorScale,
      1,
      2
    )

    expect(tileScale('Series A')).toBe('#111111')
    expect(tileScale('Series B')).toBe('#111111')
  })

  it('lets by-value assignments override same color mode for by-series tiles', () => {
    const colorScale = scaleOrdinal({
      domain: ['Series A', 'Series B'],
      range: ['#aa0000', '#00bb00'],
      unknown: null
    })
    const config = buildConfig({
      general: {
        palette: {
          customColors: ['#111111', '#222222'],
          colorAssignmentMode: 'by-value',
          colorAssignments: [{ key: 'series_b', color: '#00bb00' }]
        }
      } as any
    })

    const tileScale = createTileColorScale({ mode: 'by-series', seriesKey: 'series_b' }, config, colorScale, 1, 2)

    expect(tileScale('Series A')).toBe('#aa0000')
    expect(tileScale('Series B')).toBe('#00bb00')
  })

  it('ignores stale by-value assignments when deciding whether to override same color mode', () => {
    const colorScale = scaleOrdinal({
      domain: ['Series A', 'Series B'],
      range: ['#aa0000', '#00bb00'],
      unknown: null
    })
    const config = buildConfig({
      general: {
        palette: {
          customColors: ['#111111', '#222222'],
          colorAssignmentMode: 'by-value',
          colorAssignments: [{ key: 'removed_series', color: '#00bb00' }]
        }
      } as any
    })

    const tileScale = createTileColorScale({ mode: 'by-series', seriesKey: 'series_b' }, config, colorScale, 1, 2)

    expect(tileScale('Series A')).toBe('#aa0000')
    expect(tileScale('Series B')).toBe('#aa0000')
  })
})

describe('smallMultiplesHelpers tile ordering', () => {
  it('sorts by-column tile keys in natural numeric order', () => {
    const config = buildConfig({
      smallMultiples: {
        mode: 'by-column',
        tileColumn: 'Week'
      }
    })
    const data = [{ Week: '10' }, { Week: '2' }, { Week: '1' }, { Week: '20' }, { Week: '3' }, { Week: null }]

    expect(getTileKeys(config, data)).toEqual(['1', '2', '3', '10', '20'])
  })

  it('uses natural numeric order when sorting tile display titles', () => {
    const config = buildConfig({
      smallMultiples: {
        mode: 'by-column',
        tileColumn: 'Week',
        tileTitles: {
          '1': 'Week 1',
          '2': 'Week 2',
          '10': 'Week 10'
        }
      }
    })
    const tileItems = [
      { mode: 'by-column', tileValue: '10', key: '10' },
      { mode: 'by-column', tileValue: '2', key: '2' },
      { mode: 'by-column', tileValue: '1', key: '1' }
    ]

    expect(applyTileOrder(tileItems, 'asc', [], config).map(item => item.tileValue)).toEqual(['1', '2', '10'])
    expect(applyTileOrder(tileItems, 'desc', [], config).map(item => item.tileValue)).toEqual(['10', '2', '1'])
  })
})
