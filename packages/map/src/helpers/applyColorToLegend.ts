import colorPalettes from '@cdc/core/data/colorPalettes'
import chroma from 'chroma-js'
import { type MapConfig } from '@cdc/map/src/types/MapConfig'
import { colorDistributions } from './colorDistributions'

type LegendItem = {
  special: boolean
}

/**
 * applyColorToLegend
 * @param legendIdx legend item index
 * @param config chart config
 * @param result hash of legend items
 * @returns string - the corresponding color for the legend item
 */
export const applyColorToLegend = (legendIdx: number, config: MapConfig, result: LegendItem[] = []): string => {
  if (!config) throw new Error('Config is required')

  const { legend, customColors, general, color } = config
  const { geoType, palette } = general
  const specialClasses = legend?.specialClasses ?? []
  const mapColorPalette = customColors ?? colorPalettes[color] ?? colorPalettes['bluegreen']

  // Handle Region Maps need for a 10th color
  if (geoType === 'us-region' && mapColorPalette.length < 10 && mapColorPalette.length > 8) {
    const newColor = chroma(mapColorPalette[palette.isReversed ? 0 : 8])
      .darken(0.75)
      .hex()
    palette.isReversed ? mapColorPalette.unshift(newColor) : mapColorPalette.push(newColor)
  }

  // Count actual special classes in the current legend items (after filtering)
  const actualSpecialClassCount = result.filter(item => item.special).length
  const colorIdx = legendIdx - actualSpecialClassCount

  // Handle Region Maps need for a 10th color
  if (geoType === 'us-region' && mapColorPalette.length < 10 && mapColorPalette.length > 8) {
    const newColor = chroma(mapColorPalette[palette.isReversed ? 0 : 8])
      .darken(0.75)
      .hex()
    palette.isReversed ? mapColorPalette.unshift(newColor) : mapColorPalette.push(newColor)
  }

  // Handle special classes coloring
  if (result[legendIdx]?.special) {
    // Use the actual count of special classes in the legend, not the config count
    const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(Math.max(actualSpecialClassCount, 1))
    // Find the index among special classes only
    const specialClassIndex = result.slice(0, legendIdx + 1).filter(item => item.special).length - 1
    return specialClassColors[specialClassIndex] || specialClassColors[0]
  }

  // Use qualitative color palettes directly
  if (color.includes('qualitative')) return mapColorPalette[colorIdx]

  // Determine color distribution
  const amt =
    Math.max(result.length - actualSpecialClassCount, 1) < 10
      ? Math.max(result.length - actualSpecialClassCount, 1)
      : Object.keys(colorDistributions).length
  const distributionArray = colorDistributions[amt] ?? []

  const specificColor =
    distributionArray[legendIdx - actualSpecialClassCount] ?? mapColorPalette[colorIdx] ?? mapColorPalette.at(-1)

  return mapColorPalette[specificColor]
}
