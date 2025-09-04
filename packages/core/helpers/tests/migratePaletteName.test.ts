import { 
  migratePaletteName, 
  migrateChartPaletteName, 
  migrateMapPaletteName 
} from '../migratePaletteName'
import { expect, describe, it } from 'vitest'

describe('migratePaletteName', () => {
  describe('Chart palette migrations', () => {
    it('should migrate legacy chart palette names to new format', () => {
      expect(migratePaletteName('qualitative-bold')).toBe('qualitative_standard')
      expect(migratePaletteName('qualitative-soft')).toBe('qualitative_standard')
      expect(migratePaletteName('sequential-blue')).toBe('sequential_blue')
      expect(migratePaletteName('sequential-orange')).toBe('sequential-orange') // Not in migration map, returns original
      expect(migratePaletteName('colorblindsafe')).toBe('qualitative_standard')
    })

    it('should migrate legacy chart palette names with case variations', () => {
      expect(migratePaletteName('QUALITATIVE-BOLD')).toBe('qualitative_standard')
      expect(migratePaletteName('Sequential-Blue')).toBe('sequential_blue')
      expect(migratePaletteName('COLORBLINDSAFE')).toBe('qualitative_standard')
    })

    it('should handle reverse palette migrations for charts', () => {
      expect(migratePaletteName('qualitative-boldreverse')).toBe('qualitative_standardreverse')
      expect(migratePaletteName('sequential-bluereverse')).toBe('sequential_bluereverse')
      expect(migratePaletteName('colorblindsafereverse')).toBe('qualitative_standardreverse')
    })

    it('should migrate complex chart palette names', () => {
      expect(migratePaletteName('yelloworangered')).toBe('sequential_orange')
      expect(migratePaletteName('yelloworangebrown')).toBe('sequential_orange')
      expect(migratePaletteName('orangered')).toBe('sequential_orange')
      expect(migratePaletteName('bluegreen')).toBe('sequential_blue')
      expect(migratePaletteName('pinkpurple')).toBe('sequential_purple')
    })

    it('should migrate special chart palette names with spaces', () => {
      expect(migratePaletteName('Sequential Orange')).toBe('sequential_orange')
      expect(migratePaletteName('Sequential Blue')).toBe('sequential_blue')
      expect(migratePaletteName('Sequential Green')).toBe('sequential_green')
    })

    it('should migrate MPX palette names', () => {
      expect(migratePaletteName('sequential-orange(MPX)')).toBe('sequential_orange')
      expect(migratePaletteName('sequential-orange-(MPX)')).toBe('sequential_orange')
      expect(migratePaletteName('sequential-blue-2-(MPX)')).toBe('sequential_blue')
      expect(migratePaletteName('sequential-blue-2(MPX)')).toBe('sequential_blue')
    })
  })

  describe('Map palette migrations', () => {
    it('should migrate legacy map palette names to new format', () => {
      expect(migratePaletteName('sequential_yellow_orange_red')).toBe('sequential_orange')
      expect(migratePaletteName('sequential_yellow_orange_brown')).toBe('sequential_orange')
      expect(migratePaletteName('sequential_orange_red')).toBe('sequential_orange')
      expect(migratePaletteName('sequential_pink_purple')).toBe('sequential_purple')
      expect(migratePaletteName('sequential_blue_green')).toBe('sequential_blue')
      expect(migratePaletteName('sequential_green_blue')).toBe('sequential_teal')
      expect(migratePaletteName('qualitative_earth_tones')).toBe('qualitative')
    })

    it('should handle reverse map palette migrations', () => {
      expect(migratePaletteName('sequential_yellow_orange_redreverse')).toBe('sequential_orangereverse')
      expect(migratePaletteName('sequential_pink_purplereverse')).toBe('sequential_purplereverse')
      expect(migratePaletteName('sequential_blue_greenreverse')).toBe('sequential_bluereverse')
      expect(migratePaletteName('qualitative_earth_tonesreverse')).toBe('qualitativereverse')
    })

    it('should migrate divergent palette names', () => {
      expect(migratePaletteName('divergent_yellow_purple')).toBe('divergent_blue_purple')
      expect(migratePaletteName('divergent_yellow_purplereverse')).toBe('divergent_blue_purplereverse')
    })

    it('should migrate extended palette names', () => {
      expect(migratePaletteName('sequential_orange_extended')).toBe('sequential_orange')
      expect(migratePaletteName('sequential_blue_extended')).toBe('sequential_blue')
      expect(migratePaletteName('sequential_red')).toBe('sequential_orange')
    })
  })

  describe('Edge cases and fallbacks', () => {
    it('should return original palette name if no migration is found', () => {
      expect(migratePaletteName('unknown_palette')).toBe('unknown_palette')
      expect(migratePaletteName('custom_user_palette')).toBe('custom_user_palette')
      expect(migratePaletteName('')).toBe('')
    })

    it('should handle case-insensitive matching for unknown palettes', () => {
      expect(migratePaletteName('UNKNOWN_PALETTE')).toBe('UNKNOWN_PALETTE')
      expect(migratePaletteName('Custom_Palette')).toBe('Custom_Palette')
    })

    it('should handle undefined and null inputs gracefully', () => {
      expect(migratePaletteName(undefined as any)).toBe(undefined)
      expect(migratePaletteName(null as any)).toBe(null)
    })

    it('should handle empty string input', () => {
      expect(migratePaletteName('')).toBe('')
    })

    it('should handle special characters in palette names', () => {
      expect(migratePaletteName('palette-with-special_characters.123')).toBe('palette-with-special_characters.123')
    })
  })

  describe('Case sensitivity handling', () => {
    it('should handle mixed case inputs', () => {
      expect(migratePaletteName('Qualitative-Bold')).toBe('qualitative_standard')
      expect(migratePaletteName('SEQUENTIAL-BLUE')).toBe('sequential_blue')
      expect(migratePaletteName('PinkPurple')).toBe('sequential_purple')
    })

    it('should preserve original case when no migration found', () => {
      expect(migratePaletteName('MyCustomPalette')).toBe('MyCustomPalette')
      expect(migratePaletteName('CUSTOM_PALETTE')).toBe('CUSTOM_PALETTE')
    })
  })
})

describe('migrateChartPaletteName', () => {
  it('should only migrate chart-specific palettes', () => {
    expect(migrateChartPaletteName('qualitative-bold')).toBe('qualitative_standard')
    expect(migrateChartPaletteName('sequential-blue')).toBe('sequential_blue')
    expect(migrateChartPaletteName('colorblindsafe')).toBe('qualitative_standard')
  })

  it('should handle reverse chart palettes correctly', () => {
    expect(migrateChartPaletteName('qualitative-boldreverse')).toBe('qualitative_standardreverse')
    expect(migrateChartPaletteName('sequential-bluereverse')).toBe('sequential_bluereverse')
  })

  it('should not migrate map-specific palettes', () => {
    expect(migrateChartPaletteName('sequential_yellow_orange_red')).toBe('sequential_yellow_orange_red')
    expect(migrateChartPaletteName('qualitative_earth_tones')).toBe('qualitative_earth_tones')
  })

  it('should handle case-insensitive matching', () => {
    expect(migrateChartPaletteName('QUALITATIVE-BOLD')).toBe('qualitative_standard')
    expect(migrateChartPaletteName('Sequential-Blue')).toBe('sequential_blue')
  })

  it('should return original for unknown chart palettes', () => {
    expect(migrateChartPaletteName('unknown-chart-palette')).toBe('unknown-chart-palette')
  })
})

describe('migrateMapPaletteName', () => {
  it('should only migrate map-specific palettes', () => {
    expect(migrateMapPaletteName('sequential_yellow_orange_red')).toBe('sequential_orange')
    expect(migrateMapPaletteName('sequential_blue_green')).toBe('sequential_blue')
    expect(migrateMapPaletteName('qualitative_earth_tones')).toBe('qualitative')
  })

  it('should not migrate chart-specific palettes', () => {
    expect(migrateMapPaletteName('qualitative-bold')).toBe('qualitative-bold')
    expect(migrateMapPaletteName('sequential-blue')).toBe('sequential-blue')
  })

  it('should handle case-insensitive matching for map palettes', () => {
    expect(migrateMapPaletteName('SEQUENTIAL_BLUE_GREEN')).toBe('sequential_blue')
    expect(migrateMapPaletteName('Qualitative_Earth_Tones')).toBe('qualitative')
  })

  it('should return original for unknown map palettes', () => {
    expect(migrateMapPaletteName('unknown_map_palette')).toBe('unknown_map_palette')
  })
})

describe('Reverse palette detection and handling', () => {
  it('should correctly detect and handle reverse palettes in chart migrations', () => {
    // Test that reverse detection works correctly
    expect(migrateChartPaletteName('qualitative-boldreverse')).toBe('qualitative_standardreverse')
    expect(migrateChartPaletteName('sequential-bluereverse')).toBe('sequential_bluereverse')
    
    // Test that non-reverse palettes don't get reverse suffix
    expect(migrateChartPaletteName('qualitative-bold')).toBe('qualitative_standard')
    expect(migrateChartPaletteName('sequential-blue')).toBe('sequential_blue')
  })

  it('should handle edge cases with reverse detection', () => {
    // Test palettes that end with "reverse" but aren't in migration map
    expect(migrateChartPaletteName('custom-palette-reverse')).toBe('custom-palette-reverse')
    
    // Test palettes with "reverse" in the middle
    expect(migrateChartPaletteName('reverse-palette')).toBe('reverse-palette')
  })

  it('should handle complex reverse palette cases', () => {
    expect(migrateChartPaletteName('yelloworangeredreverse')).toBe('sequential_orangereverse')
    expect(migrateChartPaletteName('pinkpurplereverse')).toBe('sequential_purplereverse')
    expect(migrateChartPaletteName('bluegreenreverse')).toBe('sequential_bluereverse')
  })
})