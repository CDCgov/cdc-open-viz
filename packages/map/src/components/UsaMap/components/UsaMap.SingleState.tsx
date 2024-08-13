import { useEffect, memo, useContext, useRef, useState } from 'react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { geoPath } from 'd3-geo'
import { CustomProjection } from '@visx/geo'
import Loading from '@cdc/core/components/Loading'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import CityList from '../../CityList'
import ConfigContext from '../../../context'
import Annotation from '../../Annotation'
import SingleState from './SingleState'
import { getTopoData, getCurrentTopoYear, isTopoReady } from './../helpers/map'
import ZoomableGroup from '../../ZoomableGroup'
import ZoomControls from '../../ZoomControls'
import { MapContext } from '../../../types/MapContext'
import useStateZoom from '../../../hooks/useStateZoom'

// SVG ITEMS
const WIDTH = 880
const HEIGHT = 500
const PADDING = 25

const SingleStateMap = props => {
  const { state, applyTooltipsToGeo, data, geoClickHandler, applyLegendToRow, displayGeoName, handleMapAriaLabels, titleCase, setSharedFilterValue, isFilterValueSupported, runtimeFilters, tooltipId, position, setPosition, stateToShow, topoData, setTopoData, scale, translate, setStateToShow } =
    useContext<MapContext>(ConfigContext)

  const { handleMoveEnd, handleZoomIn, handleZoomOut, handleReset, projection, statePicked } = useStateZoom(topoData)

  const cityListProjection = geoAlbersUsaTerritories()
    .translate([WIDTH / 2, HEIGHT / 2])
    .scale(1)
  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'
  const path = geoPath().projection(projection)

  useEffect(() => {
    setStateToShow(topoData?.states?.find(s => s.properties.name === state.general.statePicked.stateName))
  }, [statePicked])

  useEffect(() => {
    let currentYear = getCurrentTopoYear(state, runtimeFilters)

    if (currentYear !== topoData.year) {
      getTopoData(currentYear).then(response => {
        setTopoData(response)
      })
    }
  }, [state.general.countyCensusYear, state.general.filterControlsCountyYear, JSON.stringify(runtimeFilters)])

  if (!isTopoReady(topoData, state, runtimeFilters)) {
    return (
      <div style={{ height: `${HEIGHT}px` }}>
        <Loading />
      </div>
    )
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    const counties = geographies[0].feature.counties

    let geosJsx = []

    // Push state lines
    geosJsx.push(
      // prettier-ignore
      <SingleState.StateOutput
        topoData={topoData}
        path={path}
        scale={scale}
      />
    )

    // Push county lines
    geosJsx.push(
      // prettier-ignore
      <SingleState.CountyOutput
        counties={counties}
        scale={scale}
        geoStrokeColor={geoStrokeColor}
        tooltipId={tooltipId}
        path={path}
      />
    )

    // Push city list
    geosJsx.push(
      <CityList
        projection={cityListProjection}
        key='cities'
        data={data}
        state={state}
        geoClickHandler={geoClickHandler}
        applyTooltipsToGeo={applyTooltipsToGeo}
        displayGeoName={displayGeoName}
        applyLegendToRow={applyLegendToRow}
        titleCase={titleCase}
        setSharedFilterValue={setSharedFilterValue}
        isFilterValueSupported={isFilterValueSupported}
        tooltipId={tooltipId}
      />
    )

    return geosJsx
  }
  return (
    <ErrorBoundary component='SingleStateMap'>
      {statePicked && state.general.allowMapZoom && (
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio='xMinYMin' className='svg-container' role='img' aria-label={handleMapAriaLabels(state)}>
          <ZoomableGroup
            center={position.coordinates}
            zoom={position.zoom}
            minZoom={1} // Adjust this value if needed
            maxZoom={4} // Adjust this value to limit the maximum zoom level
            onMoveEnd={handleMoveEnd}
            projection={projection}
            width={880}
            height={500}
          >
            <rect className='background center-container ocean' width={WIDTH} height={HEIGHT} fillOpacity={1} fill='white'></rect>
            <CustomProjection
              data={[
                {
                  states: topoData?.states,
                  counties: topoData.counties.filter(c => c.id.substring(0, 2) === state.general.statePicked.fipsCode)
                }
              ]}
              projection={geoAlbersUsaTerritories}
            >
              {({ features, projection }) => {
                return (
                  <g id='mapGroup' className={`countyMapGroup ${state.general.geoType === 'single-state' ? `countyMapGroup--no-transition` : ''}`} transform={`translate(${translate}) scale(${scale})`} data-scale='' key='countyMapGroup'>
                    {constructGeoJsx(features, projection)}
                  </g>
                )
              }}
            </CustomProjection>
            {state.annotations.length > 0 && <Annotation.Draggable />}
          </ZoomableGroup>
        </svg>
      )}
      {statePicked && !state.general.allowMapZoom && (
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio='xMinYMin' className='svg-container' role='img' aria-label={handleMapAriaLabels(state)}>
          <rect className='background center-container ocean' width={WIDTH} height={HEIGHT} fillOpacity={1} fill='white'></rect>
          <CustomProjection
            data={[
              {
                states: topoData?.states,
                counties: topoData.counties.filter(c => c.id.substring(0, 2) === state.general.statePicked.fipsCode)
              }
            ]}
            projection={geoAlbersUsaTerritories}
            fitExtent={[
              [
                [PADDING, PADDING],
                [WIDTH - PADDING, HEIGHT - PADDING]
              ],
              stateToShow
            ]}
          >
            {({ features, projection }) => {
              return (
                <g id='mapGroup' className={`countyMapGroup ${state.general.geoType === 'single-state' ? `countyMapGroup--no-transition` : ''}`} transform={`translate(${translate}) scale(${scale})`} data-scale='' key='countyMapGroup'>
                  {constructGeoJsx(features, projection)}
                </g>
              )
            }}
          </CustomProjection>
          {state.annotations.length > 0 && <Annotation.Draggable />}
        </svg>
      )}
      {!state.general.statePicked && 'No State Picked'}
      <ZoomControls
        // prettier-ignore
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        handleReset={handleReset}
      />
    </ErrorBoundary>
  )
}

export default memo(SingleStateMap)
