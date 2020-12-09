import React, { useContext, useCallback, useRef } from 'react';
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import {
  useTooltip,
  useTooltipInPortal,
  defaultStyles,
} from '@visx/tooltip';
import { animated, useTransition, interpolate } from 'react-spring';
import Context from '../context.tsx';

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

// react-spring transition definitions
type PieStyles = { startAngle: number; endAngle: number; opacity: number };

const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
  animate?: boolean;
  getKey: (d: PieArcDatum<Datum>) => string;
  getColor: (d: PieArcDatum<Datum>) => string;
  onClickDatum: (d: PieArcDatum<Datum>) => void;
  delay?: number;
};

function AnimatedPie<Datum>({
  arcs,
  path,
  getKey,
  getColor,
  onClickDatum,
}: AnimatedPieProps<Datum>) {
  const transitions = useTransition<PieArcDatum<Datum>, PieStyles>(
    arcs,
    getKey,
    // @ts-ignore react-spring doesn't like this overload
    {
      from: enterUpdateTransition,
      enter: enterUpdateTransition,
      update: enterUpdateTransition,
      leave: enterUpdateTransition,
    },
  );
  return (
    <>
      {transitions.map(
        ({
          item: arc,
          props,
          key,
        }: {
          item: PieArcDatum<Datum>;
          props: PieStyles;
          key: string;
        }) => {
          const [centroidX, centroidY] = path.centroid(arc);
          const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

          return (
            <g key={key}>
              <animated.path
                // compute interpolated path d attribute from intermediate angle values
                d={interpolate([props.startAngle, props.endAngle], (startAngle, endAngle) => path({
                  ...arc,
                  startAngle,
                  endAngle,
                }))}
                fill={getColor(arc)}
                onClick={() => onClickDatum(arc)}
                onTouchStart={() => onClickDatum(arc)}
              />
              {hasSpaceForLabel && (
                <animated.g style={{ opacity: props.opacity }}>
                  <text
                    fill="white"
                    x={centroidX}
                    y={centroidY}
                    dy=".33em"
                    fontSize={9}
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {getKey(arc)}
                  </text>
                </animated.g>
              )}
            </g>
          );
        },
      )}
    </>
  );
}

export default function PieChart() {
  const { pageContext } = useContext<any>(Context);

  const svgRef = useRef<HTMLDivElement>();

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
    tooltipLeft: tooltipStyles.width / 3,
    tooltipTop: tooltipStyles.height / 3,
    tooltipData: { __html: '' },
  });

  const getColor = scaleOrdinal({
    domain: pageContext.data.map(d => d[pageContext.config.xAxis.dataKey]),
    range: ['rgba(93,30,91,1)', 'rgba(93,30,91,0.8)', 'rgba(93,30,91,0.6)', 'rgba(93,30,91,0.4)'],
  });

  const width = pageContext.dimensions.chartWidth;
  const height = width;
  const margin = pageContext.config.padding;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const donutThickness = 50;

  let currentPieSegment = useRef<any>();

  const handleClick = useCallback(
    (pieSegment: PieArcDatum<any>) => {
      if (!currentPieSegment.current || currentPieSegment.current.data.name !== pieSegment.data.name) {
        currentPieSegment.current = pieSegment;
        const avgAngle = (pieSegment.startAngle + pieSegment.endAngle) / 2 - (Math.PI / 2);
        const containerX = ((width / 2) - containerBounds.left) + (((radius - donutThickness) / 2) * Math.cos(avgAngle));
        const containerY = ((height / 2) - containerBounds.top + svgRef.current.getBoundingClientRect().top) + (((radius - donutThickness) / 2) * Math.sin(avgAngle));

        showTooltip({
          tooltipLeft: containerX,
          tooltipTop: containerY,
          tooltipData: {
            __html: `<div>
              ${pageContext.config.xAxis.label}: ${pieSegment.data.name} <br/>
              ${pageContext.config.yAxis.label}: ${pieSegment.data[pageContext.config.yAxis.dataKey]}
            </div>
          `,
          },
        });
      } else {
        hideTooltip();
      }
    },
    [showTooltip, hideTooltip, width, height, radius, containerBounds, pageContext.config.yAxis.dataKey, pageContext.config.xAxis.label, pageContext.config.yAxis.label],
  );

  return (
    <div ref={svgRef}>
      <svg width={width} height={height}>
        <Group top={centerY + margin.top} left={centerX + margin.left}>
          <Pie
            data={pageContext.data}
            pieValue={d => d[pageContext.config.yAxis.dataKey]}
            pieSortValues={() => -1}
            outerRadius={radius - donutThickness * 1.3}
          >
            {pie => (
              <AnimatedPie<any>
                {...pie}
                getKey={d => d.data[pageContext.config.xAxis.dataKey]}
                getColor={d => getColor(d.data[pageContext.config.yAxis.dataKey])}
                onClickDatum={(pieSegment) => { handleClick(pieSegment); }}
              />
            )}
          </Pie>
        </Group>
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
