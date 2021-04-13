import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';

import { Group } from '@visx/group';
import { Line } from '@visx/shape';
import { Text } from '@visx/text'; 
import { scaleLinear, scalePoint } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';

import { timeParse, timeFormat } from 'd3-time-format';

import BarChart from './BarChart';
import LineChart from './LineChart';
import Context from '../context';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import '../scss/LinearChart.scss';

export default function LinearChart() {
  const { data, dimensions, config } = useContext<any>(Context);
  const [ width ] = dimensions;

  const height = config.aspectRatio ? (width * config.aspectRatio) : config.height;

  const mappedXAxis = config.horizontal ? config.yAxis : config.xAxis;

  const xMax = width - config.yAxis.size - config.padding.left - config.padding.right;
  const yMax = height - config.xAxis.size;

  const parseDate = timeParse(config.xAxis.dateParseFormat);
  const format = timeFormat(config.xAxis.dateDisplayFormat);
  const formatDate = (date) => format(new Date(date));

  const getXAxisData = (d: any) => config.xAxis.type === 'date' ? (parseDate(d[mappedXAxis.dataKey]) as Date).getTime() : d[mappedXAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  let xScale;
  let yScale;
  let seriesScale;

  if (data) {
    let min = config.yAxis.min !== undefined ? config.yAxis.min : Math.min(...data.map((d) => Math.min(...config.seriesKeys.map((key) => Number(d[key])))));
    let max = config.yAxis.max !== undefined ? config.yAxis.max : Number.MIN_VALUE;

    if((config.visualizationType === 'Bar' || config.visualizationType === 'Combo') && min > 0) {
      min = 0;
    }

    //If data value max wasn't provided, calculate it
    if(max === Number.MIN_VALUE){
      //If stacked bar, add together y values to get max, otherwise map data to find max
      if (config.visualizationType === 'Bar' && config.visualizationSubType === 'stacked') {
        const yTotals = data.reduce((allTotals, xValue) => {
          const totalYValues = config.seriesKeys.reduce((yTotal, k) => {
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
      } else if(config.visualizationType === 'Bar' && config.visualizationSubType !== 'stacked' && config.confidenceKeys) {
        max = Math.max(...data.map((d) => Number(d[config.confidenceKeys.upper])));
      } else {
        max = Math.max(...data.map((d) => Math.max(...config.seriesKeys.map((key) => Number(d[key])))));
      }
    }

    //Adds Y Axis data padding if applicable
    if(config.yAxis.paddingPercent) { 
      let paddingValue = (max - min) * config.yAxis.paddingPercent;
      min -= paddingValue;
      max += paddingValue;
    }

    let xAxisDataMapped = data.map(d => getXAxisData(d));

    if(config.horizontal){
      xScale = scaleLinear<number>({
        domain: [min, max],
        range: [0, xMax]
      });

      yScale = config.xAxis.type === 'date' ? 
        scaleLinear<number>({domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)]}) : 
        scalePoint<string>({domain: xAxisDataMapped, padding: 0.5});

      seriesScale = scalePoint<string>({
        domain: (config.barSeriesKeys || config.seriesKeys),
        range: [0, yMax]
      });

      yScale.rangeRound([yMax, 0]);
    } else {
      yScale = scaleLinear<number>({
        domain: [min, max],
        range: [yMax, 0]
      });

      xScale = config.xAxis.type === 'date' ? 
        scaleLinear<number>({domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)], range: [0, xMax]}) : 
        scalePoint<string>({domain: xAxisDataMapped, range: [0, xMax], padding: 0.5});

      seriesScale = scalePoint<string>({
        domain: (config.barSeriesKeys || config.seriesKeys),
        range: [0, xMax]
      });
    }
  }

  return (
    <ErrorBoundary component="LinearChart">
      <svg width={width} height={height} className="linear">
          {/* Line chart */}
          { config.visualizationType !== 'Line' && (
            <BarChart xScale={xScale} yScale={yScale} seriesScale={seriesScale} xMax={xMax} yMax={yMax}getXAxisData={getXAxisData} getYAxisData={getYAxisData} />
          )}
          
          {/* Bar chart */}
          { config.visualizationType !== 'Bar' && (
            <LineChart xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />
          )}

          {/* Higlighted regions */}
          { config.regions ? config.regions.map((region) => {
            const from = xScale((parseDate(region.from) as Date).getTime());
            const to = xScale((parseDate(region.to) as Date).getTime());
            const width = to - from;

            return (
              <Group className="regions" left={config.yAxis.size} key={region.label}>
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
            left={config.yAxis.size}
            label={config.yAxis.label}
            stroke="#333"
            numTicks={config.yAxis.numTicks}
          >
            {props => {
              const axisCenter = (props.axisFromPoint.y - props.axisToPoint.y) / 2;
              const horizontalTickOffset = yMax / props.ticks.length / 2 - 5;
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
                          display={config.horizontal ? 'none' : 'block'}
                        />
                        { config.yAxis.gridLines ? (
                          <Line
                            from={{x: tick.from.x + xMax, y: tick.from.y}}
                            to={tick.from}
                            stroke="rgba(0,0,0,0.3)"
                          />
                          ) : ''
                        }
                        <Text
                          x={config.horizontal ? tick.from.x + 2 : tick.to.x}
                          y={tick.to.y + (config.horizontal ? horizontalTickOffset : 0)}
                          dy={config.horizontal ? -5 : 0}
                          verticalAnchor="middle"
                          textAnchor={config.horizontal ? 'start' : 'end'}
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
                    transform={`translate(${-1 * config.yAxis.size}, ${axisCenter}) rotate(-90)`}
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
            left={config.yAxis.size}
            label={config.xAxis.label}
            tickFormat={config.xAxis.type === 'date' ? formatDate : (tick) => tick}
            scale={xScale}
            stroke="#333"
            tickStroke="#333"
            numTicks={config.xAxis.numTicks}
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
                          transform={`translate(${tick.to.x}, ${tick.to.y}) rotate(-${!config.horizontal ? config.xAxis.tickRotation : 0})`}
                          verticalAnchor="start"
                          textAnchor={config.xAxis.tickRotation ? 'end' : 'middle'}
                          width={config.xAxis.tickRotation ? undefined : tickWidth}
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
                    y={config.xAxis.size}
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
      </svg>
      <ReactTooltip id="global" html={true} type="light" arrowColor="rgba(0,0,0,0)" className="tooltip"/>
    </ErrorBoundary>
  )
}
