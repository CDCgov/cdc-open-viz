import React, { useContext, useCallback, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import { animated, useTransition, interpolate } from 'react-spring';
import Context from '../context.tsx';

// react-spring transition definitions
type PieStyles = { startAngle: number; endAngle: number; opacity: number };

const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

export default function PieChart({numberFormatter}) {
  const { data, config, dimensions, colorScale } = useContext<any>(Context);

  type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
    animate?: boolean;
    getKey: (d: PieArcDatum<Datum>) => string;
    delay?: number;
  };
  
  function AnimatedPie<Datum>({
    arcs,
    path,
    getKey,
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
                  fill={colorScale((arc.data as any).name)}
                  data-tip={`<div>
                    ${config.xAxis.label}: ${(arc.data as any).name} <br/>
                    ${config.yAxis.label}: ${numberFormatter(arc.data[config.yAxis.dataKey])}
                  </div>`}
                  data-html="true"
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

  const svgRef = useRef<HTMLDivElement>();

  const [width, height] = dimensions;
  const margin = config.padding;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const donutThickness = 50;

  return (
    <div ref={svgRef}>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <Group top={centerY + margin.top} left={centerX + margin.left}>
          <Pie
            data={data}
            pieValue={d => d[config.yAxis.dataKey]}
            pieSortValues={() => -1}
            outerRadius={radius - donutThickness * 1.3}
          >
            {pie => (
              <AnimatedPie<any>
                {...pie}
                getKey={d => d.data[config.xAxis.dataKey]}
              />
            )}
          </Pie>
        </Group>
      </svg>

      <ReactTooltip />
    </div>
  );
}
