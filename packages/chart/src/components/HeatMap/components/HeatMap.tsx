import React, { useContext, useMemo } from 'react'
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
import { HEATMAP_CONFIG_DEFAULTS } from '../heatmap.constants'
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

type HeatMapMargins = {
  top: number
  right: number
  bottom: number
  left: number
}

type HeatMapLayout = {
  availableWidth: number
  availableHeight: number
  gridWidth: number
  gridHeight: number
  cellSize: number
  xGroupOffset: number
  xOffset: number
  yOffset: number
}

const AXIS_TOP_WITH_TICKS = 36
const AXIS_TOP_WITHOUT_TICKS = 24
const AXIS_TOP_LABEL_SPACE = 28
const AXIS_TICK_FONT_SIZE = 12
const AXIS_TITLE_SPACE = 30
const AXIS_TOP_TITLE_BASELINE = 18
const X_AXIS_TITLE_LABEL_SPACE = 32
const X_AXIS_TITLE_LABEL_PADDING = 9
const TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD = -50
const AXIS_MARGIN_PADDING = 12
const MIN_LEFT_MARGIN = 64
const MAX_LEFT_MARGIN = 240
const MIN_X_AXIS_MARGIN = 40
const MAX_X_AXIS_MARGIN = 220
const AXIS_TICK_FONT = `normal ${AXIS_TICK_FONT_SIZE}px Nunito, sans-serif`
const DEFAULT_SERIES_LABEL = 'Series'
const DEFAULT_VALUE_LABEL = 'Value'
const EMPTY_VALUE_LABEL = 'No data'
const MIN_CELL_VALUE_WIDTH = 18
const MIN_CELL_VALUE_HEIGHT = 14

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
      fontSize: 12,
      textAnchor: 'middle',
      angle: 0,
      dx: 0,
      y: xAxisPosition === 'top' ? -columnLabelGap : columnLabelGap
    }
  }

  return {
    fontSize: 12,
    textAnchor: xAxisPosition === 'top' ? 'start' : 'end',
    angle: xTickRotation,
    dx: isSteepRotation || xAxisPosition === 'top' ? 0 : '-0.5em',
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
  const xTickLabelSpace = config.xAxis?.hideLabel
    ? 0
    : columnLabelGap + getRotatedLabelHeight(columnLabels, xTickRotation)
  const yAxisLabel = getHeatMapYAxisLabel(config)
  const hasTopYAxisTitle = shouldRenderTopYAxisTitle(config)
  const topYAxisTitleSpace = hasTopYAxisTitle ? AXIS_TOP_LABEL_SPACE : 0
  const sideYAxisTitleSpace = !config.hideYAxisLabel && yAxisLabel && !hasTopYAxisTitle ? AXIS_TITLE_SPACE : 0
  const left = clamp(
    Math.max(yAxisSize, rowLabelWidth + sideYAxisTitleSpace + AXIS_MARGIN_PADDING, yAxisLabel ? 96 : 72),
    MIN_LEFT_MARGIN,
    getAxisMarginMax(parentWidth, MAX_LEFT_MARGIN)
  )
  const topBase = config.xAxis?.hideTicks ? AXIS_TOP_WITHOUT_TICKS : AXIS_TOP_WITH_TICKS
  const topLabelSpace = !config.hideXAxisLabel && config.xAxis?.label ? AXIS_TOP_LABEL_SPACE : 0
  const xAxisMargin = clamp(
    Math.max(xAxisSize, xTickLabelSpace + topBase + topLabelSpace + AXIS_MARGIN_PADDING),
    MIN_X_AXIS_MARGIN,
    MAX_X_AXIS_MARGIN
  )

  return {
    top: (xAxisPosition === 'top' ? xAxisMargin : 24) + topYAxisTitleSpace,
    right: 16,
    bottom: xAxisPosition === 'bottom' ? xAxisMargin : 20,
    left
  }
}

/**
 * Build a square-cell matrix that behaves like a heatmap, not a continuous x/y plot.
 * The grid is centered as a complete block, while `xOffset` is the configured
 * row-label-to-grid gap. Keeping that as an explicit HeatMap option makes visual
 * tuning predictable when rows use long city, state, or category names.
 */
const buildGridLayout = (
  parentWidth: number,
  parentHeight: number,
  margins: HeatMapMargins,
  columnCount: number,
  rowCount: number,
  rowLabelGap: number
): HeatMapLayout => {
  const availableWidth = Math.max(parentWidth - margins.left - margins.right, 0)
  const availableHeight = Math.max(parentHeight - margins.top - margins.bottom, 0)
  const columnBandWidth = availableWidth / Math.max(columnCount, 1)
  const rowBandHeight = availableHeight / Math.max(rowCount, 1)
  const cellSize = Math.min(columnBandWidth, rowBandHeight)
  const gridWidth = cellSize * Math.max(columnCount, 1)
  const gridHeight = cellSize * Math.max(rowCount, 1)
  const xOffset = Math.min(rowLabelGap, Math.max(availableWidth - gridWidth, 0))
  const xGroupOffset = Math.max((availableWidth - xOffset - gridWidth) / 2, 0)

  return {
    availableWidth,
    availableHeight,
    gridWidth,
    gridHeight,
    cellSize,
    xGroupOffset,
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
  Object.entries(config.columns || {}).reduce<TooltipColumn[]>((tooltipColumns, [_, value]) => {
    if (!value.tooltips || !value.name) return tooltipColumns
    if (value.name === xDataKey) return tooltipColumns
    if (heatMapSeries.some(series => series.dataKey === value.name)) return tooltipColumns

    tooltipColumns.push({
      label: value.label || value.name,
      name: value.name,
      options: {
        addColPrefix: value.prefix,
        addColSuffix: value.suffix,
        addColRoundTo: value.roundToPlace,
        addColCommas: value.commas
      }
    })

    return tooltipColumns
  }, [])

const getFormattedValueText = (cell: HeatMapCell, formatNumber: FormatValueFn) =>
  cell.value === null ? EMPTY_VALUE_LABEL : formatNumber(cell.value, 'left')

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
  formatNumber: FormatValueFn
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
  xDataKey
}: {
  cell: HeatMapCell
  additionalColumns: TooltipColumn[]
  config: ChartConfig
  formatNumber: FormatValueFn
  xLabel: string
  xDataKey?: string
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
      { text: `${yAxisLabel}: ${cell.rowLabel}` },
      { text: `${valueLabel}: ${getFormattedValueText(cell, formatNumber)}` },
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
    handleChartAriaLabels
  } = useContext(ConfigContext)

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

  // Transform raw filtered rows into the matrix shape expected by @visx/heatmap.
  const { columns, rowLabels, minValue, maxValue } = useMemo(
    () =>
      buildHeatMapData({
        data: rows as Record<string, any>[],
        xDataKey,
        series: heatMapSeries,
        seriesLabels: config.runtime?.seriesLabels,
        xAxisType: config.xAxis?.type,
        parseDate: parseDateValue
      }),
    [rows, xDataKey, heatMapSeries, config.runtime?.seriesLabels, config.xAxis?.type, parseDateValue]
  )

  // Axis and tooltip date labels can intentionally differ, so keep the two maps separate.
  const xLabelLookup = useMemo(
    () => buildXLabelLookup(columns, config.xAxis?.type, formatDateValue, parseDateValue),
    [columns, config.xAxis?.type, formatDateValue, parseDateValue]
  )
  const xAxisLabels = useMemo(
    () => columns.map(column => xLabelLookup[String(column.rawValue)] || column.label),
    [columns, xLabelLookup]
  )

  const tooltipXLabelLookup = useMemo(
    () => buildXLabelLookup(columns, config.xAxis?.type, formatTooltipDateValue, parseDateValue),
    [columns, config.xAxis?.type, formatTooltipDateValue, parseDateValue]
  )

  const margins = useMemo(
    () => buildChartMargins(config, rowLabels, xAxisLabels, parentWidth),
    [config, rowLabels, xAxisLabels, parentWidth]
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

  const columnCount = Math.max(columns.length, 1)
  const rowCount = Math.max(rowLabels.length, 1)
  const { availableHeight, gridWidth, gridHeight, cellSize, xGroupOffset, xOffset, yOffset } = useMemo(
    () => buildGridLayout(parentWidth, parentHeight, margins, columnCount, rowCount, rowLabelGap),
    [parentWidth, parentHeight, margins, columnCount, rowCount, rowLabelGap]
  )
  const cellGap = getNonNegativeConfigNumber(config.heatmap?.cellPadding, HEATMAP_CONFIG_DEFAULTS.cellPadding)
  // During responsive measurement, cellSize can briefly be 0. Clamp the effective gap so SVG rects never go negative.
  const effectiveCellGap = Math.min(cellGap, Math.max(cellSize - 1, 0))

  const xAxisScale = useMemo(
    () =>
      scaleBand<string>({
        domain: columns.map(column => column.key),
        range: [xOffset, xOffset + gridWidth],
        padding: 0
      }),
    [columns, xOffset, gridWidth]
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

  const tooltipId = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const xAxisLabel = config.xAxis?.label
  const yAxisLabel = getHeatMapYAxisLabel(config)
  const xAxisPosition = getHeatMapXAxisPosition(config)
  const xTickRotation = -getNonNegativeConfigNumber(config.xAxis?.tickRotation ?? config.xAxis?.maxTickRotation, 0)
  const yTickRotation = -getNonNegativeConfigNumber(config.yAxis?.tickRotation, 0)
  const showCellValues = Boolean(config.heatmap?.showCellValues)
  const showTopYAxisTitle = shouldRenderTopYAxisTitle(config)
  const visibleXAxisLabels = config.xAxis?.hideLabel ? [] : xAxisLabels
  const xAxisTitleDistance = getXAxisTitleDistance(visibleXAxisLabels, Math.abs(xTickRotation), columnLabelGap)
  const renderXAxisTitle = () => {
    if (config.hideXAxisLabel || !xAxisLabel) return null

    return (
      <text
        className='cdc-heatmap__axis-title'
        x={xOffset + gridWidth / 2}
        y={xAxisPosition === 'top' ? -xAxisTitleDistance : gridHeight + xAxisTitleDistance}
        textAnchor='middle'
      >
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
          x={0}
          y={-Math.max(margins.top - AXIS_TOP_TITLE_BASELINE, AXIS_TOP_TITLE_BASELINE)}
          textAnchor='start'
        >
          {yAxisLabel}
        </text>
      )
    }

    return (
      <text
        className='cdc-heatmap__axis-title'
        transform={`translate(${-Math.max(margins.left - 20, 24)}, ${availableHeight / 2}) rotate(-90)`}
        textAnchor='middle'
      >
        {yAxisLabel}
      </text>
    )
  }

  return (
    <div className='cdc-heatmap'>
      <svg
        width={parentWidth}
        height={parentHeight}
        aria-label={handleChartAriaLabels(config)}
        className={`cdc-heatmap__svg${config.animate ? ' animated' : ''}`}
      >
        {/* Shift the complete heatmap block, not just the cells, so row labels stay close while the block stays centered. */}
        <Group className='cdc-heatmap__plot' top={margins.top} left={margins.left + xGroupOffset}>
          <HeatmapRect
            data={columns}
            xScale={columnIndex => columnIndex * cellSize + xOffset}
            yScale={rowIndex => rowIndex * cellSize + yOffset}
            binWidth={cellSize}
            binHeight={cellSize}
            gap={effectiveCellGap}
            bins={column => column.bins}
            count={bin => (typeof bin.value === 'number' ? bin.value : 0)}
          >
            {heatmap =>
              heatmap.map(columnBins =>
                columnBins.map(bin => {
                  const hasValue = typeof bin.bin.value === 'number'
                  const xLabel = tooltipXLabelLookup[String(bin.bin.xValue)] || bin.bin.xLabel
                  const cellWidth = Math.max(bin.width, 0)
                  const cellHeight = Math.max(bin.height, 0)
                  const fillColor = hasValue ? heatMapColorScale(bin.bin.value as number) : undefined
                  const shouldShowCellValue =
                    showCellValues &&
                    hasValue &&
                    cellWidth >= MIN_CELL_VALUE_WIDTH &&
                    cellHeight >= MIN_CELL_VALUE_HEIGHT
                  return (
                    <React.Fragment key={`heatmap-cell-${bin.column}-${bin.row}`}>
                      <rect
                        className={`visx-heatmap-rect cdc-heatmap__cell${hasValue ? '' : ' cdc-heatmap__cell--empty'}`}
                        role='img'
                        tabIndex={0}
                        aria-label={getHeatMapCellLabel({
                          cell: bin.bin,
                          config,
                          formatNumber: formatNumericValue,
                          xLabel,
                          xDataKey
                        })}
                        x={bin.x}
                        y={bin.y}
                        width={cellWidth}
                        height={cellHeight}
                        fill={fillColor}
                        data-tooltip-id={tooltipId}
                        data-tooltip-html={buildTooltipHtml({
                          cell: bin.bin,
                          additionalColumns,
                          config,
                          formatNumber: formatNumericValue,
                          xLabel,
                          xDataKey
                        })}
                      />
                      {shouldShowCellValue && (
                        <text
                          className='cdc-heatmap__cell-value'
                          x={bin.x + cellWidth / 2}
                          y={bin.y + cellHeight / 2}
                          fill={getReadableCellTextColor(fillColor)}
                          fontSize={Math.max(9, Math.min(12, cellHeight * 0.35))}
                          textAnchor='middle'
                          dominantBaseline='middle'
                          aria-hidden='true'
                        >
                          {getFormattedValueText(bin.bin, formatNumericValue)}
                        </text>
                      )}
                    </React.Fragment>
                  )
                })
              )
            }
          </HeatmapRect>

          {xAxisPosition === 'top' ? (
            <AxisTop
              scale={xAxisScale}
              tickFormat={value => (config.xAxis?.hideLabel ? '' : xLabelLookup[String(value)] || String(value))}
              hideAxisLine={Boolean(config.xAxis?.hideAxis)}
              hideTicks={Boolean(config.xAxis?.hideTicks)}
              hideZero={true}
              tickLabelProps={() => getXAxisTickLabelProps(xAxisPosition, xTickRotation, columnLabelGap)}
            />
          ) : (
            <AxisBottom
              top={gridHeight}
              scale={xAxisScale}
              tickFormat={value => (config.xAxis?.hideLabel ? '' : xLabelLookup[String(value)] || String(value))}
              hideAxisLine={Boolean(config.xAxis?.hideAxis)}
              hideTicks={Boolean(config.xAxis?.hideTicks)}
              hideZero={true}
              tickLabelProps={() => getXAxisTickLabelProps(xAxisPosition, xTickRotation, columnLabelGap)}
            />
          )}
          <AxisLeft
            scale={yAxisScale}
            tickFormat={value => (config.yAxis?.hideLabel ? '' : value)}
            hideAxisLine={Boolean(config.yAxis?.hideAxis)}
            hideTicks={Boolean(config.yAxis?.hideTicks)}
            tickLabelProps={() => ({
              fontSize: 12,
              textAnchor: 'end',
              angle: yTickRotation,
              dx: yTickRotation ? '-0.25em' : 0,
              dy: '0.33em'
            })}
          />

          {renderXAxisTitle()}
          {renderYAxisTitle()}
        </Group>
      </svg>
      <ReactTooltip
        id={tooltipId}
        variant='light'
        className='tooltip'
        style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }}
      />
    </div>
  )
}

export default HeatMap
