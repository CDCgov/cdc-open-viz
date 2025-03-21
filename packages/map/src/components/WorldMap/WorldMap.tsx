import { memo, useContext, useState, useEffect } from 'react'
import { geoMercator } from 'd3-geo'
import { Mercator } from '@visx/geo'
import { feature } from 'topojson-client'
import ConfigContext from '../../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ZoomableGroup from '../ZoomableGroup'
import Geo from '../Geo'
import CityList from '../CityList'
import BubbleList from '../BubbleList'
import ZoomControls from '../ZoomControls'
import { supportedCountries } from '../../data/supported-geos'
import { getGeoFillColor, getGeoStrokeColor, handleMapAriaLabels, titleCase, displayGeoName } from '../../helpers'
import useGeoClickHandler from '../../hooks/useGeoClickHandler'
import useApplyLegendToRow from '../../hooks/useApplyLegendToRow'

let projection = geoMercator()

const WorldMap = () => {
  // prettier-ignore
  const {
    applyTooltipsToGeo,
    data,
    generateRuntimeData,
    hasZoom,
    position,
    setFilteredCountryCode,
    setPosition,
    setRuntimeData,
    setState,
    state,
    tooltipId,
    legendMemo,
    legendSpecialClassLastMemo
  } = useContext(ConfigContext)

  const [world, setWorld] = useState(null)
  const geoClickHandler = useGeoClickHandler()
  const applyLegendToRow = useApplyLegendToRow(legendMemo, legendSpecialClassLastMemo)

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
  const handleReset = (state, setState, setRuntimeData, generateRuntimeData) => {
    let reRun = generateRuntimeData(state)
    setRuntimeData(reRun)
    setState({
      ...state,
      focusedCountry: false,
      mapPosition: { coordinates: [0, 30], zoom: 1 }
    })
    setFilteredCountryCode('')
  }
  const handleZoomIn = (position, setPosition) => {
    if (position.zoom >= 4) return
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }))
  }

  const handleZoomOut = (position, setPosition) => {
    if (position.zoom <= 1) return
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }))
  }

  // TODO Refactor - state should be set together here to avoid rerenders
  const handleCircleClick = (country, state, setState, setRuntimeData, generateRuntimeData) => {
    if (!state.general.allowMapZoom) return
    let newRuntimeData = state.data.filter(item => item[state.columns.geo.name] === country[state.columns.geo.name])
    setFilteredCountryCode(newRuntimeData[0].uid)
  }

  const handleMoveEnd = position => {
    setPosition(position)
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

      // if ((geoKey === 'Alaska' || geoKey === 'Hawaii') && !geoData) {
      //   geoData = data['United States']
      // }

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
      if (legendColors && legendColors[0] !== '#000000' && state.general.type !== 'bubble') {
        styles = {
          ...styles,
          fill: state.general.type !== 'world-geocode' ? legendColors[0] : geoFillColor,
          cursor: 'default',
          '&:hover': {
            fill: state.general.type !== 'world-geocode' ? legendColors[1] : geoFillColor
          },
          '&:active': {
            fill: state.general.type !== 'world-geocode' ? legendColors[2] : geoFillColor
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
        applyLegendToRow={applyLegendToRow}
        applyTooltipsToGeo={applyTooltipsToGeo}
        geoClickHandler={geoClickHandler}
        key='cities'
        projection={projection}
        state={state}
        titleCase={titleCase}
        tooltipId={tooltipId}
      />
    )

    // Bubbles
    if (state.general.type === 'bubble') {
      geosJsx.push(
        <BubbleList
          key='bubbles'
          data={state.data}
          runtimeData={data}
          state={state}
          projection={projection}
          applyLegendToRow={applyLegendToRow}
          applyTooltipsToGeo={applyTooltipsToGeo}
          displayGeoName={displayGeoName}
          tooltipId={tooltipId}
          handleCircleClick={country =>
            handleCircleClick(country, state, setState, setRuntimeData, generateRuntimeData)
          }
        />
      )
    }

    return geosJsx
  }

  return (
    <ErrorBoundary component='WorldMap'>
      {hasZoom ? (
        <svg viewBox='0 0 880 500' role='img' aria-label={handleMapAriaLabels(state)}>
          <rect
            height={500}
            width={880}
            onClick={() => handleReset(state, setState, setRuntimeData, generateRuntimeData)}
            fill='white'
          />
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            maxZoom={4}
            projection={projection}
            width={880}
            height={500}
          >
            <Mercator data={world}>{({ features }) => constructGeoJsx(features)}</Mercator>
          </ZoomableGroup>
        </svg>
      ) : (
        <svg viewBox='0 0 880 500'>
          <ZoomableGroup
            zoom={1}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            maxZoom={0}
            projection={projection}
            width={880}
            height={500}
          >
            <Mercator data={world}>{({ features }) => constructGeoJsx(features)}</Mercator>
          </ZoomableGroup>
        </svg>
      )}
      {(state.general.type === 'data' ||
        (state.general.type === 'world-geocode' && hasZoom) ||
        (state.general.type === 'bubble' && hasZoom)) && (
        <ZoomControls
          // prettier-ignore
          generateRuntimeData={generateRuntimeData}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          position={position}
          setPosition={setPosition}
          setRuntimeData={setRuntimeData}
          setState={setState}
          state={state}
          handleReset={handleReset}
        />
      )}
    </ErrorBoundary>
  )
}

export default memo(WorldMap)
