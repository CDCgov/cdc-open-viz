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

const update_4_26_8 = (config: any) => {
  const newConfig = cloneConfig(config)
  backfillRightTitlePlacement(newConfig)
  newConfig.version = ver
  return newConfig
}

export { backfillRightTitlePlacement }
export default update_4_26_8
