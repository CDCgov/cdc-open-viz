import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { SharedFilter } from '@cdc/dashboard/src/types/SharedFilter'

type LegacyFileNameSharedFilter = SharedFilter & {
  datasetKey?: string
  fileName?: string
}

const VALUE_PLACEHOLDER = '${value}'
const LEGACY_QUERY_PLACEHOLDER = '${query}'

const normalizeFileNameTemplate = (fileName?: string) =>
  (fileName || VALUE_PLACEHOLDER).split(LEGACY_QUERY_PLACEHOLDER).join(VALUE_PLACEHOLDER)

const migrateFileNameUrlFilterTargets = (filter: LegacyFileNameSharedFilter) => {
  if (filter?.type !== 'urlfilter' || filter.filterBy !== 'File Name') return

  const existingTargets = Array.isArray(filter.fileNameTargets)
    ? filter.fileNameTargets.map(target => ({
        ...target,
        fileName: normalizeFileNameTemplate(target.fileName)
      }))
    : []

  if (filter.datasetKey) {
    const legacyTarget = {
      datasetKey: filter.datasetKey,
      fileName: normalizeFileNameTemplate(filter.fileName)
    }
    const hasLegacyTarget = existingTargets.some(target => target.datasetKey === legacyTarget.datasetKey)
    filter.fileNameTargets = hasLegacyTarget ? existingTargets : [...existingTargets, legacyTarget]
    filter.forceFileNameCapitalization = true
  } else if (existingTargets.length) {
    filter.fileNameTargets = existingTargets
  }

  delete filter.datasetKey
  delete filter.fileName
}

const applyLegacyAutoMaxStrategy = config => {
  if (config.type === 'chart') {
    config.yAxis = config.yAxis || {}

    if (
      config.yAxis.autoMaxStrategy === undefined ||
      config.yAxis.autoMaxStrategy === null ||
      config.yAxis.autoMaxStrategy === ''
    ) {
      config.yAxis.autoMaxStrategy = config.yAxis.titlePlacement === 'top' ? 'clean-top-tick' : 'default'
    }
  }
}

const run_4_26_6_migrations = config => {
  applyLegacyAutoMaxStrategy(config)

  if (config.type === 'dashboard') {
    const dashboardConfig = config as DashboardConfig
    dashboardConfig.dashboard?.sharedFilters?.forEach(migrateFileNameUrlFilterTargets)
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      run_4_26_6_migrations(visualization)
    })
  }
}

const update_4_26_6 = config => {
  const ver = '4.26.6'
  const newConfig = cloneConfig(config)
  run_4_26_6_migrations(newConfig)
  newConfig.version = ver
  return newConfig
}

export { applyLegacyAutoMaxStrategy, migrateFileNameUrlFilterTargets }

export default update_4_26_6
