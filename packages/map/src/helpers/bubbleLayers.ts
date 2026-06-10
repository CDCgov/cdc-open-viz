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
    locationSource: 'data-column',
    minBubbleSize: 1,
    maxBubbleSize: 20,
    extraBubbleBorder: false,
    showBubbleZeros: false,
    ...restOverrides,
    legend,
    columns: {
      geo: { name: '' },
      primary: { name: '' },
      latitude: { name: '' },
      longitude: { name: '' },
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

export const hasBubbleLayerCoordinateColumns = (layer?: BubbleLayer): boolean =>
  Boolean(layer?.columns?.latitude?.name && layer?.columns?.longitude?.name)

export const hasBubbleLayerGeographyColumn = (layer?: BubbleLayer): boolean => Boolean(layer?.columns?.geo?.name)

export const getBubbleLayerLocationSource = (layer?: BubbleLayer): NonNullable<BubbleLayer['locationSource']> =>
  layer?.locationSource ?? 'data-column'

export const isBubbleLayerUsingCoordinates = (layer?: BubbleLayer): boolean =>
  getBubbleLayerLocationSource(layer) === 'latitude-longitude'

export const hasConfiguredBubbleLayer = (layer?: BubbleLayer): boolean =>
  Boolean(layer?.columns?.primary?.name) &&
  (isBubbleLayerUsingCoordinates(layer) ? hasBubbleLayerCoordinateColumns(layer) : hasBubbleLayerGeographyColumn(layer))

export const getConfiguredBubbleLayers = (config: MapConfig): BubbleLayer[] =>
  getBubbleLayers(config.bubble).filter(hasConfiguredBubbleLayer)

export const getPrimaryBubbleLayer = (config: MapConfig): BubbleLayer | undefined =>
  getConfiguredBubbleLayers(config)[0] ?? getBubbleLayers(config.bubble)[0]

const mergeBubbleColumn = (baseColumn: Record<string, any> = {}, layerColumn: Record<string, any> = {}) => ({
  ...baseColumn,
  ...layerColumn,
  name: layerColumn.name ?? baseColumn.name ?? ''
})

export const mapConfigForBubbleLayer = (config: MapConfig, layer: BubbleLayer): MapConfig => {
  const normalizedLayer = normalizeBubbleLayer(layer)
  const primaryLayerColumn =
    normalizedLayer.legend?.type === 'category' && normalizedLayer.columns.categorical?.name
      ? normalizedLayer.columns.categorical
      : normalizedLayer.columns.primary
  const primaryColumnName = primaryLayerColumn.name
  const sizeLayerColumn = normalizedLayer.columns.size

  return {
    ...config,
    bubble: {
      ...config.bubble,
      ...normalizedLayer,
      layers: [normalizedLayer]
    },
    columns: {
      ...config.columns,
      geo: mergeBubbleColumn(config.columns.geo, normalizedLayer.columns.geo),
      latitude: { ...(config.columns.latitude ?? { name: '' }), name: normalizedLayer.columns.latitude?.name ?? '' },
      longitude: { ...(config.columns.longitude ?? { name: '' }), name: normalizedLayer.columns.longitude?.name ?? '' },
      primary: mergeBubbleColumn(config.columns.primary, primaryLayerColumn),
      ...(sizeLayerColumn?.name && sizeLayerColumn.name !== primaryColumnName
        ? {
            bubbleSize: mergeBubbleColumn({ label: sizeLayerColumn.name, tooltip: false }, sizeLayerColumn)
          }
        : {}),
      categorical: {
        ...(config.columns.categorical ?? { name: '' }),
        ...(normalizedLayer.columns.categorical ?? {}),
        name: normalizedLayer.columns.categorical?.name ?? ''
      }
    },
    general: {
      ...config.general,
      geoLabelOverride: normalizedLayer.columns.geo.label ?? config.general.geoLabelOverride,
      palette: normalizedLayer.palette ?? config.general.palette
    },
    legend: {
      ...config.legend,
      ...(normalizedLayer.legend ?? {})
    }
  }
}
