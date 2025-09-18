type DataRow = Record<string, any>

export const getTransformedData = ({
  brushData,
  filteredData,
  excludedData,
  clean
}: {
  brushData: DataRow[]
  filteredData: DataRow[]
  excludedData: DataRow[]
  clean: (data: DataRow[]) => DataRow[]
}): DataRow[] => {
  const data =
    Array.isArray(brushData) && brushData.length > 0
      ? brushData
      : Array.isArray(filteredData)
      ? filteredData
      : excludedData

  return clean(data)
}
