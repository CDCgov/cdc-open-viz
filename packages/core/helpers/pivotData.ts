import _ from 'lodash'

const getKeyFromRow = (row: Record<string, any>, columns: string[]) => {
  return columns.map(column => row[column] || '').join(':')
}

const getColumns = (data: Record<string, any>[], columnName: string, pivot: string[]) => {
  const excludedColumns = [columnName, ...pivot]
  return _.uniq(data.flatMap(row => Object.keys(row))).filter(col => !excludedColumns.includes(col))
}

/** columnName is the column you'd like to select data values from to show as column headers.
 *  Pivot is the value column who's data you'd like to show under those respective columns*/
export const pivotData = (data: Record<string, any>[], columnName: string, pivot: string[]): Record<string, any>[] => {
  const columns = getColumns(data, columnName, pivot)
  const newColumns = {}
  // there should be one row for every aggregate row
  const aggregateRows = data.reduce((acc, row) => {
    const key = getKeyFromRow(row, columns)
    if (!acc[key]) {
      acc[key] = {}
    }
    return acc
  }, {})

  data.forEach(row => {
    const key = getKeyFromRow(row, columns)
    if (pivot.length > 1) {
      pivot.forEach(pivotColumn => {
        const toAdd = _.omit(row, [columnName, ...pivot])
        aggregateRows[key][pivotColumn] = {
          ...aggregateRows[key][pivotColumn],
          ...toAdd,
          [row[columnName]]: row[pivotColumn]
        }
      })
    } else {
      const _pivot = pivot[0]
      const toAdd = _.omit(row, [columnName, ...pivot])
      aggregateRows[key] = {
        ...aggregateRows[key],
        ...toAdd,
        [row[columnName]]: row[_pivot]
      }
    }

    newColumns[row[columnName]] = ''
  })

  if (pivot.length > 1) {
    return Object.keys(aggregateRows).flatMap(aggregateKey => {
      return Object.keys(aggregateRows[aggregateKey]).map(pivotColumn => ({
        pivotColumn,
        ...aggregateRows[aggregateKey][pivotColumn]
      }))
    })
  }
  return Object.values(aggregateRows).map(row => ({ ...newColumns, ...row }))
}
