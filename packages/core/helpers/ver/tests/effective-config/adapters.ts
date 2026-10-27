import cloneDeep from 'lodash/cloneDeep'

import { applyConfigDefaults } from '../../../applyConfigDefaults'
import { coveUpdateWorker } from '../../../coveUpdateWorker'
import chartDefaults from '../../../../../chart/src/data/initial-state'
import mapDefaults from '../../../../../map/src/data/initial-state'
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
  const migratedConfig = isDashboard ? rawConfig : coveUpdateWorker(cloneDeep(rawConfig))
  const packageDefaults = {
    ...chartDefaults,
    table: { ...chartDefaults.table, show: !isDashboard }
  }
  const config = applyConfigDefaults(migratedConfig, packageDefaults)
  if (!config.table.label) config.table.label = 'Data Table'

  if (config.visualizationType === 'Box Plot' && config.series) {
    config.boxplot.categories = []
  }

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
  let config = applyConfigDefaults(coveUpdateWorker(cloneDeep(rawConfig)), mapDefaults)
  if (config.table?.forceDisplay === undefined) config.table.forceDisplay = true
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

const prepareDataBite = (rawConfig: any) => {
  const input = cloneDeep(rawConfig)
  input.data = input.data ?? []
  const migrated = coveUpdateWorker(input)

  const config = applyConfigDefaults(migrated, dataBiteDefaults)
  delete config.runtime
  return config
}

const prepareWaffle = (rawConfig: any) => {
  const input = cloneDeep(rawConfig)
  input.data = input.data ?? {}
  const config = applyConfigDefaults(coveUpdateWorker(input), waffleDefaults)
  delete config.runtime
  return config
}

const prepareMarkupInclude = (rawConfig: any) => {
  const input = cloneDeep(rawConfig)
  input.data = input.data ?? {}
  const config = applyConfigDefaults(coveUpdateWorker(input), markupIncludeDefaults)
  delete config.runtime
  return config
}

const prepareDataTable = (rawConfig: any) =>
  applyConfigDefaults(coveUpdateWorker(cloneDeep(rawConfig)), dataTableDefaults)

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
  const migratedRoot = coveUpdateWorker(cloneDeep(rawConfig))
  const selectedDashboard = migratedRoot.multiDashboards?.[0]
  const projection = selectedDashboard
    ? { ...migratedRoot, ...selectedDashboard, multiDashboards: migratedRoot.multiDashboards, activeDashboard: 0 }
    : migratedRoot
  const config = applyConfigDefaults(projection, dashboardDefaults)
  config.rows = ensureRowConditionIds(config.rows)
  delete config.runtime
  return config
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
