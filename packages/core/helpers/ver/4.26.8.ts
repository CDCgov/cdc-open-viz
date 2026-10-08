import cloneConfig from '../cloneConfig'
import type { CoveMigrationContext } from './migrationContext'

const ver = '4.26.8'

const isAxisObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value)

const flattenAxis = (axis: Record<string, unknown>, nestedAxisKey: 'xAxis' | 'yAxis', isHorizontalChart: boolean) => {
  const { [nestedAxisKey]: nestedAxis, ...outerAxis } = axis

  if (!isAxisObject(nestedAxis)) return axis

  // Some legacy configs accidentally stored a complete chart inside an axis.
  // Runtime read valid axis settings from both levels, with outer values winning.
  if (axis.type === 'chart') {
    const flattenedAxis = { ...nestedAxis, ...outerAxis }

    // Do not let chart-level values replace incompatible axis values.
    if (nestedAxis.type === undefined) delete flattenedAxis.type
    else flattenedAxis.type = nestedAxis.type
    if (typeof outerAxis.padding !== 'number') {
      if (nestedAxis.padding === undefined) delete flattenedAxis.padding
      else flattenedAxis.padding = nestedAxis.padding
    }

    // Horizontal charts historically built their runtime value axis from the
    // nested axis, while vertical charts read the outer axis label directly.
    if (isHorizontalChart && nestedAxis.numTicks !== undefined) {
      flattenedAxis.numTicks = nestedAxis.numTicks
    }
    if (!isHorizontalChart && outerAxis.label === undefined) {
      delete flattenedAxis.label
    }

    return flattenedAxis
  }

  return { ...outerAxis, ...nestedAxis }
}

const backfillRightTitlePlacement = (config: any, startingConfig = config, isDashboardChild = false) => {
  // Distinguish an authored yAxis from one synthesized by an earlier migration.
  const hadAuthoredYAxis = Object.prototype.hasOwnProperty.call(startingConfig || {}, 'yAxis')

  if (
    config?.type === 'chart' &&
    config.yAxis &&
    (hadAuthoredYAxis || isDashboardChild) &&
    !config.yAxis.rightTitlePlacement
  ) {
    config.yAxis.rightTitlePlacement = 'side'
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    // Give each visualization its matching originally saved section shape.
    Object.entries(config.visualizations).forEach(([key, visualization]) =>
      backfillRightTitlePlacement(visualization, startingConfig?.visualizations?.[key], true)
    )
  }
}

const migrateDashboardFilterOrder = (config: any) => {
  if (config?.type !== 'dashboard' || !Array.isArray(config.dashboard?.sharedFilters)) return

  config.dashboard.sharedFilters.forEach(filter => {
    const isNested = filter.filterStyle === 'nested-dropdown'
    if (filter.order === 'column') filter.order = isNested ? 'cust' : 'data'
    if (isNested && filter.subGrouping?.order === 'column') filter.subGrouping.order = 'cust'
  })
}

const backfillLegacyHorizontalBarOrientation = (config: any) => {
  if (config?.type === 'chart' && config.visualizationType === 'Bar' && config.visualizationSubType === 'horizontal') {
    config.orientation = 'horizontal'
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(backfillLegacyHorizontalBarOrientation)
  }
}

const backfillHorizontalBarLabelPlacement = (config: any) => {
  const isHorizontalBar =
    config?.type === 'chart' && config.visualizationType === 'Bar' && config.orientation === 'horizontal'

  if (isHorizontalBar && !config.yAxis?.labelPlacement) {
    config.yAxis = {
      ...config.yAxis,
      labelPlacement: 'Below Bar'
    }
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(backfillHorizontalBarLabelPlacement)
  }
}

const backfillLegacyBarThickness = (config: any) => {
  if (config?.type === 'chart' && config.barThickness === undefined) {
    config.barThickness = 0.35
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(backfillLegacyBarThickness)
  }
}

const flattenNestedChartAxes = (config: any) => {
  if (config?.type === 'chart') {
    const isHorizontalChart =
      config.orientation === 'horizontal' ||
      (config.visualizationType === 'Bar' && config.visualizationSubType === 'horizontal')

    if (isAxisObject(config.yAxis?.yAxis)) {
      config.yAxis = flattenAxis(config.yAxis, 'yAxis', isHorizontalChart)
    }

    if (isAxisObject(config.xAxis?.xAxis)) {
      config.xAxis = flattenAxis(config.xAxis, 'xAxis', isHorizontalChart)
    }
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(flattenNestedChartAxes)
  }
}

const update_4_26_8 = (config: any, context?: CoveMigrationContext) => {
  const newConfig = cloneConfig(config)
  const startingConfig = context?.startingConfig ?? config
  const isMultiDashboardChild = context?.isMultiDashboardChild ?? false
  flattenNestedChartAxes(newConfig)
  backfillRightTitlePlacement(newConfig, startingConfig, isMultiDashboardChild)
  backfillLegacyHorizontalBarOrientation(newConfig)
  backfillHorizontalBarLabelPlacement(newConfig)
  backfillLegacyBarThickness(newConfig)
  migrateDashboardFilterOrder(newConfig)
  newConfig.version = ver
  return newConfig
}

export {
  backfillLegacyHorizontalBarOrientation,
  backfillHorizontalBarLabelPlacement,
  backfillLegacyBarThickness,
  backfillRightTitlePlacement,
  flattenNestedChartAxes,
  migrateDashboardFilterOrder
}
export default update_4_26_8
