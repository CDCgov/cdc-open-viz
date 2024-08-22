import _ from 'lodash'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'

type Filter = {
  columnName: string
  values: string[]
  filterStyle?: string
  active?: string | string[]
}

// Gets filter values from dataset
const generateValuesForFilter = (columnName, data: any[] | Record<string, any[]>) => {
  const values: string[] = []

  if (Array.isArray(data)) {
    data.forEach(row => {
      const value = row[columnName]
      if (value !== undefined &&!values.includes(value)) {
        values.push(value)
      }
    })
  } else {
    // data is a dataset this loops through ALL datasets to find matching values
    // not sure if this is desired behavior
    if (!data) return values
    Object.values(data).forEach((rows: any[]) => {
      rows.forEach(row => {
        const value = row[columnName]
        if (value !== undefined && !values.includes(value)) {
          values.push(value)
        }
      })
    })
  }

  return values
}

export const addValuesToFilters = <T>(filters: Filter[], data: any[] | Record<string, any[]>): Array<T> => {
  return filters?.map(filter => {
    const filterCopy = _.cloneDeep(filter)

    const filterValues = generateValuesForFilter(filter.columnName, data)
    filterCopy.values = filterValues
    if (filterValues.length > 0) {
      const defaultValues = filterCopy.filterStyle === 'multi-select' ? filterCopy.values : filterCopy.values[0]

      const queryStringFilterValue = getQueryStringFilterValue(filterCopy)
      if (queryStringFilterValue) {
        filterCopy.active = queryStringFilterValue
      } else {
        filterCopy.active = filterCopy.active || defaultValues
      }
    }
    return filterCopy
  }) as Array<T>
}
