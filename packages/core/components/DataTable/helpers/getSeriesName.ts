import { TableConfig } from '../types/TableConfig'

const getLabel = (name: string, config: TableConfig) => {
  const columns = Object.values(config.columns || {})
  const matchingConfiguredColumn = columns.find(col => col.name === name)
  if (matchingConfiguredColumn?.label) {
    return matchingConfiguredColumn.label
  }
  return name
}

export const getSeriesName = (column: string, config: TableConfig) => {
  // If a user sets the name on a series use that.
  const userDefinedSeries = config.series?.find(series => series.dataKey === column)
  if (userDefinedSeries?.name) {
    return userDefinedSeries.name
  }
  if (config.runtimeSeriesLabels && config.runtimeSeriesLabels[column]) return config.runtimeSeriesLabels[column]

  // For pie charts, use yAxis.label if the column is the yAxis data key
  if (config.visualizationType === 'Pie' && column === config.yAxis?.dataKey && config.yAxis?.label) {
    return config.yAxis.label
  }

  const columnIsDataKey = column === config.xAxis?.dataKey
  const indexLabel = config.table?.indexLabel
  return columnIsDataKey && indexLabel ? indexLabel : getLabel(column, config)
}
