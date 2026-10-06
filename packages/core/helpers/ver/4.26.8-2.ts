import cloneConfig from '../cloneConfig'
import type { CoveMigrationContext } from './migrationContext'

type Config = Record<string, any>

// The old loader intentionally left these newer properties absent. Recursive
// hydration cannot retain that omission, so use values that follow the same
// renderer branches: false booleans, a falsey date format, and no viewport map.
const legacyChartOmissionEquivalents = {
  general: { useIntelligentLineChartLabels: false },
  xAxis: { dateDisplayFormat: '', viewportNumTicks: null },
  table: { showVertical: false }
}

const legacyMapOmissionEquivalents = {
  general: { equalNumberOptIn: false }
}

// Lodash merge, used by the old map reducer, merged arrays by index. An
// explicitly empty bubble.layers array therefore retained this default layer.
// Freeze that behavior before arrays become atomic under recursive hydration.
const createLegacyDefaultBubbleLayer = () => ({
  label: '',
  locationSource: 'data-column',
  minBubbleSize: 12,
  maxBubbleSize: 20,
  extraBubbleBorder: true,
  showBubbleZeros: false,
  legend: {
    show: true,
    size: { show: true }
  },
  columns: {
    geo: { name: '' },
    latitude: { name: '' },
    longitude: { name: '' },
    primary: { name: '' }
  }
})

const legacyDashboardOmissionEquivalents = {
  theme: 'theme-blue',
  // The old shallow loader let a partial dashboard object replace the default
  // object. A missing titleStyle therefore reached Title's legacy branch.
  titleStyle: 'legacy',
  downloads: {},
  sharedFilters: []
}

const fillMissing = (section: Config | undefined, values: Config) => {
  if (!section) return
  Object.entries(values).forEach(([key, value]) => {
    if (section[key] === undefined) section[key] = value
  })
}

const hadSection = (startingConfig: Config | undefined, key: string) =>
  // Preserve absent-versus-authored section semantics from the saved config.
  Object.prototype.hasOwnProperty.call(startingConfig || {}, key)

const shouldMigrateSection = (
  config: Config,
  startingConfig: Config | undefined,
  key: string,
  isDashboardChild: boolean
) => hadSection(startingConfig, key) || (isDashboardChild && config[key] !== undefined)

const migrateChart = (config: Config, startingConfig: Config = config, isDashboardChild = false) => {
  const migrateSection = (key: string, values: Config) => {
    if (shouldMigrateSection(config, startingConfig, key, isDashboardChild)) fillMissing(config[key], values)
  }

  migrateSection('general', legacyChartOmissionEquivalents.general)
  migrateSection('yAxis', { hideAxis: false, hideTicks: false, gridLines: false, numTicks: '' })
  migrateSection('xAxis', { numTicks: '', ...legacyChartOmissionEquivalents.xAxis })
  migrateSection('table', { expanded: true, dateDisplayFormat: '', ...legacyChartOmissionEquivalents.table })
  migrateSection('legend', { position: 'right' })
  migrateSection('dataFormat', { commas: false })
  migrateSection('tooltips', { dateDisplayFormat: '' })
  migrateSection('visual', { border: false, accent: false, background: false })

  if (!isDashboardChild && hadSection(startingConfig, 'table') && config.table.show === undefined)
    config.table.show = true

  if (Array.isArray(config.series) && (hadSection(startingConfig, 'series') || isDashboardChild)) {
    config.series.forEach(series => fillMissing(series, { tooltip: true, axis: 'Left' }))
  }

  // The old one-level backfiller did not reach into boxplot.labels. An absent
  // count label rendered and edited like an empty string.
  if (startingConfig.boxplot?.labels && config.boxplot?.labels?.count === undefined) {
    // The saved nested labels section historically received an empty count label.
    config.boxplot.labels.count = ''
  }

  switch (config.visualizationType) {
    case 'Forecasting':
      config.xAxis = config.xAxis || {}
      if (!config.xAxis.type || config.xAxis.type === 'categorical') {
        config.xAxis.type = 'date'
        if (!config.xAxis.dateParseFormat) config.xAxis.dateParseFormat = '%Y-%m-%d'
        if (!config.xAxis.dateDisplayFormat) config.xAxis.dateDisplayFormat = '%Y-%m-%d'
      }
      break
    case 'HeatMap': {
      const shouldBackfillTitlePlacement =
        hadSection(startingConfig, 'yAxis') || (isDashboardChild && config.yAxis !== undefined)
      config.yAxis = config.yAxis || {}
      config.yAxis.type = 'categorical'
      if (shouldBackfillTitlePlacement && !config.yAxis.titlePlacement) config.yAxis.titlePlacement = 'side'
      if (config.legend) {
        fillMissing(config.legend, { style: 'circles', subStyle: 'linear blocks' })
        if (!config.legend.position) config.legend.position = 'top'
        if (!config.legend.style) config.legend.style = 'gradient'
        if (!config.legend.subStyle || config.legend.subStyle === 'smooth') config.legend.subStyle = 'linear blocks'
      }
      break
    }
    case 'Horizon Chart': {
      config.horizon = config.horizon || {}
      fillMissing(config.horizon, { numLayers: 4, mode: 'offset', bandGap: 15, bottomPadding: 15 })
      config.xAxis = config.xAxis || {}
      if (!config.xAxis.type) config.xAxis.type = 'categorical'
      config.general = config.general || {}
      const layerCount = config.horizon.numLayers ?? 4
      const paletteCount = config.general.paletteColorCount ?? 4
      config.general.paletteColorCount = Math.max(paletteCount, layerCount)
      break
    }
    case 'Box Plot':
      config.yAxis = config.yAxis || {}
      config.yAxis.labelPlacement = 'On Date/Category Axis'
      break
    case 'Paired Bar':
    case 'Deviation Bar':
      config.orientation = 'horizontal'
      break
    case 'Bump Chart':
      config.xAxis = config.xAxis || {}
      config.xAxis.type = 'date-time'
      break
  }

  if (
    ['date', 'date-time'].includes(config.xAxis?.type) &&
    config.xAxis?.dataKey &&
    !config.table?.defaultSort?.column
  ) {
    config.table = config.table || {}
    config.table.defaultSort = { column: config.xAxis.dataKey, sortDirection: 'desc' }
  }

  if (['4.26.8', '4.26.8-1'].includes(startingConfig.version || '') && config.barThickness === undefined) {
    config.barThickness = 0.8
  }
}

const migrateMap = (config: Config, startingConfig: Config = config, isDashboardChild = false) => {
  if (shouldMigrateSection(config, startingConfig, 'general', isDashboardChild)) {
    fillMissing(config.general, legacyMapOmissionEquivalents.general)
  }
  if (shouldMigrateSection(config, startingConfig, 'legend', isDashboardChild)) {
    fillMissing(config.legend, {
      style: 'circles',
      position: 'side',
      numberOfItems: 3,
      hideBorder: false,
      showSpecialClassesLast: false
    })
  }
  if (Array.isArray(startingConfig.bubble?.layers) && startingConfig.bubble.layers.length === 0) {
    // A saved empty array retained the old reducer's index-merged default layer.
    config.bubble = config.bubble || {}
    config.bubble.layers = [createLegacyDefaultBubbleLayer()]
  }
}

const migrateVisualization = (config: Config, startingConfig: Config = config, isDashboardChild = false) => {
  if (config?.type === 'chart') migrateChart(config, startingConfig, isDashboardChild)
  if (config?.type === 'map') migrateMap(config, startingConfig, isDashboardChild)
  if (
    config?.type === 'data-bite' &&
    shouldMigrateSection(config, startingConfig, 'visual', isDashboardChild) &&
    config.visual?.border === false
  ) {
    config.visual.border = true
  }
}

const migrateLegacyDashboardFilters = (config: Config, isMultiDashboardChild: boolean) => {
  const filters = config.dashboard?.filters
  const hasDatasets = config.datasets && Object.keys(config.datasets).length > 0
  if (
    config.type !== 'dashboard' ||
    config.multiDashboards ||
    isMultiDashboardChild ||
    hasDatasets ||
    !Array.isArray(filters)
  ) {
    return
  }

  const visualizationKeys = Object.keys(config.visualizations || {})
  const converted = filters.map(filter => ({
    ...filter,
    key: filter.label,
    showDropdown: true,
    usedBy: visualizationKeys
  }))
  config.dashboard.sharedFilters = [...(config.dashboard.sharedFilters || []), ...converted]
  delete config.dashboard.filters
}

const migrateDashboardOmissionEquivalents = (config: Config) => {
  if (config.type !== 'dashboard' || !config.dashboard) return
  fillMissing(config.dashboard, {
    ...legacyDashboardOmissionEquivalents,
    downloads: {},
    sharedFilters: []
  })
}

const migrateDashboardTableOmissionEquivalents = (
  config: Config,
  startingConfig: Config = config,
  isDashboardChild = false
) => {
  if (config.type !== 'dashboard') return
  if (!shouldMigrateSection(config, startingConfig, 'table', isDashboardChild)) return
  fillMissing(config.table, {
    downloadUrlLabel: '',
    showDownloadLinkBelow: false,
    showVertical: true
  })
}

const update_4_26_8_2 = (config: Config, context?: CoveMigrationContext) => {
  const newConfig = cloneConfig(config)
  const startingConfig = context?.startingConfig ?? config
  const isMultiDashboardChild = context?.isMultiDashboardChild ?? false

  migrateVisualization(newConfig, startingConfig, isMultiDashboardChild)
  if (newConfig.type === 'dashboard' && newConfig.visualizations) {
    // Give each visualization its matching originally saved section shape.
    Object.entries(newConfig.visualizations).forEach(([key, visualization]: [string, Config]) =>
      migrateVisualization(visualization, startingConfig?.visualizations?.[key], true)
    )
  }
  migrateDashboardOmissionEquivalents(newConfig)
  migrateDashboardTableOmissionEquivalents(newConfig, startingConfig, isMultiDashboardChild)
  migrateLegacyDashboardFilters(newConfig, isMultiDashboardChild)

  newConfig.version = '4.26.8-2'
  return newConfig
}

export {
  migrateChart,
  migrateDashboardOmissionEquivalents,
  migrateDashboardTableOmissionEquivalents,
  migrateLegacyDashboardFilters,
  migrateMap,
  migrateVisualization
}
export default update_4_26_8_2
