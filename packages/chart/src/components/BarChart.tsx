import React, { useContext } from 'react';

import { Group } from '@visx/group';
import { BarGroup, BarStack } from '@visx/shape';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import Context from '../context.tsx';

export default function BarChart({ xScale, yScale, seriesScale, xMax, yMax, getXAxisData, getYAxisData }) {
  const { data, colorScale, seriesHighlight, config, formatNumber } = useContext<any>(Context);

  const mappedXAxis = config.horizontal ? config.yAxis : config.xAxis;

  return (
    <ErrorBoundary component="BarChart">
      <Group left={config.yAxis.size}>
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
              <Group key={`bar-stack-${barStack.index}-${bar.index}`}>
              <text 
                display={config.labels && config.labels.display ? 'block': 'none'}
                x={barThickness * (bar.index + 0.5) + offset}
                y={bar.y - 5}
                fill={bar.color}
                fontSize={(config.labels && config.labels.fontSize) ? config.labels.fontSize : 16}
                textAnchor="middle">
                  {formatNumber(bar.bar ? bar.bar.data[bar.key] : 0)}
              </text>
                <rect
                  key={`bar-stack-${barStack.index}-${bar.index}`}
                  x={barThickness * bar.index + offset}
                  y={bar.y}
                  height={bar.height}
                  width={barThicknessAdjusted}
                  fill={bar.color}
                  stroke="black"
                  strokeWidth={config.barBorderThickness || 1}
                  opacity={config.legend.highlight && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1 ? 0.5 : 1}
                  display={config.legend.highlight || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                  data-tip={`<div>
                        ${config.xAxis.label}: ${data[barStack.index][config.xAxis.dataKey]} <br/>
                        ${config.yAxis.label}: ${formatNumber(bar.bar ? bar.bar.data[bar.key] : 0)} <br/>
                        ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''} 
                      </div>`}
                  data-for="global"
                />
              </Group>
            )}
            ))
            }
          </BarStack>
        ) : (
          <Group>
            <BarGroup
              data={data}
              keys={(config.barSeriesKeys || config.seriesKeys)}
              height={yMax}
              x0={(d: any) => d[mappedXAxis.dataKey]}
              x0Scale={config.horizontal ? yScale : xScale}
              x1Scale={seriesScale}
              yScale={config.horizontal ? xScale : yScale}
              color={() => {return '';}}
            >
              {(barGroups) => barGroups.map((barGroup) => (
                <Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} top={config.horizontal ? yMax / barGroups.length * barGroup.index : 0} left={config.horizontal ? 0 : xMax / barGroups.length * barGroup.index}>
                  {barGroup.bars.map((bar) => {
                    let barHeight = Math.abs(yScale(bar.value) - yScale(0));
                    let barY = bar.value >= 0 ? bar.y : yScale(0);
                    let barGroupWidth = (config.horizontal ? yMax : xMax) / barGroups.length * (config.barThickness || 0.8);
                    let offset = (config.horizontal ? yMax : xMax) / barGroups.length * (1 - (config.barThickness || 0.8)) / 2;
                    let barWidth = barGroupWidth / barGroup.bars.length;
                    let barColor = config.seriesLabels && config.seriesLabels[bar.key] ? colorScale(config.seriesLabels[bar.key]) : colorScale(bar.key);
                    return (
                    <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}`}>
                      <text 
                        display={config.labels && config.labels.display ? 'block': 'none'}
                        x={barWidth * (barGroup.bars.length - bar.index - 0.5) + offset}
                        y={barY - 5}
                        fill={barColor}
                        fontSize={(config.labels && config.labels.fontSize) ? config.labels.fontSize : 16}
                        textAnchor="middle">
                          {formatNumber(bar.value)}
                      </text>
                      <rect
                        key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                        x={config.horizontal ? 0 : barWidth * (barGroup.bars.length - bar.index - 1) + offset}
                        y={config.horizontal ? barWidth * (barGroup.bars.length - bar.index - 1) + offset : barY}
                        width={config.horizontal ?  bar.y : barWidth}
                        height={config.horizontal ? barWidth : barHeight}
                        fill={barColor}
                        stroke="black"
                        strokeWidth={config.barBorderThickness || 1}
                        style={{fill: barColor}}
                        opacity={config.legend.highlight && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1 ? 0.5 : 1}
                        display={config.legend.highlight || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                        data-tip={`<div>
                          ${config.xAxis.label}: ${data[barGroup.index][config.xAxis.dataKey]} <br/>
                          ${config.yAxis.label}: ${config.horizontal ? data[barGroup.index][mappedXAxis.dataKey] : formatNumber(bar.value)} <br/>
                          ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''} 
                        </div>`}
                        data-for="global"
                      />
                    </Group>
                  )}
                  )}
                </Group>
              ))}
            </BarGroup>
            {config.confidenceKeys ? data.map((d) => {
              let offset = xMax / data.length / 2;
              let xPos = xScale(getXAxisData(d)) + offset;
              let upperPos = yScale(getYAxisData(d, config.confidenceKeys.lower));
              let lowerPos = yScale(getYAxisData(d, config.confidenceKeys.upper));
              let tickWidth = 5;

              return (
                <path key={`confidence-interval-${d[mappedXAxis.dataKey]}`} stroke="black" strokeWidth="2px" d={`
                  M${xPos - tickWidth} ${upperPos}
                  L${xPos + tickWidth} ${upperPos}
                  M${xPos} ${upperPos}
                  L${xPos} ${lowerPos}
                  M${xPos - tickWidth} ${lowerPos}
                  L${xPos + tickWidth} ${lowerPos}`}/>
              );
            }) : ''}
          </Group>
        )}
      </Group>  
    </ErrorBoundary>
  );
}
