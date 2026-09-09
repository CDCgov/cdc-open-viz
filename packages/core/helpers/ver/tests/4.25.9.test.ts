import update_4_25_9, { changeSingleStateMapNoDataMessage } from '../4.25.9'
import { expect, describe, it } from 'vitest'

describe('4.25.9 palette normalization', () => {
  it.each([
    ['Bar', 'sequential_bluereverse', true],
    ['Line', 'divergent_blue_cyan', false],
    ['HeatMap', 'sequential_blue', false],
    ['Horizon Chart', 'sequential_blue', false],
    ['Sankey', 'sequential_bluereverse', true]
  ])('freezes the palette-less %s fallback', (visualizationType, name, isReversed) => {
    const result = update_4_25_9({ type: 'chart', visualizationType } as any)

    expect(result.general.palette).toMatchObject({ name, version: '2.0', isReversed })
    expect(result.tracking.paletteFallbackSource).toBe('palette-less')
  })

  it('freezes palette-less dashboard children while migrating authored child palettes normally', () => {
    const result = update_4_25_9({
      type: 'dashboard',
      visualizations: {
        paletteLess: { type: 'chart', visualizationType: 'Line' },
        legacy: { type: 'chart', visualizationType: 'Line', color: 'sequential-orange' }
      }
    } as any)

    expect(result.visualizations.paletteLess.general.palette).toMatchObject({
      name: 'divergent_blue_cyan',
      version: '2.0',
      isReversed: false
    })
    expect(result.visualizations.paletteLess.tracking.paletteFallbackSource).toBe('palette-less')
    expect(result.visualizations.legacy.general.palette).toMatchObject({
      name: 'sequential_orange',
      version: '1.0'
    })
  })

  it('freezes a loader-overridden legacy palette without preserving the hidden palette', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Line',
      palette: 'qualitative-boldreverse',
      isPaletteReversed: true,
      tracking: { existingMarker: true, paletteFallbackSource: 'default-overridden-legacy' }
    }

    const once = update_4_25_9(config as any)
    const twice = update_4_25_9(once as any)

    expect(once.general.palette).toMatchObject({
      name: 'divergent_blue_cyan',
      version: '2.0',
      isReversed: false
    })
    expect(once.general.palette.backups).toBeUndefined()
    expect(once.tracking).toEqual({
      existingMarker: true,
      paletteFallbackSource: 'default-overridden-legacy'
    })
    expect(twice.general.palette.backups).toBeUndefined()
    expect(once.palette).toBeUndefined()
    expect(once.isPaletteReversed).toBeUndefined()
  })

  it('normally migrates standalone legacy palettes and their reversal state', () => {
    const result = update_4_25_9({
      type: 'chart',
      visualizationType: 'Bar',
      color: 'sequential-orange',
      isPaletteReversed: true
    } as any)

    expect(result.general.palette).toMatchObject({
      name: 'sequential_orange',
      version: '1.0',
      isReversed: true
    })
    expect(result.color).toBeUndefined()
  })

  it('derives an omitted legacy reversal flag from the palette name', () => {
    const result = update_4_25_9({
      type: 'chart',
      visualizationType: 'Bar',
      color: 'sequential-orangereverse'
    } as any)

    expect(result.general.palette).toMatchObject({
      name: 'sequential_orangereverse',
      version: '1.0',
      isReversed: true
    })
  })

  it.each([['1.0'], [undefined]])('normalizes a nested legacy palette with version %s', version => {
    const result = update_4_25_9({
      type: 'chart',
      visualizationType: 'Bar',
      general: { palette: { name: 'qualitative-standard', version } }
    } as any)

    expect(result.general.palette).toMatchObject({
      name: 'qualitative_standard',
      version: '1.0',
      isReversed: false
    })
    expect(result.general.palette.backups).toContainEqual({
      name: 'qualitative_standard',
      version: '1.0',
      isReversed: false
    })
  })

  it('leaves a valid versionless modern palette unchanged', () => {
    const palette = { name: 'qualitative_standard', isReversed: true }
    const result = update_4_25_9({ type: 'chart', visualizationType: 'Bar', general: { palette } } as any)

    expect(result.general.palette).toEqual(palette)
  })

  it('normalizes a nested v1 palette in a dashboard child', () => {
    const result = update_4_25_9({
      type: 'dashboard',
      visualizations: {
        legacy: {
          type: 'chart',
          visualizationType: 'Bar',
          general: { palette: { name: 'qualitative-standard', version: '1.0' } }
        }
      }
    } as any)

    expect(result.visualizations.legacy.general.palette).toEqual({
      name: 'qualitative_standard',
      version: '1.0',
      isReversed: false
    })
  })

  it('leaves a modern palette untouched', () => {
    const palette = {
      name: 'qualitative_bold',
      version: '2.1',
      isReversed: true,
      customColors: ['#123456']
    }
    const result = update_4_25_9({ type: 'chart', visualizationType: 'Bar', general: { palette } } as any)

    expect(result.general.palette).toEqual(palette)
  })

  it('preserves custom-color precedence and two-color chart settings', () => {
    const custom = update_4_25_9({
      type: 'chart',
      visualizationType: 'Bar',
      palette: 'qualitative-soft',
      customColors: ['#123456', '#abcdef']
    } as any)
    const paired = update_4_25_9({
      type: 'chart',
      visualizationType: 'Paired Bar',
      twoColor: { palette: 'cool-1', isPaletteReversed: true }
    } as any)

    expect(custom.general.palette).toMatchObject({
      name: 'qualitative_soft',
      customColors: ['#123456', '#abcdef']
    })
    expect(paired.twoColor).toEqual({ palette: 'cool-1', isPaletteReversed: true })
  })
})

describe('changeSingleStateMapNoDataMessage', () => {
  it('should set noDataMessage to "No State Selected" if the message is default', () => {
    const config: any = {
      type: 'map',
      general: { noStateFoundMessage: 'Map Unavailable' },
      runtime: {}
    }
    changeSingleStateMapNoDataMessage(config)
    expect(config.general.noDataMessage).toBe('No State Selected')
    expect(config.general.noStateFoundMessage).toBeUndefined()
    expect(config.runtime.noStateFoundMessage).toBeUndefined()
  })

  it('should preserve custom noStateFoundMessage', () => {
    const config: any = {
      type: 'map',
      general: { noStateFoundMessage: 'Custom Message' },
      runtime: {}
    }
    changeSingleStateMapNoDataMessage(config)
    expect(config.general.noDataMessage).toBe('Custom Message')
    expect(config.general.noStateFoundMessage).toBeUndefined()
    expect(config.runtime.noStateFoundMessage).toBeUndefined()
  })

  it('should work for dashboard configs with map visualizations', () => {
    const dashboardConfig: any = {
      type: 'dashboard',
      visualizations: {
        map1: {
          type: 'map',
          general: { noStateFoundMessage: 'Map Unavailable' },
          runtime: {}
        },
        chart1: {
          type: 'chart',
          general: {},
          runtime: {}
        }
      }
    }
    changeSingleStateMapNoDataMessage(dashboardConfig)
    expect(dashboardConfig.visualizations.map1.general.noDataMessage).toBe('No State Selected')
    expect(dashboardConfig.visualizations.map1.general.noStateFoundMessage).toBeUndefined()
    expect(dashboardConfig.visualizations.map1.runtime.noStateFoundMessage).toBeUndefined()
    expect(dashboardConfig.visualizations.chart1.general.noDataMessage).toBeUndefined()
  })
})
