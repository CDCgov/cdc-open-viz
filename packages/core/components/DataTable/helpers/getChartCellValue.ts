import { parseDate, formatDate } from '@cdc/core/helpers/cove/date'
import { formatNumber } from '../../../helpers/cove/number'
import { TableConfig } from '../types/TableConfig'
import _ from 'lodash'

const isPivotColumn = (columnName, config) => {
  const tableHasPivotColumnConfigured = config.table.pivot?.valueColumns?.length
  const originalColumnNames = Object.keys(config.data?.[0] || {})
  const columnIsPivot = originalColumnNames.length && !originalColumnNames.includes(columnName)
  return tableHasPivotColumnConfigured && columnIsPivot
}

// if its additional column, return formatting params
const isAdditionalColumn = (column: string, config, rowData) => {
  const columnName = isPivotColumn(column, config) ? rowData._pivotedFrom : column
  let formattingParams = {}
  const { columns } = config
  if (columns) {
    Object.keys(columns).forEach(keycol => {
      const col = columns[keycol]
      if (col.name === columnName) {
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

export const getChartCellValue = (row: string, column: string, config: TableConfig, runtimeData: Object[], rightAxisItemsMap) => {

  // Variables for xAxis config
  const { type, dateDisplayFormat, dateParseFormat, dataKey: xAxisDataKey } = config.xAxis || {}
  const { showMissingDataLabel } = config.general || {}
  const { visualizationType } = config || {}

  // Early returns...
  const rowObj = runtimeData[row]
  if (!rowObj) return

  if (visualizationType === 'Sankey' || runtimeData?.[0]?.tableData) {
    return runtimeData?.[row]?.[column]
  }

  let cellValue
  const rightMatch = rightAxisItemsMap.get(column)
  const resolvedAxis = rightMatch ? 'right' : 'left'
  const labelValue = rowObj[column]

  if (column === xAxisDataKey) {
    const dateFormat = config.table?.dateDisplayFormat || dateDisplayFormat
    if (type === 'date' || type === 'date-time') {
      cellValue = formatDate(dateFormat, parseDate(dateParseFormat, labelValue))
    } else if (type === 'continuous') {
      cellValue = formatNumber(runtimeData[row][column], 'bottom', false, config)
    } else {
      cellValue = labelValue
    }
  } else {

    let addColParams = isAdditionalColumn(column, config, rowObj)

    let piePercent = 0
    if (config.visualizationType === 'Pie' && !config.dataFormat.showPiePercent) {
      piePercent = (_.toNumber(runtimeData[row][column]) / _.sumBy(runtimeData, d => _.toNumber(d[column]))) * 100 || 0
    }

    const valueToFormat = config.visualizationType === 'Pie' && !config.dataFormat.showPiePercent
      ? piePercent
      : runtimeData[row][column]

    const hasAdditionalParams = Object.keys(addColParams).length > 0

    if (config.dataFormat) {
      cellValue = formatNumber(
        valueToFormat,
        resolvedAxis,
        false,
        config,
        hasAdditionalParams ? addColParams : undefined
      )
    } else {
      cellValue = runtimeData[row][column]
    }
  }

  // suppress cell value
  config.preliminaryData?.forEach(pd => {
    // check entered suppression value against cell value
    const isValueMatch = String(pd.value) === String(labelValue)
    // check entered suppression column against table key
    const isColumnMatch = !pd.column || pd.column === column
    const barSeriesExist = config.runtime?.barSeriesKeys?.includes(column)
    const lineSeriesExist = config.runtime?.lineSeriesKeys?.includes(column)
    const showSymbol = config.general.showSuppressedSymbol
    if (
      isValueMatch &&
      isColumnMatch &&
      pd.displayTable &&
      pd.type === 'suppression' &&
      config.visualizationSubType !== 'stacked'
    ) {
      switch (config.visualizationType) {
        case 'Combo':
          cellValue = barSeriesExist && showSymbol ? pd.iconCode : lineSeriesExist && showSymbol ? pd.lineCode : ''
          break
        case 'Bar':
          cellValue = !showSymbol ? '' : pd.iconCode
          break
        case 'Line':
          cellValue = !showSymbol ? '' : pd.lineCode
          break
      }
    }
  })
  const showMissingDataCellValue = showMissingDataLabel && (!labelValue || labelValue === 'null')
  return showMissingDataCellValue ? 'N/A' : cellValue
}
