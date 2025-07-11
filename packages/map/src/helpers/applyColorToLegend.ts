import colorPalettes from '@cdc/core/data/colorPalettes'
import chroma from 'chroma-js'
import { type MapConfig } from '@cdc/map/src/types/MapConfig'
import { colorDistributions } from './colorDistributions'

type LegendItem = {
  special: boolean
}

const SPECIAL_CLASS_COLORS = ['#D4D4D4', '#939393']
const DEFAULT_COLOR_PALETTE = 'bluegreen'
const MAX_LEGEND_ITEMS = 10
const REGION_MAP_COLOR_DARKEN_FACTOR = 0.75

/**
 * Extends a color palette for US region maps by adding a darkened color
 */
const handleColorPaletteForRegionMap = (
  colorPalette: string[],
  palette: { isReversed: boolean }
): void => {
  const sourceIndex = palette.isReversed ? 0 : 8
  const darkenedColor = chroma(colorPalette[sourceIndex])
    .darken(REGION_MAP_COLOR_DARKEN_FACTOR)
    .hex()

  if (palette.isReversed) {
    colorPalette.unshift(darkenedColor)
  } else {
    colorPalette.push(darkenedColor)
  }
}

/**
 * Generates colors for special classes using a grayscale gradient
 */
const getSpecialClassColor = (index: number, specialClassCount: number): string => {
  const specialClassColors = chroma.scale(SPECIAL_CLASS_COLORS).colors(specialClassCount)
  return specialClassColors[index]
}

/**
 * Gets color for qualitative palettes with safe index bounds
 */
const getQualitativeColor = (colorIndex: number, colorPalette: string[]): string => {
  const safeIndex = Math.max(0, Math.min(colorIndex, colorPalette.length - 1))
  return colorPalette[safeIndex]
}

/**
 * Calculates the effective legend item count for color distribution
 */
const calculateLegendItemCount = (totalItems: number, specialClassCount: number): number => {
  const regularItemCount = Math.max(totalItems - specialClassCount, 1)
  return regularItemCount < MAX_LEGEND_ITEMS
    ? regularItemCount
    : Object.keys(colorDistributions).length
}

/**
 * Gets color using distribution-based indexing
 */
const getDistributionBasedColor = (
  legendItemIndex: number,
  specialClassCount: number,
  legendItemCount: number,
  colorPalette: string[]
): string | undefined => {
  const colorDistributionArray = colorDistributions[legendItemCount] ?? []
  const distributionIndex = colorDistributionArray[legendItemIndex - specialClassCount]
  const regularItemColorIndex = legendItemIndex - specialClassCount

  // If regularItemColorIndex is negative, return undefined (like original behavior)
  if (regularItemColorIndex < 0) {
    return undefined
  }

  // Use distribution index if available, otherwise use regular index
  const colorIndex = distributionIndex ?? regularItemColorIndex

  return colorPalette[colorIndex] ?? colorPalette[colorPalette.length - 1]
}

/**
 * Applies color to a legend item based on its index and special classes.
 */
export const applyColorToLegend = (
  legendItemIndex: number,
  config: MapConfig,
  result: LegendItem[] = []
): string | undefined => {
  if (!config) {
    throw new Error('Config is required')
  }

  const { legend, customColors, general, color } = config
  const { geoType, palette } = general
  const specialClasses = legend?.specialClasses ?? []
  const colorPalette = customColors ?? colorPalettes[color] ?? colorPalettes[DEFAULT_COLOR_PALETTE]

  // Handle Region Maps need for a 10th color
  if (geoType === 'us-region' &&
    colorPalette.length < MAX_LEGEND_ITEMS &&
    colorPalette.length > 8) {
    handleColorPaletteForRegionMap(colorPalette, palette)
  }

  const regularItemColorIndex = legendItemIndex - specialClasses.length

  // Handle special classes coloring
  if (result[legendItemIndex]?.special) {
    return getSpecialClassColor(legendItemIndex, specialClasses.length)
  }

  // Use qualitative color palettes directly
  if (color.includes('qualitative')) {
    return getQualitativeColor(regularItemColorIndex, colorPalette)
  }

  // Handle distribution-based coloring
  const legendItemCount = calculateLegendItemCount(result.length, specialClasses.length)

  return getDistributionBasedColor(
    legendItemIndex,
    specialClasses.length,
    legendItemCount,
    colorPalette
  )
}
