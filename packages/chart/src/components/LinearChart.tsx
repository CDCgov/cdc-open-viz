import React, { Fragment, useContext, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { Group } from '@visx/group';
import { Line } from '@visx/shape';
import { Text } from '@visx/text';
import { scaleLinear, scalePoint } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';

import BarChart from './BarChart';
import LineChart from './LineChart';
import Context from '../context';
import PairedBarChart from './PairedBarChart';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import '../scss/LinearChart.scss';
import useReduceData from '../hooks/useReduceData';

export default function LinearChart() {
  const { transformedData: data, dimensions, config, parseDate, formatDate, currentViewport } = useContext<any>(Context);
  let [ width ] = dimensions;
  const {minValue,maxValue} = useReduceData(config,data)
  if(config && config.legend && !config.legend.hide && (currentViewport === 'lg' || currentViewport === 'md')) {
    width = width * 0.73;
  }

  const height = config.aspectRatio ? (width * config.aspectRatio) : config.height;

  const xMax = width - config.runtime.yAxis.size;
  const yMax = height - config.runtime.xAxis.size;

  const getXAxisData = (d: any) => config.runtime.xAxis.type === 'date' ? (parseDate(d[config.runtime.originalXAxis.dataKey])).getTime() : d[config.runtime.originalXAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  let xScale;
  let yScale;
  let seriesScale;

  if (data) {
    let min = config.runtime.yAxis.min !== undefined ? config.runtime.yAxis.min : minValue
    let max = config.runtime.yAxis.max !== undefined ? config.runtime.yAxis.max : Number.MIN_VALUE;

    if((config.visualizationType === 'Bar' || config.visualizationType === 'Combo') && min > 0) {
      min = 0;
    }
    //If data value max wasn't provided, calculate it
    if(max === Number.MIN_VALUE){
     max = maxValue
    }
    
    //Adds Y Axis data padding if applicable
    if(config.runtime.yAxis.paddingPercent) {
      let paddingValue = (max - min) * config.runtime.yAxis.paddingPercent;
      min -= paddingValue;
      max += paddingValue;
    }

    let xAxisDataMapped = data.map(d => getXAxisData(d));

    if (config.isLollipopChart && config.yAxis.displayNumbersOnBar) {
      const dataKey = data.map((item) => item[config.series[0].dataKey]);
      const maxDataVal = Math.max(...dataKey).toString().length;

      switch (true) {
        case maxDataVal > 8 && maxDataVal <= 12:
          max = max * 1.3;
          break;
        case maxDataVal > 4 && maxDataVal <= 7:
          max = max * 1.1;
          break;
      }
    }

      if (config.runtime.horizontal) {
        xScale = scaleLinear<number>({
          domain: [min, max],
          range: [0, xMax],
        });

        yScale =
          config.runtime.xAxis.type === "date"
            ? scaleLinear<number>({
                domain: [
                  Math.min(...xAxisDataMapped),
                  Math.max(...xAxisDataMapped),
                ],
              })
            : scalePoint<string>({ domain: xAxisDataMapped, padding: 0.5 });

        seriesScale = scalePoint<string>({
          domain: config.runtime.barSeriesKeys || config.runtime.seriesKeys,
          range: [0, yMax],
        });

        yScale.rangeRound([0, yMax]);
      } else {
        min = min < 0 ? min * 1.11 : min;

        yScale = scaleLinear<number>({
          domain: [min, max],
          range: [yMax, 0],
        });

        xScale = scalePoint<string>({
          domain: xAxisDataMapped,
          range: [0, xMax],
          padding: 0.5,
        });

        seriesScale = scalePoint<string>({
          domain: config.runtime.barSeriesKeys || config.runtime.seriesKeys,
          range: [0, xMax],
        });
      }

      
    if(config.visualizationType === 'Paired Bar') {
      

    let groupOneMax = Math.max.apply(Math, data.map(d => d[config.series[0].dataKey]))
    let groupTwoMax = Math.max.apply(Math, data.map(d => d[config.series[1].dataKey]))

    // group one
    var g1xScale = scaleLinear<number>({
      domain: [0, Math.max(groupOneMax,groupTwoMax) ],
      range: [xMax/2, 0]
    })
  
    // group 2
    var g2xScale = scaleLinear<number>({
      domain: g1xScale.domain(),
      range: [xMax / 2, xMax]
    })

    }
  }

  

  useEffect(() => {
    ReactTooltip.rebuild();
  });


  return (
    <ErrorBoundary component="LinearChart">
      <svg width={width} height={height} className="linear">
          {/* Higlighted regions */}
          { config.regions ? config.regions.map((region) => {
            if(!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return null

            const from = xScale((parseDate(region.from)).getTime());
            const to = xScale((parseDate(region.to)).getTime());
            const width = to - from;

            return (
              <Group className="regions" left={config.runtime.yAxis.size} key={region.label}>
                <path stroke="#333" d={`M${from} -5
                          L${from} 5
                          M${from} 0
                          L${to} 0
                          M${to} -5
                          L${to} 5`} />
                <rect
                  x={from}
                  y={0}
                  width={width}
                  height={yMax}
                  fill={region.background}
                  opacity={0.3} />
                <Text
                  x={from + (width / 2)}
                  y={5}
                  fill={region.color}
                  verticalAnchor="start"
                  textAnchor="middle">
                    {region.label}
                </Text>
              </Group>
            )
          }) : '' }

          {/* Y axis */}
            <AxisLeft
            scale={yScale}
            left={config.runtime.yAxis.size}
            label={config.runtime.yAxis.label}
            stroke="#333"
            numTicks={config.runtime.yAxis.numTicks || undefined}
          >
            {props => {
              const lollipopShapeSize = config.lollipopSize === 'large' ? 14 : config.lollipopSize === 'medium' ? 12 : 10;
              const axisCenter = config.runtime.horizontal ? (props.axisToPoint.y - props.axisFromPoint.y) / 2 : (props.axisFromPoint.y - props.axisToPoint.y) / 2;
              const horizontalTickOffset = yMax / props.ticks.length / 2 - (yMax / props.ticks.length * (1 - config.barThickness)) + 5;
              const belowBarPaddingFromTop = 9;
              return ( 
                <Group className="left-axis">
                  {props.ticks.map((tick, i) => {
                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        {!config.runtime.yAxis.hideTicks && (
                          <Line
                            from={tick.from}
                            to={tick.to}
                            stroke="#333"
                            display={config.runtime.horizontal ? 'none' : 'block'}
                          />
                        )}
                        
                        { config.runtime.yAxis.gridLines ? (
                          <Line
                            from={{x: tick.from.x + xMax, y: tick.from.y}}
                            to={tick.from}
                            stroke="rgba(0,0,0,0.3)"
                          />
                          ) : ''
                        }

                        {( config.orientation === "horizontal" && config.visualizationSubType !== 'stacked') && (config.yAxis.labelPlacement === 'On Date/Category Axis' ) && !config.yAxis.hideLabel &&
                            // 17 is a magic number from the offset in barchart.
                            <Fragment> 
                            <Text
                              transform={`translate(${tick.to.x - 5}, ${ config.isLollipopChart  ?  tick.from.y  : tick.from.y  - 17 }) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation : 0})`}
                              verticalAnchor={ config.isLollipopChart ? "middle" : "middle"}
                              textAnchor={"end"}
                            >{tick.formattedValue}</Text>
                             </Fragment>
                        }

                        { (config.orientation === "horizontal" && config.visualizationSubType === 'stacked') && (config.yAxis.labelPlacement === 'On Date/Category Axis' ) && !config.yAxis.hideLabel &&
                            // 17 is a magic number from the offset in barchart.
                            <Text
                              transform={`translate(${tick.to.x - 5}, ${ tick.from.y - config.barHeight / 2 - 3 }) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation : 0})`}
                              verticalAnchor={ config.isLollipopChart ? "middle" : "middle"}
                              textAnchor={"end"}
                            >{tick.formattedValue}</Text>
                        }

                        { (config.orientation === "horizontal" && config.visualizationType === 'Paired Bar') && !config.yAxis.hideLabel &&
                            // 17 is a magic number from the offset in barchart.
                            <Text
                              transform={`translate(${-15}, ${ tick.from.y }) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation : 0})`}
                              verticalAnchor={ config.isLollipopChart ? "middle" : "middle"}
                              textAnchor={"end"}
                            >{tick.formattedValue}</Text>
                        }


                        { config.orientation !== "horizontal" && config.visualizationType !== 'Paired Bar' && !config.yAxis.hideLabel &&
                            <Text
                              x={config.runtime.horizontal ? tick.from.x + 2 : tick.to.x}
                              y={tick.to.y + (config.runtime.horizontal ? horizontalTickOffset : 0)}
                              verticalAnchor={config.runtime.horizontal ? "start" : "middle"}
                              textAnchor={config.runtime.horizontal ? 'start' : 'end'}
                            >
                              {tick.formattedValue}
                            </Text>
                        }

                      </Group>
                    );
                  })}
                  { (!config.yAxis.hideAxis) && (
                  <Line
                    from={props.axisFromPoint}
                    to={props.axisToPoint}
                    stroke="#333"
                  />
                  )}
                  { yScale.domain()[0] < 0 && (
                    <Line
                      from={{x: props.axisFromPoint.x, y: yScale(0)}}
                      to={{x: xMax, y: yScale(0)}}
                      stroke="#333"
                    />
                  )}
                  <Text
                    className="y-label"
                    textAnchor="middle"
                    verticalAnchor="start"
                    transform={`translate(${-1 * config.runtime.yAxis.size}, ${axisCenter}) rotate(-90)`}
                    fontWeight="bold"
                  >
                    {props.label}
                  </Text>
                </Group>
              );
            }}
          </AxisLeft>

          {/* X axis */}
          {config.visualizationType !== 'Paired Bar' && (
          <AxisBottom
            top={yMax}
            left={config.runtime.yAxis.size}
            label={config.runtime.xAxis.label}
            tickFormat={config.runtime.xAxis.type === 'date' ? formatDate : (tick) => tick}
            scale={xScale}
            stroke="#333"
            tickStroke="#333"
            numTicks={config.runtime.xAxis.numTicks || undefined}
          >
            {props => {
              const axisCenter = (props.axisToPoint.x - props.axisFromPoint.x) / 2;
              return (
                <Group className="bottom-axis">
                  {props.ticks.map((tick, i) => {
                    const tickWidth = xMax / props.ticks.length;
                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        {!config.xAxis.hideTicks && (
                        <Line
                          from={tick.from}
                          to={tick.to}
                          stroke="#333"
                        />
                        )}
                        {!config.xAxis.hideLabel && (
                        <Text
                          transform={`translate(${tick.to.x}, ${tick.to.y}) rotate(-${!config.runtime.horizontal ? config.runtime.xAxis.tickRotation : 0})`}
                          verticalAnchor="start"
                          textAnchor={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? 'end' : 'middle'}
                          width={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? undefined : tickWidth}
                        >
                          {tick.formattedValue}
                        </Text>
                        )}

                      </Group>
                    );
                  })}
                  {!config.xAxis.hideAxis && (
                  <Line
                    from={props.axisFromPoint}
                    to={props.axisToPoint}
                    stroke="#333"
                  />
                  )}
                  <Text
                    x={axisCenter}
                    y={config.runtime.xAxis.size}
                    textAnchor="middle"
                    verticalAnchor="end"
                    fontWeight="bold"
                  >
                    {props.label}
                  </Text>
                </Group>
              );
            }}
          </AxisBottom>
          )}

          {config.visualizationType === 'Paired Bar' &&
          <>
          <AxisBottom
            top={yMax}
            left={config.runtime.yAxis.size}
            label={config.runtime.xAxis.label}
            tickFormat={config.runtime.xAxis.type === 'date' ? formatDate : (tick) => tick}
            scale={g1xScale}
            stroke="#333"
            tickStroke="#333"
            numTicks={config.runtime.xAxis.numTicks || undefined}
          >
            {props => {
              const axisCenter = (props.axisToPoint.x - props.axisFromPoint.x) / 2;
              return (
                <Group className="bottom-axis">
                  {props.ticks.map((tick, i) => {
                    const tickWidth = xMax / props.ticks.length;
                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        {!config.runtime.yAxis.hideTicks &&
                          <Line
                            from={tick.from}
                            to={tick.to}
                            stroke="#333"
                          />
                        }
                        {!config.runtime.yAxis.hideLabel &&
                          <Text
                            transform={`translate(${tick.to.x}, ${tick.to.y}) rotate(-${60})`}
                            verticalAnchor="start"
                            textAnchor={'end'}
                            width={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? undefined : tickWidth}
                          >
                            {config.dataFormat.commas ? tick.formattedValue.toLocaleString() : tick.formattedValue}
                          </Text>
                      }
                      </Group>
                    );
                  })}
                  {!config.runtime.yAxis.hideAxis &&
                    <Line
                      from={props.axisFromPoint}
                      to={props.axisToPoint}
                      stroke="#333"
                    />
                  }
                </Group>
              );
            }}
          </AxisBottom>
          <AxisBottom
            top={yMax}
            left={config.runtime.yAxis.size}
            label={config.runtime.xAxis.label}
            tickFormat={config.runtime.xAxis.type === 'date' ? formatDate : (tick) => tick}
            scale={g2xScale}
            stroke="#333"
            tickStroke="#333"
            numTicks={config.runtime.xAxis.numTicks || undefined}
          >
            {props => {
              const axisCenter = (props.axisToPoint.x - props.axisFromPoint.x) / 2;
              return (
                <>
                <Group className="bottom-axis">
                  {props.ticks.map((tick, i) => {
                    const tickWidth = xMax / props.ticks.length;
                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        {!config.runtime.yAxis.hideTicks &&
                          <Line
                            from={tick.from}
                            to={tick.to}
                            stroke="#333"
                          />
                        }
                        {!config.runtime.yAxis.hideLabel &&
                          <Text
                            transform={`translate(${tick.to.x}, ${tick.to.y}) rotate(-${60})`}
                            verticalAnchor="start"
                            textAnchor={'end'}
                            width={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? undefined : tickWidth}
                          >
                            {config.dataFormat.commas ? tick.formattedValue.toLocaleString() : tick.formattedValue}
                          </Text>
                        }
                      </Group>
                    );
                  })}
                  {!config.runtime.yAxis.hideAxis &&
                    <Line
                      from={props.axisFromPoint}
                      to={props.axisToPoint}
                      stroke="#333"
                    />
                  }
                </Group>
                  <Group>
                      <Text
                        transform={`translate(${xMax/2}, ${config.height - yMax + 20}) rotate(-${0})`}
                        verticalAnchor="start"
                        textAnchor={'middle'}
                        stroke="#333"
                      >
                      {config.runtime.yAxis.label}
                    </Text>
                  </Group>
                </>
              );
            }}
          </AxisBottom>
          </>
          }
          { config.visualizationType === 'Paired Bar' && (
            <PairedBarChart  width={xMax} height={yMax} />
          ) }
          
          {/* Bar chart */}
          { (config.visualizationType !== 'Line' && config.visualizationType !== 'Paired Bar') && (
            <BarChart xScale={xScale} yScale={yScale} seriesScale={seriesScale} xMax={xMax} yMax={yMax} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />
          )}

          {/* Line chart */}
          { (config.visualizationType !== 'Bar' && config.visualizationType !== 'Paired Bar') && (
            <LineChart xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />
          )}
      </svg>
      <ReactTooltip id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`} html={true} type="light" arrowColor="rgba(0,0,0,0)" className="tooltip"/>
    </ErrorBoundary>
  )
}
