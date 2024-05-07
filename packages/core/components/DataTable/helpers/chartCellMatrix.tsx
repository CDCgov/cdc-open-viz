import LegendCircle from '@cdc/core/components/LegendCircle'
import { customSort } from './customSort'
import { getSeriesName } from './getSeriesName'
import { DataTableProps } from '../DataTable'
import { getChartCellValue } from './getChartCellValue'
import { getDataSeriesColumns } from './getDataSeriesColumns'
import { ReactNode } from 'react'
import { CellMatrix, GroupCellMatrix } from '../../Table/types/CellMatrix'

type ChartRowsProps = DataTableProps & {
  rows: string[]
  isVertical: boolean
  sortBy: { colIndex; column }
  groupBy?: string
  hasRowType?: boolean
}

const chartCellArray = ({ rows, runtimeData, config, isVertical, sortBy, colorScale, groupBy, hasRowType, viewport }: ChartRowsProps): CellMatrix | GroupCellMatrix => {
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

  if (isVertical) {
    if (groupBy) {
      const cellMatrix: GroupCellMatrix = {}
      rows.forEach(row => {
        let groupKey: string
        let groupValues = []
        dataSeriesColumns.forEach((column, j) => {
          if (groupBy === column) {
            groupKey = getChartCellValue(row, column, config, runtimeData)
          } else {
            groupValues.push(getChartCellValue(row, column, config, runtimeData))
          }
        })
        if (!cellMatrix[groupKey]) {
          cellMatrix[groupKey] = [groupValues]
        } else {
          cellMatrix[groupKey].push(groupValues)
        }
      })
      return cellMatrix
    } else {
      return rows.map(row => {
        if (hasRowType) {
          let rowType
          let rowValues = []
          dataSeriesColumns.forEach((column, j) => {
            if (column.match(/row[_-]?type/i)) {
              rowType = getChartCellValue(row, column, config, runtimeData)
            } else {
              rowValues.push(getChartCellValue(row, column, config, runtimeData))
            }
          })
          return [rowType, ...rowValues]
        } else {
          return dataSeriesColumns.map((column, j) => getChartCellValue(row, column, config, runtimeData))
        }
      })
    }
  } else {
    return dataSeriesColumnsSorted().map(column => {
      const seriesName = getSeriesName(column, config)
      let nodes: ReactNode[] =
        config.visualizationType !== 'Pie'
          ? [
              <>
                {colorScale && colorScale(seriesName) && <LegendCircle viewport={viewport} fill={colorScale(seriesName)} />}
                {seriesName}
              </>
            ]
          : []
      return nodes.concat(rows.map((row, i) => getChartCellValue(row, column, config, runtimeData)))
    })
  }
}

export default chartCellArray
