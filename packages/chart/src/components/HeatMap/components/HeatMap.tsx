import React, { useContext, useMemo } from 'react'
import { AxisLeft, AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { HeatmapRect } from '@visx/heatmap'
import { scaleBand } from '@visx/scale'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import ConfigContext from '../../../ConfigContext'
import { buildHeatMapData, getHeatMapColorScale, HeatMapCell, HeatMapColumn } from '../helpers'
import { formatNumber as formatColumnNumber } from '@cdc/core/helpers/cove/number'
import { ChartConfig } from '../../../types/ChartConfig'
import { buildTooltipListHtml } from '../../../helpers/tooltipHelpers'
import './../heatmap.scss'

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

const DEFAULT_CELL_PADDING = 2
const DEFAULT_ROW_LABEL_GAP = 32
const DEFAULT_COLUMN_LABEL_GAP = 56
const DEFAULT_X_TICK_ROTATION = 45
const AXIS_TOP_WITH_TICKS = 36
const AXIS_TOP_WITHOUT_TICKS = 24
const AXIS_TOP_LABEL_SPACE = 28
const DEFAULT_SERIES_LABEL = 'Series'
const DEFAULT_VALUE_LABEL = 'Value'
const EMPTY_VALUE_LABEL = 'No data'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const getNonNegativeConfigNumber = (value: unknown, fallback: number) => {
  const numericValue = Number(value)
  return Number.isFinite(numericValue) ? Math.max(numericValue, 0) : fallback
}

const isDateAxisType = (axisType?: string) => ['date', 'date-time'].includes(axisType || '')

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
const buildChartMargins = (config: ChartConfig, rowLabels: string[]): HeatMapMargins => {
  const longestRowLabel = rowLabels.reduce((longest, label) => Math.max(longest, String(label).length), 0)
  const estimatedRowLabelWidth = longestRowLabel * 7 + 24
  const yAxisSize = Number(config.yAxis?.size) || 0
  const xAxisSize = Number(config.xAxis?.size) || 0
  const columnLabelGap = getNonNegativeConfigNumber(config.heatmap?.columnLabelGap, DEFAULT_COLUMN_LABEL_GAP)
  const left = clamp(Math.max(yAxisSize, estimatedRowLabelWidth, config.yAxis?.label ? 110 : 80), 80, 240)
  const topBase = config.xAxis?.hideTicks ? AXIS_TOP_WITHOUT_TICKS : AXIS_TOP_WITH_TICKS
  const topLabelSpace = !config.hideXAxisLabel && config.xAxis?.label ? AXIS_TOP_LABEL_SPACE : 0
  const extraColumnLabelSpace = Math.max(columnLabelGap - DEFAULT_COLUMN_LABEL_GAP, 0)
  const top = clamp(Math.max(xAxisSize, 60) + topBase + topLabelSpace + extraColumnLabelSpace, 72, 220)

  return {
    top,
    right: 16,
    bottom: 20,
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

  const tooltipXLabelLookup = useMemo(
    () => buildXLabelLookup(columns, config.xAxis?.type, formatTooltipDateValue, parseDateValue),
    [columns, config.xAxis?.type, formatTooltipDateValue, parseDateValue]
  )

  const margins = useMemo(() => buildChartMargins(config, rowLabels), [config, rowLabels])
  const configuredRowLabelGap = getNonNegativeConfigNumber(config.heatmap?.rowLabelGap, DEFAULT_ROW_LABEL_GAP)
  const rowLabelGap = config.yAxis?.hideLabel ? 0 : configuredRowLabelGap
  const columnLabelGap = getNonNegativeConfigNumber(config.heatmap?.columnLabelGap, DEFAULT_COLUMN_LABEL_GAP)

  const columnCount = Math.max(columns.length, 1)
  const rowCount = Math.max(rowLabels.length, 1)
  const { availableHeight, gridWidth, gridHeight, cellSize, xGroupOffset, xOffset, yOffset } = useMemo(
    () => buildGridLayout(parentWidth, parentHeight, margins, columnCount, rowCount, rowLabelGap),
    [parentWidth, parentHeight, margins, columnCount, rowCount, rowLabelGap]
  )
  const cellGap = getNonNegativeConfigNumber(config.heatmap?.cellPadding, DEFAULT_CELL_PADDING)
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
  const yAxisLabel = config.yAxis?.label
  const xTickRotation = -(Number(config.xAxis?.maxTickRotation) || DEFAULT_X_TICK_ROTATION)
  const yTickRotation = -(Number(config.yAxis?.tickRotation) || 0)

  return (
    <div className='cdc-heatmap'>
      <svg
        width={parentWidth}
        height={parentHeight}
        aria-label={handleChartAriaLabels(config)}
        className={`cdc-heatmap__svg${config.animate ? ' animated' : ''}`}
      >
        {/* Shift the complete heatmap block, not just the cells, so row labels stay close while the block stays centered. */}
        <Group top={margins.top} left={margins.left + xGroupOffset}>
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
                  return (
                    <rect
                      key={`heatmap-cell-${bin.column}-${bin.row}`}
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
                      fill={hasValue ? heatMapColorScale(bin.bin.value as number) : undefined}
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
                  )
                })
              )
            }
          </HeatmapRect>

          <AxisTop
            scale={xAxisScale}
            tickFormat={value => (config.xAxis?.hideLabel ? '' : xLabelLookup[String(value)] || String(value))}
            hideAxisLine={Boolean(config.xAxis?.hideAxis)}
            hideTicks={Boolean(config.xAxis?.hideTicks)}
            hideZero={true}
            tickLabelProps={() => ({
              fontSize: 12,
              textAnchor: 'end',
              angle: xTickRotation,
              dx: '-0.5em',
              y: -columnLabelGap
            })}
          />
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

          {!config.hideXAxisLabel && xAxisLabel && (
            <text
              className='cdc-heatmap__axis-title'
              x={xOffset + gridWidth / 2}
              y={-Math.max(margins.top - 18, 18)}
              textAnchor='middle'
            >
              {xAxisLabel}
            </text>
          )}
          {!config.hideYAxisLabel && yAxisLabel && (
            <text
              className='cdc-heatmap__axis-title'
              transform={`translate(${-Math.max(margins.left - 20, 24)}, ${availableHeight / 2}) rotate(-90)`}
              textAnchor='middle'
            >
              {yAxisLabel}
            </text>
          )}
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
