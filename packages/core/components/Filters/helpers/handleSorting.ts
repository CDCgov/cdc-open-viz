import _ from 'lodash'

export const handleSorting = singleFilter => {
  const singleFilterValues = _.cloneDeep(singleFilter.values)
  if (singleFilter.order === 'cust' && singleFilter.filterStyle !== 'nested-dropdown') {
    singleFilter.values = singleFilter.orderedValues?.length ? singleFilter.orderedValues : singleFilterValues
    return singleFilter
  }

  if (singleFilter.order === 'column') {
    // sorting is done in the generateValuesForFilter function
    return singleFilter
  }

  singleFilter.active = singleFilter?.orderedValues?.[0] || singleFilter?.values?.[0] || singleFilter?.active || ''

  const sort = (a, b) => {
    const asc = singleFilter.order !== 'desc'
    return String(asc ? a : b).localeCompare(String(asc ? b : a), 'en', { numeric: true })
  }

  singleFilter.values = singleFilterValues.sort(sort)

  return singleFilter
}
