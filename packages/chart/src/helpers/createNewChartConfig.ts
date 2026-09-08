import { cloneDeep, mergeWith } from 'lodash'

import defaults, { DEFAULT_BAR_THICKNESS } from '../data/initial-state'
import { ChartConfig } from '../types/ChartConfig'
import { ensureSpecialChartAxisTypes } from './ensureSpecialChartAxisTypes'
import { getChartTypeDefaultPalette } from './getChartTypeDefaultPalette'

type CreateNewChartConfigOptions = {
  isDashboard?: boolean
}

/**
 * Creates a complete config for a brand-new chart using current defaults.
 * Existing and legacy configs must continue through the normal migration and
 * backfill paths instead of using this helper.
 */
export const createNewChartConfig = (
  starterConfig: Partial<ChartConfig> & Record<string, any>,
  { isDashboard = false }: CreateNewChartConfigOptions = {}
): ChartConfig => {
  const currentDefaults = cloneDeep(defaults)
  const defaultPalette = getChartTypeDefaultPalette(starterConfig.visualizationType)

  if (defaultPalette && !starterConfig.general?.palette) {
    currentDefaults.general.palette = cloneDeep(defaultPalette)
  }

  const config = mergeWith(currentDefaults, cloneDeep(starterConfig), (_defaultValue, starterValue) =>
    Array.isArray(starterValue) ? starterValue : undefined
  ) as ChartConfig

  config.table.show = starterConfig.table?.show ?? !isDashboard
  config.barThickness = starterConfig.barThickness ?? DEFAULT_BAR_THICKNESS

  return ensureSpecialChartAxisTypes(config)
}
