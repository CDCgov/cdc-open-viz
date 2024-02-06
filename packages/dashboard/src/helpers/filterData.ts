import { SharedFilter } from '../types/SharedFilter'
import { generateValuesForFilter } from './generateValuesForFilter'

const findFilterTier = (filters: SharedFilter[], sharedFilter: SharedFilter) => {
  if (!sharedFilter.parents?.length) {
    return 1
  } else {
    let parent = filters.find(filter => sharedFilter.parents!.includes(filter.key))
    if (!parent) return 1
    return 1 + findFilterTier(filters, parent)
  }
}

export const filterData = (filters: SharedFilter[], _data: Object[], filterBehavior) => {
  if (_data) {
    let maxTier = 1
    filters.forEach(sharedFilter => {
      sharedFilter.tier = findFilterTier(filters, sharedFilter)
    })

    filters.forEach(sharedFilter => {
      if (sharedFilter.tier && sharedFilter.tier > maxTier) {
        maxTier = sharedFilter.tier
      }
    })

    let filteredData = _data
    // TODO triple loop??
    for (let i = 0; i < maxTier; i++) {
      let filteredDataSubTier: any[] = []

      filteredData.forEach(row => {
        let add = true

        filters.forEach(filter => {
          // eslint-disable-next-line eqeqeq
          const currentValue = row[filter.columnName]
          const selectedValue = filter.queuedActive || filter.active

          if (filter.type !== 'urlfilter' && ((!filter.tier && i === 0) || filter.tier === i + 1) && selectedValue && currentValue != selectedValue) {
            add = false
          }
        })

        if (add) filteredDataSubTier.push(row)
      })

      filters.forEach(sharedFilter => {
        if (sharedFilter.tier === i + 2) {
          sharedFilter.values = generateValuesForFilter(sharedFilter.columnName, { data: filteredDataSubTier }, filterBehavior)
          const valueAlreadySelected = sharedFilter.values.includes(sharedFilter.active)
          if (!valueAlreadySelected && sharedFilter.values.length > 0) {
            sharedFilter.active = sharedFilter.values[0]
          }
        }
      })

      filteredData = filteredDataSubTier
    }

    let filteredDataSubTier: any[] = []
    filteredData.forEach(row => {
      let add = true

      filters.forEach(filter => {
        // eslint-disable-next-line eqeqeq
        const currentValue = row[filter.columnName]
        const selectedValue = filter.queuedActive || filter.active
        if (filter.type !== 'urlfilter' && filter.tier === maxTier - 1 && selectedValue && currentValue != selectedValue) {
          add = false
        }
      })

      if (add) filteredDataSubTier.push(row)
    })

    return filteredDataSubTier
  }
}
