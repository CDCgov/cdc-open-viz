import React from "react";
import { scaleQuantize } from '@visx/scale';
import { Mercator, Graticule } from '@visx/geo';
import * as topojson from 'topojson-client';
import topology from "../data/us-states-geo-topo.json";

export const background = '#ffffff';

const usa = topojson.feature(topology, topology.objects.us_states_geo);

const color = scaleQuantize({
  domain: [
    Math.min(...usa.features.map((f) => f.properties.bees)),
    Math.max(...usa.features.map((f) => f.properties.bees))
  ],
  range: [
    '#ffb01d', '#ffa020', '#ff9221', '#ff8424', '#ff7425', '#fc5e2f', '#f94b3a', '#f63a48'
  ]
});

const HexMap = ({ width, height, events = true }) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width / 250) * 150;

  return width < 10 ? null : ( 

    <svg width={width} height={height}>
    <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />

    <Mercator
      data={usa.features}
      scale={scale}
      translate={[centerX + 1000, centerY + 500]}
    >
      {mercator => (
        <g>
          <Graticule graticule={g => mercator.path(g) || ''} stroke="none" />
          
          {mercator.features.map(({ feature, path, centroid }, i) => (
           
            <g>
              <path 
                id={feature.properties.iso3166_2}
                key={`map-feature-${i}`}
                d={path || ''}
                fill={color(feature.properties.bees)}
                stroke={background}
                strokeWidth={0.5}
                onClick={() => {
                  if (events) alert(`${feature.properties.iso3166_2}: ${feature.properties.bees}`);
                }}
              />
              <text
                x={centroid[0]}
                y={centroid[1]+5}
                key={`map-label-${i}`}
                textAnchor='middle'
                // fill='#fff'
                // href={'#' + feature.properties.iso3166_2}
              >
                {feature.properties.iso3166_2}
              </text>
            </g>
          ))}
        </g>
      )}
    </Mercator>
  </svg>
  )
}

export default HexMap;
