type SeriesConfig = {
  dataKey?: string
}

const getColumns = (newData: any): string[] => {
  if (!newData) return []
  if (Array.isArray(newData.columns)) return newData.columns
  return Object.keys(newData[0] || {})
}

export const dataExists = (newData: any, oldSeries: SeriesConfig[] = [], oldAxisX?: string) => {
  const columns = getColumns(newData)
  const requiredColumns = [oldAxisX, ...oldSeries.map(series => series?.dataKey)].filter((column): column is string =>
    Boolean(column)
  )

  return requiredColumns.every(column => columns.includes(column))
}
