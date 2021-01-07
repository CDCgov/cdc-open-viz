import 'react-app-polyfill/ie11';
import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { BarGroup, BarStack } from '@visx/shape';
import { MarkerCircle } from '@visx/marker';
import { timeParse, timeFormat } from 'd3-time-format';
import Context from '../context.tsx';

import '../scss/ComboChart.scss';

const font = '#000000';

export default function ComboChart({numberFormatter}) {
  let { data, dimensions, colorScale, seriesHighlight, config } = useContext<any>(Context);

  const [ width, height ] = dimensions;

  const xMax = width - config.padding.left - config.padding.right;
  const yMax = height - config.padding.top - config.padding.bottom;

  const getXAxisData = (d: any) => d[config.xAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  const parseDate = timeParse(config.xAxis.dateFormat);
  const format = timeFormat('%b %d');
  const formatDate = (date: string) => format(parseDate(date) as Date);

  let xScaleLine;
  let xScaleBar;
  let seriesScaleBar;
  let yScale;
  let tooltipContent;

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

  return config && data && colorScale ? (
    <div className="line-chart-container">
      <svg viewBox={`0 0 ${width} ${height}`}>
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
            <MarkerCircle id="marker-circle" fill="#333" size={2} refX={2} />
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
                    strokeWidth="10px"
                    stroke="transparent"
                    fill="colorScale ? colorScale(seriesKey) : '#000'"
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
                  markerMid="url(#marker-circle)"
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
          labelProps={{
            fontSize: config.yAxis.labelFontSize || 18,
            fontWeight: 'bold',
            textAnchor: 'middle',
            transform: 'translate(-20, 0) rotate(-90)'
          }}
          tickLabelProps={() => ({
            fontSize: config.yAxis.tickFontSize,
            transform: 'translate(-40, 0)'
          })}
          stroke={font}
        />
        <AxisBottom
          top={yMax + config.padding.top}
          left={config.padding.left}
          label={config.xAxis.label}
          tickFormat={config.xAxis.type === 'date' ? formatDate : (tick) => tick}
          scale={(xScaleLine || xScaleBar)}
          stroke={font}
          tickStroke={font}
          labelProps={{
            fontSize: config.xAxis.labelFontSize || 18,
            fontWeight: 'bold',
          }}
          tickLabelProps={() => ({
            fill: font,
            fontSize: config.xAxis.tickFontSize || 11,
            textAnchor: 'middle'
          })}
        />
      </svg>

      <ReactTooltip />
    </div>
  ) : <div className="loader"></div>;
}
