import { parseDate, formatDate } from '@cdc/core/helpers/cove/date'
import { formatNumber } from '@cdc/core/helpers/cove/number'
import { TableConfig } from '../types/TableConfig'
// icons for cell value if these are suppressed
const suppressionIcons = {
  Asterisk: '\u002A',
  'Double Asterisks': '\u002A\u002A',
  Dagger: '\u2020',
  'Double Daggers': '\u2021\u2021',
  'Section Sign': '\u00A7',
  Pilcrow: '\u00B6',
  Hash: '\u0023'
}
// functiion helps to check if cell value should be suppressed
const shouldSuppress = (column, cellValue, preliminaryData) => {
  return preliminaryData?.some(pd => {
    const matchesColumn = pd.column ? pd.column === column : true
    const matchesValue = String(cellValue) === String(pd.value)
    return matchesColumn && matchesValue && pd.symbol && pd.type === 'suppression'
  })
}
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
  if (config.table.customTableConfig || config.visualizationType === 'Sankey' || runtimeData?.[0]?.tableData) return runtimeData[row][column]

  const rowObj = runtimeData[row]
  let cellValue // placeholder for formatting below
  let labelValue = rowObj[column] // just raw X axis string
  console.log(column, 'column')
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

  config.preliminaryData.forEach(pd => {
    cellValue = shouldSuppress(column, labelValue, config.preliminaryData) ? suppressionIcons[pd?.symbol] : cellValue
  })

  return cellValue
}
