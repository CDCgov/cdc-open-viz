import { timeFormat, timeParse } from 'd3-time-format'
import { type Axis } from '@cdc/core/types/Axis'

export function formatDate(format = undefined, date) {
  return timeFormat(format)(date)
}

export function parseDate(format = undefined, dateString) {
  return timeParse(format)(dateString) || new Date()
}

export const isDateScale = (axis: Axis) => {
  try {
    if (!axis) throw new Error('COVE: No axis passed to isDateScale')
    return ['date', 'date-time'].includes(axis.type)
  } catch ({ message }) {
    console.warn(message) // eslint-disable-line
  }
}
