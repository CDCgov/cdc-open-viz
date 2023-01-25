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

  const handleAxisFormating = (axis = 'left', label, value) => {
    axis = String(axis).toLocaleLowerCase()
    if (label) {
      return `${label}: ${formatNumber(value, axis)}`
    }
    return `${formatNumber(value, axis)}`
  }

  const isNumberLog = value => {
    //console.log("entering isNumber valuetype is:",typeof value);
    var test = value != null && value !== '' && /[\d]/.test(value) && !Number.isNaN(value)
    // Note: value is still a string here
    // so typeof value === 'number' does not work
    if (test === false) {
      console.log('# isNUmber FALSE on value, result', value, test)
    } else {
      console.log('# isNUmber TRUE on value, result', value, test)
    }
    return value != null && value !== '' && /[\d]/.test(value) && !Number.isNaN(value)
  }

  const isNumber = value => {
    // in debugging I saw cases where inbound was a 'number'
    // and other times a 'string' so might as well take care of both here
    if (typeof value === 'number') {
      return !Number.isNaN(value)
    }
    if (typeof value === 'string') {
      return value !== null && value !== '' && /[\d]/.test(value)
    }
    return false // if we get here something is wrong so return false
  }

  const checkCy = cy => {
    //console.log("cy, type ", cy, typeof cy);
    if (isNaN(cy) || Number.isNaN(cy)) {
      return null
    }
    return cy
  }
  const logit = val => {
    console.log('val,type ', val, typeof val)
    return val
  }

  // REMOVE bad data points from the data set
  // Examples: NA, N/A, "1,234", "anystring"
  // - if you dont call this on data into LineGroup below, for example
  // then entire data series are removed because of the defined statement
  // i.e. if a series has any bad data points the entire series wont plot
  function cleanData(data) {
    let cleanedup = []
    console.log('## Data to clean=', data)
    data.forEach(function (d, i) {
      //console.log("clean", i, " d", d);
      let cleanedSeries = {}
      Object.keys(d).forEach(function (key) {
        if (key === 'Date') {
          // pass thru the dates
          cleanedSeries[key] = d[key]
        } else {
          // now check to see if it's a valid number
          if ((d[key] !== '' && d[key] !== null && !isNaN(d[key])) || /[\d]/.test(d[key])) {
            cleanedSeries[key] = d[key]
          } else {
            // leave that point out entirely
            // return nothing to omit the point
          }
        }
      })
      //console.log("cleanedSeries=", cleanedSeries);
      cleanedup.push(cleanedSeries)
    })
    console.log('## cleanedData =', cleanedup)
    return cleanedup
  }

  return (
    <ErrorBoundary component='LineChart'>
      <Group left={config.runtime.yAxis.size ? parseInt(config.runtime.yAxis.size) : 66}>
        {' '}
        {/* left - expects a number not a string */}
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
              {cleanData(data).map((d, dataIndex) => {
                // Find the series object from the config.series array that has a dataKey matching the seriesKey variable.
                const series = config.series.find(({ dataKey }) => dataKey === seriesKey)
                const { axis } = series

                const xAxisValue = config.runtime.xAxis.type === 'date' ? formatDate(parseDate(d[config.runtime.xAxis.dataKey])) : d[config.runtime.xAxis.dataKey]
                const yAxisValue = getYAxisData(d, seriesKey)

                const hasMultipleSeries = Object.keys(config.runtime.seriesLabels).length > 1
                const labeltype = axis === 'Right' ? 'rightLabel' : 'label'
                let label = config.runtime.yAxis[labeltype]
                // if has muiltiple series dont show legend value on tooltip
                if (!hasMultipleSeries) label = config.isLegendValue ? config.runtime.seriesLabels[seriesKey] : label

                let yAxisTooltip = handleAxisFormating(axis, label, yAxisValue)
                let xAxisTooltip = handleAxisFormating(axis, config.runtime.xAxis.label, xAxisValue)

                const tooltip = `<div>
                    ${config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && Object.keys(config.runtime.seriesLabels).length > 1 ? `${config.runtime.seriesLabels[seriesKey] || ''}<br/>` : ''}
                    ${yAxisTooltip}<br />
                    ${xAxisTooltip}
                  </div>`
                let circleRadii = 4.5
                //console.log("d[seriesKey]", d[seriesKey]);
                //console.log("getYAxisData(d, seriesKey)", getYAxisData(d, seriesKey));
                //console.log("getXAxisData(d))",getXAxisData(d));
                return (
                  d[seriesKey] !== undefined &&
                  d[seriesKey] !== '' &&
                  d[seriesKey] !== null &&
                  isNumber(d[seriesKey]) &&
                  isNumber(getYAxisData(d, seriesKey)) &&
                  isNumber(getXAxisData(d)) &&
                  isNumber(yScaleRight(getXAxisData(d))) &&
                  isNumber(yScale(getXAxisData(d))) && (
                    <Group key={`series-${seriesKey}-point-${dataIndex}`}>
                      {/* Render legend */}
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
                        cx={Number(xScale(getXAxisData(d)))}
                        //cy={4}
                        cy={seriesAxis === 'Right' ? checkCy(yScaleRight(getYAxisData(d, seriesKey))) : checkCy(yScale(getYAxisData(d, seriesKey)))}
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
                data={cleanData(data)}
                x={d => xScale(getXAxisData(d))}
                //y={1}
                //y={d => (seriesAxis === 'Right' ? logit(yScaleRight(getYAxisData(d, seriesKey))) : logit(yScale(getYAxisData(d, seriesKey))))}
                //y={d => (seriesAxis === 'Right' && isNumber(yScaleRight(getYAxisData(d, seriesKey))) && isNumber(yScale(getYAxisData(d, seriesKey))) ? logit(yScaleRight(getYAxisData(d, seriesKey))) : logit(yScale(getYAxisData(d, seriesKey))))}
                y={d => (seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey)))}
                /*                 y={d => {
                  if (seriesAxis === 'Right' && isNumber(yScaleRight(getYAxisData(d, seriesKey)))) {
                    return logit(yScaleRight(getYAxisData(d, seriesKey)))
                  } else if (seriesAxis !== 'Right' && isNumber(yScale(getYAxisData(d, seriesKey)))) {
                    return logit(yScale(getYAxisData(d, seriesKey)))
                  } else {
                    return null
                  }
                }} */
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
                // this is needed to get the non-numerics to not break the chart
                // - but if you add isNumber here and remove cleanedData above
                // it will fail
                defined={(item, i) => {
                  return logit(item[config.runtime.seriesLabels[seriesKey]]) !== '' && item[config.runtime.seriesLabels[seriesKey]] !== null && item[config.runtime.seriesLabels[seriesKey]] !== undefined
                }}
              />
              {config.animate && (
                <LinePath
                  className='animation'
                  curve={allCurves.curveLinear}
                  data={cleanData(data)}
                  x={d => xScale(getXAxisData(d))}
                  //y={d => (seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey)))}
                  y={d => {
                    if (seriesAxis === 'Right' && isNumber(yScaleRight(getYAxisData(d, seriesKey)))) {
                      return yScaleRight(getYAxisData(d, seriesKey))
                    } else if (seriesAxis !== 'Right' && isNumber(yScale(getYAxisData(d, seriesKey)))) {
                      return logit(yScale(getYAxisData(d, seriesKey)))
                    } else {
                      return null
                    }
                  }}
                  stroke='#fff'
                  strokeWidth={3}
                  strokeOpacity={1}
                  shapeRendering='geometricPrecision'
                  strokeDasharray={lineType ? handleLineType(lineType) : 0}
                  defined={(item, i) => {
                    return isNumber(item[config.runtime.seriesLabels[seriesKey]])
                  }}
                />
              )}

              {/* Render series labels at end if each line if selected in the editor */}
              {config.showLineSeriesLabels &&
                (config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map(seriesKey => {
                  let lastDatum
                  for (let i = data.length - 1; i >= 0; i--) {
                    if (data[i][seriesKey]) {
                      lastDatum = data[i]
                      break
                    }
                  }
                  if (!lastDatum) {
                    lastDatum = data[data.length - 1]
                  }
                  return (
                    <text x={xScale(getXAxisData(lastDatum)) + 5} y={yScale(getYAxisData(lastDatum, seriesKey))} alignmentBaseline='middle' fill={config.colorMatchLineSeriesLabels && colorScale ? colorScale(config.runtime.seriesLabels[seriesKey] || seriesKey) : 'black'}>
                      {config.runtime.seriesLabels[seriesKey] || seriesKey}
                    </text>
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
    </ErrorBoundary>
  )
}
