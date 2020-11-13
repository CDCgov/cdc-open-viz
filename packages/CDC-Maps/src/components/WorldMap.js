/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  ZoomableGroup,
  Geography,
} from 'react-simple-maps';
import { jsx } from '@emotion/core';
import topoJsonWorld from 'world-atlas/countries-50m.json';
import { interpolatePath } from 'd3-interpolate-path';
import CityList from './CityList';

const WorldMap = (props) => {
  const {
    state,
    applyTooltipsToGeo,
    processedData,
    geoClickHandler,
    applyLegendToValue,
    displayGeoName,
    supportedCountries,
    countryValues,
    rebuildTooltips
  } = props;

  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1.3 });

  useEffect(() => rebuildTooltips());

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

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

  const ZoomControls = (
    <div className="zoom-controls">
      <button onClick={handleZoomIn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <button onClick={handleZoomOut}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );

  const stylesObj = {
    default: {
      stroke: state.general.backgroundColor
    }
  };

  const geoList = (geographies) => {
    // If there's regions and they are filled out, slot the geos into groups
    if (state.general.hasRegions === true && state.columns.primary.name.length > 0 && state.columns.geosInRegion.name.length > 0) {
      // Create new geographies list where all the data is keyed to the original data object.
      const regionGeographies = {};

      geographies.forEach((geo) => {
        regionGeographies[geo.properties.name] = geo;
      });

      // Get list of geos in every region
      const regions = Object.keys(processedData);

      const regionsJsx = [];

      regions.forEach((regionName, i) => {
        let regionPath = '';

        let legendColors;

        const regionData = processedData[regionName];
        const geosInRegion = regionData[state.columns.geosInRegion.name].split(', ');

        // Once we receive data for this geographic item, setup variables.
        if (regionData !== undefined) {
          legendColors = applyLegendToValue(regionData);
        }

        // If a legend applies, return it with appropriate information.
        if (legendColors) {
          const toolTip = applyTooltipsToGeo(regionName, regionData);

          stylesObj.base = {
            fill: `${legendColors[0]} !important`,
            '&:hover': {
              fill: `${legendColors[1]} !important`
            },
            '&:active': {
              fill: `${legendColors[2]} !important`
            },
          };

          // When to add pointer cursor
          if ((state.columns.navigate && regionData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
            stylesObj.base = {
              ...stylesObj.base,
              cursor: 'pointer'
            };
          }

          const countriesList = [];

          geosInRegion.forEach((name) => {
            const geo = regionGeographies[name];

            // If a city of territory slipped in, ignore instead of failing
            if (!geo) {
              return true;
            }

            // Add the correct geoPath data to the list for interpolation
            const geoPaths = geo.feature;

            const tempPath = interpolatePath(regionPath, geoPaths);

            regionPath = tempPath(0);

            // Add the actual geo
            const country = (
              <Geography
                key={geo.rsmKey}
                className={`rsm-geography ${state.general.geoBorderColor}`}
                css={stylesObj.default}
                tabIndex={-1}
                geography={geo}
              />
            );

            countriesList.push(country);

            // When done processing, remove this item from the full list so we know to render the remaining geos on the map out differently after we're done constructing our regions.
            delete regionGeographies[name];
          });

          const regionGroup = (
            <path
              css={stylesObj.base}
              data-tip={toolTip}
              data-for="tooltip"
              tabIndex={-1}
              className={`rsm-geography ${state.general.geoBorderColor} region-${i}`}
              style={{ stroke: state.general.backgroundColor }}
              key={`region-${i}`}
              onClick={() => geoClickHandler(regionName, regionData)}
              d={regionPath}
            />
          );

          regionsJsx.push(regionGroup);
        }
      });

      // Regions are done, render out the remaining
      const unusedGeos = Object.keys(regionGeographies).filter((geo) => supportedCountries.includes(regionGeographies[geo].properties.NAME)).map((key) => {
        const geo = regionGeographies[key];

        return (
          <Geography
            key={geo.rsmKey}
            className={`rsm-geography ${state.general.geoBorderColor}`}
            css={stylesObj.default}
            tabIndex={-1}
            geography={geo}
          />
        );
      });

      regionsJsx.push(unusedGeos);

      return regionsJsx;
    }

    // Normal country display
    const geosJsx = geographies.filter((geo) => countryValues.includes(geo.properties.name)).map((geo) => {
      const geoName = geo.properties.name;

      const geoKey = Object.keys(supportedCountries).find((key) => supportedCountries[key].includes(geoName));

      const geoData = processedData[geoKey];

      const geoDisplayName = displayGeoName(supportedCountries[geoKey][0]);

      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToValue(geoData);
      }

      // If a legend applies, return it with appropriate information.
      if (legendColors) {
        const toolTip = applyTooltipsToGeo(geoDisplayName,
          geoData);

        const stylesObj = {
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
          <Geography
            data-tip={toolTip}
            data-for="tooltip"
            tabIndex={-1}
            className={`rsm-geography ${state.general.geoBorderColor}`}
            key={geo.rsmKey}
            geography={geo}
            onClick={() => geoClickHandler(geoDisplayName, geoData)} // Generic click handler to move all of the logic that needs to happen out of
            style={stylesObj}
          />
        );

        return renderedGeo;
      }

      // Default return geo, just the SVG with no additional information
      return (
        <Geography
          key={geo.rsmKey}
          className={`rsm-geography ${state.general.geoBorderColor}`}
          style={stylesObj.default}
          tabIndex={-1}
          geography={geo}
        />
      );
    });

    return geosJsx;
  };

  return (
    <>
      {state.general.type === 'data' && ZoomControls}
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <ComposableMap
            projection="geoMercator"
            width={880}
            height={500}
            style={styles.map}
          >
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
              maxZoom={3}
            >
              <Geographies geography={topoJsonWorld}>
                {({ geographies }) => geoList(geographies)}
              </Geographies>
              <CityList
                processedData={processedData}
                state={state}
                geoClickHandler={geoClickHandler}
                applyTooltipsToGeo={applyTooltipsToGeo}
                displayGeoName={displayGeoName}
                applyLegendToValue={applyLegendToValue}
              />
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </>
  );
};

export default WorldMap;