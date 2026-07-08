import { describe, expect, it } from 'vitest'
import {
  DEFAULT_BUBBLE_OPACITY,
  BUBBLE_STATIC_COLOR_SWATCHES,
  DEFAULT_BUBBLE_STATIC_COLOR,
  getBubbleLayerOpacity,
  getBubbleLayerPaletteForReverseState,
  getBubbleLayerStaticColor,
  getConfiguredBubbleLayers,
  mapConfigForBubbleLayer,
  normalizeBubbleLayer
} from '../bubbleLayers'
import { createTooltipBuilder } from '../../hooks/useTooltip'
import { generateRuntimeLegend } from '../generateRuntimeLegend'

const makeMemo = () => ({ current: new Map<string, number>() })

describe('bubbleLayers', () => {
  it('hides the bubble size legend by default while preserving explicit opt-in', () => {
    expect(normalizeBubbleLayer({}).legend?.size?.show).toBe(false)
    expect(normalizeBubbleLayer({ legend: { size: { show: true } } }).legend?.size?.show).toBe(true)
  })

  it('uses 12 and 30 as the default bubble size range', () => {
    expect(normalizeBubbleLayer({}).minBubbleSize).toBe(12)
    expect(normalizeBubbleLayer({}).maxBubbleSize).toBe(30)
  })

  it('defaults, preserves, and clamps bubble layer opacity', () => {
    expect(DEFAULT_BUBBLE_OPACITY).toBe(0.9)
    expect(getBubbleLayerOpacity({})).toBe(0.9)
    expect(getBubbleLayerOpacity({ opacity: 0 })).toBe(0)
    expect(getBubbleLayerOpacity({ opacity: 0.5 })).toBe(0.5)
    expect(getBubbleLayerOpacity({ opacity: 1 })).toBe(1)
    expect(getBubbleLayerOpacity({ opacity: -0.25 })).toBe(0)
    expect(getBubbleLayerOpacity({ opacity: 1.25 })).toBe(1)
    expect(getBubbleLayerOpacity({ opacity: Number.NaN })).toBe(0.9)
    expect(getBubbleLayerOpacity({ opacity: Number.POSITIVE_INFINITY })).toBe(0.9)
  })

  it('normalizes bubble layer opacity through the default helper', () => {
    expect(normalizeBubbleLayer({}).opacity).toBe(0.9)
    expect(normalizeBubbleLayer({ opacity: 0.5 }).opacity).toBe(0.5)
    expect(normalizeBubbleLayer({ opacity: 2 }).opacity).toBe(1)
    expect(normalizeBubbleLayer({ opacity: Number.NaN }).opacity).toBe(0.9)
  })

  it('does not add editor layer labels to normalized bubble layers', () => {
    expect(normalizeBubbleLayer({}).label).toBeUndefined()
    expect(normalizeBubbleLayer({ label: 'Custom layer' }).label).toBe('Custom layer')
  })

  it('uses legacy single-bubble settings when defaults added an empty layers array', () => {
    const config: any = {
      bubble: {
        minBubbleSize: 4,
        maxBubbleSize: 28,
        columns: {
          geo: { name: 'country' },
          primary: { name: 'cases' }
        },
        layers: [
          {
            columns: {
              geo: { name: '' },
              primary: { name: '' }
            }
          }
        ]
      }
    }

    expect(getConfiguredBubbleLayers(config)).toEqual([
      expect.objectContaining({
        minBubbleSize: 4,
        maxBubbleSize: 28,
        columns: expect.objectContaining({
          geo: { name: 'country' },
          primary: { name: 'cases' }
        })
      })
    ])
  })

  it('treats latitude and longitude columns as an alternative bubble position source', () => {
    const config: any = {
      bubble: {
        layers: [
          {
            locationSource: 'latitude-longitude',
            columns: {
              geo: { name: '' },
              latitude: { name: 'lat' },
              longitude: { name: 'long' },
              primary: { name: 'cases' }
            }
          }
        ]
      }
    }

    expect(getConfiguredBubbleLayers(config)).toEqual([
      expect.objectContaining({
        columns: expect.objectContaining({
          geo: { name: '' },
          latitude: { name: 'lat' },
          longitude: { name: 'long' },
          primary: { name: 'cases' }
        })
      })
    ])
  })

  it('defaults to data column positioning when no location source is configured', () => {
    const config: any = {
      bubble: {
        layers: [
          {
            columns: {
              geo: { name: '' },
              latitude: { name: 'lat' },
              longitude: { name: 'long' },
              primary: { name: 'cases' }
            }
          }
        ]
      }
    }

    expect(getConfiguredBubbleLayers(config)).toEqual([])
  })

  it('treats a size column as sufficient to configure a bubble layer with no data column', () => {
    const config: any = {
      bubble: {
        layers: [
          {
            columns: {
              geo: { name: 'state' },
              primary: { name: '' },
              size: { name: 'total_human_detections' }
            }
          }
        ]
      }
    }

    expect(getConfiguredBubbleLayers(config)).toEqual([
      expect.objectContaining({
        columns: expect.objectContaining({
          geo: { name: 'state' },
          primary: { name: '' },
          size: { name: 'total_human_detections' }
        })
      })
    ])
  })

  it('clears the primary column on the layer-scoped config when a bubble layer has no data column', () => {
    const config: any = {
      columns: {
        primary: { name: 'total_animal_detections_cat' }
      },
      general: {},
      legend: {}
    }
    const layer: any = {
      columns: {
        geo: { name: 'state' },
        primary: { name: '' },
        size: { name: 'total_human_detections' }
      }
    }

    const layerConfig = mapConfigForBubbleLayer(config, layer)

    expect(layerConfig.columns.primary.name).toBe('')
  })

  it('uses staticColor for layers with no data column', () => {
    const config: any = {
      color: 'bluegreen',
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        categorical: { name: '' }
      },
      general: {
        palette: {
          name: 'sequential_blue',
          version: '2.0',
          isReversed: false
        }
      }
    }
    const layer = normalizeBubbleLayer({
      columns: {
        geo: { name: 'state' },
        primary: { name: '' },
        size: { name: 'cases' }
      },
      palette: { name: 'sequential_blue', isReversed: false },
      staticColor: '#C95936'
    })
    const layerConfig = mapConfigForBubbleLayer(config, layer)

    expect(getBubbleLayerStaticColor(config, layer)).toBe('#C95936')
    expect(layerConfig.columns.primary.name).toBe('')
    expect(layerConfig.general.palette).toMatchObject({
      name: 'sequential_blue',
      version: '2.0'
    })
  })

  it('uses the default static color when a static layer has no staticColor', () => {
    const layer = normalizeBubbleLayer({
      columns: {
        geo: { name: 'state' },
        primary: { name: '' },
        size: { name: 'cases' }
      }
    })

    expect(layer.staticColor).toBe(DEFAULT_BUBBLE_STATIC_COLOR)
    expect(DEFAULT_BUBBLE_STATIC_COLOR).toBe('#E69F00')
    expect(BUBBLE_STATIC_COLOR_SWATCHES).toHaveLength(12)
    expect(BUBBLE_STATIC_COLOR_SWATCHES).toContain('#E69F00')
    expect(getBubbleLayerStaticColor({} as any, { ...layer, staticColor: undefined })).toBe(DEFAULT_BUBBLE_STATIC_COLOR)
  })

  it('uses the default static color while a custom staticColor is invalid', () => {
    const layer = normalizeBubbleLayer({
      columns: {
        geo: { name: 'state' },
        primary: { name: '' },
        size: { name: 'cases' }
      },
      staticColor: '#'
    })

    expect(layer.staticColor).toBe('#')
    expect(getBubbleLayerStaticColor({} as any, layer)).toBe(DEFAULT_BUBBLE_STATIC_COLOR)
  })

  it('ignores staticColor when generating data-driven layer colors', () => {
    const config: any = {
      color: 'bluegreen',
      columns: {
        geo: { name: 'state' },
        primary: { name: 'choropleth' },
        latitude: { name: '' },
        longitude: { name: '' },
        categorical: { name: '' }
      },
      general: {
        geoType: 'us',
        type: 'data',
        palette: {
          name: 'sequential_blue',
          version: '2.0',
          isReversed: false
        }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 3,
        specialClasses: [],
        unified: true,
        separateZero: false,
        additionalCategories: [],
        categoryValuesOrder: [],
        showSpecialClassesLast: false
      },
      data: [
        { state: 'Alabama', cases: 10, choropleth: 1 },
        { state: 'California', cases: 20, choropleth: 2 },
        { state: 'Texas', cases: 30, choropleth: 3 }
      ]
    }
    const layer = normalizeBubbleLayer({
      columns: {
        geo: { name: 'state' },
        primary: { name: 'cases' }
      },
      staticColor: '#FF00FF'
    })
    const layerConfig = mapConfigForBubbleLayer(config, layer)
    const layerLegend = generateRuntimeLegend(
      layerConfig,
      {},
      'bubble-layer-static-ignored',
      () => {},
      [] as any,
      makeMemo(),
      makeMemo()
    )

    expect(Array.isArray(layerLegend)).toBe(false)
    expect((layerLegend as any).items.map(item => item.color)).not.toContain('#FF00FF')
  })

  it('initializes an inherited layer palette before reversing it', () => {
    const config: any = {
      general: {
        palette: {
          name: 'sequential_blue',
          version: '2.0',
          isReversed: false
        }
      }
    }
    const layer = normalizeBubbleLayer({
      columns: {
        geo: { name: 'state' },
        primary: { name: 'cases' }
      }
    })

    expect(getBubbleLayerPaletteForReverseState(config, layer, true)).toMatchObject({
      name: 'sequential_bluereverse',
      version: '2.0',
      isReversed: true
    })
  })

  it('keeps layer palette names in sync with reverse state for layer-scoped legend generation', () => {
    const config: any = {
      color: 'bluegreen',
      columns: {
        geo: { name: 'state' },
        primary: { name: 'choropleth' },
        latitude: { name: '' },
        longitude: { name: '' },
        categorical: { name: '' }
      },
      general: {
        geoType: 'us',
        type: 'data',
        palette: {
          name: 'sequential_blue',
          version: '2.0',
          isReversed: false
        }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 3,
        specialClasses: [],
        unified: true,
        separateZero: false,
        additionalCategories: [],
        categoryValuesOrder: [],
        showSpecialClassesLast: false
      },
      data: [
        { state: 'Alabama', cases: 10, choropleth: 1 },
        { state: 'California', cases: 20, choropleth: 2 },
        { state: 'Texas', cases: 30, choropleth: 3 }
      ]
    }
    const layer = normalizeBubbleLayer({
      columns: {
        geo: { name: 'state' },
        primary: { name: 'cases' }
      },
      palette: { name: 'sequential_blue', isReversed: false }
    })
    const reversedLayer = normalizeBubbleLayer({
      ...layer,
      palette: getBubbleLayerPaletteForReverseState(config, layer, true)
    })
    const layerConfig = mapConfigForBubbleLayer(config, layer)
    const reversedLayerConfig = mapConfigForBubbleLayer(config, reversedLayer)
    const layerLegend = generateRuntimeLegend(
      layerConfig,
      {},
      'bubble-layer',
      () => {},
      [] as any,
      makeMemo(),
      makeMemo()
    )
    const reversedLayerLegend = generateRuntimeLegend(
      reversedLayerConfig,
      {},
      'bubble-layer-reversed',
      () => {},
      [] as any,
      makeMemo(),
      makeMemo()
    )

    expect(reversedLayerConfig.general.palette).toMatchObject({
      name: 'sequential_bluereverse',
      isReversed: true
    })
    expect(Array.isArray(layerLegend)).toBe(false)
    expect(Array.isArray(reversedLayerLegend)).toBe(false)
    expect((reversedLayerLegend as any).items.map(item => item.color)).not.toEqual(
      (layerLegend as any).items.map(item => item.color)
    )
  })

  it('uses bubble layer column metadata when building bubble tooltips', () => {
    const config: any = {
      general: {
        geoType: 'us',
        type: 'data',
        hideGeoColumnInTooltip: false,
        hidePrimaryColumnInTooltip: false,
        geoLabelOverride: ''
      },
      columns: {
        geo: { name: '', label: '', tooltip: false, displayColumn: '' },
        primary: { name: '', label: '', tooltip: false },
        navigate: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        categorical: { name: '' }
      },
      legend: {
        type: 'equalnumber',
        specialClasses: []
      },
      tooltips: {
        noDataLabel: 'No Data',
        linkLabel: 'Learn More'
      },
      bubble: {
        layers: []
      }
    }
    const layer: any = {
      locationSource: 'latitude-longitude',
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: false,
      showBubbleZeros: false,
      columns: {
        geo: { name: 'city', label: 'Bubble City', tooltip: true },
        latitude: { name: 'latitude' },
        longitude: { name: 'longitude' },
        primary: { name: 'visits', label: 'Bubble Visits', tooltip: true },
        size: { name: 'population', label: 'Population', tooltip: true }
      }
    }
    const row = { city: 'Seattle', latitude: 47.6062, longitude: -122.3321, visits: 823, population: 737015 }
    const layerConfig = mapConfigForBubbleLayer(config, layer)
    const tooltip = createTooltipBuilder(layerConfig).buildTooltip(row, 'Seattle')

    expect(tooltip).toContain('Bubble City: Seattle')
    expect(tooltip).toContain('Bubble Visits: 823')
    expect(tooltip).toContain('Population: 737015')
  })
})
