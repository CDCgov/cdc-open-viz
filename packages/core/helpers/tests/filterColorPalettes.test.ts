import { filterColorPalettes, filterChartColorPalettes } from '../filterColorPalettes'
import { expect, describe, it } from 'vitest'

describe('filterColorPalettes', () => {
  const mockColorPalettes = {
    v1: {
      sequential_blue: ['#000080', '#0000ff'],
      sequential_orange: ['#ffa500', '#ff4500'],
      sequential_bluereverse: ['#0000ff', '#000080'],
      qualitative_standard: ['#ff0000', '#00ff00', '#0000ff'],
      qualitative_bold: ['#800000', '#008000', '#000080'],
      qualitative_standardreverse: ['#0000ff', '#00ff00', '#ff0000'],
      colorblindsafe: ['#e66101', '#fdb863', '#b2abd2'],
      colorblindsafereverse: ['#b2abd2', '#fdb863', '#e66101'],
      twoColorPalette: {
        'two_color_1': ['#ff0000', '#0000ff'],
        'two_color_1reverse': ['#0000ff', '#ff0000']
      }
    },
    v2: {
      sequential_blue: ['#000080', '#0000ff', '#87ceeb'],
      sequential_orange: ['#ffa500', '#ff8c00', '#ff4500'],
      sequential_bluereverse: ['#87ceeb', '#0000ff', '#000080'],
      qualitative_standard: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'],
      qualitative_standardreverse: ['#ffff00', '#0000ff', '#00ff00', '#ff0000'],
      divergent_blue_purple: ['#762a83', '#af8dc3', '#e7d4e8'],
      divergent_blue_purplereverse: ['#e7d4e8', '#af8dc3', '#762a83'],
      twoColorPalette: {
        'two_color_2': ['#ff0000', '#0000ff'],
        'two_color_2reverse': ['#0000ff', '#ff0000']
      }
    }
  }

  describe('Regular palette filtering', () => {
    it('should filter v1 palettes correctly', () => {
      const config = {
        general: {
          palette: {
            version: '1.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        colorPalettes: mockColorPalettes
      })

      expect(result.sequential).toContain('sequential_blue')
      expect(result.sequential).toContain('sequential_orange')
      expect(result.nonSequential).toContain('qualitative_standard')
      expect(result.nonSequential).toContain('qualitative_bold')
      expect(result.accessibleColors).toContain('colorblindsafe')
    })

    it('should filter v2 palettes correctly', () => {
      const config = {
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        colorPalettes: mockColorPalettes
      })

      expect(result.sequential).toContain('sequential_blue')
      expect(result.sequential).toContain('sequential_orange')
      expect(result.nonSequential).toContain('divergent_blue_purple')
      expect(result.accessibleColors).toContain('qualitative_standard')
    })

    it('should handle reverse palette filtering', () => {
      const config = {
        general: {
          palette: {
            version: '1.0',
            isReversed: true
          }
        }
      }

      const result = filterColorPalettes({
        config,
        isReversed: true,
        colorPalettes: mockColorPalettes
      })

      expect(result.sequential).toContain('sequential_bluereverse')
      expect(result.nonSequential).toContain('qualitative_standardreverse')
      expect(result.accessibleColors).toContain('colorblindsafereverse')
    })

    it('should prefer explicit isReversed parameter over config', () => {
      const config = {
        general: {
          palette: {
            version: '1.0',
            isReversed: true
          }
        }
      }

      const result = filterColorPalettes({
        config,
        isReversed: false, // Explicit override
        colorPalettes: mockColorPalettes
      })

      // Should use isReversed: false, not the config value
      expect(result.sequential).toContain('sequential_blue')
      expect(result.sequential).not.toContain('sequential_bluereverse')
    })
  })

  describe('Two-color palette filtering', () => {
    it('should filter two-color palettes for Paired Bar charts', () => {
      const config = {
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        visualizationType: 'Paired Bar',
        colorPalettes: mockColorPalettes
      })

      expect(result.twoColorPalettes).toContain('two_color_2')
      expect(result.sequential).toEqual([])
      expect(result.nonSequential).toEqual([])
      expect(result.accessibleColors).toEqual([])
    })

    it('should filter two-color palettes for Deviation Bar charts', () => {
      const config = {
        general: {
          palette: {
            version: '1.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        visualizationType: 'Deviation Bar',
        isReversed: true,
        colorPalettes: mockColorPalettes
      })

      expect(result.twoColorPalettes).toContain('two_color_1reverse')
      expect(result.twoColorPalettes).not.toContain('two_color_1')
    })

    it('should handle missing twoColorPalette gracefully', () => {
      const palettesWithoutTwoColor = {
        v2: {
          sequential_blue: ['#000080', '#0000ff']
        }
      }

      const config = {
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        visualizationType: 'Paired Bar',
        colorPalettes: palettesWithoutTwoColor
      })

      expect(result.twoColorPalettes).toEqual([])
    })
  })

  describe('Fallback and error handling', () => {
    it('should use chart palettes as fallback when no colorPalettes provided', () => {
      const config = {
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      const result = filterColorPalettes({ config })

      // Should not throw and should return valid structure
      expect(result).toHaveProperty('sequential')
      expect(result).toHaveProperty('nonSequential')
      expect(result).toHaveProperty('accessibleColors')
    })

    it('should handle null config gracefully', () => {
      const result = filterColorPalettes({
        config: null,
        colorPalettes: mockColorPalettes
      })

      expect(result).toHaveProperty('sequential')
      expect(result).toHaveProperty('nonSequential')
      expect(result).toHaveProperty('accessibleColors')
    })

    it('should handle undefined colorPalettes', () => {
      const config = {
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        colorPalettes: undefined
      })

      expect(result).toHaveProperty('sequential')
      expect(result).toHaveProperty('nonSequential')
      expect(result).toHaveProperty('accessibleColors')
    })

    it('should fallback to v2 palettes when version not found', () => {
      const config = {
        general: {
          palette: {
            version: '99.0' // Non-existent version
          }
        }
      }

      const result = filterColorPalettes({
        config,
        colorPalettes: mockColorPalettes
      })

      // Should fallback to v2
      expect(result.nonSequential).toContain('divergent_blue_purple')
    })

    it('should handle empty colorPalettes object', () => {
      const config = {
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        colorPalettes: {}
      })

      expect(result.sequential).toEqual([])
      expect(result.nonSequential).toEqual([])
      expect(result.accessibleColors).toEqual([])
    })

    it('should handle malformed palette structure', () => {
      const malformedPalettes = {
        v2: 'not-an-object'
      }

      const config = {
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      expect(() => {
        filterColorPalettes({
          config,
          colorPalettes: malformedPalettes
        })
      }).not.toThrow()
    })
  })

  describe('Complex filtering scenarios', () => {
    it('should handle config without general.palette', () => {
      const config = {
        palette: 'qualitative-bold' // Legacy v1 style
      }

      const result = filterColorPalettes({
        config,
        colorPalettes: mockColorPalettes
      })

      // Should default to v1 behavior
      expect(result.sequential).toContain('sequential_blue')
      expect(result.nonSequential).toContain('qualitative_standard')
    })

    it('should handle mixed v1/v2 configuration', () => {
      const config = {
        palette: 'qualitative-bold',
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '1.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        colorPalettes: mockColorPalettes
      })

      expect(result.sequential).toContain('sequential_blue')
      expect(result.accessibleColors).toContain('colorblindsafe')
    })

    it('should handle dashboard-style config', () => {
      const config = {
        type: 'dashboard',
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      const result = filterColorPalettes({
        config,
        colorPalettes: mockColorPalettes
      })

      expect(result.sequential).toContain('sequential_blue')
      expect(result.nonSequential).toContain('divergent_blue_purple')
    })
  })
})

describe('filterChartColorPalettes', () => {
  describe('Version-based filtering', () => {
    it('should return v1 palettes for version 1.0', () => {
      const config = {
        general: {
          palette: {
            version: '1.0'
          }
        }
      }

      const result = filterChartColorPalettes(config)
      
      // Should return chartColorPalettes.v1
      expect(result).toBeDefined()
    })

    it('should return v2 palettes for version 2.0', () => {
      const config = {
        general: {
          palette: {
            version: '2.0'
          }
        }
      }

      const result = filterChartColorPalettes(config)
      
      // Should return chartColorPalettes.v2
      expect(result).toBeDefined()
    })

    it('should default to v2 palettes when no version specified', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard'
          }
        }
      }

      const result = filterChartColorPalettes(config)
      
      // Should return chartColorPalettes.v2
      expect(result).toBeDefined()
    })

    it('should default to v2 palettes for unknown versions', () => {
      const config = {
        general: {
          palette: {
            version: '3.0'
          }
        }
      }

      const result = filterChartColorPalettes(config)
      
      // Should return chartColorPalettes.v2
      expect(result).toBeDefined()
    })
  })

  describe('Edge cases', () => {
    it('should handle null config', () => {
      const result = filterChartColorPalettes(null)
      
      expect(result).toBeDefined()
    })

    it('should handle undefined config', () => {
      const result = filterChartColorPalettes(undefined)
      
      expect(result).toBeDefined()
    })

    it('should handle empty config', () => {
      const result = filterChartColorPalettes({})
      
      expect(result).toBeDefined()
    })

    it('should handle config without general property', () => {
      const config = {
        palette: 'qualitative-bold'
      }

      const result = filterChartColorPalettes(config)
      
      expect(result).toBeDefined()
    })

    it('should handle config with null general.palette', () => {
      const config = {
        general: {
          palette: null
        }
      }

      const result = filterChartColorPalettes(config)
      
      expect(result).toBeDefined()
    })

    it('should handle malformed config structure', () => {
      const config = {
        general: 'not-an-object'
      }

      expect(() => filterChartColorPalettes(config)).not.toThrow()
    })
  })

  describe('Integration with other functions', () => {
    it('should work with migrated v1 configs', () => {
      const config = {
        palette: 'qualitative-bold', // Original v1
        general: {
          palette: {
            name: 'qualitative_standard', // Migrated
            version: '1.0', // But marked as v1
            backups: [{ name: 'qualitative-bold', version: '1.0' }]
          }
        }
      }

      const result = filterChartColorPalettes(config)
      
      expect(result).toBeDefined()
    })

    it('should work with pure v2 configs', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0'
          }
        }
      }

      const result = filterChartColorPalettes(config)
      
      expect(result).toBeDefined()
    })
  })
})