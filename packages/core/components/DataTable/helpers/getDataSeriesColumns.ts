import { TableConfig } from '../types/TableConfig'
import _ from 'lodash'
import { Column } from '../../../types/Column'

const getConfiguredColumnName = (columnKey: string, column: Column) => column.name || columnKey

export const getDataSeriesColumns = (config: TableConfig, isVertical: boolean, runtimeData: Object[]): string[] => {
  if (config.visualizationType === 'Sankey') return Object.keys(config?.data?.[0]?.tableData[0])
  const configColumns = _.cloneDeep(config.columns) || ({} as Record<string, Column>)
  const columnEntries = Object.entries(configColumns)
  const excludeColumns = columnEntries
    .filter(([, column]) => column.dataTable === false)
    .map(([columnKey, column]) => getConfiguredColumnName(columnKey, column))
  let tmpSeriesColumns: string[] = []
  if (config.visualizationType !== 'Pie') {
    tmpSeriesColumns = isVertical ? [config.xAxis?.dataKey] : [] //, ...config.runtime.seriesLabelsAll
    if (config.visualizationType === 'HeatMap') {
      config.series?.forEach(element => {
        tmpSeriesColumns.push(element.dataKey)
      })
    }
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
  columnEntries.forEach(function ([columnKey, value]) {
    const columnName = getConfiguredColumnName(columnKey, value)
    if (!columnName) return
    // add if not the index AND it is enabled to be added to data table
    const alreadyAdded = tmpSeriesColumns.includes(columnName)
    const columnIsInData = dataColumns.includes(columnName) // null columns are excluded from data
    if (columnName !== config.xAxis?.dataKey && value.dataTable === true && !alreadyAdded && columnIsInData) {
      tmpSeriesColumns.push(columnName)
    }
  })

  const columnOrderingHash = columnEntries.reduce((acc, [columnKey, column]) => {
    const columnName = getConfiguredColumnName(columnKey, column)
    // subtract 1 to switch from cardinal positioning to index
    if (columnName && column.order !== undefined) {
      acc[columnName] = column.order - 1
    }
    return acc
  }, {})

  tmpSeriesColumns = Array.from(new Set(tmpSeriesColumns)).filter(
    columnName => columnName && !excludeColumns.includes(columnName)
  )

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
