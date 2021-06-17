import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import { geoCentroid, geoAlbersUsa } from "d3-geo";
import { feature } from "topojson-client";
import topoJSON from 'us-atlas/states-10m.json';
import { AlbersUsa } from '@visx/geo';
import chroma from 'chroma-js';
import Territory from './Territory';
import CityList from './CityList';
import stateAbbrs from '../data/us-states-abbr.json';

const { features: unitedStates } = feature(topoJSON, topoJSON.objects.states)

let projection = geoAlbersUsa()

const UsaMap = (props) => {
  const {
    state,
    applyTooltipsToGeo,
    data,
    geoClickHandler,
    applyLegendToValue,
    displayGeoName,
    supportedStates,
    supportedTerritories,
    rebuildTooltips
  } = props;

  const [territoriesData, setTerritoriesData] = useState([]);

  useEffect(() => {
    const territoriesKeys = Object.keys(supportedTerritories); // data will have already mapped abbreviated territories to their full names

    const dataKeys = Object.keys(data);

    // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
    const territoriesList = dataKeys.filter((name) => territoriesKeys.includes(name));

    setTerritoriesData(territoriesList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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

    const territoryData = data[territory];

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
    NJ: [42, 1],
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
        centroid = projection(geoCentroid(geo))
        xyMemo.set(geo.id, centroid)
      }

      let abbr = stateAbbrs[geo.id]

      if(undefined === abbr) return null

      let textColor = "#FFF"

      // Dynamic text color
      if (chroma.contrast(textColor, bgColor) < 4.5 ) {
        textColor = '#202020';
      }

      let x = 0, y = 5

      if(nudges[abbr]) {
        x += nudges[abbr][0]
        y += nudges[abbr][1]
      }

      if( undefined === offsets[abbr] ) {
        return (
          <g transform={`translate(${centroid})`}>
            <text x={x} y={y} fontSize={13} strokeWidth="0" style={{fill: textColor, stroke: 0}} textAnchor="middle">
              {abbr}
            </text>
          </g>
        )
      }

      const createConnectorPath = (dx = 30, dy = 30) => {
        const curvature = [0, 0]
        const curveX = dx / 2 * curvature[0]
        const curveY = dy / 2 * curvature[1]
        return `M${0},${0} Q${-dx / 2 - curveX},${-dy / 2 + curveY} ${-dx},${-dy}`
      }

      let [dx, dy] = offsets[abbr]

      return (
        <g transform={`translate(${centroid[0] + dx}, ${centroid[1] + dy})`}>
          <path d={createConnectorPath(dx, dy, 0.5)} stroke="rgba(0,0,0,.5)" fill="transparent" strokeWidth={2} />
          <text x={4} strokeWidth="0" fontSize={12} style={{fill: "#202020"}} alignmentBaseline="middle">
            {abbr}
          </text>
        </g>
      )
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies) => {
    let showLabel = state.general.displayStateLabels
    
    const geosJsx = geographies.map(( {feature: geo, path = ''}) => {
      const geoName = geo.properties.name;

      let styles = {
        stroke: geoStrokeColor,
        strokeWidth: '1.3px',
        fill: '#E6E6E6',
        cursor: 'default'
      }

      // Map the name from the geo data with the appropriate key for the processed data
      const geoKey = Object.keys(supportedStates).find((key) => supportedStates[key].includes(geoName));

      if(!geoKey) return

      const geoData = data[geoKey];

      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToValue(geoData);
      }

      const geoDisplayName = displayGeoName(geoKey);

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000') {
        const tooltip = applyTooltipsToGeo(geoDisplayName, geoData);

        styles = {
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
          styles.cursor = 'pointer'
        }

        return (
          <g
            data-for="tooltip"
            data-tip={tooltip}
            key={geo.id + '-group'}
            className="geo-group"
            css={styles}
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
          >
            <path
              tabIndex={-1}
              className='single-geo'
              d={path}
            />
            {showLabel && geoLabelJsx(geo, legendColors[0])}
          </g>
        )
      }

      // Default return state, just geo with no additional information
      return (
        <g
        key={geo.id + '-group'}
          className="geo-group"
          css={styles}
        >
          <path
            tabIndex={-1}
            className='single-geo'
            d={path}
          />
          {showLabel && geoLabelJsx(geo, style.fill)}
        </g>
      )
    });

    // Cities
    geosJsx.push(<CityList
      projection={projection}
      key="cities"
      data={data}
      state={state}
      geoClickHandler={geoClickHandler}
      applyTooltipsToGeo={applyTooltipsToGeo}
      displayGeoName={displayGeoName}
      applyLegendToValue={applyLegendToValue}
    />)

    return geosJsx;
  };

  /* TODO: AlbersUsa translate={[440, 250]} once my PR gets in to visx core */
  return (
    <ErrorBoundary component="UsaMap">
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <svg viewBox="0 0 880 500" style={styles.map}>
              <AlbersUsa data={unitedStates}>
                {({ features, path }) => {
                  return constructGeoJsx(features); }}
              </AlbersUsa>
          </svg>
        </div>
      </div>
      {territories.length > 0 && (
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
