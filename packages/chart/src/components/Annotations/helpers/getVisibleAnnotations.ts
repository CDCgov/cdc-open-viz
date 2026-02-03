/**
 * Filters annotations to only include those that should be visible based on current data.
 *
 * - Fixed-mode annotations are always visible
 * - Data-mode annotations are only visible if their associated data point
 *   exists in the current filtered/transformed data
 *
 * @param annotations - Array of annotation objects
 * @param transformedData - The currently visible/filtered data
 * @param xAxisDataKey - The key used to identify data points on the x-axis
 * @returns Array of annotations that should be visible
 */
const getVisibleAnnotations = (
  annotations: any[] | undefined,
  transformedData: any[] | undefined,
  xAxisDataKey: string
): any[] => {
  if (!annotations || !Array.isArray(annotations)) {
    return []
  }

  return annotations.filter(annotation => {
    // Fixed-mode annotations are always visible
    if (annotation.anchorMode !== 'data') {
      return true
    }

    // Data-mode: check if the data point exists in current data
    if (annotation.dataX === undefined) {
      return true // No dataX specified, show it
    }

    const dataSource = transformedData || []
    return dataSource.some(d => d[xAxisDataKey] === annotation.dataX)
  })
}

export { getVisibleAnnotations }
