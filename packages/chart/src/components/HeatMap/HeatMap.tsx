import React, { useContext, useMemo } from 'react'
import { AxisLeft, AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { HeatmapRect } from '@visx/heatmap'
import { scaleBand } from '@visx/scale'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import ConfigContext from '../../ConfigContext'
import { buildHeatMapData, getHeatMapColorScale, HeatMapCell, HeatMapColumn } from './helpers'
import { formatNumber as formatColumnNumber } from '@cdc/core/helpers/cove/number'
import { ChartConfig } from '../../types/ChartConfig'
import { Column } from '@cdc/core/types/Column'

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
  xOffset: number
  yOffset: number
}

const EMPTY_CELL_COLOR = '#f3f4f6'
const STROKE_COLOR = 'rgba(255, 255, 255, 0.7)'
const STROKE_WIDTH = 0.75
const DEFAULT_CELL_PADDING = 2
const DEFAULT_X_TICK_ROTATION = 45
const AXIS_TOP_WITH_TICKS = 36
const AXIS_TOP_WITHOUT_TICKS = 24
const AXIS_TOP_LABEL_SPACE = 28
const DEFAULT_SERIES_LABEL = 'Series'
const DEFAULT_VALUE_LABEL = 'Value'
const EMPTY_VALUE_LABEL = 'No data'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const isDateAxisType = (axisType?: string) => ['date', 'date-time'].includes(axisType || '')

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

const buildChartMargins = (config: ChartConfig, rowLabels: string[]): HeatMapMargins => {
  const longestRowLabel = rowLabels.reduce((longest, label) => Math.max(longest, String(label).length), 0)
  const estimatedRowLabelWidth = longestRowLabel * 7 + 24
  const yAxisSize = Number(config.yAxis?.size) || 0
  const xAxisSize = Number(config.xAxis?.size) || 0
  const left = clamp(Math.max(yAxisSize, estimatedRowLabelWidth, config.yAxis?.label ? 110 : 80), 80, 240)
  const topBase = config.xAxis?.hideTicks ? AXIS_TOP_WITHOUT_TICKS : AXIS_TOP_WITH_TICKS
  const topLabelSpace = !config.hideXAxisLabel && config.xAxis?.label ? AXIS_TOP_LABEL_SPACE : 0
  const top = clamp(Math.max(xAxisSize, 60) + topBase + topLabelSpace, 72, 180)

  return {
    top,
    right: 16,
    bottom: 20,
    left
  }
}

const buildGridLayout = (
  parentWidth: number,
  parentHeight: number,
  margins: HeatMapMargins,
  columnCount: number,
  rowCount: number
): HeatMapLayout => {
  const availableWidth = Math.max(parentWidth - margins.left - margins.right, 0)
  const availableHeight = Math.max(parentHeight - margins.top - margins.bottom, 0)
  const columnBandWidth = availableWidth / Math.max(columnCount, 1)
  const rowBandHeight = availableHeight / Math.max(rowCount, 1)
  const cellSize = Math.min(columnBandWidth, rowBandHeight)
  const gridWidth = cellSize * Math.max(columnCount, 1)
  const gridHeight = cellSize * Math.max(rowCount, 1)

  return {
    availableWidth,
    availableHeight,
    gridWidth,
    gridHeight,
    cellSize,
    xOffset: Math.max((availableWidth - gridWidth) / 2, 0),
    yOffset: 0
  }
}

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

const buildTooltipHtml = ({
  cell,
  additionalColumns,
  config,
  formatNumber,
  xDataKey
}: {
  cell: HeatMapCell
  additionalColumns: TooltipColumn[]
  config: ChartConfig
  formatNumber: FormatValueFn
  xDataKey: string
}) => {
  const sourceRow = cell.sourceRows[0]
  const aggregatedRowsMarkup =
    cell.sourceRows.length > 1 ? `<div>Aggregated Rows: ${String(cell.sourceRows.length)}</div>` : ''
  const xAxisLabel = config.xAxis?.label || xDataKey
  const yAxisLabel = config.yAxis?.label || DEFAULT_SERIES_LABEL
  const valueLabel = config.legend?.label || DEFAULT_VALUE_LABEL

  const extraColumnMarkup = sourceRow
    ? additionalColumns
        .map(({ label, name, options }) => {
          const rawValue = sourceRow[name]
          return `${label}: ${formatColumnNumber(rawValue, 'left', false, config as any, options as any)}`
        })
        .join('<br/>')
    : ''

  return `<div>
      ${xAxisLabel}: ${cell.xLabel}<br/>
      ${yAxisLabel}: ${cell.rowLabel}<br/>
      ${valueLabel}: ${cell.value === null ? EMPTY_VALUE_LABEL : formatNumber(cell.value, 'left')}<br/>
      ${aggregatedRowsMarkup}
      ${extraColumnMarkup ? `<br/>${extraColumnMarkup}` : ''}
    </div>`
}

const HeatMap: React.FC<HeatMapProps> = ({ parentWidth, parentHeight }) => {
  const { config, filteredData, excludedData, parseDate, formatDate, formatNumber, handleChartAriaLabels } =
    useContext(ConfigContext)

  const parseDateValue: ParseDateFn =
    typeof parseDate === 'function'
      ? (value, showError = true) => parseDate(value, showError)
      : value => new Date(value)
  const formatDateValue: FormatDateFn =
    typeof formatDate === 'function' ? value => formatDate(value) : value => value.toISOString()
  const formatNumericValue: FormatValueFn =
    typeof formatNumber === 'function'
      ? (value, position = 'left') => String(formatNumber(value, position))
      : value => String(value)

  const rows = filteredData?.length ? filteredData : excludedData || []
  const xDataKey = config.xAxis?.dataKey
  const heatMapSeries = config.series || []

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

  const xLabelLookup = useMemo(
    () => buildXLabelLookup(columns, config.xAxis?.type, formatDateValue, parseDateValue),
    [columns, config.xAxis?.type, formatDateValue, parseDateValue]
  )

  const margins = useMemo(() => buildChartMargins(config, rowLabels), [config, rowLabels])

  const columnCount = Math.max(columns.length, 1)
  const rowCount = Math.max(rowLabels.length, 1)
  const { availableWidth, availableHeight, gridWidth, gridHeight, cellSize, xOffset, yOffset } = useMemo(
    () => buildGridLayout(parentWidth, parentHeight, margins, columnCount, rowCount),
    [parentWidth, parentHeight, margins, columnCount, rowCount]
  )
  const cellGap = Math.max(Number(config.heatmap?.cellPadding || DEFAULT_CELL_PADDING), 0)

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

  return (
    <div style={{ width: '100%' }}>
      <svg
        width={parentWidth}
        height={parentHeight}
        aria-label={handleChartAriaLabels(config)}
        className={config.animate ? 'animated' : ''}
      >
        <Group top={margins.top} left={margins.left}>
          <HeatmapRect
            data={columns}
            xScale={columnIndex => columnIndex * cellSize + xOffset}
            yScale={rowIndex => rowIndex * cellSize + yOffset}
            binWidth={cellSize}
            binHeight={cellSize}
            gap={cellGap}
            bins={column => column.bins}
            count={bin => (typeof bin.value === 'number' ? bin.value : 0)}
          >
            {heatmap =>
              heatmap.map(columnBins =>
                columnBins.map(bin => {
                  const hasValue = typeof bin.bin.value === 'number'
                  return (
                    <rect
                      key={`heatmap-cell-${bin.column}-${bin.row}`}
                      className='visx-heatmap-rect'
                      x={bin.x}
                      y={bin.y}
                      width={bin.width}
                      height={bin.height}
                      fill={hasValue ? heatMapColorScale(bin.bin.value as number) : EMPTY_CELL_COLOR}
                      stroke={STROKE_COLOR}
                      strokeWidth={STROKE_WIDTH}
                      data-tooltip-id={tooltipId}
                      data-tooltip-html={buildTooltipHtml({
                        cell: bin.bin,
                        additionalColumns,
                        config,
                        formatNumber: formatNumericValue,
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
              dy: '-0.25em'
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
              dy: '0.33em'
            })}
          />

          {!config.hideXAxisLabel && xAxisLabel && (
            <text
              x={availableWidth / 2}
              y={-Math.max(margins.top - 18, 18)}
              textAnchor='middle'
              fontSize={14}
              fill='#333'
            >
              {xAxisLabel}
            </text>
          )}
          {!config.hideYAxisLabel && yAxisLabel && (
            <text
              transform={`translate(${-Math.max(margins.left - 20, 24)}, ${availableHeight / 2}) rotate(-90)`}
              textAnchor='middle'
              fontSize={14}
              fill='#333'
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
