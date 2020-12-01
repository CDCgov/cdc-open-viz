import 'react-app-polyfill/ie11';
import React, { useCallback, useContext } from 'react';
import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import {
  useTooltip,
  useTooltipInPortal,
  defaultStyles,
} from '@visx/tooltip';
import {
  MarkerArrow, MarkerCross, MarkerX, MarkerCircle, MarkerLine,
} from '@visx/marker';
import { timeParse, timeFormat } from 'd3-time-format';
import Context from '../context.tsx';

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

const curveTypes = Object.keys(allCurves);

export default function LineChart() {
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

  const getXAxisData = (d: any) => d[pageContext.config.xAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  const parseDate = timeParse(pageContext.config.xAxis.dateFormat);
  const format = timeFormat('%b %d');
  const formatDate = (date: string) => format(parseDate(date) as Date);

  let data;
  let xScale;
  let yScale;

  if (pageContext.data) {
    data = pageContext.data.slice(0, 8);

    // scales
    xScale = scaleBand<string>({
      domain: data.map(getXAxisData),
      padding: 0.2,
    });

    yScale = scaleLinear<number>({
      domain: [0, Math.max(...data.map((d) => Math.max(...pageContext.config.seriesKeys.map((key) => Number(d[key])))))],
    });

    xScale.rangeRound([0, xMax]);
    yScale.range([yMax, 0]);
  }

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<SVGRectElement>, point) => {
      const containerX = ('clientX' in event ? event.clientX : 0) - containerBounds.left;
      const containerY = ('clientY' in event ? event.clientY : 0) - containerBounds.top;
      showTooltip({
        tooltipLeft: containerX,
        tooltipTop: containerY,
        tooltipData: {
          __html: `<div>
            ${pageContext.config.xAxis.label}: ${data[point.index][pageContext.config.xAxis.dataKey]}
            ${pageContext.config.yAxis.label}: ${point.value}
            ${pageContext.config.seriesLabel ? `${pageContext.config.seriesLabel}: ${point.key}` : ''}
          </div>
        `,
        },
      });
    },
    [showTooltip, containerBounds, data, pageContext.config.seriesLabel, pageContext.config.xAxis.dataKey, pageContext.config.xAxis.label, pageContext.config.yAxis.label],
  );

  return (
    <div className="line-chart-container">
      <svg width={width} height={height}>
        <MarkerX
          id="marker-x"
          stroke="#333"
          size={22}
          strokeWidth={4}
          markerUnits="userSpaceOnUse"
        />
        <MarkerCross
          id="marker-cross"
          stroke="#333"
          size={22}
          strokeWidth={4}
          strokeOpacity={0.6}
          markerUnits="userSpaceOnUse"
        />
        <MarkerCircle id="marker-circle" fill="#333" size={2} refX={2} />
        <MarkerArrow id="marker-arrow-odd" stroke="#333" size={8} strokeWidth={1} />
        <MarkerLine id="marker-line" fill="#333" size={16} strokeWidth={1} />
        <MarkerArrow id="marker-arrow" fill="#333" refX={2} size={6} />
        <rect width={width} height={height} fill="#efefef" rx={14} ry={14} />
        { pageContext.config.seriesKeys.map((seriesKey) => (
          <Group top={pageContext.config.padding.top} left={pageContext.config.padding.left}>
            { data.map((d) => (
              <circle
                r={3}
                cx={xScale(getXAxisData(d))}
                cy={yScale(getYAxisData(d, seriesKey))}
                stroke="rgba(33,33,33,0.5)"
                fill="transparent"
                onPointerMove={(e) => { handlePointerMove(e, d); }}
                onPointerLeave={hideTooltip}
              />
            ))}
            <LinePath
              curve={allCurves[curveTypes[0]]}
              data={data}
              x={(d) => xScale(getXAxisData(d))}
              y={(d) => yScale(getYAxisData(d, seriesKey))}
              stroke="#333"
              strokeWidth={2}
              strokeOpacity={1}
              shapeRendering="geometricPrecision"
              markerMid="url(#marker-circle)"
            />
          </Group>
        ))
        }
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
  );
}
