import { getAutoDetectedDateParseFormat, isDateScale } from '@cdc/core/helpers/cove/date'
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

  if (typeof existingDateParseFormat === 'string' && existingDateParseFormat.trim() !== '') {
    return config
  }
  const xAxisKey = config.xAxis.dataKey

  const autoDetectedDateParseFormat = getAutoDetectedDateParseFormat(importedData, xAxisKey)

  if (!autoDetectedDateParseFormat) {
    return config
  }

  return {
    ...config,
    xAxis: {
      ...config.xAxis,
      dateParseFormat: autoDetectedDateParseFormat
    }
  }
}
