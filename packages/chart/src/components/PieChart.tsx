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
                      {Math.round((arc.endAngle - arc.startAngle) * 180 / Math.PI / 360 * 100) + '%'}
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

  const {width, height} = dimensions;

  const radius = Math.min(width, height) / 2;
  const centerY = height / 2;
  const centerX = width / 2;
  const donutThickness = radius;

  return width && height ? (
    <div ref={svgRef}>
      <svg width={width} height={height}>
        <Group top={centerY}  left={centerX}>
          <Pie
            data={data}
            pieValue={d => d[config.yAxis.dataKey]}
            pieSortValues={() => -1}
            innerRadius={radius - donutThickness}
            outerRadius={radius}
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
  ) : <div className="loader"></div>;
}
