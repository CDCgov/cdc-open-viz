import { ConfigRow } from '../types/ConfigRow'
import { getConditionalWidgets, hasConditionalWidgets } from './dashboardColumnWidgets'

// returns a dictionary of widget names and their corresponding row and column index
export const getVizRowColumnLocator = (
  rows: ConfigRow[]
): Record<string, { row: number; column: number; entry?: number }> =>
  rows.reduce((acc, curr, index) => {
    curr.columns?.forEach((column, columnIndex) => {
      if (hasConditionalWidgets(column)) {
        getConditionalWidgets(column).forEach((entry, entryIndex) => {
          acc[entry.widget] = { row: index, column: columnIndex, entry: entryIndex }
        })
        return
      }

      if (column.widget !== undefined) acc[column.widget] = { row: index, column: columnIndex }
    })
    return acc
  }, {})
