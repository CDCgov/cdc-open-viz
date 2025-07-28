import colorPalettes from '@cdc/core/data/colorPalettes'
import chroma from 'chroma-js'
import { type MapConfig } from '@cdc/map/src/types/MapConfig'
import { colorDistributions } from './colorDistributions'

type LegendItem = {
  special: boolean
}

//  Applies color to a legend item based on its index and special classes.
export const applyColorToLegend = (legendItemIndex: number, config: MapConfig, result: LegendItem[] = []): string => {
  if (!config) throw new Error('Config is required')

  const { legend, customColors, general, color } = config
  const { geoType, palette } = general
  const specialClasses = legend?.specialClasses ?? []
  const colorPalette = customColors ?? colorPalettes[color] ?? colorPalettes['bluegreen']

  // Handle Region Maps need for a 10th color
  if (geoType === 'us-region' && colorPalette.length < 10 && colorPalette.length > 8) {
    const darkenedColor = chroma(colorPalette[palette.isReversed ? 0 : 8])
      .darken(0.75)
      .hex()
    palette.isReversed ? colorPalette.unshift(darkenedColor) : colorPalette.push(darkenedColor)
  }

  // Check if there are actually any special classes in the current result
  const actualSpecialClassesCount = result.filter(item => item.special).length

  const regularItemColorIndex = legendItemIndex - actualSpecialClassesCount

  // Handle special classes coloring
  if (result[legendItemIndex]?.special) {
    const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(specialClasses.length)
    return specialClassColors[legendItemIndex]
  }

  // Use qualitative color palettes directly
  if (color.includes('qualitative')) {
    const safeIndex = Math.max(0, Math.min(regularItemColorIndex, colorPalette.length - 1))
    return colorPalette[safeIndex]
  }

  // Determine color distribution - use actual special classes count for consistent coloring
  const legendItemCount =
    Math.max(result.length - actualSpecialClassesCount, 1) < 10
      ? Math.max(result.length - actualSpecialClassesCount, 1)
      : Object.keys(colorDistributions).length

  const colorDistributionArray = colorDistributions[legendItemCount] ?? []

  const rowDistributionIndex = colorDistributionArray[legendItemIndex - actualSpecialClassesCount]

  const colorValue = rowDistributionIndex ?? colorPalette[regularItemColorIndex] ?? colorPalette.at(-1)

  // Check if specificColor is a string(e.g., a valid color code)
  if (typeof colorValue === 'string' && config.legend?.type === 'category' && customColors) {
    return colorValue
  }

  // Otherwise, use specificColor as an index for mapColorPalette
  return colorPalette[colorValue]
}
