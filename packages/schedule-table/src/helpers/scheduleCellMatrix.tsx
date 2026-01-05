import { ReactNode } from 'react'
import { groupBy, uniq } from 'lodash'
import { Config } from '../types/Config'
import ScheduleCell from '../components/ScheduleCell'
import { CellMatrix } from '@cdc/core/components/Table/types/CellMatrix'

type ScheduleCellMatrixProps = {
  data: any[]
  config: Config
}

/**
 * Transform long-format schedule data into a cell matrix for table rendering
 * @param data - Array of data objects in long format
 * @param config - Schedule table configuration
 * @returns CellMatrix - 2D array of React nodes for table cells
 */
export const scheduleCellMatrix = ({ data, config }: ScheduleCellMatrixProps): CellMatrix => {
  const { matrix, columnOrder, recommendations, table } = config

  // Return empty matrix if no data or matrix config
  if (!data || data.length === 0 || !matrix.rowKey || !matrix.columnKey) {
    return []
  }

  // Extract unique row values (e.g., vaccines)
  const rowValues = uniq(data.map(item => item[matrix.rowKey])).filter(Boolean)

  // Extract unique column values (e.g., age groups)
  let columnValues: string[]
  if (columnOrder && columnOrder.length > 0) {
    // Use configured column order
    columnValues = columnOrder
  } else {
    // Auto-detect from data
    columnValues = uniq(data.map(item => item[matrix.columnKey])).filter(Boolean)
  }

  // Group data by row key for faster lookups
  const dataByRow = groupBy(data, matrix.rowKey)

  // Build cell matrix
  const cellMatrix: ReactNode[][] = rowValues.map(rowValue => {
    const rowData = dataByRow[rowValue] || []

    // First cell is the row header
    const cells: ReactNode[] = [<strong key={`row-header-${rowValue}`}>{rowValue}</strong>]

    // Add cells for each column
    columnValues.forEach(columnValue => {
      // Find matching data point
      const cellData = rowData.find(item => item[matrix.columnKey] === columnValue)

      if (cellData) {
        const recommendation = cellData[matrix.valueKey]
        const displayText = cellData[matrix.displayKey] || ''
        const notesUrl = matrix.notesKey ? cellData[matrix.notesKey] : undefined

        cells.push(
          <ScheduleCell
            key={`cell-${rowValue}-${columnValue}`}
            displayText={displayText}
            recommendation={recommendation}
            notesUrl={notesUrl}
            recommendations={recommendations}
            showNotesLinks={table.showNotesLinks}
            notesLinkText={table.notesLinkText}
          />
        )
      } else {
        // Empty cell
        cells.push(<div key={`empty-${rowValue}-${columnValue}`} className='schedule-cell empty'></div>)
      }
    })

    return cells
  })

  return cellMatrix
}

/**
 * Generate column headers for the schedule table
 * @param config - Schedule table configuration
 * @param data - Array of data objects
 * @returns Array of column header strings
 */
export const getColumnHeaders = (config: Config, data: any[]): string[] => {
  const { matrix, columnOrder } = config

  // First column is the row header (empty or label)
  const headers: string[] = [matrix.rowKey || '']

  // Extract unique column values
  let columnValues: string[]
  if (columnOrder && columnOrder.length > 0) {
    columnValues = columnOrder
  } else if (data && data.length > 0) {
    columnValues = uniq(data.map(item => item[matrix.columnKey])).filter(Boolean)
  } else {
    columnValues = []
  }

  return headers.concat(columnValues)
}
