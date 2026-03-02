import { timeFormat, timeParse } from 'd3-time-format'
import { type Axis } from '@cdc/core/types/Axis'

const NBSP = '\u00A0'

/**
 * Converts a date display format string for rendering:
 *
 * 1. NBSP insertion — When a regular space sits between a month directive
 *    (%b, %b., %B, %m, etc.) and a day directive (%d, %-d, %e, %-e),
 *    it is replaced with a non-breaking space so the month and day always
 *    stay on the same line. Users can type a normal space in the editor;
 *    the NBSP is only injected at render time.
 *
 *    Regex breakdown:  (%[bBm]\.?) (%-?[de]|%[de])
 *      (%[bBm]\.?)   — capture group 1: a month directive (%b, %B, or %m)
 *                       optionally followed by a literal period
 *      (space)       — the single regular space we want to replace
 *      (%-?[de]|%[de]) — capture group 2: a day directive (%d, %-d, %e, %-e)
 *
 * 2. "May." correction — When the format uses %b. (abbreviated month + period),
 *    "May" is already the full name at 3 letters and should not get a trailing
 *    period. We strip "May." → "May" from the *formatted output*.
 */
export function getDateRenderFormat(format: string | undefined): string | undefined {
  if (!format || typeof format !== 'string') return format
  return format.replace(/(%[bBm]\.?) (%-?[de]|%[de])/g, `$1${NBSP}$2`)
}

export function formatDate(format = undefined, date) {
  const renderFormat = getDateRenderFormat(format)
  let result = timeFormat(renderFormat)(date)
  // "May" is already 3 letters — strip the trailing period added by %b.
  if (renderFormat?.includes('%b.') && result.includes('May.')) {
    result = result.replace(/May\./g, 'May')
  }
  return result
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
