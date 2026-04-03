import { detectDateParseFormat, isDateScale } from '@cdc/core/helpers/cove/date'
import { type Visualization } from '@cdc/core/types/Visualization'

const isChartWithDateAxis = (config: Visualization) => config?.type === 'chart' && isDateScale(config?.xAxis)

export const applyAutoDetectedDateParseFormat = (
  config: Visualization,
  importedData: Record<string, unknown>[]
): Visualization => {
  if (!isChartWithDateAxis(config) || !config?.xAxis?.dataKey || !importedData?.length) {
    return config
  }

  const xAxisKey = config.xAxis.dataKey

  if (!(xAxisKey in importedData[0])) {
    return config
  }

  const detection = detectDateParseFormat(importedData.map(row => row?.[xAxisKey]))

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
