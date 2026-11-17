import cloneDeep from 'lodash/cloneDeep'
import mergeWith from 'lodash/mergeWith'

import { normalizeDotDensityLegend } from './dotDensityConfig'
import defaults from '../data/initial-state'
import { MapConfig } from '../types/MapConfig'
import { CURRENT_COVE_CONFIG_VERSION } from '@cdc/core/helpers/coveUpdateWorker'

/**
 * Creates a complete config for a brand-new map using current defaults.
 * Existing and legacy configs must continue through the normal migration and
 * backfill paths instead of using this helper.
 */
export const createNewMapConfig = (starterConfig: Partial<MapConfig> & Record<string, any>): MapConfig => {
  const config = mergeWith(
    cloneDeep(defaults),
    cloneDeep(normalizeDotDensityLegend(starterConfig as MapConfig)),
    (_defaultValue, starterValue) => (Array.isArray(starterValue) ? starterValue : undefined)
  ) as MapConfig
  config.table.download = starterConfig.table?.download ?? true
  config.version = CURRENT_COVE_CONFIG_VERSION
  return config
}
