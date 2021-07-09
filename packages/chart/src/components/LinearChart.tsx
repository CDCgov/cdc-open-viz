import React, { useContext, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { Group } from '@visx/group';
import { Line } from '@visx/shape';
import { Text } from '@visx/text'; 
import { scaleLinear, scalePoint } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';

import BarChart from './BarChart';
import LineChart from './LineChart';
import Context from '../context';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import '../scss/LinearChart.scss';

export default function LinearChart() {
  const { data, dimensions, config, parseDate, formatDate, currentViewport } = useContext<any>(Context);
  let [ width ] = dimensions;

  if(config && config.legend && !config.legend.hide && (currentViewport === 'lg' || currentViewport === 'md')) {
    width = width * 0.73;
  }

  const height = config.aspectRatio ? (width * config.aspectRatio) : config.height;

  const xMax = width - config.runtime.yAxis.size - config.padding.left - config.padding.right;
  const yMax = height - config.runtime.xAxis.size;

  const getXAxisData = (d: any) => config.runtime.xAxis.type === 'date' ? (parseDate(d[config.runtime.originalXAxis.dataKey])).getTime() : d[config.runtime.originalXAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  let xScale;
  let yScale;
  let seriesScale;

  if (data) {
    let min = config.runtime.yAxis.min !== undefined ? config.runtime.yAxis.min : Math.min(...data.map((d) => Math.min(...config.runtime.seriesKeys.map((key) => Number(d[key])))));
    let max = config.runtime.yAxis.max !== undefined ? config.runtime.yAxis.max : Number.MIN_VALUE;

    if((config.visualizationType === 'Bar' || config.visualizationType === 'Combo') && min > 0) {
      min = 0;
    }

    //If data value max wasn't provided, calculate it
    if(max === Number.MIN_VALUE){
      //If stacked bar, add together y values to get max, otherwise map data to find max
      if (config.visualizationType === 'Bar' && config.visualizationSubType === 'stacked') {
        const yTotals = data.reduce((allTotals, xValue) => {
          const totalYValues = config.runtime.seriesKeys.reduce((yTotal, k) => {
            yTotal += Number(xValue[k]);
            return yTotal;
          }, 0);
          allTotals.push(totalYValues);
          if(totalYValues > max){
            max = totalYValues;
          }
          return allTotals;
        }, [] as number[]);

        max = Math.max(...yTotals);
      } else if(config.visualizationType === 'Bar' && config.confidenceKeys && config.confidenceKeys.upper) {
        max = Math.max(...data.map((d) => Number(d[config.confidenceKeys.upper])));
      } else {
        max = Math.max(...data.map((d) => Math.max(...config.runtime.seriesKeys.map((key) => Number(d[key])))));
      }
    }

    //Adds Y Axis data padding if applicable
    if(config.runtime.yAxis.paddingPercent) { 
      let paddingValue = (max - min) * config.runtime.yAxis.paddingPercent;
      min -= paddingValue;
      max += paddingValue;
    }

    let xAxisDataMapped = data.map(d => getXAxisData(d));

    if(config.runtime.horizontal){
      xScale = scaleLinear<number>({
        domain: [min, max],
        range: [0, xMax]
      });

      yScale = config.runtime.xAxis.type === 'date' ? 
        scaleLinear<number>({domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)]}) : 
        scalePoint<string>({domain: xAxisDataMapped, padding: 0.5});

      seriesScale = scalePoint<string>({
        domain: (config.runtime.barSeriesKeys || config.runtime.seriesKeys),
        range: [0, yMax]
      });

      yScale.rangeRound([0, yMax]);
    } else {
      xScale = config.xAxis.type >= 1 ? 
        scaleLinear<number>({
          domain: [Math.min(...xAxisDataMapped), 
          Math.max(...xAxisDataMapped)], 
          range: [0, xMax],
        }) : 
        scalePoint<string>({domain: xAxisDataMapped, range: [0, xMax], padding: 0.5});

      yScale = scaleLinear<number>({
        domain: [min, max],
        range: [yMax, 0]
      });

      xScale = scalePoint<string>({domain: xAxisDataMapped, range: [0, xMax], padding: 0.5});

      seriesScale = scalePoint<string>({
        domain: (config.runtime.barSeriesKeys || config.runtime.seriesKeys),
        range: [0, xMax]
      });
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
              const axisCenter = (props.axisFromPoint.y - props.axisToPoint.y) / 2;
              const horizontalTickOffset = yMax / props.ticks.length / 2 - (yMax / props.ticks.length * (1 - config.barThickness)) + 5;
              return (
                <Group className="left-axis">
                  {props.ticks.map((tick, i) => {
                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        <Line
                          from={tick.from}
                          to={tick.to}
                          stroke="#333"
                          display={config.runtime.horizontal ? 'none' : 'block'}
                        />
                        { config.runtime.yAxis.gridLines ? (
                          <Line
                            from={{x: tick.from.x + xMax, y: tick.from.y}}
                            to={tick.from}
                            stroke="rgba(0,0,0,0.3)"
                          />
                          ) : ''
                        }
                        <Text
                          x={config.runtime.horizontal ? tick.from.x + 2 : tick.to.x}
                          y={tick.to.y + (config.runtime.horizontal ? horizontalTickOffset : 0)}
                          verticalAnchor={config.runtime.horizontal ? "start" : "middle"}
                          textAnchor={config.runtime.horizontal ? 'start' : 'end'}
                        >{tick.formattedValue}</Text>
                      </Group>
                    );
                  })}
                  <Line 
                    from={props.axisFromPoint}
                    to={props.axisToPoint}
                    stroke="#333"
                  />
                  { yScale.domain()[0] < 0 && (
                    <Line
                      from={{x: props.axisFromPoint.x, y: yScale(0)}}
                      to={{x: xMax, y: yScale(0)}}
                      stroke="#333"
                    />
                  )}
                  <Text
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
                        <Line
                          from={tick.from}
                          to={tick.to}
                          stroke="#333"
                        />
                        <Text
                          transform={`translate(${tick.to.x}, ${tick.to.y}) rotate(-${!config.runtime.horizontal ? config.runtime.xAxis.tickRotation : 0})`}
                          verticalAnchor="start"
                          textAnchor={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? 'end' : 'middle'}
                          width={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? undefined : tickWidth}
                        >
                          {tick.formattedValue}
                        </Text>
                      </Group>
                    );
                  })}
                  <Line 
                    from={props.axisFromPoint}
                    to={props.axisToPoint}
                    stroke="#333"
                  />
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

          {/* Line chart */}
          { config.visualizationType !== 'Line' && (
            <BarChart xScale={xScale} yScale={yScale} seriesScale={seriesScale} xMax={xMax} yMax={yMax} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />
          )}
          
          {/* Bar chart */}
          { config.visualizationType !== 'Bar' && (
            <LineChart xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />
          )}
      </svg>
      <ReactTooltip id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`} html={true} type="light" arrowColor="rgba(0,0,0,0)" className="tooltip"/>
    </ErrorBoundary>
  )
}
