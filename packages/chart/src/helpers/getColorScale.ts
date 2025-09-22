import { twoColorPalette } from '@cdc/core/data/colorPalettes'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { scaleOrdinal } from '@visx/scale'
import { ChartConfig } from '../types/ChartConfig'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { v2ColorDistribution, divergentColorDistribution, colorblindColorDistribution } from './chartColorDistributions'

export const getColorScale = (config: ChartConfig): ((value: string) => string) => {
  const configPalette = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
    ? config.twoColor.palette
    : config.general?.palette?.name
  const colorPalettes = filterChartColorPalettes(config)

  // Get the correct version of two-color palettes
  const version = getColorPaletteVersion(config)
  const versionKey = `v${version}`
  const versionedTwoColorPalette = twoColorPalette[versionKey] || twoColorPalette.v2

  const allPalettes: Record<string, string[]> = { ...versionedTwoColorPalette, ...colorPalettes }

  // Migrate old palette name if needed
  const migratedPaletteName = configPalette ? configPalette : getFallbackColorPalette(config)

  let palette =
    config.general?.palette?.customColors ||
    allPalettes[migratePaletteWithMap(migratedPaletteName, paletteMigrationMap, false)] ||
    allPalettes[configPalette]

  // Fallback to a default palette if none found
  if (!palette) {
    console.warn(`Palette "${configPalette}" not found, falling back to default`)
    palette = Object.values(allPalettes)[0] || ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']
  }

  let numberOfKeys = config.runtime.seriesKeys.length

  // Apply enhanced color distribution like pie charts for better contrast
  const paletteVersion = getColorPaletteVersion(config)
  const useEnhancedDistribution = paletteVersion === 2 && numberOfKeys <= 9 && palette.length === 9

  if (useEnhancedDistribution) {
    // Determine which distribution to use based on palette type (same logic as pie charts)
    const isSequential = configPalette && configPalette.includes('sequential')
    const isDivergent = configPalette && configPalette.includes('divergent')
    const isColorblindSafe =
      configPalette && (configPalette.includes('colorblindsafe') || configPalette.includes('qualitative_standard'))

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
  } else {
    // Use existing logic for v1 palettes and other cases
    while (numberOfKeys > palette.length) {
      palette = palette.concat(palette)
    }
    palette = palette.slice(0, numberOfKeys)
  }

  // Apply reverse if configured
  if (config.general?.palette?.isReversed) {
    // Get the full original palette and reverse it, then take what we need
    const originalPalette = config.general?.palette?.customColors ||
      allPalettes[migratePaletteWithMap(migratedPaletteName, paletteMigrationMap, false)] ||
      allPalettes[configPalette] || ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']

    const reversedPalette = [...originalPalette].reverse()

    // Apply the same enhanced distribution logic to the reversed palette
    if (useEnhancedDistribution) {
      const isSequential = configPalette && configPalette.includes('sequential')
      const isDivergent = configPalette && configPalette.includes('divergent')
      const isColorblindSafe =
        configPalette && (configPalette.includes('colorblindsafe') || configPalette.includes('qualitative_standard'))

      let distributionMap = null
      if (isDivergent) {
        distributionMap = divergentColorDistribution
      } else if (isColorblindSafe) {
        distributionMap = colorblindColorDistribution
      } else if (isSequential) {
        distributionMap = v2ColorDistribution
      }

      if (distributionMap && distributionMap[numberOfKeys]) {
        let distributionIndices = distributionMap[numberOfKeys]

        // For single series when reversed, use the first color instead of middle for better visual contrast
        if (numberOfKeys === 1 && (isSequential || isDivergent)) {
          distributionIndices = [0]
        }

        palette = distributionIndices.map((index: number) => reversedPalette[index])
      } else {
        palette = reversedPalette.slice(0, numberOfKeys)
      }
    } else {
      let extendedPalette = [...reversedPalette]
      while (numberOfKeys > extendedPalette.length) {
        extendedPalette = extendedPalette.concat(reversedPalette)
      }
      palette = extendedPalette.slice(0, numberOfKeys)
    }
  }

  return scaleOrdinal({
    domain: config.runtime.seriesLabelsAll,
    range: palette,
    unknown: null
  })
}
