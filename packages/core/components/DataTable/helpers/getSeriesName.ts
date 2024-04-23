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
  const columnIsDataKey = column === config.xAxis?.dataKey
  return columnIsDataKey ? config.table.indexLabel : getLabel(column, config)
}
