import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from 'react-simple-maps';
import { geoCentroid } from "d3-geo";
import topoJsonStates from 'us-atlas/states-10m.json';
import chroma from 'chroma-js';
import Territory from './Territory';
import CityList from './CityList';
import stateAbbrs from '../data/us-states-abbr.json';

const UsaMap = (props) => {
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
        // Use white text if the background is dark, and dark grey if it's light
        if (chroma.contrast(textColor, legendColors[0]) < 4.5) {
          textColor = '#202020';
        }

        let needsPointer = false;

        // If we need to add a pointer cursor
        if ((state.columns.navigate && territoryData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          needsPointer = true;
        }

        territoryStyles = {
          color: textColor,
          backgroundColor: legendColors[0],
          borderColor: `${geoBorderColor} !important`,
          borderWidth: 1,
          borderStyle: 'solid',
          cursor: needsPointer ? 'pointer' : 'default',
          '&:hover': {
            backgroundColor: legendColors[1],
          },
          '&:active': {
            backgroundColor: legendColors[2],
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

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10]
  };

  const nudges = {
    'FL': [15, 3],
    'AK': [0, -8],
    'CA': [-10, 0],
    'NY': [5, 0],
    'MI': [13, 20],
    'LA': [-10, -3],
    'HI': [-10, 10],
    'ID': [0, 10],
    'WV': [-2, 2]
  }

  let xyMemo = new Map()

  const geoLabelJsx = (geo, bgColor = "#FFFFFF") => {
      let centroid
      
      if( xyMemo.has(geo.id) ) {
        centroid = xyMemo.get(geo.id)
      } else {
        centroid = geoCentroid(geo)
        xyMemo.set(geo.id, centroid)
      }

      const curr = stateAbbrs.find(s => s.val === geo.id)

      if(!curr) return null

      let textColor = "#FFF"

      // Dynamic text color
      if (chroma.contrast(textColor, bgColor) < 4.5 ) {
        textColor = '#202020';
      }

      let x = 0, y = 5

      if(nudges[curr.id]) {
        x += nudges[curr.id][0]
        y += nudges[curr.id][1]
      }

      if( undefined === offsets[curr.id] && centroid[0] > -160 && centroid[0] < -67 ) {
        return (
          <Marker coordinates={centroid}>
            <text x={x} y={y} fontSize={13} strokeWidth="0" style={{fill: textColor, stroke: 0}} textAnchor="middle">
              {curr.id}
            </text>
          </Marker>
        )
      }

      let [dx, dy] = offsets[curr.id]

      return (
        <Annotation
          subject={centroid}
          connectorProps={{
            stroke: "rgba(0,0,0,.5)",
            strokeWidth: 2,
            strokeLinecap: "round"
          }}
          dx={dx}
          dy={dy}
        >
          <text x={4} strokeWidth="0" fontSize={12} style={{fill: "#202020"}} alignmentBaseline="middle">
            {curr.id}
          </text>
        </Annotation>
      )
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies) => {
    // let label = state.general.displayStateLabels
    let label = true

    const geosJsx = geographies.map((geo) => {
      const geoName = geo.properties.name;

      // Map the name from the geo data with the appropriate key for the processed data
      const geoKey = Object.keys(supportedStates).find((key) => supportedStates[key].includes(geoName));

      const geoData = processedData[geoKey];

      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToValue(geoData);
      }

      const geoDisplayName = displayGeoName(geoKey);

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000') {
        const toolTip = applyTooltipsToGeo(geoDisplayName, geoData);

        const stylesObj = {
          fill: legendColors[0],
          stroke: geoStrokeColor,
          cursor: 'default',
          '&:hover': {
            fill: legendColors[1],
            stroke: geoStrokeColor
          },
          '&:active': {
            fill: legendColors[2],
            stroke: geoStrokeColor
          },
        };

        // When to add pointer cursor
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          stylesObj.cursor = 'pointer'
        }

        const renderedGeo = (
          <g className="geo-group" key={geo.rsmKey + "-group"} data-tip={toolTip} data-for="tooltip" css={stylesObj} onClick={() => geoClickHandler(geoDisplayName, geoData)}>
            <Geography
              tabIndex={-1}
              className={`rsm-geography ${state.general.geoBorderColor}`}
              key={geo.rsmKey}
              geography={geo}
            />
            {label && geoLabelJsx(geo, legendColors[0])}
          </g>
        );

        return renderedGeo;
      }

      const unusedStyles = {
        stroke: geoStrokeColor,
        strokeWidth: '1.3px',
        fill: '#E6E6E6',
        cursor: 'default'
      }

      // Default return state, just geo with no additional information
      return (
        <g className="geo-group" key={geo.rsmKey + "-group"} css={unusedStyles}>
          <Geography
            key={geo.rsmKey}
            className={`rsm-geography ${state.general.geoBorderColor}`}
            tabIndex={-1}
            geography={geo}
          />
          {/* {label && geoLabelJsx(geo)} */}
        </g>
      )
    });

    // Cities
    geosJsx.push(<CityList
      key="cities"
      processedData={processedData}
      state={state}
      geoClickHandler={geoClickHandler}
      applyTooltipsToGeo={applyTooltipsToGeo}
      displayGeoName={displayGeoName}
      applyLegendToValue={applyLegendToValue}
    />)

    return geosJsx;
  };

  return (
    <ErrorBoundary component="UsaMap">
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <ComposableMap
            width={880}
            height={500}
            style={styles.map}
            projection="geoAlbersUsa"
            data-html2canvas-ignore
          >
            <Geographies geography={topoJsonStates}>
              {({ geographies }) => constructGeoJsx(geographies)}
            </Geographies>
          </ComposableMap>
        </div>
      </div>
      {territories.length && (
        <section className="territories">
          <ul>
            <li className="label">{state.general.territoriesLabel}</li>
            {territories}
          </ul>
        </section>
      )}
    </ErrorBoundary>
  );
};

export default UsaMap;
