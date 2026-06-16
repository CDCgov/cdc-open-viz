import cloneConfig from '../cloneConfig'

const ver = '4.26.7'

const normalizeBubbleColumn = (column: any = {}) => ({
  ...column,
  name: column?.name ?? ''
})

const mergeBubbleColumn = (preferredColumn: any = {}, fallbackColumn: any = {}) => ({
  ...fallbackColumn,
  ...preferredColumn,
  name: preferredColumn?.name ?? fallbackColumn?.name ?? ''
})

const normalizeBubbleLayer = (layer: any = {}) => {
  const legend = {
    show: layer.legend?.show ?? true,
    size: {
      show: false
    },
    ...(layer.legend ?? {})
  }
  legend.size = {
    show: false,
    ...(layer.legend?.size ?? {})
  }

  const columns = layer.columns ?? {}

  return {
    ...layer,
    label: layer.label ?? '',
    locationSource: layer.locationSource ?? 'data-column',
    minBubbleSize: layer.minBubbleSize ?? 1,
    maxBubbleSize: layer.maxBubbleSize ?? 20,
    extraBubbleBorder: layer.extraBubbleBorder ?? false,
    showBubbleZeros: layer.showBubbleZeros ?? false,
    ...(layer.palette ? { palette: layer.palette } : {}),
    legend,
    columns: {
      ...columns,
      geo: normalizeBubbleColumn(columns.geo),
      primary: normalizeBubbleColumn(columns.primary),
      ...(columns.latitude ? { latitude: normalizeBubbleColumn(columns.latitude) } : {}),
      ...(columns.longitude ? { longitude: normalizeBubbleColumn(columns.longitude) } : {}),
      ...(columns.size ? { size: normalizeBubbleColumn(columns.size) } : {}),
      ...(columns.categorical ? { categorical: normalizeBubbleColumn(columns.categorical) } : {})
    }
  }
}

const isBubbleLayerConfigured = (layer: any = {}) => {
  const columns = layer.columns ?? {}
  const locationSource = layer.locationSource ?? 'data-column'
  const hasPrimaryColumn = Boolean(columns.primary?.name)
  const hasLocationColumns =
    locationSource === 'latitude-longitude'
      ? Boolean(columns.latitude?.name && columns.longitude?.name)
      : Boolean(columns.geo?.name)

  return hasPrimaryColumn && hasLocationColumns
}

const buildInitialBubbleLayer = (config: any, legacyVisualBubbleSettings: any) => {
  const bubble = config.bubble ?? {}

  return normalizeBubbleLayer({
    label: bubble.label ?? '',
    minBubbleSize: bubble.minBubbleSize ?? legacyVisualBubbleSettings.minBubbleSize ?? 1,
    maxBubbleSize: bubble.maxBubbleSize ?? legacyVisualBubbleSettings.maxBubbleSize ?? 20,
    extraBubbleBorder: bubble.extraBubbleBorder ?? legacyVisualBubbleSettings.extraBubbleBorder ?? false,
    showBubbleZeros: bubble.showBubbleZeros ?? legacyVisualBubbleSettings.showBubbleZeros ?? false,
    locationSource: bubble.locationSource,
    palette: bubble.palette,
    legend: bubble.legend,
    columns: {
      geo: mergeBubbleColumn(bubble.columns?.geo, config.columns?.geo),
      primary: mergeBubbleColumn(bubble.columns?.primary, config.columns?.primary),
      ...(bubble.columns?.latitude?.name
        ? { latitude: mergeBubbleColumn(bubble.columns.latitude, config.columns?.latitude) }
        : {}),
      ...(bubble.columns?.longitude?.name
        ? { longitude: mergeBubbleColumn(bubble.columns.longitude, config.columns?.longitude) }
        : {}),
      ...(bubble.columns?.size?.name ? { size: normalizeBubbleColumn(bubble.columns.size) } : {}),
      ...(bubble.columns?.categorical?.name
        ? { categorical: normalizeBubbleColumn(bubble.columns.categorical) }
        : config.columns?.categorical?.name
        ? { categorical: normalizeBubbleColumn(config.columns.categorical) }
        : {})
    }
  })
}

const migrateBubbleSettings = (config: any) => {
  if (config.type !== 'map') return

  const isLegacyBubbleType = config.general?.type === 'bubble'
  const hasLegacyBubbleObject = config.bubble && !Array.isArray(config.bubble.layers) && config.bubble.columns
  const hasBubbleLayers = Array.isArray(config.bubble?.layers)
  const hasConfiguredBubbleLayers =
    hasBubbleLayers && config.bubble.layers.some((layer: any) => isBubbleLayerConfigured(layer))
  const shouldUseExistingBubbleLayers = hasBubbleLayers && (!isLegacyBubbleType || hasConfiguredBubbleLayers)
  const shouldClearTopLevelColumns = isLegacyBubbleType && !shouldUseExistingBubbleLayers

  if (!isLegacyBubbleType && !hasLegacyBubbleObject && !hasBubbleLayers) return

  const { minBubbleSize, maxBubbleSize, extraBubbleBorder, showBubbleZeros, ...remainingVisual } = config.visual ?? {}
  const legacyVisualBubbleSettings = { minBubbleSize, maxBubbleSize, extraBubbleBorder, showBubbleZeros }
  const layers = shouldUseExistingBubbleLayers
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
