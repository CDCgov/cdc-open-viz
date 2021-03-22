import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';

import { Group } from '@visx/group';
import { Line } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';

import { timeParse, timeFormat } from 'd3-time-format';

import BarChart from './BarChart';
import LineChart from './LineChart';
import Context from '../context.tsx';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import '../scss/LinearChart.scss';

export default function LinearChart() {
  const { data, dimensions, colorScale, config } = useContext<any>(Context);

  const { width, height } = dimensions;
  
  const mappedXAxis = config.horizontal ? config.yAxis : config.xAxis;

  const xMax = width - config.yAxis.size;
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
        scaleBand<string>({domain: xAxisDataMapped});

      seriesScale = scaleBand<string>({
        domain: (config.barSeriesKeys || config.seriesKeys)
      });

      yScale.rangeRound([yMax, 0]);
      seriesScale.rangeRound([0, yMax]);
    } else {
      yScale = scaleLinear<number>({
        domain: [min, max],
        range: [yMax, 0]
      });

      xScale = config.xAxis.type === 'date' ? 
        scaleLinear<number>({domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)]}) : 
        scaleBand<string>({domain: xAxisDataMapped});

      seriesScale = scaleBand<string>({
        domain: (config.barSeriesKeys || config.seriesKeys)
      });

      xScale.rangeRound([0, xMax]);
      seriesScale.rangeRound([0, xMax]);
    }
  }

  return config && data && colorScale && width && height ? (
    <ErrorBoundary component="LinearChart">
      <div className="linear-chart-container">
        <svg width={width} height={height}>
          {/* Line chart */}
          { config.visualizationType !== 'Line' && (
            <BarChart xScale={xScale} yScale={yScale} seriesScale={seriesScale} xMax={xMax} yMax={yMax} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />
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
              <Group className="regions" left={config.yAxis.size}>
                <path stroke="black" d={`M${from} -5
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
                <text 
                  x={from + (width / 2)} 
                  y={region.fontSize || 14} 
                  fill={region.color} 
                  fontSize={region.fontSize || 14}
                  textAnchor="middle">
                    {region.label}
                </text>
              </Group>
            )
          }) : '' }

          {/* Y axis */}
          <AxisLeft
            scale={yScale}
            left={config.yAxis.size}
            label={config.yAxis.label}
            stroke="black"
            numTicks={config.yAxis.numTicks}
          >
            {props => {
              const axisCenter = (props.axisFromPoint.y - props.axisToPoint.y) / 2;
              const horizontalTickOffset = yMax / props.ticks.length / 2 - 5;
              return (
                <Group className="my-custom-left-axis">
                  {props.ticks.map((tick, i) => {
                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        <Line
                          from={tick.from}
                          to={tick.to}
                          stroke="black"
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
                        <text
                          transform={`translate(${config.horizontal ? tick.from.x + 5 : tick.to.x}, ${tick.to.y + (config.horizontal ? horizontalTickOffset : (config.yAxis.tickFontSize / 2))})`}
                          fontSize={config.yAxis.tickFontSize}
                          textAnchor={config.horizontal ? 'start' : 'end'}
                        >
                          {tick.formattedValue}
                        </text>
                      </Group>
                    );
                  })}
                  <Line 
                    from={props.axisFromPoint}
                    to={props.axisToPoint}
                    stroke="black"
                  />
                  { yScale.domain()[0] < 0 && (
                    <Line
                      from={{x: props.axisFromPoint.x, y: yScale(0)}}
                      to={{x: xMax, y: yScale(0)}}
                      stroke="black"
                    />
                  )}
                  <text
                    textAnchor="middle"
                    transform={`translate(${-1 * (config.yAxis.size - config.yAxis.labelFontSize)}, ${axisCenter}) rotate(-90)`}
                    fontSize={config.yAxis.labelFontSize || 18}
                    fontWeight="bold"
                  >
                    {props.label}
                  </text>
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
            stroke="black"
            tickStroke="black"
            numTicks={config.xAxis.numTicks}
          >
            {props => {
              const axisCenter = (props.axisToPoint.x - props.axisFromPoint.x) / 2;
              return (
                <Group className="my-custom-bottom-axis">
                  {props.ticks.map((tick, i) => {
                    const tickX = tick.to.x;
                    const tickY = tick.to.y + (!config.xAxis.wrap ? config.xAxis.tickFontSize : 0);

                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        <Line
                          from={tick.from}
                          to={tick.to}
                          stroke="black"
                        />
                        { !config.xAxis.wrap ? ( 
                          <text
                            transform={`translate(${tickX}, ${tickY}) rotate(${config.xAxis.tickRotation})`}
                            fontSize={config.xAxis.tickFontSize}
                            textAnchor={config.xAxis.tickRotation !== 0 ? 'end': 'middle'}
                            className="bottom-axis-tick"
                          >
                            {tick.formattedValue}
                          </text> 
                        ) : (
                          <foreignObject className="bottom-axis-tick-container" x={tickX} y={tickY} width={xMax / props.ticks.length - 4} height={config.xAxis.size}>
                            <p className="bottom-axis-tick">{tick.formattedValue}</p>
                          </foreignObject> 
                        )
                        }
                      </Group>
                    );
                  })}
                  <Line 
                    from={props.axisFromPoint}
                    to={props.axisToPoint}
                    stroke="black"
                  />
                  <text
                    textAnchor="middle"
                    transform={`translate(${axisCenter}, ${config.xAxis.size - config.xAxis.labelFontSize})`}
                    fontSize={config.xAxis.labelFontSize}
                    fontWeight="bold"
                  >
                    {props.label}
                  </text>
                </Group>
              );
            }}
          </AxisBottom>

        </svg>

        {/* Tooltip */}
        <ReactTooltip id="global" html={true} type="light" arrowColor="rgba(0,0,0,0)" className="tooltip"/>
      </div>
    </ErrorBoundary>
  ) : ( <div className="loader"></div> );
}
