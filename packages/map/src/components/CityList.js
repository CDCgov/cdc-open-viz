import React, { useState, useEffect } from 'react';
import { Marker } from 'react-simple-maps';
import { supportedCities } from '../data/supported-geos';

const CityList = (({
  processedData, state, geoClickHandler, applyTooltipsToGeo, displayGeoName, applyLegendToValue
}) => {
  const [citiesData, setCitiesData] = useState({});

  useEffect(() => {
    const citiesList = Object.keys(processedData).filter((item) => Object.keys(supportedCities).includes(item));

    const citiesDictionary = {};

    citiesList.map((city) => citiesDictionary[city] = processedData[city]);

    setCitiesData(citiesDictionary);
  }, [processedData]);

  const cityList = Object.keys(citiesData).filter((c) => undefined !== processedData[c]);

  const cities = cityList.map((city, i) => {
    const cityDisplayName = displayGeoName(city);

    const legendColors = applyLegendToValue(processedData[city]);

    if (legendColors === false) {
      return true;
    }

    const styles = {
      default: {
        fill: legendColors[0],
        outline: 0,
      },
      hover: {
        fill: legendColors[1],
        outline: 0
      },
      pressed: {
        fill: legendColors[2],
        outline: 0
      }
    };

    const geoData = processedData[city];

    const toolTip = applyTooltipsToGeo(cityDisplayName, processedData[city]);

    const cityBorderColor = 'rgba(0,0,0,.5)';

    let cityDotStyles = {
      stroke: cityBorderColor
    };

    // If we need to add a cursor pointer
    if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
      cityDotStyles = {
        ...cityDotStyles,
        cursor: 'pointer'
      };
    }

    const radius = state.general.geoType === 'us' ? 8 : 4;

    const circle = (
      <circle
        data-tip={toolTip}
        data-for="tooltip"
        cx={0}
        cy={0}
        r={radius}
        style={cityDotStyles}
        title="Click for more information"
        onClick={() => geoClickHandler(cityDisplayName, geoData)}
      />
    );

    return (
      <Marker
        key={i}
        coordinates={supportedCities[city]}
        style={styles}
        className="city-dot"
      >
        {circle}
      </Marker>
    );
  });

  return cities;
});

export default CityList;
