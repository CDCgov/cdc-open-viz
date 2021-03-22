import React, { useContext } from 'react';

import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import Context from '../context.tsx';

export default function LineChart({ xScale, yScale, getXAxisData, getYAxisData }) {
  const { data, colorScale, seriesHighlight, config, formatNumber } = useContext<any>(Context);

  return (
    <ErrorBoundary component="LineChart">
      <Group left={config.yAxis.size}>
        { (config.lineSeriesKeys || config.seriesKeys).map((seriesKey, index) => (
          <Group
            key={`series-${seriesKey}`}
            opacity={config.legend.highlight && seriesHighlight.length > 0 && seriesHighlight.indexOf(seriesKey) === -1 ? 0.5 : 1}
            display={config.legend.highlight || seriesHighlight.length === 0 || seriesHighlight.indexOf(seriesKey) !== -1 ? 'block' : 'none'}
          >
            { data.map((d, dataIndex) => (
              <Group key={`series-${seriesKey}-point-${dataIndex}`}>
              <text 
                  display={config.labels && config.labels.display ? 'block': 'none'}
                  x={xScale(getXAxisData(d))}
                  y={yScale(getYAxisData(d, seriesKey))}
                  fill={colorScale ? colorScale(config.seriesLabels ? config.seriesLabels[seriesKey] : seriesKey) : '#000'}
                  fontSize={(config.labels && config.labels.fontSize) ? config.labels.fontSize : 16}
                  textAnchor="middle">
                    {formatNumber(d[seriesKey])}
                </text>
                <circle
                  key={`${seriesKey}-${dataIndex}`}
                  r={3}
                  cx={xScale(getXAxisData(d))}
                  cy={yScale(getYAxisData(d, seriesKey))}
                  strokeWidth="100px"
                  fill={colorScale ? colorScale(config.seriesLabels ? config.seriesLabels[seriesKey] : seriesKey) : '#000'}
                  style={{fill: colorScale ? colorScale(config.seriesLabels ? config.seriesLabels[seriesKey] : seriesKey) : '#000'}}
                  data-tip={`<div>
                    ${config.xAxis.label}: ${d[config.xAxis.dataKey]} <br/>
                    ${config.yAxis.label}: ${formatNumber(d[seriesKey])} <br/>
                    ${config.seriesLabel ? `${config.seriesLabel}: ${seriesKey}` : ''} 
                  </div>`}
                  data-for="global"
                />
              </Group>
            ))}
            <LinePath
              curve={allCurves.curveLinear}
              data={data}
              x={(d) => xScale(getXAxisData(d))}
              y={(d) => yScale(getYAxisData(d, seriesKey))}
              stroke={colorScale ? colorScale(config.seriesLabels ? config.seriesLabels[seriesKey] : seriesKey) : '#000'}
              strokeWidth={2}
              strokeOpacity={1}
              shapeRendering="geometricPrecision"
            />
          </Group>
        ))
        }
      </Group>
    </ErrorBoundary>
  );
}
