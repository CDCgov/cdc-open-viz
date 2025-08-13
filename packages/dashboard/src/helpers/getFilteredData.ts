import { DashboardState } from '../store/dashboard.reducer'
import { Dashboard } from '../types/Dashboard'
import { SharedFilter } from '../types/SharedFilter'
import { filterData } from './filterData'
import { getFormattedData } from './getFormattedData'
import { getVizKeys } from './getVizKeys'

export const getApplicableFilters = (dashboard: Dashboard, key: string | number): false | SharedFilter[] => {
  const c = dashboard.sharedFilters?.filter(
    sharedFilter => (sharedFilter.usedBy && sharedFilter.usedBy.indexOf(`${key}`) !== -1) || sharedFilter.usedBy?.indexOf(key) !== -1
  )
  return c?.length > 0 ? c : false
}
export const getFilteredData = (
  state: DashboardState,
  initialFilteredData?: Record<string, any>,
  dataOverride?: Object
) => {
  const newFilteredData = initialFilteredData || {}
  const { config } = state
  getVizKeys(config).forEach(key => {
    const applicableFilters = getApplicableFilters(config.dashboard, key)
    if (applicableFilters) {
      const { dataKey, data, dataDescription } = config.visualizations[key]
      const _data = (dataOverride || state.data)[dataKey] || data
      const formattedData =
        dataOverride?.[dataKey] || (dataDescription ? getFormattedData(_data, dataDescription) : _data)

      newFilteredData[key] = filterData(applicableFilters, formattedData)
    }
  })
  config.rows.forEach((row, index) => {
    if (row.dataKey) {
      const applicableFilters = getApplicableFilters(config.dashboard, index)
      const { dataKey, data, dataDescription } = row
      const _data = (dataOverride || state.data)[dataKey] || data
      if (applicableFilters) {
        const formattedData =
          dataOverride?.[dataKey] ?? dataDescription ? getFormattedData(_data, dataDescription) : _data

        newFilteredData[index] = filterData(applicableFilters, formattedData)
      } else {
        newFilteredData[index] = _data || []
      }
    }
  })
  return newFilteredData
}
