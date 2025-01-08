import { colorPalettesChart as colorPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'
import { scaleOrdinal } from '@visx/scale'
import { ChartConfig } from '../types/ChartConfig'

const getColorScale = (config: ChartConfig, data: Object[]): ((value: string) => string) => {
  const { visualizationSubType, visualizationType, series, legend } = config

  const generatePalette = colorsCount => {
    if (!series?.length) return []
    const isSpecialType = ['Paired Bar', 'Deviation Bar'].includes(visualizationType)
    const chosenPalette = isSpecialType ? config.twoColor.palette : config.palette
    const allPalettes = { ...colorPalettes, ...twoColorPalette }
    let palette = config.customColors || allPalettes[chosenPalette]
    while (colorsCount > palette.length) palette = palette.concat(palette)
    return palette.slice(0, colorsCount)
  }

  let colorScale = scaleOrdinal<string, string>({
    domain: config?.runtime?.seriesLabelsAll,
    range: generatePalette(series.length),
    unknown: null
  })

  if (visualizationType === 'Deviation Bar') {
    const { targetLabel } = config.xAxis
    colorScale = scaleOrdinal<string, string>({
      domain: [`Below ${targetLabel}`, `Above ${targetLabel}`],
      range: generatePalette(2),
      unknown: null
    })
  }
  if (visualizationType === 'Bar' && visualizationSubType === 'regular' && series?.length === 1 && legend?.colorCode) {
    const set = new Set(data?.map(d => d[legend.colorCode]))
    const domain = Array.from(set)
    colorScale = scaleOrdinal<string, string>({
      domain: domain,
      range: generatePalette([...domain].length),
      unknown: null
    })
  }
  if (config.series.some(s => s.name)) {
    const set = new Set(series.map(d => d.name || d.dataKey))
    const domain = Array.from(set)

    colorScale = colorScale = scaleOrdinal<string, string>({
      domain: [...domain],
      range: generatePalette(series.length),
      unknown: null
    })
  }

  return colorScale
}

export default getColorScale
