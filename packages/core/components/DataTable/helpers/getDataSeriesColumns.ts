import { TableConfig } from '../types/TableConfig'
import _ from 'lodash'
import { Column } from '../../../types/Column'

export const getDataSeriesColumns = (config: TableConfig, isVertical: boolean, runtimeData: Object[]): string[] => {
  const configColumns: Record<string, Column> = _.cloneDeep(config.columns) || {}
  const excludeColumns = Object.values(configColumns)
    .filter(column => column.dataTable === false)
    .map(column => column.name)
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
  Object.keys(configColumns).forEach(function (key) {
    var value = configColumns[key]
    // add if not the index AND it is enabled to be added to data table
    const alreadyAdded = tmpSeriesColumns.includes(value.name)
    if (value.name !== config.xAxis?.dataKey && value.dataTable === true && !alreadyAdded) {
      tmpSeriesColumns.push(value.name)
    }
  })

  const columnOrderingHash = Object.values(configColumns).reduce((acc, column) => {
    acc[column.name] = column.order || 0
    return acc
  }, {})

  tmpSeriesColumns.sort((a, b) => (columnOrderingHash[a] || 0) - (columnOrderingHash[b] || 0))

  return tmpSeriesColumns.filter(columnName => !excludeColumns.includes(columnName))
}
