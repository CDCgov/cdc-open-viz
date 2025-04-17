import { memo, useContext, useState, useEffect } from 'react'
import { geoMercator } from 'd3-geo'
import { Mercator } from '@visx/geo'
import { feature } from 'topojson-client'
import ConfigContext, { MapDispatchContext } from '../../context'
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
import useApplyLegendToRow from '../../hooks/useApplyLegendToRow'
import useApplyTooltipsToGeo from '../../hooks/useApplyTooltipsToGeo'
import useGenerateRuntimeData from '../../hooks/useGenerateRuntimeData'

import './WorldMap.styles.css'

let projection = geoMercator()

const WorldMap = () => {
  // prettier-ignore
  const {
    data,
    position,
    setRuntimeData,
    setState,
    state,
    tooltipId,
    legendMemo,
    legendSpecialClassLastMemo
  } = useContext(ConfigContext)

  const { type, allowMapZoom } = state.general

  const [world, setWorld] = useState(null)
  const { geoClickHandler } = useGeoClickHandler()
  const { applyLegendToRow } = useApplyLegendToRow(legendMemo, legendSpecialClassLastMemo)
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const { generateRuntimeData } = useGenerateRuntimeData(state)
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

  // TODO Refactor - state should be set together here to avoid rerenders
  // Resets to original data & zooms out
  const handleReset = (state, setState, setRuntimeData) => {
    const newRuntimeData = generateRuntimeData(state)
    dispatch({ type: 'SET_POSITION', payload: { coordinates: [0, 30], zoom: 1 } })
    dispatch({ type: 'SET_FILTERED_COUNTRY_CODE', payload: '' })
    setRuntimeData(newRuntimeData)
  }
  const handleZoomIn = position => {
    if (position.zoom >= 4) return
    dispatch({ type: 'SET_POSITION', payload: { coordinates: position.coordinates, zoom: position.zoom * 1.5 } })
  }

  const handleZoomOut = position => {
    if (position.zoom <= 1) return
    dispatch({ type: 'SET_POSITION', payload: { coordinates: position.coordinates, zoom: position.zoom / 1.5 } })
  }

  const handleMoveEnd = position => {
    dispatch({ type: 'SET_POSITION', payload: position })
  }

  const constructGeoJsx = geographies => {
    const geosJsx = geographies.map(({ feature: geo, path }, i) => {
      // If the geo.properties.state value is found in the data use that, otherwise fall back to geo.properties.iso
      const dataHasStateName = state.data.some(d => d[state.columns.geo.name] === geo.properties.state)
      const geoKey =
        geo.properties.state && data[geo.properties.state]
          ? geo.properties.state
          : geo.properties.name
          ? geo.properties.name
          : geo.properties.iso

      const additionalData = {
        name: geo.properties.name
      }
      if (!geoKey) return null

      let geoData = data[geoKey]

      const geoDisplayName = displayGeoName(supportedCountries[geoKey]?.[0])
      let legendColors

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData, state)
      }

      const geoStrokeColor = getGeoStrokeColor(state)
      const geoFillColor = getGeoFillColor(state)

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
          (state.columns.navigate && geoData[state.columns.navigate.name]) ||
          state.tooltips.appearanceType === 'click'
        ) {
          styles.cursor = 'pointer'
        }

        return (
          <Geo
            additionalData={additionalData}
            geoData={geoData}
            state={state}
            key={i + '-geo'}
            style={styles}
            path={path}
            stroke={geoStrokeColor}
            strokeWidth={strokeWidth}
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
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
          state={state}
          key={i + '-geo'}
          stroke={geoStrokeColor}
          strokeWidth={strokeWidth}
          style={styles}
          styles={styles}
          path={path}
          data-tooltip-id={`tooltip__${tooltipId}`}
          data-tooltip-html={toolTip}
        />
      )
    })

    // Cities
    geosJsx.push(
      <CityList
        geoClickHandler={geoClickHandler}
        key='cities'
        projection={projection}
        state={state}
        titleCase={titleCase}
        tooltipId={tooltipId}
      />
    )

    // Bubbles
    if (type === 'bubble') {
      geosJsx.push(<BubbleList runtimeData={data} />)
    }

    return geosJsx
  }

  return (
    <ErrorBoundary component='WorldMap'>
      {allowMapZoom ? (
        <svg viewBox={SVG_VIEWBOX} role='img' aria-label={handleMapAriaLabels(state)}>
          <rect
            height={SVG_HEIGHT}
            width={SVG_WIDTH}
            onClick={() => handleReset(state, setState, setRuntimeData)}
            fill='white'
          />
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
