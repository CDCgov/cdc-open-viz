import { describe, expect, it } from 'vitest'
import { chartColorPalettes } from '../data/colorPalettes'
import { filterColorPalettes } from './filterColorPalettes'
import { getColorPaletteVersion } from './getColorPaletteVersion'
import { getPaletteAccessor } from './getPaletteAccessor'

describe('palette version 2.1 catalog resolution', () => {
  const config = {
    visualizationType: 'Bar',
    general: { palette: { name: 'sequential_blue', version: '2.1', isReversed: false } }
  }

  it('resolves 2.1 to the V2 major palette catalog', () => {
    expect(getColorPaletteVersion(config)).toBe(2)
    expect(getPaletteAccessor(chartColorPalettes, config)).toBe(chartColorPalettes.v2)
  })

  it('offers the same palette choices for 2.0 and 2.1', () => {
    const v20 = filterColorPalettes({
      config: { ...config, general: { palette: { ...config.general.palette, version: '2.0' } } }
    })
    const v21 = filterColorPalettes({ config })

    expect(v21).toEqual(v20)
  })
})
