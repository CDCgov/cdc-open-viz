import { Column } from '../../../types/Column'

const isVisibleDataTableColumn = ([, column]: [string, Column]) => {
  return column?.dataTable === true && !!column?.name
}

export const getMapDataTableColumnKeys = (columns: Record<string, Column> = {}): string[] => {
  return Object.entries(columns)
    .filter(isVisibleDataTableColumn)
    .map(([key, column], declarationIndex) => ({ key, order: column.order, declarationIndex }))
    .sort((a, b) => {
      const aOrder = a.order ?? Number.MAX_SAFE_INTEGER
      const bOrder = b.order ?? Number.MAX_SAFE_INTEGER

      if (aOrder !== bOrder) {
        return aOrder - bOrder
      }

      return a.declarationIndex - b.declarationIndex
    })
    .map(({ key }) => key)
}
