/**
 * Gets the color palette version from a visualization config
 * @param config - The visualization config object
 * @returns The major version number (defaults to 1 if not found)
 */
export const getColorPaletteVersion = (config: any): number => {
  if (!config.general.palette) {
    return 2
  }
  const version = config.general.palette.version || '2.0'
  return parseInt(version.split('.')[0])
}