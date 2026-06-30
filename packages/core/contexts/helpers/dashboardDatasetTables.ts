const DATASET_IMPORT_GENERATED_BY = 'dataset-import'
const GENERATED_TABLE_KEY_PREFIX = 'dashboard-table'
const DEFAULT_DATA_DESCRIPTION = { horizontal: false, series: false }

type DashboardConfig = Record<string, any>
type DashboardMutation = (dashboard: DashboardConfig) => void

export const addGeneratedTablesForDataset = (
  config: DashboardConfig,
  datasetKey: string,
  dataset: DashboardConfig
) => {
  if (Array.isArray(config.multiDashboards) && config.multiDashboards.length) {
    config.multiDashboards = config.multiDashboards.map(dashboard =>
      addGeneratedTableForDataset(dashboard, datasetKey, dataset)
    )
    syncActiveMultiDashboard(config)
    return
  }

  addGeneratedTableForDataset(config, datasetKey, dataset)
}

export const updateGeneratedTableLabelOnDatasetRename = (viz: any, oldDatasetKey: string, datasetKey: string) => {
  if (isGeneratedDatasetImportTable(viz) && viz.table?.label === oldDatasetKey) {
    viz.table.label = datasetKey
  }
}

const addGeneratedTableForDataset = (
  dashboard: DashboardConfig,
  datasetKey: string,
  dataset: DashboardConfig
) => {
  const widgetKey = createGeneratedTableWidgetKey(dashboard.visualizations || {}, datasetKey)
  dashboard.visualizations = {
    ...(dashboard.visualizations || {}),
    [widgetKey]: createGeneratedTableVisualization(datasetKey, dataset)
  }
  dashboard.rows = [
    ...(dashboard.rows || []),
    {
      columns: [{ width: 12, widget: widgetKey }]
    }
  ]
  return dashboard
}

const createGeneratedTableVisualization = (datasetKey: string, dataset: DashboardConfig) => ({
  type: 'table',
  visualizationType: 'table',
  filters: [],
  filterBehavior: 'Filter Change',
  newViz: false,
  openModal: true,
  table: {
    show: true,
    showDatasetLink: false,
    showDownloadUrl: false,
    showVertical: true,
    expanded: false,
    collapsible: true,
    label: datasetKey
  },
  columns: {},
  dataFormat: {},
  dataKey: datasetKey,
  dataDescription: dataset.dataDescription ? { ...dataset.dataDescription } : { ...DEFAULT_DATA_DESCRIPTION },
  generatedBy: DATASET_IMPORT_GENERATED_BY
})

const createGeneratedTableWidgetKey = (visualizations: DashboardConfig, datasetKey: string) => {
  const safeDatasetKey = datasetKey
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  const baseKey = `${GENERATED_TABLE_KEY_PREFIX}-${safeDatasetKey || 'dataset'}`
  let widgetKey = baseKey
  let suffix = 1
  while (Object.prototype.hasOwnProperty.call(visualizations, widgetKey)) {
    widgetKey = `${baseKey}-${suffix}`
    suffix += 1
  }
  return widgetKey
}

export const removeGeneratedTablesForDataset = (dashboard: DashboardConfig, datasetKey: string) => {
  const visualizations = dashboard.visualizations || {}
  const generatedWidgetKeys = Object.entries(visualizations)
    .filter(([, viz]: [string, any]) => isGeneratedDatasetImportTable(viz) && viz.dataKey === datasetKey)
    .map(([widgetKey]) => widgetKey)

  if (!generatedWidgetKeys.length) return

  generatedWidgetKeys.forEach(widgetKey => {
    delete visualizations[widgetKey]
  })
  dashboard.visualizations = visualizations
  removeGeneratedTableRowReferences(dashboard, new Set(generatedWidgetKeys))
}

const removeGeneratedTableRowReferences = (dashboard: DashboardConfig, generatedWidgetKeys: Set<string>) => {
  dashboard.rows = (dashboard.rows || []).flatMap(row => {
    const columns = row.columns || []
    const nextColumns = columns.flatMap(column => {
      if (column.widget && generatedWidgetKeys.has(column.widget)) return []

      if (column.conditionalWidgets) {
        const conditionalWidgets = column.conditionalWidgets.filter(
          conditionalWidget => !generatedWidgetKeys.has(conditionalWidget.widget)
        )
        if (conditionalWidgets.length !== column.conditionalWidgets.length) {
          const columnWithoutConditionalWidgets = { ...column }
          delete columnWithoutConditionalWidgets.conditionalWidgets
          return [conditionalWidgets.length ? { ...column, conditionalWidgets } : columnWithoutConditionalWidgets]
        }
      }

      return [column]
    })

    if (!nextColumns.length) return []
    return [{ ...row, columns: nextColumns }]
  })
}

const isGeneratedDatasetImportTable = (viz: any) =>
  viz?.type === 'table' && viz?.generatedBy === DATASET_IMPORT_GENERATED_BY

const applyMultiDashboards = (config: DashboardConfig, mutationFunc: DashboardMutation) => {
  if (config.multiDashboards) {
    config.multiDashboards.forEach(dashboard => {
      mutationFunc(dashboard)
    })
  }
  mutationFunc(config)
}

const syncActiveMultiDashboard = (config: DashboardConfig) => {
  if (!Array.isArray(config.multiDashboards) || !config.multiDashboards.length) return
  const activeDashboard =
    Number.isInteger(config.activeDashboard) &&
    config.activeDashboard >= 0 &&
    config.activeDashboard < config.multiDashboards.length
      ? config.activeDashboard
      : 0
  const activeConfig = config.multiDashboards[activeDashboard]
  config.activeDashboard = activeDashboard
  config.dashboard = activeConfig.dashboard
  config.rows = activeConfig.rows
  config.visualizations = activeConfig.visualizations
  if (activeConfig.label !== undefined) {
    config.label = activeConfig.label
  }
}
