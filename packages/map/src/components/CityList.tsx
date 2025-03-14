import { useState, useEffect, useContext } from 'react'

import { jsx } from '@emotion/react'
import { supportedCities } from '../data/supported-geos'
import { scaleLinear } from 'd3-scale'
import { GlyphStar, GlyphTriangle, GlyphDiamond, GlyphSquare, GlyphCircle } from '@visx/glyph'
import { getFilterControllingStatePicked } from './UsaMap/helpers/map'
import { titleCase } from '../helpers/titleCase'

import ConfigContext from '../context'
import { getGeoStrokeColor } from '../helpers/colors'

const CityList = ({
  data,
  geoClickHandler,
  applyTooltipsToGeo,
  displayGeoName,
  applyLegendToRow,
  setSharedFilterValue,
  isFilterValueSupported,
  tooltipId,
  projection
}) => {
  const [citiesData, setCitiesData] = useState({})
  const { state, topoData, runtimeData, position } = useContext(ConfigContext)
  if (!projection) return

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
    const sortedRuntimeData = Object.values(data).sort((a, b) =>
      a[state.columns.primary.name] < b[state.columns.primary.name] ? 1 : -1
    )
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

    const geoStrokeColor = getGeoStrokeColor(state)

    const pin = (
      <path
        className='marker'
        d='M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z'
        title='Select for more information'
        onClick={() => geoClickHandler(cityDisplayName, geoData)}
        data-tooltip-id={`tooltip__${tooltipId}`}
        data-tooltip-html={toolTip}
        transform={`scale(${radius / 7.5})`}
        stroke={geoStrokeColor}
        strokeWidth={'2px'}
        tabIndex='-1'
        {...additionalProps}
      />
    )

    let transform = ''

    if (
      !geoData?.[state.columns.longitude.name] &&
      !geoData?.[state.columns.latitude.name] &&
      city &&
      supportedCities[city.toUpperCase()]
    ) {
      transform = `translate(${projection(supportedCities[city.toUpperCase()])})`
    }

    let needsPointer = false

    if (geoData?.[state.columns.longitude.name] && geoData?.[state.columns.latitude.name]) {
      let coords = [Number(geoData?.[state.columns.longitude.name]), Number(geoData?.[state.columns.latitude.name])]
      transform = `translate(${projection(coords)})`
      needsPointer = true
    }

    if (
      geoData?.[state.columns.longitude.name] &&
      geoData?.[state.columns.latitude.name] &&
      state.general.geoType === 'single-state'
    ) {
      const statePicked = getFilterControllingStatePicked(state, runtimeData)
      const _statePickedData = topoData?.states?.find(s => s.properties.name === statePicked)
      // SVG ITEMS
      const WIDTH = 880
      const HEIGHT = 500
      const PADDING = 50

      const newProjection = projection.fitExtent(
        [
          [PADDING, PADDING],
          [WIDTH - PADDING, HEIGHT - PADDING]
        ],
        _statePickedData
      )
      let coords = [Number(geoData?.[state.columns.longitude.name]), Number(geoData?.[state.columns.latitude.name])]
      transform = `translate(${newProjection(coords)}) scale(${
        state.visual.geoCodeCircleSize / (position.zoom > 1 ? position.zoom : 1)
      })`
      needsPointer = true
    }

    if (!transform) {
      return
    }

    const styles = {
      fill: legendColors[0],
      opacity: !isFilterValueSupported || (isFilterValueSupported && city === setSharedFilterValue) ? 1 : 0.5,
      stroke:
        setSharedFilterValue &&
        isFilterValueSupported &&
        data[city] &&
        data[city][state.columns.geo.name] === setSharedFilterValue
          ? 'rgba(0, 0, 0, 1)'
          : 'rgba(0, 0, 0, 0.4)',
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
    if (
      (state.columns.navigate && geoData?.[state.columns.navigate.name] && geoData[state.columns.navigate.name]) ||
      state.tooltips.appearanceType === 'click'
    ) {
      styles.cursor = 'pointer'
    }

    const shapeProps = {
      onClick: () => geoClickHandler(cityDisplayName, geoData),
      size: state.general.type === 'bubble' ? size(geoData[state.columns.primary.name]) : radius * 30,
      title: 'Select for more information',
      'data-tooltip-id': `tooltip__${tooltipId}`,
      'data-tooltip-html': toolTip,
      stroke: geoStrokeColor,
      strokeWidth: '2px',
      tabIndex: -1,
      ...additionalProps
    }

    const cityStyleShapes = {
      circle: <GlyphCircle {...shapeProps} />,
      pin: pin,
      square: <GlyphSquare {...shapeProps} />,
      diamond: <GlyphDiamond {...shapeProps} />,
      star: <GlyphStar {...shapeProps} />,
      triangle: <GlyphTriangle {...shapeProps} />
    }

    const { additionalCityStyles } = state.visual || []
    const cityStyle = Object.values(data)
      .filter(d => additionalCityStyles.some(style => String(d[style.column]) === String(style.value)))
      .map(d => {
        const conditionsMatched = additionalCityStyles.find(style => String(d[style.column]) === String(style.value))
        return { ...conditionsMatched, ...d }
      })
      .find(item => {
        return Object.keys(item).find(key => item[key] === city)
      })

    if (cityStyle !== undefined && cityStyle.shape) {
      if (
        !geoData?.[state.columns.longitude.name] &&
        !geoData?.[state.columns.latitude.name] &&
        city &&
        supportedCities[city.toUpperCase()]
      ) {
        let translate = `translate(${projection(supportedCities[city.toUpperCase()])})`

        return (
          <g key={i} transform={translate} style={styles} className='geo-point' tabIndex={-1}>
            {cityStyleShapes[cityStyle.shape.toLowerCase()]}
          </g>
        )
      }

      if (geoData?.[state.columns.longitude.name] && geoData?.[state.columns.latitude.name]) {
        const coords = [Number(geoData?.[state.columns.longitude.name]), Number(geoData?.[state.columns.latitude.name])]
        let translate = `translate(${projection(coords)})`
        console.log(translate, 'translate')
        return (
          <g key={i} transform={translate} style={styles} className='geo-point' tabIndex={-1}>
            {cityStyleShapes[cityStyle.shape.toLowerCase()]}
          </g>
        )
      }
    }
    return (
      <g key={i} transform={transform} style={styles} className='geo-point' tabIndex={-1}>
        {cityStyleShapes[state.visual.cityStyle.toLowerCase()]}
      </g>
    )
  })

  return cities
}

export default CityList
