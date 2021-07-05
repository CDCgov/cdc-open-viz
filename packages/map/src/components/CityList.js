import React, { useState, useEffect, useContext } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { supportedCities } from '../data/supported-geos';

const CityList = (({
  data,
  state,
  geoClickHandler,
  applyTooltipsToGeo,
  displayGeoName,
  applyLegendToRow,
  projection
}) => {
  const [citiesData, setCitiesData] = useState({});

  useEffect(() => {
    const citiesList = Object.keys(data).filter((item) => Object.keys(supportedCities).includes(item));

    const citiesDictionary = {};

    citiesList.map((city) => citiesDictionary[city] = data[city]);

    setCitiesData(citiesDictionary);
  }, [data]);

  const cityList = Object.keys(citiesData).filter((c) => undefined !== data[c]);

  const cities = cityList.map((city, i) => {
    const cityDisplayName = displayGeoName(city);

    const legendColors = applyLegendToRow(data[city]);

    if (legendColors === false) {
      return true;
    }

    const styles = {
      fill: legendColors[0],
      outline: 0,
      stroke: 'rgba(0, 0, 0, 0.4)',
      '&:hover': {
        fill: legendColors[1],
        outline: 0
      },
      '&:active': {
        fill: legendColors[2],
        outline: 0
      }
    };

    const geoData = data[city];

    const toolTip = applyTooltipsToGeo(cityDisplayName, data[city]);

    // If we need to add a cursor pointer
    if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
      styles.cursor = 'pointer'
    }

    const radius = state.general.geoType === 'us' ? 8 : 4;

    const circle = (
      <circle
        data-tip={toolTip}
        data-for="tooltip"
        cx={0}
        cy={0}
        r={radius}
        title="Click for more information"
        onClick={() => geoClickHandler(cityDisplayName, geoData)}
      />
    );

    let transform = `translate(${projection(supportedCities[city])})`

    return (
      <g
        key={i}
        transform={transform}
        css={styles}
        className="geo-point"
      >
        {circle}
      </g>
    );
  });

  return cities;
});

export default CityList;
