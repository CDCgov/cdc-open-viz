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

  const regularItemColorIndex = legendItemIndex - specialClasses.length

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

  // Determine color distribution
  const legendItemCount =
    Math.max(result.length - specialClasses.length, 1) < 10
      ? Math.max(result.length - specialClasses.length, 1)
      : Object.keys(colorDistributions).length

  const colorDistributionArray = colorDistributions[legendItemCount] ?? []

  const rowDistributionIndex = colorDistributionArray[legendItemIndex - specialClasses.length]
  // Only increment if the original index points to "gray" and we have custom colors
  const finalDistributionIndex = rowDistributionIndex !== undefined ?
    (customColors && (rowDistributionIndex === 0 || rowDistributionIndex === 2 || rowDistributionIndex === 4) ?
      rowDistributionIndex + 1 : rowDistributionIndex) : undefined

  const colorValue =
    finalDistributionIndex ?? colorPalette[regularItemColorIndex] ?? colorPalette.at(-1)

  // Check if specificColor is a string (e.g., a valid color code)
  if (typeof colorValue === 'string') {
    return colorValue
  }

  // Otherwise, use specificColor as an index for mapColorPalette
  return colorPalette[colorValue]
}
