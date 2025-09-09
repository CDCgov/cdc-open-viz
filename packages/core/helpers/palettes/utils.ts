import { FALLBACK_COLOR_PALETTE } from '../constants'
import { getColorPaletteVersion } from '../getColorPaletteVersion'
import { getPaletteAccessor } from '../getPaletteAccessor'
import { migrateChartPaletteName } from '../migratePaletteName'

/**
 * Gets the current palette name from a visualization config
 * @param config - The visualization config object
 * @returns The current palette name or empty string if not found
 */
export const getCurrentPaletteName = (config: any): string => {
  // Check new v2 format first
  if (config?.general?.palette?.name) {
    return config.general.palette.name
  }

  // Check legacy v1 formats
  if (config?.palette) {
    return config.palette
  }

  if (config?.color) {
    return config.color
  }

  return FALLBACK_COLOR_PALETTE
}

/**
 * Gets the palette colors array from a visualization config
 * @param config - The visualization config object
 * @param colorPalettes - The color palettes object (e.g., mapColorPalettes, chartColorPalettes)
 * @returns The palette colors array or empty array if not found
 */
export const getPaletteColors = (config: any, colorPalettes: any): string[] => {
  // First check for custom colors (v2 format)
  if (config?.general?.palette?.customColors) {
    return config.general.palette.customColors
  }

  // Legacy fallback - check for customColors at root level (v1 format)
  if (config?.customColors) {
    return config.customColors
  }

  // Get the raw palette name
  let paletteName = getCurrentPaletteName(config)

  // Apply v1 palette name migrations if this is a v1 config
  const paletteVersion = getColorPaletteVersion(config)
  if (paletteVersion === 1 && migrateChartPaletteName(paletteName)) {
    paletteName = migrateChartPaletteName(paletteName)
  }

  // Get the versioned palette accessor
  const versionedPalettes = getPaletteAccessor(colorPalettes, config)

  if (paletteName && versionedPalettes?.[paletteName]) {
    return versionedPalettes[paletteName]
  }

  return []
}

/**
 * Determines if the config is using a v1 palette configuration
 * @param config - The visualization config object
 * @returns True if the config is using v1 palette configuration
 */
export const isV1Palette = (config: any): boolean => {
  const currentVersion = getColorPaletteVersion(config)
  return (
    currentVersion === 1 ||
    config?.general?.palette?.version === '1.0' ||
    !config?.general?.palette?.version
  )
}