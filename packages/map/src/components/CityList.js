import React, { useState, useEffect, useContext } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { supportedCities } from '../data/supported-geos';
import { scaleLinear } from 'd3-scale';


const CityList = (({
  data,
  state,
  geoClickHandler,
  applyTooltipsToGeo,
  displayGeoName,
  applyLegendToRow,
  projection,
  titleCase,
  setSharedFilterValue,
  isFilterValueSupported,
  isGeoCodeMap
}) => {

  const [citiesData, setCitiesData] = useState({});

  useEffect(() => {
    console.log('is geo code?', isGeoCodeMap)
    console.log('data', state.data)
    if(!isGeoCodeMap) {
      const citiesList = Object.keys(data).filter((item) => Object.keys(supportedCities).includes(item));
  
      const citiesDictionary = {};
  
      citiesList.map((city) => citiesDictionary[city] = data[city]);
  
      setCitiesData(citiesDictionary);
    } else {
      const citiesDictionary = {};
      state.data.map(city => citiesDictionary[city[state.columns.geo.name]] = city)
      console.log('citiesDictionary', citiesDictionary)
      setCitiesData(citiesDictionary);
    }
  }, [data, state.data]);

  console.log('citiesData', citiesData)

  if (state.general.type === 'bubble') {
    const maxDataValue = Math.max(...state.data.map(d => d[state.columns.primary.name]))
    const sortedRuntimeData = Object.values(data).sort((a, b) => a[state.columns.primary.name] < b[state.columns.primary.name] ? 1 : -1)
    if (!sortedRuntimeData) return;

    // Set bubble sizes
    var size = scaleLinear()
      .domain([1, maxDataValue])
      .range([state.visual.minBubbleSize, state.visual.maxBubbleSize])

  }
  console.log('this', Object.keys(citiesData).filter((c) => undefined !== c))
  let cityList = isGeoCodeMap ? Object.keys(citiesData).filter((c) => undefined !== c) : Object.keys(citiesData).filter((c) => undefined !== data[c]);
  if(!cityList) return true;
  const cities = cityList.map((city, i) => {
    console.log('city', city)

    const geoData = isGeoCodeMap ? state.data.filter(item => city === item[state.columns.geo.name])[0] : data[city];

    const cityDisplayName = isGeoCodeMap ? city : titleCase( displayGeoName(city) );

    const legendColors = isGeoCodeMap ? applyLegendToRow(geoData) : applyLegendToRow(data[city]);

    if (legendColors === false) {
      return true;
    }

    const styles = {
      fill: legendColors[0],
      opacity: setSharedFilterValue && isFilterValueSupported && data[city][state.columns.geo.name] !== setSharedFilterValue ? .5 : 1,
      stroke: setSharedFilterValue && isFilterValueSupported && data[city][state.columns.geo.name] === setSharedFilterValue ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.4)',
      '&:hover': {
        fill: legendColors[1],
        outline: 0
      },
      '&:active': {
        fill: legendColors[2],
        outline: 0
      }
    };



    const toolTip = applyTooltipsToGeo(cityDisplayName, data[city]);

    // If we need to add a cursor pointer
    if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
      styles.cursor = 'pointer'
    }

    const radius = state.general.geoType === 'us' && !isGeoCodeMap ? 8 : isGeoCodeMap ? 2 : 4;

    const additionalProps = {
      fillOpacity: state.general.type === 'bubble' ? .4 : 1
    }

    const circle = (
      <circle
        data-tip={toolTip}
        data-for="tooltip"
        cx={0}
        cy={0}
        r={ state.general.type === 'bubble' ? size(geoData[state.columns.primary.name]) : radius}
        title="Click for more information"
        onClick={() => geoClickHandler(cityDisplayName, geoData)}
       {...additionalProps}
      />
    );

    const pin = (
      <path 
        className="marker" 
        d="M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z" 
        title="Click for more information"
        onClick={() => geoClickHandler(cityDisplayName, geoData)}
        data-tip={toolTip}
        data-for="tooltip"
        strokeWidth={2}
        stroke={'black'}
        {...additionalProps}
        >
      </path>
    );

    let transform = '';
    if (!isGeoCodeMap)  {
      transform = `translate(${projection(supportedCities[city])})`
    }
    if (isGeoCodeMap) {
      console.log('city here', city)
      let coords = [Number(geoData[state.columns.longitude.name]), Number(geoData[state.columns.latitude.name])]
      console.log('coords', coords)
      transform = `translate(${projection(coords)})`

    }

    return (
      <g
        key={i}
        transform={transform}
        css={styles}
        className="geo-point"
      >
        {state.visual.cityStyle === 'circle' && circle }
        {state.visual.cityStyle === 'pin' && pin }
      </g>
    );
  });

  return cities;
});

export default CityList;
