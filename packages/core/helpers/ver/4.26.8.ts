import cloneConfig from '../cloneConfig'

const ver = '4.26.8'

const isAxisObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value)

const backfillRightTitlePlacement = (config: any) => {
  if (config?.type === 'chart' && config.yAxis && !config.yAxis.rightTitlePlacement) {
    config.yAxis.rightTitlePlacement = 'side'
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(backfillRightTitlePlacement)
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

const backfillHorizontalBarLabelPlacement = (config: any) => {
  const isHorizontalBar =
    config?.type === 'chart' &&
    config.visualizationType === 'Bar' &&
    (config.orientation === 'horizontal' || config.visualizationSubType === 'horizontal')

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

const flattenNestedChartAxes = (config: any) => {
  if (config?.type === 'chart') {
    if (isAxisObject(config.yAxis?.yAxis)) {
      const { yAxis: nestedYAxis, ...outerYAxis } = config.yAxis
      config.yAxis = { ...outerYAxis, ...nestedYAxis }
    }

    if (isAxisObject(config.xAxis?.xAxis)) {
      const { xAxis: nestedXAxis, ...outerXAxis } = config.xAxis
      config.xAxis = { ...outerXAxis, ...nestedXAxis }
    }
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(flattenNestedChartAxes)
  }
}

const update_4_26_8 = (config: any) => {
  const newConfig = cloneConfig(config)
  flattenNestedChartAxes(newConfig)
  backfillRightTitlePlacement(newConfig)
  backfillHorizontalBarLabelPlacement(newConfig)
  migrateDashboardFilterOrder(newConfig)
  newConfig.version = ver
  return newConfig
}

export {
  backfillHorizontalBarLabelPlacement,
  backfillRightTitlePlacement,
  flattenNestedChartAxes,
  migrateDashboardFilterOrder
}
export default update_4_26_8
