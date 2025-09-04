import _ from 'lodash'
import { stripDataFromConfig, restoreDataToConfig } from './configDataHelpers'

/**
 * Performs a deep clone of a config by temporarily
 * removing data from the config  during the cloning process
 * to improve performance with large datasets.
 *
 * @param config - The config object to clone
 * @returns A deep clone of the config with all data arrays preserved
 */
export const cloneConfig = (config: any): any => {
  const { strippedConfig, extractedData } = stripDataFromConfig(config)

  const clonedConfig = _.cloneDeep(strippedConfig)

  return restoreDataToConfig(clonedConfig, extractedData)
}

export default cloneConfig
