import { React, useEffect } from 'react'

import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import { geoMercator } from 'd3-geo'
import { Mercator } from '@visx/geo'
import { feature } from 'topojson-client'
import topoJSON from '../data/topojson/world.json'
import ZoomableGroup from './ZoomableGroup'
import Geo from './Geo'
import CityList from './CityList'
import BubbleList from './BubbleList'
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

const { features: world } = feature(topoJSON, topoJSON.objects.countries)

let projection = geoMercator()

const WorldMap = props => {
  const { applyTooltipsToGeo, data, geoClickHandler, applyLegendToRow, displayGeoName, supportedCountries, setState, setRuntimeData, generateRuntimeData, setFilteredCountryCode, setPosition, hasZoom, handleMapAriaLabels } = props
  const { config } = useVisConfig()

  const position = config.mapPosition

  // TODO Refactor - config should be set together here to avoid rerenders
  // Resets to original data & zooms out
  const handleReset = (config, setState, setRuntimeData, generateRuntimeData) => {
    let reRun = generateRuntimeData(config)
    setRuntimeData(reRun)
    setState({
      ...config,
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

  const ZoomControls = ({ position, setPosition, config, setState, setRuntimeData, generateRuntimeData }) => (
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
      {config?.general?.type === 'bubble' && (
        <button onClick={() => handleReset(config, setState, setRuntimeData, generateRuntimeData)} className='reset' aria-label='Reset Zoom and Map Filters'>
          Reset Filters
        </button>
      )}
    </div>
  )

  // TODO Refactor - config should be set together here to avoid rerenders
  const handleCircleClick = (country, config, setState, setRuntimeData, generateRuntimeData) => {
    if (!config.general.allowMapZoom) return
    let newRuntimeData = config.data.filter(item => item[config.columns.geo.name] === country[config.columns.geo.name])
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

      const geoStrokeColor = config.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

      let styles = {
        fill: '#E6E6E6',
        cursor: 'default'
      }

      const strokeWidth = 0.9

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000' && config.general.type !== 'bubble') {
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
        if ((config.columns.navigate && geoData[config.columns.navigate.name]) || config.tooltips.appearanceType === 'click') {
          styles.cursor = 'pointer'
        }

        return <Geo key={i + '-geo'} css={styles} path={path} stroke={geoStrokeColor} strokeWidth={strokeWidth} onClick={() => geoClickHandler(geoDisplayName, geoData)} data-tooltip-id='tooltip' data-tooltip-html={toolTip} />
      }

      // Default return config, just geo with no additional information
      return <Geo key={i + '-geo'} stroke={geoStrokeColor} strokeWidth={strokeWidth} css={styles} path={path} />
    })

    // Cities
    geosJsx.push(<CityList projection={projection} key='cities' data={data} state={config} geoClickHandler={geoClickHandler} applyTooltipsToGeo={applyTooltipsToGeo} displayGeoName={displayGeoName} applyLegendToRow={applyLegendToRow} isGeoCodeMap={config.general.type === 'us-geocode'} />)

    // Bubbles
    if (config.general.type === 'bubble') {
      geosJsx.push(
        <BubbleList
          key='bubbles'
          data={config.data}
          runtimeData={data}
          state={config}
          projection={projection}
          applyLegendToRow={applyLegendToRow}
          applyTooltipsToGeo={applyTooltipsToGeo}
          displayGeoName={displayGeoName}
          handleCircleClick={country => handleCircleClick(country, config, setState, setRuntimeData, generateRuntimeData)}
        />
      )
    }

    return geosJsx
  }

  return (
    <ErrorBoundary component='WorldMap'>
      {hasZoom ? (
        <svg viewBox='0 0 880 500' role='img' aria-label={handleMapAriaLabels(config)}>
          <rect height={500} width={880} onClick={() => handleReset(config, setState, setRuntimeData, generateRuntimeData)} fill='white' />
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
      {(config.general.type === 'data' || (config.general.type === 'bubble' && hasZoom)) && <ZoomControls position={position} setPosition={setPosition} setRuntimeData={setRuntimeData} state={config} setState={setState} generateRuntimeData={generateRuntimeData} />}
    </ErrorBoundary>
  )
}

export default WorldMap
