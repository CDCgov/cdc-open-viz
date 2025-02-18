import { colorPalettesChart as colorPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'
import { scaleOrdinal } from '@visx/scale'
import { ChartConfig } from '../types/ChartConfig'

export const getColorScale = (config: ChartConfig): ((value: string) => string) => {
  const configPalette = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
    ? config.twoColor.palette
    : config.palette
  const allPalettes: Record<string, string[]> = { ...colorPalettes, ...twoColorPalette }
  let palette = config.customColors || allPalettes[configPalette]
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
