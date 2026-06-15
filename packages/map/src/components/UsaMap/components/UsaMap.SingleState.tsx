import { useEffect, memo, useContext, useMemo, useRef } from 'react'
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
import SmallMultiples from '../../SmallMultiples/SmallMultiples'

import './UsaMap.SingleState.styles.css'

// map-level helpers
import { getGeoStrokeColor } from '../../../helpers/colors'
import { MAX_ZOOM_LEVEL, SVG_HEIGHT, SVG_WIDTH, SVG_PADDING, SVG_VIEWBOX } from '../../../helpers/constants'
import { handleMapAriaLabels } from '../../../helpers/handleMapAriaLabels'
import { titleCase } from '../../../helpers/titleCase'

// state-level helpers
import { getTopoData, getCurrentTopoYear, isTopoReady } from '../helpers/map'
import useGeoClickHandler from '../../../hooks/useGeoClickHandler'
import { getStatesPicked } from '../../../helpers/getStatesPicked'
import { shouldAutoResetSingleStateZoom } from '../../../helpers/shouldAutoResetSingleStateZoom'

const SingleStateMap: React.FC = () => {
  const {
    config,
    isDashboard,
    setSharedFilterValue,
    isFilterValueSupported,
    runtimeFilters,
    runtimeData,
    tooltipId,
    position,
    topoData,
    scale,
    translate,
    useDynamicViewbox
  } = useContext<MapContext>(ConfigContext)

  const a11y = handleMapAriaLabels(config)

  const dispatch = useContext(MapDispatchContext)
  const { handleMoveEnd, handleZoomIn, handleZoomOut, handleZoomReset, resetZoomState, projection, bounds } =
    useStateZoom(topoData)
  const previousRuntimeDataHashRef = useRef<number | null>(null)

  // Memoize statesPicked to prevent creating new arrays on every render
  const statesPicked = useMemo(() => {
    return getStatesPicked(config, runtimeData)
  }, [config.general.statesPicked?.length, config.general.statesPicked?.[0]?.stateName, (runtimeData as any)?.fromHash])

  const statesToShow = topoData?.states?.find(s => statesPicked.map(sp => sp.stateName).includes(s.properties.name))

  const { geoClickHandler } = useGeoClickHandler()

  const geoStrokeColor = getGeoStrokeColor(config)
  const path = geoPath().projection(projection)

  const dynamicViewBox = useMemo(() => {
    if (!useDynamicViewbox || !bounds) {
      return SVG_VIEWBOX
    }

    const x = Math.floor(bounds[0][0] - SVG_PADDING)
    const y = Math.floor(bounds[0][1] - SVG_PADDING)
    const width = Math.ceil(bounds[1][0] - bounds[0][0] + SVG_PADDING * 2)
    const height = Math.ceil(bounds[1][1] - bounds[0][1] + SVG_PADDING * 2)

    return `${x} ${y} ${width} ${height}`
  }, [useDynamicViewbox, bounds])

  useEffect(() => {
    let currentYear = getCurrentTopoYear(config, runtimeFilters)

    if (currentYear !== topoData?.year) {
      getTopoData(currentYear).then(response => {
        dispatch({ type: 'SET_TOPO_DATA', payload: response })
      })
    }
  }, [config.general.countyCensusYear, config.general.filterControlsCountyYear, JSON.stringify(runtimeFilters)])

  useEffect(() => {
    const runtimeDataHash = (runtimeData as any)?.fromHash as number | undefined
    const hasDashboardFilters = Boolean(config.dashboardFilters?.length)

    if (
      shouldAutoResetSingleStateZoom({
        isDashboard,
        previousRuntimeDataHash: previousRuntimeDataHashRef.current,
        nextRuntimeDataHash: runtimeDataHash,
        hasDashboardFilters,
        allowMapZoom: config.general.allowMapZoom
      })
    ) {
      resetZoomState({ publishEvent: false })
    }

    if (runtimeDataHash !== undefined) {
      previousRuntimeDataHashRef.current = runtimeDataHash
    }
  }, [config.dashboardFilters, config.general.allowMapZoom, isDashboard, resetZoomState, runtimeData])

  if (!isTopoReady(topoData, config, runtimeFilters)) {
    return (
      <div style={{ height: `${SVG_HEIGHT}px` }}>
        <Loading />
      </div>
    )
  }

  // Early return for small multiples rendering
  if (config.smallMultiples?.mode) {
    return <SmallMultiples />
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

    // Push city list - use projection from useStateZoom which is fitted to ALL selected states
    geosJsx.push(
      <CityList
        projection={projection}
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
          viewBox={dynamicViewBox}
          preserveAspectRatio='xMinYMin'
          className='svg-container'
          role='img'
          aria-label={a11y}
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
          </ZoomableGroup>
        </svg>
      )}
      {!!statesPicked && !config.general.allowMapZoom && statesPicked.some(sp => sp.fipsCode) && (
        <svg
          viewBox={dynamicViewBox}
          preserveAspectRatio='xMinYMin'
          className='svg-container'
          role='img'
          aria-label={a11y}
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
          viewBox={dynamicViewBox}
          preserveAspectRatio='xMinYMin'
          className='svg-container'
          role='img'
          aria-label={a11y}
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
        handleZoomReset={handleZoomReset}
      />
    </ErrorBoundary>
  )
}

export default memo(SingleStateMap)
