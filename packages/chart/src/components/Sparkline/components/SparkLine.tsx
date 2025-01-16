import React, { useContext } from 'react'
import * as allCurves from '@visx/curve'
import { Group } from '@visx/group'
import { LinePath } from '@visx/shape'
import { Text } from '@visx/text'
import { scaleLinear, scalePoint } from '@visx/scale'
import { AxisBottom } from '@visx/axis'
import { MarkerArrow } from '@visx/marker'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import useReduceData from '../../../hooks/useReduceData'
import ConfigContext from '../../../ConfigContext'
import { getYAxisData, getXAxisData } from '../../../helpers/getAxisData'

import './../index.scss'

type SparkLineProps = {
  width: string | number
  height: string | number
}

const SparkLine: React.FC<SparkLineProps> = props => {
  const { width: parentWidth, height: parentHeight } = props
  const {
    transformedData: data,
    config,
    parseDate,
    formatDate,
    seriesHighlight,
    formatNumber,
    colorScale,
    handleChartAriaLabels
  } = useContext(ConfigContext)
  let width = Number(parentWidth)
  const { minValue, maxValue } = useReduceData(config, data, ConfigContext)

  const margin = { top: 5, right: 10, bottom: 10, left: 10 }
  const height = Number(parentHeight)

  const xMax = width - config.runtime.yAxis.size
  const yMax = height - margin.top - 20

  let xScale
  let yScale
  let seriesScale
  const { max: enteredMaxValue, min: enteredMinValue } = config.runtime.yAxis
  const isMaxValid = Number(enteredMaxValue) >= Number(maxValue)
  const isMinValid = Number(enteredMinValue) <= Number(minValue)

  if (data) {
    let min = enteredMinValue && isMinValid ? Number(enteredMinValue) : Number(minValue)
    let max = enteredMaxValue && isMaxValid ? Number(enteredMaxValue) : Number(Number.MIN_VALUE)

    if (max === Number.MIN_VALUE) {
      max = maxValue
    }

    //Adds Y Axis data padding if applicable
    if (config.runtime.yAxis.paddingPercent) {
      let paddingValue = (max - min) * config.runtime.yAxis.paddingPercent
      min -= paddingValue
      max += paddingValue
    }

    let xAxisDataMapped = data.map(d => getXAxisData(d, config, parseDate))

    if (config.runtime.horizontal) {
      xScale = scaleLinear({
        domain: [min, max],
        range: [0, xMax]
      })

      yScale =
        config.runtime.xAxis.type === 'date'
          ? scaleLinear({ domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)] })
          : scalePoint({ domain: xAxisDataMapped, padding: 0.5 })

      seriesScale = scalePoint({
        domain: config.runtime.barSeriesKeys || config.runtime.seriesKeys,
        range: [0, yMax]
      })

      yScale.rangeRound([0, yMax])
    } else {
      min = min < 0 ? min * 1.11 : min

      yScale = scaleLinear({
        domain: [min, max],
        range: [yMax - margin.bottom, margin.top]
      })

      xScale = scalePoint({
        domain: xAxisDataMapped,
        range: [margin.left, width - margin.right]
      })

      // eslint-disable-next-line
      seriesScale = scalePoint({
        domain: config.runtime.barSeriesKeys || config.runtime.seriesKeys,
        range: [0, xMax]
      })
    }
  }

  const handleSparkLineTicks = [xScale.domain()[0], xScale.domain()[xScale.domain().length - 1]]

  return (
    <ErrorBoundary component='SparkLine'>
      <svg
        role='img'
        aria-label={handleChartAriaLabels(config)}
        width={parentWidth}
        height={100}
        className={'sparkline'}
        tabIndex={0}
      >
        <title>{`Spark line graphic with the title ${config.title ? config.title : 'No Title Found'}`}</title>
        {config.runtime.lineSeriesKeys?.length > 0
          ? config.runtime.lineSeriesKeys
          : config.runtime.seriesKeys.map((seriesKey, index) => (
              <>
                <Group
                  style={{ width }}
                  className='sparkline-group'
                  key={`series-${seriesKey}`}
                  opacity={
                    config.legend.behavior === 'highlight' &&
                    seriesHighlight.length > 0 &&
                    seriesHighlight.indexOf(seriesKey) === -1
                      ? 0.5
                      : 1
                  }
                  display={
                    config.legend.behavior === 'highlight' ||
                    seriesHighlight.length === 0 ||
                    seriesHighlight.indexOf(seriesKey) !== -1
                      ? 'block'
                      : 'none'
                  }
                >
                  {config.labels &&
                    data.map((d, dataIndex) => {
                      return (
                        <Group key={`series-${seriesKey}-point-${dataIndex}`}>
                          <Text
                            x={xScale(getXAxisData(d, config, parseDate))}
                            y={yScale(getYAxisData(d, seriesKey))}
                            fill={
                              colorScale
                                ? colorScale(
                                    config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey
                                  )
                                : '#000'
                            }
                            textAnchor='middle'
                          >
                            {formatNumber(d[seriesKey])}
                          </Text>
                        </Group>
                      )
                    })}
                  <LinePath
                    curve={allCurves.curveLinear}
                    data={data}
                    x={d => xScale(getXAxisData(d, config, parseDate))}
                    y={d => yScale(getYAxisData(d, seriesKey))}
                    stroke={
                      colorScale
                        ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey)
                        : '#000'
                    }
                    strokeWidth={2}
                    strokeOpacity={1}
                    shapeRendering='geometricPrecision'
                    markerEnd={`url(#${'arrow'}--${index})`}
                  />
                  <MarkerArrow
                    id={`arrow--${index}`}
                    refX={2}
                    size={6}
                    markerEnd={`url(#${'arrow'}--${index})`}
                    strokeOpacity={1}
                    fillOpacity={1}
                    fill={
                      colorScale
                        ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey)
                        : '#000'
                    }
                  />
                </Group>
                <AxisBottom
                  top={yMax + margin.top}
                  hideAxisLine
                  hideTicks
                  scale={xScale}
                  tickValues={handleSparkLineTicks}
                  tickFormat={tick => (config.xAxis.type === 'date' ? formatDate(tick) : null)}
                  stroke={'black'}
                  tickStroke={'black'}
                  tickLabelProps={() => ({
                    fill: 'black',
                    fontSize: 11,
                    textAnchor: 'middle'
                  })}
                />
              </>
            ))}
      </svg>
    </ErrorBoundary>
  )
}

export default SparkLine
