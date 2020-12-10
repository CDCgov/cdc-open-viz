import 'react-app-polyfill/ie11';
import React, {
  useContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Group
 } from '@visx/group';
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

import '../scss/BarChart.scss';

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
  const { data, config, seriesHighlight, colorScale, dimensions } = useContext<any>(Context);
  const [scales, setScales] = useState<any>({ xScale: undefined, yScale: undefined, seriesScale: undefined });

  const [ width, height ] = dimensions

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

  const xMax = width - config.padding.left - config.padding.right;
  const yMax = height - config.padding.top - config.padding.bottom;

  const parseDate = timeParse(config.xAxis.dateFormat);
  const format = timeFormat('%b %d');
  const formatDate = (date: string) => format(parseDate(date) as Date);


  useEffect(() => {
    if (data && !scales.xScale) {
      const newScales = { xScale: undefined, yScale: undefined, seriesScale: undefined };
      // scales
      newScales.xScale = scaleBand<string>({
        domain: data.map((d: any) => d[config.xAxis.dataKey]),
        padding: 0.2,
      });

      newScales.seriesScale = scaleBand<string>({
        domain: config.seriesKeys,
        padding: 0.1,
      });

      if (config.visualizationSubType === 'stacked') {
        const yTotals = data.reduce((allTotals, xValue) => {
          const totalTemperature = config.seriesKeys.reduce((dailyTotal, k) => {
            dailyTotal += Number(xValue[k]);
            return dailyTotal;
          }, 0);
          allTotals.push(totalTemperature);
          return allTotals;
        }, [] as number[]);

        newScales.yScale = scaleLinear<number>({
          domain: [0, Math.max(...yTotals)],
        });
      } else {
        newScales.yScale = scaleLinear<number>({
          domain: [0, Math.max(...data.map((d) => Math.max(...config.seriesKeys.map((key) => Number(d[key])))))],
        });
      }

      newScales.xScale.rangeRound([0, xMax]);
      newScales.seriesScale.rangeRound([0, newScales.xScale.bandwidth()]);
      newScales.yScale.range([yMax, 0]);

      setScales(newScales);
    }
  }, [data, config.xAxis.dataKey, config.seriesKeys, config.visualizationSubType, scales.xScale, xMax, yMax]);

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
            ${config.xAxis.label}: ${data[group.index][config.xAxis.dataKey]} <br/>
            ${config.yAxis.label}: ${bar.bar ? bar.bar.data[bar.key] : bar.value} <br/>
            ${config.seriesLabel ? `${config.seriesLabel}: ${bar.key}` : ''} 
          </div>
        `,
        },
      });
    },
    [showTooltip, containerBounds, data, config.seriesLabel, config.xAxis.dataKey, config.xAxis.label, config.yAxis.label],
  );

  /**
   * Functional components always return a JSX object, which is
   * the templating language React uses. It's a modified form of HTML
   * usually surrounded by parenthesis. There are some differences,
   * usually in attribute names.
   * Learn more: https://reactjs.org/docs/introducing-jsx.html
   */
  return config && data && colorScale && scales.xScale ? (
    <div className="bar-chart-container">
      <svg viewBox={`0 0 ${width} ${height}`}>
        <Group top={config.padding.top} left={config.padding.left}>
          { config.visualizationSubType === 'stacked' ? (
            <BarStack
              data={data}
              keys={config.seriesKeys}
              x={(d: any) => d[config.xAxis.dataKey]}
              xScale={scales.xScale}
              yScale={scales.yScale}
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
                  onPointerMove={(e) => { handlePointerMove(e, bar, barStack); }}
                  onPointerLeave={hideTooltip}
                />
              )))
              }
            </BarStack>
          ) : (
            <BarGroup
              data={data}
              keys={config.seriesKeys}
              height={yMax}
              x0={(d: any) => d[config.xAxis.dataKey]}
              x0Scale={scales.xScale}
              x1Scale={scales.seriesScale}
              yScale={scales.yScale}
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
                      rx={4}
                      display={seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
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
          scale={scales.yScale}
          left={config.padding.left}
          label={config.yAxis.label}
          labelProps={{
            fontSize: 18,
            fontWeight: 'bold',
            textAnchor: 'middle',
          }}
          stroke={font}
        />
        <AxisBottom
          top={yMax + config.padding.top}
          left={config.padding.left}
          label={config.xAxis.label}
          tickFormat={config.xAxis.type === 'date' ? formatDate : (tick) => tick}
          scale={scales.xScale}
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
  ) : <div className="loader"></div>;
}
