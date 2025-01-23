import { colorPalettesChart as colorPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'
import { scaleOrdinal } from '@visx/scale'
import { ChartConfig } from '../types/ChartConfig'

export const getColorScale = (config: ChartConfig) => {
  const configPalette = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
    ? config.twoColor.palette
    : config.palette

  const allPalettes: Record<string, string[]> = { ...colorPalettes, ...twoColorPalette }
  let palette = config.customColors || allPalettes[configPalette]
  const numberOfKeys = config.runtime.seriesKeys.length

  // Extend palette to match the number of keys
  while (palette.length < numberOfKeys) {
    palette = [...palette, ...palette] // Concatenate to extend
  }
  palette = palette.slice(0, numberOfKeys) // Ensure exact size

  // Return the scaleOrdinal object
  return scaleOrdinal({
    domain: config.runtime.seriesLabelsAll,
    range: palette,
    unknown: null
  })
}
