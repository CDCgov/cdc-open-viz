import { SharedFilter } from '@cdc/dashboard/src/types/SharedFilter'

export const sortByOrderedValues = (values: any[], filter: SharedFilter): void => {
  if (filter.order === 'cust' && filter.orderedValues) {
    values.sort((a, b) => {
      const indexOfA = filter.orderedValues.indexOf(a)
      const indexOfB = filter.orderedValues.indexOf(b)
      if (indexOfA === indexOfB) return 0
      if (indexOfA === -1) return 1
      if (indexOfB === -1) return -1
      return indexOfA < indexOfB ? -1 : 1
    })
  } else if (filter.order === 'asc' || filter.order === 'desc') {
    values.sort((a, b) => {
      const asc = filter.order !== 'desc'
      return (asc ? a : b).toString().localeCompare((asc ? b : a).toString(), 'en', { numeric: true })
    })
  }
}
