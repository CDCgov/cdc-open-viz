type SeriesConfig = {
  dataKey?: string
}

const getColumns = (newData: any): string[] => {
  if (!newData) return []
  if (Array.isArray(newData.columns)) return newData.columns
  if (!Array.isArray(newData)) return []

  const columns = new Set<string>()
  newData.forEach(row => {
    if (row && typeof row === 'object') {
      Object.keys(row).forEach(column => columns.add(column))
    }
  })

  return [...columns]
}

/**
 * Checks if the required columns exist in the new data.
 *
 * @param newData The new data to check.
 * @param oldSeries The existing series configuration.
 * @param oldAxisX The existing X-axis column.
 * @param transformedData The transformed form of the new data, when the visualization uses a data description.
 * @returns True if all required columns are present in the raw or transformed new data, false otherwise.
 */
export const dataExists = (newData: any, oldSeries: SeriesConfig[] = [], oldAxisX?: string, transformedData?: any) => {
  const columns = new Set([...getColumns(newData), ...getColumns(transformedData)])
  const requiredColumns = [oldAxisX, ...oldSeries.map(series => series?.dataKey)].filter((column): column is string =>
    Boolean(column)
  )

  return requiredColumns.every(column => columns.has(column))
}
