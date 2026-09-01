import cloneConfig from '../cloneConfig'

const ver = '4.26.8'

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

const update_4_26_8 = (config: any) => {
  const newConfig = cloneConfig(config)
  backfillRightTitlePlacement(newConfig)
  migrateDashboardFilterOrder(newConfig)
  newConfig.version = ver
  return newConfig
}

export { backfillRightTitlePlacement, migrateDashboardFilterOrder }
export default update_4_26_8
