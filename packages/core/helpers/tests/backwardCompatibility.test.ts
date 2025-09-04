import update_4_25_9 from '../ver/4.25.9'
import { getCurrentPaletteName, getPaletteColors, isV1Palette } from '../palettes/utils'
import { getColorPaletteVersion } from '../getColorPaletteVersion'
import { filterChartColorPalettes } from '../filterColorPalettes'
import { expect, describe, it } from 'vitest'

describe('Backward Compatibility Tests', () => {
  describe('Legacy v1 chart configurations', () => {
    const legacyChartConfigs = [
      {
        name: 'Basic chart with qualitative-bold',
        config: {
          type: 'chart',
          palette: 'qualitative-bold',
          customColors: ['#ff0000', '#00ff00'],
          title: 'Sales by Region',
          data: [{ region: 'North', sales: 100 }]
        }
      },
      {
        name: 'Chart with sequential-blue palette',
        config: {
          type: 'chart',
          palette: 'sequential-blue',
          title: 'Revenue Over Time',
          xAxis: { label: 'Time' },
          yAxis: { label: 'Revenue' }
        }
      },
      {
        name: 'Chart with colorblindsafe palette',
        config: {
          type: 'chart',
          palette: 'colorblindsafe',
          customColors: ['#1f77b4', '#ff7f0e', '#2ca02c']
        }
      },
      {
        name: 'Chart with MPX palette',
        config: {
          type: 'chart',
          palette: 'sequential-orange-(MPX)',
          title: 'Special Orange Chart'
        }
      },
      {
        name: 'Chart with complex legacy name',
        config: {
          type: 'chart',
          palette: 'yelloworangered',
          customColors: []
        }
      }
    ]

    legacyChartConfigs.forEach(({ name, config }) => {
      it(`should migrate ${name} without breaking functionality`, () => {
        // Test that original config still works with utility functions
        expect(getCurrentPaletteName(config)).toBe(config.palette)
        expect(isV1Palette(config)).toBe(true)
        expect(getColorPaletteVersion(config)).toBe(1)
        
        // Test migration
        const migratedConfig = update_4_25_9(config)
        
        // Ensure migration doesn't break the config
        expect(migratedConfig.type).toBe(config.type)
        expect(migratedConfig.title).toBe(config.title)
        expect(migratedConfig.general.palette).toBeDefined()
        expect(migratedConfig.general.palette.version).toBe('1.0')
        
        // Ensure palette migration happened (the 4.25.9 function uses different mapping)
        expect(migratedConfig.general.palette.name).toBeDefined()
        
        // For the specific test cases, check the actual migration
        if (config.palette === 'qualitative-bold') {
          expect(migratedConfig.general.palette.name).toBe('qualitative_bold')
        } else if (config.palette === 'sequential-orange-(MPX)') {
          expect(migratedConfig.general.palette.name).toBe('sequential_orange_extended')
        } else {
          // For other cases, just ensure it's defined and not empty
          expect(migratedConfig.general.palette.name).not.toBe('')
        }
        
        // Ensure custom colors are preserved
        if (config.customColors && config.customColors.length > 0) {
          expect(migratedConfig.general.palette.customColors).toEqual(config.customColors)
        }
      })
    })
  })

  describe('Legacy v1 map configurations', () => {
    const legacyMapConfigs = [
      {
        name: 'Basic map with sequential_blue_green',
        config: {
          type: 'map',
          color: 'sequential_blue_green',
          customColors: ['#0000ff', '#00ffff'],
          title: 'Population Density'
        }
      },
      {
        name: 'Map with legacy name yelloworangered',
        config: {
          type: 'map',
          color: 'yelloworangered',
          title: 'Temperature Map'
        }
      },
      {
        name: 'Map with qualitative_earth_tones',
        config: {
          type: 'map',
          color: 'qualitative_earth_tones',
          customColors: ['#8B4513', '#A0522D', '#CD853F']
        }
      },
      {
        name: 'Map with reverse palette',
        config: {
          type: 'map',
          color: 'bluegreenreverse',
          title: 'Reverse Temperature'
        }
      }
    ]

    legacyMapConfigs.forEach(({ name, config }) => {
      it(`should migrate ${name} without breaking functionality`, () => {
        // Test that original config works before migration
        expect(getCurrentPaletteName(config)).toBe('')  // Maps use color, not palette
        expect(isV1Palette(config)).toBe(true)
        expect(getColorPaletteVersion(config)).toBe(1)
        
        // Test migration
        const migratedConfig = update_4_25_9(config)
        
        // Ensure migration doesn't break the config
        expect(migratedConfig.type).toBe(config.type)
        expect(migratedConfig.title).toBe(config.title)
        expect(migratedConfig.general.palette).toBeDefined()
        expect(migratedConfig.general.palette.version).toBe('1.0')
        
        // Ensure color is moved to general.palette.name
        expect(migratedConfig.general.palette.name).toBeDefined()
        expect(migratedConfig.color).toBeUndefined()
        
        // Ensure custom colors are preserved
        if (config.customColors && config.customColors.length > 0) {
          expect(migratedConfig.general.palette.customColors).toEqual(config.customColors)
        }
      })
    })
  })

  describe('Legacy dashboard configurations', () => {
    const legacyDashboards = [
      {
        name: 'Dashboard with mixed chart and map visualizations',
        config: {
          type: 'dashboard',
          visualizations: {
            chart1: {
              type: 'chart',
              palette: 'qualitative-bold',
              customColors: ['#ff0000'],
              title: 'Chart 1'
            },
            map1: {
              type: 'map',
              color: 'sequential_blue_green',
              title: 'Map 1'
            },
            chart2: {
              type: 'chart',
              palette: 'sequential-orange',
              title: 'Chart 2'
            }
          },
          title: 'Mixed Dashboard'
        }
      }
    ]

    legacyDashboards.forEach(({ name, config }) => {
      it(`should migrate ${name} without breaking functionality`, () => {
        const migratedConfig = update_4_25_9(config)
        
        // Ensure dashboard structure is preserved
        expect(migratedConfig.type).toBe('dashboard')
        expect(migratedConfig.title).toBe(config.title)
        expect(migratedConfig.visualizations).toBeDefined()
        
        // Check each visualization
        Object.keys(config.visualizations).forEach(vizKey => {
          const originalViz = config.visualizations[vizKey]
          const migratedViz = migratedConfig.visualizations[vizKey]
          
          expect(migratedViz.type).toBe(originalViz.type)
          expect(migratedViz.title).toBe(originalViz.title)
          expect(migratedViz.general.palette).toBeDefined()
          expect(migratedViz.general.palette.version).toBe('1.0')
          
          if (originalViz.type === 'chart') {
            expect(migratedViz.palette).toBeUndefined()
            expect(migratedViz.general.palette.name).toBeDefined()
          }
          
          if (originalViz.type === 'map') {
            expect(migratedViz.color).toBeUndefined()
            expect(migratedViz.general.palette.name).toBeDefined()
          }
        })
      })
    })
  })

  describe('Real-world legacy configuration scenarios', () => {
    it('should handle incomplete legacy configurations', () => {
      const incompleteConfig = {
        type: 'chart',
        // Missing palette property
        title: 'Incomplete Chart',
        data: []
      }

      const migratedConfig = update_4_25_9(incompleteConfig)
      
      expect(migratedConfig.type).toBe('chart')
      expect(migratedConfig.title).toBe('Incomplete Chart')
      expect(migratedConfig.general.palette.name).toBe('qualitative_bold') // Default from 4.25.9
    })

    it('should handle legacy configs with extra properties', () => {
      const configWithExtras = {
        type: 'chart',
        palette: 'qualitative-bold',
        customColors: ['#ff0000'],
        // Extra legacy properties
        oldProperty: 'should-be-preserved',
        nestedOld: {
          subProperty: 'also-preserved'
        },
        filters: [],
        legend: { show: true }
      }

      const migratedConfig = update_4_25_9(configWithExtras)
      
      // Ensure palette migration happened
      expect(migratedConfig.general.palette.name).toBe('qualitative_bold')
      expect(migratedConfig.palette).toBeUndefined()
      
      // Ensure extra properties are preserved
      expect(migratedConfig.oldProperty).toBe('should-be-preserved')
      expect(migratedConfig.nestedOld.subProperty).toBe('also-preserved')
      expect(migratedConfig.filters).toEqual([])
      expect(migratedConfig.legend.show).toBe(true)
    })

    it('should handle mixed v1/v2 configurations during transition period', () => {
      const transitionConfig = {
        type: 'chart',
        palette: 'qualitative-bold', // v1 style
        general: {
          // Partially migrated - has structure but not complete
          palette: {
            customColors: ['#custom']
          }
        }
      }

      const migratedConfig = update_4_25_9(transitionConfig)
      
      expect(migratedConfig.general.palette.name).toBe('qualitative_bold')
      expect(migratedConfig.general.palette.version).toBe('1.0')
      expect(migratedConfig.general.palette.customColors).toEqual(['#custom'])
    })
  })

  describe('Filter compatibility', () => {
    it('should maintain compatibility with chart palette filtering', () => {
      const v1Config = {
        type: 'chart',
        palette: 'qualitative-bold'
      }

      const v2Config = {
        type: 'chart',
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0'
          }
        }
      }

      // Both should work with filterChartColorPalettes
      expect(() => filterChartColorPalettes(v1Config)).not.toThrow()
      expect(() => filterChartColorPalettes(v2Config)).not.toThrow()
      
      const v1Palettes = filterChartColorPalettes(v1Config)
      const v2Palettes = filterChartColorPalettes(v2Config)
      
      expect(v1Palettes).toBeDefined()
      expect(v2Palettes).toBeDefined()
    })
  })

  describe('Utility function compatibility', () => {
    it('should work with getCurrentPaletteName for both v1 and v2', () => {
      const v1Config = { palette: 'qualitative-bold' }
      const v2Config = { 
        general: { 
          palette: { 
            name: 'qualitative_standard',
            version: '2.0' 
          } 
        } 
      }

      expect(getCurrentPaletteName(v1Config)).toBe('qualitative-bold')
      expect(getCurrentPaletteName(v2Config)).toBe('qualitative_standard')
    })

    it('should work with getPaletteColors for both v1 and v2', () => {
      const mockPalettes = {
        'qualitative-bold': ['#ff0000', '#00ff00'],
        'qualitative_standard': ['#ff0000', '#00ff00', '#0000ff']
      }

      const v1Config = { 
        palette: 'qualitative-bold',
        customColors: ['#custom1', '#custom2']
      }
      
      const v2Config = { 
        general: { 
          palette: { 
            name: 'qualitative_standard',
            customColors: ['#custom1', '#custom2', '#custom3']
          } 
        } 
      }

      expect(getPaletteColors(v1Config, mockPalettes)).toEqual(['#custom1', '#custom2'])
      expect(getPaletteColors(v2Config, mockPalettes)).toEqual(['#custom1', '#custom2', '#custom3'])
    })

    it('should work with isV1Palette for version detection', () => {
      const v1Configs = [
        { palette: 'qualitative-bold' },
        { general: { palette: { version: '1.0' } } },
        {}
      ]

      const v2Configs = [
        { general: { palette: { version: '2.0' } } },
        { general: { palette: { version: '3.0' } } }
      ]

      v1Configs.forEach(config => {
        expect(isV1Palette(config)).toBe(true)
      })

      v2Configs.forEach(config => {
        expect(isV1Palette(config)).toBe(false)
      })
    })
  })

  describe('Data preservation during migration', () => {
    it('should preserve all data arrays and user content', () => {
      const configWithData = {
        type: 'chart',
        palette: 'qualitative-bold',
        data: [
          { category: 'A', value: 10, metadata: { important: true } },
          { category: 'B', value: 20, metadata: { important: false } }
        ],
        columns: [
          { name: 'category', label: 'Category' },
          { name: 'value', label: 'Value' }
        ],
        filters: [
          { columnName: 'category', active: ['A'] }
        ]
      }

      const migratedConfig = update_4_25_9(configWithData)
      
      // Ensure data is preserved exactly
      expect(migratedConfig.data).toEqual(configWithData.data)
      expect(migratedConfig.columns).toEqual(configWithData.columns)
      expect(migratedConfig.filters).toEqual(configWithData.filters)
      
      // Ensure only palette-related properties were changed
      expect(migratedConfig.palette).toBeUndefined()
      expect(migratedConfig.general.palette.name).toBe('qualitative_standard')
    })

    it('should handle configurations with circular references', () => {
      const config: any = {
        type: 'chart',
        palette: 'qualitative-bold'
      }
      
      // Create a circular reference
      config.self = config

      // Migration should handle this gracefully
      expect(() => update_4_25_9(config)).not.toThrow()
    })
  })
})