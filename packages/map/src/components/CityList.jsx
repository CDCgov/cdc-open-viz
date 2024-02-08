import { useState, useEffect } from 'react'

import { jsx } from '@emotion/react'
import { supportedCities } from '../data/supported-geos'
import { scaleLinear } from 'd3-scale'

const CityList = ({ data, state, geoClickHandler, applyTooltipsToGeo, displayGeoName, applyLegendToRow, projection, titleCase, setSharedFilterValue, isFilterValueSupported }) => {
  const [citiesData, setCitiesData] = useState({})

  useEffect(() => {
    const citiesDictionary = {}

    if (data) {
      Object.keys(data).forEach(key => {
        const city = data[key]
        citiesDictionary[city[state.columns.geo.name]] = city
      })
    }

    setCitiesData(citiesDictionary)
  }, [data])

  if (state.general.type === 'bubble') {
    const maxDataValue = Math.max(...(data ? Object.keys(data).map(key => data[key][state.columns.primary.name]) : [0]))
    const sortedRuntimeData = Object.values(data).sort((a, b) => (a[state.columns.primary.name] < b[state.columns.primary.name] ? 1 : -1))
    if (!sortedRuntimeData) return

    // Set bubble sizes
    var size = scaleLinear().domain([1, maxDataValue]).range([state.visual.minBubbleSize, state.visual.maxBubbleSize])
  }
  let cityList = Object.keys(citiesData).filter(c => undefined !== c || undefined !== data[c])
  if (!cityList) return true

  // Cities output
  const cities = cityList.map((city, i) => {
    let geoData
    if (data) {
      Object.keys(data).forEach(key => {
        if (city === data[key][state.columns.geo.name]) {
          geoData = data[key]
        }
      })
    }
    if (!geoData) {
      geoData = data ? data[city] : undefined
    }
    const cityDisplayName = titleCase(displayGeoName(city))

    const legendColors = geoData ? applyLegendToRow(geoData) : data[city] ? applyLegendToRow(data[city]) : false

    if (legendColors === false) {
      return true
    }

    const toolTip = applyTooltipsToGeo(cityDisplayName, geoData || data[city])

    const radius = state.visual.geoCodeCircleSize || 8

    const additionalProps = {
      fillOpacity: state.general.type === 'bubble' ? 0.4 : 1
    }

    const circle = <circle cx={0} cy={0} r={state.general.type === 'bubble' ? size(geoData[state.columns.primary.name]) : radius} title='Click for more information' onClick={() => geoClickHandler(cityDisplayName, geoData)} data-tooltip-id='tooltip' data-tooltip-html={toolTip} {...additionalProps} />

    const pin = (
      <path
        className='marker'
        d='M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z'
        title='Click for more information'
        onClick={() => geoClickHandler(cityDisplayName, geoData)}
        strokeWidth={2}
        stroke={'black'}
        data-tooltip-id='tooltip'
        data-tooltip-html={toolTip}
        {...additionalProps}
      />
    )

    let transform = ''

    if (!geoData?.[state.columns.longitude.name] && !geoData?.[state.columns.latitude.name] && city && supportedCities[city.toUpperCase()]) {
      transform = `translate(${projection(supportedCities[city.toUpperCase()])})`
    }

    let needsPointer = false

    if (geoData?.[state.columns.longitude.name] && geoData?.[state.columns.latitude.name]) {
      let coords = [Number(geoData?.[state.columns.longitude.name]), Number(geoData?.[state.columns.latitude.name])]
      transform = `translate(${projection(coords)})`
      needsPointer = true
    }

    if (!transform) {
      return
    }

    const styles = {
      fill: legendColors[0],
      opacity: setSharedFilterValue && isFilterValueSupported && data[city][state.columns.geo.name] !== setSharedFilterValue ? 0.5 : 1,
      stroke: setSharedFilterValue && isFilterValueSupported && data[city][state.columns.geo.name] === setSharedFilterValue ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.4)',
      '&:hover': {
        fill: legendColors[1],
        outline: 0
      },
      '&:active': {
        fill: legendColors[2],
        outline: 0
      },
      cursor: needsPointer ? 'pointer' : 'default'
    }

    // If we need to add a cursor pointer
    if ((state.columns.navigate && geoData?.[state.columns.navigate.name] && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
      styles.cursor = 'pointer'
    }

    return (
      <g key={i} transform={transform} style={styles} className='geo-point'>
        {state.visual.cityStyle === 'circle' && circle}
        {state.visual.cityStyle === 'pin' && pin}
      </g>
    )
  })

  return cities
}

export default CityList
