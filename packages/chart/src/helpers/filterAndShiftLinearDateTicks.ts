// Ensure that the last tick is shown for charts with a "Date (Linear Scale)" scale
import { ChartConfig } from '../types/ChartConfig'
import { getTicks } from '@visx/scale'
export const filterAndShiftLinearDateTicks = (
  config: ChartConfig,
  axisProps: { scale: any; numTicks: number; ticks: { value: any; formattedValue?: string }[] },
  xAxisDataMapped: any[],
  formatDate: (value: any, index: number, all: any[]) => string
) => {
  // Guard #1: must have a scale & ticks array
  if (!axisProps?.scale || !Array.isArray(axisProps.ticks)) {
    return []
  }

  // Guard #2: if no domain data, just format what we have
  if (!Array.isArray(xAxisDataMapped) || xAxisDataMapped.length === 0) {
    axisProps.ticks.forEach((t, i) => {
      t.formattedValue = formatDate(t.value, i, axisProps.ticks)
    })
    return axisProps.ticks
  }

  // Cap the number of ticks to never exceed the actual data points
  // This prevents duplicate ticks when data is filtered (e.g., brush selection)
  // Handle undefined/null numTicks by using data length as the cap
  const requestedNumTicks = axisProps.numTicks || xAxisDataMapped.length
  const effectiveNumTicks = Math.min(requestedNumTicks, xAxisDataMapped.length)

  // get our filtered tick *values*
  const filteredTickValues = getTicks(axisProps.scale, effectiveNumTicks) || []

  let ticks = axisProps.ticks

  if (filteredTickValues.length > 0 && filteredTickValues.length < xAxisDataMapped.length) {
    const lastFiltered = filteredTickValues[filteredTickValues.length - 1]
    const lastIdx = xAxisDataMapped.indexOf(lastFiltered)

    let shift = 0
    if (lastIdx >= 0 && lastIdx < xAxisDataMapped.length - 1) {
      shift = config.xAxis.sortByRecentDate
        ? -xAxisDataMapped.indexOf(filteredTickValues[0])
        : xAxisDataMapped.length - 1 - lastIdx
    }

    ticks = filteredTickValues.map(value => {
      const baseIndex = axisProps.ticks.findIndex(t => t.value === value)
      const targetIndex = baseIndex + shift

      // Guard #3: if shifting would go out of bounds, clamp
      const safeIndex = Math.max(0, Math.min(axisProps.ticks.length - 1, targetIndex))
      return axisProps.ticks[safeIndex]
    })
  }

  // Remove duplicate ticks based on their value
  // This can happen when requested tick count exceeds available unique data points
  const seenValues = new Set()
  ticks = ticks.filter(tick => {
    if (!tick || tick.value == null) return false
    const valueKey = typeof tick.value === 'number' ? tick.value : tick.value.getTime?.() ?? tick.value
    if (seenValues.has(valueKey)) return false
    seenValues.add(valueKey)
    return true
  })

  // Finally, format all ticks
  ticks.forEach((tick, i) => {
    // Guard #4: only format if we actually have a value
    if (tick && tick.value != null) {
      tick.formattedValue = formatDate(tick.value, i, ticks)
    }
  })

  return ticks
}
