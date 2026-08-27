import { getChartPatternId } from '../../../helpers/getChartPatternId'
import { type ChartConfig, type LegendPattern } from '../../../types/ChartConfig'

type PortionPatternSupportConfig = Pick<
  ChartConfig,
  'visualizationType' | 'visualizationSubType' | 'isLollipopChart' | 'yAxis'
>

export type PortionPatternOverlay = {
  patternUrl: string
  ratio: number
  placement: 'start' | 'end'
  patternColor?: string
}

export type PortionPatternGeometry = {
  x: number
  y: number
  width: number
  height: number
}

export type PortionPatternBoundaryGeometry = {
  x1: number
  y1: number
  x2: number
  y2: number
}

export type PortionPatternRenderData = PortionPatternOverlay & {
  geometry: PortionPatternGeometry
  boundaryGeometry: PortionPatternBoundaryGeometry | null
}

type GetPortionPatternOverlayArgs = {
  patterns?: Record<string, LegendPattern>
  datum: Record<string, any>
  seriesKey: string
  totalValue: unknown
}

type GetPortionPatternGeometryArgs = {
  orientation: 'vertical' | 'horizontal'
  bounds: PortionPatternGeometry
  overlay: Pick<PortionPatternOverlay, 'ratio' | 'placement'>
}

type GetPortionPatternBoundaryGeometryArgs = {
  orientation: 'vertical' | 'horizontal'
  geometry: PortionPatternGeometry
  overlay: Pick<PortionPatternOverlay, 'ratio' | 'placement'>
}

type GetPortionPatternRenderDataArgs = GetPortionPatternOverlayArgs & {
  config: PortionPatternSupportConfig
  orientation: 'vertical' | 'horizontal'
  bounds: PortionPatternGeometry
}

const normalizeString = (value: unknown): string => String(value ?? '').trim()

const toPositiveFiniteNumber = (value: unknown): number | null => {
  if (typeof value !== 'number' && typeof value !== 'string') return null
  if (typeof value === 'string' && value.trim() === '') return null

  const numericValue = Number(value)
  return Number.isFinite(numericValue) && numericValue > 0 ? numericValue : null
}

export const isPortionPatternSupported = (config: PortionPatternSupportConfig): boolean =>
  ['Bar', 'Combo'].includes(config.visualizationType) &&
  config.visualizationSubType !== 'stacked' &&
  !config.isLollipopChart &&
  config.yAxis?.type !== 'logarithmic'

/**
 * Resolves the first configured portion pattern for a bar series. The first
 * matching entry wins even when its row values are invalid, so manually
 * authored duplicate targets remain deterministic.
 */
export const getPortionPatternOverlay = ({
  patterns,
  datum,
  seriesKey,
  totalValue
}: GetPortionPatternOverlayArgs): PortionPatternOverlay | null => {
  if (!patterns) return null

  for (const patternKey in patterns) {
    if (!Object.prototype.hasOwnProperty.call(patterns, patternKey)) continue

    const pattern = patterns[patternKey]
    if (pattern.application !== 'portion' || normalizeString(pattern.dataKey) !== seriesKey) continue

    const total = toPositiveFiniteNumber(totalValue)
    const portion = toPositiveFiniteNumber(datum?.[normalizeString(pattern.patternValueKey)])

    if (total === null || portion === null || portion > total) return null

    const patternColor = normalizeString(pattern.color)

    return {
      patternUrl: `url(#${getChartPatternId(patternKey)})`,
      ratio: portion / total,
      placement: pattern.placement === 'start' ? 'start' : 'end',
      ...(patternColor ? { patternColor } : {})
    }
  }

  return null
}

export const getPortionPatternGeometry = ({
  orientation,
  bounds,
  overlay
}: GetPortionPatternGeometryArgs): PortionPatternGeometry => {
  const { x, y, width, height } = bounds

  if (orientation === 'horizontal') {
    const overlayWidth = width * overlay.ratio
    return {
      x: overlay.placement === 'end' ? x + width - overlayWidth : x,
      y,
      width: overlayWidth,
      height
    }
  }

  const overlayHeight = height * overlay.ratio
  return {
    x,
    y: overlay.placement === 'start' ? y + height - overlayHeight : y,
    width,
    height: overlayHeight
  }
}

export const getPortionPatternBoundaryGeometry = ({
  orientation,
  geometry,
  overlay
}: GetPortionPatternBoundaryGeometryArgs): PortionPatternBoundaryGeometry | null => {
  if (overlay.ratio >= 1) return null

  if (orientation === 'horizontal') {
    const boundaryX = overlay.placement === 'end' ? geometry.x : geometry.x + geometry.width
    return {
      x1: boundaryX,
      y1: geometry.y,
      x2: boundaryX,
      y2: geometry.y + geometry.height
    }
  }

  const boundaryY = overlay.placement === 'end' ? geometry.y + geometry.height : geometry.y
  return {
    x1: geometry.x,
    y1: boundaryY,
    x2: geometry.x + geometry.width,
    y2: boundaryY
  }
}

export const getPortionPatternRenderData = ({
  config,
  orientation,
  bounds,
  patterns,
  datum,
  seriesKey,
  totalValue
}: GetPortionPatternRenderDataArgs): PortionPatternRenderData | null => {
  if (!isPortionPatternSupported(config)) return null

  const overlay = getPortionPatternOverlay({ patterns, datum, seriesKey, totalValue })
  if (!overlay) return null

  const geometry = getPortionPatternGeometry({ orientation, bounds, overlay })

  return {
    ...overlay,
    geometry,
    boundaryGeometry: getPortionPatternBoundaryGeometry({ orientation, geometry, overlay })
  }
}
