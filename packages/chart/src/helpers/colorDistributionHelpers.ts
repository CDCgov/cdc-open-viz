import { type ChartConfig, type VisualizationType } from '../types/ChartConfig'

const V2_COLORBLIND_DISTRIBUTION_CHART_TYPES = new Set<VisualizationType>([
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

export const supportsV2ColorblindDistribution = (config: ChartConfig): boolean =>
  V2_COLORBLIND_DISTRIBUTION_CHART_TYPES.has(config.visualizationType) &&
  !(config.visualizationType === 'Bar' && Boolean(config.legend?.colorCode))
