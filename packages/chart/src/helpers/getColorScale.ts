import { twoColorPalette } from '@cdc/core/data/colorPalettes'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { getColorPaletteMajorVersion } from '@cdc/core/helpers/getColorPaletteMajorVersion'
import { scaleOrdinal } from '@visx/scale'
import { ChartConfig } from '../types/ChartConfig'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import {
  v2ColorDistribution,
  divergentColorDistribution,
  colorblindColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'
import { isValidPaletteColor } from '@cdc/core/helpers/palettes/colorValidation'
import { applySeriesColorAssignmentsToRange } from './colorAssignmentHelpers'
import { getV21ChartDistributionColors } from './getV21ChartDistributionColors'

const INVALID_CUSTOM_COLOR_FALLBACK = '#000000'

const normalizeCustomColors = (colors: unknown): string[] => {
  if (!Array.isArray(colors) || colors.length === 0) return []

  return colors.map(color => (isValidPaletteColor(color) ? color.trim() : INVALID_CUSTOM_COLOR_FALLBACK))
}

export const getColorScale = (config: ChartConfig): ((value: string) => string) => {
  const configPalette = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
    ? config.twoColor.palette
    : config.general?.palette?.name
  const colorPalettes = filterChartColorPalettes(config)

  // Get the correct version of two-color palettes
  const version = getColorPaletteMajorVersion(config)
  const versionKey = `v${version}`
  const versionedTwoColorPalette = twoColorPalette[versionKey] || twoColorPalette.v2

  // For paired/deviation bars, only use two-color palettes
  const palettesSource = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
    ? versionedTwoColorPalette
    : colorPalettes

  // Migrate old palette name if needed
  const migratedPaletteName = configPalette ? configPalette : getFallbackColorPalette(config)
  let namedPalette =
    palettesSource[migratePaletteWithMap(migratedPaletteName, paletteMigrationMap, false)] ||
    palettesSource[configPalette]

  // Use a visible sentinel when saved palette config cannot resolve.
  if (!namedPalette) {
    console.warn(`Palette "${configPalette}" not found, falling back to black`)
    namedPalette = [INVALID_CUSTOM_COLOR_FALLBACK]
  }

  const domain = config.runtime.seriesLabelsAll

  const customColorsOrdered = normalizeCustomColors(config.general?.palette?.customColorsOrdered)

  // Check for customColorsOrdered first (direct 1-to-1 mapping, no distribution needed)
  if (customColorsOrdered.length > 0) {
    const range = applySeriesColorAssignmentsToRange(config, domain, customColorsOrdered)
    return scaleOrdinal({
      domain,
      range,
      unknown: null
    })
  }

  const customColors = normalizeCustomColors(config.general?.palette?.customColors)
  const isUsingCustomColors = customColors.length > 0
  let palette = isUsingCustomColors ? customColors : namedPalette

  let numberOfKeys = config.runtime.seriesKeys.length

  // Apply enhanced color distribution (same logic as pie charts)
  const paletteVersion = getColorPaletteMajorVersion(config)
  const v21DistributionColors = getV21ChartDistributionColors(config, palette, numberOfKeys)

  if (v21DistributionColors) {
    palette = v21DistributionColors
  } else if (isUsingCustomColors || paletteVersion !== 2 || numberOfKeys > 9 || palette.length !== 9) {
    // Use existing logic for v1 palettes and other cases
    while (numberOfKeys > palette.length) {
      palette = palette.concat(palette)
    }
    palette = palette.slice(0, numberOfKeys)
  } else {
    // Apply enhanced distribution for v2 palettes
    const isSequential = configPalette && configPalette.includes('sequential')
    const isDivergent = configPalette && configPalette.includes('divergent')
    const isColorblindSafe =
      configPalette && (configPalette.includes('colorblindsafe') || configPalette.includes('qualitative_standard'))
    // Determine which distribution to use based on palette type
    let distributionMap = null
    if (isDivergent) {
      distributionMap = divergentColorDistribution
    } else if (isColorblindSafe) {
      distributionMap = colorblindColorDistribution
    } else if (isSequential) {
      distributionMap = v2ColorDistribution
    }

    if (distributionMap && distributionMap[numberOfKeys]) {
      const distributionIndices = distributionMap[numberOfKeys]
      palette = distributionIndices.map((index: number) => palette[index])
    } else {
      palette = palette.slice(0, numberOfKeys)
    }
  }

  const range = applySeriesColorAssignmentsToRange(config, domain, palette)

  return scaleOrdinal({
    domain,
    range,
    unknown: null
  })
}
