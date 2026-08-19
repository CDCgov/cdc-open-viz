import cloneConfig from '../cloneConfig'
import { mapColorPalettes } from '../../data/colorPalettes'
import { getColorPaletteVersion } from '../getColorPaletteVersion'
import { v2ColorDistribution } from '../palettes/colorDistributions'

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

const historicallyUsesV2MapColorDistribution = (config: any) => {
  const paletteName = config.general?.palette?.name || config.color
  const version = getColorPaletteVersion(config)
  let colors = mapColorPalettes?.[`v${version}`]?.[paletteName]

  if (!colors) {
    const defaultPalette = version === 1 ? 'sequential_blue_green' : 'sequential_blue'
    colors = mapColorPalettes?.[`v${version}`]?.[defaultPalette]
  }

  const numberOfItems = config.legend?.numberOfItems
  const isSequentialOrDivergent =
    paletteName && (paletteName.includes('sequential') || paletteName.includes('divergent'))

  return (
    version === 2 &&
    config.legend?.type === 'equalnumber' &&
    config.general?.equalNumberOptIn === true &&
    isSequentialOrDivergent &&
    colors?.length === 9 &&
    numberOfItems <= 9 &&
    Boolean(v2ColorDistribution[numberOfItems])
  )
}

const backfillMapColorDistributionVersion = (config: any) => {
  if (config?.type === 'map') {
    const distributionVersion = historicallyUsesV2MapColorDistribution(config) ? '2.0' : '1.0'
    config.general ??= {}
    config.general.palette ??= {}

    if (config.general.palette.distributionVersion === undefined) {
      config.general.palette.distributionVersion = distributionVersion
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
  historicallyUsesV2MapColorDistribution,
  migrateDashboardFilterOrder
}
export default update_4_26_8
