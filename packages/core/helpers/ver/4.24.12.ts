import _ from 'lodash'
import type { AllChartsConfig } from '@cdc/chart/src/types/ChartConfig'

/**
 * migrateConfidenceKeys
 * Previous confidence keys were stored in the single object config.confidenceKeys.lower and config.confidenceKeys.upper
 * We need to migrate these to the new format in config.series to handle multiple series and multiple confidence intervals
 * @param newConfig
 * @returns newConfig
 */
const migrateConfidenceKeys = (newConfig: AllChartsConfig) => {
  // Move confidence keys to series
  if (newConfig.confidenceKeys && newConfig.series.length === 1 && newConfig.series[0].type === 'Bar') {
    return newConfig.series.forEach((series, index) => {
      newConfig.series[index].confidenceIntervals = [
        {
          low: String(newConfig.confidenceKeys.lower),
          high: String(newConfig.confidenceKeys.upper),
          showInTooltip: true
        }
      ]
    })
  }
  // Remove old confidence keys
  delete newConfig.confidenceKeys
  return newConfig
}

const update_4_24_12 = config => {
  const ver = '4.24.12'
  const newConfig = _.cloneDeep(config)
  migrateConfidenceKeys(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_12
