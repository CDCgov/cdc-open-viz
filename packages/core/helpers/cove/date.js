import { timeFormat, timeParse } from 'd3-time-format'

export function formatDate(format = undefined, date) {
  return timeFormat(format)(date)
}

export function parseDate(format = undefined, dateString) {
  return timeParse(format)(dateString) || new Date()
}

export const isDateScale = config => {
  try {
    if (!config) throw new Error('COVE: No config in isDateScale')
    if (!config.xAxis.type && !config.runtime.xAxis.type) throw new Error('COVE: No x axis type in isDateScale')
    return ['date', 'date-time'].includes(config.xAxis.type || config.runtime.xAxis.type)
  } catch ({ message }) {
    console.warn(message) // eslint-disable-line
  }
}
