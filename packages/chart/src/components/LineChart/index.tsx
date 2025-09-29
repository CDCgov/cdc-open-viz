import React, { useContext } from 'react'

// VisX library imports
import * as allCurves from '@visx/curve'
import { Group } from '@visx/group'
import { LinePath, Bar, SplitLinePath, AreaClosed } from '@visx/shape'
import { Text } from '@visx/text'

// CDC core components
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

// Local context and hooks
import ConfigContext from '../../ConfigContext'
import useRightAxis from '../../hooks/useRightAxis'

// Local helpers and components
import { filterCircles, createStyles, createDataSegments } from './helpers'
import LineChartCircle from './components/LineChart.Circle'
import LineChartBumpCircle from './components/LineChart.BumpCircle'
import isNumber from '@cdc/core/helpers/isNumber'

// Types
import { type ChartContext } from '../../types/ChartContext'
import { type LineChartProps } from './LineChartProps'

const LineChart = (props: LineChartProps) => {
  // prettier-ignore
  const {
    getXAxisData,
    getYAxisData,
    handleTooltipMouseOff,
    handleTooltipMouseOver,
    tooltipData,
    xMax,
    xScale,
    yMax,
    yScale,
    } = props

  // prettier-ignore
  const { colorScale, config, formatNumber, handleLineType, parseDate, seriesHighlight, tableData, transformedData:data, updateConfig,   } = useContext<ChartContext>(ConfigContext)
  const { yScaleRight } = useRightAxis({ config, yMax, data, updateConfig })
  const showSingleSeries = config.tooltips.singleSeries
  if (!handleTooltipMouseOver) return

  const DEBUG = false
  const { lineDatapointStyle, showLineSeriesLabels, legend } = config

  const xPos = d => {
    return xScale(getXAxisData(d)) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
  }

  const tooltipPoints = []

  return (
    <ErrorBoundary component='LineChart'>
      <Group left={Number(config.runtime.yAxis.size)} className='line-chart-group'>
        {/* left - expects a number not a string */}
        {(config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map((seriesKey, index) => {
          const seriesData = config.runtime.series.find(item => item.dataKey === seriesKey)
          const _seriesKey = seriesData.dynamicCategory ? seriesData.originalDataKey : seriesKey
          const lineType = seriesData.type
          const seriesAxis = seriesData.axis || 'left'
          const displayArea =
            legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(seriesKey) !== -1

          const suppressedSegments = createDataSegments({
            data: tableData,
            seriesKey,
            preliminaryData: config.preliminaryData,
            dynamicCategory: seriesData.dynamicCategory,
            originalSeriesKey: _seriesKey,
            colorScale
          })
          const isSplitLine =
            config?.preliminaryData?.filter(pd => pd.style && !pd.style.includes('Circles')).length > 0

          const _data = seriesData.dynamicCategory
            ? data.filter(d => d[seriesData.dynamicCategory] === seriesKey)
            : data
          const circleData = filterCircles(config?.preliminaryData, tableData, _seriesKey)
          return (
            <Group
              key={`series-${seriesKey}-${index}`}
              opacity={
                legend.behavior === 'highlight' &&
                seriesHighlight.length > 0 &&
                seriesHighlight.indexOf(seriesKey) === -1
                  ? 0.5
                  : 1
              }
              display={
                legend.behavior === 'highlight' ||
                (seriesHighlight.length === 0 && !legend.dynamicLegend) ||
                seriesHighlight.indexOf(seriesKey) !== -1
                  ? 'block'
                  : 'none'
              }
            >
              {/* tooltips */}
              <Bar
                key={'bars'}
                width={Number(xMax)}
                height={Number(yMax)}
                fill={DEBUG ? 'red' : 'transparent'}
                fillOpacity={0.05}
              />
              {_data.map((d, dataIndex) => {
                tooltipPoints.push({
                  color: colorScale(config.runtime.seriesLabels[seriesKey]),
                  seriesKey: _seriesKey,
                  seriesIndex: index,
                  xValue: d[config.xAxis.dataKey],
                  yValue: d[_seriesKey]
                })
                return (
                  isNumber(d[_seriesKey]) && (
                    <React.Fragment key={`series-${seriesKey}-point-${dataIndex}`}>
                      {/* Render label */}
                      {config.labels && (
                        <Text
                          x={xPos(d)}
                          y={
                            seriesAxis === 'Right'
                              ? yScaleRight(getYAxisData(d, _seriesKey))
                              : yScale(getYAxisData(d, _seriesKey))
                          }
                          fill={'#000'}
                          textAnchor='middle'
                        >
                          {formatNumber(d[_seriesKey], 'left')}
                        </Text>
                      )}

                      {lineDatapointStyle === 'always show' && (
                        <LineChartCircle
                          mode='ALWAYS_SHOW_POINTS'
                          dataIndex={dataIndex}
                          tableData={tableData}
                          data={_data}
                          d={d}
                          config={config}
                          seriesKey={_seriesKey}
                          displayArea={displayArea}
                          tooltipData={tooltipData}
                          xScale={xScale}
                          yScale={yScale}
                          colorScale={colorScale}
                          parseDate={parseDate}
                          yScaleRight={yScaleRight}
                          seriesAxis={seriesAxis}
                          seriesIndex={index}
                          key={`line-circle--${dataIndex}`}
                        />
                      )}

                      {(lineDatapointStyle === 'hover' || lineDatapointStyle === 'hidden') && (
                        <LineChartCircle
                          mode='HOVER_POINTS'
                          dataIndex={dataIndex}
                          tableData={tableData}
                          data={_data}
                          d={d}
                          config={config}
                          seriesKey={_seriesKey}
                          displayArea={displayArea}
                          xScale={xScale}
                          yScale={yScale}
                          colorScale={colorScale}
                          parseDate={parseDate}
                          yScaleRight={yScaleRight}
                          seriesAxis={seriesAxis}
                          seriesIndex={index}
                          key={`line-hover-circle--${dataIndex}`}
                        />
                      )}

                      <LineChartCircle
                        mode='ISOLATED_POINTS'
                        seriesIndex={index}
                        dataIndex={dataIndex}
                        tableData={tableData}
                        data={_data}
                        d={d}
                        config={config}
                        seriesKey={_seriesKey}
                        displayArea={displayArea}
                        xScale={xScale}
                        yScale={yScale}
                        colorScale={colorScale}
                        parseDate={parseDate}
                        yScaleRight={yScaleRight}
                        seriesAxis={seriesAxis}
                        key={`isolated-circle-${dataIndex}`}
                      />
                    </React.Fragment>
                  )
                )
              })}

              {/* SPLIT LINE */}
              {isSplitLine ? (
                <>
                  <SplitLinePath
                    curve={allCurves[seriesData.lineType]}
                    segments={_data.map(d => [d])}
                    segmentation='x'
                    x={d => xPos(d)}
                    y={d =>
                      seriesAxis === 'Right'
                        ? yScaleRight(getYAxisData(d, _seriesKey))
                        : yScale(Number(getYAxisData(d, _seriesKey)))
                    }
                    styles={createStyles({
                      preliminaryData: config.preliminaryData,
                      data: tableData,
                      stroke: colorScale(config.runtime.seriesLabels[seriesKey]),
                      strokeWidth: seriesData.weight || 2,
                      handleLineType,
                      lineType,
                      seriesKey,
                      dynamicCategory: seriesData.dynamicCategory,
                      originalSeriesKey: _seriesKey
                    })}
                    defined={(item, i) => {
                      return item[_seriesKey] !== '' && item[_seriesKey] !== null && item[_seriesKey] !== undefined
                    }}
                  />

                  {suppressedSegments.map((segment, index) => {
                    return Object.entries(segment.data).map(([key, value], entryIndex) => {
                      return (
                        <LinePath
                          key={`${index}-${key}-${entryIndex}`}
                          data={value}
                          x={d => xPos(d)}
                          y={d =>
                            seriesAxis === 'Right'
                              ? yScaleRight(getYAxisData(d, _seriesKey))
                              : yScale(Number(getYAxisData(d, _seriesKey)))
                          }
                          stroke={
                            seriesData.dynamicCategory
                              ? segment.color
                              : colorScale(config.runtime.seriesLabels[seriesKey])
                          }
                          strokeWidth={seriesData[0]?.weight || 2}
                          strokeOpacity={1}
                          shapeRendering='geometricPrecision'
                          strokeDasharray={handleLineType(segment.style)}
                          defined={(item, i) => {
                            return (
                              item[_seriesKey] !== '' && item[_seriesKey] !== null && item[_seriesKey] !== undefined
                            )
                          }}
                        />
                      )
                    })
                  })}
                </>
              ) : (
                <>
                  {/* Confidence Interval Band */}
                  {config.confidenceKeys &&
                    config.series.map((seriesData, seriesKey) => {
                      if (seriesData.dynamicCategory) {
                        // Get unique categories from the data
                        const uniqueCategories = [...new Set(data.map(d => d[seriesData.dynamicCategory]))]

                        return uniqueCategories.map((category, categoryIndex) => {
                          const categoryData = data.filter(d => d[seriesData.dynamicCategory] === category)

                          return (
                            <AreaClosed
                              key={`area-closed-${seriesKey}-${categoryIndex}`}
                              className='confidence-interval'
                              data={categoryData}
                              x={d => xPos(d)}
                              y0={d => yScale(d[config.confidenceKeys.lower])} // Lower bound of the confidence interval
                              y1={d => yScale(d[config.confidenceKeys.upper])} // Upper bound of the confidence interval
                              opacity={0.5}
                              fill={colorScale(category)} // Optional: Color based on category
                              yScale={yScale}
                              curve={allCurves[seriesData.lineType as keyof typeof allCurves]}
                            />
                          )
                        })
                      }

                      // Default behavior for non-dynamic categories
                      return (
                        <AreaClosed
                          key={`area-closed-${seriesKey}`}
                          data={data}
                          x={d => xPos(d)}
                          y0={d => yScale(d[config.confidenceKeys.lower])}
                          y1={d => yScale(d[config.confidenceKeys.upper])}
                          opacity={0.5}
                          fill={colorScale(
                            config.runtime.seriesLabels
                              ? config.runtime.seriesLabels[seriesData.dataKey]
                              : seriesData.dataKey
                          )}
                          yScale={yScale}
                          curve={allCurves[seriesData.lineType as keyof typeof allCurves]}
                        />
                      )
                    })}

                  {/* STANDARD LINE */}
                  <LinePath
                    curve={allCurves[seriesData.lineType]}
                    data={
                      config.visualizationType == 'Bump Chart'
                        ? _data
                        : config.xAxis.type === 'date-time' || config.xAxis.type === 'date'
                        ? _data.sort((d1, d2) => {
                            let x1 = getXAxisData(d1)
                            let x2 = getXAxisData(d2)
                            if (x1 < x2) return -1
                            if (x2 < x1) return 1
                            return 0
                          })
                        : _data
                    }
                    x={d => xPos(d)}
                    y={d =>
                      seriesAxis === 'Right'
                        ? yScaleRight(getYAxisData(d, _seriesKey))
                        : yScale(Number(getYAxisData(d, _seriesKey)))
                    }
                    stroke={colorScale(config.runtime.seriesLabels[seriesKey])}
                    strokeWidth={seriesData.weight || 2}
                    strokeOpacity={1}
                    shapeRendering='geometricPrecision'
                    strokeDasharray={lineType ? handleLineType(lineType) : 0}
                    defined={(item, i) => {
                      return item[_seriesKey] !== '' && item[_seriesKey] !== null && item[_seriesKey] !== undefined
                    }}
                  />
                </>
              )}

              {/* circles for preliminaryData data */}
              {circleData.map((item, i) => {
                return (
                  <circle
                    key={i}
                    cx={xPos(item.data)}
                    cy={
                      seriesAxis === 'Right'
                        ? yScaleRight(getYAxisData(item.data, _seriesKey))
                        : yScale(Number(getYAxisData(item.data, _seriesKey)))
                    }
                    r={item.size}
                    strokeWidth={seriesData.weight || 2}
                    stroke={colorScale ? colorScale(config.runtime.seriesLabels[seriesKey]) : '#000'}
                    fill={
                      item.isFilled
                        ? colorScale
                          ? colorScale(config.runtime.seriesLabels[seriesKey])
                          : '#000'
                        : '#fff'
                    }
                  />
                )
              })}

              {/* ANIMATED LINE */}
              {config.animate && (
                <LinePath
                  className='animation'
                  curve={allCurves[seriesData.lineType]}
                  data={_data}
                  x={d => xPos(d)}
                  y={d =>
                    seriesAxis === 'Right'
                      ? yScaleRight(getYAxisData(d, _seriesKey))
                      : yScale(Number(getYAxisData(d, _seriesKey)))
                  }
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
                  for (let i = _data.length - 1; i >= 0; i--) {
                    if (_data[i][seriesKey]) {
                      lastDatum = _data[i]
                      break
                    }
                  }
                  if (!lastDatum || legend.position === 'right') {
                    return <></>
                  }

                  let labelText = config.runtime.seriesLabels[seriesKey] || seriesKey
                  // truncate labels longer that 10 chars
                  const ellipsis = '...'
                  if (labelText.length > 10) {
                    labelText = labelText.substring(0, 10) + ellipsis
                  }

                  return (
                    <Text
                      display={
                        legend.behavior === 'highlight' ||
                        (seriesHighlight.length === 0 && !legend.dynamicLegend) ||
                        seriesHighlight.indexOf(seriesKey) !== -1
                          ? 'block'
                          : 'none'
                      }
                      x={xPos(lastDatum) + 5}
                      y={yScale(getYAxisData(lastDatum, seriesKey))}
                      alignmentBaseline='middle'
                      fill={colorScale(config.runtime.seriesLabels[seriesKey] || seriesKey)}
                    >
                      {labelText}
                    </Text>
                  )
                })}
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
      <Group left={Number(config.runtime.yAxis.size)} className='glyph-tooltip-group'>
        <Group key={`tooltip-group`} display={'block'}>
          {/* tooltips */}
          <Bar
            key={'tooltip bars'}
            width={Number(xMax)}
            height={Number(yMax)}
            fill={DEBUG ? 'red' : 'transparent'}
            fillOpacity={0.05}
            onMouseMove={e => {
              if (showSingleSeries) return
              handleTooltipMouseOver(e, tableData)
            }}
            onMouseOut={handleTooltipMouseOff}
          />
          {tooltipPoints.map((d, dataIndex) => {
            const { _data, seriesKey, seriesIndex, color } = d
            return (
              <React.Fragment key={`series-${seriesKey}-point-${dataIndex}`}>
                <LineChartCircle
                  mode='TOOLTIP_POINTS'
                  dataIndex={dataIndex}
                  tooltipPoint={d}
                  tableData={tableData}
                  data={_data}
                  d={d}
                  config={config}
                  seriesKey={seriesKey}
                  displayArea={true}
                  tooltipData={tooltipData}
                  xScale={xScale}
                  yScale={yScale}
                  colorScale={colorScale}
                  parseDate={parseDate}
                  yScaleRight={yScaleRight}
                  seriesAxis={'[circle]'}
                  seriesIndex={seriesIndex}
                  key={`line-circle--${dataIndex}`}
                  handleTooltipMouseOver={handleTooltipMouseOver}
                  handleTooltipMouseOff={handleTooltipMouseOff}
                />
              </React.Fragment>
            )
          })}
        </Group>
      </Group>
      {config.visualizationType === 'Bump Chart' && (
        <LineChartBumpCircle config={config} xScale={xScale} yScale={yScale} />
      )}
    </ErrorBoundary>
  )
}

export default LineChart
