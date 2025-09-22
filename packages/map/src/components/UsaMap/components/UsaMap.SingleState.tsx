import { useEffect, memo, useContext, useMemo } from 'react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { geoPath } from 'd3-geo'
import { CustomProjection } from '@visx/geo'
import Loading from '@cdc/core/components/Loading'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import CityList from '../../CityList'
import ConfigContext, { MapDispatchContext } from '../../../context'
import Annotation from '../../Annotation'
import SingleState from './SingleState'
import ZoomableGroup from '../../ZoomableGroup'
import ZoomControls from '../../ZoomControls'
import { MapContext } from '../../../types/MapContext'
import useStateZoom from '../../../hooks/useStateZoom'
import { Text } from '@visx/text'

import './UsaMap.SingleState.styles.css'

// map-level helpers
import { titleCase, handleMapAriaLabels, getGeoStrokeColor, MAX_ZOOM_LEVEL } from '../../../helpers'

// state-level helpers
import { getTopoData, getCurrentTopoYear, isTopoReady } from '../helpers/map'
import useGeoClickHandler from '../../../hooks/useGeoClickHandler'
import { SVG_WIDTH, SVG_HEIGHT, SVG_PADDING, SVG_VIEWBOX } from '../../../helpers'
import _ from 'lodash'
import { getStatesPicked } from '../../../helpers/getStatesPicked'

const SingleStateMap: React.FC = () => {
  const {
    config,
    setSharedFilterValue,
    isFilterValueSupported,
    runtimeFilters,
    runtimeData,
    tooltipId,
    position,
    topoData,
    scale,
    translate
  } = useContext<MapContext>(ConfigContext)

  const dispatch = useContext(MapDispatchContext)
  const { handleMoveEnd, handleZoomIn, handleZoomOut, handleReset, projection } = useStateZoom(topoData)

  // Memoize statesPicked to prevent creating new arrays on every render
  const statesPicked = useMemo(() => {
    return getStatesPicked(config, runtimeData)
  }, [
    config.general.statesPicked?.length,
    config.general.statesPicked?.[0]?.stateName
    // Don't include runtimeData as it causes excessive re-renders
  ])

  const statesToShow = topoData?.states?.find(s => statesPicked.map(sp => sp.stateName).includes(s.properties.name))

  const { geoClickHandler } = useGeoClickHandler()

  const cityListProjection = geoAlbersUsaTerritories()
    .translate([SVG_WIDTH / 2, SVG_HEIGHT / 2])
    .scale(1)
  const geoStrokeColor = getGeoStrokeColor(config)
  const path = geoPath().projection(projection)

  useEffect(() => {
    let currentYear = getCurrentTopoYear(config, runtimeFilters)

    if (currentYear !== topoData?.year) {
      getTopoData(currentYear).then(response => {
        dispatch({ type: 'SET_TOPO_DATA', payload: response })
      })
    }
  }, [config.general.countyCensusYear, config.general.filterControlsCountyYear, JSON.stringify(runtimeFilters)])

  if (!isTopoReady(topoData, config, runtimeFilters)) {
    return (
      <div style={{ height: `${SVG_HEIGHT}px` }}>
        <Loading />
      </div>
    )
  }

  const checkForNoData = () => {
    // If no statesPicked, return true
    if (statesPicked?.every(sp => !sp.fipsCode)) return true
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = geographies => {
    const counties = geographies[0].feature.counties

    let geosJsx = []
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
    // Push config lines
    geosJsx.push(
      // prettier-ignore
      <SingleState.StateOutput
        topoData={topoData}
        path={path}
        scale={scale}
        runtimeData={runtimeData}
      />
    )

    // Push city list
    geosJsx.push(
      <CityList
        projection={cityListProjection}
        key='cities'
        geoClickHandler={geoClickHandler}
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
      {!!statesPicked.length && config.general.allowMapZoom && statesPicked.some(sp => sp.fipsCode) && (
        <svg
          viewBox={SVG_VIEWBOX}
          preserveAspectRatio='xMinYMin'
          className='svg-container'
          role='img'
          aria-label={handleMapAriaLabels(config)}
        >
          <ZoomableGroup
            center={position.coordinates}
            zoom={position.zoom}
            minZoom={1} // Adjust this value if needed
            maxZoom={MAX_ZOOM_LEVEL}
            onMoveEnd={handleMoveEnd}
            projection={projection}
            width={SVG_WIDTH}
            height={SVG_HEIGHT}
          >
            <rect
              className='background center-container ocean'
              width={SVG_WIDTH}
              height={SVG_HEIGHT}
              fillOpacity={1}
              fill='white'
            ></rect>
            <CustomProjection
              data={[
                {
                  states: topoData?.states,
                  counties: topoData.counties.filter(c =>
                    statesPicked.map(sp => sp.fipsCode).includes(c.id.substring(0, 2))
                  )
                }
              ]}
              projection={geoAlbersUsaTerritories}
              fitExtent={[
                [
                  [SVG_PADDING, SVG_PADDING],
                  [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
                ],
                statesToShow
              ]}
            >
              {({ features, projection }) => {
                return (
                  <g
                    id='mapGroup'
                    className={`countyMapGroup ${
                      config.general.geoType === 'single-state' ? `countyMapGroup--no-transition` : ''
                    }`}
                    transform={`translate(${translate}) scale(${scale})`}
                    data-scale=''
                    key='countyMapGroup'
                  >
                    {constructGeoJsx(features, projection)}
                  </g>
                )
              }}
            </CustomProjection>
            {config.annotations.length > 0 && <Annotation.Draggable />}
          </ZoomableGroup>
        </svg>
      )}
      {!!statesPicked && !config.general.allowMapZoom && statesPicked.some(sp => sp.fipsCode) && (
        <svg
          viewBox={SVG_VIEWBOX}
          preserveAspectRatio='xMinYMin'
          className='svg-container'
          role='img'
          aria-label={handleMapAriaLabels(config)}
        >
          <rect
            className='background center-container ocean'
            width={SVG_WIDTH}
            height={SVG_HEIGHT}
            fillOpacity={1}
            fill='white'
          ></rect>
          <CustomProjection
            data={[
              {
                states: topoData?.states,
                counties: topoData.counties.filter(c =>
                  statesPicked.map(sp => sp.fipsCode).includes(c.id.substring(0, 2))
                )
              }
            ]}
            projection={geoAlbersUsaTerritories}
            fitExtent={[
              [
                [SVG_PADDING, SVG_PADDING],
                [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
              ],
              statesToShow
            ]}
          >
            {({ features }) => {
              return (
                <g
                  id='mapGroup'
                  className={`countyMapGroup ${
                    config.general.geoType === 'single-state' ? `countyMapGroup--no-transition` : ''
                  }`}
                  transform={`translate(${translate}) scale(${scale})`}
                  data-scale=''
                  key='countyMapGroup'
                >
                  {constructGeoJsx(features)}
                </g>
              )
            }}
          </CustomProjection>
          {config.annotations.length > 0 && <Annotation.Draggable />}
        </svg>
      )}

      {checkForNoData() && (
        <svg
          viewBox={SVG_VIEWBOX}
          preserveAspectRatio='xMinYMin'
          className='svg-container'
          role='img'
          aria-label={handleMapAriaLabels(config)}
        >
          <Text
            verticalAnchor='start'
            textAnchor='middle'
            x={SVG_WIDTH / 2}
            width={SVG_WIDTH}
            y={SVG_HEIGHT / 2}
            fontSize={18}
            style={{ fontSize: '28px', height: '18px' }}
          >
            {config.general.noDataMessage}
          </Text>
        </svg>
      )}
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
