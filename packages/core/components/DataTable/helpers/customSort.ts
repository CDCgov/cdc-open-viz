import { parseDate } from '@cdc/core/helpers/cove/date'
import { standardizeStateName } from './standardizeState'

export const customSort = (a, b, sortBy, config) => {
  let valueA = a
  let valueB = b

  if (config.type === 'map') {
    valueA = standardizeStateName(a)
    valueB = standardizeStateName(b)
    // sort for Regions table for Map
    if (String(valueA).toLowerCase().includes('region') && String(valueB).toLowerCase().includes('region')) {
      const numberA = parseInt(a.match(/\d+$/)[0], 10)
      const numberB = parseInt(b.match(/\d+$/)[0], 10)

      // Compare the numeric parts
      return sortBy.asc ? Number(numberA) - Number(numberB) : Number(numberB) - Number(numberA)
    }
  }

  // Treat booleans and nulls as an empty string
  valueA = valueA === false || valueA === true || valueA === null ? '' : valueA
  valueB = valueB === false || valueB === true || valueB === null ? '' : valueB

  const trimmedA = String(valueA).trim()
  const trimmedB = String(valueB).trim()

  if (config.xAxis?.dataKey === sortBy.column && ['date', 'date-time'].includes(config.xAxis.type)) {
    const dateA = parseDate(config.xAxis.dateParseFormat, trimmedA)?.getTime()

    const dateB = parseDate(config.xAxis.dateParseFormat, trimmedB)?.getTime()

    return sortBy.asc ? dateA - dateB : dateB - dateA
  }
  // Check if values are numbers
  const isNumA = !isNaN(Number(valueA)) && valueA !== undefined && valueA !== null && trimmedA !== ''
  const isNumB = !isNaN(Number(valueB)) && valueB !== undefined && valueB !== null && trimmedB !== ''

  // Handle empty strings or spaces
  if (trimmedA === '' && trimmedB !== '') return sortBy.asc ? -1 : 1
  if (trimmedA !== '' && trimmedB === '') return sortBy.asc ? 1 : -1

  // Both are numbers: Compare numerically
  if (isNumA && isNumB) {
    return sortBy.asc ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA)
  }

  // Only A is a number
  if (isNumA) {
    return sortBy.asc ? -1 : 1
  }

  // Only B is a number
  if (isNumB) {
    return sortBy.asc ? 1 : -1
  }

  // Neither are numbers: Compare as strings
  return sortBy.asc ? trimmedA.localeCompare(trimmedB) : trimmedB.localeCompare(trimmedA)
}
