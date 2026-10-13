import cloneDeep from 'lodash/cloneDeep'
import mergeWith from 'lodash/mergeWith'

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

  const config = applyChartTypeContract(
    mergeWith(currentDefaults, cloneDeep(starterConfig), (_defaultValue, starterValue) =>
      Array.isArray(starterValue) ? starterValue : undefined
    ) as ChartConfig
  )

  if (config.orientation === 'horizontal') {
    config.xAxis.hideAxis = starterConfig.xAxis?.hideAxis ?? true
    config.xAxis.hideTicks = starterConfig.xAxis?.hideTicks ?? true
    config.yAxis.hideAxis = starterConfig.yAxis?.hideAxis ?? false
    config.yAxis.hideTicks = starterConfig.yAxis?.hideTicks ?? false
  }

  config.table.show = starterConfig.table?.show ?? !isDashboard
  config.table.download = starterConfig.table?.download ?? !isDashboard
  config.legend.unified = starterConfig.legend?.unified ?? true

  if (starterConfig.visualizationType === 'HeatMap') {
    config.xAxis.manual = starterConfig.xAxis?.manual ?? false
    config.xAxis.numTicks = starterConfig.xAxis?.numTicks
    config.xAxis.viewportNumTicks = starterConfig.xAxis?.viewportNumTicks ?? {}
  }

  config.version = CURRENT_COVE_CONFIG_VERSION
  return config
}
