import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { v2ColorDistribution } from '@cdc/core/helpers/palettes/colorDistributions'

/**
 * Calculates the layer colors for a horizon chart based on palette configuration.
 * Shared between HorizonBand rendering and Legend display.
 */
export const getHorizonLayerColors = (config: any, numLayers: number): string[] => {
  const paletteName = config.general?.palette?.name || 'sequential_blue'
  const colorPalettes = filterChartColorPalettes(config)
  const fullPalette = colorPalettes[paletteName] || Object.values(colorPalettes)[0] || ['#4292c6']

  // Use v2ColorDistribution if we have a 9-color palette and numLayers <= 9
  if (fullPalette.length === 9 && numLayers <= 9 && v2ColorDistribution[numLayers]) {
    const indices = v2ColorDistribution[numLayers]
    return indices.map((i: number) => fullPalette[i])
  }

  // Fallback: take first numLayers colors, or repeat if needed
  return Array.from({ length: numLayers }, (_, i) => fullPalette[i % fullPalette.length])
}

/**
 * Calculates the max value across all series in a horizon chart dataset.
 * Used for consistent scaling across all bands.
 */
export const getHorizonMaxValue = (data: any[], seriesKeys: string[]): number => {
  if (!data || data.length === 0 || !seriesKeys || seriesKeys.length === 0) {
    return 0
  }

  let max = 0
  for (const row of data) {
    for (const key of seriesKeys) {
      const value = Math.abs(Number(row[key]) || 0)
      if (value > max) max = value
    }
  }
  return max
}
