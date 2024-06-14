import { colorPalettesChart as colorPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'
import { scaleOrdinal } from '@visx/scale'
import { useContext } from 'react'
import ConfigContext from '../ConfigContext'

const useColorScale = () => {
  const { config, data } = useContext(ConfigContext)
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

  let colorScale = scaleOrdinal({
    domain: config?.runtime?.seriesLabelsAll,
    range: generatePalette(series.length)
  })

  if (visualizationType === 'Deviation Bar') {
    const { targetLabel } = config.xAxis
    colorScale = scaleOrdinal({
      domain: [`Below ${targetLabel}`, `Above ${targetLabel}`],
      range: generatePalette(2)
    })
  }
  if (visualizationType === 'Bar' && visualizationSubType === 'regular' && series?.length === 1 && legend?.colorCode) {
    const set = new Set(data?.map(d => d[legend.colorCode]))
    colorScale = scaleOrdinal({
      domain: [...set],
      range: generatePalette([...set].length)
    })
  }
  if (config.series.some(s => s.name)) {
    const set = new Set(series.map(d => d.name || d.dataKey))
    colorScale = colorScale = scaleOrdinal({
      domain: [...set],
      range: generatePalette(series.length)
    })
  }

  return { colorScale }
}

export default useColorScale
