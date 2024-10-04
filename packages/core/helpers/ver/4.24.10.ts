import _ from 'lodash'

export const removeMultiSelectPropFromMultiselect = newConfig => {
  if (newConfig.type === 'dashboard') {
    newConfig.dashboard?.sharedFilters.forEach((filter, index) => {
      if (filter.multiSelect) {
        newConfig.dashboard.sharedFilters[index].filterStyle = 'multi-select'
        delete newConfig.dashboard.sharedFilters[index].multiSelect
      }
    })
  }
}

export const changePivotColumns = newConfig => {
  if (newConfig.type === 'dashboard') {
    Object.keys(newConfig.visualizations).forEach(key => {
      const currentViz = newConfig.visualizations[key]
      if (currentViz.table?.pivot?.valueColumn) {
        newConfig.visualizations[key].table.pivot.valueColumns = [currentViz.table.pivot.valueColumn]
        delete newConfig.visualizations[key].table.pivot.valueColumn
      }
    })
  }
  if (newConfig.table?.pivot?.valueColumn) {
    newConfig.table.pivot.valueColumns = [newConfig.table.pivot.valueColumn]
    delete newConfig.table.pivot.valueColumn
  }

  return newConfig
}

const update_4_24_10 = config => {
  const ver = '4.24.10'
  const newConfig = _.cloneDeep(config)
  removeMultiSelectPropFromMultiselect(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_10
