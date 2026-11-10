import React, { useContext, useMemo } from 'react'
import { AxisBottom, AxisLeft, AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { scaleBand } from '@visx/scale'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import ConfigContext from '../../../ConfigContext'
import {
  buildChartMargins,
  buildGridLayout,
  buildHeatMapData,
  buildXLabelLookup,
  clamp,
  getHeatMapColorScale,
  getHeatMapSeriesLabels,
  getHeatMapXAxisPosition,
  getHeatMapXAxisTickValues,
  getHeatMapYAxisLabel,
  getMeasuredTextWidth,
  getNonNegativeConfigNumber,
  getRotatedLabelHeight,
  getWidestLabelWidth,
  getXAxisEndpointMargins,
  getXAxisTickLabelProps,
  getXAxisTitleDistance,
  shouldRenderTopYAxisTitle
} from '../helpers'
import { type FormatDateFn, type HeatMapProps, type ParseDateFn } from '../types'
import { useHeatMapScroll } from '../hooks'
import {
  AXIS_MARGIN_PADDING,
  AXIS_OUTER_PADDING,
  AXIS_TICK_FONT_SIZE,
  AXIS_TICK_LENGTH,
  AXIS_TITLE_FONT_WEIGHT,
  AXIS_TITLE_SPACE,
  AXIS_TOP_TITLE_BASELINE,
  DEFAULT_SERIES_LABEL,
  HEATMAP_CONFIG_DEFAULTS,
  MAX_HEATMAP_COLUMN_WIDTH,
  MAX_X_AXIS_SCROLL_INSET,
  MIN_GRID_HEIGHT,
  MIN_GRID_WIDTH,
  MIN_HEATMAP_COLUMN_WIDTH,
  SIDE_Y_AXIS_TITLE_GAP
} from '../heatmap.constants'
import HeatMapCells from './HeatMapCells'
import './../heatmap.css'

/**
 * HeatMap render contract
 *
 * The chart treats `xAxis.dataKey` as the column bucket and `config.series` as the row definitions.
 * Each configured series dataKey becomes one rendered row, and each distinct x value becomes one
 * rendered column. The pure shaping and aggregation work lives in `../helpers/data`;
 * this component is responsible for formatting context, layout orchestration, interactions, and rendering.
 */
const HeatMap: React.FC<HeatMapProps> = ({ parentWidth, parentHeight }) => {
  const { config, filteredData, excludedData, parseDate, formatDate, handleChartAriaLabels, currentViewport } =
    useContext(ConfigContext)
  const parseDateValue: ParseDateFn =
    typeof parseDate === 'function'
      ? (value, showError = true) => parseDate(value, showError)
      : value => new Date(value)
  const formatDateValue: FormatDateFn =
    typeof formatDate === 'function' ? value => formatDate(value) : value => value.toISOString()
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

  const baseMargins = useMemo(
    () => buildChartMargins(config, rowLabels, marginXAxisLabels, parentWidth),
    [config, marginXAxisLabels, parentWidth, rowLabels]
  )
  const configuredRowLabelGap = getNonNegativeConfigNumber(
    config.heatmap?.rowLabelGap,
    HEATMAP_CONFIG_DEFAULTS.rowLabelGap
  )
  // Bound extreme gaps to the reserved label area so labels and the grid remain visible.
  const rowLabelGap = config.yAxis?.hideLabel
    ? 0
    : Math.min(
        configuredRowLabelGap,
        Math.max(
          baseMargins.left -
            getWidestLabelWidth(rowLabels) -
            (!config.hideYAxisLabel && getHeatMapYAxisLabel(config) && !shouldRenderTopYAxisTitle(config)
              ? AXIS_TITLE_SPACE
              : 0) -
            AXIS_MARGIN_PADDING,
          0
        )
      )
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
    () => buildGridLayout(parentWidth, parentHeight, baseMargins, columnCount, rowCount, minimumColumnWidth),
    [parentWidth, parentHeight, baseMargins, columnCount, rowCount, minimumColumnWidth]
  )
  const isHorizontallyScrollable =
    horizontalScrollEnabled && initialLayout.gridWidth > initialLayout.responsiveGridWidth
  const { scrollAreaRef, scrollState } = useHeatMapScroll({
    columnCount,
    isHorizontallyScrollable,
    marginXAxisLabels,
    minimumColumnWidth,
    parentHeight,
    parentWidth
  })
  const chartHeight = Math.max(parentHeight - (isHorizontallyScrollable ? scrollState.scrollbarSpace : 0), 0)
  const margins = useMemo(() => {
    if (!yTickRotation || config.yAxis?.hideLabel) return baseMargins

    const rotatedRowLabelHeight = getRotatedLabelHeight(rowLabels, Math.abs(yTickRotation))
    // The last row label starts at its cell center. Its overflow and the x-axis
    // occupy the same bottom margin; adding both reservations wastes plot height.
    const halfRowFraction = 1 / (2 * Math.max(rowCount, 1))
    const desiredBottomMargin = Math.max(
      baseMargins.bottom,
      Math.ceil(
        (rotatedRowLabelHeight + AXIS_OUTER_PADDING - (chartHeight - baseMargins.top) * halfRowFraction) /
          (1 - halfRowFraction)
      )
    )
    const availableBottomMargin = Math.max(chartHeight - baseMargins.top - MIN_GRID_HEIGHT, 0)
    const maximumBottomMargin = Math.max(baseMargins.bottom, availableBottomMargin)

    return {
      ...baseMargins,
      bottom: Math.min(desiredBottomMargin, maximumBottomMargin)
    }
  }, [baseMargins, chartHeight, config.yAxis?.hideLabel, rowLabels, rowCount, yTickRotation])
  const { gridWidth, gridHeight, cellWidth, cellHeight, xOffset, yOffset } = useMemo(
    () => buildGridLayout(parentWidth, chartHeight, margins, columnCount, rowCount, minimumColumnWidth),
    [parentWidth, chartHeight, margins, columnCount, rowCount, minimumColumnWidth]
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

  const tooltipId = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const scrollInstructionsId = `${tooltipId}-scroll-instructions`
  const xAxisLabel = config.xAxis?.label
  const yAxisLabel = getHeatMapYAxisLabel(config)
  const chartAriaLabel = String(handleChartAriaLabels(config))
  const scrollRegionLabel = `${chartAriaLabel}; ${xAxisLabel || xDataKey || 'HeatMap'}; scrollable columns`
  const fixedYAxisAriaLabel = `${chartAriaLabel}; ${yAxisLabel || DEFAULT_SERIES_LABEL} row axis`
  const showTopYAxisTitle = shouldRenderTopYAxisTitle(config)
  const visibleXAxisLabels = config.xAxis?.hideLabel ? [] : xAxisTickValues.map(value => xLabelLookup[value] || value)
  const xAxisTitleDistance = getXAxisTitleDistance(visibleXAxisLabels, Math.abs(xTickRotation), columnLabelGap)
  const rowLabelTitleX = config.yAxis?.hideLabel ? 0 : -getWidestLabelWidth(rowLabels) - rowLabelGap
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
    <HeatMapCells
      columns={columns}
      cellWidth={cellWidth}
      cellHeight={cellHeight}
      xOffset={plotXOffset}
      yOffset={yOffset}
      gap={effectiveCellGap}
      colorScale={heatMapColorScale}
    />
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
        x: -AXIS_TICK_LENGTH - rowLabelGap,
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
