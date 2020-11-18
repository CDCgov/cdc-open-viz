import 'react-app-polyfill/ie11';
import React, { useContext, useState, useCallback } from 'react';
import { Group } from '@visx/group';
import { BarGroup } from '@visx/shape';
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import { scaleLinear, scaleBand, scaleOrdinal } from '@visx/scale';
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

const viewportCutoff = 900;
const legendPercent = 0.2;

const blue = '#222299';
const green = '#229922';
const red = '#992222';
const font = '#000000';

const legendGlyphSize = 15;

export default function BarChart() {
  const { pageContext } = useContext<any>(Context);
  const [tableExpanded, setTableExpanded] = useState<boolean>(pageContext.config.table.expanded);
  const [seriesHighlight, setSeriesHighlight] = useState<Array<any>>([]);

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

  const width = (!pageContext.config.legend.hide && pageContext.dimensions.width > viewportCutoff) ? pageContext.dimensions.width * (1 - legendPercent) : pageContext.dimensions.width;
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
  let cityScale;
  let tempScale;
  let colorScale;

  if (pageContext.data) {
    data = pageContext.data.slice(0, 8);

    // scales
    xScale = scaleBand<string>({
      domain: data.map(getXAxisData),
      padding: 0.2,
    });
    cityScale = scaleBand<string>({
      domain: pageContext.config.seriesKeys,
      padding: 0.1,
    });
    tempScale = scaleLinear<number>({
      domain: [0, Math.max(...data.map((d) => Math.max(...pageContext.config.seriesKeys.map((key) => Number(d[key])))))],
    });
    colorScale = scaleOrdinal<string, string>({
      domain: pageContext.config.seriesKeys,
      range: [blue, green, red],
    });

    xScale.rangeRound([0, xMax]);
    cityScale.rangeRound([0, xScale.bandwidth()]);
    tempScale.range([yMax, 0]);
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
            ${pageContext.config.yAxis.label}: ${bar.value}
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
  return (
    <div className="bar-chart-container" style={{ width: pageContext.dimensions.width }}>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="white" rx={14} />
        <Group top={pageContext.config.padding.top} left={pageContext.config.padding.left}>
          <BarGroup
            data={data}
            keys={pageContext.config.seriesKeys}
            height={yMax}
            x0={getXAxisData}
            x0Scale={xScale}
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
                    display={seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1 ? 'block' : 'none'}
                    onPointerMove={(e) => { handlePointerMove(e, bar, barGroup); }}
                    onPointerLeave={hideTooltip}
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

      <div className="legend-container" hidden={pageContext.config.legend.hide} style={{ width: pageContext.dimensions.width > viewportCutoff ? pageContext.dimensions.width * legendPercent : pageContext.dimensions.width }}>
        <h2>{pageContext.config.legend.label}</h2>
        <LegendOrdinal
          scale={colorScale}
          itemDirection="row"
          labelMargin="0 20px 0 0"
          shapeMargin="0 10px 0"
        >{labels => (
          <div style={{ display: 'flex', flexDirection: pageContext.dimensions.width > 900 ? 'column-reverse' : 'row' }}>
            {labels.map((label, i) => (
              <LegendItem
                key={`legend-quantile-${i}`}
                margin="0 5px"
                onClick={() => {
                  let newSeriesHighlight = [];
                  seriesHighlight.forEach((value) => {
                    newSeriesHighlight.push(value);
                  });
                  if (newSeriesHighlight.indexOf(label.datum) !== -1) {
                    newSeriesHighlight.splice(newSeriesHighlight.indexOf(label.datum), 1);
                  } else {
                    newSeriesHighlight.push(label.datum);
                  }

                  setSeriesHighlight(newSeriesHighlight);
                }}
              >
                <svg width={legendGlyphSize} height={legendGlyphSize}>
                  <rect fill={label.value} width={legendGlyphSize} height={legendGlyphSize} />
                </svg>
                <LegendLabel align="left" margin="0 0 0 4px">
                  {label.text}
                </LegendLabel>
              </LegendItem>
            ))}
          </div>
        )}
        </LegendOrdinal>
      </div>

      <div className="table-container">
        <table>
          <caption tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') setTableExpanded(!tableExpanded); }} onClick={() => { setTableExpanded(!tableExpanded); }}>
            {pageContext.config.table.label}
            <span className="table-indicator">{tableExpanded ? '-' : '+'}</span>
          </caption>
          <thead hidden={!tableExpanded}>
            <tr>
              <td>&nbsp;</td>
              {pageContext.config.seriesKeys.map((key) => <th>{key}</th>)}
            </tr>
          </thead>
          <tbody hidden={!tableExpanded}>
            {data.map((d) => (
              <tr>
                <th>{d[pageContext.config.xAxis.dataKey]}</th>
                {pageContext.config.seriesKeys.map((key) => <td>{d[key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
