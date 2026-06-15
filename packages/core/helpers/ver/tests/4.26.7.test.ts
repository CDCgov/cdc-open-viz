import update_4_26_7 from '../4.26.7'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

describe('update_4_26_7', () => {
  it('moves legacy bubble map settings into the first bubble layer', () => {
    const config: any = {
      type: 'map',
      version: '4.26.6',
      general: {
        type: 'bubble',
        geoType: 'us'
      },
      columns: {
        geo: { name: 'State' },
        primary: { name: 'Cases' },
        categorical: { name: 'Category' }
      },
      visual: {
        minBubbleSize: 3,
        maxBubbleSize: 24,
        extraBubbleBorder: true,
        showBubbleZeros: true,
        border: true
      }
    }

    const result = update_4_26_7(config)

    expect(result.version).toBe('4.26.7')
    expect(result.general.type).toBe('data')
    expect(result.columns.geo.name).toBe('')
    expect(result.columns.primary.name).toBe('')
    expect(result.visual).toEqual({ border: true })
    expect(result.bubble).toEqual({
      migratedToBubbleAccordion: true,
      layers: [
        {
          label: '',
          locationSource: 'data-column',
          minBubbleSize: 3,
          maxBubbleSize: 24,
          extraBubbleBorder: true,
          showBubbleZeros: true,
          legend: {
            show: true,
            size: {
              show: false
            }
          },
          columns: {
            geo: { name: 'State' },
            primary: { name: 'Cases' },
            categorical: { name: 'Category' }
          }
        }
      ]
    })
  })

  it('clears top-level columns when a bubble.columns object exists, since general.type bubble was never a choropleth', () => {
    const config: any = {
      type: 'map',
      version: '4.26.6',
      general: {
        type: 'bubble',
        geoType: 'world'
      },
      columns: {
        geo: { name: 'country' },
        primary: { name: 'outbreakStatus' }
      },
      legend: {
        type: 'category'
      },
      visual: {
        border: false
      },
      bubble: {
        minBubbleSize: 4,
        maxBubbleSize: 28,
        columns: {
          geo: { name: 'country' },
          primary: { name: 'diseaseType' },
          size: { name: 'cases' }
        },
        legend: {
          type: 'category',
          show: false
        }
      }
    }

    const result = update_4_26_7(config)

    expect(result.general.type).toBe('data')
    expect(result.columns.geo.name).toBe('')
    expect(result.columns.primary.name).toBe('')
    expect(result.bubble.layers[0]).toMatchObject({
      minBubbleSize: 4,
      maxBubbleSize: 28,
      columns: {
        geo: { name: 'country' },
        primary: { name: 'diseaseType' },
        size: { name: 'cases' }
      },
      legend: {
        show: false,
        type: 'category',
        size: {
          show: false
        }
      }
    })
  })

  it('migrates map visualizations inside dashboards', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.6',
      visualizations: {
        map1: {
          type: 'map',
          general: {
            type: 'bubble',
            geoType: 'us'
          },
          columns: {
            geo: { name: 'State' },
            primary: { name: 'Cases' }
          }
        }
      }
    }

    const result = update_4_26_7(config)
    const map = result.visualizations.map1

    expect(map.general.type).toBe('data')
    expect(map.bubble.layers[0].columns.geo.name).toBe('State')
    expect(map.bubble.layers[0].columns.primary.name).toBe('Cases')
  })

  it('preserves existing bubble layer location and column metadata while normalizing defaults', () => {
    const config: any = {
      type: 'map',
      version: '4.26.6',
      general: {
        type: 'data',
        geoType: 'us'
      },
      columns: {
        geo: { name: '' },
        primary: { name: '' }
      },
      bubble: {
        layers: [
          {
            label: 'Clinics',
            locationSource: 'latitude-longitude',
            columns: {
              geo: { name: 'site', label: 'Clinic', tooltip: true },
              latitude: { name: 'lat' },
              longitude: { name: 'lng' },
              primary: { name: 'visits', label: 'Visits', tooltip: true }
            },
            legend: {
              title: 'Clinic visits'
            }
          }
        ]
      }
    }

    const result = update_4_26_7(config)

    expect(result.bubble.layers[0]).toMatchObject({
      label: 'Clinics',
      locationSource: 'latitude-longitude',
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: false,
      showBubbleZeros: false,
      legend: {
        show: true,
        title: 'Clinic visits',
        size: {
          show: false
        }
      },
      columns: {
        geo: { name: 'site', label: 'Clinic', tooltip: true },
        latitude: { name: 'lat' },
        longitude: { name: 'lng' },
        primary: { name: 'visits', label: 'Visits', tooltip: true }
      }
    })
  })

  it('migrates bubble map configs through 4.26.7 in coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.6',
      dashboard: {
        sharedFilters: []
      },
      rows: [],
      visualizations: {
        legacyBubbleMap: {
          type: 'map',
          general: {
            type: 'bubble',
            geoType: 'us'
          },
          columns: {
            geo: { name: 'State' },
            primary: { name: 'Cases' }
          },
          visual: {
            minBubbleSize: 4,
            maxBubbleSize: 24,
            showBubbleZeros: true,
            border: false
          }
        },
        layeredBubbleMap: {
          type: 'map',
          general: {
            type: 'data',
            geoType: 'world'
          },
          columns: {
            geo: { name: '' },
            primary: { name: '' }
          },
          bubble: {
            layers: [
              {
                label: 'Clinics',
                locationSource: 'latitude-longitude',
                columns: {
                  geo: { name: 'site', label: 'Clinic', tooltip: true },
                  latitude: { name: 'lat' },
                  longitude: { name: 'lng' },
                  primary: { name: 'visits', label: 'Visits', tooltip: true }
                },
                legend: {
                  title: 'Clinic visits'
                }
              }
            ]
          }
        }
      }
    } as any)

    const legacyBubbleMap = result.visualizations.legacyBubbleMap
    const layeredBubbleMap = result.visualizations.layeredBubbleMap

    expect(result.version).toBe('4.26.7')
    expect(legacyBubbleMap.general.type).toBe('data')
    expect(legacyBubbleMap.columns.geo.name).toBe('')
    expect(legacyBubbleMap.columns.primary.name).toBe('')
    expect(legacyBubbleMap.visual).toEqual({ border: false })
    expect(legacyBubbleMap.bubble.layers[0]).toMatchObject({
      locationSource: 'data-column',
      minBubbleSize: 4,
      maxBubbleSize: 24,
      showBubbleZeros: true,
      columns: {
        geo: { name: 'State' },
        primary: { name: 'Cases' }
      }
    })

    expect(layeredBubbleMap.bubble.layers[0]).toMatchObject({
      label: 'Clinics',
      locationSource: 'latitude-longitude',
      minBubbleSize: 1,
      maxBubbleSize: 20,
      legend: {
        show: true,
        title: 'Clinic visits',
        size: {
          show: false
        }
      },
      columns: {
        geo: { name: 'site', label: 'Clinic', tooltip: true },
        latitude: { name: 'lat' },
        longitude: { name: 'lng' },
        primary: { name: 'visits', label: 'Visits', tooltip: true }
      }
    })
  })
})
