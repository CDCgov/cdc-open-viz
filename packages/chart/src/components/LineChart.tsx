import React, { useContext } from 'react'

import * as allCurves from '@visx/curve'
import { Group } from '@visx/group'
import { LinePath } from '@visx/shape'
import { Text } from '@visx/text'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import Context from '../context'

import useRightAxis from '../hooks/useRightAxis'

export default function LineChart({ xScale, yScale, getXAxisData, getYAxisData, xMax, yMax, seriesStyle = 'Line' }) {
  const { colorPalettes, transformedData: data, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, updateConfig } = useContext<any>(Context)
  const { yScaleRight } = useRightAxis({ config, yMax, data, updateConfig })

  const handleLineType = lineType => {
    switch (lineType) {
      case 'dashed-sm':
        return '5 5'
      case 'dashed-md':
        return '10 5'
      case 'dashed-lg':
        return '15 5'
      default:
        return 0
    }
  }

  // Define an object that contains the configuration for the Left and Right axis.
  const axisConfigs = {
    Left: {
      format: (label, value) => `${label}: ${formatNumber(value)}`
    },
    Right: {
      format: (label, value) => `${label}: ${formatNumber(value, 'right')}`
    },
    getyAxisLabel: (seriesKey: string, yAxisType?: string) => {
      // method returns label based on what Axis Left or Right. Each axis has own label.
      const {
        seriesLabels,
        yAxis: { rightLabel, label: leftLabel, isLegendValue }
      } = config.runtime
      const hasMultipleSeries = Object.keys(seriesLabels).length > 1

      let label = yAxisType === 'Right' && rightLabel ? rightLabel : leftLabel ? leftLabel : ''
      if (!hasMultipleSeries) {
        label = isLegendValue ? seriesLabels[seriesKey] : label
      }
      return label as string
    },

    getxAxisLabel: () => (config.runtime.xAxis.label ? config.runtime.xAxis.label : '')
  }

  return (
    <ErrorBoundary component='LineChart'>
      <Group left={config.runtime.yAxis.size}>
        {(config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map((seriesKey, index) => {
          let lineType = config.series.filter(item => item.dataKey === seriesKey)[0].type
          const seriesData = config.series.filter(item => item.dataKey === seriesKey)
          const seriesAxis = seriesData[0].axis ? seriesData[0].axis : 'left'

          return (
            <Group
              key={`series-${seriesKey}`}
              opacity={config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(seriesKey) === -1 ? 0.5 : 1}
              display={config.legend.behavior === 'highlight' || (seriesHighlight.length === 0 && !config.legend.dynamicLegend) || seriesHighlight.indexOf(seriesKey) !== -1 ? 'block' : 'none'}
            >
              {data.map((d, dataIndex) => {
                // Find the series object from the config.series array that has a dataKey matching the seriesKey variable.
                const series = config.series.find(({ dataKey }) => dataKey === seriesKey)
                const { axis } = series

                const xAxisValue = config.runtime.xAxis.type === 'date' ? formatDate(parseDate(d[config.runtime.xAxis.dataKey])) : d[config.runtime.xAxis.dataKey]
                const yAxisValue = getYAxisData(d, seriesKey)

                let yAxisTooltip
                let xAxisTooltip

                if (config.visualizationType === 'Line' || axis === 'Left') {
                  //if (axis === 'Left')  or if Chart type Line
                  const { format: formatLeftAxisVal } = axisConfigs.Left
                  yAxisTooltip = formatLeftAxisVal(axisConfigs.getyAxisLabel(seriesKey), yAxisValue)
                  xAxisTooltip = formatLeftAxisVal(axisConfigs.getxAxisLabel(), xAxisValue)
                }

                if (config.visualizationType === 'Combo' && axis === 'Right') {
                  // Create the y-axis yAxisRightValue tooltip using the format function.
                  const { format: formatRightAxisVal } = axisConfigs.Right
                  yAxisTooltip = formatRightAxisVal(axisConfigs.getyAxisLabel(seriesKey, 'Right'), yAxisValue)
                  xAxisTooltip = formatRightAxisVal(axisConfigs.getxAxisLabel(), xAxisValue)
                }

                const tooltip = `<div>
                    ${config.runtime.seriesLabels && Object.keys(config.runtime.seriesLabels).length > 1 ? `${config.runtime.seriesLabels[seriesKey] || ''}<br/>` : ''}
                    ${yAxisTooltip}<br />
                    ${xAxisTooltip}
                  </div>`
                let circleRadii = 4.5
                return (
                  d[seriesKey] !== undefined &&
                  d[seriesKey] !== '' &&
                  d[seriesKey] !== null && (
                    <Group key={`series-${seriesKey}-point-${dataIndex}`}>
                      <Text
                        display={config.labels ? 'block' : 'none'}
                        x={xScale(getXAxisData(d))}
                        y={seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey))}
                        fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000'}
                        textAnchor='middle'
                      >
                        {formatNumber(d[seriesKey])}
                      </Text>

                      <circle
                        key={`${seriesKey}-${dataIndex}`}
                        r={circleRadii}
                        cx={xScale(getXAxisData(d))}
                        cy={seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey))}
                        fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000'}
                        style={{ fill: colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000' }}
                        data-tip={tooltip}
                        data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                      />
                    </Group>
                  )
                )
              })}

              <LinePath
                curve={allCurves.curveLinear}
                data={data}
                x={d => xScale(getXAxisData(d))}
                y={d => (seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey)))}
                stroke={
                  colorScale && !config.legend.dynamicLegend
                    ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey)
                    : // is dynamic legend
                    config.legend.dynamicLegend
                    ? colorPalettes[config.palette][index]
                    : // fallback
                      '#000'
                }
                strokeWidth={2}
                strokeOpacity={1}
                shapeRendering='geometricPrecision'
                strokeDasharray={lineType ? handleLineType(lineType) : 0}
                defined={(item, i) => {
                  return item[config.runtime.seriesLabels[seriesKey]] !== '' && item[config.runtime.seriesLabels[seriesKey]] !== null
                }}
              />
            </Group>
          )
        })}

        {/* Message when dynamic legend and nothing has been picked */}
        {config.legend.dynamicLegend && seriesHighlight.length === 0 && (
          <Text x={xMax / 2} y={yMax / 2} fill='black' textAnchor='middle' color='black'>
            {config.legend.dynamicLegendChartMessage}
          </Text>
        )}
      </Group>
    </ErrorBoundary>
  )
}
