import cloneConfig from '../cloneConfig'
import _ from 'lodash'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { SharedFilter } from '@cdc/dashboard/src/types/SharedFilter'
import { sanitizeToSvgId } from '../cove/string'

type DashboardLike = {
  activeDashboard?: number
  dataFormat?: Record<string, any>
  label?: string
  type?: string
  dashboard?: any
  datasets?: Record<string, any>
  multiDashboards?: DashboardLike[]
  rows?: any[]
  table?: any
  visualizations?: Record<string, any>
  version?: string
}

type LegacyFileNameSharedFilter = SharedFilter & {
  datasetKey?: string
  fileName?: string
}

const ver = '4.26.6'
const VALUE_PLACEHOLDER = '${value}'
const LEGACY_QUERY_PLACEHOLDER = '${query}'

const dashboardDownloadFields = [
  'downloadImageButton',
  'downloadImageButtonStyle',
  'downloadImageLabel',
  'downloadPdfButton',
  'includeContextInDownload'
]

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

const getGeneratedTableKey = (dashboard: DashboardLike, datasetKey: string): string => {
  const baseKey = `dashboard-table-${sanitizeToSvgId(datasetKey)}`
  let tableKey = baseKey
  let suffix = 1

  while (dashboard.visualizations?.[tableKey]) {
    tableKey = `${baseKey}-${suffix}`
    suffix += 1
  }

  return tableKey
}

const hasGeneratedTableForDataset = (dashboard: DashboardLike, datasetKey: string) =>
  Object.values(dashboard.visualizations || {}).some(
    visualization => visualization?.migrations?.generatedFromDashboardTable && visualization.dataKey === datasetKey
  )

const isSankeyVisualization = visualization => visualization?.visualizationType === 'Sankey'

const getPrimaryDatasetFilterTargets = (dashboard: DashboardLike, datasetKey: string) => {
  const targets = new Set<string>()

  Object.entries(dashboard.visualizations || {}).forEach(([visualizationKey, visualization]) => {
    if (visualization?.migrations?.generatedFromDashboardTable) return
    if (visualization?.dataKey !== datasetKey) return
    if (isSankeyVisualization(visualization)) return

    targets.add(String(visualizationKey))
  })

  return [...targets]
}

const normalizeTarget = target => String(target)

const shouldApplyScopedFilterToGeneratedTable = (filter, primaryDatasetTargets: string[]) => {
  if (!Array.isArray(filter?.usedBy) || filter.usedBy.length === 0) return false
  if (primaryDatasetTargets.length === 0) return false

  const normalizedUsedBy = new Set(filter.usedBy.map(normalizeTarget))
  return primaryDatasetTargets.every(target => normalizedUsedBy.has(target))
}

const addGeneratedTableToScopedFilters = (
  dashboard: DashboardLike,
  tableKey: string,
  primaryDatasetTargets: string[]
) => {
  dashboard.dashboard?.sharedFilters?.forEach(filter => {
    if (!shouldApplyScopedFilterToGeneratedTable(filter, primaryDatasetTargets)) return

    if (!filter.usedBy.some(target => normalizeTarget(target) === tableKey)) {
      filter.usedBy = [...filter.usedBy, tableKey]
    }
  })
}

const migrateDashboardDownloads = (dashboard: DashboardLike, fallbackTable?: any) => {
  const sourceTable = dashboard.table || fallbackTable
  if (!sourceTable) return

  dashboard.dashboard = dashboard.dashboard || {}
  dashboard.dashboard.downloads = dashboard.dashboard.downloads || {}

  dashboardDownloadFields.forEach(field => {
    if (sourceTable[field] !== undefined && dashboard.dashboard.downloads[field] === undefined) {
      dashboard.dashboard.downloads[field] = sourceTable[field]
    }
  })
}

const removeInvalidVisualizationDataFallbacks = (dashboard: DashboardLike) => {
  Object.values(dashboard.visualizations || {}).forEach(visualization => {
    if (visualization?.dataKey && visualization.data !== undefined && !Array.isArray(visualization.data)) {
      delete visualization.data
    }
  })
}

const defaultAuthoredTableDatasetLinks = (dashboard: DashboardLike) => {
  Object.values(dashboard.visualizations || {}).forEach(visualization => {
    if (visualization?.type !== 'table') return

    visualization.table = visualization.table || {}
    if (visualization.table.showDatasetLink === undefined) {
      visualization.table.showDatasetLink = false
    }
  })
}

const createGeneratedTableVisualization = (
  dashboard: DashboardLike,
  datasetKey: string,
  dataset: any,
  tableKey: string,
  sourceTable: any,
  inheritedDataFormat?: Record<string, any>
) => {
  const columns = dataset?.columns || dashboard['columns'] || {}
  const tableConfig = {
    showVertical: true,
    expanded: false,
    collapsible: true,
    ...(sourceTable || {}),
    label: datasetKey,
    show: true,
    showDatasetLink: Boolean(sourceTable?.showDownloadUrl),
    anchorId: `data-table-${datasetKey}`
  }

  dashboardDownloadFields.forEach(field => {
    delete tableConfig[field]
  })

  const dataFormat = dashboard.dataFormat || inheritedDataFormat

  return {
    filters: [],
    filterBehavior: 'Filter Change',
    newViz: false,
    openModal: true,
    uid: tableKey,
    type: 'table',
    table: tableConfig,
    columns,
    ...(dataFormat ? { dataFormat } : {}),
    visualizationType: 'table',
    dataKey: datasetKey,
    dataDescription: dataset?.dataDescription || { horizontal: false, series: false },
    migrations: {
      generatedFromDashboardTable: true
    }
  }
}

const migrateDashboardTables = (
  dashboard: DashboardLike,
  inheritedDatasets?: Record<string, any>,
  inheritedTable?: any,
  inheritedDataFormat?: Record<string, any>
) => {
  if (dashboard.type !== 'dashboard') return

  removeInvalidVisualizationDataFallbacks(dashboard)
  defaultAuthoredTableDatasetLinks(dashboard)
  migrateDashboardDownloads(dashboard, inheritedTable)

  const sourceTable = dashboard.table || inheritedTable
  const datasets = dashboard.datasets || inheritedDatasets
  if (!sourceTable?.show || !datasets || Object.keys(datasets).length === 0) return

  dashboard.rows = dashboard.rows || []
  dashboard.visualizations = dashboard.visualizations || {}

  Object.entries(datasets).forEach(([datasetKey, dataset]) => {
    if (hasGeneratedTableForDataset(dashboard, datasetKey)) return

    const primaryDatasetTargets = getPrimaryDatasetFilterTargets(dashboard, datasetKey)
    if (primaryDatasetTargets.length === 0) return

    const tableKey = getGeneratedTableKey(dashboard, datasetKey)
    dashboard.visualizations[tableKey] = createGeneratedTableVisualization(
      dashboard,
      datasetKey,
      dataset,
      tableKey,
      sourceTable,
      inheritedDataFormat
    )
    dashboard.rows.push({
      columns: [{ width: 12, widget: tableKey }]
    })
    addGeneratedTableToScopedFilters(dashboard, tableKey, primaryDatasetTargets)
  })
}

const hasRuntimeActiveDashboard = (config: DashboardLike) => {
  if (
    config.type !== 'dashboard' ||
    !Array.isArray(config.multiDashboards) ||
    !Number.isInteger(config.activeDashboard) ||
    config.activeDashboard < 0 ||
    config.activeDashboard >= config.multiDashboards.length ||
    !config.dashboard ||
    !Array.isArray(config.rows) ||
    !config.visualizations
  ) {
    return false
  }

  // loadMultiDashboard flattens the selected tab, including its label, into
  // the top-level config. Persisted multi-dashboard roots stay table-free.
  const activeDashboard = config.multiDashboards[config.activeDashboard]
  const activeVisualizationKeys = Object.keys(activeDashboard?.visualizations || {})
  const hasActiveVisualizationKeys =
    activeVisualizationKeys.length > 0 && activeVisualizationKeys.every(key => Boolean(config.visualizations?.[key]))
  if (activeDashboard?.label !== undefined && activeDashboard.label === config.label && hasActiveVisualizationKeys) {
    return true
  }

  return (
    _.isEqual(activeDashboard?.dashboard, config.dashboard) &&
    _.isEqual(activeDashboard?.rows, config.rows) &&
    _.isEqual(activeDashboard?.visualizations, config.visualizations)
  )
}

const runDashboardTableMigration = (config: DashboardLike) => {
  if (config.type !== 'dashboard') return

  if (!config.multiDashboards) {
    migrateDashboardTables(config)
    return
  }

  const hasActiveDashboard = hasRuntimeActiveDashboard(config)

  migrateDashboardDownloads(config)

  if (hasActiveDashboard) {
    config.dashboard = _.cloneDeep(config.dashboard)
    config.rows = _.cloneDeep(config.rows)
    config.visualizations = _.cloneDeep(config.visualizations)
    migrateDashboardTables(config)
  }

  config.multiDashboards.forEach(dashboard => {
    dashboard.type = 'dashboard'

    migrateDashboardTables(dashboard, config.datasets, dashboard.table || config.table, config.dataFormat)
  })
}

const run_4_26_6_migrations = config => {
  runDashboardTableMigration(config)
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
  const newConfig = cloneConfig(config)
  run_4_26_6_migrations(newConfig)
  newConfig.version = ver
  return newConfig
}

export { applyLegacyAutoMaxStrategy, migrateDashboardTables, migrateFileNameUrlFilterTargets }
export default update_4_26_6
