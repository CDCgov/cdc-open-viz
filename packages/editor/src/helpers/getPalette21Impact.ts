import isEqual from 'lodash/isEqual'

import { chartColorPalettes, mapColorPalettes } from '@cdc/core/data/colorPalettes'
import { colorblindColorDistribution, v2ColorDistribution } from '@cdc/core/helpers/palettes/colorDistributions'
import { getV21ChartDistributionColors } from '@cdc/chart/src/helpers/getV21ChartDistributionColors'
import { applyColorToLegend } from '@cdc/map/src/helpers/applyColorToLegend'

export type Palette21Impact = 'changes' | 'same' | 'unknown'

type Config = Record<string, any>

const hasColors = (value: unknown) => Array.isArray(value) && value.length > 0

const usesCustomColors = (config: Config) => {
  const palette = config.general?.palette
  return hasColors(palette?.customColors) || hasColors(palette?.customColorsOrdered)
}

const getStableChartColorCount = (config: Config): number | undefined => {
  const series = Array.isArray(config.series) ? config.series : []
  const isDataDriven =
    ['Pie', 'Radar'].includes(config.visualizationType) || series.some(seriesItem => seriesItem?.dynamicCategory)

  if (isDataDriven) return undefined
  if (series.length) return series.length

  return undefined
}

const getChartPalette21Impact = (config: Config): Palette21Impact => {
  if (usesCustomColors(config)) return 'same'

  const paletteName = config.general?.palette?.name
  if (!config.visualizationType || !paletteName) return 'unknown'
  if (paletteName.includes('divergent')) return 'same'

  const palette = paletteName ? chartColorPalettes.v2?.[paletteName] : undefined
  if (!palette) return 'unknown'

  const v21Config = {
    ...config,
    general: {
      ...config.general,
      palette: { ...config.general?.palette, version: '2.1' }
    }
  }

  // A one-color probe tells us whether this chart type and palette family use
  // the 2.1 distribution at all. If not, changing the version cannot affect it.
  if (!getV21ChartDistributionColors(v21Config as any, palette, 1)) return 'same'

  const colorCount = getStableChartColorCount(config)
  if (colorCount === undefined) return 'unknown'

  const v21Colors = getV21ChartDistributionColors(v21Config as any, palette, colorCount)
  if (!v21Colors) return 'same'

  const legacyDistribution = paletteName.includes('qualitative_standard')
    ? colorblindColorDistribution[colorCount]
    : v2ColorDistribution[colorCount]
  if (!legacyDistribution) return 'same'

  const legacyColors = legacyDistribution.map(index => palette[index])
  return isEqual(legacyColors, v21Colors) ? 'same' : 'changes'
}

const getStableMapColorCount = (config: Config): number | undefined => {
  if (config.legend?.type === 'manual' && Array.isArray(config.legend.breakpoints)) {
    return config.legend.breakpoints.length + 1
  }

  if (['equalnumber', 'equalinterval'].includes(config.legend?.type)) {
    return typeof config.legend.numberOfItems === 'number' ? config.legend.numberOfItems : undefined
  }

  return undefined
}

const getMapPalette21Impact = (config: Config): Palette21Impact => {
  const palette = config.general?.palette
  if (hasColors(palette?.customColors) || Array.isArray(palette?.customColorsOrdered)) return 'same'

  const paletteName = palette?.name || config.color
  if (!paletteName) return 'unknown'
  if (paletteName.includes('qualitative') && !paletteName.includes('qualitative_standard')) return 'same'
  if (!mapColorPalettes.v2?.[paletteName]) return 'unknown'

  const colorCount = getStableMapColorCount(config)
  if (colorCount === undefined || config.general?.geoType === 'us-region') return 'unknown'
  if (colorCount <= 0) return 'same'

  const items = Array.from({ length: colorCount }, (_, index) => ({ special: false, value: index + 1 }))
  const colorsForVersion = (version: '2.0' | '2.1') => {
    const versionedConfig = {
      ...config,
      general: {
        ...config.general,
        palette: { ...palette, version }
      }
    }
    return items.map((_, index) => applyColorToLegend(index, versionedConfig as any, items as any))
  }

  return isEqual(colorsForVersion('2.0'), colorsForVersion('2.1')) ? 'same' : 'changes'
}

export const getPalette21Impact = (config: Config): Palette21Impact => {
  if (config.general?.palette?.version !== '2.0') return 'same'
  if (config.type === 'chart') return getChartPalette21Impact(config)
  if (config.type === 'map') return getMapPalette21Impact(config)
  return 'same'
}
