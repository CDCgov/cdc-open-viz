import { twoColorPalette } from '@cdc/core/data/colorPalettes'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { scaleOrdinal } from '@visx/scale'
import { ChartConfig } from '../types/ChartConfig'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'

export const getColorScale = (config: ChartConfig): ((value: string) => string) => {
  const configPalette = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
    ? config.twoColor.palette
    : config.general?.palette?.name
  const colorPalettes = filterChartColorPalettes(config)
  
  // Get the correct version of two-color palettes
  const version = getColorPaletteVersion(config)
  const versionKey = `v${version}`
  const versionedTwoColorPalette = twoColorPalette[versionKey] || twoColorPalette.v2
  
  const allPalettes: Record<string, string[]> = { ...colorPalettes, ...versionedTwoColorPalette }

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

  while (numberOfKeys > palette.length) {
    palette = palette.concat(palette)
  }

  palette = palette.slice(0, numberOfKeys)

  return scaleOrdinal({
    domain: config.runtime.seriesLabelsAll,
    range: palette,
    unknown: null
  })
}
