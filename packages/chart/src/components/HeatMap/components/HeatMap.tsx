import React, { useContext, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { AxisBottom, AxisLeft, AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { HeatmapRect } from '@visx/heatmap'
import { scaleBand } from '@visx/scale'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import ConfigContext from '../../../ConfigContext'
import { buildHeatMapData, getHeatMapColorScale, HeatMapCell, HeatMapColumn } from '../helpers'
import { formatNumber as formatColumnNumber } from '@cdc/core/helpers/cove/number'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { type ChartConfig, type HeatMapXAxisPosition } from '../../../types/ChartConfig'
import { buildTooltipListHtml } from '../../../helpers/tooltipHelpers'
import {
  findColumnConfigByName,
  getAdditionalColumnFormattingParams,
  getSeriesColumnFormattingParams
} from '../../../helpers/seriesColumnSettings'
import { HEATMAP_CONFIG_DEFAULTS, MAX_HEATMAP_COLUMN_WIDTH, MIN_HEATMAP_COLUMN_WIDTH } from '../heatmap.constants'
import { getHeatMapXAxisTickValues } from '../helpers/layout'
import './../heatmap.css'

/**
 * HeatMap render contract
 *
 * The chart treats `xAxis.dataKey` as the column bucket and `config.series` as the row definitions.
 * Each configured series dataKey becomes one rendered row, and each distinct x value becomes one
 * rendered column. The pure shaping and aggregation work lives in `../helpers/buildHeatMapData`;
 * this component is responsible for formatting, layout, axes, accessibility labels, and tooltips.
 */
type HeatMapProps = {
  parentWidth: number
  parentHeight: number
}

type TooltipColumn = {
  label: string
  name: string
  options: {
    addColPrefix?: string
    addColSuffix?: string
    addColRoundTo?: number
    addColCommas?: boolean
  }
}

type ParseDateFn = (value: string, showError?: boolean) => Date
type FormatDateFn = (value: Date) => string
type FormatValueFn = (value: number, position?: string) => string
type FormatCellValueFn = (cell: HeatMapCell) => string

type HeatMapMargins = {
  top: number
  right: number
  bottom: number
  left: number
}

type HeatMapLayout = {
  availableWidth: number
  availableHeight: number
  responsiveGridWidth: number
  gridWidth: number
  gridHeight: number
  cellWidth: number
  cellHeight: number
  xOffset: number
  yOffset: number
}

type HeatMapScrollState = {
  scrollbarSpace: number
  canScrollLeft: boolean
  canScrollRight: boolean
}

const AXIS_TOP_LABEL_SPACE = 28
const AXIS_TICK_FONT_SIZE = 16
const AXIS_TICK_LENGTH = 8
const AXIS_TITLE_SPACE = 30
const AXIS_TITLE_FONT_SIZE = 18
const AXIS_TOP_TITLE_BASELINE = 18
const X_AXIS_TITLE_LABEL_SPACE = 32
const X_AXIS_TITLE_LABEL_PADDING = 9
const TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD = -50
const AXIS_MARGIN_PADDING = 12
const AXIS_OUTER_PADDING = 8
const MIN_LEFT_MARGIN = 64
const MAX_LEFT_MARGIN = 240
const MIN_X_AXIS_MARGIN = 16
const MAX_X_AXIS_MARGIN = 220
const MIN_GRID_WIDTH = 24
const MIN_GRID_HEIGHT = 24
const MAX_HEATMAP_GRID_WIDTH = 1_000_000
const MAX_X_AXIS_SCROLL_INSET = MAX_LEFT_MARGIN
const SCROLL_EDGE_TOLERANCE = 1
const DEFAULT_SCROLL_STATE: HeatMapScrollState = {
  scrollbarSpace: 0,
  canScrollLeft: false,
  canScrollRight: false
}
const AXIS_TICK_FONT = `normal ${AXIS_TICK_FONT_SIZE}px Nunito, sans-serif`
const DEFAULT_SERIES_LABEL = 'Series'
const DEFAULT_VALUE_LABEL = 'Value'
const EMPTY_VALUE_LABEL = 'No data'
const MIN_CELL_VALUE_WIDTH = 18
const MIN_CELL_VALUE_HEIGHT = 14
const SIDE_Y_AXIS_TITLE_GAP = 20
const AXIS_TITLE_FONT_WEIGHT = 'bold'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const getNonNegativeConfigNumber = (value: unknown, fallback: number) => {
  const numericValue = Number(value)
  return Number.isFinite(numericValue) ? Math.max(numericValue, 0) : fallback
}

const getMeasuredTextWidth = (label: string) => getTextWidth(label, AXIS_TICK_FONT) || label.length * 7

const getWidestLabelWidth = (labels: string[]) =>
  labels.reduce((widest, label) => Math.max(widest, getMeasuredTextWidth(String(label))), 0)

const getRotatedLabelHeight = (labels: string[], rotationDegrees: number) => {
  if (labels.length === 0) return 0

  const labelWidth = getWidestLabelWidth(labels)
  const radians = (Math.abs(rotationDegrees) * Math.PI) / 180

  return Math.ceil(Math.abs(Math.sin(radians)) * labelWidth + Math.abs(Math.cos(radians)) * AXIS_TICK_FONT_SIZE)
}

const getProjectedLabelWidth = (label: string, rotationDegrees: number) => {
  const radians = (Math.abs(rotationDegrees) * Math.PI) / 180

  return Math.abs(Math.cos(radians)) * getMeasuredTextWidth(label) + Math.abs(Math.sin(radians)) * AXIS_TICK_FONT_SIZE
}

const getXAxisEndpointMargins = (labels: string[], rotationDegrees: number, xAxisPosition: HeatMapXAxisPosition) => {
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

const getXAxisTitleDistance = (labels: string[], rotationDegrees: number, columnLabelGap: number) => {
  const rotatedLabelHeight = getRotatedLabelHeight(labels, rotationDegrees)
  return columnLabelGap + Math.max(rotatedLabelHeight + X_AXIS_TITLE_LABEL_PADDING, X_AXIS_TITLE_LABEL_SPACE)
}

const getAxisMarginMax = (parentWidth: number, fallbackMax: number) => {
  if (parentWidth <= 0) return fallbackMax

  return Math.max(MIN_LEFT_MARGIN, Math.min(fallbackMax, parentWidth * 0.45))
}

const getHeatMapXAxisPosition = (config: ChartConfig): HeatMapXAxisPosition =>
  config.heatmap?.xAxisPosition === 'bottom' ? 'bottom' : HEATMAP_CONFIG_DEFAULTS.xAxisPosition

const getHeatMapYAxisLabel = (config: ChartConfig) =>
  String(config.yAxis?.label || config.runtime?.yAxis?.label || '').trim()

const shouldRenderTopYAxisTitle = (config: ChartConfig) =>
  config.yAxis?.titlePlacement === 'top' && !config.hideYAxisLabel && Boolean(getHeatMapYAxisLabel(config))

const getXAxisTickLabelProps = (xAxisPosition: HeatMapXAxisPosition, xTickRotation: number, columnLabelGap: number) => {
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

const isDateAxisType = (axisType?: string) => ['date', 'date-time'].includes(axisType || '')

const parseRgbColor = (color?: string): [number, number, number] | null => {
  if (!color) return null

  const hexMatch = color.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
  if (hexMatch) {
    const hex = hexMatch[1]
    const normalized =
      hex.length === 3
        ? hex
            .split('')
            .map(character => `${character}${character}`)
            .join('')
        : hex

    return [
      parseInt(normalized.slice(0, 2), 16),
      parseInt(normalized.slice(2, 4), 16),
      parseInt(normalized.slice(4, 6), 16)
    ]
  }

  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i)
  if (!rgbMatch) return null

  return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])]
}

const getRelativeLuminance = ([red, green, blue]: [number, number, number]) => {
  const [r, g, b] = [red, green, blue].map(channel => {
    const normalized = channel / 255
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const getContrastRatio = (leftColor: [number, number, number], rightColor: [number, number, number]) => {
  const left = getRelativeLuminance(leftColor)
  const right = getRelativeLuminance(rightColor)
  const lighter = Math.max(left, right)
  const darker = Math.min(left, right)

  return (lighter + 0.05) / (darker + 0.05)
}

const getReadableCellTextColor = (fillColor?: string) => {
  const rgb = parseRgbColor(fillColor)
  if (!rgb) return '#1c1d1f'

  return getContrastRatio(rgb, [28, 29, 31]) >= getContrastRatio(rgb, [255, 255, 255]) ? '#1c1d1f' : '#fff'
}

/**
 * Axis labels and tooltip labels intentionally use separate lookups.
 * The x-axis should follow the standard axis date formatter, while tooltips may use
 * `config.tooltips.dateDisplayFormat` through `formatTooltipsDate`.
 */
const buildXLabelLookup = (
  columns: HeatMapColumn[],
  xAxisType: string | undefined,
  formatDate: (value: Date) => string,
  parseDate: (value: string, showError?: boolean) => Date
): Record<string, string> =>
  Object.fromEntries(
    columns.map(column => [
      column.key,
      isDateAxisType(xAxisType) ? formatDate(parseDate(String(column.rawValue), false)) : column.label
    ])
  )

/**
 * Reserve enough space for row labels and the top axis without letting user-provided axis
 * sizes create extreme blank areas. HeatMap rows are series labels, so the left margin is
 * based on the longest rendered row label plus any configured y-axis size.
 */
const buildChartMargins = (
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
        AXIS_TITLE_FONT_SIZE
      : 0
  const yAxisLabel = getHeatMapYAxisLabel(config)
  const hasTopYAxisTitle = shouldRenderTopYAxisTitle(config)
  const topYAxisTitleSpace = hasTopYAxisTitle ? AXIS_TOP_LABEL_SPACE : 0
  const sideYAxisTitleSpace = !config.hideYAxisLabel && yAxisLabel && !hasTopYAxisTitle ? AXIS_TITLE_SPACE : 0
  const left = clamp(
    Math.max(
      yAxisSize,
      rowLabelWidth + sideYAxisTitleSpace + AXIS_MARGIN_PADDING,
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
    bottom: xAxisPosition === 'bottom' ? xAxisMargin : 20,
    left
  }
}

/**
 * Build a rectangular-cell matrix that uses the available plot area. `xOffset`
 * remains the configured row-label-to-grid gap; the grid fills the width and
 * height left after reserving that gap and the chart margins.
 */
const buildGridLayout = (
  parentWidth: number,
  parentHeight: number,
  margins: HeatMapMargins,
  columnCount: number,
  rowCount: number,
  rowLabelGap: number,
  minimumColumnWidth = 0
): HeatMapLayout => {
  const availableWidth = Math.max(parentWidth - margins.left - margins.right, 0)
  const availableHeight = Math.max(parentHeight - margins.top - margins.bottom, 0)
  const minimumGridWidth = Math.min(MIN_GRID_WIDTH, availableWidth)
  const xOffset = Math.min(rowLabelGap, Math.max(availableWidth - minimumGridWidth, 0))
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

/**
 * Additional tooltip rows come from column configs with `tooltips: true`.
 * The x-axis column and heatmap series columns are skipped because they are already
 * represented by the tooltip heading, row label, and cell value.
 */
const getTooltipColumns = (
  config: ChartConfig,
  xDataKey: string | undefined,
  heatMapSeries: { dataKey: string }[]
): TooltipColumn[] =>
  Object.entries(config.columns || {}).reduce<TooltipColumn[]>((tooltipColumns, [columnKey, value]) => {
    const columnName = value.name || columnKey
    if (!value.tooltips || !columnName) return tooltipColumns
    if (columnName === xDataKey) return tooltipColumns
    if (heatMapSeries.some(series => series.dataKey === columnName)) return tooltipColumns

    tooltipColumns.push({
      label: value.label || columnName,
      name: columnName,
      options: getAdditionalColumnFormattingParams(value)
    })

    return tooltipColumns
  }, [])

const getFormattedValueText = (cell: HeatMapCell, formatCellValue: FormatCellValueFn) =>
  cell.value === null ? EMPTY_VALUE_LABEL : formatCellValue(cell)

const getHeatMapSeriesLabel = (
  config: ChartConfig,
  seriesEntry: { dataKey: string; name?: string },
  runtimeSeriesLabels?: Record<string, string>
) => {
  const columnEntry = findColumnConfigByName(config.columns || {}, seriesEntry.dataKey)
  const configuredColumnLabel = columnEntry?.columnConfig?.label
  const hasCustomColumnLabel = configuredColumnLabel && configuredColumnLabel !== seriesEntry.dataKey

  return hasCustomColumnLabel
    ? configuredColumnLabel
    : runtimeSeriesLabels?.[seriesEntry.dataKey] || seriesEntry.name || seriesEntry.dataKey
}

const getHeatMapSeriesLabels = (config: ChartConfig, heatMapSeries: { dataKey: string; name?: string }[]) =>
  heatMapSeries.reduce<Record<string, string>>((seriesLabels, seriesEntry) => {
    seriesLabels[seriesEntry.dataKey] = getHeatMapSeriesLabel(config, seriesEntry, config.runtime?.seriesLabels)
    return seriesLabels
  }, {})

const getHeatMapSeriesTooltipEnabled = (config: ChartConfig, seriesKey: string) =>
  config.series?.find(series => series.dataKey === seriesKey)?.tooltip !== false

/**
 * Aggregated cells can represent multiple source rows. If all source rows share the same
 * formatted additional-column value, show it once. If the source rows disagree, summarize
 * that field as "Multiple values" instead of implying one row's value represents all rows.
 */
const formatAdditionalColumnValue = (cell: HeatMapCell, column: TooltipColumn, config: ChartConfig) => {
  const formattedValues = cell.sourceRows
    .map(sourceRow => sourceRow[column.name])
    .filter(value => value !== undefined && value !== null && value !== '')
    .map(value => String(formatColumnNumber(value, 'left', false, config as any, column.options as any)))

  const uniqueValues = Array.from(new Set(formattedValues))

  if (uniqueValues.length === 0) return EMPTY_VALUE_LABEL
  if (uniqueValues.length > 1) return 'Multiple values'
  return uniqueValues[0]
}

/**
 * Each cell is keyboard-focusable, so it needs a concise label that matches the visual
 * encoding: x bucket, row/series label, and formatted numeric value.
 */
const getHeatMapCellLabel = ({
  cell,
  config,
  formatNumber,
  xLabel,
  xDataKey
}: {
  cell: HeatMapCell
  config: ChartConfig
  formatNumber: FormatCellValueFn
  xLabel: string
  xDataKey?: string
}) => {
  const xAxisLabel = config.xAxis?.label || xDataKey
  const yAxisLabel = config.yAxis?.label || DEFAULT_SERIES_LABEL
  const valueLabel = config.legend?.label || DEFAULT_VALUE_LABEL

  return `${xAxisLabel}: ${xLabel}; ${yAxisLabel}: ${cell.rowLabel}; ${valueLabel}: ${getFormattedValueText(
    cell,
    formatNumber
  )}`
}

/**
 * Tooltip HTML uses the shared chart tooltip list helper to preserve consistent tooltip
 * markup and styling across chart types. Empty cells still receive a tooltip so users can
 * distinguish missing values from very low values.
 */
const buildTooltipHtml = ({
  cell,
  additionalColumns,
  config,
  formatNumber,
  xLabel,
  xDataKey,
  showSeriesRows
}: {
  cell: HeatMapCell
  additionalColumns: TooltipColumn[]
  config: ChartConfig
  formatNumber: FormatCellValueFn
  xLabel: string
  xDataKey?: string
  showSeriesRows: boolean
}) => {
  const sourceRow = cell.sourceRows[0]
  const xAxisLabel = config.xAxis?.label || xDataKey
  const yAxisLabel = config.yAxis?.label || DEFAULT_SERIES_LABEL
  const valueLabel = config.legend?.label || DEFAULT_VALUE_LABEL

  const extraRows = sourceRow
    ? additionalColumns.map(column => ({
        text: `${column.label}: ${formatAdditionalColumnValue(cell, column, config)}`
      }))
    : []

  return buildTooltipListHtml({
    heading: `${xAxisLabel}: ${xLabel}`,
    bodyRows: [
      ...(showSeriesRows
        ? [
            { text: `${yAxisLabel}: ${cell.rowLabel}` },
            { text: `${valueLabel}: ${getFormattedValueText(cell, formatNumber)}` }
          ]
        : []),
      ...(cell.sourceRows.length > 1 ? [{ text: `Aggregated Rows: ${String(cell.sourceRows.length)}` }] : []),
      ...extraRows
    ]
  })
}

const HeatMap: React.FC<HeatMapProps> = ({ parentWidth, parentHeight }) => {
  const {
    config,
    filteredData,
    excludedData,
    parseDate,
    formatDate,
    formatTooltipsDate,
    formatNumber,
    handleChartAriaLabels,
    currentViewport
  } = useContext(ConfigContext)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState(DEFAULT_SCROLL_STATE)

  const parseDateValue: ParseDateFn =
    typeof parseDate === 'function'
      ? (value, showError = true) => parseDate(value, showError)
      : value => new Date(value)
  const formatDateValue: FormatDateFn =
    typeof formatDate === 'function' ? value => formatDate(value) : value => value.toISOString()
  const formatTooltipDateValue: FormatDateFn =
    typeof formatTooltipsDate === 'function' && config.tooltips?.dateDisplayFormat
      ? value => formatTooltipsDate(value)
      : formatDateValue
  const formatNumericValue: FormatValueFn =
    typeof formatNumber === 'function'
      ? (value, position = 'left') => String(formatNumber(value, position))
      : value => String(value)

  const rows = filteredData?.length ? filteredData : excludedData || []
  const xDataKey = config.xAxis?.dataKey
  const heatMapSeries = config.series || []
  const heatMapSeriesLabels = useMemo(() => getHeatMapSeriesLabels(config, heatMapSeries), [config, heatMapSeries])

  // Transform raw filtered rows into the matrix shape expected by @visx/heatmap.
  const { columns, rowLabels, minValue, maxValue } = useMemo(
    () =>
      buildHeatMapData({
        data: rows as Record<string, any>[],
        xDataKey,
        series: heatMapSeries,
        seriesLabels: heatMapSeriesLabels,
        xAxisType: config.xAxis?.type,
        parseDate: parseDateValue
      }),
    [rows, xDataKey, heatMapSeries, heatMapSeriesLabels, config.xAxis?.type, parseDateValue]
  )

  // Axis and tooltip date labels can intentionally differ, so keep the two maps separate.
  const xLabelLookup = useMemo(
    () => buildXLabelLookup(columns, config.xAxis?.type, formatDateValue, parseDateValue),
    [columns, config.xAxis?.type, formatDateValue, parseDateValue]
  )
  const columnCount = Math.max(columns.length, 1)
  const rowCount = Math.max(rowLabels.length, 1)
  const xAxisPosition = getHeatMapXAxisPosition(config)
  const xTickRotation = -getNonNegativeConfigNumber(config.xAxis?.tickRotation ?? config.xAxis?.maxTickRotation, 0)
  const yTickRotation = -getNonNegativeConfigNumber(config.yAxis?.tickRotation, 0)
  const xAxisDomain = useMemo(() => columns.map(column => column.key), [columns])
  const viewportNumTicks = config.xAxis?.viewportNumTicks
  const xAxisTickColor = config.xAxis?.tickColor || '#333'
  const requestedXAxisTickCount =
    (currentViewport && viewportNumTicks?.[String(currentViewport)]) || config.xAxis?.numTicks
  const marginXAxisTickValues = useMemo(
    () =>
      getHeatMapXAxisTickValues({
        domain: xAxisDomain,
        formattedLabels: xLabelLookup,
        rotationDegrees: xTickRotation,
        requestedCount: requestedXAxisTickCount,
        measureLabel: getMeasuredTextWidth,
        fontSize: AXIS_TICK_FONT_SIZE
      }),
    [requestedXAxisTickCount, xAxisDomain, xLabelLookup, xTickRotation]
  )
  const marginXAxisLabels = useMemo(
    () => marginXAxisTickValues.map(value => xLabelLookup[value] || value),
    [marginXAxisTickValues, xLabelLookup]
  )

  const tooltipXLabelLookup = useMemo(
    () => buildXLabelLookup(columns, config.xAxis?.type, formatTooltipDateValue, parseDateValue),
    [columns, config.xAxis?.type, formatTooltipDateValue, parseDateValue]
  )

  const baseMargins = useMemo(
    () => buildChartMargins(config, rowLabels, marginXAxisLabels, parentWidth),
    [config, marginXAxisLabels, parentWidth, rowLabels]
  )
  const configuredRowLabelGap = getNonNegativeConfigNumber(
    config.heatmap?.rowLabelGap,
    HEATMAP_CONFIG_DEFAULTS.rowLabelGap
  )
  const rowLabelGap = config.yAxis?.hideLabel ? 0 : configuredRowLabelGap
  const columnLabelGap = getNonNegativeConfigNumber(
    config.heatmap?.columnLabelGap,
    HEATMAP_CONFIG_DEFAULTS.columnLabelGap
  )
  const horizontalScrollEnabled = Boolean(config.heatmap?.horizontalScroll ?? HEATMAP_CONFIG_DEFAULTS.horizontalScroll)
  const minimumColumnWidth = horizontalScrollEnabled
    ? clamp(
        getNonNegativeConfigNumber(config.heatmap?.minColumnWidth, HEATMAP_CONFIG_DEFAULTS.minColumnWidth),
        MIN_HEATMAP_COLUMN_WIDTH,
        MAX_HEATMAP_COLUMN_WIDTH
      )
    : 0

  const initialLayout = useMemo(
    () =>
      buildGridLayout(parentWidth, parentHeight, baseMargins, columnCount, rowCount, rowLabelGap, minimumColumnWidth),
    [parentWidth, parentHeight, baseMargins, columnCount, rowCount, rowLabelGap, minimumColumnWidth]
  )
  const isHorizontallyScrollable =
    horizontalScrollEnabled && initialLayout.gridWidth > initialLayout.responsiveGridWidth
  useLayoutEffect(() => {
    if (!isHorizontallyScrollable) {
      setScrollState(currentState =>
        currentState.scrollbarSpace === 0 && !currentState.canScrollLeft && !currentState.canScrollRight
          ? currentState
          : DEFAULT_SCROLL_STATE
      )
      return
    }

    const scrollArea = scrollAreaRef.current
    if (!scrollArea) return

    const updateScrollState = () => {
      const measuredSpace = Math.max(scrollArea.offsetHeight - scrollArea.clientHeight, 0)
      const maximumScrollLeft = Math.max(scrollArea.scrollWidth - scrollArea.clientWidth, 0)
      const normalizedScrollLeft = Math.max(scrollArea.scrollLeft, 0)
      const canScrollLeft = normalizedScrollLeft > SCROLL_EDGE_TOLERANCE
      const canScrollRight = normalizedScrollLeft < maximumScrollLeft - SCROLL_EDGE_TOLERANCE

      setScrollState(currentState =>
        currentState.scrollbarSpace === measuredSpace &&
        currentState.canScrollLeft === canScrollLeft &&
        currentState.canScrollRight === canScrollRight
          ? currentState
          : { scrollbarSpace: measuredSpace, canScrollLeft, canScrollRight }
      )
    }

    updateScrollState()
    scrollArea.addEventListener('scroll', updateScrollState, { passive: true })

    if (typeof ResizeObserver === 'undefined') {
      return () => scrollArea.removeEventListener('scroll', updateScrollState)
    }

    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(scrollArea)
    return () => {
      scrollArea.removeEventListener('scroll', updateScrollState)
      resizeObserver.disconnect()
    }
  }, [columnCount, isHorizontallyScrollable, marginXAxisLabels, minimumColumnWidth, parentHeight, parentWidth])
  const chartHeight = Math.max(parentHeight - (isHorizontallyScrollable ? scrollState.scrollbarSpace : 0), 0)
  const margins = useMemo(() => {
    if (!yTickRotation || config.yAxis?.hideLabel) return baseMargins

    const rotatedRowLabelHeight = getRotatedLabelHeight(rowLabels, Math.abs(yTickRotation))
    const desiredBottomMargin = baseMargins.bottom + Math.ceil(rotatedRowLabelHeight + AXIS_OUTER_PADDING)
    const availableBottomMargin = Math.max(chartHeight - baseMargins.top - MIN_GRID_HEIGHT, 0)
    const maximumBottomMargin = Math.max(baseMargins.bottom, availableBottomMargin)

    return {
      ...baseMargins,
      bottom: Math.min(desiredBottomMargin, maximumBottomMargin)
    }
  }, [baseMargins, chartHeight, config.yAxis?.hideLabel, rowLabels, yTickRotation])
  const { gridWidth, gridHeight, cellWidth, cellHeight, xOffset, yOffset } = useMemo(
    () => buildGridLayout(parentWidth, chartHeight, margins, columnCount, rowCount, rowLabelGap, minimumColumnWidth),
    [parentWidth, chartHeight, margins, columnCount, rowCount, rowLabelGap, minimumColumnWidth]
  )
  const xAxisEndpointMargins = useMemo(
    () =>
      config.xAxis?.hideLabel
        ? { left: 0, right: 0 }
        : getXAxisEndpointMargins(marginXAxisLabels, xTickRotation, xAxisPosition),
    [config.xAxis?.hideLabel, marginXAxisLabels, xAxisPosition, xTickRotation]
  )
  const scrollViewportWidth = Math.max(parentWidth - margins.left, 0)
  const minimumVisibleCellWidth = Math.min(cellWidth, MIN_GRID_WIDTH)
  const maximumViewportInset = Math.max(scrollViewportWidth - xOffset - minimumVisibleCellWidth, 0)
  const scrollXAxisInset = isHorizontallyScrollable
    ? Math.min(Math.max(xAxisEndpointMargins.left - cellWidth / 2, 0), MAX_X_AXIS_SCROLL_INSET, maximumViewportInset)
    : 0
  const plotXOffset = xOffset + scrollXAxisInset
  const scrollContentWidth = plotXOffset + gridWidth + margins.right
  const cellGap = getNonNegativeConfigNumber(config.heatmap?.cellPadding, HEATMAP_CONFIG_DEFAULTS.cellPadding)
  // During responsive measurement, cell dimensions can briefly be 0. Clamp the effective gap so SVG rects never go negative.
  const effectiveCellGap = Math.min(cellGap, Math.max(Math.min(cellWidth, cellHeight) - 1, 0))

  const xAxisTickValues = useMemo(
    () =>
      getHeatMapXAxisTickValues({
        domain: xAxisDomain,
        formattedLabels: xLabelLookup,
        gridWidth,
        rotationDegrees: xTickRotation,
        requestedCount: requestedXAxisTickCount,
        measureLabel: getMeasuredTextWidth,
        fontSize: AXIS_TICK_FONT_SIZE
      }),
    [gridWidth, requestedXAxisTickCount, xAxisDomain, xLabelLookup, xTickRotation]
  )

  const xAxisScale = useMemo(
    () =>
      scaleBand<string>({
        domain: xAxisDomain,
        range: [plotXOffset, plotXOffset + gridWidth],
        padding: 0
      }),
    [gridWidth, plotXOffset, xAxisDomain]
  )

  const yAxisScale = useMemo(
    () =>
      scaleBand<string>({
        domain: rowLabels,
        range: [yOffset, yOffset + gridHeight],
        padding: 0
      }),
    [rowLabels, yOffset, gridHeight]
  )

  const heatMapColorScale = useMemo(
    () => getHeatMapColorScale(config, minValue, maxValue),
    [config, minValue, maxValue]
  )

  const additionalColumns = useMemo(
    () => getTooltipColumns(config, xDataKey, heatMapSeries),
    [config, xDataKey, heatMapSeries]
  )
  const formatHeatMapCellValue: FormatCellValueFn = cell => {
    if (cell.value === null) return EMPTY_VALUE_LABEL

    const columnConfig = findColumnConfigByName(config.columns || {}, cell.rowKey)?.columnConfig
    const formattingParams = getSeriesColumnFormattingParams(columnConfig)

    if (formattingParams) {
      return String(formatColumnNumber(String(cell.value), 'left', false, config as any, formattingParams as any))
    }

    return formatNumericValue(cell.value, 'left')
  }

  const tooltipId = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const scrollInstructionsId = `${tooltipId}-scroll-instructions`
  const xAxisLabel = config.xAxis?.label
  const yAxisLabel = getHeatMapYAxisLabel(config)
  const chartAriaLabel = String(handleChartAriaLabels(config))
  const scrollRegionLabel = `${chartAriaLabel}; ${xAxisLabel || xDataKey || 'HeatMap'}; scrollable columns`
  const fixedYAxisAriaLabel = `${chartAriaLabel}; ${yAxisLabel || DEFAULT_SERIES_LABEL} row axis`
  const showCellValues = Boolean(config.heatmap?.showCellValues)
  const showTopYAxisTitle = shouldRenderTopYAxisTitle(config)
  const visibleXAxisLabels = config.xAxis?.hideLabel ? [] : xAxisTickValues.map(value => xLabelLookup[value] || value)
  const xAxisTitleDistance = getXAxisTitleDistance(visibleXAxisLabels, Math.abs(xTickRotation), columnLabelGap)
  const rowLabelTitleX = config.yAxis?.hideLabel ? 0 : -getWidestLabelWidth(rowLabels)
  const sideYAxisTitleX = -Math.max(Math.abs(rowLabelTitleX) + SIDE_Y_AXIS_TITLE_GAP, AXIS_TITLE_SPACE)
  const hasXAxisTitle = !config.hideXAxisLabel && Boolean(xAxisLabel)
  const topYAxisTitleY = xAxisPosition === 'top' && hasXAxisTitle ? -xAxisTitleDistance : -AXIS_TOP_TITLE_BASELINE
  const renderXAxisTitle = (
    x = plotXOffset + gridWidth / 2,
    y = xAxisPosition === 'top' ? -xAxisTitleDistance : gridHeight + xAxisTitleDistance
  ) => {
    if (config.hideXAxisLabel || !xAxisLabel) return null

    return (
      <text className='cdc-heatmap__axis-title' x={x} y={y} textAnchor='middle' fontWeight={AXIS_TITLE_FONT_WEIGHT}>
        {xAxisLabel}
      </text>
    )
  }
  const renderYAxisTitle = () => {
    if (!yAxisLabel || config.hideYAxisLabel) return null

    if (showTopYAxisTitle) {
      return (
        <text
          className='cdc-heatmap__axis-title'
          x={rowLabelTitleX}
          y={topYAxisTitleY}
          textAnchor='start'
          fontWeight={AXIS_TITLE_FONT_WEIGHT}
        >
          {yAxisLabel}
        </text>
      )
    }

    return (
      <text
        className='cdc-heatmap__axis-title'
        transform={`translate(${sideYAxisTitleX}, ${yOffset + gridHeight / 2}) rotate(-90)`}
        textAnchor='middle'
        fontWeight={AXIS_TITLE_FONT_WEIGHT}
      >
        {yAxisLabel}
      </text>
    )
  }
  const renderCells = () => (
    <HeatmapRect
      data={columns}
      xScale={columnIndex => columnIndex * cellWidth + plotXOffset}
      yScale={rowIndex => rowIndex * cellHeight + yOffset}
      binWidth={cellWidth}
      binHeight={cellHeight}
      gap={effectiveCellGap}
      bins={column => column.bins}
      count={bin => (typeof bin.value === 'number' ? bin.value : 0)}
    >
      {heatmap =>
        heatmap.map(columnBins =>
          columnBins.map(bin => {
            const hasValue = typeof bin.bin.value === 'number'
            const xLabel = tooltipXLabelLookup[String(bin.bin.xValue)] || bin.bin.xLabel
            const renderedCellWidth = Math.max(bin.width, 0)
            const renderedCellHeight = Math.max(bin.height, 0)
            const fillColor = hasValue ? heatMapColorScale(bin.bin.value as number) : undefined
            const shouldShowCellValue =
              showCellValues &&
              hasValue &&
              renderedCellWidth >= MIN_CELL_VALUE_WIDTH &&
              renderedCellHeight >= MIN_CELL_VALUE_HEIGHT

            return (
              <React.Fragment key={`heatmap-cell-${bin.column}-${bin.row}`}>
                <rect
                  className={`visx-heatmap-rect cdc-heatmap__cell${hasValue ? '' : ' cdc-heatmap__cell--empty'}`}
                  role='img'
                  tabIndex={0}
                  aria-label={getHeatMapCellLabel({
                    cell: bin.bin,
                    config,
                    formatNumber: formatHeatMapCellValue,
                    xLabel,
                    xDataKey
                  })}
                  x={bin.x}
                  y={bin.y}
                  width={renderedCellWidth}
                  height={renderedCellHeight}
                  fill={fillColor}
                  data-tooltip-id={tooltipId}
                  data-tooltip-html={buildTooltipHtml({
                    cell: bin.bin,
                    additionalColumns,
                    config,
                    formatNumber: formatHeatMapCellValue,
                    xLabel,
                    xDataKey,
                    showSeriesRows: getHeatMapSeriesTooltipEnabled(config, bin.bin.rowKey)
                  })}
                />
                {shouldShowCellValue && (
                  <text
                    className='cdc-heatmap__cell-value'
                    x={bin.x + renderedCellWidth / 2}
                    y={bin.y + renderedCellHeight / 2}
                    fill={getReadableCellTextColor(fillColor)}
                    fontSize={Math.max(9, Math.min(12, renderedCellHeight * 0.35))}
                    textAnchor='middle'
                    dominantBaseline='middle'
                    aria-hidden='true'
                  >
                    {getFormattedValueText(bin.bin, formatHeatMapCellValue)}
                  </text>
                )}
              </React.Fragment>
            )
          })
        )
      }
    </HeatmapRect>
  )
  const renderXAxis = () => (
    <>
      {!config.xAxis?.hideAxis && (
        <line
          className='cdc-heatmap__x-axis-line'
          x1={0}
          x2={plotXOffset + gridWidth}
          y1={xAxisPosition === 'top' ? 0 : gridHeight}
          y2={xAxisPosition === 'top' ? 0 : gridHeight}
          stroke={xAxisTickColor}
        />
      )}

      {xAxisPosition === 'top' ? (
        <AxisTop
          scale={xAxisScale}
          tickValues={xAxisTickValues}
          tickFormat={value => (config.xAxis?.hideLabel ? '' : xLabelLookup[String(value)] || String(value))}
          hideAxisLine={true}
          hideTicks={Boolean(config.xAxis?.hideTicks)}
          hideZero={true}
          tickStroke={xAxisTickColor}
          tickLabelProps={() => getXAxisTickLabelProps(xAxisPosition, xTickRotation, columnLabelGap)}
        />
      ) : (
        <AxisBottom
          top={gridHeight}
          scale={xAxisScale}
          tickValues={xAxisTickValues}
          tickFormat={value => (config.xAxis?.hideLabel ? '' : xLabelLookup[String(value)] || String(value))}
          hideAxisLine={true}
          hideTicks={Boolean(config.xAxis?.hideTicks)}
          hideZero={true}
          tickStroke={xAxisTickColor}
          tickLabelProps={() => getXAxisTickLabelProps(xAxisPosition, xTickRotation, columnLabelGap)}
        />
      )}
    </>
  )
  const renderYAxis = () => (
    <AxisLeft
      scale={yAxisScale}
      tickFormat={value => (config.yAxis?.hideLabel ? '' : value)}
      hideAxisLine={Boolean(config.yAxis?.hideAxis)}
      hideTicks={Boolean(config.yAxis?.hideTicks)}
      tickLabelProps={() => ({
        fontSize: AXIS_TICK_FONT_SIZE,
        textAnchor: 'end',
        angle: yTickRotation,
        dx: yTickRotation ? '-0.25em' : 0,
        dy: '0.33em'
      })}
    />
  )

  const tooltip = (
    <ReactTooltip
      id={tooltipId}
      variant='light'
      className='tooltip'
      style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }}
    />
  )

  if (isHorizontallyScrollable) {
    const fixedXAxisTitleY =
      margins.top + (xAxisPosition === 'top' ? -xAxisTitleDistance : gridHeight + xAxisTitleDistance)
    const fixedXAxisTitleX = scrollViewportWidth / 2

    return (
      <div className='cdc-heatmap cdc-heatmap--scrollable'>
        <div
          className='cdc-heatmap__scroll-layout'
          style={{ gridTemplateColumns: `${margins.left}px minmax(0, 1fr)`, height: parentHeight }}
        >
          <svg
            width={margins.left}
            height={chartHeight}
            role='img'
            aria-label={fixedYAxisAriaLabel}
            className='cdc-heatmap__fixed-axis-svg'
          >
            <Group className='cdc-heatmap__fixed-y-axis' top={margins.top} left={margins.left}>
              {renderYAxis()}
              {renderYAxisTitle()}
            </Group>
          </svg>
          <div className='cdc-heatmap__scroll-plot'>
            <div
              ref={scrollAreaRef}
              className='cdc-heatmap__scroll-area'
              role='region'
              tabIndex={0}
              aria-label={scrollRegionLabel}
              aria-describedby={scrollInstructionsId}
            >
              <svg
                width={scrollContentWidth}
                height={chartHeight}
                aria-label={chartAriaLabel}
                className={`cdc-heatmap__svg cdc-heatmap__scroll-content${config.animate ? ' animated' : ''}`}
              >
                <Group className='cdc-heatmap__plot' top={margins.top} left={0}>
                  {renderCells()}
                  {renderXAxis()}
                </Group>
              </svg>
            </div>
            <span id={scrollInstructionsId} className='cdcdataviz-sr-only'>
              Scroll horizontally to view additional columns.
            </span>
            <div
              className={`cdc-heatmap__scroll-cue cdc-heatmap__scroll-cue--left${
                scrollState.canScrollLeft ? ' is-visible' : ''
              }`}
              style={{ bottom: scrollState.scrollbarSpace }}
              aria-hidden='true'
            />
            <div
              className={`cdc-heatmap__scroll-cue cdc-heatmap__scroll-cue--right${
                scrollState.canScrollRight ? ' is-visible' : ''
              }`}
              style={{ bottom: scrollState.scrollbarSpace }}
              aria-hidden='true'
            />
            {hasXAxisTitle && (
              <svg
                width={scrollViewportWidth}
                height={chartHeight}
                aria-hidden='true'
                className='cdc-heatmap__fixed-x-title'
              >
                {renderXAxisTitle(fixedXAxisTitleX, fixedXAxisTitleY)}
              </svg>
            )}
          </div>
        </div>
        {tooltip}
      </div>
    )
  }

  return (
    <div className='cdc-heatmap'>
      <svg
        width={parentWidth}
        height={parentHeight}
        aria-label={chartAriaLabel}
        className={`cdc-heatmap__svg${config.animate ? ' animated' : ''}`}
      >
        <Group className='cdc-heatmap__plot' top={margins.top} left={margins.left}>
          {renderCells()}
          {renderXAxis()}
          {renderYAxis()}

          {renderXAxisTitle()}
          {renderYAxisTitle()}
        </Group>
      </svg>
      {tooltip}
    </div>
  )
}

export default HeatMap
