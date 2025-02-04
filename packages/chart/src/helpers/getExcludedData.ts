import { isDateScale } from '@cdc/core/helpers/cove/date'
import _ from 'lodash'
import { ChartConfig } from '../types/ChartConfig'
export const getExcludedData = (newConfig: ChartConfig, data: object[]) => {
  let newExcludedData = data
  if (newConfig.exclusions && newConfig.exclusions.active) {
    if (newConfig.xAxis.type === 'categorical' && newConfig.exclusions.keys?.length > 0) {
      newExcludedData = data.filter(e => !newConfig.exclusions.keys.includes(e[newConfig.xAxis.dataKey]))
    } else if (
      isDateScale(newConfig.xAxis) &&
      (newConfig.exclusions.dateStart || newConfig.exclusions.dateEnd) &&
      newConfig.xAxis.dateParseFormat
    ) {
      // Filter dates
      const timestamp = e => new Date(e).getTime()

      let startDate = timestamp(newConfig.exclusions.dateStart)
      let endDate = timestamp(newConfig.exclusions.dateEnd) + 86399999 //Increase by 24h in ms (86400000ms - 1ms) to include selected end date for .getTime() comparative

      let startDateValid = undefined !== typeof startDate && false === isNaN(startDate)
      let endDateValid = undefined !== typeof endDate && false === isNaN(endDate)

      if (startDateValid && endDateValid) {
        newExcludedData = data.filter(
          e => timestamp(e[newConfig.xAxis.dataKey]) >= startDate && timestamp(e[newConfig.xAxis.dataKey]) <= endDate
        )
      } else if (startDateValid) {
        newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) >= startDate)
      } else if (endDateValid) {
        newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
      }
    } else {
      newExcludedData = data
    }
  }
  return newExcludedData
}
