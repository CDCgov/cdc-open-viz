import update_4_25_9 from '../4.25.9'
import { expect, describe, it } from 'vitest'

describe('update_4_25_9 - Palette Migration Integration Tests', () => {
  describe('Chart configuration migrations', () => {
    it('should migrate chart palette from config.palette to config.general.palette', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        customColors: ['#ff0000', '#00ff00'],
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.name).toBe('qualitative_standard')
      expect(migratedConfig.general.palette.version).toBe('1.0')
      expect(migratedConfig.general.palette.customColors).toEqual(['#ff0000', '#00ff00'])
      expect(migratedConfig.palette).toBeUndefined()
      expect(migratedConfig.customColors).toBeUndefined()
      expect(migratedConfig.version).toBe('4.25.9')
    })

    it('should migrate chart with default palette when none specified', () => {
      const oldConfig = {
        type: 'chart',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.name).toBe('qualitative_standard')
      expect(migratedConfig.general.palette.version).toBe('1.0')
    })

    it('should migrate complex chart palette names', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'sequential-blue-2-(MPX)',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.name).toBe('sequential_blue_extended')
      expect(migratedConfig.general.palette.version).toBe('1.0')
    })

    it('should preserve existing general.palette configuration in charts', () => {
      const oldConfig: any = {
        type: 'chart',
        palette: 'qualitative-bold',
        general: {
          palette: {
            name: 'existing_palette',
            version: '2.0'
          }
        },
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      // Should not overwrite existing general.palette
      expect(migratedConfig.general.palette.name).toBe('existing_palette')
      expect(migratedConfig.general.palette.version).toBe('2.0')
    })
  })

  describe('Map configuration migrations', () => {
    it('should migrate map color from config.color to config.general.palette', () => {
      const oldConfig = {
        type: 'map',
        color: 'sequential_blue_green',
        customColors: ['#0000ff', '#00ffff'],
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.name).toBe('sequential_blue_green')
      expect(migratedConfig.general.palette.version).toBe('1.0')
      expect(migratedConfig.general.palette.customColors).toEqual(['#0000ff', '#00ffff'])
      expect(migratedConfig.color).toBeUndefined()
      expect(migratedConfig.customColors).toBeUndefined()
      expect(migratedConfig.version).toBe('4.25.9')
    })

    it('should migrate legacy map palette names', () => {
      const oldConfig = {
        type: 'map',
        color: 'yelloworangered',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.name).toBe('sequential_yellow_orange_red')
      expect(migratedConfig.general.palette.version).toBe('1.0')
    })

    it('should handle maps without color property', () => {
      const oldConfig = {
        type: 'map',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.version).toBe('1.0')
      expect(migratedConfig.general.palette.name).toBeUndefined()
    })

    it('should migrate reverse map palettes', () => {
      const oldConfig = {
        type: 'map',
        color: 'bluegreenreverse',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.name).toBe('sequential_blue_greenreverse')
      expect(migratedConfig.general.palette.version).toBe('1.0')
    })
  })

  describe('Dashboard configuration migrations', () => {
    it('should migrate all visualization palettes in dashboard', () => {
      const oldConfig = {
        type: 'dashboard',
        visualizations: {
          chart1: {
            type: 'chart',
            palette: 'qualitative-bold',
            customColors: ['#ff0000']
          },
          map1: {
            type: 'map',
            color: 'sequential_blue_green',
            customColors: ['#0000ff']
          },
          chart2: {
            type: 'chart',
            palette: 'sequential-orange'
          }
        },
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.visualizations.chart1.general.palette.name).toBe('qualitative_standard')
      expect(migratedConfig.visualizations.chart1.general.palette.customColors).toEqual(['#ff0000'])
      expect(migratedConfig.visualizations.chart1.palette).toBeUndefined()

      expect(migratedConfig.visualizations.map1.general.palette.name).toBe('sequential_blue_green')
      expect(migratedConfig.visualizations.map1.general.palette.customColors).toEqual(['#0000ff'])
      expect(migratedConfig.visualizations.map1.color).toBeUndefined()

      expect(migratedConfig.visualizations.chart2.general.palette.name).toBe('sequential_orange')
      expect(migratedConfig.visualizations.chart2.palette).toBeUndefined()

      expect(migratedConfig.version).toBe('4.25.9')
    })

    it('should handle empty dashboard visualizations', () => {
      const oldConfig = {
        type: 'dashboard',
        visualizations: {},
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.visualizations).toEqual({})
      expect(migratedConfig.version).toBe('4.25.9')
    })
  })

  describe('Backup creation', () => {
    it('should create backup for chart migrations', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.backups).toHaveLength(1)
      expect(migratedConfig.general.palette.backups[0]).toEqual({
        name: undefined, // Original config didn't have a color property
        version: '1.0',
        isReversed: undefined
      })
    })

    it('should create backup for map migrations', () => {
      const oldConfig = {
        type: 'map',
        color: 'sequential_blue_green',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.backups).toHaveLength(1)
      expect(migratedConfig.general.palette.backups[0]).toEqual({
        name: 'sequential_blue_green',
        version: '1.0',
        isReversed: undefined
      })
    })

    it('should not override existing backups', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        general: {
          palette: {
            name: 'existing_palette',
            version: '1.0',
            backups: [{ name: 'existing_backup', version: '1.0', isReversed: false }]
          }
        },
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.backups).toHaveLength(2)
      expect(migratedConfig.general.palette.backups[0]).toEqual({
        name: 'existing_backup',
        version: '1.0',
        isReversed: false
      })
    })
  })

  describe('Custom colors migration', () => {
    it('should migrate custom colors for charts', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        customColors: ['#ff0000', '#00ff00', '#0000ff'],
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.customColors).toEqual(['#ff0000', '#00ff00', '#0000ff'])
      expect(migratedConfig.customColors).toBeUndefined()
    })

    it('should migrate custom colors for maps', () => {
      const oldConfig = {
        type: 'map',
        color: 'sequential_blue_green',
        customColors: ['#000000', '#ffffff'],
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.customColors).toEqual(['#000000', '#ffffff'])
      expect(migratedConfig.customColors).toBeUndefined()
    })

    it('should handle configurations without custom colors', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.customColors).toBeUndefined()
    })
  })

  describe('Version handling', () => {
    it('should set version to 1.0 for migrated configurations', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.version).toBe('1.0')
      expect(migratedConfig.version).toBe('4.25.9')
    })

    it('should preserve existing palette version if already set', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        general: {
          palette: {
            name: 'existing_palette',
            version: '2.0'
          }
        },
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.general.palette.version).toBe('2.0')
    })
  })

  describe('Edge cases and error handling', () => {
    it('should handle null/undefined configurations gracefully', () => {
      const migratedConfig = update_4_25_9(null as any)

      expect(migratedConfig).not.toBeNull()
      expect(migratedConfig.version).toBe('4.25.9')
    })

    it('should handle configurations with missing type', () => {
      const oldConfig = {
        palette: 'qualitative-bold',
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.version).toBe('4.25.9')
      // Should not crash, but also should not create general.palette without type
    })

    it('should handle deeply nested dashboard configurations', () => {
      const oldConfig = {
        type: 'dashboard',
        visualizations: {
          nested: {
            type: 'dashboard',
            visualizations: {
              deepChart: {
                type: 'chart',
                palette: 'qualitative-bold'
              }
            }
          }
        },
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.visualizations.nested.visualizations.deepChart.general.palette.name).toBe('qualitative_standard')
    })

    it('should preserve non-palette configuration properties', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        title: 'My Chart',
        data: [{ x: 1, y: 2 }],
        xAxis: { label: 'X Axis' },
        yAxis: { label: 'Y Axis' },
        legend: { show: true },
        version: '4.24.0'
      }

      const migratedConfig = update_4_25_9(oldConfig)

      expect(migratedConfig.title).toBe('My Chart')
      expect(migratedConfig.data).toEqual([{ x: 1, y: 2 }])
      expect(migratedConfig.xAxis).toEqual({ label: 'X Axis' })
      expect(migratedConfig.yAxis).toEqual({ label: 'Y Axis' })
      expect(migratedConfig.legend).toEqual({ show: true })
    })
  })

  describe('Configuration immutability', () => {
    it('should not mutate original configuration', () => {
      const oldConfig = {
        type: 'chart',
        palette: 'qualitative-bold',
        customColors: ['#ff0000'],
        version: '4.24.0'
      }

      const originalPalette = oldConfig.palette
      const originalCustomColors = oldConfig.customColors
      const originalVersion = oldConfig.version

      const migratedConfig = update_4_25_9(oldConfig)

      // Original config should remain unchanged
      expect(oldConfig.palette).toBe(originalPalette)
      expect(oldConfig.customColors).toBe(originalCustomColors)
      expect(oldConfig.version).toBe(originalVersion)
      expect(oldConfig.general).toBeUndefined()

      // New config should have migrated values
      expect(migratedConfig).not.toBe(oldConfig)
      expect(migratedConfig.general.palette.name).toBe('qualitative_bold')
    })
  })
})