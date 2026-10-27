import { preserveLegacyMapLegendBehavior, updateStatePickedToStatesPicked } from '../4.25.8'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { expect, describe, it } from 'vitest'

describe('4.25.8 update worker', () => {
  describe('updateStatePickedToStatesPicked', () => {
    it('converts statePicked to statesPicked for map config', () => {
      const mockConfig = {
        type: 'map',
        general: {
          statePicked: { fipsCode: '12', stateName: 'Florida' }
        }
      } as any

      updateStatePickedToStatesPicked(mockConfig)

      expect(mockConfig.general.statePicked).toBeUndefined()
      expect(mockConfig.general.statesPicked).toEqual([{ fipsCode: '12', stateName: 'Florida' }])
    })

    it('converts filterControlsStatePicked to filterControlsStatesPicked for map config', () => {
      const mockConfig = {
        type: 'map',
        general: {
          filterControlsStatePicked: 'State',
          statePicked: { fipsCode: '12', stateName: 'Florida' }
        }
      } as any

      updateStatePickedToStatesPicked(mockConfig)

      expect(mockConfig.general.filterControlsStatePicked).toBeUndefined()
      expect(mockConfig.general.filterControlsStatesPicked).toBe('State')
      expect(mockConfig.general.statesPicked).toEqual([{ fipsCode: '12', stateName: 'Florida' }])
    })

    it('handles dashboard with map visualizations', () => {
      const mockConfig = {
        type: 'dashboard',
        visualizations: {
          map1: {
            type: 'map',
            general: {
              filterControlsStatePicked: 'State',
              statePicked: { fipsCode: '01', stateName: 'Alabama' }
            }
          }
        }
      } as any

      updateStatePickedToStatesPicked(mockConfig)

      const mapViz = mockConfig.visualizations.map1.general
      expect(mapViz.filterControlsStatePicked).toBeUndefined()
      expect(mapViz.filterControlsStatesPicked).toBe('State')
      expect(mapViz.statePicked).toBeUndefined()
      expect(mapViz.statesPicked).toEqual([{ fipsCode: '01', stateName: 'Alabama' }])
    })

    it('works with full update worker integration', () => {
      const mockConfig = {
        type: 'dashboard',
        version: '4.24.9',
        rows: [], // Add missing rows property
        visualizations: {
          map1: {
            type: 'map',
            general: {
              filterControlsStatePicked: 'State',
              statePicked: { fipsCode: '12', stateName: 'Florida' }
            }
          }
        }
      } as any

      const updatedConfig = coveUpdateWorker(mockConfig)

      // expect(updatedConfig.version).toBe('4.25.8')
      const mapViz = updatedConfig.visualizations.map1.general
      expect(mapViz.filterControlsStatePicked).toBeUndefined()
      expect(mapViz.filterControlsStatesPicked).toBe('State')
      expect(mapViz.statePicked).toBeUndefined()
      expect(mapViz.statesPicked).toEqual([{ fipsCode: '12', stateName: 'Florida' }])
    })
  })

  describe('preserveLegacyMapLegendBehavior', () => {
    it('marks old map configs missing equalNumberOptIn as legacy', () => {
      const mockConfig = {
        type: 'map',
        version: '4.25.7',
        general: {
          type: 'data'
        },
        legend: {
          type: 'equalnumber'
        }
      } as any

      preserveLegacyMapLegendBehavior(mockConfig, '4.25.7')

      expect(mockConfig.general.equalNumberOptIn).toBe(false)
    })

    it('preserves explicit equalNumberOptIn values', () => {
      const mockConfig = {
        type: 'map',
        version: '4.25.7',
        general: {
          type: 'data',
          equalNumberOptIn: true
        },
        legend: {
          type: 'equalnumber'
        }
      } as any

      preserveLegacyMapLegendBehavior(mockConfig, '4.25.7')

      expect(mockConfig.general.equalNumberOptIn).toBe(true)
    })

    it('keeps old equal-interval configs from activating separate zero when the setting used to be inert', () => {
      const mockConfig = {
        type: 'map',
        version: '4.25.7',
        general: {
          type: 'data',
          equalNumberOptIn: true
        },
        columns: {
          primary: {}
        },
        legend: {
          type: 'equalinterval',
          separateZero: true
        }
      } as any

      preserveLegacyMapLegendBehavior(mockConfig, '4.25.7')

      expect(mockConfig.legend.separateZero).toBe(false)
    })

    it('leaves current equal-interval configs able to activate separate zero', () => {
      const mockConfig = {
        type: 'map',
        version: '4.25.8',
        general: {
          type: 'data',
          equalNumberOptIn: true
        },
        columns: {
          primary: {}
        },
        legend: {
          type: 'equalinterval',
          separateZero: true
        }
      } as any

      preserveLegacyMapLegendBehavior(mockConfig, '4.25.8')

      expect(mockConfig.legend.separateZero).toBe(true)
    })

    it('marks old dashboard map visualizations missing equalNumberOptIn as legacy', () => {
      const mockConfig = {
        type: 'dashboard',
        version: '4.25.7',
        visualizations: {
          map1: {
            type: 'map',
            general: {
              type: 'data'
            },
            legend: {
              type: 'equalnumber'
            }
          },
          chart1: {
            type: 'chart',
            general: {}
          }
        }
      } as any

      preserveLegacyMapLegendBehavior(mockConfig, '4.25.7')

      expect(mockConfig.visualizations.map1.general.equalNumberOptIn).toBe(false)
      expect(mockConfig.visualizations.chart1.general.equalNumberOptIn).toBeUndefined()
    })

    it('preserves old equal-interval behavior through coveUpdateWorker', () => {
      const mockConfig = {
        type: 'map',
        version: '4.25.7',
        general: {
          type: 'data',
          equalNumberOptIn: true
        },
        columns: {
          primary: {}
        },
        legend: {
          type: 'equalinterval',
          separateZero: true
        }
      } as any

      const updatedConfig = coveUpdateWorker(mockConfig)

      expect(updatedConfig.legend.separateZero).toBe(false)
    })

    it('leaves current equal-interval behavior enabled through coveUpdateWorker', () => {
      const mockConfig = {
        type: 'map',
        version: '4.25.8',
        general: {
          type: 'data',
          equalNumberOptIn: true
        },
        columns: {
          primary: {}
        },
        legend: {
          type: 'equalinterval',
          separateZero: true
        }
      } as any

      const updatedConfig = coveUpdateWorker(mockConfig)

      expect(updatedConfig.legend.separateZero).toBe(true)
    })
  })
})
