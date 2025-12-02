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
