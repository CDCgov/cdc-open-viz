import type { BubbleConfig, BubbleLayer, MapConfig } from '../types/MapConfig'

type BubbleLayerOverrides = Partial<Omit<BubbleLayer, 'columns' | 'legend'>> & {
  columns?: Partial<BubbleLayer['columns']>
  legend?: Partial<NonNullable<BubbleLayer['legend']>>
}

export const createDefaultBubbleLayer = (overrides: BubbleLayerOverrides = {}): BubbleLayer => {
  const { columns: overrideColumns, legend: overrideLegend, ...restOverrides } = overrides
  const legend = {
    show: true,
    size: {
      show: false
    },
    ...(overrideLegend ?? {})
  }
  legend.size = {
    show: false,
    ...(overrideLegend?.size ?? {})
  }

  return {
    label: '',
    minBubbleSize: 1,
    maxBubbleSize: 20,
    extraBubbleBorder: false,
    showBubbleZeros: false,
    ...restOverrides,
    legend,
    columns: {
      geo: { name: '' },
      primary: { name: '' },
      ...(overrideColumns ?? {})
    }
  }
}

export const normalizeBubbleLayer = (layer: BubbleLayerOverrides = {}): BubbleLayer => createDefaultBubbleLayer(layer)

export const getBubbleLayers = (bubble?: BubbleConfig): BubbleLayer[] => {
  if (!bubble) return []
  const legacyBubble = bubble as BubbleLayer
  if (Array.isArray(bubble.layers)) {
    const layers = bubble.layers.map(layer => normalizeBubbleLayer(layer))
    if (layers.some(hasConfiguredBubbleLayer) || !legacyBubble.columns) return layers
    return [normalizeBubbleLayer(legacyBubble)]
  }

  if (!legacyBubble.columns) return []
  return [normalizeBubbleLayer(legacyBubble)]
}

export const hasConfiguredBubbleLayer = (layer?: BubbleLayer): boolean =>
  Boolean(layer?.columns?.geo?.name && layer?.columns?.primary?.name)

export const getConfiguredBubbleLayers = (config: MapConfig): BubbleLayer[] =>
  getBubbleLayers(config.bubble).filter(hasConfiguredBubbleLayer)

export const getPrimaryBubbleLayer = (config: MapConfig): BubbleLayer | undefined =>
  getConfiguredBubbleLayers(config)[0] ?? getBubbleLayers(config.bubble)[0]

export const mapConfigForBubbleLayer = (config: MapConfig, layer: BubbleLayer): MapConfig => {
  const normalizedLayer = normalizeBubbleLayer(layer)
  const primaryColumnName =
    normalizedLayer.legend?.type === 'category' && normalizedLayer.columns.categorical?.name
      ? normalizedLayer.columns.categorical.name
      : normalizedLayer.columns.primary.name

  return {
    ...config,
    bubble: {
      ...config.bubble,
      ...normalizedLayer,
      layers: [normalizedLayer]
    },
    columns: {
      ...config.columns,
      geo: { ...config.columns.geo, name: normalizedLayer.columns.geo.name },
      primary: { ...config.columns.primary, name: primaryColumnName },
      categorical: {
        ...(config.columns.categorical ?? { name: '' }),
        name: normalizedLayer.columns.categorical?.name ?? ''
      }
    },
    general: {
      ...config.general,
      palette: normalizedLayer.palette ?? config.general.palette
    },
    legend: {
      ...config.legend,
      ...(normalizedLayer.legend ?? {})
    }
  }
}
