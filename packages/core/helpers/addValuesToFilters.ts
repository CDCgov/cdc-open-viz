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
      if (value !== undefined && !values.includes(value)) {
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

const handleVizParents = (filter: VizFilter, data: any[], filtersLookup: Record<string, Filter>) => {
  let filteredData = data
  filter.parents.forEach(parentKey => {
    const parent = filtersLookup[parentKey]
    if (parent?.active) {
      filteredData = filteredData.filter(d => {
        if (Array.isArray(parent.active)) {
          return parent.active.includes(d[parent.columnName])
        }
        return parent.active == d[parent.columnName]
      })
    }
  })
  return filteredData
}

const includes = (arr: any[], val: any): boolean => {
  return arr.map(val => String(val)).includes(String(val))
}

export const addValuesToFilters = (filters: VizFilter[], data: any[]): Array<VizFilter> => {
  const filtersLookup = _.keyBy(filters, 'id')
  return filters?.map(filter => {
    const filterCopy = _.cloneDeep(filter)

    const filterValues = generateValuesForFilter(filter.columnName, data)
    filterCopy.values = filterValues
    if (filterValues.length > 0) {
      const defaultValues = filterCopy.filterStyle === 'multi-select' ? filterCopy.values : filterCopy.values[0]

      const queryStringFilterValue = getQueryStringFilterValue(filterCopy)
      if (queryStringFilterValue) {
        filterCopy.active = queryStringFilterValue
      } else if (filterCopy.filterStyle === 'multi-select') {
        const defaultValues = filterCopy.values
        const active = Array.isArray(filterCopy.active) ? filterCopy.active : [filterCopy.active]
        filterCopy.active = active.filter(val => includes(defaultValues, val))
      } else {
        const defaultValue = filterCopy.values[0]
        const active = Array.isArray(filterCopy.active) ? filterCopy.active[0] : filterCopy.active
        filterCopy.active = includes(filterCopy.values, active) ? active : defaultValue
      }
    }
    return filterCopy
  }) as Array<T>
}
