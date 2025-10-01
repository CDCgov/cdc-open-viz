/**
 * Builds a palette lookup map with backward-compatibility mappings for forecast charts
 *
 * This function creates multiple naming format mappings to support:
 * - V1 configs using old naming like "Sequential Blue" (Title Case with spaces)
 * - V2 configs using new naming like "sequential-blue" (lowercase with hyphens)
 * - MPX legacy aliases (v1 only)
 *
 * @param processedPalettes - The palette data processed through updatePaletteNames
 * @param paletteVersion - The palette version (1 or 2) from the config
 * @returns A palette map with keys in various formats pointing to color arrays
 */
export const buildForecastPaletteMappings = (
  processedPalettes: Record<string, string[]>,
  paletteVersion: number
): Record<string, string[]> => {
  const paletteMap: Record<string, string[]> = {}

  // Create base mappings with multiple naming formats for backward compatibility:
  // - sequential-blue (hyphenated)
  // - sequential_blue (underscore)
  // - Sequential Blue (with spaces)
  Object.keys(processedPalettes).forEach(key => {
    const value = processedPalettes[key]
    // Original key
    paletteMap[key] = value
    // Lowercase with hyphens
    paletteMap[key.toLowerCase().replace(/ /g, '-')] = value
    // Lowercase with underscores
    paletteMap[key.toLowerCase().replace(/ /g, '_')] = value
    // Original key variations
    paletteMap[key.replace(/_/g, '-')] = value
    paletteMap[key.toLowerCase()] = value
  })

  if (paletteVersion === 1) {
    // V1: Add MPX legacy aliases
    // Note: Sequential Blue Two was aliased as "Sequential Blue 2 (MPX)" and Sequential Orange as "Sequential Orange (MPX)"
    const MPX_ALIASES: Record<string, string[]> = {
      'sequential-blue-two': ['sequential-blue-2-(mpx)', 'sequential-blue-2-(MPX)'],
      'sequential-blue-tworeverse': ['sequential-blue-2-(mpx)reverse', 'sequential-blue-2-(MPX)reverse'],
      'sequential-orange': ['sequential-orange-(mpx)', 'sequential-orange-(MPX)'],
      'sequential-orangereverse': ['sequential-orange-(mpx)reverse', 'sequential-orange-(MPX)reverse']
    }

    Object.entries(MPX_ALIASES).forEach(([canonical, aliases]) => {
      const palette = paletteMap[canonical]
      if (palette) {
        aliases.forEach(alias => {
          paletteMap[alias] = palette
        })
      }
    })
  } else {
    // V2: Add backward compatibility mappings for migrated configs
    // Map old v1 sequential palette names (Title Case with spaces) to v2 palettes
    // Also includes MPX aliases since users may have selected those in v1
    const V2_MIGRATION_ALIASES: Record<string, string[]> = {
      'sequential-blue': [
        'Sequential Blue',
        'sequential blue',
        'Sequential Blue Two',
        'Sequential Blue Three',
        'sequential-blue-2-(mpx)',
        'sequential-blue-2-(MPX)',
        'Sequential Blue 2 (MPX)'
      ],
      'sequential-bluereverse': [
        'Sequential Blue Reverse',
        'sequential bluereverse',
        'Sequential Blue Two Reverse',
        'Sequential Blue Three Reverse',
        'sequential-blue-2-(mpx)reverse',
        'sequential-blue-2-(MPX)reverse',
        'Sequential Blue 2 (MPX) Reverse'
      ],
      'sequential-green': ['Sequential Green', 'sequential green'],
      'sequential-greenreverse': ['Sequential Green Reverse', 'sequential greenreverse'],
      'sequential-orange': [
        'Sequential Orange',
        'sequential orange',
        'Sequential Orange Two',
        'sequential-orange-(mpx)',
        'sequential-orange-(MPX)',
        'Sequential Orange (MPX)'
      ],
      'sequential-orangereverse': [
        'Sequential Orange Reverse',
        'sequential orangereverse',
        'Sequential Orange Two Reverse',
        'sequential-orange-(mpx)reverse',
        'sequential-orange-(MPX)reverse',
        'Sequential Orange (MPX) Reverse'
      ],
      'sequential-purple': ['Sequential Purple', 'sequential purple'],
      'sequential-purplereverse': ['Sequential Purple Reverse', 'sequential purplereverse'],
      'sequential-teal': ['Sequential Teal', 'sequential teal'],
      'sequential-tealreverse': ['Sequential Teal Reverse', 'sequential tealreverse']
    }

    Object.entries(V2_MIGRATION_ALIASES).forEach(([canonical, aliases]) => {
      const palette = paletteMap[canonical]
      if (palette) {
        aliases.forEach(alias => {
          paletteMap[alias] = palette
        })
      }
    })
  }

  return paletteMap
}
