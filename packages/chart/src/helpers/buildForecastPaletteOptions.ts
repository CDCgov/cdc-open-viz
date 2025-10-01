/**
 * Builds user-friendly palette options for forecast color dropdowns
 *
 * This function takes processed palette data and transforms it into a format
 * suitable for dropdown UI with clean, readable display names.
 *
 * @param processedPalettes - The palette data processed through updatePaletteNames
 * @param paletteVersion - The palette version (1 or 2) from the config
 * @returns An object with kebab-case keys and user-friendly display names as values
 */
export const buildForecastPaletteOptions = (
  processedPalettes: Record<string, string[]>,
  paletteVersion: number
): Record<string, string> => {
  const paletteOptions: Record<string, string> = {}

  // Create user-friendly options with clean, readable names
  Object.keys(processedPalettes).forEach(key => {
    // Clean up the display name:
    // 1. Replace underscores with spaces
    // 2. Add space before "reverse" if it's concatenated
    // 3. Capitalize first letter of each word
    const cleanName = key
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/reverse$/i, ' Reverse') // Add space before reverse
      .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize first letter of each word

    // Use lowercase with hyphens as the key for consistency with existing saved values
    // Convert both underscores and spaces to hyphens
    const displayKey = key.replace(/_/g, '-').replace(/ /g, '-').toLowerCase()
    paletteOptions[displayKey] = cleanName
  })

  // Add MPX aliases for v1 backward compatibility (these were historical names)
  if (paletteVersion === 1) {
    // Map "Sequential Blue Two" to MPX alias
    if (paletteOptions['sequential-blue-two']) {
      paletteOptions['sequential-blue-2-(mpx)'] = 'Sequential Blue 2 (MPX)'
    }
    if (paletteOptions['sequential-blue-tworeverse']) {
      paletteOptions['sequential-blue-2-(mpx)reverse'] = 'Sequential Blue 2 (MPX) Reverse'
    }
    // Map "Sequential Orange" to MPX alias
    if (paletteOptions['sequential-orange']) {
      paletteOptions['sequential-orange-(mpx)'] = 'Sequential Orange (MPX)'
    }
    if (paletteOptions['sequential-orangereverse']) {
      paletteOptions['sequential-orange-(mpx)reverse'] = 'Sequential Orange (MPX) Reverse'
    }
  } else {
    // V2 backward compatibility: add options for old v1 sequential palette names
    // These are for migrated configs that still have v1-style names like "Sequential Blue"
    if (paletteOptions['sequential-blue']) {
      paletteOptions['sequential-blue'] = 'Sequential Blue'
    }
    if (paletteOptions['sequential-green']) {
      paletteOptions['sequential-green'] = 'Sequential Green'
    }
    if (paletteOptions['sequential-orange']) {
      paletteOptions['sequential-orange'] = 'Sequential Orange'
    }
    if (paletteOptions['sequential-purple']) {
      paletteOptions['sequential-purple'] = 'Sequential Purple'
    }
    if (paletteOptions['sequential-teal']) {
      paletteOptions['sequential-teal'] = 'Sequential Teal'
    }
  }

  return paletteOptions
}

/**
 * Normalizes a palette value to match the standardized hyphenated format
 * and migrates v1 palette names to v2 equivalents
 *
 * @param value - The palette name to normalize
 * @param paletteVersion - The palette version (1 or 2) from the config
 * @returns The normalized palette name in lowercase with hyphens, or 'Select' if empty
 */
export const normalizePaletteValue = (value: string | undefined, paletteVersion: number = 1): string => {
  if (!value) return 'Select'

  // Convert to lowercase with hyphens for consistent matching
  const normalized = value.toLowerCase().replace(/ /g, '-').replace(/_/g, '-')

  // If v2, migrate v1-only palette names to their v2 equivalents
  if (paletteVersion === 2) {
    const V1_TO_V2_MIGRATION: Record<string, string> = {
      // Sequential Blue variants → sequential-blue
      'sequential-blue-two': 'sequential-blue',
      'sequential-blue-three': 'sequential-blue',
      'sequential-blue-2-(mpx)': 'sequential-blue',
      'sequential-blue-tworeverse': 'sequential-bluereverse',
      'sequential-blue-threereverse': 'sequential-bluereverse',
      'sequential-blue-2-(mpx)reverse': 'sequential-bluereverse',

      // Sequential Orange variants → sequential-orange
      'sequential-orange-two': 'sequential-orange',
      'sequential-orange-(mpx)': 'sequential-orange',
      'sequential-orange-tworeverse': 'sequential-orangereverse',
      'sequential-orange-(mpx)reverse': 'sequential-orangereverse'
    }

    return V1_TO_V2_MIGRATION[normalized] || normalized
  }

  return normalized
}
