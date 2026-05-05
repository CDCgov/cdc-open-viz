import { DashboardState } from '../store/dashboard.reducer'
import { Dashboard } from '../types/Dashboard'
import { SharedFilter } from '../types/SharedFilter'
import { getDashboardConditionFilteredData } from './dashboardConditions'
import { getApplicableFiltersForTarget, getDashboardConditionTargets } from './dashboardFilterTargets'
import { filterData } from './filterData'
import { getFormattedData } from './getFormattedData'
import { getVizKeys } from './getVizKeys'

export const getApplicableFilters = (dashboard: Dashboard, key: string | number): false | SharedFilter[] => {
  return getApplicableFiltersForTarget(dashboard, key, { includeUnscoped: true })
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
  const dashboardConditionTargets = getDashboardConditionTargets(config.rows)
  dashboardConditionTargets.forEach(target => {
    delete newFilteredData[target.id]

    const filteredData = getDashboardConditionFilteredData(
      target.dashboardCondition,
      config.dashboard,
      (dataOverride || state.data) as Record<string, any[]>
    )

    if (filteredData !== undefined) {
      newFilteredData[target.id] = filteredData
    }
  })
  return newFilteredData
}
