import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import isEqual from 'lodash/isEqual'
import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { type MultiDashboardConfig } from '@cdc/dashboard/src/types/MultiDashboard'

export type ModernizationRecipe<TConfig = Record<string, any>> = {
  id: string
  label: string
  appliesTo: string | string[] | ((config: TConfig) => boolean)
  apply: (config: TConfig) => TConfig
  editorLocations: string[]
}

const appliesToConfig = (recipe: ModernizationRecipe, config: Record<string, any>) => {
  if (typeof recipe.appliesTo === 'function') return recipe.appliesTo(config)
  if (Array.isArray(recipe.appliesTo)) return recipe.appliesTo.includes(config?.type)
  return recipe.appliesTo === config?.type
}

const recipeChangesConfig = (recipe: ModernizationRecipe, config: Record<string, any>) =>
  !isEqual(recipe.apply(config), config)

const applyChartModernClean = (config: ChartConfig) => {
  const modernizedConfig = cloneConfig(config) as ChartConfig

  if (modernizedConfig.titleStyle === 'legacy') {
    modernizedConfig.titleStyle = 'small'
  }

  modernizedConfig.yAxis = {
    ...modernizedConfig.yAxis,
    titlePlacement: 'top',
    autoMaxStrategy: 'clean-top-tick',
    hideAxis: true,
    hideTicks: true,
    gridLines: true,
    numTicks: 4,
    min: 0
  }

  modernizedConfig.isResponsiveTicks = false

  modernizedConfig.legend = {
    ...modernizedConfig.legend,
    position: 'top'
  }

  modernizedConfig.xAxis = {
    ...modernizedConfig.xAxis,
    dateDisplayFormat: '%b. %-d %Y',
    tickRotation: 0
  }

  modernizedConfig.table = {
    ...modernizedConfig.table,
    expanded: false
  }

  return modernizedConfig
}

const chartModernCleanRecipe: ModernizationRecipe<ChartConfig> = {
  id: 'chart-modern-clean',
  label: 'Modern clean chart',
  appliesTo: 'chart',
  apply: applyChartModernClean,
  editorLocations: [
    'General > Title style',
    'Y Axis > Label Placement',
    'Y Axis > Automatic max strategy',
    'Y Axis > Hide Axis',
    'Y Axis > Hide Ticks',
    'Y Axis > Show Gridlines',
    'Y Axis > Number of ticks',
    'Y Axis > Axis min value',
    'Y Axis > Use Responsive Ticks',
    'Legend > Position',
    'X Axis > Tick rotation',
    'Date/Time > Axis Date Display Format',
    'Data Table > Expanded by Default'
  ]
}

const chartModernizationRecipes: ModernizationRecipe[] = [chartModernCleanRecipe]

const applyChartRecipes = (config: Record<string, any>) =>
  chartModernizationRecipes.reduce((modernizedConfig, recipe) => {
    if (!appliesToConfig(recipe, modernizedConfig) || !recipeChangesConfig(recipe, modernizedConfig)) {
      return modernizedConfig
    }
    return recipe.apply(modernizedConfig)
  }, config)

const applyDashboardModernClean = (config: MultiDashboardConfig) => {
  const modernizedConfig = cloneConfig(config) as MultiDashboardConfig

  if (modernizedConfig.dashboard?.titleStyle === 'legacy') {
    modernizedConfig.dashboard.titleStyle = 'small'
  }

  if (modernizedConfig.visualizations) {
    modernizedConfig.visualizations = Object.fromEntries(
      Object.entries(modernizedConfig.visualizations).map(([key, visualization]) => {
        if (visualization?.type === 'chart') return [key, applyChartRecipes(visualization)]
        if (visualization?.type === 'dashboard')
          return [key, applyDashboardModernClean(visualization as MultiDashboardConfig)]
        return [key, visualization]
      })
    )
  }

  if (modernizedConfig.multiDashboards) {
    modernizedConfig.multiDashboards = modernizedConfig.multiDashboards.map(dashboard =>
      applyDashboardModernClean(dashboard as MultiDashboardConfig)
    )
  }

  return modernizedConfig
}

const dashboardModernCleanRecipe: ModernizationRecipe<MultiDashboardConfig> = {
  id: 'dashboard-modern-clean',
  label: 'Modern clean dashboard',
  appliesTo: 'dashboard',
  apply: applyDashboardModernClean,
  editorLocations: [
    'Dashboard Settings > Title style',
    ...chartModernCleanRecipe.editorLocations.map(location => `Charts > ${location}`)
  ]
}

export const modernizationRecipes: ModernizationRecipe[] = [chartModernCleanRecipe, dashboardModernCleanRecipe]

export const getModernizationRecipe = (config: Record<string, any>) =>
  modernizationRecipes.find(recipe => appliesToConfig(recipe, config) && recipeChangesConfig(recipe, config))

export const applyModernizationRecipe = <TConfig extends Record<string, any>>(
  recipe: ModernizationRecipe<TConfig>,
  config: TConfig
) => recipe.apply(config)
