import cloneConfig from '../cloneConfig'

const ver = '4.26.6-2'

const specializedChartTypes = new Set(['HeatMap', 'Pie', 'Sankey', 'Box Plot', 'Forest Plot', 'Radar'])

const hasDefaultZeroRoundToPlace = value => value === 0 || (typeof value === 'string' && value.trim() === '0')

const getSeriesColumnNames = config =>
  new Set((config?.series || []).map(series => series?.dataKey).filter(Boolean).map(String))

const normalizeSeriesColumnRounding = config => {
  if (config?.type !== 'chart') return
  if (specializedChartTypes.has(config.visualizationType)) return

  const seriesColumnNames = getSeriesColumnNames(config)
  if (!seriesColumnNames.size || !config.columns) return

  Object.entries(config.columns).forEach(([columnKey, column]: [string, any]) => {
    if (!column || typeof column !== 'object') return

    const columnName = String(column.name || columnKey)
    if (!seriesColumnNames.has(columnName)) return
    if (hasDefaultZeroRoundToPlace(column.roundToPlace)) {
      delete column.roundToPlace
    }
  })
}

const normalizeConfig = config => {
  normalizeSeriesColumnRounding(config)

  if (config?.visualizations) {
    Object.values(config.visualizations).forEach(normalizeConfig)
  }

  if (Array.isArray(config?.multiDashboards)) {
    config.multiDashboards.forEach(normalizeConfig)
  }
}

const update_4_26_6_2 = config => {
  const newConfig = cloneConfig(config)
  normalizeConfig(newConfig)
  newConfig.version = ver
  return newConfig
}

export { normalizeSeriesColumnRounding }
export default update_4_26_6_2
