import React, { useContext, useMemo } from 'react'
import { AxisLeft, AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { HeatmapRect } from '@visx/heatmap'
import { scaleBand } from '@visx/scale'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import ConfigContext from '../../ConfigContext'
import { buildHeatMapData, getHeatMapColorScale } from './helpers'
import { formatNumber as formatColumnNumber } from '@cdc/core/helpers/cove/number'

type HeatMapProps = {
  parentWidth: number
  parentHeight: number
}

const EMPTY_CELL_COLOR = '#f3f4f6'
const STROKE_COLOR = '#d0d7de'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const HeatMap: React.FC<HeatMapProps> = ({ parentWidth, parentHeight }) => {
  const { config, filteredData, excludedData, parseDate, formatDate, formatNumber, handleChartAriaLabels } =
    useContext(ConfigContext)

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
        parseDate
      }),
    [rows, xDataKey, heatMapSeries, config.runtime?.seriesLabels, config.xAxis?.type, parseDate]
  )

  const xLabelLookup = useMemo(() => {
    return Object.fromEntries(
      columns.map(column => [
        column.key,
        ['date', 'date-time'].includes(config.xAxis?.type || '')
          ? formatDate(parseDate(String(column.rawValue), false))
          : column.label
      ])
    )
  }, [columns, config.xAxis?.type, formatDate, parseDate])

  const margins = useMemo(() => {
    const longestRowLabel = rowLabels.reduce((longest, label) => Math.max(longest, String(label).length), 0)
    const estimatedRowLabelWidth = longestRowLabel * 7 + 24
    const yAxisSize = Number(config.yAxis?.size) || 0
    const xAxisSize = Number(config.xAxis?.size) || 0
    const left = clamp(Math.max(yAxisSize, estimatedRowLabelWidth, config.yAxis?.label ? 110 : 80), 80, 240)
    const topBase = config.xAxis?.hideTicks ? 24 : 36
    const topLabelSpace = !config.hideXAxisLabel && config.xAxis?.label ? 28 : 0
    const top = clamp(Math.max(xAxisSize, 60) + topBase + topLabelSpace, 72, 180)
    const bottom = 20
    const right = 16

    return { top, right, bottom, left }
  }, [
    rowLabels,
    config.yAxis?.size,
    config.yAxis?.label,
    config.xAxis?.size,
    config.xAxis?.hideTicks,
    config.xAxis?.label,
    config.hideXAxisLabel
  ])

  const availableWidth = Math.max(parentWidth - margins.left - margins.right, 0)
  const availableHeight = Math.max(parentHeight - margins.top - margins.bottom, 0)
  const columnCount = Math.max(columns.length, 1)
  const rowCount = Math.max(rowLabels.length, 1)
  const binWidth = columnCount > 0 ? availableWidth / columnCount : 0
  const binHeight = rowCount > 0 ? availableHeight / rowCount : 0
  const cellGap = Math.max(Number(config.heatmap?.cellPadding || 2), 0)

  const axisBottomScale = useMemo(
    () =>
      scaleBand<string>({
        domain: columns.map(column => column.key),
        range: [0, availableWidth],
        padding: 0
      }),
    [columns, availableWidth]
  )

  const axisLeftScale = useMemo(
    () =>
      scaleBand<string>({
        domain: rowLabels,
        range: [0, availableHeight],
        padding: 0
      }),
    [rowLabels, availableHeight]
  )

  const heatMapColorScale = useMemo(
    () => getHeatMapColorScale(config, minValue, maxValue),
    [config, minValue, maxValue]
  )

  const additionalColumns = useMemo(
    () =>
      Object.entries(config.columns || {})
        .filter(([_, value]) => value.tooltips)
        .filter(([_, value]) => {
          if (!value.name) return false
          if (value.name === xDataKey) return false
          if (heatMapSeries.some(series => series.dataKey === value.name)) return false
          return true
        })
        .map(([_, value]) => ({
          label: value.label || value.name,
          name: value.name,
          options: {
            addColPrefix: value.prefix,
            addColSuffix: value.suffix,
            addColRoundTo: value.roundToPlace,
            addColCommas: value.commas
          }
        })),
    [config.columns, xDataKey, heatMapSeries]
  )

  const getTooltipHtml = cell => {
    const sourceRow = cell.sourceRows[0]
    const additionalRows =
      cell.sourceRows.length > 1 ? `<div>Aggregated Rows: ${String(cell.sourceRows.length)}</div>` : ''

    const extras = sourceRow
      ? additionalColumns
          .map(({ label, name, options }) => {
            const rawValue = sourceRow[name]
            return `${label}: ${formatColumnNumber(rawValue, 'left', false, config, options)}`
          })
          .join('<br/>')
      : ''

    return `<div>
      ${config.xAxis?.label || xDataKey}: ${cell.xLabel}<br/>
      ${config.yAxis?.label || 'Series'}: ${cell.rowLabel}<br/>
      ${config.legend?.label || 'Value'}: ${cell.value === null ? 'No data' : formatNumber(cell.value, 'left')}<br/>
      ${additionalRows}
      ${extras ? `<br/>${extras}` : ''}
    </div>`
  }

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
            xScale={columnIndex => columnIndex * binWidth}
            yScale={rowIndex => rowIndex * binHeight}
            binWidth={binWidth}
            binHeight={binHeight}
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
                      strokeWidth={1}
                      data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                      data-tooltip-html={getTooltipHtml(bin.bin)}
                    />
                  )
                })
              )
            }
          </HeatmapRect>

          <AxisTop
            scale={axisBottomScale}
            tickFormat={value => (config.xAxis?.hideLabel ? '' : xLabelLookup[String(value)] || String(value))}
            hideAxisLine={Boolean(config.xAxis?.hideAxis)}
            hideTicks={Boolean(config.xAxis?.hideTicks)}
            hideZero={true}
            tickLabelProps={() => ({
              fontSize: 12,
              textAnchor: 'end',
              angle: -(Number(config.xAxis?.maxTickRotation) || 45),
              dx: '-0.5em',
              dy: '-0.25em'
            })}
          />
          <AxisLeft
            scale={axisLeftScale}
            tickFormat={value => (config.yAxis?.hideLabel ? '' : String(value))}
            hideAxisLine={Boolean(config.yAxis?.hideAxis)}
            hideTicks={Boolean(config.yAxis?.hideTicks)}
            tickLabelProps={() => ({
              fontSize: 12,
              textAnchor: 'end',
              dy: '0.33em'
            })}
          />

          {!config.hideXAxisLabel && config.xAxis?.label && (
            <text
              x={availableWidth / 2}
              y={-Math.max(margins.top - 18, 18)}
              textAnchor='middle'
              fontSize={14}
              fill='#333'
            >
              {config.xAxis.label}
            </text>
          )}
          {!config.hideYAxisLabel && config.yAxis?.label && (
            <text
              transform={`translate(${-Math.max(margins.left - 20, 24)}, ${availableHeight / 2}) rotate(-90)`}
              textAnchor='middle'
              fontSize={14}
              fill='#333'
            >
              {config.yAxis.label}
            </text>
          )}
        </Group>
      </svg>
      <ReactTooltip
        id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
        variant='light'
        arrowColor='rgba(0,0,0,0)'
        className='tooltip'
        style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }}
      />
    </div>
  )
}

export default HeatMap
