import { memo, useContext, useState, useEffect } from 'react'
import { geoMercator } from 'd3-geo'
import { Mercator } from '@visx/geo'
import { feature } from 'topojson-client'
import ConfigContext, { MapDispatchContext } from '../../context'
import { useLegendMemoContext } from '../../context/LegendMemoContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ZoomableGroup from '../ZoomableGroup'
import Geo from '../Geo'
import CityList from '../CityList'
import BubbleList from '../BubbleList'
import ZoomControls from '../ZoomControls'
import { supportedCountries } from '../../data/supported-geos'
import {
  getGeoFillColor,
  getGeoStrokeColor,
  handleMapAriaLabels,
  titleCase,
  displayGeoName,
  SVG_VIEWBOX,
  SVG_WIDTH,
  SVG_HEIGHT,
  MAX_ZOOM_LEVEL
} from '../../helpers'
import useGeoClickHandler from '../../hooks/useGeoClickHandler'
import useApplyTooltipsToGeo from '../../hooks/useApplyTooltipsToGeo'
import generateRuntimeData from '../../helpers/generateRuntimeData'
import { applyLegendToRow } from '../../helpers/applyLegendToRow'

import './worldMap.styles.css'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

let projection = geoMercator()

const WorldMap = () => {
  // prettier-ignore
  const {
    runtimeData,
    position,
    config,
    tooltipId,
    runtimeLegend,
    interactionLabel
  } = useContext(ConfigContext)

  const { legendMemo, legendSpecialClassLastMemo } = useLegendMemoContext()

  const { type, allowMapZoom } = config.general

  const [world, setWorld] = useState(null)
  const { geoClickHandler } = useGeoClickHandler()
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const dispatch = useContext(MapDispatchContext)

  useEffect(() => {
    const fetchData = async () => {
      import(/* webpackChunkName: "world-topo" */ './data/world-topo.json').then(topoJSON => {
        setWorld(feature(topoJSON, topoJSON.objects.countries).features)
      })
    }
    fetchData()
  }, [])

  if (!world) {
    return <></>
  }

  const handleReset = () => {
    const newRuntimeData = generateRuntimeData(config)
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: 'map_reset_zoom_level',
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config)
    })
    dispatch({ type: 'SET_POSITION', payload: { coordinates: [0, 30], zoom: 1 } })
    dispatch({ type: 'SET_FILTERED_COUNTRY_CODE', payload: '' })
    dispatch({ type: 'SET_RUNTIME_DATA', payload: newRuntimeData })
  }

  const handleZoomIn = position => {
    if (position.zoom >= 4) return
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: `map_zoomed_in`,
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config),
      specifics: `zoom_level: ${Math.floor(position.zoom * 1.5)}`
    })
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: `map_zoomed_in`,
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config),
      specifics: `location: ${position.coordinates}`
    })
    dispatch({ type: 'SET_POSITION', payload: { coordinates: position.coordinates, zoom: position.zoom * 1.5 } })
  }

  const handleZoomOut = position => {
    if (position.zoom <= 1) return
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: `map_zoomed_out`,
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config),
      specifics: `zoom_level: ${Math.floor(position.zoom / 1.5)}`
    })
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: `map_zoomed_out`,
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config),
      specifics: `location: ${position.coordinates}`
    })
    dispatch({ type: 'SET_POSITION', payload: { coordinates: position.coordinates, zoom: position.zoom / 1.5 } })
  }

  const handleMoveEnd = position => {
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: 'map_panned',
      eventAction: 'drag',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config),
      specifics: `zoom: ${position.zoom}`
    })
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: 'map_panned',
      eventAction: 'drag',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config),
      specifics: `coordinates: ${position.coordinates}`
    })
    dispatch({ type: 'SET_POSITION', payload: position })
  }

  const constructGeoJsx = geographies => {
    const geosJsx = geographies.map(({ feature: geo, path }, i) => {
      // If the geo.properties.config value is found in the data use that, otherwise fall back to geo.properties.iso
      const dataHasStateName = config.data.some(d => d[config.columns.geo.name] === geo.properties.state)
      const geoKey =
        geo.properties.state && runtimeData[geo.properties.state]
          ? geo.properties.state
          : geo.properties.name
            ? geo.properties.name
            : geo.properties.iso

      const additionalData = {
        name: geo.properties.name
      }
      if (!geoKey) return null

      let geoData = runtimeData[geoKey]

      const geoDisplayName = displayGeoName(supportedCountries[geoKey]?.[0])
      let legendColors

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData, config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)
      }

      const geoStrokeColor = getGeoStrokeColor(config)
      const geoFillColor = getGeoFillColor(config)

      let styles: Record<string, string | Record<string, string>> = {
        fill: geoFillColor,
        cursor: 'default'
      }

      const strokeWidth = 0.9

      // If a legend applies, return it with appropriate information.
      const toolTip = applyTooltipsToGeo(geoDisplayName, geoData)
      if (legendColors && legendColors[0] !== '#000000' && type !== 'bubble') {
        styles = {
          ...styles,
          fill: type !== 'world-geocode' ? legendColors[0] : geoFillColor,
          cursor: 'default',
          '&:hover': {
            fill: type !== 'world-geocode' ? legendColors[1] : geoFillColor
          },
          '&:active': {
            fill: type !== 'world-geocode' ? legendColors[2] : geoFillColor
          }
        }

        // When to add pointer cursor
        if (
          (config.columns.navigate && geoData[config.columns.navigate.name]) ||
          config.tooltips.appearanceType === 'click'
        ) {
          styles.cursor = 'pointer'
        }

        return (
          <Geo
            additionalData={additionalData}
            geoData={geoData}
            key={i + '-geo'}
            styles={styles}
            path={path}
            stroke={geoStrokeColor}
            strokeWidth={strokeWidth}
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
            onMouseEnter={() => {
              // Track hover analytics event if this is a new location
              const locationName = geoDisplayName.replace(/[^a-zA-Z0-9]/g, '_')
              publishAnalyticsEvent({
                vizType: config.type,
                vizSubType: getVizSubType(config),
                eventType: `map_hover`,
                eventAction: 'hover',
                eventLabel: interactionLabel,
                vizTitle: getVizTitle(config),
                location: geoDisplayName,
                specifics: `location: ${locationName?.toLowerCase()}`
              })
            }}
            data-tooltip-id={`tooltip__${tooltipId}`}
            data-tooltip-html={toolTip}
            tabIndex={-1}
          />
        )
      }

      // Default return state, just geo with no additional information
      return (
        <Geo
          additionaldata={JSON.stringify(additionalData)}
          geodata={JSON.stringify(geoData)}
          key={i + '-geo'}
          stroke={geoStrokeColor}
          strokeWidth={strokeWidth}
          styles={styles}
          path={path}
          onMouseEnter={() => {
            // Track hover analytics event if this is a new location
            const locationName = geoDisplayName.replace(/[^a-zA-Z0-9]/g, '_')
            publishAnalyticsEvent({
              vizType: config.type,
              vizSubType: getVizSubType(config),
              eventType: `map_hover`,
              eventAction: 'hover',
              eventLabel: interactionLabel,
              vizTitle: getVizTitle(config),
              location: geoDisplayName,
              specifics: `location: ${locationName?.toLowerCase()}`
            })
          }}
          data-tooltip-id={`tooltip__${tooltipId}`}
          data-tooltip-html={toolTip}
        />
      )
    })

    // Cities
    geosJsx.push(<CityList key='cities' projection={projection} tooltipId={tooltipId} />)

    // Bubbles
    if (type === 'bubble') {
      geosJsx.push(<BubbleList />)
    }

    return geosJsx
  }

  return (
    <ErrorBoundary component='WorldMap'>
      {allowMapZoom ? (
        <svg viewBox={SVG_VIEWBOX} role='img' aria-label={handleMapAriaLabels(config)}>
          <rect height={SVG_HEIGHT} width={SVG_WIDTH} onClick={handleReset} fill='white' />
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            maxZoom={MAX_ZOOM_LEVEL}
            projection={projection}
            width={SVG_WIDTH}
            height={SVG_HEIGHT}
          >
            <Mercator data={world}>{({ features }) => constructGeoJsx(features)}</Mercator>
          </ZoomableGroup>
        </svg>
      ) : (
        <svg viewBox={SVG_VIEWBOX}>
          <ZoomableGroup
            zoom={1}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            maxZoom={0}
            projection={projection}
            width={SVG_WIDTH}
            height={SVG_HEIGHT}
          >
            <Mercator data={world}>{({ features }) => constructGeoJsx(features)}</Mercator>
          </ZoomableGroup>
        </svg>
      )}
      {(type === 'data' || (type === 'world-geocode' && allowMapZoom) || (type === 'bubble' && allowMapZoom)) && (
        <ZoomControls handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} handleReset={handleReset} />
      )}
    </ErrorBoundary>
  )
}

export default memo(WorldMap)
