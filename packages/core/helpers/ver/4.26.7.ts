import cloneConfig from '../cloneConfig'

const ver = '4.26.7'

const migrateBubbleSettings = config => {
  if (config.general?.type !== 'bubble') return

  const { minBubbleSize, maxBubbleSize, extraBubbleBorder, showBubbleZeros, ...remainingVisual } = config.visual ?? {}

  config.bubble = {
    minBubbleSize: minBubbleSize ?? 1,
    maxBubbleSize: maxBubbleSize ?? 20,
    extraBubbleBorder: extraBubbleBorder ?? false,
    showBubbleZeros: showBubbleZeros ?? false,
    columns: {
      geo: { name: config.columns?.geo?.name ?? '' },
      primary: { name: config.columns?.primary?.name ?? '' },
      ...(config.columns?.categorical?.name ? { categorical: { name: config.columns.categorical.name } } : {})
    }
  }

  config.visual = remainingVisual
}

const update_4_26_7 = config => {
  const newConfig = cloneConfig(config)
  migrateBubbleSettings(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_7
