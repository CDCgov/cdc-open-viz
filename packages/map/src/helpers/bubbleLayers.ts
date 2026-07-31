import { scaleLinear } from 'd3-scale'
import chroma from 'chroma-js'
import type { BubbleConfig, BubbleLayer, MapConfig } from '../types/MapConfig'

export const DEFAULT_MIN_BUBBLE_SIZE = 12
export const DEFAULT_MAX_BUBBLE_SIZE = 30
export const DEFAULT_BUBBLE_OPACITY = 0.9
export const DEFAULT_BUBBLE_STATIC_COLOR = '#E69F00'
export const BUBBLE_STATIC_COLOR_SWATCHES = [
  '#E69F00',
  '#56B4E9',
  '#009E73',
  '#F0E442',
  '#0072B2',
  '#D55E00',
  '#CC79A7',
  '#000000',
  '#7E5803',
  '#005EAA',
  '#722161',
  '#4E88C7'
]
const REVERSE_PALETTE_SUFFIX = 'reverse'

type BubbleLayerOverrides = Partial<Omit<BubbleLayer, 'columns' | 'legend'>> & {
  columns?: Partial<BubbleLayer['columns']>
  legend?: Partial<NonNullable<BubbleLayer['legend']>>
}

type BubbleSizeScale = {
  domain: [number, number]
  getRadius: (value: unknown) => number | null
  range: [number, number]
  visibleValues: number[]
}

export const getFiniteBubbleNumber = (value: unknown): number | null => {
  if (value === null || value === undefined) return null
  if (typeof value === 'string' && value.trim() === '') return null

  const numericValue = Number(value)
  return Number.isFinite(numericValue) ? numericValue : null
}

export const getBubbleSizeColumnName = (layer?: BubbleLayer): string =>
  layer?.columns?.size?.name || layer?.columns?.primary?.name || ''

const getBubbleSizeBound = (value: unknown, fallback: number): number => {
  const numericValue = Number(value)
  return Number.isFinite(numericValue) ? numericValue : fallback
}

const isVisibleBubbleSizeValue = (value: number, showBubbleZeros: boolean): boolean =>
  value >= 0 && (showBubbleZeros || value > 0)

export const createBubbleSizeScale = (values: unknown[], layer: BubbleLayer): BubbleSizeScale | null => {
  const minBubbleSize = getBubbleSizeBound(layer.minBubbleSize, DEFAULT_MIN_BUBBLE_SIZE)
  const maxBubbleSize = getBubbleSizeBound(layer.maxBubbleSize, DEFAULT_MAX_BUBBLE_SIZE)
  const showBubbleZeros = layer.showBubbleZeros === true
  const visibleValues = values
    .map(getFiniteBubbleNumber)
    .filter((value): value is number => value !== null && isVisibleBubbleSizeValue(value, showBubbleZeros))

  if (!visibleValues.length) return null

  const domainMin = showBubbleZeros ? 0 : Math.min(1, ...visibleValues)
  const domainMax = Math.max(...visibleValues, domainMin)
  const scale =
    domainMax === domainMin
      ? () => minBubbleSize
      : scaleLinear().domain([domainMin, domainMax]).range([minBubbleSize, maxBubbleSize])

  return {
    domain: [domainMin, domainMax],
    range: [minBubbleSize, maxBubbleSize],
    visibleValues,
    getRadius: value => {
      const numericValue = getFiniteBubbleNumber(value)
      if (numericValue === null || !isVisibleBubbleSizeValue(numericValue, showBubbleZeros)) return null
      return Number(scale(numericValue))
    }
  }
}

export const getBubbleSizeLegendItems = (
  values: unknown[],
  layer: BubbleLayer,
  locale?: string,
  scaleValues: unknown[] = values
) => {
  const bubbleScale = createBubbleSizeScale(scaleValues, layer)
  if (!bubbleScale) return []

  const visibleValues = values
    .map(getFiniteBubbleNumber)
    .filter(
      (value): value is number => value !== null && isVisibleBubbleSizeValue(value, layer.showBubbleZeros === true)
    )

  if (!visibleValues.length) return []

  const sortedUniqueValues = Array.from(new Set(visibleValues)).sort((a, b) => a - b)
  const minValue = sortedUniqueValues[0]
  const maxValue = sortedUniqueValues[sortedUniqueValues.length - 1]
  const targetValues =
    sortedUniqueValues.length <= 3 ? sortedUniqueValues : [minValue, minValue + (maxValue - minValue) / 2, maxValue]
  const sampleValues = targetValues.reduce<number[]>((samples, targetValue) => {
    const closestValue = sortedUniqueValues.reduce((closest, value) =>
      Math.abs(value - targetValue) < Math.abs(closest - targetValue) ? value : closest
    )
    if (!samples.includes(closestValue)) samples.push(closestValue)
    return samples
  }, [])
  const numberFormatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 })

  return sampleValues.map(value => ({
    value,
    radius: bubbleScale.getRadius(value) ?? 0,
    label: numberFormatter.format(value)
  }))
}

export const getBubbleLayerOpacity = (layer?: Partial<Pick<BubbleLayer, 'opacity'>>): number => {
  const opacity = getFiniteBubbleNumber(layer?.opacity)
  if (opacity === null) return DEFAULT_BUBBLE_OPACITY
  return Math.min(Math.max(opacity, 0), 1)
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
    sizeType: 'numeric',
    sizeCategoryValuesOrder: [],
    includeNonGeoDataInSizeDomain: false,
    minBubbleSize: DEFAULT_MIN_BUBBLE_SIZE,
    maxBubbleSize: DEFAULT_MAX_BUBBLE_SIZE,
    extraBubbleBorder: false,
    showBubbleZeros: false,
    staticColor: DEFAULT_BUBBLE_STATIC_COLOR,
    ...restOverrides,
    opacity: getBubbleLayerOpacity(restOverrides),
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

export const getPaletteNameForReverseState = (paletteName = '', isReversed: boolean) => {
  if (isReversed && paletteName && !paletteName.endsWith(REVERSE_PALETTE_SUFFIX)) {
    return `${paletteName}${REVERSE_PALETTE_SUFFIX}`
  }
  if (!isReversed && paletteName.endsWith(REVERSE_PALETTE_SUFFIX)) {
    return paletteName.slice(0, -REVERSE_PALETTE_SUFFIX.length)
  }
  return paletteName
}

export const getEffectiveBubbleLayerPalette = (config: MapConfig, layer: BubbleLayer) => {
  const inheritedPalette = config.general?.palette

  if (!layer.palette) return inheritedPalette

  const isReversed = Boolean(layer.palette.isReversed ?? inheritedPalette?.isReversed)
  const paletteName = layer.palette.name || inheritedPalette?.name || ''

  return {
    ...(inheritedPalette ?? {}),
    ...layer.palette,
    isReversed,
    name: getPaletteNameForReverseState(paletteName, isReversed)
  }
}

export const getBubbleLayerPaletteForReverseState = (
  config: MapConfig,
  layer: BubbleLayer,
  isReversed: boolean
): NonNullable<BubbleLayer['palette']> => {
  const effectivePalette = getEffectiveBubbleLayerPalette(config, layer) ?? config.general?.palette ?? { name: '' }
  const name = getPaletteNameForReverseState(effectivePalette.name ?? '', isReversed)

  return {
    ...effectivePalette,
    name,
    isReversed
  }
}

export const getBubbleLayerStaticColor = (_config: MapConfig, layer: BubbleLayer): string => {
  return layer.staticColor && chroma.valid(layer.staticColor) ? layer.staticColor : DEFAULT_BUBBLE_STATIC_COLOR
}

const mergeBubbleColumn = (baseColumn: Record<string, any> = {}, layerColumn: Record<string, any> = {}) => ({
  ...baseColumn,
  ...layerColumn,
  name: layerColumn.name ?? baseColumn.name ?? ''
})

const BUBBLE_LAYER_PARENT_DATA_OPTION_FIELDS = ['prefix', 'suffix', 'roundToPlace', 'useCommas', 'commas', 'roundTo']

const omitParentDataOptions = (column: Record<string, any> = {}) => {
  const result = { ...column }
  BUBBLE_LAYER_PARENT_DATA_OPTION_FIELDS.forEach(field => delete result[field])
  return result
}

const mergeBubbleValueColumn = (baseColumn: Record<string, any> = {}, layerColumn: Record<string, any> = {}) =>
  mergeBubbleColumn(omitParentDataOptions(baseColumn), layerColumn)

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
      primary: mergeBubbleValueColumn(config.columns.primary, primaryLayerColumn),
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
