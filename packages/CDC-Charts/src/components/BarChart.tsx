import 'react-app-polyfill/ie11';
import React, { useContext, useCallback } from 'react';
import { Group } from '@visx/group';
import { BarGroup, BarStack } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import {
  useTooltip,
  useTooltipInPortal,
  defaultStyles,
} from '@visx/tooltip';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { timeParse, timeFormat } from 'd3-time-format';
import Context from '../context.tsx';

import './BarChart.scss';

export type TooltipProps = {
  width: number;
  height: number;
  showControls?: boolean;
};

type TooltipData = {
  __html: string
};
const tooltipStyles = {
  ...defaultStyles,
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid black',
  width: 152,
  height: 72,
  padding: 12,
};
const font = '#000000';

export default function BarChart() {
  const { pageContext } = useContext<any>(Context);

  const { containerBounds, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
    detectBounds: true,
  });

  const {
    showTooltip,
    hideTooltip,
    tooltipOpen,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<TooltipData>({
    tooltipOpen: false,
    tooltipLeft: tooltipStyles.width / 3,
    tooltipTop: tooltipStyles.height / 3,
    tooltipData: { __html: '' },
  });

  const width = pageContext.dimensions.chartWidth;
  const height = 600;

  const xMax = width - pageContext.config.padding.left - pageContext.config.padding.right;
  const yMax = height - pageContext.config.padding.top - pageContext.config.padding.bottom;

  const parseDate = timeParse(pageContext.config.xAxis.dateFormat);
  const format = timeFormat('%b %d');
  const formatDate = (date: string) => format(parseDate(date) as Date);

  // accessors
  const getXAxisData = (d: any) => d[pageContext.config.xAxis.dataKey];

  let data;
  let xScale;
  let seriesScale;
  let yScale;

  if (pageContext.data) {
    data = pageContext.data.slice(0, 8);

    // scales
    xScale = scaleBand<string>({
      domain: data.map(getXAxisData),
      padding: 0.2,
    });

    seriesScale = scaleBand<string>({
      domain: pageContext.config.seriesKeys,
      padding: 0.1,
    });

    if (pageContext.config.visualizationSubType === 'stacked') {
      const yTotals = data.reduce((allTotals, xValue) => {
        const totalTemperature = pageContext.config.seriesKeys.reduce((dailyTotal, k) => {
          dailyTotal += Number(xValue[k]);
          return dailyTotal;
        }, 0);
        allTotals.push(totalTemperature);
        return allTotals;
      }, [] as number[]);

      yScale = scaleLinear<number>({
        domain: [0, Math.max(...yTotals)],
      });
    } else {
      yScale = scaleLinear<number>({
        domain: [0, Math.max(...data.map((d) => Math.max(...pageContext.config.seriesKeys.map((key) => Number(d[key])))))],
      });
    }

    xScale.rangeRound([0, xMax]);
    seriesScale.rangeRound([0, xScale.bandwidth()]);
    yScale.range([yMax, 0]);
  }

  // event handlers
  const handlePointerMove = useCallback(
    (event: React.PointerEvent<SVGRectElement>, bar, group) => {
      const containerX = ('clientX' in event ? event.clientX : 0) - containerBounds.left;
      const containerY = ('clientY' in event ? event.clientY : 0) - containerBounds.top;
      showTooltip({
        tooltipLeft: containerX,
        tooltipTop: containerY,
        tooltipData: {
          __html: `<div>
            ${pageContext.config.xAxis.label}: ${data[group.index][pageContext.config.xAxis.dataKey]}
            ${pageContext.config.yAxis.label}: ${bar.bar ? bar.bar.data[bar.key] : bar.value}
            ${pageContext.config.seriesLabel ? `${pageContext.config.seriesLabel}: ${bar.key}` : ''}
          </div>
        `,
        },
      });
    },
    [showTooltip, containerBounds, data, pageContext.config.seriesLabel, pageContext.config.xAxis.dataKey, pageContext.config.xAxis.label, pageContext.config.yAxis.label],
  );

  /**
   * Functional components always return a JSX object, which is
   * the templating language React uses. It's a modified form of HTML
   * usually surrounded by parenthesis. There are some differences,
   * usually in attribute names.
   * Learn more: https://reactjs.org/docs/introducing-jsx.html
   */
  return pageContext.colorScale ? (
    <div className="bar-chart-container">
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="white" rx={14} />
        <Group top={pageContext.config.padding.top} left={pageContext.config.padding.left}>
          { pageContext.config.visualizationSubType === 'stacked' ? (
            <BarStack
              data={data}
              keys={pageContext.config.seriesKeys}
              x={getXAxisData}
              xScale={xScale}
              yScale={yScale}
              color={pageContext.colorScale}
            >
              {barStacks => barStacks.map(barStack => barStack.bars.map(bar => (
                <rect
                  key={`bar-stack-${barStack.index}-${bar.index}`}
                  x={bar.x}
                  y={bar.y}
                  height={bar.height}
                  width={bar.width}
                  fill={bar.color}
                  display={pageContext.seriesHighlight.length === 0 || pageContext.seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                  onPointerMove={(e) => { handlePointerMove(e, bar, barStack); }}
                  onPointerLeave={hideTooltip}
                />
              )))
              }
            </BarStack>
          ) : (
            <BarGroup
              data={data}
              keys={pageContext.config.seriesKeys}
              height={yMax}
              x0={getXAxisData}
              x0Scale={xScale}
              x1Scale={seriesScale}
              yScale={yScale}
              color={pageContext.colorScale}
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
                      rx={4}
                      display={pageContext.seriesHighlight.length === 0 || pageContext.seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                      onPointerMove={(e) => { handlePointerMove(e, bar, barGroup); }}
                      onPointerLeave={hideTooltip}
                    />
                  ))}
                </Group>
              ))}
            </BarGroup>
          )
          }
        </Group>
        <AxisLeft
          scale={yScale}
          left={pageContext.config.padding.left}
          label={pageContext.config.yAxis.label}
          labelProps={{
            fontSize: 18,
            fontWeight: 'bold',
            textAnchor: 'middle',
          }}
          stroke={font}
        />
        <AxisBottom
          top={yMax + pageContext.config.padding.top}
          left={pageContext.config.padding.left}
          label={pageContext.config.xAxis.label}
          tickFormat={pageContext.config.xAxis.type === 'date' ? formatDate : (tick) => tick}
          scale={xScale}
          stroke={font}
          tickStroke={font}
          labelProps={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
          tickLabelProps={() => ({
            fill: font,
            fontSize: 11,
            textAnchor: 'middle',
          })}
        />
      </svg>

      {tooltipOpen ? (
        <>
          <TooltipInPortal
            key={Math.random()} // needed for bounds to update correctly
            left={tooltipLeft}
            top={tooltipTop}
            style={tooltipStyles}
          >
            <div dangerouslySetInnerHTML={tooltipData}></div>
          </TooltipInPortal>
        </>
      ) : ''}
    </div>
  ) : <div></div>;
}
