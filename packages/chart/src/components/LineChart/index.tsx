import React, { useContext } from 'react'

import * as allCurves from '@visx/curve'
import { Group } from '@visx/group'
import { LinePath, Bar, SplitLinePath } from '@visx/shape'
import { Text } from '@visx/text'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../../ConfigContext'
import useRightAxis from '../../hooks/useRightAxis'
import { filterCircles, createStyles } from './helpers'
import LineChartCircle from './components/LineChart.Circle'
import LineChartBumpCircle from './components/LineChart.BumpCircle'

// types
import { type ChartContext } from '../../types/ChartContext'
import { type LineChartProps } from './LineChartProps'

const LineChart = (props: LineChartProps) => {
  // prettier-ignore
  const {
    getXAxisData,
    getYAxisData,
    handleTooltipClick,
    handleTooltipMouseOff,
    handleTooltipMouseOver,
    tooltipData,
    xMax,
    xScale,
    yMax,
    yScale,
  } = props

  // prettier-ignore
  const {
    colorScale,
    config,
    formatNumber,
    handleLineType,
    isNumber,
    parseDate,
    seriesHighlight,
    tableData,
    transformedData: data,
    updateConfig,
    rawData
  } = useContext<ChartContext>(ConfigContext)
  const { yScaleRight } = useRightAxis({ config, yMax, data, updateConfig })
  if (!handleTooltipMouseOver) return

  const DEBUG = false
  const { lineDatapointStyle, showLineSeriesLabels, legend } = config

  return (
    <ErrorBoundary component='LineChart'>
      <Group left={config.runtime.yAxis.size}>
        {' '}
        {/* left - expects a number not a string */}
        {(config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map((seriesKey, index) => {
          let lineType = config.series.filter(item => item.dataKey === seriesKey)[0].type
          const seriesData = config.series.filter(item => item.dataKey === seriesKey)
          const seriesAxis = seriesData[0].axis ? seriesData[0].axis : 'left'
          let displayArea = legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(seriesKey) !== -1
          const circleData = filterCircles(config.preliminaryData, rawData, seriesKey)
          // styles for preliminary Data  items
          let styles = createStyles({ preliminaryData: config.preliminaryData, data: tableData, stroke: colorScale(config.runtime.seriesLabels[seriesKey]), handleLineType, lineType, seriesKey })

          let xPos = d => {
            return xScale(getXAxisData(d)) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
          }

          return (
            <Group
              key={`series-${seriesKey}`}
              opacity={legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(seriesKey) === -1 ? 0.5 : 1}
              display={legend.behavior === 'highlight' || (seriesHighlight.length === 0 && !legend.dynamicLegend) || seriesHighlight.indexOf(seriesKey) !== -1 ? 'block' : 'none'}
            >
              {data.map((d, dataIndex) => {
                // Find the series object from the config.series array that has a dataKey matching the seriesKey variable.
                const series = config.series.find(({ dataKey }) => dataKey === seriesKey)
                const { axis } = series

                const hasMultipleSeries = Object.keys(config.runtime.seriesLabels).length > 1
                const labeltype = axis === 'Right' ? 'rightLabel' : 'label'
                let label = config.runtime.yAxis[labeltype]
                // if has muiltiple series dont show legend value on tooltip
                if (!hasMultipleSeries) label = config.isLegendValue ? config.runtime.seriesLabels[seriesKey] : label

                return (
                  d[seriesKey] !== undefined &&
                  d[seriesKey] !== '' &&
                  d[seriesKey] !== null &&
                  isNumber(d[seriesKey]) && (
                    <Group key={`series-${seriesKey}-point-${dataIndex}`} className='checkwidth'>
                      {/* tooltips */}
                      <Bar key={'bars'} width={Number(xMax)} height={Number(yMax)} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} onMouseMove={e => handleTooltipMouseOver(e, tableData)} onMouseOut={handleTooltipMouseOff} onClick={e => handleTooltipClick(e, data)} />

                      {/* Render legend */}
                      <Text display={config.labels ? 'block' : 'none'} x={xPos(d)} y={seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey))} fill={'#000'} textAnchor='middle'>
                        {formatNumber(d[seriesKey], 'left')}
                      </Text>

                      {(lineDatapointStyle === 'hidden' || lineDatapointStyle === 'always show') && (
                        <LineChartCircle
                          mode='ALWAYS_SHOW_POINTS'
                          dataIndex={dataIndex}
                          circleData={circleData}
                          data={data}
                          d={d}
                          config={config}
                          seriesKey={seriesKey}
                          displayArea={displayArea}
                          tooltipData={tooltipData}
                          xScale={xScale}
                          yScale={yScale}
                          colorScale={colorScale}
                          parseDate={parseDate}
                          yScaleRight={yScaleRight}
                          seriesAxis={seriesAxis}
                          key={`line-circle--${dataIndex}`}
                        />
                      )}

                      <LineChartCircle
                        mode='ISOLATED_POINTS'
                        dataIndex={dataIndex}
                        circleData={circleData}
                        data={data}
                        d={d}
                        config={config}
                        seriesKey={seriesKey}
                        displayArea={displayArea}
                        tooltipData={tooltipData}
                        xScale={xScale}
                        yScale={yScale}
                        colorScale={colorScale}
                        parseDate={parseDate}
                        yScaleRight={yScaleRight}
                        seriesAxis={seriesAxis}
                        key={`isolated-circle-${dataIndex}`}
                      />
                    </Group>
                  )
                )
              })}
              <>
                {lineDatapointStyle === 'hover' && (
                  <LineChartCircle
                    dataIndex={0}
                    mode='HOVER_POINTS'
                    circleData={circleData}
                    data={data}
                    config={config}
                    seriesKey={seriesKey}
                    displayArea={displayArea}
                    tooltipData={tooltipData}
                    xScale={xScale}
                    yScale={yScale}
                    colorScale={colorScale}
                    parseDate={parseDate}
                    yScaleRight={yScaleRight}
                    seriesAxis={seriesAxis}
                  />
                )}
              </>
              {/* SPLIT LINE */}
              {config?.preliminaryData?.some(d => d.value && d.column) ? (
                <SplitLinePath
                  curve={allCurves[seriesData[0].lineType]}
                  segments={(config.xAxis.type === 'date-time'
                    ? data.sort((d1, d2) => {
                        let x1 = getXAxisData(d1)
                        let x2 = getXAxisData(d2)
                        if (x1 < x2) return -1
                        if (x2 < x1) return 1
                        return 0
                      })
                    : data
                  ).map(d => [d])}
                  segmentation='x'
                  x={d => xPos(d)}
                  y={d => (seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(Number(getYAxisData(d, seriesKey))))}
                  styles={styles}
                  defined={(item, i) => {
                    return item[seriesKey] !== '' && item[seriesKey] !== null && item[seriesKey] !== undefined
                  }}
                />
              ) : (
                <>
                  {/* STANDARD LINE */}
                  <LinePath
                    curve={allCurves[seriesData[0].lineType]}
                    data={
                      config.xAxis.type === 'date-time'
                        ? data.sort((d1, d2) => {
                            let x1 = getXAxisData(d1)
                            let x2 = getXAxisData(d2)
                            if (x1 < x2) return -1
                            if (x2 < x1) return 1
                            return 0
                          })
                        : data
                    }
                    x={d => xPos(d)}
                    y={d => (seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(Number(getYAxisData(d, seriesKey))))}
                    stroke={colorScale(config.runtime.seriesLabels[seriesKey])}
                    strokeWidth={2}
                    strokeOpacity={1}
                    shapeRendering='geometricPrecision'
                    strokeDasharray={lineType ? handleLineType(lineType) : 0}
                    defined={(item, i) => {
                      return item[seriesKey] !== '' && item[seriesKey] !== null && item[seriesKey] !== undefined
                    }}
                  />
                </>
              )}

              {/* circles for preliminaryData data */}
              {circleData.map((d, i) => {
                return <circle key={i} cx={xPos(d)} cy={yScale(Number(getYAxisData(d, seriesKey)))} r={6} strokeWidth={2} stroke={colorScale ? colorScale(config.runtime.seriesLabels[seriesKey]) : '#000'} fill='#fff' />
              })}

              {/* ANIMATED LINE */}
              {config.animate && (
                <LinePath
                  className='animation'
                  curve={seriesData.lineType}
                  data={data}
                  x={d => xPos(d)}
                  y={d => (seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(Number(getYAxisData(d, seriesKey))))}
                  stroke='#fff'
                  strokeWidth={3}
                  strokeOpacity={1}
                  shapeRendering='geometricPrecision'
                  strokeDasharray={lineType ? handleLineType(lineType) : 0}
                  defined={(item, i) => {
                    return item[seriesKey] !== '' && item[seriesKey] !== null && item[seriesKey] !== undefined
                  }}
                />
              )}
              {/* Render series labels at end if each line if selected in the editor */}
              {showLineSeriesLabels &&
                (config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map(seriesKey => {
                  let lastDatum
                  for (let i = data.length - 1; i >= 0; i--) {
                    if (data[i][seriesKey]) {
                      lastDatum = data[i]
                      break
                    }
                  }
                  if (!lastDatum) {
                    return <></>
                  }
                  return (
                    <text x={xPos(lastDatum) + 5} y={yScale(getYAxisData(lastDatum, seriesKey))} alignmentBaseline='middle' fill={config.colorMatchLineSeriesLabels && colorScale ? colorScale(config.runtime.seriesLabels[seriesKey] || seriesKey) : 'black'}>
                      {config.runtime.seriesLabels[seriesKey] || seriesKey}
                    </text>
                  )
                })}

              <LineChartBumpCircle config={config} xScale={xScale} yScale={yScale} />
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

export default LineChart
