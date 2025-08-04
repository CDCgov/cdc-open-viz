import { useContext, useEffect } from 'react'
import ConfigContext, { MapDispatchContext } from '../context'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import { MapContext } from '../types/MapContext'
import { geoPath, GeoPath } from 'd3-geo'
import { getFilterControllingStatesPicked } from '../components/UsaMap/helpers/map'
import { supportedStatesFipsCodes } from '../data/supported-geos'
import { SVG_HEIGHT, SVG_WIDTH, SVG_PADDING } from '../helpers'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import _ from 'lodash'

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
  const statesPicked = getFilterControllingStatesPicked(config, runtimeData)
  const dispatch = useContext(MapDispatchContext)

  useEffect(() => {
    const statesData = statesPicked.map(state => ({
      fipsCode: Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === state),
      stateName: state
    }))
    const newConfig = _.cloneDeep(config)
    newConfig.general.statesPicked = statesData
    const statesToShow = topoData?.states?.filter(s => statesPicked.includes(s.properties.name))

    dispatch({ type: 'SET_SCALE', payload: 1 })
    dispatch({ type: 'SET_TRANSLATE', payload: [0, 0] })
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    dispatch({ type: 'SET_STATES_TO_SHOW', payload: statesToShow })
  }, [topoData])

  useEffect(() => {
    const currentStatesPicked = config.general.statesPicked.map(state => state.stateName)

    const alreadySet =
      currentStatesPicked.length === statesPicked.length &&
      currentStatesPicked.every((s: string) => statesPicked.includes(s))

    if (alreadySet) return

    const statesData = statesPicked.map(state => ({
      fipsCode: Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === state),
      stateName: state
    }))

    const newConfig = _.cloneDeep(config)
    newConfig.general.statesPicked = statesData
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    setScaleAndTranslate('reset')
  }, [statesPicked])

  // TODO: same as city list projection?
  const projection = geoAlbersUsaTerritories()
    .translate([SVG_WIDTH / 2, SVG_HEIGHT / 2])
    .scale(1)

  const _statesPickedData = topoData?.states?.filter(s => statesPicked.includes(s.properties.name))

  const combinedData = _statesPickedData?.reduce(
    (acc, state) => {
      acc.features.push(state)
      return acc
    },
    { type: 'FeatureCollection', features: [] }
  )
  const newProjection = projection.fitExtent(
    [
      [SVG_PADDING, SVG_PADDING],
      [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
    ],
    combinedData
  )

  // Work for centering the state.
  let [x, y] = newProjection.translate()
  x = x - SVG_WIDTH / 2
  y = y - SVG_HEIGHT / 2

  const path: GeoPath = geoPath().projection(projection)
  const featureCenter = path.centroid(combinedData)
  const stateCenter = newProjection.invert(featureCenter)

  const switchState = () => {
    dispatch({ type: 'SET_STATES_TO_SHOW', payload: _statesPickedData })
    setScaleAndTranslate('reset')
  }

  const setScaleAndTranslate = (zoomFunction: string = '') => {
    const _prevPosition = position
    let newZoom = _prevPosition.zoom
    let newCoordinates = _prevPosition.coordinates
    if (zoomFunction === 'zoomIn' && _prevPosition.zoom < 4) {
      newZoom = _prevPosition.zoom * 1.5
      newCoordinates =
        _prevPosition.coordinates[0] !== 0 && _prevPosition.coordinates[1] !== 0
          ? _prevPosition.coordinates
          : stateCenter
      publishAnalyticsEvent('map_zoomed_in', 'click', `${interactionLabel}|${newZoom}|${newCoordinates}`, 'map')
    } else if (zoomFunction === 'zoomOut' && _prevPosition.zoom > 1) {
      newZoom = _prevPosition.zoom / 1.5
      newCoordinates =
        _prevPosition.coordinates[0] !== 0 && _prevPosition.coordinates[1] !== 0
          ? _prevPosition.coordinates
          : stateCenter
    } else if (zoomFunction === 'reset') {
      newZoom = 1
      newCoordinates = stateCenter
    }

    dispatch({ type: 'SET_POSITION', payload: { coordinates: newCoordinates, zoom: newZoom } })

    if (zoomFunction === 'reset') {
      dispatch({ type: 'SET_TRANSLATE', payload: [0, 0] }) // needed for state switcher
      dispatch({ type: 'SET_SCALE', payload: 1 }) // needed for state switcher
      publishAnalyticsEvent('map_reset_zoom_level', 'click', interactionLabel, 'map')
    }
  }

  const handleZoomIn = () => {
    setScaleAndTranslate('zoomIn')
  }

  const handleZoomOut = () => {
    setScaleAndTranslate('zoomOut')
  }

  const handleMoveEnd = position => {
    dispatch({ type: 'SET_POSITION', payload: position })
  }

  const handleReset = () => {
    setScaleAndTranslate('reset')
  }

  return {
    statesPicked,
    setScaleAndTranslate,
    switchState,
    handleZoomIn,
    handleZoomOut,
    handleMoveEnd,
    handleReset,
    projection
  }
}

export default useSetScaleAndTranslate
