import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import isEqual from 'lodash/isEqual'
import { DEFAULT_BAR_THICKNESS } from '@cdc/chart/src/data/initial-state'
import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { type MultiDashboardConfig } from '@cdc/dashboard/src/types/MultiDashboard'
import { getColumnWidgetEntries } from '@cdc/dashboard/src/helpers/dashboardColumnWidgets'
import { type MapConfig } from '@cdc/map/src/types/MapConfig'

export type ModernizationChange<TConfig = Record<string, any>> = {
  id: string
  label: string
  shouldApply: (config: TConfig) => boolean
  apply: (config: TConfig) => TConfig
  editorLocations: string[]
  getEditorLocationDetails?: (beforeConfig: TConfig, afterConfig: TConfig) => ModernizationSettingDetail[]
}

export type ModernizationSettingDetail = {
  path: string
  value?: string
}

export type ModernizationRecipe<TConfig = Record<string, any>> = {
  id: string
  appliesTo: string | string[] | ((config: TConfig) => boolean)
  apply: (config: TConfig) => TConfig
  editorLocations: string[]
  editorLocationDetails?: ModernizationSettingDetail[]
  options?: ModernizationOption<TConfig>[]
}

export type ModernizationOption<TConfig = Record<string, any>> = {
  id: string
  label: string
  apply: (config: TConfig) => TConfig
  editorLocations: string[]
  editorLocationDetails?: ModernizationSettingDetail[]
}

const unique = (values: string[]) => Array.from(new Set(values))
const uniqueDetails = (details: ModernizationSettingDetail[]) =>
  Array.from(new Map(details.map(detail => [`${detail.path}\u0000${detail.value ?? ''}`, detail])).values())

const mergeDetailsByPath = (details: ModernizationSettingDetail[]) =>
  Array.from(
    details.reduce((merged, detail) => {
      const existing = merged.get(detail.path)
      if (!existing) {
        merged.set(detail.path, detail)
      } else if (existing.value !== detail.value) {
        merged.set(detail.path, { path: detail.path, value: 'Varies by dashboard' })
      }
      return merged
    }, new Map<string, ModernizationSettingDetail>())
  ).map(([, detail]) => detail)

const prefixDetails = (prefix: string, details: ModernizationSettingDetail[]) =>
  details.map(detail => ({ ...detail, path: `${prefix} > ${detail.path}` }))

const collectChangeDetails = <TConfig>(
  changes: ModernizationChange<TConfig>[],
  beforeConfig: TConfig,
  afterConfig: TConfig
) =>
  uniqueDetails(
    changes.flatMap(change =>
      change.getEditorLocationDetails
        ? change.getEditorLocationDetails(beforeConfig, afterConfig)
        : change.editorLocations.map(path => ({ path }))
    )
  )

const formatTitleStyle = (value: unknown) => (typeof value === 'string' && value ? startCase(value) : undefined)
const formatOption = (value: unknown) => {
  if (typeof value !== 'string' || !value) return
  if (value.toLowerCase() === 'tp5') return 'TP5'
  return startCase(value)
}
const formatBoolean = (value: unknown) => (value === true ? 'On' : value === false ? 'Off' : undefined)
const formatValue = (value: unknown) =>
  value === undefined || value === null || value === '' ? undefined : String(value)

const startCase = (value: string) =>
  value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, letter => letter.toUpperCase())

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

const changesToOptions = <TConfig extends Record<string, any>>(
  changes: ModernizationChange<TConfig>[],
  config: TConfig
): ModernizationOption<TConfig>[] =>
  changes.map(change => {
    const afterConfig = change.apply(cloneConfig(config) as TConfig)
    return {
      id: change.id,
      label: change.label,
      apply: currentConfig => change.apply(cloneConfig(currentConfig) as TConfig),
      editorLocations: unique(change.editorLocations),
      editorLocationDetails: change.getEditorLocationDetails
        ? uniqueDetails(change.getEditorLocationDetails(config, afterConfig))
        : change.editorLocations.map(path => ({ path }))
    }
  })

const isLegacyOrMissingTitleStyle = (titleStyle: unknown) =>
  titleStyle === undefined || titleStyle === '' || titleStyle === 'legacy'

const isHorizontalBarChart = (config: ChartConfig) =>
  config.visualizationType === 'Bar' &&
  (config.orientation === 'horizontal' || config.visualizationSubType === 'horizontal')

const isVerticalChart = (config: ChartConfig) => config.orientation !== 'horizontal' && !isHorizontalBarChart(config)

const supportsVerticalValueAxisModernization = (config: ChartConfig) =>
  isVerticalChart(config) && config.visualizationType !== 'HeatMap'

const supportsVerticalAutomaticValueDomain = (config: ChartConfig) => {
  const max = config.yAxis?.max
  const hasExplicitMax = max !== undefined && max !== null && max !== ''

  return supportsVerticalValueAxisModernization(config) && config.yAxis?.type !== 'categorical' && !hasExplicitMax
}

const isLegacyBarThickness = (value: unknown) => {
  if (value === undefined) return true
  if (typeof value !== 'number' && typeof value !== 'string') return false
  if (typeof value === 'string' && value.trim() === '') return false
  return Number(value) === 0.35 || Number(value) === 0.37
}

const hasAutomaticOrZeroMinimum = (config: ChartConfig) => {
  const min = config.yAxis?.min
  return min === undefined || min === null || min === '' || Number(min) === 0
}

const hasDateXAxis = (config: ChartConfig) => config.xAxis?.type === 'date' || config.xAxis?.type === 'date-time'

const replaceableDateDisplayFormats = new Set(['%Y-%m-%d', '%m/%d/%Y', '%d/%m/%Y'])

const nonBlankDateFormat = (format: unknown) =>
  typeof format === 'string' && format.trim() ? format.trim() : undefined

const getEffectiveXAxisDateDisplayFormat = (config: ChartConfig) =>
  nonBlankDateFormat(config.xAxis?.dateDisplayFormat) || nonBlankDateFormat(config.xAxis?.dateParseFormat) || '%Y-%m-%d'

const hasReplaceableXAxisDateDisplayFormat = (config: ChartConfig) =>
  replaceableDateDisplayFormats.has(getEffectiveXAxisDateDisplayFormat(config))

const hasReplaceableTooltipDateDisplayFormat = (config: ChartConfig) => {
  const effectiveTooltipFormat =
    nonBlankDateFormat(config.tooltips?.dateDisplayFormat) || getEffectiveXAxisDateDisplayFormat(config)

  return replaceableDateDisplayFormats.has(effectiveTooltipFormat)
}

const chartSupportsBarBorders = (config: ChartConfig) =>
  !['Box Plot', 'Scatter Plot', 'Pie', 'Line'].includes(config.visualizationType) &&
  Boolean(
    config.series?.some(
      series => series.type === 'Bar' || series.type === 'Paired Bar' || series.type === 'Deviation Bar'
    )
  )

const supportsVerticalDateCategoryNumTicks = (config: ChartConfig) =>
  !['HeatMap', 'Spark Line'].includes(config.visualizationType) &&
  ['date', 'date-time', 'continuous'].includes(config.xAxis?.type) &&
  (config.xAxis?.type === 'date-time' || config.xAxis?.manual !== true)

const hasModernVerticalDateCategoryNumTicks = (config: ChartConfig) =>
  config.xAxis?.numTicks === 6 && config.xAxis?.viewportNumTicks?.xs === 4 && config.xAxis?.viewportNumTicks?.xxs === 4

const isHorizontalBarWithAutomaticValueAxis = (config: ChartConfig) =>
  isHorizontalBarChart(config) &&
  config.yAxis?.type !== 'categorical' &&
  (config.xAxis?.max === undefined || config.xAxis?.max === null || config.xAxis?.max === '')

const shouldUseDateCategoryAxisLabelPlacement = (config: ChartConfig) =>
  isHorizontalBarChart(config) && config.yAxis?.labelPlacement !== 'On Date/Category Axis'

const usesPaletteVersion20 = (config: ChartConfig | MapConfig) => config.general?.palette?.version === '2.0'

const applyPaletteVersion21 = <TConfig extends ChartConfig | MapConfig>(config: TConfig): TConfig =>
  ({
    ...config,
    general: {
      ...config.general,
      palette: {
        ...config.general?.palette,
        version: '2.1'
      }
    }
  } as TConfig)

const chartModernizationChanges: ModernizationChange<ChartConfig>[] = [
  {
    id: 'chart-title-style',
    label: 'Use small title style',
    shouldApply: config => isLegacyOrMissingTitleStyle(config.titleStyle),
    apply: config => ({ ...config, titleStyle: 'small' }),
    editorLocations: ['General > Title Style'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'General > Title Style', value: formatTitleStyle(afterConfig.titleStyle) }
    ]
  },
  {
    id: 'chart-horizontal-bar-label-placement',
    label: 'Move horizontal bar labels to the date/category axis',
    shouldApply: shouldUseDateCategoryAxisLabelPlacement,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, labelPlacement: 'On Date/Category Axis' } }),
    editorLocations: ['General > Label Placement'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'General > Label Placement', value: formatValue(afterConfig.yAxis?.labelPlacement) }
    ]
  },
  {
    id: 'chart-y-axis-title-placement',
    label: 'Move Y-axis title to the top',
    shouldApply: config => supportsVerticalValueAxisModernization(config) && config.yAxis?.titlePlacement !== 'top',
    apply: config => ({ ...config, yAxis: { ...config.yAxis, titlePlacement: 'top' } }),
    editorLocations: ['Left Value Axis > Label Placement'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Left Value Axis > Label Placement', value: formatOption(afterConfig.yAxis?.titlePlacement) }
    ]
  },
  {
    id: 'chart-y-axis-num-ticks',
    label: 'Use about four Y-axis ticks',
    shouldApply: config => supportsVerticalValueAxisModernization(config) && config.yAxis?.numTicks !== 4,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, numTicks: 4 } }),
    editorLocations: ['Left Value Axis > Number Of Ticks'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Left Value Axis > Number Of Ticks', value: formatValue(afterConfig.yAxis?.numTicks) }
    ]
  },
  {
    id: 'chart-y-axis-grid-lines',
    label: 'Show Y-axis gridlines',
    shouldApply: config => supportsVerticalValueAxisModernization(config) && config.yAxis?.gridLines !== true,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, gridLines: true } }),
    editorLocations: ['Left Value Axis > Show Gridlines'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Left Value Axis > Show Gridlines', value: formatBoolean(afterConfig.yAxis?.gridLines) }
    ]
  },
  {
    id: 'chart-data-format-commas',
    label: 'Show commas in formatted numbers',
    shouldApply: config => isVerticalChart(config) && config.dataFormat?.commas !== true,
    apply: config => ({ ...config, dataFormat: { ...config.dataFormat, commas: true } }),
    editorLocations: ['Left Value Axis > Number Formatting > Add Commas'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Left Value Axis > Number Formatting > Add Commas', value: formatBoolean(afterConfig.dataFormat?.commas) }
    ]
  },
  {
    id: 'chart-y-axis-hide-axis',
    label: 'Hide Y-axis line',
    shouldApply: config => supportsVerticalValueAxisModernization(config) && config.yAxis?.hideAxis !== true,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, hideAxis: true } }),
    editorLocations: ['Left Value Axis > Hide Axis'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Left Value Axis > Hide Axis', value: formatBoolean(afterConfig.yAxis?.hideAxis) }
    ]
  },
  {
    id: 'chart-y-axis-hide-ticks',
    label: 'Hide Y-axis ticks',
    shouldApply: config => supportsVerticalValueAxisModernization(config) && config.yAxis?.hideTicks !== true,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, hideTicks: true } }),
    editorLocations: ['Left Value Axis > Hide Ticks'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Left Value Axis > Hide Ticks', value: formatBoolean(afterConfig.yAxis?.hideTicks) }
    ]
  },
  {
    id: 'chart-y-axis-min',
    label: 'Use zero Y-axis minimum',
    shouldApply: config => isVerticalChart(config) && !hasAutomaticOrZeroMinimum(config),
    apply: config => ({ ...config, yAxis: { ...config.yAxis, min: 0 } }),
    editorLocations: ['Left Value Axis > Value Axis Domain > Axis Min Value'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Left Value Axis > Value Axis Domain > Axis Min Value', value: formatValue(afterConfig.yAxis?.min) }
    ]
  },
  {
    id: 'chart-y-axis-auto-max-strategy',
    label: 'Use clean top tick automatic max',
    shouldApply: config =>
      supportsVerticalAutomaticValueDomain(config) && config.yAxis?.autoMaxStrategy !== 'clean-top-tick',
    apply: config => ({ ...config, yAxis: { ...config.yAxis, autoMaxStrategy: 'clean-top-tick' } }),
    editorLocations: ['Left Value Axis > Value Axis Domain > Automatic Max Strategy'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      {
        path: 'Left Value Axis > Value Axis Domain > Automatic Max Strategy',
        value: formatOption(afterConfig.yAxis?.autoMaxStrategy)
      }
    ]
  },
  {
    id: 'chart-horizontal-value-axis-num-ticks',
    label: 'Use about four horizontal value-axis ticks',
    shouldApply: config => isHorizontalBarChart(config) && config.yAxis?.numTicks !== 4,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, numTicks: 4 } }),
    editorLocations: ['Value Axis > Number Of Ticks'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Value Axis > Number Of Ticks', value: formatValue(afterConfig.yAxis?.numTicks) }
    ]
  },
  {
    id: 'chart-horizontal-responsive-ticks',
    label: 'Disable horizontal responsive ticks',
    shouldApply: config => isHorizontalBarChart(config) && config.isResponsiveTicks === true,
    apply: config => ({ ...config, isResponsiveTicks: false }),
    editorLocations: ['Value Axis > Use Responsive Ticks'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Value Axis > Use Responsive Ticks', value: formatBoolean(afterConfig.isResponsiveTicks) }
    ]
  },
  {
    id: 'chart-horizontal-value-axis-grid-lines',
    label: 'Show horizontal value-axis gridlines',
    shouldApply: config => isHorizontalBarChart(config) && config.yAxis?.gridLines !== true,
    apply: config => ({ ...config, yAxis: { ...config.yAxis, gridLines: true } }),
    editorLocations: ['Value Axis > Show Gridlines'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Value Axis > Show Gridlines', value: formatBoolean(afterConfig.yAxis?.gridLines) }
    ]
  },
  {
    id: 'chart-horizontal-value-axis-data-format-commas',
    label: 'Show commas in horizontal value-axis formatted numbers',
    shouldApply: config => isHorizontalBarChart(config) && config.dataFormat?.commas !== true,
    apply: config => ({ ...config, dataFormat: { ...config.dataFormat, commas: true } }),
    editorLocations: ['Value Axis > Number Formatting > Add Commas'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Value Axis > Number Formatting > Add Commas', value: formatBoolean(afterConfig.dataFormat?.commas) }
    ]
  },
  {
    id: 'chart-horizontal-value-axis-hide-axis',
    label: 'Hide horizontal value-axis line',
    shouldApply: config => isHorizontalBarChart(config) && config.xAxis?.hideAxis !== true,
    apply: config => ({ ...config, xAxis: { ...config.xAxis, hideAxis: true } }),
    editorLocations: ['Value Axis > Hide Axis'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Value Axis > Hide Axis', value: formatBoolean(afterConfig.xAxis?.hideAxis) }
    ]
  },
  {
    id: 'chart-horizontal-value-axis-hide-ticks',
    label: 'Hide horizontal value-axis ticks',
    shouldApply: config => isHorizontalBarChart(config) && config.xAxis?.hideTicks !== true,
    apply: config => ({ ...config, xAxis: { ...config.xAxis, hideTicks: true } }),
    editorLocations: ['Value Axis > Hide Ticks'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Value Axis > Hide Ticks', value: formatBoolean(afterConfig.xAxis?.hideTicks) }
    ]
  },
  {
    id: 'chart-horizontal-value-axis-auto-max-strategy',
    label: 'Use clean top tick horizontal automatic max',
    shouldApply: config =>
      isHorizontalBarWithAutomaticValueAxis(config) && config.yAxis?.autoMaxStrategy !== 'clean-top-tick',
    apply: config => ({ ...config, yAxis: { ...config.yAxis, autoMaxStrategy: 'clean-top-tick' } }),
    editorLocations: ['Value Axis > Value Axis Domain > Automatic Max Strategy'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      {
        path: 'Value Axis > Value Axis Domain > Automatic Max Strategy',
        value: formatOption(afterConfig.yAxis?.autoMaxStrategy)
      }
    ]
  },
  {
    id: 'chart-right-y-axis-title-placement',
    label: 'Move right Y-axis title to the top',
    shouldApply: config =>
      config.visualizationType === 'Combo' &&
      config.orientation === 'vertical' &&
      config.yAxis?.rightTitlePlacement !== 'top',
    apply: config => ({ ...config, yAxis: { ...config.yAxis, rightTitlePlacement: 'top' } }),
    editorLocations: ['Right Value Axis > Label Placement'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Right Value Axis > Label Placement', value: formatOption(afterConfig.yAxis?.rightTitlePlacement) }
    ]
  },
  {
    id: 'chart-horizontal-axis-title-placement',
    label: 'Move horizontal category-axis title to the top',
    shouldApply: config => isHorizontalBarChart(config) && config.yAxis?.titlePlacement !== 'top',
    apply: config => ({ ...config, yAxis: { ...config.yAxis, titlePlacement: 'top' } }),
    editorLocations: ['Date/Category Axis > Label Placement'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Date/Category Axis > Label Placement', value: formatOption(afterConfig.yAxis?.titlePlacement) }
    ]
  },
  {
    id: 'chart-date-display-format',
    label: 'Use abbreviated date display',
    shouldApply: config =>
      isVerticalChart(config) && hasDateXAxis(config) && hasReplaceableXAxisDateDisplayFormat(config),
    apply: config => ({ ...config, xAxis: { ...config.xAxis, dateDisplayFormat: '%b. %-d %Y' } }),
    editorLocations: ['Date/Category Axis > Axis Date Display Format'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      {
        path: 'Date/Category Axis > Axis Date Display Format',
        value: formatValue(afterConfig.xAxis?.dateDisplayFormat)
      }
    ]
  },
  {
    id: 'chart-tooltip-date-display-format',
    label: 'Use long tooltip date display',
    shouldApply: config =>
      isVerticalChart(config) && hasDateXAxis(config) && hasReplaceableTooltipDateDisplayFormat(config),
    apply: config => ({ ...config, tooltips: { ...config.tooltips, dateDisplayFormat: '%B %-d, %Y' } }),
    editorLocations: ['Date/Category Axis > Hover Date Display Format'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      {
        path: 'Date/Category Axis > Hover Date Display Format',
        value: formatValue(afterConfig.tooltips?.dateDisplayFormat)
      }
    ]
  },
  {
    id: 'chart-x-axis-num-ticks',
    label: 'Use responsive X-axis tick counts',
    shouldApply: config =>
      isVerticalChart(config) &&
      supportsVerticalDateCategoryNumTicks(config) &&
      !hasModernVerticalDateCategoryNumTicks(config),
    apply: config => ({
      ...config,
      xAxis: {
        ...config.xAxis,
        numTicks: 6,
        viewportNumTicks: {
          ...config.xAxis?.viewportNumTicks,
          xs: 4,
          xxs: 4
        }
      }
    }),
    editorLocations: [
      'Date/Category Axis > Number Of Ticks',
      'Date/Category Axis > Number Of Ticks: Viewport Overrides > xs',
      'Date/Category Axis > Number Of Ticks: Viewport Overrides > xxs'
    ],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Date/Category Axis > Number Of Ticks', value: formatValue(afterConfig.xAxis?.numTicks) },
      {
        path: 'Date/Category Axis > Number Of Ticks: Viewport Overrides > xs',
        value: formatValue(afterConfig.xAxis?.viewportNumTicks?.xs)
      },
      {
        path: 'Date/Category Axis > Number Of Ticks: Viewport Overrides > xxs',
        value: formatValue(afterConfig.xAxis?.viewportNumTicks?.xxs)
      }
    ]
  },
  {
    id: 'chart-responsive-ticks',
    label: 'Disable responsive ticks',
    shouldApply: config => isVerticalChart(config) && config.isResponsiveTicks === true,
    apply: config => ({ ...config, isResponsiveTicks: false }),
    editorLocations: ['Date/Category Axis > Use Responsive Ticks'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Date/Category Axis > Use Responsive Ticks', value: formatBoolean(afterConfig.isResponsiveTicks) }
    ]
  },
  {
    id: 'chart-x-axis-tick-rotation',
    label: 'Use horizontal X-axis ticks',
    shouldApply: config =>
      isVerticalChart(config) &&
      config.xAxis?.tickRotation !== undefined &&
      config.xAxis.tickRotation !== null &&
      config.xAxis.tickRotation !== 0,
    apply: config => ({ ...config, xAxis: { ...config.xAxis, tickRotation: 0 } }),
    editorLocations: ['Date/Category Axis > Tick Rotation (Degrees)'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Date/Category Axis > Tick Rotation (Degrees)', value: formatValue(afterConfig.xAxis?.tickRotation) }
    ]
  },
  {
    id: 'chart-legend-position',
    label: 'Move legend to the top',
    shouldApply: config => config.visualizationType !== 'Warming Stripes' && config.legend?.position !== 'top',
    apply: config => ({ ...config, legend: { ...config.legend, position: 'top' } }),
    editorLocations: ['Legend > Position'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Legend > Position', value: formatOption(afterConfig.legend?.position) }
    ]
  },
  {
    id: 'chart-legend-single-row',
    label: 'Use a single-row legend',
    shouldApply: config => config.legend?.singleRow === false,
    apply: config => ({ ...config, legend: { ...config.legend, singleRow: true } }),
    editorLocations: ['Legend > Single Row Legend'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Legend > Single Row Legend', value: formatBoolean(afterConfig.legend?.singleRow) }
    ]
  },
  {
    id: 'chart-bar-borders',
    label: 'Show bar borders',
    shouldApply: config => chartSupportsBarBorders(config) && config.barHasBorder === 'false',
    apply: config => ({ ...config, barHasBorder: 'true' }),
    editorLocations: ['Visual > Bar Borders'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Bar Borders', value: formatBoolean(afterConfig.barHasBorder === 'true') }
    ]
  },
  {
    id: 'chart-bar-style',
    label: 'Use flat bar style',
    shouldApply: config => config.visualizationType === 'Bar' && config.barStyle === 'rounded',
    apply: config => ({ ...config, barStyle: 'flat' }),
    editorLocations: ['General > Bar Style'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'General > Bar Style', value: formatOption(afterConfig.barStyle) }
    ]
  },
  {
    id: 'chart-bar-thickness',
    label: 'Use modern bar thickness',
    shouldApply: config =>
      config.visualizationType === 'Bar' && isVerticalChart(config) && isLegacyBarThickness(config.barThickness),
    apply: config => ({ ...config, barThickness: DEFAULT_BAR_THICKNESS }),
    editorLocations: ['Visual > Bar Thickness'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Bar Thickness', value: formatValue(afterConfig.barThickness) }
    ]
  },
  {
    id: 'chart-palette-version-2-1',
    label: 'Use improved Palette 2.1 color distribution',
    shouldApply: usesPaletteVersion20,
    apply: applyPaletteVersion21,
    editorLocations: ['Visual > Chart Color Palette'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Chart Color Palette', value: formatValue(afterConfig.general?.palette?.version) }
    ]
  },
  {
    id: 'chart-table-expanded',
    label: 'Collapse data table by default',
    shouldApply: config => config.table?.expanded !== false,
    apply: config => ({ ...config, table: { ...config.table, expanded: false } }),
    editorLocations: ['Data Table > Expanded by Default'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Data Table > Expanded by Default', value: formatBoolean(afterConfig.table?.expanded) }
    ]
  }
]

const getChartModernizationRecipe = (config: ChartConfig): ModernizationRecipe<ChartConfig> | undefined => {
  const changes = getApplicableChanges(chartModernizationChanges, config)
  if (!changes.length) return
  const modernizedConfig = applyChanges(changes, config)

  return {
    id: 'modernize-chart',
    appliesTo: 'chart',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations)),
    editorLocationDetails: collectChangeDetails(changes, config, modernizedConfig),
    options: changesToOptions(changes, config)
  }
}

const mapUsesQualitativePalette = (config: MapConfig) => {
  const configuredPalette = config.general?.palette
  const paletteName =
    (typeof configuredPalette === 'string' ? configuredPalette : configuredPalette?.name) ||
    (config as MapConfig & { color?: string }).color

  if (typeof paletteName !== 'string') return false

  const normalizedPaletteName = paletteName.trim().toLowerCase()
  return normalizedPaletteName.startsWith('qualitative') || normalizedPaletteName.startsWith('colorblindsafe')
}

const mapLegendIsEligibleForGradient = (config: MapConfig) => {
  if (config.legend?.style === 'gradient') return false
  if (!['top', 'bottom', 'side'].includes(config.legend?.position as string)) return false
  if (!['equalnumber', 'equalinterval', 'manual', 'category'].includes(config.legend?.type as string)) return false

  return !mapUsesQualitativePalette(config)
}

const mapSupportsStateLabels = (config: MapConfig) =>
  config.general?.geoType === 'us' && config.general?.displayAsHex === false

const mapModernizationChanges: ModernizationChange<MapConfig>[] = [
  {
    id: 'map-title-style',
    label: 'Use small title style',
    shouldApply: config => Boolean(config.general) && isLegacyOrMissingTitleStyle(config.general?.titleStyle),
    apply: config => ({ ...config, general: { ...config.general, titleStyle: 'small' } }),
    editorLocations: ['General > Title Style'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'General > Title Style', value: formatTitleStyle(afterConfig.general?.titleStyle) }
    ]
  },
  {
    id: 'map-state-labels',
    label: 'Show state labels',
    shouldApply: config => mapSupportsStateLabels(config) && config.general?.displayStateLabels === false,
    apply: config => ({ ...config, general: { ...config.general, displayStateLabels: true } }),
    editorLocations: ['Type > Show State Labels'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Type > Show State Labels', value: formatBoolean(afterConfig.general?.displayStateLabels) }
    ]
  },
  {
    id: 'map-legend-position',
    label: 'Move legend to the top',
    shouldApply: config => Boolean(config.legend?.position) && config.legend?.position !== 'top',
    apply: config => ({
      ...config,
      legend: {
        ...config.legend,
        position: 'top',
        hideBorder: true
      }
    }),
    editorLocations: ['Legend > Legend Position'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Legend > Legend Position', value: formatOption(afterConfig.legend?.position) }
    ]
  },
  {
    id: 'map-legend-style',
    label: 'Use gradient legend style',
    shouldApply: mapLegendIsEligibleForGradient,
    apply: config => ({
      ...config,
      legend: {
        ...config.legend,
        style: 'gradient',
        hideBorder: true
      }
    }),
    editorLocations: ['Legend > Legend Style'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Legend > Legend Style', value: formatOption(afterConfig.legend?.style) }
    ]
  },
  {
    id: 'map-legend-single-row',
    label: 'Use a single-row legend',
    shouldApply: config =>
      config.legend?.singleRow === false &&
      config.legend?.style !== 'gradient' &&
      !mapLegendIsEligibleForGradient(config),
    apply: config => ({ ...config, legend: { ...config.legend, singleRow: true } }),
    editorLocations: ['Legend > Single Row Legend'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Legend > Single Row Legend', value: formatBoolean(afterConfig.legend?.singleRow) }
    ]
  },
  {
    id: 'map-special-classes-last',
    label: 'Show special classes last',
    shouldApply: config => Boolean(config.legend) && config.legend?.showSpecialClassesLast !== true,
    apply: config => ({ ...config, legend: { ...config.legend, showSpecialClassesLast: true } }),
    editorLocations: ['Legend > Show Special Classes Last'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      {
        path: 'Legend > Show Special Classes Last',
        value: formatBoolean(afterConfig.legend?.showSpecialClassesLast)
      }
    ]
  },
  {
    id: 'map-table-expanded',
    label: 'Collapse map data table by default',
    shouldApply: config => config.table?.expanded === true,
    apply: config => ({ ...config, table: { ...config.table, expanded: false } }),
    editorLocations: ['Data Table > Map loads with data table expanded'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      {
        path: 'Data Table > Map loads with data table expanded',
        value: formatBoolean(afterConfig.table?.expanded)
      }
    ]
  },
  {
    id: 'map-palette-version-2-1',
    label: 'Use improved Palette 2.1 color distribution',
    shouldApply: usesPaletteVersion20,
    apply: applyPaletteVersion21,
    editorLocations: ['Visual > Map Color Palette'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Map Color Palette', value: formatValue(afterConfig.general?.palette?.version) }
    ]
  }
]

const getMapModernizationRecipe = (config: MapConfig): ModernizationRecipe<MapConfig> | undefined => {
  const changes = getApplicableChanges(mapModernizationChanges, config)
  if (!changes.length) return
  const modernizedConfig = applyChanges(changes, config)

  return {
    id: 'modernize-map',
    appliesTo: 'map',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations)),
    editorLocationDetails: collectChangeDetails(changes, config, modernizedConfig),
    options: changesToOptions(changes, config)
  }
}

const dataBiteModernizationChanges: ModernizationChange<Record<string, any>>[] = [
  {
    id: 'data-bite-style',
    label: 'Use TP5 data bite style',
    shouldApply: config => config.biteStyle !== 'tp5',
    apply: config => ({ ...config, biteStyle: 'tp5' }),
    editorLocations: ['General > Data Bite Style'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'General > Data Bite Style', value: formatOption(afterConfig.biteStyle) }
    ]
  },
  {
    id: 'data-bite-data-format-commas',
    label: 'Show commas in formatted numbers',
    shouldApply: config => config.dataFormat?.commas === false,
    apply: config => ({ ...config, dataFormat: { ...config.dataFormat, commas: true } }),
    editorLocations: ['Data > Add Commas'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Data > Add Commas', value: formatBoolean(afterConfig.dataFormat?.commas) }
    ]
  }
]

const getDataBiteModernizationRecipe = (
  config: Record<string, any>
): ModernizationRecipe<Record<string, any>> | undefined => {
  const changes = getApplicableChanges(dataBiteModernizationChanges, config)
  if (!changes.length) return
  const modernizedConfig = applyChanges(changes, config)

  return {
    id: 'modernize-data-bite',
    appliesTo: 'data-bite',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations)),
    editorLocationDetails: collectChangeDetails(changes, config, modernizedConfig),
    options: changesToOptions(changes, config)
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
    editorLocations: ['General > Chart Type'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'General > Chart Type', value: formatValue(afterConfig.visualizationType) }
    ]
  },
  {
    id: 'waffle-chart-tp5-gauge',
    label: 'Use TP5 gauge chart style',
    shouldApply: config => isLegacyGaugeType(config.visualizationType),
    apply: config => ({ ...config, visualizationType: 'TP5 Gauge' }),
    editorLocations: ['General > Chart Type'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'General > Chart Type', value: formatValue(afterConfig.visualizationType) }
    ]
  },
  {
    id: 'waffle-chart-data-format-commas',
    label: 'Show commas in formatted numbers',
    shouldApply: config => config.dataFormat?.commas !== true,
    apply: config => ({ ...config, dataFormat: { ...config.dataFormat, commas: true } }),
    editorLocations: ['Data > Add Commas'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Data > Add Commas', value: formatBoolean(afterConfig.dataFormat?.commas) }
    ]
  }
]

const getWaffleChartModernizationRecipe = (
  config: Record<string, any>
): ModernizationRecipe<Record<string, any>> | undefined => {
  const changes = getApplicableChanges(waffleChartModernizationChanges, config)
  if (!changes.length) return
  const modernizedConfig = applyChanges(changes, config)

  return {
    id: 'modernize-waffle-chart',
    appliesTo: 'waffle-chart',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations)),
    editorLocationDetails: collectChangeDetails(changes, config, modernizedConfig),
    options: changesToOptions(changes, config)
  }
}

const getDashboardWaffleChartLocationPrefix = (config: Record<string, any>) =>
  isLegacyGaugeType(config.visualizationType) || config.visualizationType === 'TP5 Gauge'
    ? 'Gauge Charts'
    : 'Waffle Charts'

const shouldDisableMarkupIncludeVisual = (config: Record<string, any>, field: string) =>
  config.contentEditor?.style !== 'tp5' && config.visual?.[field] === true

const markupIncludeModernizationChanges: ModernizationChange<Record<string, any>>[] = [
  {
    id: 'markup-include-title-style',
    label: 'Use small markup include title style',
    shouldApply: config =>
      config.contentEditor?.style !== 'tp5' && isLegacyOrMissingTitleStyle(config.contentEditor?.titleStyle),
    apply: config => ({ ...config, contentEditor: { ...config.contentEditor, titleStyle: 'small' } }),
    editorLocations: ['General > Title Style'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'General > Title Style', value: formatTitleStyle(afterConfig.contentEditor?.titleStyle) }
    ]
  },
  {
    id: 'markup-include-visual-border',
    label: 'Remove markup include border',
    shouldApply: config => shouldDisableMarkupIncludeVisual(config, 'border'),
    apply: config => ({ ...config, visual: { ...config.visual, border: false } }),
    editorLocations: ['Visual > Display Border'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Display Border', value: formatBoolean(afterConfig.visual?.border) }
    ]
  },
  {
    id: 'markup-include-visual-border-color-theme',
    label: 'Disable markup include border color theme',
    shouldApply: config => shouldDisableMarkupIncludeVisual(config, 'borderColorTheme'),
    apply: config => ({ ...config, visual: { ...config.visual, borderColorTheme: false } }),
    editorLocations: ['Visual > Use Border Color Theme'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Use Border Color Theme', value: formatBoolean(afterConfig.visual?.borderColorTheme) }
    ]
  },
  {
    id: 'markup-include-visual-accent',
    label: 'Remove markup include accent style',
    shouldApply: config => shouldDisableMarkupIncludeVisual(config, 'accent'),
    apply: config => ({ ...config, visual: { ...config.visual, accent: false } }),
    editorLocations: ['Visual > Use Accent Style'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Use Accent Style', value: formatBoolean(afterConfig.visual?.accent) }
    ]
  },
  {
    id: 'markup-include-visual-background',
    label: 'Remove markup include theme background color',
    shouldApply: config => shouldDisableMarkupIncludeVisual(config, 'background'),
    apply: config => ({ ...config, visual: { ...config.visual, background: false } }),
    editorLocations: ['Visual > Use Theme Background Color'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Use Theme Background Color', value: formatBoolean(afterConfig.visual?.background) }
    ]
  },
  {
    id: 'markup-include-visual-hide-background-color',
    label: 'Disable markup include hidden background color',
    shouldApply: config => shouldDisableMarkupIncludeVisual(config, 'hideBackgroundColor'),
    apply: config => ({ ...config, visual: { ...config.visual, hideBackgroundColor: false } }),
    editorLocations: ['Visual > Hide Background Color'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Visual > Hide Background Color', value: formatBoolean(afterConfig.visual?.hideBackgroundColor) }
    ]
  }
]

const getMarkupIncludeModernizationRecipe = (
  config: Record<string, any>
): ModernizationRecipe<Record<string, any>> | undefined => {
  const changes = getApplicableChanges(markupIncludeModernizationChanges, config)
  if (!changes.length) return
  const modernizedConfig = applyChanges(changes, config)

  return {
    id: 'modernize-markup-include',
    appliesTo: 'markup-include',
    apply: currentConfig => applyChanges(changes, currentConfig),
    editorLocations: unique(changes.flatMap(change => change.editorLocations)),
    editorLocationDetails: collectChangeDetails(changes, config, modernizedConfig),
    options: changesToOptions(changes, config)
  }
}

const hasNonEmptyTitle = (value: unknown) => typeof value === 'string' && Boolean(value.trim())

const dashboardChildHasTitle = (visualization: Record<string, any>) => {
  if (visualization?.type === 'chart') {
    return visualization.showTitle !== false && hasNonEmptyTitle(visualization.title)
  }

  if (visualization?.type === 'map') {
    return visualization.general?.showTitle !== false && hasNonEmptyTitle(visualization.general?.title)
  }

  if (visualization?.type === 'markup-include') {
    return hasNonEmptyTitle(visualization.contentEditor?.title)
  }

  return false
}

const dashboardHasTitledChildren = (config: MultiDashboardConfig) => {
  const placedWidgetKeys = unique(
    (config.rows || []).flatMap(row =>
      (row.columns || []).flatMap(column =>
        getColumnWidgetEntries(column)
          .map(entry => entry.widget)
          .filter((widget): widget is string => Boolean(widget))
      )
    )
  )

  return placedWidgetKeys.some(widgetKey => {
    const visualization = config.visualizations?.[widgetKey]
    return visualization ? dashboardChildHasTitle(visualization as Record<string, any>) : false
  })
}

const getDashboardTitleStyle = (config: MultiDashboardConfig) =>
  dashboardHasTitledChildren(config) ? 'large' : 'small'

const dashboardModernizationChanges: ModernizationChange<MultiDashboardConfig>[] = [
  {
    id: 'dashboard-title-style',
    label: 'Use dashboard title hierarchy based on child titles',
    shouldApply: config =>
      Boolean(config.dashboard) && (config.dashboard?.titleStyle ?? 'small') !== getDashboardTitleStyle(config),
    apply: config => ({
      ...config,
      dashboard: { ...config.dashboard, titleStyle: getDashboardTitleStyle(config) }
    }),
    editorLocations: ['Dashboard Settings > Title Style'],
    getEditorLocationDetails: (_beforeConfig, afterConfig) => [
      { path: 'Dashboard Settings > Title Style', value: formatTitleStyle(afterConfig.dashboard?.titleStyle) }
    ]
  },
  {
    id: 'dashboard-image-download-link-style',
    label: 'Use link-style dashboard image downloads',
    shouldApply: config =>
      config.dashboard?.downloads?.downloadImageButton === true &&
      config.dashboard.downloads.downloadImageButtonStyle !== 'link',
    apply: config => ({
      ...config,
      dashboard: {
        ...config.dashboard,
        downloads: {
          ...config.dashboard?.downloads,
          downloadImageButtonStyle: 'link'
        }
      }
    }),
    editorLocations: ['Dashboard Settings > Image download control'],
    getEditorLocationDetails: () => [
      { path: 'Dashboard Settings > Image download control', value: 'Download Image Link' }
    ]
  }
]

type DashboardModernizationPlan = {
  apply: (config: MultiDashboardConfig) => MultiDashboardConfig
  editorLocations: string[]
  editorLocationDetails: ModernizationSettingDetail[]
  options: ModernizationOption<MultiDashboardConfig>[]
}

const getDashboardChildModernizationRecipe = (
  visualization: Record<string, any>
): { prefix: string; recipe: ModernizationRecipe<Record<string, any>> } | undefined => {
  if (visualization?.type === 'chart') {
    const recipe = getChartModernizationRecipe(visualization as ChartConfig) as
      | ModernizationRecipe<Record<string, any>>
      | undefined
    return recipe ? { prefix: 'Charts', recipe } : undefined
  }

  if (visualization?.type === 'map') {
    const recipe = getMapModernizationRecipe(visualization as MapConfig) as
      | ModernizationRecipe<Record<string, any>>
      | undefined
    return recipe ? { prefix: 'Maps', recipe } : undefined
  }

  if (visualization?.type === 'data-bite') {
    const recipe = getDataBiteModernizationRecipe(visualization)
    return recipe ? { prefix: 'Data Bites', recipe } : undefined
  }

  if (visualization?.type === 'waffle-chart') {
    const recipe = getWaffleChartModernizationRecipe(visualization)
    return recipe ? { prefix: getDashboardWaffleChartLocationPrefix(visualization), recipe } : undefined
  }

  if (visualization?.type === 'markup-include') {
    const recipe = getMarkupIncludeModernizationRecipe(visualization)
    return recipe ? { prefix: 'Markup Includes', recipe } : undefined
  }
}

const buildDashboardModernizationPlan = (config: MultiDashboardConfig): DashboardModernizationPlan | undefined => {
  const dashboardChanges = getApplicableChanges(dashboardModernizationChanges, config)
  const editorLocations = dashboardChanges.flatMap(change => change.editorLocations)
  const editorLocationDetails = collectChangeDetails(dashboardChanges, config, applyChanges(dashboardChanges, config))
  const visualizationAppliers = new Map<string, (visualization: Record<string, any>) => Record<string, any>>()
  const multiDashboardAppliers = new Map<number, (dashboard: MultiDashboardConfig) => MultiDashboardConfig>()
  const optionOccurrences = new Map<
    string,
    {
      label: string
      editorLocations: string[]
      editorLocationDetails: ModernizationSettingDetail[]
      appliers: Array<(config: MultiDashboardConfig) => MultiDashboardConfig>
    }
  >()
  const addOptionOccurrence = (
    option: ModernizationOption<any>,
    apply: (config: MultiDashboardConfig) => MultiDashboardConfig,
    prefix?: string
  ) => {
    const occurrence = optionOccurrences.get(option.id) || {
      label: option.label,
      editorLocations: [],
      editorLocationDetails: [],
      appliers: []
    }
    occurrence.editorLocations.push(
      ...option.editorLocations.map(location => (prefix ? `${prefix} > ${location}` : location))
    )
    occurrence.editorLocationDetails.push(
      ...(option.editorLocationDetails || option.editorLocations.map(path => ({ path }))).map(detail => ({
        ...detail,
        path: prefix ? `${prefix} > ${detail.path}` : detail.path
      }))
    )
    occurrence.appliers.push(apply)
    optionOccurrences.set(option.id, occurrence)
  }

  changesToOptions(dashboardChanges, config).forEach(option => {
    addOptionOccurrence(option, currentConfig => option.apply(currentConfig))
  })

  Object.entries(config.visualizations || {}).forEach(([key, visualization]) => {
    if (visualization?.type === 'dashboard') {
      const nestedPlan = buildDashboardModernizationPlan(visualization as MultiDashboardConfig)
      if (!nestedPlan) return

      editorLocations.push(...nestedPlan.editorLocations)
      editorLocationDetails.push(...nestedPlan.editorLocationDetails)
      visualizationAppliers.set(key, dashboard => nestedPlan.apply(dashboard as MultiDashboardConfig))
      nestedPlan.options.forEach(option => {
        addOptionOccurrence(option, currentConfig => ({
          ...currentConfig,
          visualizations: {
            ...currentConfig.visualizations,
            [key]: option.apply(currentConfig.visualizations?.[key] as MultiDashboardConfig)
          }
        }))
      })
      return
    }

    const childRecipe = getDashboardChildModernizationRecipe(visualization as Record<string, any>)
    if (!childRecipe) return

    const { prefix, recipe } = childRecipe
    editorLocations.push(...recipe.editorLocations.map(location => `${prefix} > ${location}`))
    if (recipe.editorLocationDetails) editorLocationDetails.push(...prefixDetails(prefix, recipe.editorLocationDetails))
    visualizationAppliers.set(key, childConfig => applyModernizationRecipe(recipe, childConfig))
    ;(recipe.options || []).forEach(option => {
      addOptionOccurrence(
        option,
        currentConfig => ({
          ...currentConfig,
          visualizations: {
            ...currentConfig.visualizations,
            [key]: option.apply(currentConfig.visualizations?.[key] as Record<string, any>)
          }
        }),
        prefix
      )
    })
  })
  ;(config.multiDashboards || []).forEach((dashboard, index) => {
    const nestedPlan = buildDashboardModernizationPlan(dashboard as MultiDashboardConfig)
    if (!nestedPlan) return

    editorLocations.push(...nestedPlan.editorLocations)
    editorLocationDetails.push(...nestedPlan.editorLocationDetails)
    multiDashboardAppliers.set(index, nestedPlan.apply)
    nestedPlan.options.forEach(option => {
      addOptionOccurrence(option, currentConfig => ({
        ...currentConfig,
        multiDashboards: currentConfig.multiDashboards?.map((dashboard, dashboardIndex) =>
          dashboardIndex === index ? option.apply(dashboard as MultiDashboardConfig) : dashboard
        )
      }))
    })
  })

  if (!dashboardChanges.length && !visualizationAppliers.size && !multiDashboardAppliers.size) return

  return {
    editorLocations: unique(editorLocations),
    editorLocationDetails: uniqueDetails(editorLocationDetails),
    options: Array.from(optionOccurrences.entries()).map(([id, occurrence]) => ({
      id,
      label: occurrence.label,
      editorLocations: unique(occurrence.editorLocations),
      editorLocationDetails: mergeDetailsByPath(occurrence.editorLocationDetails),
      apply: currentConfig =>
        occurrence.appliers.reduce(
          (updatedConfig, applyOccurrence) => applyOccurrence(updatedConfig),
          cloneConfig(currentConfig) as MultiDashboardConfig
        )
    })),
    apply: currentConfig => {
      let modernizedConfig = applyChanges(dashboardChanges, currentConfig)

      if (modernizedConfig.visualizations) {
        modernizedConfig = {
          ...modernizedConfig,
          visualizations: Object.fromEntries(
            Object.entries(modernizedConfig.visualizations).map(([key, visualization]) => [
              key,
              visualizationAppliers.get(key)?.(visualization as Record<string, any>) || visualization
            ])
          )
        }
      }

      if (modernizedConfig.multiDashboards) {
        modernizedConfig = {
          ...modernizedConfig,
          multiDashboards: modernizedConfig.multiDashboards.map(
            (dashboard, index) => multiDashboardAppliers.get(index)?.(dashboard as MultiDashboardConfig) || dashboard
          )
        }
      }

      return modernizedConfig
    }
  }
}

const getDashboardModernizationRecipe = (
  config: MultiDashboardConfig
): ModernizationRecipe<MultiDashboardConfig> | undefined => {
  const dashboardPlan = buildDashboardModernizationPlan(config)

  if (!dashboardPlan) return

  return {
    id: 'modernize-dashboard',
    appliesTo: 'dashboard',
    apply: dashboardPlan.apply,
    editorLocations: dashboardPlan.editorLocations,
    editorLocationDetails: dashboardPlan.editorLocationDetails,
    options: dashboardPlan.options
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

export const getModernizationOptions = <TConfig extends Record<string, any>>(
  recipe: ModernizationRecipe<TConfig>
): ModernizationOption<TConfig>[] =>
  recipe.options?.length
    ? recipe.options
    : [
        {
          id: recipe.id,
          label: 'Apply modernized styles',
          apply: currentConfig => recipe.apply(cloneConfig(currentConfig) as TConfig),
          editorLocations: recipe.editorLocations,
          editorLocationDetails: recipe.editorLocationDetails
        }
      ]
