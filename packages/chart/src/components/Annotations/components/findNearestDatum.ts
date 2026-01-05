/**
 * Finds the nearest data point to a given pixel coordinate.
 * Uses the visible/filtered data only.
 *
 * Scale types by axis:
 * - 'categorical' → band scale
 * - 'date' → band scale (discrete dates)
 * - 'date-time' → time scale (continuous)
 * - 'continuous' → linear scale
 *
 * @param data - The filtered/visible data array (transformedData)
 * @param xScale - The x scale (can be band, time, or linear)
 * @param xAxisType - Type of x axis ('categorical', 'date', 'date-time', or 'continuous')
 * @param xAxisDataKey - The key used for x values in data rows
 * @param seriesKey - The key used for y values in data rows
 * @param xPixel - The pixel x coordinate to find nearest datum for
 * @returns Object with { x: dataX, y: dataY } or null if not found
 */
const findNearestDatum = ({ data, xScale, xAxisType, xAxisDataKey, seriesKey, xPixel }) => {
  if (!data || data.length === 0) {
    return null
  }

  // Handle categorical and date (both use band scales)
  if (xAxisType === 'categorical' || xAxisType === 'date') {
    const domain = xScale.domain()
    const bandwidth = xScale.bandwidth?.() || 0

    // Find closest band center
    const closestValue = domain
      .map(value => ({
        value,
        distance: Math.abs(xPixel - (xScale(value) + bandwidth / 2))
      }))
      .sort((a, b) => a.distance - b.distance)[0]?.value

    // Find the data row with this x value
    const dataRow = data.find(d => d[xAxisDataKey] === closestValue)
    if (!dataRow) return null

    return {
      x: dataRow[xAxisDataKey],
      y: dataRow[seriesKey]
    }
  }

  // Handle date-time (time scale with continuous dates)
  if (xAxisType === 'date-time') {
    const targetTime = xScale.invert(xPixel).getTime()

    // Find closest data point by timestamp distance
    const closestRow = data
      .map(row => ({
        row,
        distance: Math.abs(new Date(row[xAxisDataKey]).getTime() - targetTime)
      }))
      .sort((a, b) => a.distance - b.distance)[0]?.row

    if (!closestRow) return null

    return {
      x: closestRow[xAxisDataKey],
      y: closestRow[seriesKey]
    }
  }

  // Handle continuous (linear scale)
  const invertedValue = xScale.invert(xPixel)

  // Find closest data point by numeric distance
  const closestRow = data
    .map(row => ({
      row,
      distance: Math.abs(Number(row[xAxisDataKey]) - invertedValue)
    }))
    .sort((a, b) => a.distance - b.distance)[0]?.row

  if (!closestRow) return null

  return {
    x: closestRow[xAxisDataKey],
    y: closestRow[seriesKey]
  }
}

export { findNearestDatum }
