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
import { bottomTickLabelProps } from '@visx/axis/lib/axis/AxisBottom';

const font = '#000000';

export default function ComboChart({numberFormatter}) {
  let { data, dimensions, colorScale, seriesHighlight, config } = useContext<any>(Context);

  const { width, height } = dimensions;

  const xMax = width - config.padding.left - config.padding.right;
  const yMax = height - config.padding.top - config.padding.bottom;

  const getXAxisData = (d: any) => d[config.xAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  const parseDate = timeParse(config.xAxis.dateParseFormat);
  const format = timeFormat(config.xAxis.dateDisplayFormat);
  const formatDate = (date: string) => format(parseDate(date) as Date);

  let xScaleLine;
  let xScaleBar;
  let seriesScaleBar;
  let yScale;

  if (data) {
    if (config.visualizationType === 'Bar' && config.visualizationSubType === 'stacked') {
      const yTotals = data.reduce((allTotals, xValue) => {
        const totalYValues = config.seriesKeys.reduce((yTotal, k) => {
          yTotal += Number(xValue[k]);
          return yTotal;
        }, 0);
        allTotals.push(totalYValues);
        return allTotals;
      }, [] as number[]);

      yScale = scaleLinear<number>({
        domain: [0, Math.max(...yTotals)],
      });
    } else {
      yScale = scaleLinear<number>({
        domain: [(config.visualizationType !== 'Line' ? 0 : Math.min(...data.map((d) => Math.min(...config.seriesKeys.map((key) => Number(d[key])))))), Math.max(...data.map((d) => Math.max(...config.seriesKeys.map((key) => Number(d[key])))))],
      });
    }

    yScale.range([yMax, 0]);

    if(config.visualizationType !== 'Line'){
      xScaleBar = scaleBand<string>({
        domain: data.map((d: any) => d[config.xAxis.dataKey]),
        padding: 0.2,
      });

      seriesScaleBar = scaleBand<string>({
        domain: (config.barSeriesKeys || config.seriesKeys),
        padding: 0.1,
      });

      xScaleBar.rangeRound([0, xMax]);
      seriesScaleBar.rangeRound([0, xScaleBar.bandwidth()]);
    }

    if(config.visualizationType !== 'Bar') {
      // scales
      xScaleLine = scaleBand<string>({
        domain: data.map(getXAxisData),
        padding: 0.2,
      });

      xScaleLine.rangeRound([0, xMax]);
    }
  }

  return config && data && colorScale && width && height ? (
    <div className="line-chart-container">
      <svg width={width} height={height}>
        { config.visualizationType !== 'Line' ? (
          <Group top={config.padding.top} left={config.padding.left}>
          { config.visualizationSubType === 'stacked' ? (
            <BarStack
              data={data}
              keys={(config.barSeriesKeys || config.seriesKeys)}
              x={(d: any) => d[config.xAxis.dataKey]}
              xScale={xScaleBar}
              yScale={yScale}
              color={colorScale}
            >
              {barStacks => barStacks.map(barStack => barStack.bars.map(bar => (
                <rect
                  key={`bar-stack-${barStack.index}-${bar.index}`}
                  x={bar.x}
                  y={bar.y}
                  height={bar.height}
                  width={bar.width}
                  fill={bar.color}
                  display={seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                  data-tip={`<div>
                        ${config.xAxis.label}: ${data[barStack.index][config.xAxis.dataKey]} <br/>
                        ${config.yAxis.label}: ${numberFormatter(bar.bar ? bar.bar.data[bar.key] : 0)} <br/>
                        ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''} 
                      </div>`}
                      data-html="true"
                />
              )))
              }
            </BarStack>
          ) : (
            <BarGroup
              data={data}
              keys={(config.barSeriesKeys || config.seriesKeys)}
              height={yMax}
              x0={(d: any) => d[config.xAxis.dataKey]}
              x0Scale={xScaleBar}
              x1Scale={seriesScaleBar}
              yScale={yScale}
              color={colorScale}
            >
              {(barGroups) => barGroups.map((barGroup) => (
                <Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} left={barGroup.x0}>
                  {barGroup.bars.map((bar) => (
                    <rect
                      key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      stroke="black"
                      strokeWidth={config.barBorderThickness || 1}
                      style={{fill: bar.color}}
                      rx={4}
                      display={seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                      data-tip={`<div>
                        ${config.xAxis.label}: ${data[barGroup.index][config.xAxis.dataKey]} <br/>
                        ${config.yAxis.label}: ${numberFormatter(bar.value)} <br/>
                        ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''} 
                      </div>`}
                      data-html="true"
                    />
                  ))}
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
          <Group>
            { (config.lineSeriesKeys || config.seriesKeys).map((seriesKey) => (
              <Group
                key={`series-${seriesKey}`}
                top={config.padding.top}
                left={config.padding.left}
                display={seriesHighlight.length === 0 || seriesHighlight.indexOf(seriesKey) !== -1 ? 'block' : 'none'}
              >
                { data.map((d, dataIndex) => (
                  <circle
                    key={`${seriesKey}-${dataIndex}`}
                    r={3}
                    cx={xScaleLine(getXAxisData(d))}
                    cy={yScale(getYAxisData(d, seriesKey))}
                    strokeWidth="100px"
                    fill={colorScale ? colorScale(seriesKey) : '#000'}
                    style={{fill: colorScale ? colorScale(seriesKey) : '#000'}}
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
                  x={(d) => xScaleLine(getXAxisData(d))}
                  y={(d) => yScale(getYAxisData(d, seriesKey))}
                  stroke={colorScale ? colorScale(seriesKey) : '#000'}
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
          left={config.padding.left}
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
                          from={{x: tick.from.x + width - config.padding.left - config.padding.right, y: tick.from.y}}
                          to={tick.from}
                          stroke="rgba(0,0,0,0.3)"
                        />
                        ) : ''
                      }
                      <text
                        transform={`translate(${tick.to.x - 30}, ${tick.to.y})`}
                        fontSize={config.yAxis.tickFontSize || 16}
                        textAnchor="middle"
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
                  transform={`translate(-75, ${axisCenter}) rotate(-90)`}
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
          top={yMax + config.padding.top}
          left={config.padding.left}
          label={config.xAxis.label}
          tickFormat={config.xAxis.type === 'date' ? formatDate : (tick) => tick}
          scale={(xScaleLine || xScaleBar)}
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
                  const tickY = tick.to.y + (config.xAxis.tickFontSize || 11) + props.tickLength;
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
                        transform={`translate(${tickX}, ${tickY + (tick.formattedValue.length * 4.5)}) rotate(-90)`}
                        fontSize={config.xAxis.tickFontSize || 16}
                        textAnchor="middle"
                        width={width / props.tickLength}
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
                  transform={`translate(${axisCenter}, 50)`}
                  fontSize={config.xAxis.labelFontSize || 18}
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
  ) : <div className="loader"></div>;
}
