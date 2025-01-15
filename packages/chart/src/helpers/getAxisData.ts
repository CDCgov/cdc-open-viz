import { isDateScale } from '@cdc/core/helpers/cove/date'
export const getXAxisData = (d, config, parseDate) =>
  isDateScale(config.runtime.xAxis)
    ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime()
    : d[config.runtime.originalXAxis.dataKey]
export const getYAxisData = (d, seriesKey) => d[seriesKey]
