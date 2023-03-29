import { useEffect, useState } from 'react'

// Third Party
import { scaleLinear } from 'd3-scale'
// Store
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'
// Context
// Data
import { supportedCities } from '../data/supported-geos'
// Constants
// Hooks
// Helpers
// Components - Core
// Components - Local
// Styles

const CityList = ({ geoClickHandler, applyTooltipsToGeo, displayGeoName, applyLegendToRow, projection, titleCase, setSharedFilterValue, isFilterValueSupported, isGeoCodeMap }) => {
  const [citiesData, setCitiesData] = useState({})
  const { config } = useVisConfig()
  const { data } = config

  useEffect(() => {
    if (!isGeoCodeMap) {
      const citiesList = Object.keys(data).filter(item => Object.keys(supportedCities).includes(item))

      const citiesDictionary = {}

      citiesList.map(city => (citiesDictionary[city] = data[city]))

      setCitiesData(citiesDictionary)
    } else {
      const citiesDictionary = {}
      data.map(city => (citiesDictionary[city[config.columns.geo.name]] = city))
      setCitiesData(citiesDictionary)
    }
  }, [data, isGeoCodeMap, config.columns.geo.name])

  if (config.general.type === 'bubble') {
    const maxDataValue = Math.max(data.map(d => d[config.columns.primary.name]))
    const sortedRuntimeData = Object.values(data).sort((a, b) => (a[config.columns.primary.name] < b[config.columns.primary.name] ? 1 : -1))
    if (!sortedRuntimeData) return

    // Set bubble sizes
    var size = scaleLinear().domain([1, maxDataValue]).range([config.visual.minBubbleSize, config.visual.maxBubbleSize])
  }
  let cityList = isGeoCodeMap ? Object.keys(citiesData).filter(c => undefined !== c) : Object.keys(citiesData).filter(c => undefined !== data[c])
  if (!cityList) return true

  // Cities output
  return cityList.map((city, i) => {
    const geoData = isGeoCodeMap ? data.filter(item => city === item[config.columns.geo.name])[0] : data[city]
    const cityDisplayName = isGeoCodeMap ? city : titleCase(displayGeoName(city))

    const legendColors = isGeoCodeMap && geoData ? applyLegendToRow(geoData) : data[city] ? applyLegendToRow(data[city]) : false

    if (legendColors === false) {
      return true
    }

    const styles = {
      fill: legendColors[0],
      opacity: setSharedFilterValue && isFilterValueSupported && data[city][config.columns.geo.name] !== setSharedFilterValue ? 0.5 : 1,
      stroke: setSharedFilterValue && isFilterValueSupported && data[city][config.columns.geo.name] === setSharedFilterValue ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.4)',
      '&:hover': {
        fill: legendColors[1],
        outline: 0
      },
      '&:active': {
        fill: legendColors[2],
        outline: 0
      }
    }

    const toolTip = applyTooltipsToGeo(cityDisplayName, data[city])

    // If we need to add a cursor pointer
    if ((config.columns.navigate && geoData?.[config.columns.navigate.name] && geoData[config.columns.navigate.name]) || config.tooltips.appearanceType === 'click') {
      styles.cursor = 'pointer'
    }

    const radius = config.general.geoType === 'us' && !isGeoCodeMap ? 8 : isGeoCodeMap ? config.visual.geoCodeCircleSize : 4

    const additionalProps = {
      fillOpacity: config.general.type === 'bubble' ? 0.4 : 1
    }

    const circle = (
      <circle cx={0} cy={0} r={config.general.type === 'bubble' ? size(geoData[config.columns.primary.name]) : radius} title='Click for more information' onClick={() => geoClickHandler(cityDisplayName, geoData)} data-tooltip-id='tooltip' data-tooltip-html={toolTip} {...additionalProps} />
    )

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

    if (!isGeoCodeMap) {
      transform = `translate(${projection(supportedCities[city])})`
    }

    if (isGeoCodeMap) {
      let coords = [Number(geoData?.[config.columns.longitude.name]), Number(geoData?.[config.columns.latitude.name])]
      transform = `translate(${projection(coords)})`
    }

    return (
      <g className='geo-point' css={styles} transform={transform} key={i}>
        {config.visual.cityStyle === 'circle' && circle}
        {config.visual.cityStyle === 'pin' && pin}
      </g>
    )
  })
}

export default CityList
