import { DashboardState } from '../store/dashboard.reducer'
import { DashboardConfig as Config } from '../types/DashboardConfig'
import { filterData } from './filterData'
import { generateValuesForFilter } from './generateValuesForFilter'
import { getFormattedData } from './getFormattedData'
import { getVizKeys } from './getVizKeys'

export const getUpdateConfig =
  (state: DashboardState) =>
  (newConfig, dataOverride?: Object): [Config, Object] => {
    let newFilteredData = {}
    let visualizationKeys = getVizKeys(newConfig)
    const setFilter = (filterIndex: number, key: string, value: any) => {
      newConfig.dashboard.sharedFilters[filterIndex][key] = value
    }
    if (newConfig.dashboard.sharedFilters) {
      newConfig.dashboard.sharedFilters.forEach((filter, i) => {
        const filterIsSetByVizData = !!visualizationKeys.find(key => key === filter.setBy)
        let _filter = newConfig.dashboard.sharedFilters[i]

        if (filterIsSetByVizData) {
          const filterValues = generateValuesForFilter(filter.columnName, dataOverride || state.data, state.config?.filterBehavior)

          if (_filter.order === 'asc') {
            filterValues.sort()
          }
          if (_filter.order === 'desc') {
            filterValues.sort().reverse()
          }

          setFilter(i, 'values', filterValues)
          _filter = newConfig.dashboard.sharedFilters[i]
          if (filterValues.length > 0) {
            setFilter(i, 'active', _filter.active || _filter.values[0])
          }
        }

        if ((!filter.values || filter.values.length === 0) && filter.showDropdown) {
          const generatedValues = generateValuesForFilter(filter.columnName, dataOverride || state.data, state.config?.filterBehavior)
          setFilter(i, 'values', generatedValues)
          const _filter = newConfig.dashboard.sharedFilters[i]
          if (_filter.values.length > 0) {
            setFilter(i, 'active', filter.active || _filter.values[0])
          }
        }
      })

      visualizationKeys.forEach(visualizationKey => {
        let applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1)

        if (applicableFilters.length > 0) {
          const visualization = newConfig.visualizations[visualizationKey]
          const _newConfigDataSet = newConfig.datasets[visualization.dataKey]
          const formattedData = getFormattedData(_newConfigDataSet?.data || visualization.data, visualization.dataDescription)
          const _data = formattedData || (dataOverride || state.data)[visualization.dataKey]
          newFilteredData[visualizationKey] = filterData(applicableFilters, _data, state.config?.filterBehavior)
        }
      })
    }
    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    return [newConfig, newFilteredData]
  }
