import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import topoJsonStates from 'us-atlas/states-10m.json';
import chroma from 'chroma-js';
import Territory from './Territory';
import CityList from './CityList';

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

  const geoList = (geographies) => {
    const unusedStyles = {
      default: {
        stroke: geoStrokeColor,
        strokeWidth: '1.3px',
        fill: '#E6E6E6'
      }
    }
    // If there's regions and they are filled out, slot the geos into groups
    if (state.general.hasRegions === true && state.columns.geosInRegion.name.length > 0) {
      // Create new geographies list where all the data is keyed to the original data object.
      const regionGeographies = {};

      geographies.forEach((geo) => {
        regionGeographies[geo.properties.name] = geo;
      });

      // Get list of geos in every region
      const regions = Object.keys(processedData);

      const regionsJsx = [];

      regions.forEach((regionName) => {
        const regionData = processedData[regionName];

        let legendColors;

        const geosInRegion = regionData[state.columns.geosInRegion.name].split(', ');

        // Once we receive data for this geographic item, setup variables.
        if (regionData !== undefined) {
          legendColors = applyLegendToValue(regionData);
        }

        // If a legend applies, return it with appropriate information.
        if (legendColors && legendColors[0] !== '#000000') {
          const toolTip = applyTooltipsToGeo(regionName, regionData);

          const stylesObj = {
            base: {
              fill: legendColors[0],
              '&:hover': {
                fill: `${legendColors[1]}  !important`,
              },
              '&:active': {
                fill: `${legendColors[2]}  !important`
              },
            }
          };

          // When to add pointer cursor
          if ((state.columns.navigate && regionData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
            stylesObj.base = {
              ...stylesObj.base,
              cursor: 'pointer'
            };
          }

          let regionPath = '';

          geosInRegion.forEach((name) => {
            const topoJsonData = regionGeographies[name];

            // If a city of territory slipped in, ignore instead of failing
            if (!topoJsonData) {
              return true;
            }

            // Add the path data for this geo to the larger region path
            regionPath += topoJsonData.svgPath;

            // When done processing, remove this item from the full list so we know to render the remaining geos on the map out differently after we're done constructing our regions.
            delete regionGeographies[name];
          });
debugger;
          const regionGroup = (
            <path
              css={stylesObj.base}
              data-tip={toolTip}
              data-for="tooltip"
              tabIndex={-1}
              className={`rsm-geography ${state.general.geoBorderColor} region-${regionName}`}
              style={{ stroke: geoStrokeColor, strokeWidth: '1.3px', fill: legendColors[0] }}
              key={`region-${regionName}`}
              onClick={() => geoClickHandler(regionName, regionData)}
              d={regionPath}
            />
          );

          regionsJsx.push(regionGroup);
        }
      });

      // Regions are done, render out the remaining
      const unusedGeos = Object.keys(regionGeographies).map((key) => {
        const geo = regionGeographies[key];

        return (
          <Geography
            style={unusedStyles}
            key={geo.rsmKey}
            className={`rsm-geography ${state.general.geoBorderColor}`}
            tabIndex={-1}
            geography={geo}
          />
        );
      });

      regionsJsx.push(unusedGeos);

      return regionsJsx;
    }

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
          default: {
            fill: legendColors[0],
            stroke: geoStrokeColor
          },
          hover: {
            fill: legendColors[1],
            stroke: geoStrokeColor
          },
          pressed: {
            fill: legendColors[2],
            stroke: geoStrokeColor
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
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
            style={stylesObj}
          />
        );

        return renderedGeo;
      }

      // Default return state, just the geo territory with no additional information
      return (
        <Geography
          key={geo.rsmKey}
          className={`rsm-geography ${state.general.geoBorderColor}`}
          style={ unusedStyles }
          tabIndex={-1}
          geography={geo}
        />
      );
    });

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
          </ComposableMap>
        </div>
      </div>
      {territories.length > 0
                && (
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
