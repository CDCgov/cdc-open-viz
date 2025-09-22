import { twoColorPalette } from '@cdc/core/data/colorPalettes'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { scaleOrdinal } from '@visx/scale'
import { ChartConfig } from '../types/ChartConfig'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { v2ColorDistribution } from './chartColorDistributions'

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

  // Check if we should use v2 distribution logic for better contrast
  const paletteVersion = getColorPaletteVersion(config)
  const isSequentialOrDivergent =
    configPalette && (configPalette.includes('sequential') || configPalette.includes('divergent'))
  const useV2Distribution = paletteVersion === 2 && isSequentialOrDivergent && palette.length === 9 && numberOfKeys <= 9

  if (useV2Distribution && v2ColorDistribution[numberOfKeys]) {
    // Use strategic color distribution for v2 sequential palettes
    const distributionIndices = v2ColorDistribution[numberOfKeys]
    palette = distributionIndices.map(index => palette[index])
  } else {
    // Use existing logic for v1 palettes and other cases
    while (numberOfKeys > palette.length) {
      palette = palette.concat(palette)
    }
    palette = palette.slice(0, numberOfKeys)
  }

  return scaleOrdinal({
    domain: config.runtime.seriesLabelsAll,
    range: palette,
    unknown: null
  })
}
