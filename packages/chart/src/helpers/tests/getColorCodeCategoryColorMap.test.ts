import { describe, expect, it } from 'vitest'
import { ChartConfig } from '../../types/ChartConfig'
import { getColorCodeCategoryColorMap } from '../getColorCodeCategoryColorMap'

const buildConfig = (
  colorCode = 'Group',
  paletteOverrides: Partial<ChartConfig['general']['palette']> = {}
): ChartConfig =>
  ({
    visualizationType: 'Bar',
    general: {
      palette: {
        name: 'sequential_blue',
        version: '2.0',
        ...paletteOverrides
      }
    },
    legend: { colorCode }
  } as ChartConfig)

const colorPalettes = {
  sequential_blue: Array.from({ length: 9 }, (_, index) => `#00000${index}`),
  sequential_bluereverse: Array.from({ length: 9 }, (_, index) => `#00000${8 - index}`),
  qualitative_standard: Array.from({ length: 9 }, (_, index) => `qualitative-${index}`)
}

describe('getColorCodeCategoryColorMap', () => {
  it('assigns colors to unique categories in encounter order', () => {
    const result = getColorCodeCategoryColorMap(
      buildConfig(),
      [{ Group: 'Group A' }, { Group: 'Group B' }, { Group: 'Group A' }],
      colorPalettes
    )

    expect(Array.from(result.entries())).toEqual([
      ['Group A', '#000000'],
      ['Group B', '#000001']
    ])
  })

  it('uses the V2 chart distribution for two categories in a sequential palette', () => {
    const result = getColorCodeCategoryColorMap(
      buildConfig('Group', { distributionVersion: '2.0' }),
      [{ Group: 'Group A' }, { Group: 'Group B' }, { Group: 'Group A' }],
      colorPalettes
    )

    expect(Array.from(result.entries())).toEqual([
      ['Group A', '#000004'],
      ['Group B', '#000008']
    ])
  })

  it('uses the full V2 chart distribution for three categories in a sequential palette', () => {
    const result = getColorCodeCategoryColorMap(
      buildConfig('Group', { distributionVersion: '2.0' }),
      [{ Group: 'Group A' }, { Group: 'Group B' }, { Group: 'Group C' }],
      colorPalettes
    )

    expect(Array.from(result.values())).toEqual(['#000000', '#000004', '#000008'])
  })

  it('uses the V2 qualitative distribution for color-coded categories', () => {
    const result = getColorCodeCategoryColorMap(
      buildConfig('Group', { name: 'qualitative_standard', distributionVersion: '2.0' }),
      [{ Group: 'Group A' }, { Group: 'Group B' }, { Group: 'Group C' }],
      colorPalettes
    )

    expect(Array.from(result.values())).toEqual(['qualitative-0', 'qualitative-4', 'qualitative-6'])
  })

  it('uses the V2 sequential colors in reverse order for a reversed palette', () => {
    const rows = [{ Group: 'Group A' }, { Group: 'Group B' }]
    const reversed = getColorCodeCategoryColorMap(
      buildConfig('Group', {
        name: 'sequential_bluereverse',
        distributionVersion: '2.0',
        isReversed: true
      }),
      rows,
      colorPalettes
    )

    expect(Array.from(reversed.values())).toEqual(['#000008', '#000004'])
  })

  it('preserves raw palette order for custom palettes', () => {
    const rows = [{ Group: 'Group A' }, { Group: 'Group B' }]
    const custom = getColorCodeCategoryColorMap(
      buildConfig('Group', { distributionVersion: '2.0', customColors: ['#111111', '#222222'] }),
      rows,
      colorPalettes
    )

    expect(Array.from(custom.values())).toEqual(['#111111', '#222222'])
  })

  it('repeats the palette when there are more categories than colors', () => {
    const result = getColorCodeCategoryColorMap(
      buildConfig(),
      [{ Group: 'Group A' }, { Group: 'Group B' }, { Group: 'Group C' }],
      colorPalettes
    )

    expect(Array.from(result.values())).toEqual(['#000000', '#000001', '#000002'])
  })

  it('returns an empty map without a color-code column', () => {
    expect(getColorCodeCategoryColorMap(buildConfig(''), [{ Group: 'Group A' }], colorPalettes).size).toBe(0)
  })
})
