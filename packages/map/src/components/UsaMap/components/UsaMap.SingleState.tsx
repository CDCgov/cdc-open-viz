import { useState, useEffect, memo, useContext, useCallback } from 'react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { geoPath } from 'd3-geo'
import { CustomProjection } from '@visx/geo'
import Loading from '@cdc/core/components/Loading'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import CityList from '../../CityList'
import ConfigContext from '../../../context'
import Annotation from '../../Annotation'
import SingleState from './SingleState'
import { getTopoData, getCurrentTopoYear, isTopoReady, getFilterControllingStatePicked } from './../helpers/map'
import { type Topology } from 'topojson-client'
import ZoomableGroup from '../../ZoomableGroup'
import ZoomControls from '../../ZoomControls'

// SVG ITEMS
const WIDTH = 880
const HEIGHT = 500
const PADDING = 25

const SingleStateMap = props => {
  // prettier-ignore
  const {
    state,
    applyTooltipsToGeo,
    data,
    geoClickHandler,
    applyLegendToRow,
    displayGeoName,
    handleMapAriaLabels,
    titleCase,
    setSharedFilterValue,
    isFilterValueSupported,
    runtimeFilters,
    tooltipId,
    dashboardConfig,
    setState,
    position,
    setPosition,
    generateRuntimeData,
    setRuntimeData
  } = useContext(ConfigContext)

  const projection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
  const cityListProjection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'
  const [stateToShow, setStateToShow] = useState(null)
  const [translate, setTranslate] = useState()
  const [scale, setScale] = useState()
  const [topoData, setTopoData] = useState<Topology | {}>({})

  const path = geoPath().projection(projection)

  const handleZoomIn = (position, setPosition) => {
    if (position.zoom >= 4) return
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }))
  }

  const handleZoomOut = (position, setPosition) => {
    if (position.zoom <= 1) return
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }))
  }

  const handleMoveEnd = position => {
    setPosition(position)
  }

  useEffect(() => {
    let currentYear = getCurrentTopoYear(state, runtimeFilters)

    if (currentYear !== topoData.year) {
      getTopoData(currentYear).then(response => {
        setTopoData(response)
      })
    }
  }, [state.general.countyCensusYear, state.general.filterControlsCountyYear, JSON.stringify(runtimeFilters)])

  // from state?.general?.statePicked.stateName get the center coordinates
  const handleReset = useCallback(() => {
    if (!isTopoReady(topoData, state, runtimeFilters)) return

    const _statePicked = getFilterControllingStatePicked(state, dashboardConfig)
    const _statePickedData = topoData.states.find(s => s.properties.name === _statePicked)
    const projection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
    const newProjection = projection.fitExtent(
      [
        [PADDING, PADDING],
        [WIDTH - PADDING, HEIGHT - PADDING]
      ],
      _statePickedData
    )

    const newScale = newProjection.scale()
    const newScaleWithHypot = newScale / 1070

    let [x, y] = newProjection.translate()
    x = x - WIDTH
    y = y - HEIGHT / 2

    setTranslate([x, y])
    setScale(newScaleWithHypot)

    // get state center coordinates
    const featureCenter = path.centroid(stateToShow)
    const stateCenter = newProjection.invert(featureCenter)
    setPosition({ coordinates: stateCenter, zoom: 1 })
  }, [state.general.allowMapZoom])

  useEffect(() => {
    if (!isTopoReady(topoData, state, runtimeFilters)) return
    const _statePicked = getFilterControllingStatePicked(state, dashboardConfig)
    const _statePickedData = topoData.states.find(s => s.properties.name === _statePicked)
    if (!_statePickedData) return
    setStateToShow(_statePickedData)
    const projection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
    const newProjection = projection.fitExtent(
      [
        [PADDING, PADDING],
        [WIDTH - PADDING, HEIGHT - PADDING]
      ],
      _statePickedData
    )
    const newScale = newProjection.scale()
    const newScaleWithHypot = newScale / 1070

    let [x, y] = newProjection.translate()
    x = x - WIDTH / 2
    y = y - HEIGHT / 2

    setTranslate([x, y])
    setScale(newScaleWithHypot)

    setState(prevState => {
      if (prevState.general.statePicked?.stateName !== _statePickedData?.properties?.name && _statePickedData) {
        return {
          ...prevState,
          general: {
            ...prevState.general,
            statePicked: { fipsCode: _statePickedData?.id, stateName: _statePickedData?.properties?.name }
          }
        }
      }
      return prevState
    })
  }, [state?.general?.statePicked.stateName, dashboardConfig?.dashboard?.sharedFilters])

  useEffect(() => {
    let currentYear = getCurrentTopoYear(state, runtimeFilters)

    if (currentYear !== topoData.year) {
      getTopoData(currentYear).then(response => {
        setTopoData(response)
      })
    }
  }, [state.general.countyCensusYear, state.general.filterControlsCountyYear, JSON.stringify(runtimeFilters)])

  useEffect(() => {
    const _statePicked = getFilterControllingStatePicked(state, dashboardConfig)
    const _statePickedData = topoData?.states?.find(s => s.properties.name === _statePicked)

    if (_statePickedData?.id) {
      setState({
        ...state,
        general: {
          ...state.general,
          statePicked: { fipsCode: _statePickedData?.id, stateName: _statePickedData?.properties?.name }
        }
      })
    }
  }, [topoData])

  // When choosing a state changes...
  useEffect(() => {
    if (!isTopoReady(topoData, state, runtimeFilters)) return
    if (state.general.hasOwnProperty('statePicked')) {
      const statePicked = getFilterControllingStatePicked(state, dashboardConfig)
      const statePickedData = topoData.states.find(s => s.properties.name === statePicked)
      setStateToShow(statePickedData)

      const projection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
      const newProjection = projection.fitExtent(
        [
          [PADDING, PADDING],
          [WIDTH - PADDING, HEIGHT - PADDING]
        ],
        statePickedData
      )
      const newScale = newProjection.scale()
      const newScaleWithHypot = newScale / 1070

      let [x, y] = newProjection.translate()
      x = x - WIDTH / 2
      y = y - HEIGHT / 2

      setTranslate([x, y])
      setScale(newScaleWithHypot)
    }
  }, [state.general.statePicked, topoData.year])

  if (!isTopoReady(topoData, state, runtimeFilters)) {
    return (
      <div style={{ height: `${HEIGHT}px` }}>
        <Loading />
      </div>
    )
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    const statePassed = geographies[0].feature.states
    const counties = geographies[0].feature.counties

    let geosJsx = []

    // Push state lines
    geosJsx.push(
      // prettier-ignore
      <SingleState.StateOutput
        topoData={topoData}
        statePassed={statePassed}
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
      {stateToShow && state.general.allowMapZoom && (
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio='xMinYMin' className='svg-container' role='img' aria-label={handleMapAriaLabels(state)}>
          <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd} maxZoom={4} projection={projection} width={880} height={500}>
            <rect className='background center-container ocean' width={WIDTH} height={HEIGHT} fillOpacity={1} fill='white'></rect>
            <CustomProjection
              data={[{ states: stateToShow?.states, counties: topoData.counties.filter(c => c.id.substring(0, 2) === state.general.statePicked.fipsCode) }]}
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
          </ZoomableGroup>
        </svg>
      )}
      {stateToShow && !state.general.allowMapZoom && (
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio='xMinYMin' className='svg-container' role='img' aria-label={handleMapAriaLabels(state)}>
          <rect className='background center-container ocean' width={WIDTH} height={HEIGHT} fillOpacity={1} fill='white'></rect>
          <CustomProjection
            data={[{ states: stateToShow?.states, counties: topoData.counties.filter(c => c.id.substring(0, 2) === state.general.statePicked.fipsCode) }]}
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
        generateRuntimeData={generateRuntimeData}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        handleReset={handleReset}
        position={position}
        setPosition={setPosition}
        setRuntimeData={setRuntimeData}
        setState={setState}
        state={state}
      />
    </ErrorBoundary>
  )
}

export default memo(SingleStateMap)
