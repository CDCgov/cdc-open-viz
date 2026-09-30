import cloneDeep from 'lodash/cloneDeep'
import defaultsDeep from 'lodash/defaultsDeep'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import set from 'lodash/set'

import { backfillDefaults } from '../../../backfillDefaults'
import { coveUpdateWorker } from '../../../coveUpdateWorker'
import chartDefaults, { DEFAULT_BAR_THICKNESS } from '../../../../../chart/src/data/initial-state'
import { LEGACY_CHART_DEFAULTS } from '../../../../../chart/src/data/legacy-defaults'
import { classifyChartPaletteForLoading } from '../../../../../chart/src/helpers/classifyChartPaletteForLoading'
import { ensureSpecialChartAxisTypes } from '../../../../../chart/src/helpers/ensureSpecialChartAxisTypes'
import mapDefaults from '../../../../../map/src/data/initial-state'
import { LEGACY_MAP_DEFAULTS } from '../../../../../map/src/data/legacy-defaults'
import { getInitialState as getMapInitialState } from '../../../../../map/src/store/map.reducer'
import dashboardDefaults from '../../../../../dashboard/src/data/initial-state'
import dataBiteDefaults from '../../../../../data-bite/src/data/initial-state'
import waffleDefaults from '../../../../../waffle-chart/src/data/initial-state'
import markupIncludeDefaults from '../../../../../markup-include/src/data/initial-state'
import dataTableDefaults from '../../../../../data-table/src/data/initial-state'
import { ensureRowConditionIds } from '../../../../../dashboard/src/helpers/dashboardConditions'

export type EffectiveConfigKind =
  | 'chart'
  | 'map'
  | 'dashboard'
  | 'data-bite'
  | 'waffle-chart'
  | 'markup-include'
  | 'table'

const prepareChart = (rawConfig: any, isDashboard = false) => {
  const loadedConfig = cloneDeep(rawConfig)
  const paletteClassification = classifyChartPaletteForLoading(loadedConfig)
  const loadingDefaults = cloneDeep(chartDefaults)

  if (paletteClassification !== 'modern') delete loadingDefaults.general?.palette

  let config = { ...loadingDefaults, ...loadedConfig }

  if (paletteClassification === 'frozen-fallback') {
    config = {
      ...config,
      migrations: { ...config.migrations, paletteFallbackFrozen: true }
    }
  }

  if (config.visualizationType === 'Horizon Chart') {
    const numLayers = config.horizon?.numLayers ?? 4
    const currentCount = get(config, 'general.paletteColorCount', 4)
    set(config, 'general.paletteColorCount', Math.max(currentCount, numLayers))
  }

  defaultsDeep(config, { table: { showVertical: false } })
  set(config, 'table.show', get(config, 'table.show', !isDashboard))
  forEach(config.series, series => defaultsDeep(series, { tooltip: true, axis: 'Left' }))
  ensureSpecialChartAxisTypes(config)

  if (!isDashboard) config = coveUpdateWorker(config)
  if (config.barThickness === undefined) config.barThickness = DEFAULT_BAR_THICKNESS

  const heatMapNeedsSideTitle = config.visualizationType === 'HeatMap' && !config.yAxis?.titlePlacement
  backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
  if (!config.table.label) config.table.label = 'Data Table'

  if (config.visualizationType === 'Box Plot' && config.series) {
    config.boxplot.categories = []
    config.yAxis.labelPlacement = 'On Date/Category Axis'
  }

  if (config.visualizationType === 'Forecasting' && config.series && config.xAxis.type === 'categorical') {
    config.xAxis.type = 'date'
    if (!config.xAxis.dateParseFormat) config.xAxis.dateParseFormat = '%Y-%m-%d'
    if (!config.xAxis.dateDisplayFormat) config.xAxis.dateDisplayFormat = '%Y-%m-%d'
  }

  if (config.visualizationType === 'HeatMap') {
    if (heatMapNeedsSideTitle) config.yAxis.titlePlacement = 'side'
    config.yAxis.type = 'categorical'
    config.legend = {
      ...config.legend,
      position: config.legend?.position || 'top',
      style: config.legend?.style || 'gradient',
      subStyle: config.legend?.subStyle === 'smooth' ? 'linear blocks' : config.legend?.subStyle || 'linear blocks'
    }
  }

  if (config.visualizationType === 'Horizon Chart' && config.series) {
    config.horizon = {
      numLayers: 4,
      mode: 'offset',
      bandGap: 15,
      bottomPadding: 15,
      ...config.horizon
    }
    if (!config.xAxis.type) config.xAxis.type = 'categorical'
  }

  if (
    ['date-time', 'date'].includes(config.xAxis?.type) &&
    config.xAxis?.dataKey &&
    !config.table?.defaultSort?.column
  ) {
    config.table.defaultSort = { column: config.xAxis.dataKey, sortDirection: 'desc' }
  }

  if (config.visualizationType === 'Paired Bar') config.orientation = 'horizontal'

  const mountsDataRenderer = Array.isArray(config.data) && config.data.length > 0
  if (config.visualizationType === 'Bar' && mountsDataRenderer) {
    if (config.isLollipopChart === false && config.barHeight < 25) config.barHeight = 25
    if (config.barStyle === 'lollipop' && !config.isLollipopChart) config.isLollipopChart = true
    if (config.barStyle === 'rounded' || config.barStyle === 'flat') config.isLollipopChart = false
  }

  if (config.visualizationType === 'Forest Plot' && mountsDataRenderer) {
    const defaultColumns = ['estimateField', 'lower', 'upper', 'estimateRadius']
    for (let index = 0; index < 10; index++) {
      defaultColumns.forEach(column => {
        const dataKey = config.forestPlot?.[column]
        if (dataKey && dataKey !== config.columns?.[config.forestPlot?.[`additionalColumn${index}`]]?.name) {
          delete config.columns[`additionalColumn${index}`]
          config.columns[dataKey] = {
            dataKey,
            name: dataKey,
            dataTable: true,
            tooltips: true,
            label: dataKey
          }
        }
      })
    }

    const scalingColumn = config.forestPlot?.radius?.scalingColumn
    if (scalingColumn) {
      config.columns[scalingColumn] = {
        dataKey: scalingColumn,
        name: scalingColumn,
        label: scalingColumn,
        dataTable: true,
        tooltips: true
      }
    }
    if (config.table.showVertical) config.table.indexLabel = config.xAxis.dataKey
    if (config.forestPlot?.type === 'Logarithmic') config.dataFormat.roundTo = 2
  }

  return config
}

const prepareMap = (rawConfig: any) => {
  let config = { ...cloneDeep(mapDefaults), ...cloneDeep(rawConfig) }
  if (config.table?.forceDisplay === undefined) config.table.forceDisplay = true
  config = coveUpdateWorker(config)
  backfillDefaults(config, mapDefaults, LEGACY_MAP_DEFAULTS)
  if (Array.isArray(config.legend.specialClasses) && typeof config.legend.specialClasses[0] === 'string') {
    const key = config.columns.primary?.name || Object.keys(config.data?.[0] || {})[0]
    config.legend.specialClasses = config.legend.specialClasses.map(specialClass => ({
      key,
      value: specialClass,
      label: specialClass
    }))
  }
  return getMapInitialState(config).config
}

const mergePresentSections = (config: any, defaults: any) => {
  Object.keys(defaults).forEach(key => {
    if (config[key] && typeof config[key] === 'object' && !Array.isArray(config[key])) {
      config[key] = { ...cloneDeep(defaults[key]), ...config[key] }
    }
  })
  return config
}

const prepareDataBite = (rawConfig: any) => {
  const input = cloneDeep(rawConfig)
  input.data = input.data ?? []
  const migrated = coveUpdateWorker(input)

  // This compatibility correction is part of the current data-bite load path.
  if (migrated.visual?.border === false) migrated.visual.border = true

  const config = { ...cloneDeep(dataBiteDefaults), ...migrated }
  backfillDefaults(config, dataBiteDefaults)
  delete config.runtime
  return config
}

const prepareWaffle = (rawConfig: any) => {
  const input = cloneDeep(rawConfig)
  input.data = input.data ?? {}
  const config = { ...cloneDeep(waffleDefaults), ...coveUpdateWorker(input) }
  mergePresentSections(config, waffleDefaults)
  delete config.runtime
  return config
}

const prepareMarkupInclude = (rawConfig: any) => {
  const input = cloneDeep(rawConfig)
  input.data = input.data ?? {}
  const config = { ...cloneDeep(markupIncludeDefaults), ...coveUpdateWorker(input) }
  mergePresentSections(config, markupIncludeDefaults)
  delete config.runtime
  return config
}

const prepareDataTable = (rawConfig: any) => ({
  ...cloneDeep(dataTableDefaults),
  ...coveUpdateWorker(cloneDeep(rawConfig))
})

const inferKind = (config: any): EffectiveConfigKind | undefined => {
  if (config.type === 'chart') return 'chart'
  if (config.type === 'map') return 'map'
  if (config.type === 'dashboard') return 'dashboard'
  if (config.type === 'data-bite') return 'data-bite'
  if (config.type === 'waffle-chart') return 'waffle-chart'
  if (config.type === 'markup-include') return 'markup-include'
  if (config.type === 'table' || config.type === 'data-table') return 'table'
  return undefined
}

const prepareDashboard = (rawConfig: any) => {
  const input = cloneDeep(rawConfig)
  const selectedDashboard = input.multiDashboards?.[0]
  const loadingConfig = selectedDashboard
    ? {
        ...cloneDeep(dashboardDefaults),
        ...input,
        ...selectedDashboard,
        multiDashboards: input.multiDashboards,
        activeDashboard: 0
      }
    : { ...cloneDeep(dashboardDefaults), ...input }
  const migrated = coveUpdateWorker(loadingConfig)
  migrated.rows = ensureRowConditionIds(migrated.rows)
  if (input.multiDashboards) migrated.multiDashboards = input.multiDashboards
  delete migrated.runtime
  return migrated
}

export const prepareEffectiveConfig = (rawConfig: any, kind?: EffectiveConfigKind, isDashboard = false): any => {
  const resolvedKind = kind ?? inferKind(rawConfig)
  if (!resolvedKind) return cloneDeep(rawConfig)

  switch (resolvedKind) {
    case 'chart':
      return prepareChart(rawConfig, isDashboard)
    case 'map':
      return prepareMap(rawConfig)
    case 'dashboard':
      return prepareDashboard(rawConfig)
    case 'data-bite':
      return prepareDataBite(rawConfig)
    case 'waffle-chart':
      return prepareWaffle(rawConfig)
    case 'markup-include':
      return prepareMarkupInclude(rawConfig)
    case 'table':
      return prepareDataTable(rawConfig)
  }
}
