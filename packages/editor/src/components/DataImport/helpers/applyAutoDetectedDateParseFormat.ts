import { detectDateParseFormat, isDateScale } from '@cdc/core/helpers/cove/date'
import { type Visualization } from '@cdc/core/types/Visualization'

const isChartWithDateAxis = (config: Visualization) =>
  config?.type === 'chart' && !!config?.xAxis && isDateScale(config.xAxis)

export const applyAutoDetectedDateParseFormat = (
  config: Visualization,
  importedData: Record<string, unknown>[]
): Visualization => {
  if (!isChartWithDateAxis(config) || !config?.xAxis?.dataKey || !importedData?.length) {
    return config
  }

  const existingDateParseFormat = config.xAxis.dateParseFormat

  if (
    typeof existingDateParseFormat === 'string' &&
    existingDateParseFormat.trim() !== ''
  ) {
    return config
  }
  const xAxisKey = config.xAxis.dataKey

  const hasXAxisKeyInImportedData = importedData.some(
    row => row && Object.prototype.hasOwnProperty.call(row, xAxisKey)
  )

  if (!hasXAxisKeyInImportedData) {
    return config
  }

  const dateDetectionSamples: unknown[] = []

  for (const row of importedData) {
    const value = row?.[xAxisKey]
    const normalizedValue = typeof value === 'string' ? value.trim() : value

    if (normalizedValue !== null && normalizedValue !== undefined && normalizedValue !== '') {
      dateDetectionSamples.push(value)
    }

    if (dateDetectionSamples.length >= 50) {
      break
    }
  }

  const detection = detectDateParseFormat(dateDetectionSamples)
  if (!detection.isReliable || !detection.detectedFormat) {
    return config
  }

  return {
    ...config,
    xAxis: {
      ...config.xAxis,
      dateParseFormat: detection.detectedFormat
    }
  }
}
