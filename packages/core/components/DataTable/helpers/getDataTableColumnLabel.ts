import { getSeriesName } from '../../../helpers/getSeriesName'
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

export const getDataTableColumnLabel = (column: string, config: TableConfig) => {
  const matchingConfiguredColumn = getMatchingConfiguredColumn(column, config)
  const userDefinedSeries = config.series?.find(series => series.dataKey === column)
  const customColumnLabel =
    matchingConfiguredColumn?.label && matchingConfiguredColumn.label !== column
      ? matchingConfiguredColumn.label
      : undefined

  if ((config.visualizationType === 'HeatMap' || userDefinedSeries) && customColumnLabel) {
    return customColumnLabel
  }

  const seriesName = getSeriesName(column, config)
  if (seriesName !== column) return seriesName

  if (config.visualizationType === 'Pie' && column === config.yAxis?.dataKey && config.yAxis?.label) {
    return config.yAxis.label
  }

  const columnIsDataKey = column === config.xAxis?.dataKey
  const indexLabel = config.table?.indexLabel
  return columnIsDataKey && indexLabel ? indexLabel : matchingConfiguredColumn?.label || column
}
