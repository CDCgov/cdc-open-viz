import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { scaleQuantize } from '@visx/scale';
import { Mercator, Graticule } from '@visx/geo';
import * as topojson from 'topojson-client';
import topology from "../data/us-states-geo-topo.json";
import Territory from './Territory';
import chroma from 'chroma-js';

export const background = '#ffffff';

const usa = topojson.feature(topology, topology.objects.us_states_geo);
const geographies = usa.features;

const color = scaleQuantize({
  domain: [
    Math.min(...usa.features.map((f) => f.properties.bees)),
    Math.max(...usa.features.map((f) => f.properties.bees))
  ],
  range: [
    '#ffb01d', '#ffa020', '#ff9221', '#ff8424', '#ff7425', '#fc5e2f', '#f94b3a', '#f63a48'
  ]
});

// todo remove this sizing
const HexMap = (props) => {
  const {
    state,
    applyTooltipsToGeo,
    processedData,
    geoClickHandler,
    applyLegendToValue,
    displayGeoName,
    supportedStates,
    supportedTerritories,
    rebuildTooltips
  } = props;

  const [territoriesData, setTerritoriesData] = useState([]);

  useEffect(() => {
    const territoriesKeys = Object.keys(supportedTerritories); // processedData will have already mapped abbreviated territories to their full names

    const dataKeys = Object.keys(processedData);

    // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
    const territoriesList = dataKeys.filter((name) => territoriesKeys.includes(name));

    setTerritoriesData(territoriesList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processedData]);

  useEffect(() => rebuildTooltips());

  const styles = {
    container: {
      position: 'relative',
      height: 0,
      paddingBottom: '50%'
    },
    innerContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    map: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    }
  };

  const debug = (item, item2 = null) => {
    debugger;

    return item;
  }

  // const styles = {
  //   container: {
  //     position: 'relative',
  //     height: 0,
  //     paddingBottom: '50%'
  //   },
  //   innerContainer: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0
  //   },
  //   map: {
  //     width: '100%',
  //     height: '100%',
  //     overflow: 'hidden',
  //   }
  // };

  const stateLookup = ( searchValue, array ) => {
    var returnVal = null;
    var i;
    for(i=0; i<array.length; i++)
    {
      if(array[i].feature.properties.state === searchValue)
      {
        
        returnVal = array[i];
        break;
      }
    }
    
    return returnVal;
  }

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  const geoList = (geographies, mercator) => {
    const unusedStyles = {
      default: {
        stroke: geoStrokeColor,
        strokeWidth: '1.3px',
        fill: '#E6E6E6'
      }
    }
    const geosJsx = geographies.map((geo) => {
      const geoName = geo.properties.state;

      // Map the name from the geo data with the appropriate key for the processed data
      const geoKey = Object.keys(supportedStates).find((key) => supportedStates[key].includes(geoName));

      const geoData = processedData[geoName];
// debugger;
      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToValue(geoData);
      }

      const geoDisplayName = displayGeoName(geoKey);

      // Get path for geo
      let geoHex = stateLookup( geoName, mercator.features)
      

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000') {
        const toolTip = applyTooltipsToGeo(geoDisplayName, geoData);

        const stylesObj = {
          base: {
            fill: legendColors[0],
            '&:hover': {
              fill: `${legendColors[1]} !important`
            },
            '&:active': {
              fill: `${legendColors[2]} !important`
            },
          },
          default: { 
            fill: legendColors[0],
            stroke: state.general.backgroundColor
          },
          hover: {
            fill: legendColors[1],
            stroke: state.general.backgroundColor
          },
          pressed: {
            fill: legendColors[2],
            stroke: state.general.backgroundColor
          },
        };

        
        // When to add pointer cursor
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          stylesObj.hover = {
            ...stylesObj.hover,
            cursor: 'pointer'
          };
        }

        const renderedGeo = (
          <g>
            <path 
              data-tip={toolTip}
              data-for="tooltip"
              tabIndex={-1}
              key={geo.rsmKey}
              d={geoHex.path || ''}
              className={`rsm-geography ${state.general.geoBorderColor}`}
              css={stylesObj.base}
              style={stylesObj.base}
              onClick={() => geoClickHandler(geoDisplayName, geoData)}
            />
            <text
              x={geoHex.centroid[0]}
              y={geoHex.centroid[1]+5}
              key={geo.rsmKey}
              textAnchor='middle'
              style={{pointerEvents: "none", fontSize: '16px'}}
            >
              {geoHex.feature.properties.iso3166_2}
            </text>
          </g>
        );

        return renderedGeo;
      }

      // Default return state, just the geo territory with no additional information
      return (
        <g>
          <path 
            data-found='none'
            key={geo.rsmKey}
            className={`rsm-geography ${state.general.geoBorderColor}`}
            d={geoHex.path || ''}
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
            style={unusedStyles.default}
          />
          <text
            x={geoHex.centroid[0]}
            y={geoHex.centroid[1]+5}
            key={geo.rsmKey+'-text'}
            textAnchor='middle'
            style={{pointerEvents: "none", fontSize: '16px'}}
          >
            {geoHex.feature.properties.iso3166_2}
          </text>
        </g>
      );
    });

    return geosJsx;
  };

  //todo remove static sizing
  const width = 1000;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width / 250) * 150;

  return width < 10 ? null : ( 

    <svg className="rsm-svg" width={width} height={height}>
    <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />

    <Mercator
      data={usa.features}
      scale={scale}
      translate={[centerX + 1000, centerY + 500]}
    >
      {mercator => (
        <g>
          <Graticule graticule={g => mercator.path(g) || ''} stroke="none" />
            {geoList(geographies, mercator)}
        </g>
      )}
    </Mercator>
  </svg>
  )
}

export default HexMap;
