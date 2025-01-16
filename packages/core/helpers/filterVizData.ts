import { SubGrouping } from '../types/VizFilter'

type Filter = {
  columnName: string
  type?: string
  values: (string | number)[]
  filterStyle?: string
  active?: string | number | (string | number)[]
  parents?: (string | number)[]
  subGrouping?: SubGrouping
}

export const filterVizData = (filters: Filter[], data) => {
  if (!data) {
    console.warn('COVE: No data to filter')
    return []
  }

  if (!filters) return data
  const filteredData: any[] = []

  data?.forEach(row => {
    let add = true
    filters
      .filter(filter => filter.type !== 'url')
      .forEach(filter => {
        if (filter.active === undefined) return
        const value = row[filter.columnName]

        if (Array.isArray(filter.active)) {
          if (!filter.active.includes(value)) {
            add = false
          }
        } else if (value != filter.active) {
          add = false
        }
        if (filter.filterStyle === 'nested-dropdown' && filter.subGrouping && add === true) {
          const subGroupActive = filter.subGrouping.active
          const subGroupValue = row[filter.subGrouping.columnName]
          if (subGroupActive === undefined) return
          if (subGroupValue != subGroupActive) {
            add = false
          }
        }
      })
    if (add) filteredData.push(row)
  })
  return filteredData
}
