import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import isEqual from 'lodash/isEqual'
import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { type MultiDashboardConfig } from '@cdc/dashboard/src/types/MultiDashboard'
import { type MapConfig } from '@cdc/map/src/types/MapConfig'
import { getCategoryNumericSortKey } from '@cdc/map/src/helpers/categorySortHelpers'

export type ModernizationChange<TConfig = Record<string, any>> = {
  id: string
  label: string
  shouldApply: (config: TConfig) => boolean
  apply: (config: TConfig) => TConfig
  editorLocations: string[]
}

export type ModernizationRecipe<TConfig = Record<string, any>> = {
  id: string
  appliesTo: string | string[] | ((config: TConfig) => boolean)
  apply: (config: TConfig) => TConfig
  editorLocations: string[]
}

const unique = (values: string[]) => Array.from(new Set(values))

const appliesToConfig = (recipe: ModernizationRecipe, config: Record<string, any>) => {
  if (typeof recipe.appliesTo === 'function') return recipe.appliesTo(config)
  if (Array.isArray(recipe.appliesTo)) return recipe.appliesTo.includes(config?.type)
  return recipe.appliesTo === config?.type
}

const recipeChangesConfig = (recipe: ModernizationRecipe, config: Record<string, any>) =>
  !isEqual(recipe.apply(config), config)

const getApplicableChanges = <TConfig>(changes: ModernizationChange<TConfig>[], config: TConfig) =>
  changes.filter(change => change.shouldApply(config))

const applyChanges = <TConfig extends Record<string, any>>(changes: ModernizationChange<TConfig>[], config: TConfig) =>
  changes.reduce((modernizedConfig, change) => change.apply(modernizedConfig), cloneConfig(config) as TConfig)

const isLegacyOrMissingTitleStyle = (titleStyle: unknown) =>
  titleStyle === undefined || titleStyle === '' || titleStyle === 'legacy'

const chartModernizationChanges: ModernizationChange<ChartConfig>[] = [
  {
    id: 'chart-title-style',
    label: 'Use small title style',
    shouldApply: config => isLegacyOrMissingTitleStyle(config.titleStyle),
    apply: config => ({ ...config, titleStyle: 'small' }),
    editorLocations: ['General > Title style']
  },
  {
    id: 'chart-y-axis-title-placement',
    label: 'Move Y-axis title to the top',
    shouldApply: config => config.yAxis?.titlePlacement !== 'top',
    apply: config => ({ ...config, yAxis: { ...config.yAxis, titlePlacement: 'top' } }),
    editorLocations: ['Y Axis > Label Placement']
  },
  {
    id: 'chart-y-axis-auto-max-strategy',
    label: 'Use clean top tick automatic max',
    shouldApply: config => config.yAxis?.autoMaxStrategy !== 'clean-top-tick',
    apply: config => ({ ...config, yAxis: { ...config.yAxis, autoMaxStrategy: 'clean-top-tick' } }),
    editorLocations: ['Y Axis > Automatic max strategy']
  },
  {
    id: 'chart-y-axis-hide-axis',
    label: 'Hide Y-axis line',
    shouldApply: config => config.yAxis?.hideAxis !== true,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, hideAxis: true } }),
    editorLocations: ['Y Axis > Hide Axis']
  },
  {
    id: 'chart-y-axis-hide-ticks',
    label: 'Hide Y-axis ticks',
    shouldApply: config => config.yAxis?.hideTicks !== true,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, hideTicks: true } }),
    editorLocations: ['Y Axis > Hide Ticks']
  },
  {
    id: 'chart-y-axis-grid-lines',
    label: 'Show Y-axis gridlines',
    shouldApply: config => config.yAxis?.gridLines !== true,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, gridLines: true } }),
    editorLocations: ['Y Axis > Show Gridlines']
  },
  {
    id: 'chart-y-axis-num-ticks',
    label: 'Use four Y-axis ticks',
    shouldApply: config => config.yAxis?.numTicks !== 4,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, numTicks: 4 } }),
    editorLocations: ['Y Axis > Number of ticks']
  },
  {
    id: 'chart-y-axis-min',
    label: 'Use zero Y-axis minimum',
    shouldApply: config => config.yAxis?.min !== 0,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, min: 0 } }),
    editorLocations: ['Y Axis > Axis min value']
  },
  {
    id: 'chart-responsive-ticks',
    label: 'Disable responsive ticks',
    shouldApply: config => config.isResponsiveTicks !== false,
    apply: config => ({ ...config, isResponsiveTicks: false }),
    editorLocations: ['Y Axis > Use Responsive Ticks']
  },
  {
    id: 'chart-legend-position',
    label: 'Move legend to the top',
    shouldApply: config => config.legend?.position !== 'top',
    apply: config => ({ ...config, legend: { ...config.legend, position: 'top' } }),
    editorLocations: ['Legend > Position']
  },
  {
    id: 'chart-x-axis-tick-rotation',
    label: 'Use horizontal X-axis ticks',
    shouldApply: config => config.xAxis?.tickRotation !== 0,
    apply: config => ({ ...config, xAxis: { ...config.xAxis, tickRotation: 0 } }),
    editorLocations: ['X Axis > Tick rotation']
  },
  {
    id: 'chart-date-display-format',
    label: 'Use abbreviated date display',
    shouldApply: config => config.xAxis?.dateDisplayFormat !== '%b. %-d %Y',
    apply: config => ({ ...config, xAxis: { ...config.xAxis, dateDisplayFormat: '%b. %-d %Y' } }),
    editorLocations: ['Date/Time > Axis Date Display Format']
  },
  {
    id: 'chart-table-expanded',
    label: 'Collapse data table by default',
    shouldApply: config => config.table?.expanded !== false,
    apply: config => ({ ...config, table: { ...config.table, expanded: false } }),
    editorLocations: ['Data Table > Expanded by Default']
  },
  {
    id: 'chart-tooltip-date-display-format',
    label: 'Use long tooltip date display',
    shouldApply: config => config.tooltips?.dateDisplayFormat !== '%B %-d, %Y',
    apply: config => ({ ...config, tooltips: { ...config.tooltips, dateDisplayFormat: '%B %-d, %Y' } }),
    editorLocations: ['Tooltips > Date Display Format']
  },
  {
    id: 'chart-data-format-commas',
    label: 'Show commas in formatted numbers',
    shouldApply: config => config.dataFormat?.commas !== true,
    apply: config => ({ ...config, dataFormat: { ...config.dataFormat, commas: true } }),
    editorLocations: ['Data Format > Add commas']
  }
]

const getChartModernizationRecipe = (config: ChartConfig): ModernizationRecipe<ChartConfig> | undefined => {
  const changes = getApplicableChanges(chartModernizationChanges, config)
  if (!changes.length) return

  return {
    id: 'modernize-chart',
    appliesTo: 'chart',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations))
  }
}

const getMapLegendItemCount = (config: MapConfig) => {
  const legend = config.legend

  if (legend?.type === 'manual') return (legend.breakpoints?.length ?? 0) + 1
  if (legend?.type === 'equalnumber' || legend?.type === 'equalinterval') return Number(legend.numberOfItems) || 0

  return 0
}

const getMapSpecialClassValues = (config: MapConfig) =>
  new Set(
    (config.legend?.specialClasses || [])
      .map(specialClass => (typeof specialClass === 'object' ? specialClass?.value : specialClass))
      .filter(value => value !== undefined && value !== null)
      .map(value => String(value))
  )

const getMapCategoryLegendValues = (config: MapConfig) => {
  const primaryColumnName = config.columns?.primary?.name
  if (!primaryColumnName) return []

  const specialClassValues = getMapSpecialClassValues(config)
  const values = new Set<unknown>()

  ;(config.data || []).forEach(row => {
    const value = row?.[primaryColumnName]
    if (value === undefined || value === null || value === '') return
    if (specialClassValues.has(String(value))) return
    values.add(value)
  })
  ;(config.legend?.additionalCategories || []).forEach(value => {
    if (value === undefined || value === null || value === '') return
    if (specialClassValues.has(String(value))) return
    values.add(value)
  })

  return Array.from(values)
}

const mapCategoryLegendUsesNumericBins = (config: MapConfig) => {
  const categoryValues = getMapCategoryLegendValues(config)
  return categoryValues.length > 0 && categoryValues.every(value => getCategoryNumericSortKey(value))
}

const mapLegendIsEligibleForGradient = (config: MapConfig) => {
  if (config.legend?.style === 'gradient') return false
  if (!['top', 'bottom', 'side'].includes(config.legend?.position as string)) return false

  if (['equalnumber', 'equalinterval', 'manual'].includes(config.legend?.type as string)) {
    const itemCount = getMapLegendItemCount(config)
    return itemCount > 0 && itemCount <= 5
  }

  if (config.legend?.type === 'category') {
    const categoryValues = getMapCategoryLegendValues(config)
    return categoryValues.length <= 5 && mapCategoryLegendUsesNumericBins(config)
  }

  return false
}

const shouldMoveMapLegendToTopAndGradient = (config: MapConfig) =>
  config.legend?.position !== 'top' && mapLegendIsEligibleForGradient(config)

const shouldModernizeTopMapLegendToGradient = (config: MapConfig) =>
  config.legend?.position === 'top' && mapLegendIsEligibleForGradient(config)

const mapModernizationChanges: ModernizationChange<MapConfig>[] = [
  {
    id: 'map-title-style',
    label: 'Use small title style',
    shouldApply: config => Boolean(config.general) && isLegacyOrMissingTitleStyle(config.general?.titleStyle),
    apply: config => ({ ...config, general: { ...config.general, titleStyle: 'small' } }),
    editorLocations: ['General > Title style']
  },
  {
    id: 'map-legend-position-and-style',
    label: 'Use gradient legend style at the top',
    shouldApply: shouldMoveMapLegendToTopAndGradient,
    apply: config => ({
      ...config,
      legend: {
        ...config.legend,
        position: 'top',
        style: 'gradient',
        hideBorder: true
      }
    }),
    editorLocations: ['Legend > Legend Position', 'Legend > Legend Style']
  },
  {
    id: 'map-legend-style',
    label: 'Use gradient legend style',
    shouldApply: shouldModernizeTopMapLegendToGradient,
    apply: config => ({
      ...config,
      legend: {
        ...config.legend,
        style: 'gradient',
        hideBorder: true
      }
    }),
    editorLocations: ['Legend > Legend Style']
  }
]

const getMapModernizationRecipe = (config: MapConfig): ModernizationRecipe<MapConfig> | undefined => {
  const changes = getApplicableChanges(mapModernizationChanges, config)
  if (!changes.length) return

  return {
    id: 'modernize-map',
    appliesTo: 'map',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations))
  }
}

const dataBiteModernizationChanges: ModernizationChange<Record<string, any>>[] = [
  {
    id: 'data-bite-style',
    label: 'Use TP5 data bite style',
    shouldApply: config => config.biteStyle !== 'tp5',
    apply: config => ({ ...config, biteStyle: 'tp5' }),
    editorLocations: ['General > Data Bite Style']
  },
  {
    id: 'data-bite-data-format-commas',
    label: 'Show commas in formatted numbers',
    shouldApply: config => config.dataFormat?.commas !== true,
    apply: config => ({ ...config, dataFormat: { ...config.dataFormat, commas: true } }),
    editorLocations: ['Data > Add commas']
  }
]

const getDataBiteModernizationRecipe = (
  config: Record<string, any>
): ModernizationRecipe<Record<string, any>> | undefined => {
  const changes = getApplicableChanges(dataBiteModernizationChanges, config)
  if (!changes.length) return

  return {
    id: 'modernize-data-bite',
    appliesTo: 'data-bite',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations))
  }
}

const isLegacyWaffleType = (visualizationType: unknown) =>
  visualizationType === undefined ||
  visualizationType === null ||
  visualizationType === '' ||
  visualizationType === 'Waffle' ||
  visualizationType === 'waffle-chart'

const isLegacyGaugeType = (visualizationType: unknown) => visualizationType === 'Gauge'

const waffleChartModernizationChanges: ModernizationChange<Record<string, any>>[] = [
  {
    id: 'waffle-chart-tp5-waffle',
    label: 'Use TP5 waffle chart style',
    shouldApply: config => isLegacyWaffleType(config.visualizationType),
    apply: config => ({ ...config, visualizationType: 'TP5 Waffle' }),
    editorLocations: ['General > Chart Type']
  },
  {
    id: 'waffle-chart-tp5-gauge',
    label: 'Use TP5 gauge chart style',
    shouldApply: config => isLegacyGaugeType(config.visualizationType),
    apply: config => ({ ...config, visualizationType: 'TP5 Gauge' }),
    editorLocations: ['General > Chart Type']
  }
]

const getWaffleChartModernizationRecipe = (
  config: Record<string, any>
): ModernizationRecipe<Record<string, any>> | undefined => {
  const changes = getApplicableChanges(waffleChartModernizationChanges, config)
  if (!changes.length) return

  return {
    id: 'modernize-waffle-chart',
    appliesTo: 'waffle-chart',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations))
  }
}

const getDashboardWaffleChartLocationPrefix = (config: Record<string, any>) =>
  isLegacyGaugeType(config.visualizationType) || config.visualizationType === 'TP5 Gauge'
    ? 'Gauge Charts'
    : 'Waffle Charts'

const markupIncludeModernizationChanges: ModernizationChange<Record<string, any>>[] = [
  {
    id: 'markup-include-title-style',
    label: 'Use small markup include title style',
    shouldApply: config =>
      config.contentEditor?.style !== 'tp5' && isLegacyOrMissingTitleStyle(config.contentEditor?.titleStyle),
    apply: config => ({ ...config, contentEditor: { ...config.contentEditor, titleStyle: 'small' } }),
    editorLocations: ['General > Title Style']
  }
]

const getMarkupIncludeModernizationRecipe = (
  config: Record<string, any>
): ModernizationRecipe<Record<string, any>> | undefined => {
  const changes = getApplicableChanges(markupIncludeModernizationChanges, config)
  if (!changes.length) return

  return {
    id: 'modernize-markup-include',
    appliesTo: 'markup-include',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations))
  }
}

const dashboardModernizationChanges: ModernizationChange<MultiDashboardConfig>[] = [
  {
    id: 'dashboard-title-style',
    label: 'Use small dashboard title style',
    shouldApply: config => Boolean(config.dashboard) && isLegacyOrMissingTitleStyle(config.dashboard?.titleStyle),
    apply: config => ({ ...config, dashboard: { ...config.dashboard, titleStyle: 'small' } }),
    editorLocations: ['Dashboard Settings > Title style']
  }
]

const collectDashboardEditorLocations = (config: MultiDashboardConfig): string[] => {
  const locations = getApplicableChanges(dashboardModernizationChanges, config).flatMap(
    change => change.editorLocations
  )

  Object.values(config.visualizations || {}).forEach(visualization => {
    if (visualization?.type === 'chart') {
      const chartRecipe = getChartModernizationRecipe(visualization as ChartConfig)
      if (chartRecipe) locations.push(...chartRecipe.editorLocations.map(location => `Charts > ${location}`))
    }

    if (visualization?.type === 'map') {
      const mapRecipe = getMapModernizationRecipe(visualization as MapConfig)
      if (mapRecipe) locations.push(...mapRecipe.editorLocations.map(location => `Maps > ${location}`))
    }

    if (visualization?.type === 'data-bite') {
      const dataBiteRecipe = getDataBiteModernizationRecipe(visualization as Record<string, any>)
      if (dataBiteRecipe) {
        locations.push(...dataBiteRecipe.editorLocations.map(location => `Data Bites > ${location}`))
      }
    }

    if (visualization?.type === 'waffle-chart') {
      const waffleChartRecipe = getWaffleChartModernizationRecipe(visualization as Record<string, any>)
      if (waffleChartRecipe) {
        const prefix = getDashboardWaffleChartLocationPrefix(visualization as Record<string, any>)
        locations.push(...waffleChartRecipe.editorLocations.map(location => `${prefix} > ${location}`))
      }
    }

    if (visualization?.type === 'markup-include') {
      const markupIncludeRecipe = getMarkupIncludeModernizationRecipe(visualization as Record<string, any>)
      if (markupIncludeRecipe) {
        locations.push(...markupIncludeRecipe.editorLocations.map(location => `Markup Includes > ${location}`))
      }
    }

    if (visualization?.type === 'dashboard') {
      locations.push(...collectDashboardEditorLocations(visualization as MultiDashboardConfig))
    }
  })
  ;(config.multiDashboards || []).forEach(dashboard => {
    locations.push(...collectDashboardEditorLocations(dashboard as MultiDashboardConfig))
  })

  return unique(locations)
}

const applyDashboardModernClean = (config: MultiDashboardConfig) => {
  let modernizedConfig = applyChanges(getApplicableChanges(dashboardModernizationChanges, config), config)

  if (modernizedConfig.visualizations) {
    modernizedConfig = {
      ...modernizedConfig,
      visualizations: Object.fromEntries(
        Object.entries(modernizedConfig.visualizations).map(([key, visualization]) => {
          if (visualization?.type === 'chart') {
            const chartRecipe = getChartModernizationRecipe(visualization as ChartConfig)
            return [
              key,
              chartRecipe ? applyModernizationRecipe(chartRecipe, visualization as ChartConfig) : visualization
            ]
          }

          if (visualization?.type === 'map') {
            const mapRecipe = getMapModernizationRecipe(visualization as MapConfig)
            return [key, mapRecipe ? applyModernizationRecipe(mapRecipe, visualization as MapConfig) : visualization]
          }

          if (visualization?.type === 'data-bite') {
            const dataBiteRecipe = getDataBiteModernizationRecipe(visualization as Record<string, any>)
            return [
              key,
              dataBiteRecipe
                ? applyModernizationRecipe(dataBiteRecipe, visualization as Record<string, any>)
                : visualization
            ]
          }

          if (visualization?.type === 'waffle-chart') {
            const waffleChartRecipe = getWaffleChartModernizationRecipe(visualization as Record<string, any>)
            return [
              key,
              waffleChartRecipe
                ? applyModernizationRecipe(waffleChartRecipe, visualization as Record<string, any>)
                : visualization
            ]
          }

          if (visualization?.type === 'markup-include') {
            const markupIncludeRecipe = getMarkupIncludeModernizationRecipe(visualization as Record<string, any>)
            return [
              key,
              markupIncludeRecipe
                ? applyModernizationRecipe(markupIncludeRecipe, visualization as Record<string, any>)
                : visualization
            ]
          }

          if (visualization?.type === 'dashboard') {
            return [key, applyDashboardModernClean(visualization as MultiDashboardConfig)]
          }

          return [key, visualization]
        })
      )
    }
  }

  if (modernizedConfig.multiDashboards) {
    modernizedConfig = {
      ...modernizedConfig,
      multiDashboards: modernizedConfig.multiDashboards.map(dashboard =>
        applyDashboardModernClean(dashboard as MultiDashboardConfig)
      )
    }
  }

  return modernizedConfig
}

const getDashboardModernizationRecipe = (
  config: MultiDashboardConfig
): ModernizationRecipe<MultiDashboardConfig> | undefined => {
  const editorLocations = collectDashboardEditorLocations(config)

  if (!editorLocations.length) return

  return {
    id: 'modernize-dashboard',
    appliesTo: 'dashboard',
    apply: applyDashboardModernClean,
    editorLocations
  }
}

export const modernizationRecipes: ModernizationRecipe[] = []

export const getModernizationRecipe = (config: Record<string, any>) => {
  const configuredRecipe = modernizationRecipes.find(
    recipe => appliesToConfig(recipe, config) && recipeChangesConfig(recipe, config)
  )
  if (configuredRecipe) return configuredRecipe

  if (config?.type === 'chart') return getChartModernizationRecipe(config as ChartConfig)
  if (config?.type === 'map') return getMapModernizationRecipe(config as MapConfig)
  if (config?.type === 'data-bite') return getDataBiteModernizationRecipe(config)
  if (config?.type === 'waffle-chart') return getWaffleChartModernizationRecipe(config)
  if (config?.type === 'markup-include') return getMarkupIncludeModernizationRecipe(config)
  if (config?.type === 'dashboard') return getDashboardModernizationRecipe(config as MultiDashboardConfig)
}

export const applyModernizationRecipe = <TConfig extends Record<string, any>>(
  recipe: ModernizationRecipe<TConfig>,
  config: TConfig
) => recipe.apply(config)
