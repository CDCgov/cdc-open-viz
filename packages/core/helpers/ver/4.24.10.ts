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

const update_4_24_10 = config => {
  const ver = '4.24.10'
  const newConfig = _.cloneDeep(config)
  removeMultiSelectPropFromMultiselect(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_10
