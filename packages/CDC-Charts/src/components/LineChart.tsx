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
import { MarkerCircle } from '@visx/marker';
import { timeParse, timeFormat } from 'd3-time-format';
import Context from '../context.tsx';

import '../scss/LineChart.scss';

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

export default function LineChart() {
  let { data, dimensions, colorScale, seriesHighlight, config } = useContext<any>(Context);

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

  const [ width, height ] = dimensions;

  const xMax = width - config.padding.left - config.padding.right;
  const yMax = height - config.padding.top - config.padding.bottom;

  const getXAxisData = (d: any) => d[config.xAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  const parseDate = timeParse(config.xAxis.dateFormat);
  const format = timeFormat('%b %d');
  const formatDate = (date: string) => format(parseDate(date) as Date);

  let xScale;
  let yScale;

  if (data) {
    data = data.slice(0, 8);

    // scales
    xScale = scaleBand<string>({
      domain: data.map(getXAxisData),
      padding: 0.2,
    });

    yScale = scaleLinear<number>({
      domain: [Math.min(...data.map((d) => Math.min(...config.seriesKeys.map((key) => Number(d[key]))))), Math.max(...data.map((d) => Math.max(...config.seriesKeys.map((key) => Number(d[key])))))],
    });

    xScale.rangeRound([0, xMax]);
    yScale.range([yMax, 0]);
  }

  const handlePointerEnter = useCallback(
    (event: React.PointerEvent<SVGCircleElement>, point, seriesKey) => {
      const containerX = ('clientX' in event ? event.clientX : 0) - containerBounds.left;
      const containerY = ('clientY' in event ? event.clientY : 0) - containerBounds.top;

      showTooltip({
        tooltipLeft: containerX,
        tooltipTop: containerY,
        tooltipData: {
          __html: `<div>
            ${config.xAxis.label}: ${point[config.xAxis.dataKey]} <br/>
            ${config.yAxis.label}: ${point[seriesKey]} <br/>
            ${config.seriesLabel ? `${config.seriesLabel}: ${seriesKey}` : ''}
          </div>
        `,
        },
      });
    },
    [showTooltip, containerBounds, config.seriesLabel, config.xAxis.dataKey, config.xAxis.label, config.yAxis.label],
  );

  return config && data && colorScale ? (
    <div className="line-chart-container">
      <svg viewBox={`0 0 ${width} ${height}`}>
        <MarkerCircle id="marker-circle" fill="#333" size={2} refX={2} />
        { config.seriesKeys.map((seriesKey) => (
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
                cx={xScale(getXAxisData(d))}
                cy={yScale(getYAxisData(d, seriesKey))}
                strokeWidth="25px"
                stroke="transparent"
                fill="colorScale ? colorScale(seriesKey) : '#000'"
                onPointerEnter={(e) => { handlePointerEnter(e, d, seriesKey); }}
                onPointerLeave={hideTooltip}
              />
            ))}
            <LinePath
              curve={allCurves.curveLinear}
              data={data}
              x={(d) => xScale(getXAxisData(d))}
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
        <AxisLeft
          scale={yScale}
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
  ) : <div className="loader"></div>;
}
