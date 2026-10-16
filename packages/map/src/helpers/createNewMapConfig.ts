import { cloneDeep, mergeWith } from 'lodash'

import defaults from '../data/initial-state'
import { MapConfig } from '../types/MapConfig'
import { CURRENT_COVE_CONFIG_VERSION } from '@cdc/core/helpers/coveUpdateWorker'

/**
 * Creates a complete config for a brand-new map using current defaults.
 * Existing and legacy configs must continue through the normal migration and
 * backfill paths instead of using this helper.
 */
export const createNewMapConfig = (starterConfig: Partial<MapConfig> & Record<string, any>): MapConfig => {
  const config = mergeWith(cloneDeep(defaults), cloneDeep(starterConfig), (_defaultValue, starterValue) =>
    Array.isArray(starterValue) ? starterValue : undefined
  ) as MapConfig
  config.table.download = starterConfig.table?.download ?? true
  config.version = CURRENT_COVE_CONFIG_VERSION
  return config
}
