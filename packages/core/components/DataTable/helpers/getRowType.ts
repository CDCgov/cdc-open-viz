import { RowType } from '../../Table/types/RowType'

export const getRowType = (row: Record<string, any>): RowType => {
  const rowTypeKey = Object.keys(row).find(key => key.match(/row[_-]?type/i))
  return row[rowTypeKey]
}
