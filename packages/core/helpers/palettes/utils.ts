import { map } from 'lodash'
import { FALLBACK_COLOR_PALETTE_V1, FALLBACK_COLOR_PALETTE_V2 } from '../constants'
import { getColorPaletteVersion } from '../getColorPaletteVersion'
import { getPaletteAccessor } from '../getPaletteAccessor'
import { chartPaletteMigrationMap, mapPaletteMigrationMap } from '../migratePaletteName'
import { newMapPaletteNames, chartPaletteNameMigrations } from '../ver/4.25.9'

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

  const paletteVersion = getColorPaletteVersion(config)
  return paletteVersion === 1 ? FALLBACK_COLOR_PALETTE_V1 : FALLBACK_COLOR_PALETTE_V2
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
  if (paletteVersion === 1) {
    paletteName = migratePaletteWithMap(paletteName, chartPaletteMigrationMap, true)
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

/**
 * Returns the appropriate fallback color palette based on the palette version
 * @param config - The visualization config object
 * @returns The fallback palette name for the detected version
 */
export const getFallbackColorPalette = (config: any): string => {
  const paletteVersion = getColorPaletteVersion(config)
  return paletteVersion === 1 ? FALLBACK_COLOR_PALETTE_V1 : FALLBACK_COLOR_PALETTE_V2
}

/**
 * Finds a palette name in a migration map using exact match first, then case-insensitive fallback
 * @param paletteName - The palette name to look up
 * @param migrationMap - The migration map to search in
 * @returns The migrated palette name or null if not found
 */
export const findPaletteInMigrationMap = (paletteName: string, migrationMap: Record<string, string>): string | null => {
  // Try exact match first
  if (migrationMap[paletteName]) {
    return migrationMap[paletteName]
  }

  // Try case-insensitive match
  const lowerCaseName = paletteName.toLowerCase()
  const matchingKey = Object.keys(migrationMap).find(key => key.toLowerCase() === lowerCaseName)

  return matchingKey ? migrationMap[matchingKey] : null
}

/**
 * Handles reverse palette suffix logic for chart palettes
 * @param originalPaletteName - The original palette name that may have 'reverse' suffix
 * @param migratedBase - The migrated base name
 * @returns The properly formatted migrated palette name with reverse suffix if needed
 */
export const handleReversePalette = (originalPaletteName: string, migratedBase: string): string => {
  const isReverse = originalPaletteName.endsWith('reverse')
  return isReverse ? migratedBase + 'reverse' : migratedBase
}

/**
 * Generic migration function that works with any migration map
 * @param oldPaletteName - The palette name to migrate
 * @param migrationMap - The migration map to use
 * @param handleReverse - Whether to handle reverse palette suffixes (for chart palettes)
 * @returns The migrated palette name or original if no migration found
 */
export const migratePaletteWithMap = (
  oldPaletteName: string,
  migrationMap: Record<string, string>,
  handleReverse: boolean = false
): string => {
  // Handle null/undefined/empty cases - maintain original behavior
  if (!oldPaletteName) {
    return oldPaletteName
  }

  if (handleReverse) {
    // Chart palette logic - handle reverse suffix
    const isReverse = oldPaletteName.endsWith('reverse')
    const basePaletteName = isReverse ? oldPaletteName.slice(0, -7) : oldPaletteName

    const migratedBase = findPaletteInMigrationMap(basePaletteName, migrationMap)
    if (migratedBase) {
      return handleReversePalette(oldPaletteName, migratedBase)
    }
  } else {
    // Map palette logic - direct lookup
    const migrated = findPaletteInMigrationMap(oldPaletteName, migrationMap)
    if (migrated) {
      return migrated
    }
  }

  return oldPaletteName
}

/**
 * Checks if a config has palette backup data available for rollback
 * @param config - The visualization config object
 * @returns True if backup data exists
 */
export const hasPaletteBackup = (config: any): boolean => {
  return !!(config?.general?.palette?.backups?.length > 0)
}

/**
 * Gets the original palette name from backup data
 * @param config - The visualization config object
 * @returns The original palette name or null if no backup exists
 */
export const getOriginalPaletteName = (config: any): string | null => {
  const backups = config?.general?.palette?.backups
  if (!backups || backups.length === 0) return null

  // Get the most recent backup (last in array)
  const latestBackup = backups[backups.length - 1]
  return latestBackup?.name || null
}

/**
 * Rolls back palette configuration to original pre-migration state
 * @param config - The visualization config object to modify
 * @returns True if rollback was successful, false if no backup available
 */
export const rollbackPaletteToOriginal = (config: any): boolean => {
  const backups = config?.general?.palette?.backups
  if (!backups || backups.length === 0) {
    return false
  }

  // Get the most recent backup
  const latestBackup = backups[backups.length - 1]
  if (!latestBackup?.name) {
    return false
  }

  // Restore the original configuration
  if (config.type === 'map') {
    config.general.palette.name = newMapPaletteNames[latestBackup.name] || latestBackup.name
    config.general.palette.version = '1.0' // Reset to v1
  } else if (config.type === 'chart') {
    config.general.palette.name = chartPaletteMigrationMap[latestBackup.name] || latestBackup.name
    config.general.palette.version = '1.0' // Reset to v1
  }

  return config
}