import { getCurrentPaletteName, getPaletteColors, isV1Palette } from '../utils'
import { expect, describe, it } from 'vitest'

describe('Palette Utils', () => {
  describe('getCurrentPaletteName', () => {
    it('should return palette name from general.palette.name (v2 config)', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0'
          }
        }
      }
      
      expect(getCurrentPaletteName(config)).toBe('qualitative_standard')
    })

    it('should return palette name from legacy palette property (v1 config)', () => {
      const config = {
        palette: 'qualitative-bold'
      }
      
      expect(getCurrentPaletteName(config)).toBe('qualitative-bold')
    })

    it('should prefer general.palette.name over legacy palette property', () => {
      const config = {
        palette: 'qualitative-bold',
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0'
          }
        }
      }
      
      expect(getCurrentPaletteName(config)).toBe('qualitative_standard')
    })

    it('should return empty string for undefined config', () => {
      expect(getCurrentPaletteName(undefined)).toBe('')
      expect(getCurrentPaletteName(null)).toBe('')
    })

    it('should return empty string when no palette is defined', () => {
      const config = {
        title: 'My Chart',
        data: []
      }
      
      expect(getCurrentPaletteName(config)).toBe('')
    })

    it('should handle config with empty general.palette object', () => {
      const config = {
        general: {
          palette: {}
        }
      }
      
      expect(getCurrentPaletteName(config)).toBe('')
    })

    it('should handle deeply nested undefined properties', () => {
      const config = {
        general: {
          palette: {
            name: undefined
          }
        }
      }
      
      expect(getCurrentPaletteName(config)).toBe('')
    })
  })

  describe('getPaletteColors', () => {
    const mockColorPalettes = {
      'qualitative_standard': ['#ff0000', '#00ff00', '#0000ff'],
      'sequential_blue': ['#000080', '#0000ff', '#87ceeb'],
      'sequential_orange': ['#ffa500', '#ff8c00', '#ff4500']
    }

    it('should return custom colors from general.palette.customColors (v2 config)', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            customColors: ['#custom1', '#custom2', '#custom3']
          }
        }
      }
      
      const colors = getPaletteColors(config, mockColorPalettes)
      expect(colors).toEqual(['#custom1', '#custom2', '#custom3'])
    })

    it('should return palette colors when palette name exists and no custom colors', () => {
      const config = {
        general: {
          palette: {
            name: 'sequential_blue'
          }
        }
      }
      
      const colors = getPaletteColors(config, mockColorPalettes)
      expect(colors).toEqual(['#000080', '#0000ff', '#87ceeb'])
    })

    it('should return legacy custom colors from root level (v1 config)', () => {
      const config = {
        palette: 'qualitative-bold',
        customColors: ['#legacy1', '#legacy2']
      }
      
      const colors = getPaletteColors(config, mockColorPalettes)
      expect(colors).toEqual(['#legacy1', '#legacy2'])
    })

    it('should prefer general.palette.customColors over root level customColors', () => {
      const config = {
        customColors: ['#legacy1', '#legacy2'],
        general: {
          palette: {
            name: 'qualitative_standard',
            customColors: ['#new1', '#new2']
          }
        }
      }
      
      const colors = getPaletteColors(config, mockColorPalettes)
      expect(colors).toEqual(['#new1', '#new2'])
    })

    it('should return palette colors for legacy palette property', () => {
      const config = {
        palette: 'sequential_orange'
      }
      
      const colors = getPaletteColors(config, {
        'sequential_orange': ['#ffa500', '#ff8c00', '#ff4500']
      })
      expect(colors).toEqual(['#ffa500', '#ff8c00', '#ff4500'])
    })

    it('should return empty array when no palette or colors found', () => {
      const config = {
        title: 'My Chart'
      }
      
      const colors = getPaletteColors(config, mockColorPalettes)
      expect(colors).toEqual([])
    })

    it('should return empty array when palette name not found in colorPalettes', () => {
      const config = {
        general: {
          palette: {
            name: 'nonexistent_palette'
          }
        }
      }
      
      const colors = getPaletteColors(config, mockColorPalettes)
      expect(colors).toEqual([])
    })

    it('should handle undefined colorPalettes parameter', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard'
          }
        }
      }
      
      const colors = getPaletteColors(config, undefined)
      expect(colors).toEqual([])
    })

    it('should handle null config parameter', () => {
      const colors = getPaletteColors(null, mockColorPalettes)
      expect(colors).toEqual([])
    })

    it('should handle empty custom colors array', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            customColors: []
          }
        }
      }
      
      const colors = getPaletteColors(config, mockColorPalettes)
      expect(colors).toEqual([])
    })
  })

  describe('isV1Palette', () => {
    it('should return true for config with no general.palette.version', () => {
      const config = {
        palette: 'qualitative-bold'
      }
      
      expect(isV1Palette(config)).toBe(true)
    })

    it('should return true for config with general.palette.version = "1.0"', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '1.0'
          }
        }
      }
      
      expect(isV1Palette(config)).toBe(true)
    })

    it('should return false for config with general.palette.version = "2.0"', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0'
          }
        }
      }
      
      expect(isV1Palette(config)).toBe(false)
    })

    it('should return true for config with undefined general.palette object', () => {
      const config = {
        title: 'My Chart',
        palette: 'qualitative-bold'
      }
      
      expect(isV1Palette(config)).toBe(true)
    })

    it('should return true for config with empty general.palette object', () => {
      const config = {
        general: {
          palette: {}
        }
      }
      
      expect(isV1Palette(config)).toBe(true)
    })

    it('should handle null/undefined config gracefully', () => {
      expect(isV1Palette(null)).toBe(true)
      expect(isV1Palette(undefined)).toBe(true)
    })

    it('should handle config with only general object but no palette', () => {
      const config = {
        general: {
          title: 'My Chart'
        }
      }
      
      expect(isV1Palette(config)).toBe(true)
    })

    it('should return false for higher version numbers', () => {
      const config = {
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '3.0'
          }
        }
      }
      
      expect(isV1Palette(config)).toBe(false)
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
      
      // This should be false since it's not version 1 or "1.0"
      expect(isV1Palette(config)).toBe(false)
    })
  })

  describe('Edge cases and integration', () => {
    it('should handle mixed v1/v2 configuration correctly', () => {
      const config = {
        palette: 'qualitative-bold', // v1 style
        customColors: ['#legacy'],
        general: {
          palette: {
            name: 'qualitative_standard', // v2 style
            version: '1.0',
            customColors: ['#new']
          }
        }
      }

      expect(getCurrentPaletteName(config)).toBe('qualitative_standard')
      expect(getPaletteColors(config, {})).toEqual(['#new'])
      expect(isV1Palette(config)).toBe(true)
    })

    it('should handle config during migration state', () => {
      const config = {
        palette: 'qualitative-bold',
        general: {
          palette: {
            name: 'qualitative-bold', // Not yet migrated to new name
            version: '1.0'
          }
        }
      }

      expect(getCurrentPaletteName(config)).toBe('qualitative-bold')
      expect(isV1Palette(config)).toBe(true)
    })

    it('should handle complex nested configurations', () => {
      const config = {
        type: 'dashboard',
        general: {
          palette: {
            name: 'sequential_blue',
            version: '2.0',
            customColors: ['#custom'],
            backups: [
              { name: 'sequential-blue', version: '1.0', isReversed: false }
            ]
          }
        }
      }

      expect(getCurrentPaletteName(config)).toBe('sequential_blue')
      expect(getPaletteColors(config, {})).toEqual(['#custom'])
      expect(isV1Palette(config)).toBe(false)
    })
  })
})