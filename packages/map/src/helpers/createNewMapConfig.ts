import { cloneDeep, mergeWith } from 'lodash'

import defaults from '../data/initial-state'
import { MapConfig } from '../types/MapConfig'

/**
 * Creates a complete config for a brand-new map using current defaults.
 * Existing and legacy configs must continue through the normal migration and
 * backfill paths instead of using this helper.
 */
export const createNewMapConfig = (starterConfig: Partial<MapConfig> & Record<string, any>): MapConfig =>
  mergeWith(cloneDeep(defaults), cloneDeep(starterConfig), (_defaultValue, starterValue) =>
    Array.isArray(starterValue) ? starterValue : undefined
  ) as MapConfig
