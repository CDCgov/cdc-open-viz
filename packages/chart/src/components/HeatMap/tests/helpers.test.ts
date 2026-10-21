import { describe, expect, it } from 'vitest'
import {
  buildChartMargins,
  buildGridLayout,
  buildHeatMapData,
  getHeatMapBucketPalette,
  getHeatMapColorBucketCount,
  getHeatMapColorScale,
  getHeatMapDataGroupRanges,
  getHeatMapPalette,
  getNonNegativeConfigNumber,
  getXAxisTickLabelProps,
  getHeatMapXAxisTickValues,
  type HeatMapCell,
  type HeatMapColumn,
  type HeatMapDataGroupRange,
  type HeatMapSourceRow
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

  it('preserves current coercion behavior for sparse, nonnumeric, and non-finite values', () => {
    const { columns, minValue, maxValue } = buildHeatMapData({
      data: [
        { category: 'Null', Austin: null },
        { category: 'Empty', Austin: '' },
        { category: 'Undefined', Austin: undefined },
        { category: 'Missing' },
        { category: 'Nonnumeric', Austin: 'not-a-number' },
        { category: 'Positive Infinity', Austin: 'Infinity' },
        { category: 'Negative Infinity', Austin: '-Infinity' }
      ],
      xDataKey: 'category',
      series: [{ dataKey: 'Austin', name: 'Austin' }],
      xAxisType: 'categorical'
    })

    const valueByCategory = Object.fromEntries(columns.map(column => [column.key, column.bins[0].value]))
    const sourceRowCountByCategory = Object.fromEntries(
      columns.map(column => [column.key, column.bins[0].sourceRows.length])
    )

    expect(valueByCategory).toEqual({
      Null: 0,
      Empty: 0,
      Undefined: null,
      Missing: null,
      Nonnumeric: null,
      'Positive Infinity': Infinity,
      'Negative Infinity': -Infinity
    })
    expect(sourceRowCountByCategory).toEqual({
      Null: 1,
      Empty: 1,
      Undefined: 0,
      Missing: 0,
      Nonnumeric: 0,
      'Positive Infinity': 1,
      'Negative Infinity': 1
    })
    expect(minValue).toBe(-Infinity)
    expect(maxValue).toBe(Infinity)
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

  it('preserves palette selection through the helper barrel', () => {
    const colors = ['#111111', '#eeeeee']
    const config = buildPaletteConfig(2)
    config.general.palette = { customColors: colors, isReversed: true }

    expect(getHeatMapPalette(config)).toEqual([...colors].reverse())
  })

  it('preserves the legacy helper type exports', () => {
    const sourceRow: HeatMapSourceRow = { category: 'A', value: 1 }
    const cell: HeatMapCell = {
      rowKey: 'value',
      rowLabel: 'Value',
      xValue: 'A',
      xLabel: 'A',
      value: 1,
      sourceRows: [sourceRow]
    }
    const column: HeatMapColumn = { key: 'A', label: 'A', rawValue: 'A', bins: [cell] }
    const range: HeatMapDataGroupRange = { min: 0, max: 1, label: '0–1' }

    expect(column.bins[0]).toBe(cell)
    expect(cell.sourceRows[0]).toBe(sourceRow)
    expect(range.label).toBe('0–1')
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

describe('HeatMap layout helpers', () => {
  const margins = { top: 50, right: 16, bottom: 30, left: 100 }

  it('builds margins for a bottom axis without visible labels or ticks', () => {
    const config = {
      heatmap: { xAxisPosition: 'bottom' },
      xAxis: { hideLabel: true, hideTicks: true },
      yAxis: { hideLabel: true },
      hideXAxisLabel: true,
      hideYAxisLabel: true
    } as ChartConfig

    expect(buildChartMargins(config, ['Row'], ['Column'], 800)).toEqual({
      top: 24,
      right: 16,
      bottom: 16,
      left: 72
    })
  })

  it('builds a responsive grid from the available chart area', () => {
    expect(buildGridLayout(800, 320, margins, 4, 2)).toEqual({
      availableWidth: 684,
      availableHeight: 240,
      responsiveGridWidth: 684,
      gridWidth: 684,
      gridHeight: 240,
      cellWidth: 171,
      cellHeight: 120,
      xOffset: 0,
      yOffset: 0
    })
  })

  it('honors minimum column width without changing the available chart area', () => {
    expect(buildGridLayout(800, 320, margins, 4, 2, 200)).toEqual({
      availableWidth: 684,
      availableHeight: 240,
      responsiveGridWidth: 684,
      gridWidth: 800,
      gridHeight: 240,
      cellWidth: 200,
      cellHeight: 120,
      xOffset: 0,
      yOffset: 0
    })
  })

  it('keeps empty layouts finite and nonnegative', () => {
    expect(buildGridLayout(0, 0, margins, 0, 0)).toEqual({
      availableWidth: 0,
      availableHeight: 0,
      responsiveGridWidth: 0,
      gridWidth: 0,
      gridHeight: 0,
      cellWidth: 0,
      cellHeight: 0,
      xOffset: 0,
      yOffset: 0
    })
  })

  it('normalizes configured layout numbers without changing fallback behavior', () => {
    expect(getNonNegativeConfigNumber('12', 4)).toBe(12)
    expect(getNonNegativeConfigNumber(-2, 4)).toBe(0)
    expect(getNonNegativeConfigNumber('not-a-number', 4)).toBe(4)
  })

  it('preserves top and bottom x-axis label anchoring', () => {
    expect(getXAxisTickLabelProps('top', 0, 10)).toEqual({
      fontSize: 16,
      textAnchor: 'middle',
      angle: 0,
      dx: 0,
      y: -10
    })
    expect(getXAxisTickLabelProps('bottom', -45, 10)).toEqual({
      fontSize: 16,
      textAnchor: 'end',
      angle: -45,
      dx: 0,
      y: 10
    })
    expect(getXAxisTickLabelProps('top', -60, 10)).toEqual({
      fontSize: 16,
      textAnchor: 'start',
      angle: -60,
      dx: 0,
      y: -10,
      verticalAnchor: 'middle'
    })
  })
})

describe('HeatMap x-axis tick values', () => {
  const domain = ['a', 'b', 'c', 'd', 'e']
  const formattedLabels = Object.fromEntries(domain.map(value => [value, `Label ${value}`]))
  const measureLabel = () => 50

  it('samples an explicit tick count evenly while preserving the first and last values', () => {
    expect(
      getHeatMapXAxisTickValues({
        domain,
        formattedLabels,
        gridWidth: 500,
        rotationDegrees: 0,
        requestedCount: 3,
        measureLabel,
        fontSize: 16
      })
    ).toEqual(['a', 'c', 'e'])
  })

  it('automatically reduces dense labels without changing the domain', () => {
    const tickValues = getHeatMapXAxisTickValues({
      domain,
      formattedLabels,
      gridWidth: 150,
      rotationDegrees: 0,
      measureLabel,
      fontSize: 16
    })

    expect(tickValues).toEqual(['a', 'e'])
    expect(domain).toEqual(['a', 'b', 'c', 'd', 'e'])
  })

  it('keeps every short categorical label when neighboring labels fit', () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const labelWidths = [23, 24, 27, 23, 29, 22, 17, 27, 26, 23, 27, 27]

    expect(
      getHeatMapXAxisTickValues({
        domain: months,
        formattedLabels: Object.fromEntries(months.map(month => [month, month])),
        gridWidth: 468,
        rotationDegrees: 0,
        measureLabel: label => labelWidths[months.indexOf(label)],
        fontSize: 16
      })
    ).toEqual(months)
  })

  it('allows more labels when rotation reduces their horizontal footprint', () => {
    expect(
      getHeatMapXAxisTickValues({
        domain,
        formattedLabels,
        gridWidth: 150,
        rotationDegrees: 90,
        measureLabel,
        fontSize: 16
      })
    ).toEqual(domain)
  })

  it('handles very large category domains without spreading every label into Math.max', () => {
    const largeDomain = Array.from({ length: 150_000 }, (_, index) => String(index))
    const tickValues = getHeatMapXAxisTickValues({
      domain: largeDomain,
      formattedLabels: {},
      gridWidth: 100,
      rotationDegrees: 0,
      measureLabel: () => 1,
      fontSize: 1
    })

    expect(tickValues[0]).toBe('0')
    expect(tickValues[tickValues.length - 1]).toBe('149999')
  })
})
