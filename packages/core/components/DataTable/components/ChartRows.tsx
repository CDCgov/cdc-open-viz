import LegendCircle from '@cdc/core/components/LegendCircle'
import { customSort } from '../helpers/customSort'
import { getSeriesName } from '../helpers/getSeriesName'
import { DataTableProps } from '../DataTable'
import { getChartCellValue } from '../helpers/getChartCellValue'
import { getDataSeriesColumns } from '../helpers/getDataSeriesColumns'

type ChartRowsProps = DataTableProps & {
  rows: string[]
  isVertical: boolean
  sortBy: { colIndex; column }
}

const ChartRows = ({ rows, runtimeData, config, isVertical, sortBy, colorScale }: ChartRowsProps) => {
  const dataSeriesColumns = getDataSeriesColumns(config, isVertical, runtimeData)

  const dataSeriesColumnsSorted = () => {
    if (!sortBy && sortBy.colIndex === null) return dataSeriesColumns
    return dataSeriesColumns.sort((a, b) => {
      if (sortBy.column === '__series__') return customSort(a, b, sortBy, config)
      let row = runtimeData.find(d => d[config.xAxis?.dataKey] === sortBy.column)

      const rowIndex = runtimeData[sortBy.colIndex - 1]
      if (row) {
        return customSort(row[a], row[b], sortBy, config)
      }
      if (row === undefined && rowIndex) {
        return customSort(rowIndex[a], rowIndex[b], sortBy, config)
      }
    })
  }

  const getChartCell = (row, column, rowIndex, cellIndex) => {
    return (
      <td key={`${row}__${rowIndex}_${cellIndex}`} tabIndex={0} role='gridcell' id={`${runtimeData[config.runtime?.originalXAxis?.dataKey]}--${row}`}>
        {getChartCellValue(row, column, config, runtimeData)}
      </td>
    )
  }

  if (isVertical) {
    return (
      <>
        {rows.map((row, index) => {
          return (
            <tr key={`${row}__${index}`} role='row'>
              {dataSeriesColumns.map((column, j) => getChartCell(row, column, index, j))}
            </tr>
          )
        })}
      </>
    )
  } else {
    return (
      <>
        {dataSeriesColumnsSorted().map((column, index) => {
          const seriesName = getSeriesName(column, config)
          return (
            <tr role='row'>
              {config.visualizationType !== 'Pie' && (
                <td key={`seriesname-${index}`}>
                  {colorScale && colorScale(seriesName) && <LegendCircle fill={colorScale(seriesName)} />}
                  {seriesName}
                </td>
              )}
              {rows.map((row, j) => {
                return getChartCell(row, column, index, j)
              })}
            </tr>
          )
        })}
      </>
    )
  }
}

export default ChartRows
