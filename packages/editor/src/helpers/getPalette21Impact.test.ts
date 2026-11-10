import { describe, expect, it } from 'vitest'

import { getPalette21Impact } from './getPalette21Impact'

const chartConfig = (paletteName: string, seriesCount?: number, overrides: Record<string, any> = {}) => ({
  type: 'chart',
  visualizationType: 'Line',
  general: { palette: { name: paletteName, version: '2.0' } },
  ...(seriesCount === undefined
    ? {}
    : { series: Array.from({ length: seriesCount }, (_, index) => ({ dataKey: `series_${index}` })) }),
  ...overrides
})

const mapConfig = (paletteName: string, numberOfItems?: number, overrides: Record<string, any> = {}) => ({
  type: 'map',
  general: { geoType: 'us', palette: { name: paletteName, version: '2.0' } },
  legend: numberOfItems === undefined ? { type: 'category' } : { type: 'equalinterval', numberOfItems },
  ...overrides
})

describe('getPalette21Impact', () => {
  it('reports custom chart and map colors as unchanged', () => {
    expect(
      getPalette21Impact(
        chartConfig('qualitative_standard', 3, {
          general: {
            palette: { name: 'qualitative_standard', version: '2.0', customColors: ['#123456'] }
          }
        })
      )
    ).toBe('same')
    expect(
      getPalette21Impact(
        mapConfig('sequential_blue', 5, {
          general: {
            geoType: 'us',
            palette: { name: 'sequential_blue', version: '2.0', customColorsOrdered: ['#123456'] }
          }
        })
      )
    ).toBe('same')
  })

  it('reports the only affected sequential chart color count', () => {
    expect(getPalette21Impact(chartConfig('sequential_blue', 1))).toBe('same')
    expect(getPalette21Impact(chartConfig('sequential_blue', 2))).toBe('changes')
    expect(getPalette21Impact(chartConfig('sequential_blue', 3))).toBe('same')
  })

  it('reports qualitative-standard chart changes for multiple fixed series', () => {
    expect(getPalette21Impact(chartConfig('qualitative_standard', 1))).toBe('same')
    expect(getPalette21Impact(chartConfig('qualitative_standard', 3))).toBe('changes')
  })

  it('reports unaffected chart palette families and visualization types as unchanged', () => {
    expect(getPalette21Impact(chartConfig('divergent_blue_orange', 5))).toBe('same')
    expect(getPalette21Impact(chartConfig('sequential_blue', 2, { visualizationType: 'Warming Stripes' }))).toBe('same')
  })

  it('stays conservative when a chart color count is data-driven or unavailable', () => {
    expect(getPalette21Impact(chartConfig('sequential_blue'))).toBe('unknown')
    expect(
      getPalette21Impact(
        chartConfig('qualitative_standard', 1, {
          series: [{ dataKey: 'value', dynamicCategory: 'category' }]
        })
      )
    ).toBe('unknown')
  })

  it('compares fixed numeric map legend colors across versions', () => {
    expect(getPalette21Impact(mapConfig('sequential_blue', 5))).toBe('changes')
    expect(getPalette21Impact(mapConfig('sequential_blue', 9))).toBe('same')
    expect(getPalette21Impact(mapConfig('qualitative_standard', 5))).toBe('changes')
  })

  it('reports unaffected map palettes and unknown categorical counts conservatively', () => {
    expect(getPalette21Impact(mapConfig('qualitative1'))).toBe('same')
    expect(getPalette21Impact(mapConfig('sequential_blue'))).toBe('unknown')
  })
})
