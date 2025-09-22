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

  // For paired/deviation bars, only use two-color palettes
  const palettesSource = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
    ? versionedTwoColorPalette
    : colorPalettes

  const allPalettes: Record<string, string[]> = { ...versionedTwoColorPalette, ...colorPalettes }

  // Migrate old palette name if needed
  const migratedPaletteName = configPalette ? configPalette : getFallbackColorPalette(config)

  let palette =
    config.general?.palette?.customColors ||
    palettesSource[migratePaletteWithMap(migratedPaletteName, paletteMigrationMap, false)] ||
    palettesSource[configPalette]

  // Fallback to a default palette if none found
  if (!palette) {
    console.warn(`Palette "${configPalette}" not found, falling back to default`)
    palette = Object.values(allPalettes)[0] || ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']
  }

  let numberOfKeys = config.runtime.seriesKeys.length

  // Apply enhanced color distribution (same logic as pie charts)
  const paletteVersion = getColorPaletteVersion(config)

  // Skip enhanced distribution if not v2, too many keys, or wrong palette length
  if (paletteVersion !== 2 || numberOfKeys > 9 || palette.length !== 9) {
    // Use existing logic for v1 palettes and other cases
    while (numberOfKeys > palette.length) {
      palette = palette.concat(palette)
    }
    palette = palette.slice(0, numberOfKeys)
  } else {
    // Apply enhanced distribution for v2 palettes
    const isSequential = configPalette && configPalette.includes('sequential')
    const isDivergent = configPalette && configPalette.includes('divergent')
    const isColorblindSafe = configPalette && (configPalette.includes('colorblindsafe') || configPalette.includes('qualitative_standard'))

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

  return scaleOrdinal({
    domain: config.runtime.seriesLabelsAll,
    range: palette,
    unknown: null
  })
}
