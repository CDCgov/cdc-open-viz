import React, { useState, useEffect, memo } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import { geoMercator  } from "d3-geo";
import { Mercator } from '@visx/geo';
import { feature } from "topojson-client";
import topoJSON from '../data/world-topo.json';
import ZoomableGroup from './ZoomableGroup';
import Geo from './Geo'
import CityList from './CityList';
import BubbleList from './BubbleList';

const { features: world } = feature(topoJSON, topoJSON.objects.countries)

let projection = geoMercator()

const handleZoomIn = (position, setPosition) => {
  if (position.zoom >= 4) return;
  setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
};

const handleZoomOut = (position, setPosition) => {
  if (position.zoom <= 1) return;
  setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
};

const ZoomControls = ({position, setPosition}) => (
  <div className="zoom-controls" data-html2canvas-ignore>
    <button onClick={() => handleZoomIn(position, setPosition)}>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
    <button onClick={() => handleZoomOut(position, setPosition)}>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  </div>
);

const WorldMap = (props) => {
  const {
    state,
    applyTooltipsToGeo,
    data,
    geoClickHandler,
    applyLegendToRow,
    displayGeoName,
    supportedCountries,
    rebuildTooltips
  } = props;

  const [position, setPosition] = useState({ coordinates: [0, 30], zoom: 1 });

  useEffect(() => rebuildTooltips());

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  const constructGeoJsx = (geographies) => {
    console.log('geos', geographies)
    const geosJsx = geographies.map(({ feature: geo, path }, i) => {
      const geoKey = geo.properties.iso

      if(!geoKey) return

      const geoData = data[geoKey];

      const geoDisplayName = displayGeoName(supportedCountries[geoKey][0]);

      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData);
      }

      const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

      let styles = {
        fill: '#E6E6E6',
        cursor: 'default'
      }

      const strokeWidth = .9

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000' && state.general.type !== 'bubble') {
        const tooltip = applyTooltipsToGeo(geoDisplayName, geoData);

          styles = {
            ...styles,
            fill: legendColors[0],
            cursor: 'default',
            '&:hover': {
              fill: legendColors[1]
            },
            '&:active': {
              fill: legendColors[2],
            },
          };

        // When to add pointer cursor
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          styles.cursor = 'pointer'
        }

        return (
          <Geo
            key={i + '-geo'}
            css={styles}
            data-for="tooltip"
            data-tip={tooltip}
            path={path}
            stroke={geoStrokeColor}
            strokeWidth={strokeWidth}
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
          />
        )
      }

      // Default return state, just geo with no additional information
      return <Geo key={i + '-geo'} stroke={geoStrokeColor} strokeWidth={strokeWidth} css={styles} path={path} />
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
      applyLegendToRow={applyLegendToRow}
    />)

    // Bubbles
    if(state.general.type === 'bubble') {
      geosJsx.push(
        <BubbleList
          key="bubbles"
          data={data}
          state={state}
          projection={projection}
          applyLegendToRow={applyLegendToRow}
          applyTooltipsToGeo={applyTooltipsToGeo}
        />
      )
    }

    return geosJsx;
  };

  return (
    <ErrorBoundary component="WorldMap">
      <svg viewBox="0 0 880 500">
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          maxZoom={4}
          projection={projection}
          width={880}
          height={500}
        >
          <Mercator
            data={world}
          >
            {({features}) => constructGeoJsx(features)}
          </Mercator>
        </ZoomableGroup>
      </svg>
      {state.general.type === 'data' && <ZoomControls position={position} setPosition={setPosition} />}
    </ErrorBoundary>
  );
};

export default memo(WorldMap)
