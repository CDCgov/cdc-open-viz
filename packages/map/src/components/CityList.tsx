import { useContext, useEffect, useState } from 'react'
import { scaleLinear } from 'd3-scale'
import { GlyphCircle, GlyphDiamond, GlyphSquare, GlyphStar, GlyphTriangle } from '@visx/glyph'
import ConfigContext from '../context'
import { supportedCities } from '../data/supported-geos'
import { getFilterControllingStatePicked } from './UsaMap/helpers/map'
import { displayGeoName, getGeoStrokeColor, SVG_HEIGHT, SVG_PADDING, SVG_WIDTH, titleCase } from '../helpers'
import useGeoClickHandler from '../hooks/useGeoClickHandler'
import useApplyTooltipsToGeo from '../hooks/useApplyTooltipsToGeo'
import useApplyLegendToRow from '../hooks/useApplyLegendToRow'

type CityListProps = {
  data: Object[]
  geoClickHandler: (city: string, geoData: Object) => void
  setSharedFilterValue: string
  isFilterValueSupported: boolean
  tooltipId: string
  projection: any
}

const CityList: React.FC<CityListProps> = ({ setSharedFilterValue, isFilterValueSupported, tooltipId, projection }) => {
  const [citiesData, setCitiesData] = useState({})
  const { state, topoData, runtimeData, position, legendMemo, legendSpecialClassLastMemo } = useContext(ConfigContext)
  const { applyLegendToRow } = useApplyLegendToRow(legendMemo, legendSpecialClassLastMemo)
  if (!projection) return

  const { geoClickHandler } = useGeoClickHandler()
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()

  useEffect(() => {
    const citiesDictionary = {}

    if (runtimeData) {
      Object.keys(runtimeData).forEach(key => {
        const city = runtimeData[key]
        citiesDictionary[city[state.columns.geo.name]] = city
      })
    }

    setCitiesData(citiesDictionary)
  }, [runtimeData])

  if (state.general.type === 'bubble') {
    const maxDataValue = Math.max(
      ...(runtimeData ? Object.keys(runtimeData).map(key => runtimeData[key][state.columns.primary.name]) : [0])
    )
    const sortedRuntimeData = Object.values(runtimeData).sort((a, b) =>
      a[state.columns.primary.name] < b[state.columns.primary.name] ? 1 : -1
    )
    if (!sortedRuntimeData) return

    // Set bubble sizes
    var size = scaleLinear().domain([1, maxDataValue]).range([state.visual.minBubbleSize, state.visual.maxBubbleSize])
  }
  const cityList = Object.keys(citiesData).filter(c => undefined !== c || undefined !== runtimeData[c])
  if (!cityList) return true

  // Cities output
  return cityList.map((city, i) => {
    let geoData: Object
    if (runtimeData) {
      Object.keys(runtimeData).forEach(key => {
        if (city === runtimeData[key][state.columns.geo.name]) {
          geoData = runtimeData[key]
        }
      })
    }
    if (!geoData) {
      geoData = runtimeData ? runtimeData[city] : undefined
    }
    const cityDisplayName = titleCase(displayGeoName(city))

    const legendColors = geoData
      ? applyLegendToRow(geoData, state)
      : runtimeData[city]
      ? applyLegendToRow(runtimeData[city], state)
      : false

    if (legendColors === false) {
      return true
    }

    const toolTip = applyTooltipsToGeo(cityDisplayName, geoData || runtimeData[city])

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

      const newProjection = projection.fitExtent(
        [
          [SVG_PADDING, SVG_PADDING],
          [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
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
        runtimeData[city] &&
        runtimeData[city][state.columns.geo.name] === setSharedFilterValue
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
    const cityStyle = Object.values(runtimeData)
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
}

export default CityList
