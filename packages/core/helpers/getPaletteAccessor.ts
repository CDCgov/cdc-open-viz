import { getColorPaletteVersion } from './getColorPaletteVersion'

/**
 * Gets the appropriate palette accessor based on config version
 * @param colorPalettes - The color palettes object (e.g., mapColorPalettes, chartColorPalettes)
 * @param config - The visualization config object
 * @param paletteName - Optional palette name to get specific palette
 * @returns The versioned palette accessor or fallback to main palettes, optionally filtered to specific palette
 */
export const getPaletteAccessor = (colorPalettes: any, config: any, paletteName?: string) => {
  const paletteAccessor = colorPalettes?.[`v${getColorPaletteVersion(config)}`] || colorPalettes
  
  if (paletteName && paletteAccessor) {
    return paletteAccessor[paletteName]
  }
  
  return paletteAccessor
}