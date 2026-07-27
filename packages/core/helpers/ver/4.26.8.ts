import cloneConfig from '../cloneConfig'

const ver = '4.26.8'
const CALLOUT_STYLE = 'callout'
const THIN_BORDER_STYLE = 'thin-border'

const backfillRightTitlePlacement = (config: any) => {
  if (config?.type === 'chart' && config.yAxis && !config.yAxis.rightTitlePlacement) {
    config.yAxis.rightTitlePlacement = 'side'
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(backfillRightTitlePlacement)
  }
}

const isEligibleTp5Component = (config: any) => {
  if (config.type === 'data-bite') return config.biteStyle === 'tp5'
  if (config.type === 'waffle-chart') {
    return config.visualizationType === 'TP5 Waffle' || config.visualizationType === 'TP5 Gauge'
  }
  if (config.type === 'markup-include') return config.contentEditor?.style === 'tp5'

  return false
}

const migrateTp5CalloutStyle = (config: any) => {
  if (isEligibleTp5Component(config)) {
    const visual = config.visual ?? {}
    const tp5Visual = config.tp5Visual ?? {}

    config.tp5Visual = {
      ...tp5Visual,
      calloutStyle: tp5Visual.calloutStyle ?? (visual.whiteBackground === true ? THIN_BORDER_STYLE : CALLOUT_STYLE)
    }

    const shouldMigrateValueAboveMessage =
      config.type === 'data-bite' || (config.type === 'waffle-chart' && config.visualizationType === 'TP5 Gauge')
    if (shouldMigrateValueAboveMessage && typeof tp5Visual.valueAboveMessage !== 'boolean') {
      config.tp5Visual.valueAboveMessage = visual.useWrap === true
    }

    config.visual = { ...visual }
    delete config.visual.whiteBackground
    delete config.visual.useWrap
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach((visualization: any) => {
      migrateTp5CalloutStyle(visualization)
    })
  }
}

const update_4_26_8 = (config: any) => {
  const newConfig = cloneConfig(config)
  backfillRightTitlePlacement(newConfig)
  migrateTp5CalloutStyle(newConfig)
  newConfig.version = ver
  return newConfig
}

export { backfillRightTitlePlacement, migrateTp5CalloutStyle }
export default update_4_26_8
