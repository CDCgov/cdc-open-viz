import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { type ChartConfig, type HeatMapXAxisPosition } from '../../../types/ChartConfig'
import {
  AXIS_MARGIN_PADDING,
  AXIS_OUTER_PADDING,
  AXIS_TICK_FONT,
  AXIS_TICK_FONT_SIZE,
  AXIS_TICK_LENGTH,
  AXIS_TITLE_FONT_SIZE,
  AXIS_TITLE_SPACE,
  AXIS_TOP_LABEL_SPACE,
  HEATMAP_CONFIG_DEFAULTS,
  MAX_HEATMAP_GRID_WIDTH,
  MAX_LEFT_MARGIN,
  MAX_X_AXIS_MARGIN,
  MIN_LEFT_MARGIN,
  MIN_X_AXIS_MARGIN,
  TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD,
  X_AXIS_TITLE_LABEL_PADDING,
  X_AXIS_TITLE_LABEL_SPACE
} from '../heatmap.constants'
import { type HeatMapLayout, type HeatMapMargins } from '../types'

export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export const getNonNegativeConfigNumber = (value: unknown, fallback: number) => {
  const numericValue = Number(value)
  return Number.isFinite(numericValue) ? Math.max(numericValue, 0) : fallback
}

export const getMeasuredTextWidth = (label: string) => getTextWidth(label, AXIS_TICK_FONT) || label.length * 7

export const getWidestLabelWidth = (labels: string[]) =>
  labels.reduce((widest, label) => Math.max(widest, getMeasuredTextWidth(String(label))), 0)

export const getRotatedLabelHeight = (labels: string[], rotationDegrees: number) => {
  if (labels.length === 0) return 0

  const labelWidth = getWidestLabelWidth(labels)
  const radians = (Math.abs(rotationDegrees) * Math.PI) / 180

  return Math.ceil(Math.abs(Math.sin(radians)) * labelWidth + Math.abs(Math.cos(radians)) * AXIS_TICK_FONT_SIZE)
}

const getProjectedLabelWidth = (label: string, rotationDegrees: number) => {
  const radians = (Math.abs(rotationDegrees) * Math.PI) / 180

  return Math.abs(Math.cos(radians)) * getMeasuredTextWidth(label) + Math.abs(Math.sin(radians)) * AXIS_TICK_FONT_SIZE
}

export const getXAxisEndpointMargins = (
  labels: string[],
  rotationDegrees: number,
  xAxisPosition: HeatMapXAxisPosition
) => {
  if (!labels.length) return { left: 0, right: 0 }

  const firstLabelWidth = getProjectedLabelWidth(labels[0], rotationDegrees)
  const lastLabelWidth = getProjectedLabelWidth(labels[labels.length - 1], rotationDegrees)

  if (!rotationDegrees) {
    return {
      left: firstLabelWidth / 2 + AXIS_OUTER_PADDING,
      right: lastLabelWidth / 2 + AXIS_OUTER_PADDING
    }
  }

  return xAxisPosition === 'top'
    ? { left: 0, right: lastLabelWidth + AXIS_OUTER_PADDING }
    : { left: firstLabelWidth + AXIS_OUTER_PADDING, right: 0 }
}

export const getXAxisTitleDistance = (labels: string[], rotationDegrees: number, columnLabelGap: number) => {
  const rotatedLabelHeight = getRotatedLabelHeight(labels, rotationDegrees)
  return columnLabelGap + Math.max(rotatedLabelHeight + X_AXIS_TITLE_LABEL_PADDING, X_AXIS_TITLE_LABEL_SPACE)
}

const getAxisMarginMax = (parentWidth: number, fallbackMax: number) => {
  if (parentWidth <= 0) return fallbackMax

  return Math.max(MIN_LEFT_MARGIN, Math.min(fallbackMax, parentWidth * 0.45))
}

export const getHeatMapXAxisPosition = (config: ChartConfig): HeatMapXAxisPosition =>
  config.heatmap?.xAxisPosition === 'bottom' ? 'bottom' : HEATMAP_CONFIG_DEFAULTS.xAxisPosition

export const getHeatMapYAxisLabel = (config: ChartConfig) =>
  String(config.yAxis?.label || config.runtime?.yAxis?.label || '').trim()

export const shouldRenderTopYAxisTitle = (config: ChartConfig) =>
  config.yAxis?.titlePlacement === 'top' && !config.hideYAxisLabel && Boolean(getHeatMapYAxisLabel(config))

export const getXAxisTickLabelProps = (
  xAxisPosition: HeatMapXAxisPosition,
  xTickRotation: number,
  columnLabelGap: number
) => {
  const isSteepRotation = xTickRotation < TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD

  if (!xTickRotation) {
    return {
      fontSize: AXIS_TICK_FONT_SIZE,
      textAnchor: 'middle' as const,
      angle: 0,
      dx: 0,
      y: xAxisPosition === 'top' ? -columnLabelGap : columnLabelGap
    }
  }

  return {
    fontSize: AXIS_TICK_FONT_SIZE,
    textAnchor: xAxisPosition === 'top' ? ('start' as const) : ('end' as const),
    angle: xTickRotation,
    dx: 0,
    y: xAxisPosition === 'top' ? -columnLabelGap : columnLabelGap,
    ...(isSteepRotation ? { verticalAnchor: 'middle' as const } : {})
  }
}

/**
 * Reserve enough space for row labels and the top axis without letting user-provided axis
 * sizes create extreme blank areas. HeatMap rows are series labels, so the left margin is
 * based on the longest rendered row label plus any configured y-axis size.
 */
export const buildChartMargins = (
  config: ChartConfig,
  rowLabels: string[],
  columnLabels: string[],
  parentWidth: number
): HeatMapMargins => {
  const rowLabelWidth = config.yAxis?.hideLabel ? 0 : getWidestLabelWidth(rowLabels)
  const yAxisSize = Number(config.yAxis?.size) || 0
  const xAxisSize = Number(config.xAxis?.size) || 0
  const columnLabelGap = getNonNegativeConfigNumber(
    config.heatmap?.columnLabelGap,
    HEATMAP_CONFIG_DEFAULTS.columnLabelGap
  )
  const xAxisPosition = getHeatMapXAxisPosition(config)
  const xTickRotation = getNonNegativeConfigNumber(config.xAxis?.tickRotation ?? config.xAxis?.maxTickRotation, 0)
  const endpointMargins = config.xAxis?.hideLabel
    ? { left: 0, right: 0 }
    : getXAxisEndpointMargins(columnLabels, xTickRotation, xAxisPosition)
  const xTickLabelSpace = config.xAxis?.hideLabel
    ? 0
    : columnLabelGap + getRotatedLabelHeight(columnLabels, xTickRotation)
  const xAxisTitleSpace =
    !config.hideXAxisLabel && config.xAxis?.label
      ? getXAxisTitleDistance(config.xAxis?.hideLabel ? [] : columnLabels, xTickRotation, columnLabelGap) +
        (xAxisPosition === 'top' ? AXIS_TITLE_FONT_SIZE : AXIS_TITLE_FONT_SIZE * 0.25)
      : 0
  const yAxisLabel = getHeatMapYAxisLabel(config)
  const hasTopYAxisTitle = shouldRenderTopYAxisTitle(config)
  const topYAxisTitleSpace = hasTopYAxisTitle ? AXIS_TOP_LABEL_SPACE : 0
  const sideYAxisTitleSpace = !config.hideYAxisLabel && yAxisLabel && !hasTopYAxisTitle ? AXIS_TITLE_SPACE : 0
  const left = clamp(
    Math.max(
      yAxisSize,
      rowLabelWidth +
        sideYAxisTitleSpace +
        AXIS_MARGIN_PADDING +
        (config.yAxis?.hideLabel
          ? 0
          : getNonNegativeConfigNumber(config.heatmap?.rowLabelGap, HEATMAP_CONFIG_DEFAULTS.rowLabelGap)),
      endpointMargins.left,
      yAxisLabel ? 96 : 72
    ),
    MIN_LEFT_MARGIN,
    getAxisMarginMax(parentWidth, MAX_LEFT_MARGIN)
  )
  const xTickSpace = config.xAxis?.hideTicks ? 0 : AXIS_TICK_LENGTH
  const xAxisMargin = clamp(
    Math.max(xAxisSize, Math.max(xTickLabelSpace, xAxisTitleSpace, xTickSpace) + AXIS_OUTER_PADDING),
    MIN_X_AXIS_MARGIN,
    MAX_X_AXIS_MARGIN
  )

  return {
    top: (xAxisPosition === 'top' ? xAxisMargin : 24) + topYAxisTitleSpace,
    right: clamp(endpointMargins.right, 16, getAxisMarginMax(parentWidth, MAX_LEFT_MARGIN)),
    bottom: xAxisPosition === 'bottom' ? xAxisMargin : AXIS_OUTER_PADDING,
    left
  }
}

/**
 * Build a rectangular-cell matrix that fills the area left after reserving axis margins.
 * Row-label spacing belongs in the left margin, so the grid stays against the row axis.
 */
export const buildGridLayout = (
  parentWidth: number,
  parentHeight: number,
  margins: HeatMapMargins,
  columnCount: number,
  rowCount: number,
  minimumColumnWidth = 0
): HeatMapLayout => {
  const availableWidth = Math.max(parentWidth - margins.left - margins.right, 0)
  const availableHeight = Math.max(parentHeight - margins.top - margins.bottom, 0)
  const xOffset = 0
  const responsiveGridWidth = Math.max(availableWidth - xOffset, 0)
  const boundedMinimumGridWidth = Math.min(minimumColumnWidth * columnCount, MAX_HEATMAP_GRID_WIDTH)
  const gridWidth = Math.max(responsiveGridWidth, boundedMinimumGridWidth)
  const gridHeight = availableHeight
  const cellWidth = gridWidth / Math.max(columnCount, 1)
  const cellHeight = gridHeight / Math.max(rowCount, 1)

  return {
    availableWidth,
    availableHeight,
    responsiveGridWidth,
    gridWidth,
    gridHeight,
    cellWidth,
    cellHeight,
    xOffset,
    yOffset: 0
  }
}

type HeatMapXAxisTickValuesOptions = {
  domain: string[]
  formattedLabels: Record<string, string>
  gridWidth?: number
  rotationDegrees: number
  requestedCount?: unknown
  measureLabel: (label: string) => number
  fontSize: number
  minimumGap?: number
}

const getPositiveInteger = (value: unknown) => {
  const numericValue = Number(value)

  if (!Number.isFinite(numericValue) || numericValue <= 0) return undefined

  return Math.floor(numericValue)
}

const sampleDomain = (domain: string[], requestedCount: number) => {
  const count = Math.min(Math.max(requestedCount, 1), domain.length)

  if (count >= domain.length) return domain
  if (count === 1) return [domain[0]]

  const lastIndex = domain.length - 1
  const sampledIndexes = Array.from({ length: count }, (_, index) => Math.round((index * lastIndex) / (count - 1)))

  return Array.from(new Set(sampledIndexes)).map(index => domain[index])
}

/**
 * HeatMap cells always use the complete x-domain. This helper only chooses which
 * domain values receive axis ticks and labels, preserving the first and last values
 * whenever at least two labels fit.
 */
export const getHeatMapXAxisTickValues = ({
  domain,
  formattedLabels,
  gridWidth,
  rotationDegrees,
  requestedCount,
  measureLabel,
  fontSize,
  minimumGap = 12
}: HeatMapXAxisTickValuesOptions) => {
  if (domain.length <= 1) return domain

  const configuredCount = getPositiveInteger(requestedCount)
  if (configuredCount) return sampleDomain(domain, configuredCount)
  if (gridWidth === undefined) return domain

  const radians = (Math.abs(rotationDegrees) * Math.PI) / 180
  const projectedLabelWidths = domain.map(value => {
    const labelWidth = measureLabel(formattedLabels[value] || value)
    return Math.abs(Math.cos(radians)) * labelWidth + Math.abs(Math.sin(radians)) * fontSize
  })
  const bandWidth = gridWidth / domain.length
  const everyLabelFits =
    rotationDegrees === 0 &&
    projectedLabelWidths.every((labelWidth, index) => {
      if (index === 0) return true

      const previousLabelWidth = projectedLabelWidths[index - 1]
      return previousLabelWidth / 2 + labelWidth / 2 + minimumGap <= bandWidth
    })

  // Band-scale labels are centered in neighboring cells. Check their actual pairwise
  // widths before falling back to the conservative widest-label density estimate.
  // Rotated labels use directional anchors, so they remain on the conservative path.
  if (everyLabelFits) return domain

  const widestProjectedLabel = projectedLabelWidths.reduce(
    (widestLabel, labelWidth) => Math.max(widestLabel, labelWidth),
    fontSize
  )
  const availableTickCount = Math.max(1, Math.floor(gridWidth / (widestProjectedLabel + minimumGap)))

  return sampleDomain(domain, availableTickCount)
}
