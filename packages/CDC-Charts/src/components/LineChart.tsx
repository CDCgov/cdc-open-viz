import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import { extent, max } from 'd3-array';
import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleTime, scaleLinear } from '@visx/scale';
import {
  MarkerArrow, MarkerCross, MarkerX, MarkerCircle, MarkerLine,
} from '@visx/marker';
import generateDateValue from '@visx/mock-data/lib/generators/genDateValue';

const curveTypes = Object.keys(allCurves);
const lineCount = 5;
const series = new Array(lineCount)
  .fill(null)
  .map(() => generateDateValue(25).sort((a, b) => a.date.getTime() - b.date.getTime()));
const allData = series.reduce((rec, d) => rec.concat(d), []);

const getX = (d) => d.date;
const getY = (d) => d.value;

const xScale: any = scaleTime({
  domain: extent(allData, getX),
});
const yScale: any = scaleLinear({
  domain: [0, max(allData, getY)],
});

export default function LineChart() {
  const showControls = true;
  const width = 500;
  const height = 500;

  const [curveType, setCurveType] = useState('curveNatural');
  const [showPoints, setShowPoints] = useState(true);
  const svgHeight = showControls ? height - 50 : height;
  const lineHeight = svgHeight / lineCount;

  xScale.range([0, 500 - 50]);
  yScale.range([lineHeight - 2, 0]);

  return (
    <div className="visx-curves-demo">
      { showControls && (
        <>
          <div>
            Curve type &nbsp;
            <select onChange={(e) => setCurveType(e.target.value)} value={curveType}>
              {curveTypes.map((curve) => (
                <option key={curve} value={curve}>
                  {curve}
                </option>
              ))}
            </select>
          </div>
          &nbsp;
          <div>
            Show points&nbsp;
            <input
              type="checkbox"
              checked={showPoints}
              onChange={() => setShowPoints(!showPoints)}
            />
          </div>
          <br />
        </>
      )}
      <svg width={width} height={svgHeight}>
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
        <rect width={width} height={svgHeight} fill="#efefef" rx={14} ry={14} />
        { width > 8
          && series.map((lineData, i) => {
            const even = i % 2 === 0;
            let markerStart = even ? 'url(#marker-cross)' : 'url(#marker-x)';
            if (i === 1) markerStart = 'url(#marker-line)';
            const markerEnd = even ? 'url(#marker-arrow)' : 'url(#marker-arrow-odd)';
            return (
              <Group top={i * lineHeight} left={13}>
                { showPoints
                  && lineData.map((d) => (
                    <circle
                      r={3}
                      cx={xScale(getX(d))}
                      cy={yScale(getY(d))}
                      stroke="rgba(33,33,33,0.5)"
                      fill="transparent"
                    />
                  ))}
                <LinePath
                  curve={allCurves[curveType]}
                  data={lineData}
                  x={(d) => xScale(getX(d))}
                  y={(d) => yScale(getY(d))}
                  stroke="#333"
                  strokeWidth={even ? 2 : 1}
                  strokeOpacity={even ? 0.6 : 1}
                  shapeRendering="geometricPrecision"
                  markerMid="url(#marker-circle)"
                  markerStart={markerStart}
                  markerEnd={markerEnd}
                />
              </Group>
            );
          })}
      </svg>
    </div>
  );
}
