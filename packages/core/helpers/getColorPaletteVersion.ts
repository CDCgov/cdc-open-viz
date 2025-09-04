/**
 * Gets the color palette version from a visualization config
 * @param config - The visualization config object
 * @returns The major version number
 */
export const getColorPaletteVersion = (config: any): number => {
  // If general.palette exists, it's either migrated or new
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