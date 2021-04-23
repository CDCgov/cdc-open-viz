import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Mercator, Graticule, Scale } from '@visx/geo';
import * as topojson from 'topojson-client';
import topology from "../data/us-states-geo-topo.json";
import Territory from './Territory';

const usa = topojson.feature(topology, topology.objects.us_states_geo);
const geographies = usa.features;

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

  // Set text to black or white based on the background color
  const setTextContrast = (hexcolor) => {
    // If a leading # is provided, remove it
    if (hexcolor.slice(0, 1) === '#') {
      hexcolor = hexcolor.slice(1);
    }
  
    // If a three-character hexcode, make six-character
    if (hexcolor.length === 3) {
      hexcolor = hexcolor.split('').map(function (hex) {
        return hex + hex;
      }).join('');
    }
  
    // Convert to RGB value
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
  
    // Get YIQ ratio
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  
    // Check contrast
    return (yiq >= 128) ? 'black' : 'white';
  };

  const territories = [];

  territoriesData.forEach((territory) => {
    const geoBorderColor = state.general.geoBorderColor !== 'sameAsBackground' ? state.general.geoBorderColor : '#fff';

    const territoryData = processedData[territory];

    let toolTip;

    let territoryStyles = {
      backgroundColor: '#E6E6E6',
      color: '#202020',
      borderColor: `${geoBorderColor} !important`,
      borderWidth: 1,
      borderStyle: 'solid'
    };

    if (territoryData) {
      toolTip = applyTooltipsToGeo(displayGeoName(territory), territoryData);

      const legendColors = applyLegendToValue(territoryData);

      let textColor = '#FFF';

      if (legendColors && legendColors[0] !== '#000000') {

        let needsPointer = false;

        // If we need to add a pointer cursor
        if ((state.columns.navigate && territoryData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          
          needsPointer = true;
        }

        territoryStyles = {
          backgroundColor: legendColors[0],
          border: `1px solid ${geoBorderColor}!important`,
          color: setTextContrast(legendColors[0]),
          cursor: needsPointer ? 'pointer' : 'default',

          // psuedo elements used to make the tops and bottoms 
          // of the hexagons are actually borders
          // '&:before': {
          //   // the shape is a border so needs the background color
          //   borderBottomColor: `${legendColors[0]} !important`,
          //   // the border is a boxshadow since we can't apply a border to a border
          //   boxShadow: `1px -1px 2px ${geoBorderColor}`, 
          // },
          // '&:after': {
          //   borderTopColor: `${legendColors[0]} !important`,
          //   boxShadow: `-1px 1px 2px ${geoBorderColor}`,
          // },
          '&:hover': {
            backgroundColor: legendColors[1],
            // '&:before': {
            //   borderBottomColor: `${legendColors[1]} !important`,
            // },
            // '&:after': {
            //   borderTopColor: `${legendColors[1]} !important`,
            // }
          },
          '&:active': {
            backgroundColor: legendColors[2],
            '&:hover': {
              backgroundColor: legendColors[2],
              // '&:before': {
              //   borderBottomColor: `${legendColors[2]} !important`,
              // },
              // '&:after': {
              //   borderTopColor: `${legendColors[2]} !important`,
              // }
            },
          }
        };
      }
    }

    territories.push((
      <Territory
        key={`territory-${territory}`}
        geoBorderColor={geoBorderColor}
        toolTip={toolTip}
        geoClickHandler={geoClickHandler}
        styles={territoryStyles}
        territoryData={territoryData}
        label={supportedTerritories[territory][1]}
        fullName={territory}
      />
    ));
  });

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

      const geoData = processedData[geoKey];

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
          }
        };
        
        // When to add pointer cursor
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          stylesObj.base = {
            ...stylesObj.base,
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
              key={geo.rsmKey+'-text'}
              textAnchor='middle'
              style={{pointerEvents: "none", fontSize: '16px', fill: setTextContrast(legendColors[0])}}
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
            style={{pointerEvents: "none", fontSize: '.9em'}}
          >
            {geoHex.feature.properties.iso3166_2}
          </text>
        </g>
      );
    });

    return geosJsx;
  };

  const width = 880; // same as usa
  const height = 500; // same as usa
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width / 220) * 160;

  return width < 10 ? null : ( 
    <div>
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        data-html2canvas="true" 
        className="rsm-svg" 
        style={{width: '100%', height:'100%', overflow: 'hidden'}}
      >
        <rect 
          x={0}
          y={0} 
          width={width} 
          height={height} 
          fill='transparent' 
          rx={14} 
        />
        <Mercator
          key='hex-map'
          data={usa.features}
          scale={scale}
          translate={ [centerX + 1150, centerY + 525] }
        >
          {mercator => (
            <g>
              <Graticule graticule={g => mercator.path(g) || ''} stroke="none" />
                {geoList(geographies, mercator)}
            </g>
          )}
        </Mercator>
        
     </svg>
     {territories.length > 0
          && (
            <section className="territories">
              <ul>
                <li className="label">{state.general.territoriesLabel}</li>
                {territories}
              </ul>
            </section>
          )}
    </div>
  )
}

export default HexMap;
