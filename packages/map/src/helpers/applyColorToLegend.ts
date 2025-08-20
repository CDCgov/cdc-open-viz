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

  const { legend, customColors, general } = config
  const { geoType, palette } = general
  const { name: color } = palette
  const specialClasses = legend?.specialClasses ?? []
  const mapColorPalette = customColors ?? colorPalettes[color] ?? colorPalettes['bluegreen']

  // Handle Region Maps need for a 10th color
  if (geoType === 'us-region' && mapColorPalette.length < 10 && mapColorPalette.length > 8) {
    const newColor = chroma(mapColorPalette[palette.isReversed ? 0 : 8])
      .darken(0.75)
      .hex()
    palette.isReversed ? mapColorPalette.unshift(newColor) : mapColorPalette.push(newColor)
  }

  const colorIdx = legendIdx - specialClasses.length

  // Handle special classes coloring
  if (result[legendIdx]?.special) {
    const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(specialClasses.length)
    return specialClassColors[legendIdx]
  }

  // Use qualitative color palettes directly
  if (color.includes('qualitative')) return mapColorPalette[colorIdx]

  // Determine color distribution
  const amt =
    Math.max(result.length - specialClasses.length, 1) < 10
      ? Math.max(result.length - specialClasses.length, 1)
      : Object.keys(colorDistributions).length
  const distributionArray = colorDistributions[amt] ?? []

  const specificColor =
    distributionArray[legendIdx - specialClasses.length] ?? mapColorPalette[colorIdx] ?? mapColorPalette.at(-1)

  return mapColorPalette[specificColor]
}
