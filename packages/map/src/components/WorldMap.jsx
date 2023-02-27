import { useEffect, memo } from 'react'

import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { geoMercator } from 'd3-geo'
import { Mercator } from '@visx/geo'
import { feature } from 'topojson-client'
import topoJSON from '../data/world-topo.json'
import ZoomableGroup from './ZoomableGroup'
import Geo from './Geo'
import CityList from './CityList'
import BubbleList from './BubbleList'

const { features: world } = feature(topoJSON, topoJSON.objects.countries)

let projection = geoMercator()

const WorldMap = props => {
  const { state, applyTooltipsToGeo, data, geoClickHandler, applyLegendToRow, displayGeoName, supportedCountries, setState, setRuntimeData, generateRuntimeData, setFilteredCountryCode, position, setPosition, hasZoom, handleMapAriaLabels } = props

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

  const ZoomControls = ({ position, setPosition, state, setState, setRuntimeData, generateRuntimeData }) => (
    <div className='zoom-controls' data-html2canvas-ignore>
      <button onClick={() => handleZoomIn(position, setPosition)} aria-label='Zoom In'>
        <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
          <line x1='12' y1='5' x2='12' y2='19' />
          <line x1='5' y1='12' x2='19' y2='12' />
        </svg>
      </button>
      <button onClick={() => handleZoomOut(position, setPosition)} aria-label='Zoom Out'>
        <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
          <line x1='5' y1='12' x2='19' y2='12' />
        </svg>
      </button>
      {state.general.type === 'bubble' && (
        <button onClick={() => handleReset(state, setState, setRuntimeData, generateRuntimeData)} className='reset' aria-label='Reset Zoom and Map Filters'>
          Reset Filters
        </button>
      )}
    </div>
  )

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
      const geoKey = geo.properties.iso

      if (!geoKey) return

      const geoData = data[geoKey]

      const geoDisplayName = displayGeoName(supportedCountries[geoKey][0])

      let legendColors

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData)
      }

      const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

      let styles = {
        fill: '#E6E6E6',
        cursor: 'default'
      }

      const strokeWidth = 0.9

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000' && state.general.type !== 'bubble') {
        const toolTip = applyTooltipsToGeo(geoDisplayName, geoData)

        styles = {
          ...styles,
          fill: legendColors[0],
          cursor: 'default',
          '&:hover': {
            fill: legendColors[1]
          },
          '&:active': {
            fill: legendColors[2]
          }
        }

        // When to add pointer cursor
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          styles.cursor = 'pointer'
        }

        return <Geo
          key={i + '-geo'}
          css={styles}
          path={path}
          stroke={geoStrokeColor}
          strokeWidth={strokeWidth}
          onClick={() => geoClickHandler(geoDisplayName, geoData)}
          data-tooltip-id="tooltip"
          data-tooltip-html={toolTip}
        />
      }

      // Default return state, just geo with no additional information
      return <Geo key={i + '-geo'} stroke={geoStrokeColor} strokeWidth={strokeWidth} css={styles} path={path} />
    })

    // Cities
    geosJsx.push(<CityList projection={projection} key='cities' data={data} state={state} geoClickHandler={geoClickHandler} applyTooltipsToGeo={applyTooltipsToGeo} displayGeoName={displayGeoName} applyLegendToRow={applyLegendToRow} isGeoCodeMap={state.general.type === 'us-geocode'} />)

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
          handleCircleClick={country => handleCircleClick(country, state, setState, setRuntimeData, generateRuntimeData)}
        />
      )
    }

    return geosJsx
  }

  return (
    <ErrorBoundary component='WorldMap'>
      {hasZoom ? (
        <svg viewBox='0 0 880 500' role='img' aria-label={handleMapAriaLabels(state)}>
          <rect height={500} width={880} onClick={() => handleReset(state, setState, setRuntimeData, generateRuntimeData)} fill='white' />
          <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd} maxZoom={4} projection={projection} width={880} height={500}>
            <Mercator data={world}>{({ features }) => constructGeoJsx(features)}</Mercator>
          </ZoomableGroup>
        </svg>
      ) : (
        <svg viewBox='0 0 880 500'>
          <ZoomableGroup zoom={1} center={position.coordinates} onMoveEnd={handleMoveEnd} maxZoom={0} projection={projection} width={880} height={500}>
            <Mercator data={world}>{({ features }) => constructGeoJsx(features)}</Mercator>
          </ZoomableGroup>
        </svg>
      )}
      {(state.general.type === 'data' || (state.general.type === 'bubble' && hasZoom)) && <ZoomControls position={position} setPosition={setPosition} setRuntimeData={setRuntimeData} state={state} setState={setState} generateRuntimeData={generateRuntimeData} />}
    </ErrorBoundary>
  )
}

export default memo(WorldMap)
