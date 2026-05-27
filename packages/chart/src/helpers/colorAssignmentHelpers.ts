import { type ChartConfig, type VisualizationType } from '../types/ChartConfig'

export type SeriesColorAssignment = {
  key: string
  color: string
}

export type SeriesColorAssignmentItem = {
  key: string
  label: string
}

export const SERIES_COLOR_ASSIGNMENT_TYPES: VisualizationType[] = ['Line', 'Bar', 'Combo', 'Area Chart', 'Scatter Plot']

export const hasDynamicCategorySeries = (config: ChartConfig): boolean =>
  Array.isArray(config.series) && config.series.some(series => Boolean(series?.dynamicCategory))

export const isColorByCategoryBarChart = (config: ChartConfig): boolean =>
  config.visualizationType === 'Bar' &&
  config.visualizationSubType === 'regular' &&
  Boolean(config.legend?.colorCode) &&
  (config.series?.length || 0) === 1

export const supportsSeriesColorAssignments = (config: ChartConfig): boolean =>
  SERIES_COLOR_ASSIGNMENT_TYPES.includes(config.visualizationType) &&
  !hasDynamicCategorySeries(config) &&
  !isColorByCategoryBarChart(config)

export const isSeriesColorAssignmentModeByValue = (config: ChartConfig): boolean =>
  config.general?.palette?.colorAssignmentMode === 'by-value'

export const getSeriesColorAssignments = (config: ChartConfig): SeriesColorAssignment[] =>
  Array.isArray(config.general?.palette?.colorAssignments) ? config.general.palette.colorAssignments : []

export const hasSeriesColorAssignmentOverrides = (config: ChartConfig): boolean =>
  supportsSeriesColorAssignments(config) &&
  isSeriesColorAssignmentModeByValue(config) &&
  getSeriesColorAssignments(config).length > 0

export const getSeriesDisplayLabel = (config: ChartConfig, key: string): string => {
  const series = config.series?.find(item => item?.dataKey === key)
  return String(config.runtime?.seriesLabels?.[key] || series?.name || (series as any)?.label || key)
}

export const getSeriesColorAssignmentItems = (config: ChartConfig): SeriesColorAssignmentItem[] => {
  if (!supportsSeriesColorAssignments(config) || !Array.isArray(config.series)) return []

  return config.series
    .filter(series => series?.dataKey && !series.dynamicCategory)
    .map(series => ({
      key: series.dataKey,
      label: getSeriesDisplayLabel(config, series.dataKey)
    }))
}

export const getSeriesKeyByColorScaleLabel = (config: ChartConfig): Map<string, string> => {
  const labelToKey = new Map<string, string>()
  const runtimeKeys = Array.isArray(config.runtime?.seriesKeys) ? config.runtime.seriesKeys : []

  runtimeKeys.forEach(key => {
    labelToKey.set(String(key), key)
    labelToKey.set(getSeriesDisplayLabel(config, key), key)
  })

  getSeriesColorAssignmentItems(config).forEach(({ key, label }) => {
    labelToKey.set(String(key), key)
    labelToKey.set(label, key)
  })

  return labelToKey
}

export const applySeriesColorAssignmentsToRange = (
  config: ChartConfig,
  domain: string[] = [],
  range: string[] = []
): string[] => {
  if (!supportsSeriesColorAssignments(config) || !isSeriesColorAssignmentModeByValue(config)) return range

  const assignmentMap = new Map(
    getSeriesColorAssignments(config)
      .filter(assignment => assignment?.key && assignment?.color)
      .map(assignment => [assignment.key, assignment.color])
  )

  if (!assignmentMap.size || !range.length) return range

  const labelToKey = getSeriesKeyByColorScaleLabel(config)

  return domain.map((label, index) => {
    const key = labelToKey.get(String(label))
    const assignedColor = key ? assignmentMap.get(key) : undefined
    return assignedColor || range[index % range.length]
  })
}
