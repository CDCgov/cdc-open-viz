import { useContext, useEffect, useMemo, useCallback } from 'react'
import ConfigContext, { MapDispatchContext } from '../context'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import { MapContext } from '../types/MapContext'
import { geoPath, GeoPath } from 'd3-geo'
import { getFilterControllingStatesPicked } from '../components/UsaMap/helpers/map'
import { supportedStatesFipsCodes } from '../data/supported-geos'
import { SVG_HEIGHT, SVG_WIDTH, SVG_PADDING } from '../helpers'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'

interface StateData {
  geometry: { type: 'MultiPolygon'; coordinates: number[][][][] }
  // FIPS ID of US state
  id: string
  // name of US state
  properties: { name: string }
  type: 'Feature'
}

const useSetScaleAndTranslate = (topoData: { states: StateData[] }) => {
  const { config, runtimeData, position, interactionLabel } = useContext<MapContext>(ConfigContext)
  const dispatch = useContext(MapDispatchContext)

  // Get statesPicked with memoization
  const statesPicked = useMemo(() => {
    const result = getFilterControllingStatesPicked(config, runtimeData)
    if (!result) return []
    if (!Array.isArray(result)) return [result]
    return result
  }, [config.general.statesPicked, runtimeData])

  // Memoize expensive computations
  const statesData = useMemo(() => {
    return statesPicked.map(state => ({
      fipsCode: Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === state),
      stateName: state
    }))
  }, [statesPicked])

  // Memoize projection calculations
  const projectionData = useMemo(() => {
    const projection = geoAlbersUsaTerritories()
      .translate([SVG_WIDTH / 2, SVG_HEIGHT / 2])
      .scale(1)

    const _statesPickedData = topoData?.states?.filter(s => statesPicked.includes(s.properties.name))

    const combinedData = _statesPickedData?.length
      ? {
          type: 'FeatureCollection',
          features: _statesPickedData
        }
      : null

    const newProjection = combinedData
      ? projection.fitExtent(
          [
            [SVG_PADDING, SVG_PADDING],
            [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
          ],
          combinedData
        )
      : projection

    const path: GeoPath = geoPath().projection(projection)
    const featureCenter = combinedData ? path.centroid(combinedData as any) : [0, 0]
    const stateCenter = newProjection.invert(featureCenter)

    return { projection, newProjection, stateCenter }
  }, [topoData, statesPicked])

  const setScaleAndTranslate = useCallback(
    (zoomFunction: string = '') => {
      const _prevPosition = config.mapPosition
      let newZoom = _prevPosition.zoom
      let newCoordinates = _prevPosition.coordinates
      if (zoomFunction === 'zoomIn' && _prevPosition.zoom < 4) {
        newZoom = _prevPosition.zoom * 1.5
        newCoordinates =
          _prevPosition.coordinates[0] !== 0 && _prevPosition.coordinates[1] !== 0
            ? _prevPosition.coordinates
            : projectionData.stateCenter
        publishAnalyticsEvent('map_zoomed_in', 'click', `${interactionLabel}|${newZoom}|${newCoordinates}`, 'map')
      } else if (zoomFunction === 'zoomOut' && _prevPosition.zoom > 1) {
        newZoom = _prevPosition.zoom / 1.5
        newCoordinates =
          _prevPosition.coordinates[0] !== 0 && _prevPosition.coordinates[1] !== 0
            ? _prevPosition.coordinates
            : projectionData.stateCenter
      } else if (zoomFunction === 'reset') {
        newZoom = 1
        newCoordinates = projectionData.stateCenter
      }

      dispatch({ type: 'SET_POSITION', payload: { coordinates: newCoordinates, zoom: newZoom } })

      if (zoomFunction === 'reset') {
        dispatch({ type: 'SET_TRANSLATE', payload: [0, 0] }) // needed for state switcher
        dispatch({ type: 'SET_SCALE', payload: 1 }) // needed for state switcher
        publishAnalyticsEvent('map_reset_zoom_level', 'click', interactionLabel, 'map')
      }
    },
    [config.mapPosition, projectionData.stateCenter, interactionLabel, dispatch]
  )

  // Essential fix: Remove config from dependencies to prevent infinite loops
  useEffect(() => {
    if (!topoData) return

    dispatch({ type: 'SET_SCALE', payload: 1 })
    dispatch({ type: 'SET_TRANSLATE', payload: [0, 0] })
    dispatch({ type: 'SET_STATES_TO_SHOW', payload: statesPicked })
  }, [topoData, statesPicked, dispatch])

  useEffect(() => {
    const currentStatesPicked = config.general.statesPicked?.map(state => state.stateName) || []

    const alreadySet =
      currentStatesPicked.length === statesPicked.length &&
      currentStatesPicked.every((s: string) => statesPicked.includes(s))

    if (alreadySet) return

    const newConfig = { ...config }
    newConfig.general = { ...config.general, statesPicked: statesData }
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
  }, [statesPicked, statesData, dispatch])

  const switchState = useCallback(() => {
    dispatch({ type: 'SET_STATES_TO_SHOW', payload: statesPicked })
  }, [statesPicked, setScaleAndTranslate, dispatch])

  const handleZoomIn = useCallback(() => {
    setScaleAndTranslate('zoomIn')
  }, [setScaleAndTranslate])

  const handleZoomOut = useCallback(() => {
    setScaleAndTranslate('zoomOut')
  }, [setScaleAndTranslate])

  const handleMoveEnd = useCallback(
    position => {
      dispatch({ type: 'SET_POSITION', payload: position })
    },
    [dispatch]
  )

  const handleReset = useCallback(() => {
    setScaleAndTranslate('reset')
  }, [setScaleAndTranslate])

  return {
    statesPicked,
    setScaleAndTranslate,
    switchState,
    handleZoomIn,
    handleZoomOut,
    handleMoveEnd,
    handleReset,
    projection: projectionData.projection
  }
}

export default useSetScaleAndTranslate
