import { describe, expect, it } from 'vitest'
import {
  buildHeatMapData,
  getHeatMapBucketPalette,
  getHeatMapColorBucketCount,
  getHeatMapColorScale,
  getHeatMapDataGroupRanges
} from '../helpers'
import { type ChartConfig } from '../../../types/ChartConfig'

describe('buildHeatMapData', () => {
  it('aggregates duplicate x/series cells using numeric sum', () => {
    const { columns, minValue, maxValue } = buildHeatMapData({
      data: [
        { month: 'Jan', Austin: 2, Boston: 4 },
        { month: 'Jan', Austin: 3, Boston: 0 }
      ],
      xDataKey: 'month',
      series: [
        { dataKey: 'Austin', name: 'Austin' },
        { dataKey: 'Boston', name: 'Boston' }
      ],
      xAxisType: 'categorical'
    })

    expect(columns).toHaveLength(1)
    expect(columns[0].bins[0].value).toBe(5)
    expect(columns[0].bins[0].sourceRows).toHaveLength(2)
    expect(columns[0].bins[1].value).toBe(4)
    expect(minValue).toBe(4)
    expect(maxValue).toBe(5)
  })

  it('orders date-based x values in ascending order', () => {
    const { columns } = buildHeatMapData({
      data: [
        { date: '2024-03-01', Austin: 1 },
        { date: '2024-01-01', Austin: 2 },
        { date: '2024-02-01', Austin: 3 }
      ],
      xDataKey: 'date',
      series: [{ dataKey: 'Austin', name: 'Austin' }],
      xAxisType: 'date'
    })

    expect(columns.map(column => column.key)).toEqual(['2024-01-01', '2024-02-01', '2024-03-01'])
  })

  it('creates empty cells for missing x/series combinations', () => {
    const { columns, rowLabels } = buildHeatMapData({
      data: [
        { month: 'Jan', Austin: 5 },
        { month: 'Feb', Boston: 4 }
      ],
      xDataKey: 'month',
      series: [
        { dataKey: 'Austin', name: 'Austin' },
        { dataKey: 'Boston', name: 'Boston' }
      ],
      xAxisType: 'categorical'
    })

    expect(rowLabels).toEqual(['Austin', 'Boston'])
    expect(columns).toHaveLength(2)
    expect(columns[0].bins[1].value).toBeNull()
    expect(columns[1].bins[0].value).toBeNull()
  })

  it('builds series-driven rows when data series are provided', () => {
    const { columns, rowLabels, minValue, maxValue } = buildHeatMapData({
      data: [
        { month: 'Jan', Austin: 12, Boston: 30 },
        { month: 'Feb', Austin: 18, Boston: 40 }
      ],
      xDataKey: 'month',
      series: [
        { dataKey: 'Austin', name: 'Austin' },
        { dataKey: 'Boston', name: 'Boston' }
      ],
      seriesLabels: { Austin: 'Austin', Boston: 'Boston' },
      xAxisType: 'categorical'
    })

    expect(rowLabels).toEqual(['Austin', 'Boston'])
    expect(columns).toHaveLength(2)
    expect(columns[0].bins[0].value).toBe(12)
    expect(columns[0].bins[1].value).toBe(30)
    expect(columns[1].bins[0].value).toBe(18)
    expect(columns[1].bins[1].value).toBe(40)
    expect(minValue).toBe(12)
    expect(maxValue).toBe(40)
  })

  it('keeps non-calendar categories in source order for average age by city', () => {
    const { columns, rowLabels, minValue, maxValue } = buildHeatMapData({
      data: [
        { communityType: 'Urban Core', Atlanta: 34, Chicago: 36, Phoenix: 38 },
        { communityType: 'Suburban', Atlanta: 41, Chicago: 39, Phoenix: 42 },
        { communityType: 'Rural', Atlanta: 46, Chicago: 44, Phoenix: 49 }
      ],
      xDataKey: 'communityType',
      series: [
        { dataKey: 'Atlanta', name: 'Atlanta' },
        { dataKey: 'Chicago', name: 'Chicago' },
        { dataKey: 'Phoenix', name: 'Phoenix' }
      ],
      xAxisType: 'categorical'
    })

    expect(columns.map(column => column.key)).toEqual(['Urban Core', 'Suburban', 'Rural'])
    expect(rowLabels).toEqual(['Atlanta', 'Chicago', 'Phoenix'])
    expect(columns[0].bins.map(bin => bin.value)).toEqual([34, 36, 38])
    expect(columns[2].bins[2].value).toBe(49)
    expect(minValue).toBe(34)
    expect(maxValue).toBe(49)
  })
})

describe('HeatMap data grouping', () => {
  const buildPaletteConfig = (colorBucketCount?: unknown) =>
    ({
      general: {
        palette: {
          customColors: ['#000000', '#ffffff']
        }
      },
      heatmap: {
        colorBucketCount
      }
    } as ChartConfig)

  it('clamps HeatMap data grouping to the supported range', () => {
    expect(getHeatMapColorBucketCount(buildPaletteConfig(undefined))).toBe(9)
    expect(getHeatMapColorBucketCount(buildPaletteConfig(0))).toBe(1)
    expect(getHeatMapColorBucketCount(buildPaletteConfig(-4))).toBe(1)
    expect(getHeatMapColorBucketCount(buildPaletteConfig(12))).toBe(9)
  })

  it('supports one bucket as the minimum heatmap color count', () => {
    const colorScale = getHeatMapColorScale(buildPaletteConfig(1), 0, 100)

    expect(getHeatMapBucketPalette(buildPaletteConfig(1))).toHaveLength(1)
    expect(colorScale(1)).toBe(colorScale(99))
  })

  it('uses the configured number of data groups for heatmap cell colors', () => {
    const colorScale = getHeatMapColorScale(buildPaletteConfig(5), 0, 100)
    const bucketColors = [0, 20, 40, 60, 80].map(value => colorScale(value))

    expect(getHeatMapColorBucketCount(buildPaletteConfig(5))).toBe(5)
    expect(getHeatMapBucketPalette(buildPaletteConfig(5))).toHaveLength(5)
    expect(new Set(bucketColors)).toHaveLength(5)
    expect(colorScale(1)).toBe(colorScale(19))
  })

  it('builds data group legend ranges from the heatmap grouping domain', () => {
    const ranges = getHeatMapDataGroupRanges(buildPaletteConfig(5), 0, 1, value => value.toFixed(1))

    expect(ranges.map(range => range.label)).toEqual([
      '0.0\u20130.2',
      '0.2\u20130.4',
      '0.4\u20130.6',
      '0.6\u20130.8',
      '0.8\u20131.0'
    ])
  })
})
