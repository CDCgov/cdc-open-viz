import { TableConfig } from '../types/TableConfig'

export const getDataSeriesColumns = (config: TableConfig, isVertical: boolean, runtimeData: Object[]): string[] => {
  if (config.table.customTableConfig) return runtimeData[0] ? Object.keys(runtimeData[0]) : []
  if (config.type === 'table') {
    const excludeColumns = Object.values(config.columns)
      .filter(column => column.dataTable === false)
      .map(column => column.name)
    return Object.keys(runtimeData[0]).filter(columnName => !excludeColumns.includes(columnName))
  }
  let tmpSeriesColumns
  if (config.visualizationType !== 'Pie') {
    tmpSeriesColumns = isVertical ? [config.xAxis?.dataKey] : [] //, ...config.runtime.seriesLabelsAll
    if (config.series) {
      config.series.forEach(element => {
        tmpSeriesColumns.push(element.dataKey)
      })
    } else if (runtimeData && runtimeData.length > 0) {
      tmpSeriesColumns = Object.keys(runtimeData[0])
    }
  } else {
    tmpSeriesColumns = isVertical ? [config.xAxis?.dataKey, config.yAxis?.dataKey] : [config.yAxis?.dataKey]
  }

  // then add the additional Columns
  if (config.columns && Object.keys(config.columns).length > 0) {
    Object.keys(config.columns).forEach(function (key) {
      var value = config.columns[key]
      // add if not the index AND it is enabled to be added to data table
      if (value.name !== config.xAxis?.dataKey && value.dataTable === true) {
        tmpSeriesColumns.push(value.name)
      }
    })
  }

  return tmpSeriesColumns
}
