import React, { useContext } from 'react'

import * as allCurves from '@visx/curve'
import { Group } from '@visx/group'
import { LinePath } from '@visx/shape'
import { Text } from '@visx/text'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import Context from '../context'

export default function LineChart({ xScale, yScale, getXAxisData, getYAxisData, xMax, yMax, seriesStyle = 'Line' }) {
  const { colorPalettes, transformedData: data, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate } = useContext<any>(Context)

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

  console.log('seriesStyle', seriesStyle)

  return (
    <ErrorBoundary component='LineChart'>
      <Group left={config.runtime.yAxis.size}>
        {(config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map((seriesKey, index) => {
          let lineType = config.series.filter(item => item.dataKey === seriesKey)[0].type
          return (
            <Group
              key={`series-${seriesKey}`}
              opacity={config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(seriesKey) === -1 ? 0.5 : 1}
              display={config.legend.behavior === 'highlight' || (seriesHighlight.length === 0 && !config.legend.dynamicLegend) || seriesHighlight.indexOf(seriesKey) !== -1 ? 'block' : 'none'}
            >
              {data.map((d, dataIndex) => {
                const xAxisValue = config.runtime.xAxis.type === 'date' ? formatDate(parseDate(d[config.runtime.xAxis.dataKey])) : d[config.runtime.xAxis.dataKey]
                let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${formatNumber(getYAxisData(d, seriesKey))}` : formatNumber(getYAxisData(d, seriesKey))
                let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue

                const tooltip = `<div>
              ${yAxisTooltip}<br />
              ${xAxisTooltip}<br />
              ${config.seriesLabel ? `${config.seriesLabel}: ${seriesKey}` : ''} 
            </div>`

                let circleRadii = 4.5
                return (
                  d[seriesKey] !== undefined &&
                  d[seriesKey] !== '' && (
                    <Group key={`series-${seriesKey}-point-${dataIndex}`}>
                      <Text display={config.labels ? 'block' : 'none'} x={xScale(getXAxisData(d))} y={yScale(getYAxisData(d, seriesKey))} fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000'} textAnchor='middle'>
                        {formatNumber(d[seriesKey])}
                      </Text>

                      <circle
                        key={`${seriesKey}-${dataIndex}`}
                        r={circleRadii}
                        cx={xScale(getXAxisData(d))}
                        cy={yScale(getYAxisData(d, seriesKey))}
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
                y={d => yScale(getYAxisData(d, seriesKey))}
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
                  return item[config.runtime.seriesLabels[seriesKey]] !== ''
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
