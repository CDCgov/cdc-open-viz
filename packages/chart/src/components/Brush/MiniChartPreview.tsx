import React, { memo } from 'react'
import { LinePath, AreaClosed, AreaStack } from '@visx/shape'
import * as allCurves from '@visx/curve'
import { handleLineType } from '../../helpers/handleLineType'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'

interface MiniChartPreviewProps {
  series: any[]
  tableData: any[]
  dataKey: string
  xScale: any
  miniYScale: any
  colorScale: any
  config: any
  xMax: number
}

const MiniChartPreview = memo<MiniChartPreviewProps>(
  ({ series, tableData, dataKey, xScale, miniYScale, colorScale, config }) => {
    if (!series || !series.length || !tableData || !tableData.length || !xScale || !miniYScale) {
      return null
    }

    const bandwidth = xScale.bandwidth?.() || 0
    const isComboChart = config?.visualizationType === 'Combo'
    const isBarChart = config?.visualizationType === 'Bar'
    const isStacked = config?.visualizationSubType === 'stacked'
    const isAreaChart = config?.visualizationType === 'Area Chart'
    const barSeriesTypes = new Set(['Bar', 'Paired Bar', 'Deviation Bar', 'Combo'])
    const barSeries = isComboChart ? series.filter(s => barSeriesTypes.has(s.type)) : series
    const areaSeries = isComboChart ? series.filter(s => s.type === 'Area Chart') : series
    const lineSeries = isComboChart
      ? series.filter(s => !barSeriesTypes.has(s.type) && s.type !== 'Area Chart')
      : series

    let barElements: React.ReactElement[] = []

    // For bar charts, render rectangles
    if (isBarChart || (isComboChart && barSeries.length > 0)) {
      const bars: React.ReactElement[] = []
      const barSeriesToRender = isBarChart ? series : barSeries

      const barStrokeColor = config?.barHasBorder === 'true' ? '#000' : 'transparent'
      const barStrokeWidth = config?.barHasBorder === 'true' ? 1 : 0

      const getPatternUrl = (datum, seriesKey: string, value: string | number) => {
        if (!config.legend?.patterns || Object.keys(config.legend.patterns).length === 0) {
          return null
        }

        for (const [patternKey, patternObj] of Object.entries(config.legend.patterns)) {
          const pattern = patternObj as any
          if (pattern.dataKey && pattern.dataValue) {
            if (pattern.dataKey === seriesKey && String(value) === String(pattern.dataValue)) {
              return `url(#chart-pattern-${patternKey})`
            }

            if (!config.runtime?.seriesLabels || !config.runtime.seriesLabels[pattern.dataKey]) {
              const dataFieldValue = datum[pattern.dataKey]
              if (String(dataFieldValue) === String(pattern.dataValue)) {
                return `url(#chart-pattern-${patternKey})`
              }
            }
          }
        }

        return null
      }

      tableData.forEach((d, i) => {
        const xVal = xScale(d[dataKey])
        if (xVal === undefined || isNaN(xVal)) {
          return
        }

        // Calculate bar position and width
        // For band scales, center the bar in the band
        const x = bandwidth > 0 ? xVal + bandwidth / 2 : xVal
        const barWidth = bandwidth > 0 ? Math.max(bandwidth * 0.85, 2) : 4 // 85% of bandwidth for wider bars

        if (isStacked) {
          // For stacked bars, render each series as a segment
          // Calculate cumulative values starting from bottom (0)
          let cumulativeValue = 0
          const zeroY = miniYScale(0)

          barSeriesToRender.forEach((s, seriesIndex) => {
            const value = parseFloat(d[s.dataKey])
            if (isNaN(value) || value === 0) return

            const seriesColor = colorScale?.(config.runtime.seriesLabels?.[s.dataKey] || s.dataKey) || '#666'
            const patternUrl = getPatternUrl(d, s.dataKey, value)

            // Calculate the bottom and top of this segment
            // For stacked bars, each segment sits on top of the previous one
            const bottomY = miniYScale(cumulativeValue)
            cumulativeValue += value
            const topY = miniYScale(cumulativeValue)
            const barHeight = Math.abs(topY - bottomY)
            const y = Math.min(bottomY, topY)

            // Ensure minimum visible height
            if (barHeight < 0.5) return

            bars.push(
              <rect
                key={`mini-bar-stacked-${d[dataKey]}-${s.dataKey}`}
                x={x - barWidth / 2}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={seriesColor}
                stroke={barStrokeColor}
                strokeWidth={barStrokeWidth}
                fillOpacity={1}
                pointerEvents='none'
              />
            )
            if (patternUrl) {
              bars.push(
                <rect
                  key={`mini-bar-stacked-pattern-${d[dataKey]}-${s.dataKey}`}
                  x={x - barWidth / 2}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={patternUrl}
                  stroke='transparent'
                  strokeWidth={0}
                  fillOpacity={1}
                  pointerEvents='none'
                />
              )
            }
          })
        } else {
          // For grouped bars, render bars side by side
          const seriesCount = barSeriesToRender.length
          const groupBarWidth = barWidth / seriesCount
          const zeroY = miniYScale(0)

          barSeriesToRender.forEach((s, seriesIndex) => {
            const value = parseFloat(d[s.dataKey])
            if (isNaN(value)) return

            const seriesColor = colorScale?.(config.runtime.seriesLabels?.[s.dataKey] || s.dataKey) || '#666'
            const patternUrl = getPatternUrl(d, s.dataKey, value)

            // Calculate bar position and height
            const valueY = miniYScale(value)
            const barHeight = Math.abs(valueY - zeroY)
            const barX = x - barWidth / 2 + seriesIndex * groupBarWidth
            const y = Math.min(valueY, zeroY) // Top of bar (smaller Y value)

            bars.push(
              <rect
                key={`mini-bar-grouped-${d[dataKey]}-${s.dataKey}`}
                x={barX}
                y={y}
                width={groupBarWidth}
                height={barHeight}
                fill={seriesColor}
                stroke={barStrokeColor}
                strokeWidth={barStrokeWidth}
                fillOpacity={1}
                pointerEvents='none'
              />
            )
            if (patternUrl) {
              bars.push(
                <rect
                  key={`mini-bar-grouped-pattern-${d[dataKey]}-${s.dataKey}`}
                  x={barX}
                  y={y}
                  width={groupBarWidth}
                  height={barHeight}
                  fill={patternUrl}
                  stroke='transparent'
                  strokeWidth={0}
                  fillOpacity={1}
                  pointerEvents='none'
                />
              )
            }
          })
        }
      })

      barElements = bars
      if (isBarChart && !isComboChart) {
        return <>{barElements}</>
      }
    }

    // For stacked area charts, use AreaStack
    // Note: If only one series, treat as non-stacked area chart
    if (isAreaChart && isStacked) {
      // Use the same keys order as the main chart
      const seriesKeys =
        config.runtime?.areaSeriesKeys?.map(s => s.dataKey) || series.map(s => s.dataKey).filter(Boolean)

      if (seriesKeys.length === 0) {
        return null
      }

      // If only one series, render as regular area chart instead of stacked
      if (seriesKeys.length === 1) {
        const s = series[0]
        const seriesKey = s.dataKey
        const seriesColor = colorScale?.(config.runtime.seriesLabels?.[seriesKey] || seriesKey) || '#666'
        const curveType = config.stackedAreaChartLineType
          ? allCurves[approvedCurveTypes[config.stackedAreaChartLineType]]
          : allCurves.curveLinear

        const validData = tableData.filter(d => {
          const xVal = xScale(d[dataKey])
          const yVal = parseFloat(d[s.dataKey])
          return xVal !== undefined && !isNaN(yVal)
        })

        if (validData.length === 0) return null

        const getX = d => xScale(d[dataKey]) + bandwidth / 2
        const getY = d => miniYScale(parseFloat(d[s.dataKey]))

        return (
          <AreaClosed
            key={`mini-area-single-${seriesKey}`}
            data={validData}
            x={getX}
            y={getY}
            yScale={miniYScale}
            fill={seriesColor}
            fillOpacity={1}
            stroke={seriesColor}
            strokeWidth={2}
            curve={curveType}
            pointerEvents='none'
          />
        )
      }

      const curveType = config.stackedAreaChartLineType
        ? allCurves[approvedCurveTypes[config.stackedAreaChartLineType]]
        : allCurves.curveLinear

      // Filter data to only include valid entries
      const validData = tableData.filter(d => {
        const xVal = xScale(d[dataKey])
        return xVal !== undefined
      })

      if (validData.length === 0) {
        return null
      }

      return (
        <AreaStack
          data={validData}
          keys={seriesKeys}
          x0={d => {
            // AreaStack transforms data, so d has a 'data' property with the original data point
            const xVal = xScale(d.data[dataKey])
            return xVal !== undefined ? xVal + bandwidth / 2 : 0
          }}
          y0={d => Number(miniYScale(d[0]))}
          y1={d => Number(miniYScale(d[1]))}
          curve={curveType}
        >
          {({ stacks, path }) => {
            if (!stacks || stacks.length === 0) {
              return null
            }
            // Don't reverse - render in the same order as main chart
            // The main chart doesn't reverse, so we should match that
            return stacks.map(stack => {
              const seriesKey = stack.key
              const seriesColor = colorScale?.(config.runtime.seriesLabels?.[seriesKey] || seriesKey) || '#666'
              const pathData = path(stack)
              if (!pathData) return null
              return (
                <path
                  key={`mini-area-stacked-${seriesKey}`}
                  d={pathData}
                  fill={seriesColor}
                  fillOpacity={1}
                  stroke={seriesColor}
                  strokeWidth={2}
                  pointerEvents='none'
                />
              )
            })
          }}
        </AreaStack>
      )
    }

    // For line/area charts (and combo line/area series), render lines or areas
    return (
      <>
        {(isComboChart ? areaSeries : isAreaChart ? series : []).map((s, i) => {
          const seriesKey = s.dataKey
          const seriesColor = colorScale?.(config.runtime.seriesLabels?.[seriesKey] || seriesKey) || '#666'

          // Get series-specific styling
          const seriesWeight = s.weight || 2
          const seriesLineType = s.lineType || 'curveLinear'
          const seriesStyle = s.type || 'solid'
          const curve = allCurves[seriesLineType] || allCurves.curveLinear
          const strokeDasharray = handleLineType(seriesStyle)

          // Filter to only valid data points
          const validData = tableData.filter(d => {
            const xVal = xScale(d[dataKey])
            const yVal = parseFloat(d[s.dataKey])
            return xVal !== undefined && !isNaN(yVal)
          })

          if (validData.length === 0) return null

          const getX = d => xScale(d[dataKey]) + bandwidth / 2
          const getY = d => miniYScale(parseFloat(d[s.dataKey]))

          return (
            <AreaClosed
              key={`mini-area-${seriesKey}`}
              data={validData}
              x={getX}
              y={getY}
              yScale={miniYScale}
              fill={seriesColor}
              fillOpacity={1}
              stroke={seriesColor}
              strokeWidth={seriesWeight}
              strokeDasharray={strokeDasharray}
              curve={curve}
              pointerEvents='none'
            />
          )
        })}
        {barElements}
        {(isAreaChart && !isComboChart ? [] : isComboChart ? lineSeries : series).map((s, i) => {
          const seriesKey = s.dataKey
          const seriesColor = colorScale?.(config.runtime.seriesLabels?.[seriesKey] || seriesKey) || '#666'

          // Get series-specific styling
          const seriesWeight = s.weight || 2
          const seriesLineType = s.lineType || 'curveLinear'
          const seriesStyle = s.type || 'solid'
          const curve = allCurves[seriesLineType] || allCurves.curveLinear
          const strokeDasharray = handleLineType(seriesStyle)

          // Filter to only valid data points
          const validData = tableData.filter(d => {
            const xVal = xScale(d[dataKey])
            const yVal = parseFloat(d[s.dataKey])
            return xVal !== undefined && !isNaN(yVal)
          })

          if (validData.length === 0) return null

          const getX = d => xScale(d[dataKey]) + bandwidth / 2
          const getY = d => miniYScale(parseFloat(d[s.dataKey]))

          return (
            <LinePath
              key={`mini-line-${seriesKey}`}
              data={validData}
              x={getX}
              y={getY}
              stroke={seriesColor}
              strokeWidth={seriesWeight}
              strokeDasharray={strokeDasharray}
              strokeOpacity={0.8}
              curve={curve}
              pointerEvents='none'
            />
          )
        })}
      </>
    )
  }
)

MiniChartPreview.displayName = 'MiniChartPreview'

export default MiniChartPreview
