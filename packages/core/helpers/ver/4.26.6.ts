import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { SharedFilter } from '@cdc/dashboard/src/types/SharedFilter'

type LegacyFileNameSharedFilter = SharedFilter & {
  datasetKey?: string
  fileName?: string
}

const migrateFileNameUrlFilterTargets = (filter: LegacyFileNameSharedFilter) => {
  if (filter?.type !== 'urlfilter' || filter.filterBy !== 'File Name') return

  if (filter.datasetKey) {
    const legacyTarget = {
      datasetKey: filter.datasetKey,
      fileName: filter.fileName || '${query}'
    }
    const existingTargets = Array.isArray(filter.fileNameTargets) ? filter.fileNameTargets : []
    const hasLegacyTarget = existingTargets.some(target => target.datasetKey === legacyTarget.datasetKey)
    filter.fileNameTargets = hasLegacyTarget ? existingTargets : [...existingTargets, legacyTarget]
    filter.forceFileNameCapitalization = true
  }

  delete filter.datasetKey
  delete filter.fileName
}

const run_4_26_6_migrations = config => {
  if (config.type !== 'dashboard') return

  const dashboardConfig = config as DashboardConfig
  dashboardConfig.dashboard?.sharedFilters?.forEach(migrateFileNameUrlFilterTargets)

  Object.values(dashboardConfig.visualizations || {}).forEach(visualization => {
    run_4_26_6_migrations(visualization)
  })
}

const update_4_26_6 = config => {
  const ver = '4.26.6'
  const newConfig = cloneConfig(config)
  run_4_26_6_migrations(newConfig)
  newConfig.version = ver
  return newConfig
}

export { migrateFileNameUrlFilterTargets }
export default update_4_26_6
