import update_4_26_7, { migrateMapPatternLines } from '../4.26.7'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

const legacyBubbleMapWithDefaultLayer = () => ({
  type: 'map',
  version: '4.25.10',
  general: {
    type: 'bubble',
    geoType: 'world'
  },
  columns: {
    geo: { name: 'Country', label: 'Location', dataTable: true },
    primary: { name: 'Rate', suffix: ' Events', tooltip: true }
  },
  visual: {
    minBubbleSize: 1,
    maxBubbleSize: '18',
    extraBubbleBorder: true,
    showBubbleZeros: false,
    border: false
  },
  bubble: {
    layers: [
      {
        label: '',
        locationSource: 'data-column',
        minBubbleSize: 1,
        maxBubbleSize: 20,
        extraBubbleBorder: false,
        showBubbleZeros: false,
        legend: {
          show: true,
          size: {
            show: false
          }
        },
        columns: {
          geo: { name: '' },
          latitude: { name: '' },
          longitude: { name: '' },
          primary: { name: '' }
        }
      }
    ]
  }
})

describe('update_4_26_7', () => {
  describe('bubble map migration', () => {
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

    it('builds a legacy bubble layer when defaults added an empty bubble.layers array before migration', () => {
      const config: any = legacyBubbleMapWithDefaultLayer()

      const result = update_4_26_7(config)

      expect(result.general.type).toBe('data')
      expect(result.columns.geo.name).toBe('')
      expect(result.columns.primary.name).toBe('')
      expect(result.visual).toEqual({ border: false })
      expect(result.bubble.layers[0]).toMatchObject({
        locationSource: 'data-column',
        minBubbleSize: 1,
        maxBubbleSize: '18',
        extraBubbleBorder: true,
        showBubbleZeros: false,
        columns: {
          geo: { name: 'Country', label: 'Location', dataTable: true },
          primary: { name: 'Rate', suffix: ' Events', tooltip: true }
        }
      })
    })

    it('migrates prefilled legacy bubble maps through coveUpdateWorker', () => {
      const result = coveUpdateWorker(legacyBubbleMapWithDefaultLayer() as any)

      expect(result.general.type).toBe('data')
      expect(result.columns.geo.name).toBe('')
      expect(result.columns.primary.name).toBe('')
      expect(result.bubble.layers[0]).toMatchObject({
        locationSource: 'data-column',
        minBubbleSize: 1,
        maxBubbleSize: '18',
        extraBubbleBorder: true,
        showBubbleZeros: false,
        columns: {
          geo: { name: 'Country', label: 'Location', dataTable: true },
          primary: { name: 'Rate', suffix: ' Events', tooltip: true }
        }
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

    it('migrates bubble map visualizations inside dashboards', () => {
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
      expect(map.bubble.layers[0].minBubbleSize).toBe(12)
      expect(map.bubble.layers[0].maxBubbleSize).toBe(30)
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
        minBubbleSize: 12,
        maxBubbleSize: 30,
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
        minBubbleSize: 12,
        maxBubbleSize: 30,
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

  describe('migrateMapPatternLines', () => {
    it('renames map pattern "lines" to "diagonalLines"', () => {
      const config: any = {
        type: 'map',
        map: {
          patterns: [
            {
              pattern: 'lines',
              dataKey: 'status',
              dataValue: 'Provisional',
              label: 'Provisional',
              size: 'medium',
              color: '#000'
            }
          ]
        }
      }
      migrateMapPatternLines(config)
      expect(config.map.patterns[0].pattern).toBe('diagonalLines')
    })

    it('leaves non-lines map patterns unchanged', () => {
      const config: any = {
        type: 'map',
        map: {
          patterns: [
            { pattern: 'circles', dataKey: 'a', dataValue: '1' },
            { pattern: 'waves', dataKey: 'b', dataValue: '2' }
          ]
        }
      }
      migrateMapPatternLines(config)
      expect(config.map.patterns[0].pattern).toBe('circles')
      expect(config.map.patterns[1].pattern).toBe('waves')
    })

    it('leaves already-migrated "diagonalLines" unchanged', () => {
      const config: any = {
        type: 'map',
        map: {
          patterns: [{ pattern: 'diagonalLines', dataKey: 'a', dataValue: '1' }]
        }
      }
      migrateMapPatternLines(config)
      expect(config.map.patterns[0].pattern).toBe('diagonalLines')
    })

    it('handles mixed patterns in a single map', () => {
      const config: any = {
        type: 'map',
        map: {
          patterns: [
            { pattern: 'lines', dataKey: 'a', dataValue: '1' },
            { pattern: 'circles', dataKey: 'b', dataValue: '2' },
            { pattern: 'lines', dataKey: 'c', dataValue: '3' }
          ]
        }
      }
      migrateMapPatternLines(config)
      expect(config.map.patterns[0].pattern).toBe('diagonalLines')
      expect(config.map.patterns[1].pattern).toBe('circles')
      expect(config.map.patterns[2].pattern).toBe('diagonalLines')
    })

    it('does not touch non-map configs', () => {
      const config: any = {
        type: 'chart',
        legend: { patterns: { Provisional: { shape: 'lines' } } }
      }
      migrateMapPatternLines(config)
      expect(config.legend.patterns.Provisional.shape).toBe('lines')
    })

    it('does nothing when map has no patterns array', () => {
      const config: any = { type: 'map', map: {} }
      expect(() => migrateMapPatternLines(config)).not.toThrow()
    })

    it('does nothing when config has no map block', () => {
      const config: any = { type: 'map' }
      expect(() => migrateMapPatternLines(config)).not.toThrow()
    })
  })

  describe('dashboard map visualization migration', () => {
    it('migrates map visualizations inside a dashboard', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.6',
        visualizations: {
          'my-map': {
            type: 'map',
            map: {
              patterns: [{ pattern: 'lines', dataKey: 'status', dataValue: 'Provisional' }]
            }
          }
        }
      }
      const result = update_4_26_7(config)
      expect(result.visualizations['my-map'].map.patterns[0].pattern).toBe('diagonalLines')
    })

    it('migrates bubble settings and map patterns in the same dashboard pass', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.6',
        visualizations: {
          'my-map': {
            type: 'map',
            general: {
              type: 'bubble',
              geoType: 'us'
            },
            columns: {
              geo: { name: 'State' },
              primary: { name: 'Cases' }
            },
            map: {
              patterns: [{ pattern: 'lines', dataKey: 'status', dataValue: 'Provisional' }]
            }
          }
        }
      }

      const result = update_4_26_7(config)
      const map = result.visualizations['my-map']

      expect(map.general.type).toBe('data')
      expect(map.bubble.layers[0].columns.geo.name).toBe('State')
      expect(map.map.patterns[0].pattern).toBe('diagonalLines')
    })

    it('does not mutate the original config', () => {
      const config: any = {
        type: 'map',
        version: '4.26.6',
        map: { patterns: [{ pattern: 'lines', dataKey: 'a', dataValue: '1' }] }
      }
      update_4_26_7(config)
      expect(config.map.patterns[0].pattern).toBe('lines')
    })
  })

  describe('coveUpdateWorker integration', () => {
    const minimalMapConfig = (overrides: any = {}) => ({
      type: 'map',
      general: {
        geoType: 'us',
        type: 'data',
        headerColor: 'theme-blue',
        showTitle: true,
        showSidebar: true,
        language: 'en',
        palette: { isReversed: false, name: 'sequential_blue', version: '2.0' }
      },
      columns: {
        primary: { name: 'value', roundToPlace: 0 },
        geo: { name: 'state' }
      },
      legend: { type: 'equalnumber', numberOfItems: 4, style: 'circles', groupBy: '' },
      map: { patterns: [] },
      ...overrides
    })

    it('runs 4.26.7 migration for configs on 4.26.6', () => {
      const config = minimalMapConfig({
        version: '4.26.6',
        map: { patterns: [{ pattern: 'lines', dataKey: 'a', dataValue: '1' }] }
      })
      const result = coveUpdateWorker(config)
      expect(result.map.patterns[0].pattern).toBe('diagonalLines')
    })

    it('does not re-run migration for configs already on 4.26.7', () => {
      const config = minimalMapConfig({
        version: '4.26.7',
        map: { patterns: [{ pattern: 'diagonalLines', dataKey: 'a', dataValue: '1' }] }
      })
      const result = coveUpdateWorker(config)
      expect(result.map.patterns[0].pattern).toBe('diagonalLines')
    })
  })
})
