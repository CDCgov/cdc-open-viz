import { describe, expect, it } from 'vitest'
import { getColorScale } from '../getColorScale'
import { ChartConfig } from '../../types/ChartConfig'

const buildConfig = (overrides: Partial<ChartConfig> = {}): ChartConfig =>
  ({
    visualizationType: 'Line',
    visualizationSubType: 'regular',
    general: {
      palette: {
        customColors: ['#111111', '#222222', '#333333'],
        colorAssignmentMode: 'by-value',
        colorAssignments: [
          { key: 'series_a', color: '#aa0000' },
          { key: 'series_c', color: '#00cc00' }
        ]
      }
    },
    legend: {},
    series: [
      { dataKey: 'series_a', name: 'Series A', type: 'Line' },
      { dataKey: 'series_b', name: 'Series B', type: 'Line' },
      { dataKey: 'series_c', name: 'Series C', type: 'Line' }
    ],
    runtime: {
      seriesKeys: ['series_a', 'series_b', 'series_c'],
      seriesLabels: {
        series_a: 'Series A',
        series_b: 'Series B',
        series_c: 'Series C'
      },
      seriesLabelsAll: ['Series A', 'Series B', 'Series C']
    },
    ...overrides
  } as ChartConfig)

describe('getColorScale series color assignments', () => {
  it('keeps assigned series colors stable when runtime series order changes', () => {
    const colorScale = getColorScale(
      buildConfig({
        runtime: {
          seriesKeys: ['series_c', 'series_a'],
          seriesLabels: {
            series_a: 'Series A',
            series_c: 'Series C'
          },
          seriesLabelsAll: ['Series C', 'Series A']
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#aa0000')
    expect(colorScale('Series C')).toBe('#00cc00')
  })

  it('keeps assigned colors when missing series later reappear', () => {
    const filteredScale = getColorScale(
      buildConfig({
        runtime: {
          seriesKeys: ['series_a'],
          seriesLabels: { series_a: 'Series A' },
          seriesLabelsAll: ['Series A']
        } as any
      })
    )
    const restoredScale = getColorScale(buildConfig())

    expect(filteredScale('Series A')).toBe('#aa0000')
    expect(restoredScale('Series C')).toBe('#00cc00')
  })

  it('uses ordered palette/custom fallback for unassigned series', () => {
    const colorScale = getColorScale(buildConfig())

    expect(colorScale('Series A')).toBe('#aa0000')
    expect(colorScale('Series B')).toBe('#222222')
    expect(colorScale('Series C')).toBe('#00cc00')
  })

  it('resolves assignments by dataKey when display labels differ', () => {
    const colorScale = getColorScale(
      buildConfig({
        series: [{ dataKey: 'raw_value', name: 'Display Value', type: 'Line' }] as any,
        runtime: {
          seriesKeys: ['raw_value'],
          seriesLabels: { raw_value: 'Display Value' },
          seriesLabelsAll: ['Display Value']
        } as any,
        general: {
          palette: {
            customColors: ['#111111'],
            colorAssignmentMode: 'by-value',
            colorAssignments: [{ key: 'raw_value', color: '#123456' }]
          }
        } as any
      })
    )

    expect(colorScale('Display Value')).toBe('#123456')
  })

  it('preserves ordered mode behavior when assignments are present', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            customColors: ['#111111', '#222222', '#333333'],
            colorAssignmentMode: 'ordered',
            colorAssignments: [{ key: 'series_a', color: '#aa0000' }]
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#111111')
    expect(colorScale('Series B')).toBe('#222222')
  })

  it('preserves scatter plot customColors through the shared scale', () => {
    const colorScale = getColorScale(
      buildConfig({
        visualizationType: 'Scatter Plot',
        general: {
          palette: {
            customColors: ['#101010', '#202020', '#303030']
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#101010')
    expect(colorScale('Series B')).toBe('#202020')
  })

  it('uses v2 customColors in authored order when customColorsOrdered is absent', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            customColors: [
              '#111111',
              '#222222',
              '#333333',
              '#444444',
              '#555555',
              '#666666',
              '#777777',
              '#888888',
              '#999999'
            ]
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#111111')
    expect(colorScale('Series B')).toBe('#222222')
    expect(colorScale('Series C')).toBe('#333333')
  })

  it('falls back to customColors when customColorsOrdered is empty', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            customColorsOrdered: [],
            customColors: ['#101010', '#202020', '#303030']
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#101010')
    expect(colorScale('Series B')).toBe('#202020')
    expect(colorScale('Series C')).toBe('#303030')
  })

  it('falls back to the named palette when customColors is empty', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            customColors: []
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#0057B7')
    expect(colorScale('Series B')).toBe('#00B1CE')
    expect(colorScale('Series C')).toBe('#5A8E3F')
  })
})
