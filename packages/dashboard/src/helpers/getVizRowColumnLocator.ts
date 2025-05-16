import { ConfigRow } from '../types/ConfigRow'

// returns a dictionary of widget names and their corresponding row and column index
export const getVizRowColumnLocator = (rows: ConfigRow[]): Record<string, { row: number; column: number }> =>
  rows.reduce((acc, curr, index) => {
    curr.columns?.forEach((column, columnIndex) => {
      if (column.widget !== undefined) acc[column.widget] = { row: index, column: columnIndex }
    })
    return acc
  }, {})
