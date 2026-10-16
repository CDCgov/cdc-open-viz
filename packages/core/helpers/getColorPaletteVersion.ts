import { USE_V2_MIGRATION } from './constants'

/**
 * Gets the color palette version from a visualization config
 * @param config - The visualization config object
 * @param useV2Migration - If provided, overrides the global flag
 * @returns The major version number
 */
export const getColorPaletteVersion = (config: any, useV2Migration?: boolean): number => {
  // Use passed parameter or fall back to global flag
  const shouldUseV2 = useV2Migration !== undefined ? useV2Migration : USE_V2_MIGRATION

  // If not using v2 migration, force v1 unless explicitly set to v2
  if (!shouldUseV2) {
    if (config.general?.palette?.version) {
      return parseInt(config.general.palette.version.split('.')[0])
    }
    return 1
  }

  // V2 migration logic - If general.palette exists, it's either migrated or new
  if (config.general?.palette) {
    // If version is explicitly set, use it
    if (config.general.palette.version) {
      return parseInt(config.general.palette.version.split('.')[0])
    }
    // If no version but palette exists, it's likely migrated → use v2
    return 2
  }

  // If no general.palette at all, it's legacy → use v1
  return 1
}