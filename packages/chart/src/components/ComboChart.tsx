import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath, Line } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { BarGroup, BarStack } from '@visx/shape';
import { timeParse, timeFormat } from 'd3-time-format';
import Context from '../context.tsx';

import '../scss/ComboChart.scss';

const font = '#000000';

export default function ComboChart({numberFormatter}) {
  let { data, dimensions, colorScale, seriesHighlight, config } = useContext<any>(Context);

  const { width, height } = dimensions;

  const xMax = width - config.yAxis.width;
  const yMax = height - config.xAxis.height;

  const parseDate = timeParse(config.xAxis.dateParseFormat);
  const format = timeFormat(config.xAxis.dateDisplayFormat);
  const formatDate = (date) => format(new Date(date));

  const getXAxisData = (d: any) => config.xAxis.type === 'date' ? (parseDate(d[config.xAxis.dataKey]) as Date).getTime() : d[config.xAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  let xScale;
  let seriesScale;
  let yScale;

  if (data) {
    let min = config.visualizationType === 'Bar' ? 0 : Math.min(...data.map((d) => Math.min(...config.seriesKeys.map((key) => Number(d[key])))));
    let max = Number.MIN_VALUE;

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

      yScale = scaleLinear<number>({
        domain: [0, Math.max(...yTotals)],
      });
    } else {
      max = Math.max(...data.map((d) => Math.max(...config.seriesKeys.map((key) => Number(d[key])))));
    }

    //Adds Y Axis data padding if applicable
    if(config.yAxis.paddingPercent) { 
      let paddingValue = (max - min) * config.yAxis.paddingPercent;
      min -= paddingValue;
      max += paddingValue;
    }
    
    yScale = scaleLinear<number>({
      domain: [min, max],
      range: [yMax, 0]
    });

    let xAxisDataMapped = data.map(d => getXAxisData(d));

    xScale = config.xAxis.type === 'date' ? 
      scaleLinear<number>({domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)]}) : 
      scaleBand<string>({domain: xAxisDataMapped});

    seriesScale = scaleBand<string>({
      domain: (config.barSeriesKeys || config.seriesKeys)
    });

    xScale.rangeRound([0, xMax]);
    seriesScale.rangeRound([0, xMax]);
  }

  return config && data && colorScale && width && height ? (
    <div className="line-chart-container">
      <svg width={width} height={height}>
        { config.visualizationType !== 'Line' ? (
          <Group left={config.yAxis.width}>
          { config.visualizationSubType === 'stacked' ? (
            <BarStack
              data={data}
              keys={(config.barSeriesKeys || config.seriesKeys)}
              x={(d: any) => d[config.xAxis.dataKey]}
              xScale={xScale}
              yScale={yScale}
              color={colorScale}
            >
              {barStacks => barStacks.map(barStack => barStack.bars.map(bar => {
                let barThickness = xMax / barStack.bars.length;
                let barThicknessAdjusted = barThickness * (config.barThickness || 0.8);
                let offset = barThickness * (1 - (config.barThickness || 0.8)) / 2;
                return (
                <rect
                  key={`bar-stack-${barStack.index}-${bar.index}`}
                  x={barThickness * bar.index + offset}
                  y={bar.y}
                  height={bar.height}
                  width={barThicknessAdjusted}
                  fill={bar.color}
                  stroke="black"
                  strokeWidth={config.barBorderThickness || 1}
                  display={seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                  data-tip={`<div>
                        ${config.xAxis.label}: ${data[barStack.index][config.xAxis.dataKey]} <br/>
                        ${config.yAxis.label}: ${numberFormatter(bar.bar ? bar.bar.data[bar.key] : 0)} <br/>
                        ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''} 
                      </div>`}
                      data-html="true"
                />
              )}
              ))
              }
            </BarStack>
          ) : (
            <BarGroup
              data={data}
              keys={(config.barSeriesKeys || config.seriesKeys)}
              height={yMax}
              x0={(d: any) => d[config.xAxis.dataKey]}
              x0Scale={xScale}
              x1Scale={seriesScale}
              yScale={yScale}
              color={colorScale}
            >
              {(barGroups) => barGroups.map((barGroup) => (
                <Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} left={xMax / barGroups.length * barGroup.index}>
                  {barGroup.bars.map((bar) => {
                    let barGroupWidth = xMax / barGroups.length * (config.barThickness || 0.8);
                    let offset = xMax / barGroups.length * (1 - (config.barThickness || 0.8)) / 2;
                    let barWidth = barGroupWidth / barGroup.bars.length;
                    return (
                    <rect
                      key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                      x={barWidth * (barGroup.bars.length - bar.index - 1) + offset}
                      y={bar.y}
                      width={barWidth}
                      height={bar.height}
                      fill={bar.color}
                      stroke="black"
                      strokeWidth={config.barBorderThickness || 1}
                      style={{fill: bar.color}}
                      display={seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                      data-tip={`<div>
                        ${config.xAxis.label}: ${data[barGroup.index][config.xAxis.dataKey]} <br/>
                        ${config.yAxis.label}: ${numberFormatter(bar.value)} <br/>
                        ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''} 
                      </div>`}
                      data-html="true"
                    />
                  )}
                  )}
                </Group>
              ))}
            </BarGroup>
          )
          }
        </Group>
        ) : (
          <Group>
          </Group>
        ) }
        
        { config.visualizationType !== 'Bar' ? (
          <Group left={config.yAxis.width}>
            { (config.lineSeriesKeys || config.seriesKeys).map((seriesKey, index) => (
              <Group
                key={`series-${seriesKey}`}
                display={seriesHighlight.length === 0 || seriesHighlight.indexOf(seriesKey) !== -1 ? 'block' : 'none'}
              >
                { data.map((d, dataIndex) => (
                  <circle
                    key={`${seriesKey}-${dataIndex}`}
                    r={3}
                    cx={xScale(getXAxisData(d))}
                    cy={yScale(getYAxisData(d, seriesKey))}
                    strokeWidth="100px"
                    fill={colorScale ? colorScale(config.seriesKeysLabels ? config.seriesKeysLabels[index] : seriesKey) : '#000'}
                    style={{fill: colorScale ? colorScale(config.seriesKeysLabels ? config.seriesKeysLabels[index] : seriesKey) : '#000'}}
                    data-tip={`<div>
                      ${config.xAxis.label}: ${d[config.xAxis.dataKey]} <br/>
                      ${config.yAxis.label}: ${numberFormatter(d[seriesKey])} <br/>
                      ${config.seriesLabel ? `${config.seriesLabel}: ${seriesKey}` : ''} 
                    </div>`}
                    data-html="true"
                  />
                ))}
                <LinePath
                  curve={allCurves.curveLinear}
                  data={data}
                  x={(d) => xScale(getXAxisData(d))}
                  y={(d) => yScale(getYAxisData(d, seriesKey))}
                  stroke={colorScale ? colorScale(config.seriesKeysLabels ? config.seriesKeysLabels[index] : seriesKey) : '#000'}
                  strokeWidth={2}
                  strokeOpacity={1}
                  shapeRendering="geometricPrecision"
                />
              </Group>
            ))
            }
          </Group>
        ) : (
          <Group>
          </Group>
        ) }
        <AxisLeft
          scale={yScale}
          left={config.yAxis.width}
          label={config.yAxis.label}
          stroke={font}
          numTicks={config.yAxis.numTicks}
        >
          {props => {
            const axisCenter = (props.axisFromPoint.y - props.axisToPoint.y) / 2;
            return (
              <g className="my-custom-left-axis">
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
                        transform={`translate(${tick.to.x}, ${tick.to.y + (config.yAxis.tickFontSize / 2)})`}
                        fontSize={config.yAxis.tickFontSize}
                        textAnchor="end"
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
                <text
                  textAnchor="middle"
                  transform={`translate(${-1 * (config.yAxis.width - config.yAxis.labelFontSize)}, ${axisCenter}) rotate(-90)`}
                  fontSize={config.yAxis.labelFontSize || 18}
                  fontWeight="bold"
                >
                  {props.label}
                </text>
              </g>
            );
          }}
        </AxisLeft>
        <AxisBottom
          top={yMax}
          left={config.yAxis.width}
          label={config.xAxis.label}
          tickFormat={config.xAxis.type === 'date' ? formatDate : (tick) => tick}
          scale={xScale}
          stroke={font}
          tickStroke={font}
          numTicks={config.xAxis.numTicks}
        >
          {props => {
            const axisCenter = (props.axisToPoint.x - props.axisFromPoint.x) / 2;
            return (
              <g className="my-custom-bottom-axis">
                {props.ticks.map((tick, i) => {
                  const tickX = tick.to.x;
                  const tickY = tick.to.y + config.xAxis.tickFontSize;

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
                      <text
                        transform={`translate(${tickX}, ${tickY}) rotate(${config.xAxis.tickRotation})`}
                        fontSize={config.xAxis.tickFontSize}
                        textAnchor={config.xAxis.tickRotation !== 0 ? 'end': 'middle'}
                        className="bottom-axis-tick"
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
                <text
                  textAnchor="middle"
                  transform={`translate(${axisCenter}, ${config.xAxis.height - config.xAxis.labelFontSize})`}
                  fontSize={config.xAxis.labelFontSize}
                  fontWeight="bold"
                >
                  {props.label}
                </text>
              </g>
            );
          }}
        </AxisBottom>
      </svg>

      <ReactTooltip />
    </div>
  ) : ( <div className="loader"></div> );
}
