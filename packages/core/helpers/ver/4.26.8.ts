import cloneConfig from '../cloneConfig'
import { getColorPaletteVersion } from '../getColorPaletteVersion'

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

const backfillMapColorDistributionVersion = (config: any) => {
  if (config?.type === 'map') {
    config.general ??= {}
    config.general.palette ??= {}

    if (config.general.palette.distributionVersion === undefined) {
      config.general.palette.distributionVersion = '1.0'
    }
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(backfillMapColorDistributionVersion)
  }
}

const backfillChartColorDistributionVersion = (config: any) => {
  if (config?.type === 'chart' && getColorPaletteVersion(config) === 2) {
    const paletteName = config.general.palette.name
    const distributionVersion = ['qualitative_standard', 'qualitative_standardreverse'].includes(paletteName)
      ? '1.0'
      : '2.0'

    if (config.general.palette.distributionVersion === undefined) {
      config.general.palette.distributionVersion = distributionVersion
    }
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(backfillChartColorDistributionVersion)
  }
}

const update_4_26_8 = (config: any) => {
  const newConfig = cloneConfig(config)
  backfillRightTitlePlacement(newConfig)
  migrateDashboardFilterOrder(newConfig)
  backfillMapColorDistributionVersion(newConfig)
  backfillChartColorDistributionVersion(newConfig)
  newConfig.version = ver
  return newConfig
}

export {
  backfillChartColorDistributionVersion,
  backfillMapColorDistributionVersion,
  backfillRightTitlePlacement,
  migrateDashboardFilterOrder
}
export default update_4_26_8
