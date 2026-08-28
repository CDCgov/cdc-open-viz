import { type ChartConfig, type VisualizationType } from '../types/ChartConfig'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import {
  chartV2ColorDistribution,
  divergentColorDistribution,
  qualitativeStandardColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'

const V2_COLOR_DISTRIBUTION_CHART_TYPES = new Set<VisualizationType>([
  'Area Chart',
  'Bar',
  'Box Plot',
  'Bump Chart',
  'Combo',
  'Line',
  'Pie',
  'Radar',
  'Scatter Plot',
  'Spark Line'
])

export const getV2ChartDistributionColors = (
  config: ChartConfig,
  palette: string[],
  itemCount: number
): string[] | undefined => {
  const paletteName = config.general?.palette?.name || config.palette || ''
  const hasCustomColors =
    Boolean(config.general?.palette?.customColors?.length) ||
    Boolean(config.general?.palette?.customColorsOrdered?.length)

  if (
    config.general?.palette?.distributionVersion !== '2.0' ||
    getColorPaletteVersion(config) !== 2 ||
    !V2_COLOR_DISTRIBUTION_CHART_TYPES.has(config.visualizationType) ||
    hasCustomColors ||
    palette.length !== 9
  ) {
    return undefined
  }

  let distributionMap: Record<number, number[]> | undefined
  if (paletteName.includes('sequential')) {
    distributionMap = chartV2ColorDistribution
  } else if (paletteName.includes('divergent')) {
    distributionMap = divergentColorDistribution
  } else if (paletteName.includes('qualitative_standard')) {
    distributionMap = qualitativeStandardColorDistribution
  }

  const distributionIndices = distributionMap?.[itemCount]
  if (!distributionIndices) return undefined

  const orientedIndices = paletteName.endsWith('reverse')
    ? [...distributionIndices].reverse().map(index => palette.length - 1 - index)
    : distributionIndices

  return orientedIndices.map(index => palette[index])
}

export const canEditColorDistributionVersion = (config: ChartConfig): boolean => {
  const hasCustomColors =
    Boolean(config.general?.palette?.customColors?.length) ||
    Boolean(config.general?.palette?.customColorsOrdered?.length)

  return (
    V2_COLOR_DISTRIBUTION_CHART_TYPES.has(config.visualizationType) &&
    getColorPaletteVersion(config) === 2 &&
    !hasCustomColors
  )
}
