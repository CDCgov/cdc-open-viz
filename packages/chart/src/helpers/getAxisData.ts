import { isDateScale } from '@cdc/core/helpers/cove/date'
import { ChartConfig } from '../types/ChartConfig'

export const getXAxisData = (
  d: Record<string, any>,
  config: ChartConfig,
  parseDate: (date: any) => Date
): number | any => {
  return isDateScale(config.runtime.xAxis)
    ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime()
    : d[config.runtime.originalXAxis.dataKey]
}

export const getYAxisData = (d: Record<string, any>, seriesKey: string): any => {
  return d[seriesKey]
}
