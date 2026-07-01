import { describe, expect, it } from 'vitest'
import { getConfiguredBubbleLayers, mapConfigForBubbleLayer } from '../bubbleLayers'
import { createTooltipBuilder } from '../../hooks/useTooltip'

describe('bubbleLayers', () => {
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
