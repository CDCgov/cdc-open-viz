import _ from 'lodash'
import { stripDataFromConfig, restoreDataToConfig } from './configDataHelpers'

/**
 * Performs a deep clone of a config by temporarily
 * removing data from the config during the cloning process
 * to improve performance with large datasets.
 *
 * @param config - The config object to clone
 * @returns A deep clone of the config with all data arrays preserved
 */
export const cloneConfig = (config: any): any => {
  try {
    const { strippedConfig, extractedData } = stripDataFromConfig(config)
    const clonedConfig = _.cloneDeep(strippedConfig)
    const restoredConfig = restoreDataToConfig(clonedConfig, extractedData)

    // Validate that critical data was preserved
    if (config.data && !restoredConfig.data) {
      throw new Error('Data restoration failed: missing data array')
    }

    return restoredConfig
  } catch (error) {
    // Fallback to traditional deep clone if optimization fails
    console.warn('cloneConfig optimization failed, falling back to cloneDeep:', error)
    return _.cloneDeep(config)
  }
}

export default cloneConfig
