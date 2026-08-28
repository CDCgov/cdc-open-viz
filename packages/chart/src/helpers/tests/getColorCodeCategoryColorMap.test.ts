import { describe, expect, it } from 'vitest'
import { ChartConfig } from '../../types/ChartConfig'
import { getColorCodeCategoryColorMap } from '../getColorCodeCategoryColorMap'

const buildConfig = (colorCode = 'Group'): ChartConfig =>
  ({
    general: {
      palette: {
        name: 'sequential_blue',
        version: '2.0'
      }
    },
    legend: { colorCode }
  } as ChartConfig)

const colorPalettes = {
  sequential_blue: ['#111111', '#222222']
}

describe('getColorCodeCategoryColorMap', () => {
  it('assigns colors to unique categories in encounter order', () => {
    const result = getColorCodeCategoryColorMap(
      buildConfig(),
      [{ Group: 'Group A' }, { Group: 'Group B' }, { Group: 'Group A' }],
      colorPalettes
    )

    expect(Array.from(result.entries())).toEqual([
      ['Group A', '#111111'],
      ['Group B', '#222222']
    ])
  })

  it('repeats the palette when there are more categories than colors', () => {
    const result = getColorCodeCategoryColorMap(
      buildConfig(),
      [{ Group: 'Group A' }, { Group: 'Group B' }, { Group: 'Group C' }],
      colorPalettes
    )

    expect(Array.from(result.values())).toEqual(['#111111', '#222222', '#111111'])
  })

  it('returns an empty map without a color-code column', () => {
    expect(getColorCodeCategoryColorMap(buildConfig(''), [{ Group: 'Group A' }], colorPalettes).size).toBe(0)
  })
})
