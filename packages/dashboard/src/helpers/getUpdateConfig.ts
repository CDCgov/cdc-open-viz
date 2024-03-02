import { DashboardState } from '../store/dashboard.reducer'
import { DashboardConfig as Config, DashboardConfig } from '../types/DashboardConfig'
import { filterData } from './filterData'
import { generateValuesForFilter } from './generateValuesForFilter'
import { getFormattedData } from './getFormattedData'
import { getVizKeys } from './getVizKeys'

type UpdateState = Omit<DashboardState, 'config'> & {
  config?: DashboardConfig
}

export const getUpdateConfig =
  (state: UpdateState) =>
  (newConfig, dataOverride?: Object): [Config, Object] => {
    let newFilteredData = {}
    let visualizationKeys = getVizKeys(newConfig)

    if (newConfig.dashboard.sharedFilters) {
      newConfig.dashboard.sharedFilters.forEach((filter, i) => {
        const filterIsSetByVizData = !!visualizationKeys.find(key => key === filter.setBy)
        const _filter = newConfig.dashboard.sharedFilters[i]

        const setValuesAndActive = filterValues => {
          _filter.values = filterValues
          if (filterValues.length > 0) {
            const defaultValues = _filter.pivot ? _filter.values : _filter.values[0]

            const urlParams = new URLSearchParams(window.location.search);
            if(_filter.setByQueryParameter && urlParams.get(_filter.setByQueryParameter) && _filter.values && _filter.values.includes(urlParams.get(_filter.setByQueryParameter))){
              _filter.active = urlParams.get(_filter.setByQueryParameter)
            } else {
              _filter.active = _filter.active || defaultValues
            }
          }
        }

        const filterValues = generateValuesForFilter(filter.columnName, dataOverride || state.data)
        if (filterIsSetByVizData) {
          if (_filter.order === 'asc') {
            filterValues.sort()
          }
          if (_filter.order === 'desc') {
            filterValues.sort().reverse()
          }

          setValuesAndActive(filterValues)
        } else if ((!filter.values || filter.values.length === 0) && filter.showDropdown) {
          setValuesAndActive(filterValues)
        }
      })

      visualizationKeys.forEach(visualizationKey => {
        const applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1)

        if (applicableFilters.length > 0) {
          const visualization = newConfig.visualizations[visualizationKey]
          const _newConfigDataSet = newConfig.datasets[visualization.dataKey]
          const formattedData = getFormattedData(_newConfigDataSet?.data || visualization.data, visualization.dataDescription)
          const _data = formattedData || (dataOverride || state.data)[visualization.dataKey]
          newFilteredData[visualizationKey] = filterData(applicableFilters, _data)
        }
      })
    }
    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    return [newConfig, newFilteredData]
  }
