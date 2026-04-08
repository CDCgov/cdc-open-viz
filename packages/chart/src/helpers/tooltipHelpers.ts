import { type ChartConfig } from '../types/ChartConfig'
import { type ColorScale } from '../types/ChartContext'

export type TooltipRowKind = 'heading' | 'series' | 'extra'

export type TooltipRow = {
  key: string
  value: string | number
  axisPosition?: string
  kind: TooltipRowKind
  markerColor?: string | null
  markerShape?: 'circle' | 'square'
  seriesKey?: string
}

export type TooltipDisplayData = {
  data: TooltipRow[]
  dataXPosition: number
  dataYPosition: number
  useMarkerColumn: boolean
}

type RawTooltipBodyRow = {
  text: string
  markerColor?: string | null
  markerShape?: 'circle' | 'square'
}

export type TooltipMarker = {
  markerColor: string
  markerShape: 'circle' | 'square'
}

const TOOLTIP_MARKER_SUPPORTED_TYPES = new Set(['Line', 'Area Chart', 'Combo', 'Bar', 'Scatter Plot'])

export const getTooltipMarkerShape = (config: ChartConfig): 'circle' | 'square' =>
  config.legend?.style === 'boxes' ? 'square' : 'circle'

export const shouldUseTooltipLegendMarkers = (config: ChartConfig): boolean => {
  const legendItemCount =
    config.runtime?.seriesLabelsAll?.length || config.runtime?.seriesKeys?.length || config.series?.length || 0
  const sourceLegendVisible = config.legend?.tooltipLegendVisible ?? !config.legend?.hide

  return (
    TOOLTIP_MARKER_SUPPORTED_TYPES.has(config.visualizationType) &&
    legendItemCount > 1 &&
    sourceLegendVisible &&
    config.legend?.style !== 'gradient' &&
    !config.legend?.groupBy
  )
}

export const getTooltipMarkerColor = (
  config: ChartConfig,
  colorScale: ColorScale | undefined,
  seriesKey?: string
): string | null => {
  if (!colorScale || !seriesKey) return null

  const colorInput = config.runtime?.seriesLabels?.[seriesKey] || seriesKey
  const color = colorScale(colorInput)
  return typeof color === 'string' ? color : null
}

export const getTooltipSeriesMarker = (
  config: ChartConfig,
  colorScale: ColorScale | undefined,
  seriesKey?: string
): TooltipMarker | null => {
  if (!shouldUseTooltipLegendMarkers(config)) {
    return null
  }

  const markerColor = getTooltipMarkerColor(config, colorScale, seriesKey)
  if (!markerColor) {
    return null
  }

  return {
    markerColor,
    markerShape: getTooltipMarkerShape(config)
  }
}

export const buildTooltipRow = (row: TooltipRow): TooltipRow => row

const getMarkerSignature = ({
  markerColor,
  markerShape = 'circle'
}: {
  markerColor?: string | null
  markerShape?: 'circle' | 'square'
}): string | null => {
  if (!markerColor) return null
  return `${markerColor}::${markerShape}`
}

export const tooltipShouldUseMarkerColumn = (
  rows: Array<{ markerColor?: string | null; markerShape?: 'circle' | 'square' }>
): boolean => {
  const signatures = rows.map(getMarkerSignature).filter(Boolean)

  if (signatures.length === 0) {
    return false
  }

  return new Set(signatures).size === signatures.length
}

export const tooltipHasMarkerColumn = (rows: TooltipRow[]): boolean =>
  tooltipShouldUseMarkerColumn(rows.filter(row => row.kind === 'series'))

export const buildTooltipBodyRowHtml = ({
  text,
  markerColor,
  markerShape = 'circle',
  useMarkerColumn
}: RawTooltipBodyRow & {
  useMarkerColumn: boolean
}): string => {
  if (!useMarkerColumn) {
    return `<li class="tooltip-body">${text}</li>`
  }

  const marker = markerColor
    ? `<span class="tooltip-marker-swatch tooltip-marker-swatch--${markerShape}" style="background-color: ${markerColor};" aria-hidden="true"></span>`
    : ''

  return `<li class="tooltip-body tooltip-body--marker-layout"><span class="tooltip-marker-slot" aria-hidden="true">${marker}</span><span class="tooltip-body-content">${text}</span></li>`
}

export const buildTooltipListHtml = ({
  heading,
  bodyRows
}: {
  heading: string
  bodyRows: RawTooltipBodyRow[]
}): string => {
  const hasMarkerColumn = tooltipShouldUseMarkerColumn(bodyRows)
  const renderedRows = bodyRows
    .filter(row => row.text !== undefined && row.text !== null && row.text !== '')
    .map(row => buildTooltipBodyRowHtml({ ...row, useMarkerColumn: hasMarkerColumn }))
    .join('')

  return `<ul><li class="tooltip-heading">${heading}</li>${renderedRows}</ul>`
}

export const buildSeriesTooltipListHtml = ({
  config,
  colorScale,
  heading,
  seriesKey,
  seriesText,
  extraRows = []
}: {
  config: ChartConfig
  colorScale?: ColorScale
  heading: string
  seriesKey?: string
  seriesText: string
  extraRows?: string[]
}): string => {
  const marker = getTooltipSeriesMarker(config, colorScale, seriesKey)

  return buildTooltipListHtml({
    heading,
    bodyRows: [
      {
        text: seriesText,
        markerColor: marker?.markerColor,
        markerShape: marker?.markerShape
      },
      ...extraRows.filter(Boolean).map(text => ({ text }))
    ]
  })
}
