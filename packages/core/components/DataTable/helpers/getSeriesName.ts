import { TableConfig } from '../types/TableConfig'

const getMatchingConfiguredColumn = (name: string, config: TableConfig) => {
  const columns = Object.entries(config.columns || {})
  const matchingColumn = columns.find(([columnKey, column]) => {
    const hasMatchingName = column.name === name
    const hasMatchingKey = !column.name && columnKey === name

    return hasMatchingName || hasMatchingKey
  })

  return matchingColumn?.[1]
}

const getLabel = (name: string, config: TableConfig) => {
  const matchingConfiguredColumn = getMatchingConfiguredColumn(name, config)
  if (matchingConfiguredColumn?.label) {
    return matchingConfiguredColumn.label
  }
  return name
}

export const getSeriesName = (column: string, config: TableConfig) => {
  const matchingConfiguredColumn = getMatchingConfiguredColumn(column, config)
  const userDefinedSeries = config.series?.find(series => series.dataKey === column)
  const customColumnLabel =
    matchingConfiguredColumn?.label && matchingConfiguredColumn.label !== column
      ? matchingConfiguredColumn.label
      : undefined

  // Series column labels own table-header text without renaming the legend.
  if ((config.visualizationType === 'HeatMap' || userDefinedSeries) && customColumnLabel) {
    return customColumnLabel
  }

  // If a user sets the name on a series use that.
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
