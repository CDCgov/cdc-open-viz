import { getColorPaletteVersion } from '../getColorPaletteVersion'
import { expect, describe, it } from 'vitest'

describe('getColorPaletteVersion', () => {
  describe('Version detection from general.palette.version', () => {
    it('should return major version from version string', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.5.1'
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(2)
    })

    it('should handle version 1.0', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '1.0'
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(1)
    })

    it('should handle version 3.0 and higher', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '3.0'
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(3)
    })

    it('should handle complex version strings', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '10.2.3-beta.1'
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(10)
    })
  })

  describe('Default version handling', () => {
    it('should return 2 when general.palette exists but no version', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard'
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(2)
    })

    it('should return 1 when no general.palette exists', () => {
      const config = {
        palette: 'qualitative-bold'
      }
      
      expect(getColorPaletteVersion(config)).toBe(1)
    })

    it('should return 1 for completely empty config', () => {
      const config = {}
      
      expect(getColorPaletteVersion(config)).toBe(1)
    })
  })

  describe('Edge cases and error handling', () => {
    it('should handle null config', () => {
      expect(getColorPaletteVersion(null)).toBe(1)
    })

    it('should handle undefined config', () => {
      expect(getColorPaletteVersion(undefined)).toBe(1)
    })

    it('should handle config with null general property', () => {
      const config = {
        general: null
      }
      
      expect(getColorPaletteVersion(config)).toBe(1)
    })

    it('should handle config with null palette property', () => {
      const config = {
        general: {
          palette: null
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(1)
    })

    it('should handle empty version string', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: ''
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(2)
    })

    it('should handle invalid version string', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: 'invalid.version'
          }
        }
      }
      
      // parseInt('invalid') returns NaN, should handle gracefully
      const version = getColorPaletteVersion(config)
      expect(isNaN(version) || version >= 1).toBe(true)
    })

    it('should handle version as number instead of string', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: 2
          }
        }
      }
      
      // Will call split on a number, should handle gracefully
      expect(() => getColorPaletteVersion(config)).not.toThrow()
    })

    it('should handle version with no dots', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2'
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(2)
    })

    it('should handle version starting with non-numeric', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: 'v2.0'
          }
        }
      }
      
      // parseInt('v') returns NaN
      const version = getColorPaletteVersion(config)
      expect(isNaN(version) || version >= 1).toBe(true)
    })

    it('should handle malformed general object', () => {
      const config = {
        general: 'not-an-object'
      }
      
      expect(getColorPaletteVersion(config)).toBe(1)
    })

    it('should handle deeply nested null/undefined', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: null
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(2)
    })
  })

  describe('Integration scenarios', () => {
    it('should work with migrated v1 config', () => {
      const config = {
        // Original v1 properties that might still exist
        palette: 'qualitative-bold',
        customColors: ['#ff0000'],
        // New v2 structure after migration
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '1.0', // Migrated but marked as v1
            customColors: ['#ff0000'],
            backups: [{ name: 'qualitative-bold', version: '1.0' }]
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(1)
    })

    it('should work with pure v2 config', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            customColors: ['#ff0000']
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(2)
    })

    it('should work with dashboard config containing visualizations', () => {
      const config = {
        type: 'dashboard',
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0'
          }
        },
        visualizations: {
          chart1: {
            general: {
              palette: {
                name: 'sequential_blue',
                version: '1.0'
              }
            }
          }
        }
      }
      
      // Should get version from top-level general.palette
      expect(getColorPaletteVersion(config)).toBe(2)
    })
  })

  describe('Performance and stability', () => {
    it('should handle very large version numbers', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '999999.0.0'
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(999999)
    })

    it('should handle version with many dots', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0.1.5.3.8.1'
          }
        }
      }
      
      expect(getColorPaletteVersion(config)).toBe(2)
    })

    it('should not mutate input config', () => {
      const originalConfig = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0'
          }
        }
      }
      
      const configCopy = JSON.parse(JSON.stringify(originalConfig))
      getColorPaletteVersion(configCopy)
      
      expect(configCopy).toEqual(originalConfig)
    })

    it('should handle circular references gracefully', () => {
      const config: any = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0'
          }
        }
      }
      config.self = config // Create circular reference
      
      expect(() => getColorPaletteVersion(config)).not.toThrow()
      expect(getColorPaletteVersion(config)).toBe(2)
    })
  })
})