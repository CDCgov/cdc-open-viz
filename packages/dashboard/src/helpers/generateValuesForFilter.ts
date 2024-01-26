import { FilterBehavior } from '../components/Header/Header'

// Gets filter values from API response
export const generateValuesForAPIFilter = (columnName, _data): string[] => {
  type Row = { [key: string]: any }
  return Object.values(_data)
    .filter(row => row && !!(row as Row)[columnName])
    .map(row => (row as Row)[columnName])
}

// Gets filter values from dataset
export const generateValuesForFilter = (columnName, _data, filterBehavior) => {
  const values: string[] = []

  Object.keys(_data).forEach(key => {
    _data[key]?.forEach(row => {
      const value = row[columnName]
      if (value && false === values.includes(value)) {
        values.push(value)
      }
    })
  })

  return values
}
