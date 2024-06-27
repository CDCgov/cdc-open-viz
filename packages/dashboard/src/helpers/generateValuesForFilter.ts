// Gets filter values from dataset
export const generateValuesForFilter = (columnName, _data) => {
  const values: string[] = []

  Object.keys(_data).forEach(key => {
    _data[key]?.forEach(row => {
      const value = row[columnName]
      if (value && !values.includes(value)) {
        values.push(value)
      }
    })
  })

  return values
}
