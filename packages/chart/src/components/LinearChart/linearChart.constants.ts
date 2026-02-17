/**
 * Visualization type constants for LinearChart
 * Centralizes string literals to prevent typos and enable type safety
 */

export const VISUALIZATION_TYPES = {
  AREA_CHART: 'Area Chart',
  BAR: 'Bar',
  BOX_PLOT: 'Box Plot',
  BUMP_CHART: 'Bump Chart',
  COMBO: 'Combo',
  DEVIATION_BAR: 'Deviation Bar',
  FORECASTING: 'Forecasting',
  FOREST_PLOT: 'Forest Plot',
  HORIZON_CHART: 'Horizon Chart',
  LINE: 'Line',
  PAIRED_BAR: 'Paired Bar',
  RADAR: 'Radar',
  SCATTER_PLOT: 'Scatter Plot',
  SPARK_LINE: 'Spark Line',
  WARMING_STRIPES: 'Warming Stripes'
} as const

export type VisualizationType = (typeof VISUALIZATION_TYPES)[keyof typeof VISUALIZATION_TYPES]

/**
 * Visualization types that don't display grid lines or standard axes
 */
export const TYPES_WITHOUT_GRID = [
  VISUALIZATION_TYPES.FOREST_PLOT,
  VISUALIZATION_TYPES.HORIZON_CHART,
  VISUALIZATION_TYPES.SPARK_LINE,
  VISUALIZATION_TYPES.WARMING_STRIPES
] as const

/**
 * Visualization types excluded from the generic LineChart rendering
 * These types have their own dedicated rendering logic
 */
export const LINE_CHART_EXCLUDED_TYPES = [
  VISUALIZATION_TYPES.AREA_CHART,
  VISUALIZATION_TYPES.BAR,
  VISUALIZATION_TYPES.BOX_PLOT,
  VISUALIZATION_TYPES.DEVIATION_BAR,
  VISUALIZATION_TYPES.FORECASTING,
  VISUALIZATION_TYPES.HORIZON_CHART,
  VISUALIZATION_TYPES.PAIRED_BAR,
  VISUALIZATION_TYPES.SCATTER_PLOT,
  VISUALIZATION_TYPES.WARMING_STRIPES
] as const

/**
 * Line-based visualization types (render with LineChart component)
 */
export const LINE_BASED_TYPES = [
  VISUALIZATION_TYPES.AREA_CHART,
  VISUALIZATION_TYPES.BUMP_CHART,
  VISUALIZATION_TYPES.COMBO,
  VISUALIZATION_TYPES.LINE
] as const

/**
 * Visualization types that support tooltip guides (hover lines)
 */
export const TYPES_WITH_TOOLTIP_GUIDES = [
  VISUALIZATION_TYPES.AREA_CHART,
  VISUALIZATION_TYPES.BAR,
  VISUALIZATION_TYPES.COMBO,
  VISUALIZATION_TYPES.LINE
] as const

/**
 * Check if a visualization type should show grid lines
 */
export const shouldShowGrid = (visualizationType: string): boolean => {
  return !TYPES_WITHOUT_GRID.includes(visualizationType as any)
}

/**
 * Check if a visualization type uses the generic LineChart renderer
 */
export const usesLineChartRenderer = (visualizationType: string): boolean => {
  return !LINE_CHART_EXCLUDED_TYPES.includes(visualizationType as any)
}
