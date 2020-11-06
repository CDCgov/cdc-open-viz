import 'react-app-polyfill/ie11';
import React, { useContext } from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import Context from '../context.tsx';

export default function BarChart() {
  const { pageContext } = useContext<any>(Context);

  let xScale;
  let yScale;
  let compose;
  let xPoint;
  let yPoint;

  // Define the graph dimensions and margins
  const width = 500;
  const height = 500;
  const margin = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  };

  // Then we'll create some bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // We'll make some helpers to get at the data we want
  const x = (d) => d.letter;
  const y = (d) => +d.frequency * 100;

  if (pageContext.data) {
    xScale = scaleBand({
      range: [0, xMax],
      round: true,
      domain: pageContext.data.map(x),
      padding: 0.4,
    });
    yScale = scaleLinear({
      range: [yMax, 0],
      round: true,
      domain: [0, Math.max(...pageContext.data.map(y))],
    });

    compose = (scale, accessor) => (data) => scale(accessor(data));
    xPoint = compose(xScale, x);
    yPoint = compose(yScale, y);
  }

  /**
   * Functional components always return a JSX object, which is
   * the templating language React uses. It's a modified form of HTML
   * usually surrounded by parenthesis. There are some differences,
   * usually in attribute names.
   * Learn more: https://reactjs.org/docs/introducing-jsx.html
   */
  return (
    <svg width={width} height={height}>
      {pageContext.data.map((d) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group key={`bar-${d.letter}`}>
            <AxisLeft
              scale={yScale}
              top={0}
              left={30}
              label="Frequency"
              stroke="#1b1a1e"
            />

            <AxisBottom
              scale={xScale}
              top={yMax}
              left={30}
              label="Letter"
              numTicks={26}
              stroke="#1b1a1e"
            />

            <Bar
              x={xPoint(d) + 30}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#fc2e1c"
            />
          </Group>
        );
      })}
    </svg>
  );
}
