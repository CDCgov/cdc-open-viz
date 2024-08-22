import _ from 'lodash'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { VizFilter } from '../types/VizFilter'

type Filter = {
  columnName: string
  values: (string | number)[]
  filterStyle?: string
  active?: string | number | (string | number)[]
  parents?: (string | number)[]
}

// Gets filter values from dataset
const generateValuesForFilter = (columnName, data: any[] | Record<string, any[]>) => {
  const values: string[] = []

  if (Array.isArray(data)) {
    data.forEach(row => {
      const value = row[columnName]
      if (!values.includes(value)) {
        values.push(value)
      }
    })
  } else {
    // data is a dataset this loops through ALL datasets to find matching values
    // not sure if this is desired behavior
    Object.values(data).forEach((rows: any[]) => {
      rows.forEach(row => {
        const value = row[columnName]
        if (!values.includes(value)) {
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

export const addValuesToFilters = <T>(filters: Filter[], data: any[] | Record<string, any[]>): Array<T> => {
  const filtersLookup = _.keyBy(filters, 'id')
  return filters?.map(filter => {
    const filterCopy = _.cloneDeep(filter)
    let filteredData = data
    if (Array.isArray(data) && filter.parents?.length) {
      // handling VizFilter data
      filteredData = handleVizParents(filter as VizFilter, data, filtersLookup)
    }
    const filterValues = generateValuesForFilter(filter.columnName, filteredData)
    filterCopy.values = filterValues
    if (filterValues.length > 0) {
      const queryStringFilterValue = getQueryStringFilterValue(filterCopy)
      if (queryStringFilterValue) {
        filterCopy.active = queryStringFilterValue
      } else if (filterCopy.filterStyle === 'multi-select') {
        const defaultValues = filterCopy.values
        const active: (string | number)[] = Array.isArray(filterCopy.active) ? filterCopy.active : [filterCopy.active]
        filterCopy.active = active.filter(val => defaultValues.includes(val))
      } else {
        const defaultValue = filterCopy.values[0]
        filterCopy.active = filterCopy.values.includes(filterCopy.active as string | number) ? filterCopy.active : defaultValue
      }
    }
    return filterCopy
  }) as Array<T>
}
