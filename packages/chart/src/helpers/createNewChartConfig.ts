import { cloneDeep, mergeWith } from 'lodash'

import defaults from '../data/initial-state'
import { ChartConfig } from '../types/ChartConfig'
import { getChartTypeDefaultPalette } from './getChartTypeDefaultPalette'
import { CURRENT_COVE_CONFIG_VERSION } from '@cdc/core/helpers/coveUpdateWorker'
import { applyChartTypeContract } from './applyChartTypeContract'

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
  config.table.download = starterConfig.table?.download ?? !isDashboard
  config.legend.unified = starterConfig.legend?.unified ?? true
  config.version = CURRENT_COVE_CONFIG_VERSION

  if (starterConfig.visualizationType === 'HeatMap') {
    config.xAxis.manual = starterConfig.xAxis?.manual ?? false
    config.xAxis.numTicks = starterConfig.xAxis?.numTicks
    config.xAxis.viewportNumTicks = starterConfig.xAxis?.viewportNumTicks ?? {}
  }

  return applyChartTypeContract(config)
}
