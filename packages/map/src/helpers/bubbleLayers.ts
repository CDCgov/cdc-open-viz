import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { getPaletteAccessor } from '@cdc/core/helpers/getPaletteAccessor'
import type { BubbleConfig, BubbleLayer, MapConfig } from '../types/MapConfig'
import { DEFAULT_MAP_BACKGROUND } from './constants'

export const DEFAULT_MIN_BUBBLE_SIZE = 10
export const DEFAULT_MAX_BUBBLE_SIZE = 30
const STATIC_BUBBLE_COLOR_INDEX = 2

const DEFAULT_MAP_PALETTE_BY_VERSION: Record<number, string> = {
  1: 'sequential_blue_green',
  2: 'sequential_blue'
}

type BubbleLayerOverrides = Partial<Omit<BubbleLayer, 'columns' | 'legend'>> & {
  columns?: Partial<BubbleLayer['columns']>
  legend?: Partial<NonNullable<BubbleLayer['legend']>>
}

export const getFiniteBubbleNumber = (value: unknown): number | null => {
  if (value === null || value === undefined) return null
  if (typeof value === 'string' && value.trim() === '') return null

  const numericValue = Number(value)
  return Number.isFinite(numericValue) ? numericValue : null
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
    locationSource: 'data-column',
    minBubbleSize: DEFAULT_MIN_BUBBLE_SIZE,
    maxBubbleSize: DEFAULT_MAX_BUBBLE_SIZE,
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
  Boolean(layer?.columns?.primary?.name || layer?.columns?.size?.name) &&
  (isBubbleLayerUsingCoordinates(layer) ? hasBubbleLayerCoordinateColumns(layer) : hasBubbleLayerGeographyColumn(layer))

export const getConfiguredBubbleLayers = (config: MapConfig): BubbleLayer[] =>
  getBubbleLayers(config.bubble).filter(hasConfiguredBubbleLayer)

export const getPrimaryBubbleLayer = (config: MapConfig): BubbleLayer | undefined =>
  getConfiguredBubbleLayers(config)[0] ?? getBubbleLayers(config.bubble)[0]

const getEffectiveBubbleLayerPalette = (config: MapConfig, layer: BubbleLayer) => {
  const inheritedPalette = config.general?.palette

  if (!layer.palette) return inheritedPalette

  return {
    ...(inheritedPalette ?? {}),
    ...layer.palette,
    name: layer.palette.name || inheritedPalette?.name || ''
  }
}

const getDefaultPaletteName = (version: number, isReversed: boolean) => {
  const basePaletteName = DEFAULT_MAP_PALETTE_BY_VERSION[version] ?? DEFAULT_MAP_PALETTE_BY_VERSION[2]
  return isReversed ? `${basePaletteName}reverse` : basePaletteName
}

export const getBubbleLayerStaticColor = (config: MapConfig, layer: BubbleLayer): string => {
  const effectivePalette = getEffectiveBubbleLayerPalette(config, layer)
  const paletteConfig = {
    ...config,
    general: {
      ...(config.general ?? {}),
      palette: effectivePalette ?? config.general?.palette
    }
  }
  const version = getColorPaletteVersion(paletteConfig)
  const paletteName =
    effectivePalette?.name || config.general?.palette?.name || config.color || getDefaultPaletteName(version, false)
  const isReversed = Boolean(effectivePalette?.isReversed || paletteName.endsWith('reverse'))
  const paletteColors =
    effectivePalette?.customColorsOrdered ??
    effectivePalette?.customColors ??
    getPaletteAccessor(colorPalettes, paletteConfig, paletteName) ??
    getPaletteAccessor(colorPalettes, paletteConfig, getDefaultPaletteName(version, isReversed))
  const colors = Array.isArray(paletteColors) ? [...paletteColors] : []

  if (effectivePalette?.isReversed && !paletteName.endsWith('reverse')) colors.reverse()

  return colors[STATIC_BUBBLE_COLOR_INDEX] ?? colors[0] ?? DEFAULT_MAP_BACKGROUND
}

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
      palette: getEffectiveBubbleLayerPalette(config, normalizedLayer) ?? config.general.palette
    },
    legend: {
      ...config.legend,
      ...(normalizedLayer.legend ?? {})
    }
  }
}
