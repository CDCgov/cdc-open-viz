type AddOptionalFullGeoNameColumnArgs = {
  config: any
  csvData: Record<string, any>[]
  csvDataUpdated: Record<string, any>[]
  formatLegendLocation?: (key: string) => string
}

export const addOptionalFullGeoNameColumn = ({
  config,
  csvData,
  csvDataUpdated,
  formatLegendLocation
}: AddOptionalFullGeoNameColumnArgs) => {
  if (!config?.table?.showFullGeoNameInCSV || typeof formatLegendLocation !== 'function') {
    return csvDataUpdated
  }

  return csvDataUpdated.map((row, index) => {
    const originalRow = csvData[index]
    if (!originalRow) {
      console.warn('Data mismatch: originalRow missing.', {
        index,
        csvDataLength: csvData.length,
        csvDataUpdatedLength: csvDataUpdated.length
      })
      return row
    }

    return {
      FullGeoName: formatLegendLocation(originalRow[config.columns.geo.name]),
      ...row
    }
  })
}

export default addOptionalFullGeoNameColumn
