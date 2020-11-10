import 'react-app-polyfill/ie11';
import React, { useContext } from 'react';
import { Group } from '@visx/group';
import { BarGroup } from '@visx/shape';
import { LegendOrdinal } from '@visx/legend';
import { scaleLinear, scaleBand, scaleOrdinal } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { timeParse, timeFormat } from 'd3-time-format';
import Context from '../context.tsx';

import './BarChart.scss';

export default function BarChart() {
  const { pageContext } = useContext<any>(Context);

  const blue = '#222299';
  const green = '#229922';
  const red = '#992222';
  const font = '#000000';

  const width = pageContext.dimensions.width > 900 ? pageContext.dimensions.width * 0.7 : pageContext.dimensions.width;
  const height = 600;

  const xMax = width - pageContext.config.padding.left - pageContext.config.padding.right;
  const yMax = height - pageContext.config.padding.top - pageContext.config.padding.bottom;

  const parseDate = timeParse('%Y-%m-%d');
  const format = timeFormat('%b %d');
  const formatDate = (date: string) => format(parseDate(date) as Date);

  // accessors
  const getDate = (d: any) => d.date;

  let data;
  let keys;
  let dateScale;
  let cityScale;
  let tempScale;
  let colorScale;

  if (pageContext.data) {
    data = pageContext.data.slice(0, 8);
    keys = Object.keys(data[0]).filter((d) => d !== 'date');

    // scales
    dateScale = scaleBand<string>({
      domain: data.map(getDate),
      padding: 0.2,
    });
    cityScale = scaleBand<string>({
      domain: keys,
      padding: 0.1,
    });
    tempScale = scaleLinear<number>({
      domain: [0, Math.max(...data.map((d) => Math.max(...keys.map((key) => Number(d[key])))))],
    });
    colorScale = scaleOrdinal<string, string>({
      domain: keys,
      range: [blue, green, red],
    });

    dateScale.rangeRound([0, xMax]);
    cityScale.rangeRound([0, dateScale.bandwidth()]);
    tempScale.range([yMax, 0]);
  }

  /**
   * Functional components always return a JSX object, which is
   * the templating language React uses. It's a modified form of HTML
   * usually surrounded by parenthesis. There are some differences,
   * usually in attribute names.
   * Learn more: https://reactjs.org/docs/introducing-jsx.html
   */
  return (
    <div id="bar-chart-container" style={{ width: pageContext.dimensions.width }}>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="white" rx={14} />
        <Group top={pageContext.config.padding.top} left={pageContext.config.padding.left}>
          <BarGroup
            data={data}
            keys={keys}
            height={yMax}
            x0={getDate}
            x0Scale={dateScale}
            x1Scale={cityScale}
            yScale={tempScale}
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
                  />
                ))}
              </Group>
            ))}
          </BarGroup>
        </Group>
        <AxisLeft
          scale={tempScale}
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
          tickFormat={formatDate}
          scale={dateScale}
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

      <div id="legend-container" style={{ width: pageContext.dimensions.width > 900 ? pageContext.dimensions.width * 0.3 : pageContext.dimensions.width }}>
        <h2>{pageContext.config.legend.label}</h2>
        <LegendOrdinal
          scale={colorScale}
          direction={pageContext.dimensions.width > 900 ? 'column-reverse' : 'row'}
          itemDirection="row"
          labelMargin="0 20px 0 0"
          shapeMargin="0 10px 0"
        />
      </div>

      <div id="table-container">
        <table>
          <caption>{pageContext.config.table.label}</caption>
          <thead>
            <tr>
              <td>&nbsp;</td>
              {keys.map((key) => <th>{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                <th>{d.date}</th>
                {keys.map((key) => <td>{d[key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
