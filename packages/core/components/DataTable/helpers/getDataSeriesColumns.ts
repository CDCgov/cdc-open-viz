import { TableConfig } from '../types/TableConfig'
import _ from 'lodash'
import { Column } from '../../../types/Column'

export const getDataSeriesColumns = (config: TableConfig, isVertical: boolean, runtimeData: Object[]): string[] => {
  if (config.visualizationType === 'Sankey') return Object.keys(config?.data?.[0]?.tableData[0])
  const configColumns = _.cloneDeep(config.columns) || ({} as Record<string, Column>)
  const excludeColumns = Object.values(configColumns)
    .filter(column => column.dataTable === false)
    .map(column => column.name)
  let tmpSeriesColumns: string[] = []
  if (config.visualizationType !== 'Pie') {
    tmpSeriesColumns = isVertical ? [config.xAxis?.dataKey] : [] //, ...config.runtime.seriesLabelsAll
    if (config.runtime?.series) {
      config.runtime?.series.forEach(element => {
        tmpSeriesColumns.push(element.dataKey)
      })
    } else if (runtimeData && runtimeData.length > 0) {
      tmpSeriesColumns = Object.keys(runtimeData[0])
    }
  } else {
    tmpSeriesColumns = isVertical ? [config.xAxis?.dataKey, config.yAxis?.dataKey] : [config.yAxis?.dataKey]
  }

  const dataColumns = Object.keys(runtimeData[0] || {})

  // then add the additional Columns
  Object.values(configColumns).forEach(function (value) {
    if (!value.name) return
    // add if not the index AND it is enabled to be added to data table
    const alreadyAdded = tmpSeriesColumns.includes(value.name)
    const columnIsInData = dataColumns.includes(value.name) // null columns are excluded from data
    if (value.name !== config.xAxis?.dataKey && value.dataTable === true && !alreadyAdded && columnIsInData) {
      tmpSeriesColumns.push(value.name)
    }
  })

  const columnOrderingHash = Object.values(configColumns).reduce((acc, column) => {
    // subtract 1 to switch from cardinal positioning to index
    if (column.order !== undefined) {
      acc[column.name] = column.order - 1
    }
    return acc
  }, {})

  tmpSeriesColumns = tmpSeriesColumns.filter(columnName => !excludeColumns.includes(columnName))

  tmpSeriesColumns.forEach((columnName, index) => {
    if (columnOrderingHash[columnName] === undefined) {
      if (Object.values(columnOrderingHash).includes(index)) {
        // add 1 to place unsorted columns behind sorted columns
        columnOrderingHash[columnName] = index + 1
      } else {
        columnOrderingHash[columnName] = index
      }
    }
  })

  tmpSeriesColumns.sort((a, b) => {
    if (a === '_pivotedFrom') return -1
    if (b === '_pivotedFrom') return 1
    return columnOrderingHash[a] - columnOrderingHash[b]
  })

  return tmpSeriesColumns.filter(colName => {
    // remove metadata added by pivotData function
    return colName !== '_pivotedFrom'
  })
}
