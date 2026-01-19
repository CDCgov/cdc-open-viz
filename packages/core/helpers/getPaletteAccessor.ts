import { getColorPaletteVersion } from './getColorPaletteVersion'
import { VersionedColorPalettes, ColorPalettes, ColorPalette } from '../types/Palette'
import { BaseVisualizationConfig } from '../types/BaseVisualizationConfig'

/**
 * Gets the appropriate palette accessor based on config version
 * @param colorPalettes - The color palettes object (e.g., mapColorPalettes, chartColorPalettes)
 * @param config - The visualization config object
 * @param paletteName - Optional palette name to get specific palette
 * @returns The versioned palette accessor or fallback to main palettes, optionally filtered to specific palette
 */
export const getPaletteAccessor = (
  colorPalettes: VersionedColorPalettes | ColorPalettes,
  config: Partial<BaseVisualizationConfig>,
  paletteName?: string
): ColorPalettes | ColorPalette | VersionedColorPalettes | undefined => {
  const paletteAccessor = colorPalettes?.[`v${getColorPaletteVersion(config)}`] || colorPalettes

  if (paletteName && paletteAccessor) {
    return paletteAccessor[paletteName]
  }

  return paletteAccessor
}
