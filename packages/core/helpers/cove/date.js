import { timeFormat, timeParse } from 'd3-time-format'

export function formatDate(format = undefined, date) {
  return timeFormat(format)(date)
}

export function parseDate(format = undefined, dateString) {
  const parsedDate = timeParse(format)(dateString)
  return parsedDate || null
}
