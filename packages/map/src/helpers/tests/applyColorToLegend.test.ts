import { describe, expect, it } from 'vitest'
import { mapColorPalettesV2 } from '@cdc/core/data/mapColorPalettes'
import {
  divergentColorDistribution,
  mapV1ColorDistribution,
  qualitativeStandardColorDistribution,
  v2ColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'
import { applyColorToLegend } from '../applyColorToLegend'

const buildConfig = (paletteVersion: '2.0' | '2.1', overrides: any = {}) => ({
  color: 'sequential_blue',
  general: {
    geoType: 'us',
    palette: {
      isReversed: false,
      name: 'sequential_blue',
      version: paletteVersion,
      ...overrides.palette
    }
  },
  legend: {
    type: 'category',
    style: 'gradient',
    specialClasses: [],
    ...overrides.legend
  }
})

const getColors = (paletteVersion: '2.0' | '2.1', count: number, overrides: any = {}) => {
  const config = buildConfig(paletteVersion, overrides) as any
  const items = Array.from({ length: count }, (_, index) => ({ special: false, value: index + 1 }))

  return items.map((_, index) => applyColorToLegend(index, config, items))
}

describe('applyColorToLegend color distributions', () => {
  it.each(Object.keys(v2ColorDistribution).map(Number))('uses the exact 2.1 distribution for %i items', count => {
    expect(getColors('2.1', count)).toEqual(
      v2ColorDistribution[count].map(index => mapColorPalettesV2.sequential_blue[index])
    )
  })

  it.each(Object.keys(v2ColorDistribution).map(Number))('uses the exact legacy distribution for %i items', count => {
    expect(getColors('2.0', count)).toEqual(
      mapV1ColorDistribution[count].map(index => mapColorPalettesV2.sequential_blue[index])
    )
  })

  it.each(Object.keys(divergentColorDistribution).map(Number))(
    'uses the exact 2.1 divergent distribution for %i items',
    count => {
      expect(
        getColors('2.1', count, {
          palette: { name: 'divergent_blue_orange' }
        })
      ).toEqual(divergentColorDistribution[count].map(index => mapColorPalettesV2.divergent_blue_orange[index]))
    }
  )

  it.each(Object.keys(divergentColorDistribution).map(Number))(
    'uses the exact legacy distribution for %i divergent items',
    count => {
      expect(
        getColors('2.0', count, {
          palette: { name: 'divergent_blue_orange' }
        })
      ).toEqual(mapV1ColorDistribution[count].map(index => mapColorPalettesV2.divergent_blue_orange[index]))
    }
  )

  it.each(['equalinterval', 'equalnumber'])('uses the saved 2.1 distribution for %s legends', type => {
    expect(getColors('2.1', 5, { legend: { type, numberOfItems: 5 } })).toEqual(
      v2ColorDistribution[5].map(index => mapColorPalettesV2.sequential_blue[index])
    )
  })

  it('uses the saved 2.1 distribution for manual legends with a named palette', () => {
    expect(
      getColors('2.1', 4, {
        legend: { type: 'manual', breakpoints: [25, 50, 75] },
        palette: { name: 'divergent_blue_orange' }
      })
    ).toEqual(divergentColorDistribution[4].map(index => mapColorPalettesV2.divergent_blue_orange[index]))
  })

  it('preserves manual interpolation for palette version 2.0', () => {
    const manualIndices = [0, 3, 5, 8]

    expect(
      getColors('2.0', 4, {
        legend: { type: 'manual', breakpoints: [25, 50, 75] },
        palette: { name: 'divergent_blue_orange' }
      })
    ).toEqual(manualIndices.map(index => mapColorPalettesV2.divergent_blue_orange[index]))
  })

  it('preserves manual interpolation for custom colors with palette version 2.1', () => {
    const customColors = [
      '#000000',
      '#111111',
      '#222222',
      '#333333',
      '#444444',
      '#555555',
      '#666666',
      '#777777',
      '#888888'
    ]
    const manualIndices = [0, 3, 5, 8]

    expect(
      getColors('2.1', 4, {
        legend: { type: 'manual', breakpoints: [25, 50, 75] },
        palette: { customColors }
      })
    ).toEqual(manualIndices.map(index => customColors[index]))
  })

  it('does not apply the 2.1 distribution to custom colors', () => {
    const customColors = [
      '#000000',
      '#111111',
      '#222222',
      '#333333',
      '#444444',
      '#555555',
      '#666666',
      '#777777',
      '#888888'
    ]

    expect(getColors('2.1', 5, { palette: { customColors } })).toEqual(
      mapV1ColorDistribution[5].map(index => customColors[index])
    )

    expect(
      getColors('2.1', 5, {
        palette: { customColors, name: 'qualitative_standard' }
      })
    ).toEqual(customColors.slice(0, 5))
  })

  it.each(Object.keys(qualitativeStandardColorDistribution).map(Number))(
    'continues assigning qualitative colors directly with palette version 2.0 for %i items',
    count => {
      expect(
        getColors('2.0', count, {
          palette: { name: 'qualitative_standard' }
        })
      ).toEqual(mapColorPalettesV2.qualitative_standard.slice(0, count))
    }
  )

  it.each(Object.keys(qualitativeStandardColorDistribution).map(Number))(
    'uses the exact 2.1 colorblind distribution for %i items',
    count => {
      expect(
        getColors('2.1', count, {
          palette: { name: 'qualitative_standard' }
        })
      ).toEqual(
        qualitativeStandardColorDistribution[count].map(index => mapColorPalettesV2.qualitative_standard[index])
      )
    }
  )

  it('uses the same 2.1 colorblind colors in reverse order for a reversed palette', () => {
    const count = 5

    expect(
      getColors('2.1', count, {
        palette: { isReversed: true, name: 'qualitative_standardreverse' }
      })
    ).toEqual(
      qualitativeStandardColorDistribution[count].map(index => mapColorPalettesV2.qualitative_standard[index]).reverse()
    )
  })
})
