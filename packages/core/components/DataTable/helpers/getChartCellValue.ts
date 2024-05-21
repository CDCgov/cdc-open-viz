import { parseDate, formatDate } from '@cdc/core/helpers/cove/date'
import { formatNumber } from '@cdc/core/helpers/cove/number'
import { TableConfig } from '../types/TableConfig'

// if its additional column, return formatting params
const isAdditionalColumn = (column, config) => {
  let inthere = false
  let formattingParams = {}
  const { columns } = config
  if (columns) {
    Object.keys(columns).forEach(keycol => {
      const col = columns[keycol]
      if (col.name === column) {
        inthere = true
        formattingParams = {
          addColPrefix: col.prefix,
          addColSuffix: col.suffix,
          addColRoundTo: col.roundToPlace ? col.roundToPlace : '',
          addColCommas: col.commas
        }
      }
    })
  }
  return formattingParams
}

export const getChartCellValue = (row: string, column: string, config: TableConfig, runtimeData: Object[]) => {
  if (config.visualizationType === 'Sankey' || runtimeData?.[0]?.tableData) return runtimeData[row][column]

  const rowObj = runtimeData[row]
  let cellValue // placeholder for formatting below
  let labelValue = rowObj[column] // just raw X axis string
  if (column === config.xAxis?.dataKey) {
    // not the prettiest, but helper functions work nicely here.
    cellValue = config.xAxis?.type === 'date' ? formatDate(config.table?.dateDisplayFormat || config.xAxis?.dateDisplayFormat, parseDate(config.xAxis?.dateParseFormat, labelValue)) : labelValue
  } else {
    let resolvedAxis = 'left'
    let leftAxisItems = config.series ? config.series.filter(item => item?.axis === 'Left') : []
    let rightAxisItems = config.series ? config.series.filter(item => item?.axis === 'Right') : []

    leftAxisItems.map(leftSeriesItem => {
      if (leftSeriesItem.dataKey === column) resolvedAxis = 'left'
    })

    rightAxisItems.map(rightSeriesItem => {
      if (rightSeriesItem.dataKey === column) resolvedAxis = 'right'
    })

    let addColParams = isAdditionalColumn(column, config)
    if (addColParams) {
      cellValue = config.dataFormat ? formatNumber(runtimeData[row][column], resolvedAxis, false, config, addColParams) : runtimeData[row][column]
    } else {
      cellValue = config.dataFormat ? formatNumber(runtimeData[row][column], resolvedAxis, false, config) : runtimeData[row][column]
    }
  }

  // suppress cell value
  config.preliminaryData?.forEach(pd => {
    // check entered suppression value against cell value
    const isValueMatch = String(pd.value) === String(labelValue)
    // check entered suppression column against table key
    const isColumnMatch = !pd.column || pd.column === column
    if (isValueMatch && isColumnMatch && pd.displayTable && pd.type === 'suppression') {
      switch (config.visualizationType) {
        case 'Combo':
          cellValue = config.runtime.barSeriesKeys.includes(column) ? pd.iconCode : config.runtime.lineSeriesKeys.includes(column) ? pd.lineCode : ''
          break
        case 'Bar':
          cellValue = pd.iconCode
          break
        case 'Line':
          cellValue = pd.lineCode
          break
      }
    }
  })
  return cellValue
}
