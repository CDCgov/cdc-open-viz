import cloneConfig from '../cloneConfig'

const ver = '4.26.7'

const normalizeBubbleLayer = (layer: any = {}) => {
  const legend = {
    show: true,
    size: {
      show: false
    },
    ...(layer.legend ?? {})
  }
  legend.size = {
    show: false,
    ...(layer.legend?.size ?? {})
  }

  return {
    label: layer.label ?? '',
    minBubbleSize: layer.minBubbleSize ?? 1,
    maxBubbleSize: layer.maxBubbleSize ?? 20,
    extraBubbleBorder: layer.extraBubbleBorder ?? false,
    showBubbleZeros: layer.showBubbleZeros ?? false,
    ...(layer.palette ? { palette: layer.palette } : {}),
    legend,
    columns: {
      geo: { name: layer.columns?.geo?.name ?? '' },
      primary: { name: layer.columns?.primary?.name ?? '' },
      ...(layer.columns?.size?.name ? { size: { name: layer.columns.size.name } } : {}),
      ...(layer.columns?.categorical?.name ? { categorical: { name: layer.columns.categorical.name } } : {})
    }
  }
}

const buildInitialBubbleLayer = (config: any, legacyVisualBubbleSettings: any) => {
  const bubble = config.bubble ?? {}

  return normalizeBubbleLayer({
    label: bubble.label ?? '',
    minBubbleSize: bubble.minBubbleSize ?? legacyVisualBubbleSettings.minBubbleSize ?? 1,
    maxBubbleSize: bubble.maxBubbleSize ?? legacyVisualBubbleSettings.maxBubbleSize ?? 20,
    extraBubbleBorder: bubble.extraBubbleBorder ?? legacyVisualBubbleSettings.extraBubbleBorder ?? false,
    showBubbleZeros: bubble.showBubbleZeros ?? legacyVisualBubbleSettings.showBubbleZeros ?? false,
    palette: bubble.palette,
    legend: bubble.legend,
    columns: {
      geo: { name: bubble.columns?.geo?.name ?? config.columns?.geo?.name ?? '' },
      primary: { name: bubble.columns?.primary?.name ?? config.columns?.primary?.name ?? '' },
      ...(bubble.columns?.size?.name ? { size: { name: bubble.columns.size.name } } : {}),
      ...(bubble.columns?.categorical?.name
        ? { categorical: { name: bubble.columns.categorical.name } }
        : config.columns?.categorical?.name
        ? { categorical: { name: config.columns.categorical.name } }
        : {})
    }
  })
}

const migrateBubbleSettings = (config: any) => {
  if (config.type !== 'map') return

  const isLegacyBubbleType = config.general?.type === 'bubble'
  const hasLegacyBubbleObject = config.bubble && !Array.isArray(config.bubble.layers) && config.bubble.columns
  const hasBubbleLayers = Array.isArray(config.bubble?.layers)
  const shouldClearTopLevelColumns = isLegacyBubbleType && !hasLegacyBubbleObject && !hasBubbleLayers

  if (!isLegacyBubbleType && !hasLegacyBubbleObject && !hasBubbleLayers) return

  const { minBubbleSize, maxBubbleSize, extraBubbleBorder, showBubbleZeros, ...remainingVisual } = config.visual ?? {}
  const legacyVisualBubbleSettings = { minBubbleSize, maxBubbleSize, extraBubbleBorder, showBubbleZeros }
  const layers = hasBubbleLayers
    ? config.bubble.layers.map((layer: any) => normalizeBubbleLayer(layer))
    : [buildInitialBubbleLayer(config, legacyVisualBubbleSettings)]

  config.bubble = {
    migratedToBubbleAccordion: true,
    layers
  }

  config.visual = remainingVisual

  if (isLegacyBubbleType) {
    config.general.type = 'data'
  }

  if (shouldClearTopLevelColumns) {
    if (config.columns?.geo) config.columns.geo.name = ''
    if (config.columns?.primary) config.columns.primary.name = ''
  }
}

const migrateDashboardBubbleSettings = (config: any) => {
  if (config.type !== 'dashboard' || !config.visualizations) return

  Object.values(config.visualizations).forEach((visualization: any) => {
    migrateBubbleSettings(visualization)
  })
}

const update_4_26_7 = (config: any) => {
  const newConfig = cloneConfig(config)
  migrateBubbleSettings(newConfig)
  migrateDashboardBubbleSettings(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_7
