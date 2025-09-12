import { useContext, useMemo } from 'react'
import { scaleLinear } from 'd3-scale'
import { GlyphCircle, GlyphDiamond, GlyphSquare, GlyphStar, GlyphTriangle } from '@visx/glyph'
import ConfigContext from '../context'
import { useLegendMemoContext } from '../context/LegendMemoContext'
import { supportedCities } from '../data/supported-geos'
import { getFilterControllingStatesPicked } from './UsaMap/helpers/map'
import {
  displayGeoName,
  getGeoStrokeColor,
  SVG_HEIGHT,
  SVG_PADDING,
  SVG_WIDTH,
  titleCase,
  isLegendItemDisabled
} from '../helpers'
import useGeoClickHandler from '../hooks/useGeoClickHandler'
import useApplyTooltipsToGeo from '../hooks/useApplyTooltipsToGeo'
import { applyLegendToRow } from '../helpers/applyLegendToRow'
import { getColumnNames } from '../helpers/getColumnNames'

type CityListProps = {
  setSharedFilterValue: string
  isFilterValueSupported: boolean
  tooltipId: string
  projection: any
}

const CityList: React.FC<CityListProps> = ({ setSharedFilterValue, isFilterValueSupported, tooltipId, projection }) => {
  const { config, topoData, runtimeData, position, runtimeLegend } = useContext(ConfigContext)
  const { legendMemo, legendSpecialClassLastMemo } = useLegendMemoContext()
  const { geoClickHandler } = useGeoClickHandler()
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()

  const { geoColumnName, latitudeColumnName, longitudeColumnName, primaryColumnName } =
    getColumnNames(config.columns) || {}

  // Memoize expensive city data creation
  const citiesData = useMemo(() => {
    if (!runtimeData) return {}

    return Object.keys(runtimeData).reduce((acc, key) => {
      const city = runtimeData[key]
      if (city && city[geoColumnName]) {
        acc[city[geoColumnName]] = city
      }
      return acc
    }, {})
  }, [runtimeData, geoColumnName])

  // Memoize bubble size calculation
  const size = useMemo(() => {
    if (config.general.type !== 'bubble' || !runtimeData) {
      return null
    }

    const maxVal = Math.max(...Object.keys(runtimeData).map(key => runtimeData[key][config.columns.primary.name]))

    if (maxVal <= 0) {
      return null
    }

    return scaleLinear().domain([1, maxVal]).range([config.visual.minBubbleSize, config.visual.maxBubbleSize])
  }, [
    config.general.type,
    config.columns.primary.name,
    config.visual.minBubbleSize,
    config.visual.maxBubbleSize,
    runtimeData
  ])

  // Get the list of cities to render
  const cityList = useMemo(() => {
    return Object.keys(citiesData).filter(cityName => cityName && citiesData[cityName])
  }, [citiesData])

  // Early exit for map types that don't use city rendering
  if (
    !projection ||
    (config.general.type !== 'us-geocode' &&
      config.general.type !== 'world-geocode' &&
      config.general.type !== 'bubble')
  ) {
    return null
  }

  // Early exit if no cities to render
  if (!cityList.length) {
    return null
  }

  // Cities output
  return cityList.map((city, i) => {
    // Get the city data directly from our memoized citiesData
    const geoData = citiesData[city]

    if (!geoData) {
      return null
    }

    const cityDisplayName = titleCase(displayGeoName(city))

    const legendColors = applyLegendToRow(geoData, config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)

    if (!legendColors || legendColors.length === 0) {
      return null
    }

    // Don't render if legend item is disabled
    if (isLegendItemDisabled(geoData, runtimeLegend, legendMemo, legendSpecialClassLastMemo, config)) {
      return null
    }

    const toolTip = applyTooltipsToGeo(cityDisplayName, geoData)

    const radius = config.visual.geoCodeCircleSize || 8

    const additionalProps = {
      fillOpacity: config.general.type === 'bubble' ? 0.4 : 1
    }

    const geoStrokeColor = getGeoStrokeColor(config)

    const pin = (
      <g>
        <title>Select for more information</title>
        <path
          className='marker'
          d='M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z'
          onClick={() => geoClickHandler(cityDisplayName, geoData)}
          data-tooltip-id={`tooltip__${tooltipId}`}
          data-tooltip-html={toolTip}
          transform={`scale(${radius / 7.5})`}
          stroke={geoStrokeColor}
          strokeWidth={'2px'}
          tabIndex={-1}
          {...additionalProps}
        />
      </g>
    )

    let transform = ''

    if (
      !geoData?.[longitudeColumnName] &&
      !geoData?.[latitudeColumnName] &&
      city &&
      supportedCities[city.toUpperCase()]
    ) {
      transform = `translate(${projection(supportedCities[city.toUpperCase()])})`
    }

    let needsPointer = false

    if (geoData?.[longitudeColumnName] && geoData?.[latitudeColumnName]) {
      let coords = [Number(geoData?.[longitudeColumnName]), Number(geoData?.[latitudeColumnName])]
      transform = `translate(${projection(coords)})`
      needsPointer = true
    }

    if (geoData?.[longitudeColumnName] && geoData?.[latitudeColumnName] && config.general.geoType === 'single-state') {
      const statesPicked = getFilterControllingStatesPicked(config, runtimeData)
      const _statesPickedData = (topoData as any)?.states?.find(s => statesPicked.includes(s.properties.name))

      const newProjection = projection.fitExtent(
        [
          [SVG_PADDING, SVG_PADDING],
          [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
        ],
        _statesPickedData
      )
      let coords = [Number(geoData?.[longitudeColumnName]), Number(geoData?.[latitudeColumnName])]
      transform = `translate(${newProjection(coords)}) scale(${
        config.visual.geoCodeCircleSize / ((position as any).zoom > 1 ? (position as any).zoom : 1)
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
        runtimeData[city][config.columns.geo.name] === setSharedFilterValue
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
      (config.columns.navigate && geoData?.[config.columns.navigate.name] && geoData[config.columns.navigate.name]) ||
      config.tooltips.appearanceType === 'click'
    ) {
      styles.cursor = 'pointer'
    }

    const shapeProps = {
      onClick: () => geoClickHandler(cityDisplayName, geoData),
      size: config.general.type === 'bubble' && size ? size(geoData[primaryColumnName]) : radius * 30,
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

    // Render the city marker
    return (
      <g key={i} transform={transform} style={styles} className='geo-point' tabIndex={-1}>
        {cityStyleShapes[config.visual.cityStyle?.toLowerCase() || 'circle']}
      </g>
    )
  })
}

export default CityList
