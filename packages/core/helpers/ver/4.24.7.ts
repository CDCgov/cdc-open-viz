import _ from 'lodash'

const update_4_24_7 = config => {
  const ver = '4.24.7'

  const newConfig = _.cloneDeep(config)

  // When switching between old version of equal number, and the revised equal number opt in, roundToPlace needs to be set.
  // There wasn't an initial value set for this, and legends would return NaN if it wasn't set. ie. 0 - NAN instead of 0 - 1
  if (newConfig.type === 'map') {
    if (newConfig.columns.primary.roundToPlace === undefined) {
      newConfig.columns.primary.roundToPlace = 0
    }
    newConfig.version = ver
  }

  return newConfig
}
export default update_4_24_7
