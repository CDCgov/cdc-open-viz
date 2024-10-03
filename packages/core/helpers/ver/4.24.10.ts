import _ from 'lodash'
import { editConfigKeys } from '@cdc/chart/src/helpers/configHelpers'

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

export const setXAxisLabelOffsetToZero = newConfig =>
  editConfigKeys(newConfig, [{ path: ['xAxis', 'labelOffset'], value: 0 }])

const update_4_24_10 = config => {
  const ver = '4.24.10'
  let newConfig = _.cloneDeep(config)
  newConfig = setXAxisLabelOffsetToZero(config)
  removeMultiSelectPropFromMultiselect(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_10
