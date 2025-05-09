import { useContext, useEffect } from 'react'
import ConfigContext, { MapDispatchContext } from '../context'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import { MapContext } from '../types/MapContext'
import { geoPath, GeoPath } from 'd3-geo'
import { getFilterControllingStatePicked } from '../components/UsaMap/helpers/map'
import { supportedStatesFipsCodes } from '../data/supported-geos'
import { SVG_HEIGHT, SVG_WIDTH, SVG_PADDING } from '../helpers'
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
  const { config, runtimeData, position } = useContext<MapContext>(ConfigContext)
  const statePicked = getFilterControllingStatePicked(config, runtimeData)
  const dispatch = useContext(MapDispatchContext)

  useEffect(() => {
    const fipsCode = Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === statePicked)
    const stateName = statePicked
    const stateData = { fipsCode, stateName }
    const newConfig = _.cloneDeep(config)
    newConfig.general.statePicked = stateData
    const stateToShow = topoData?.states?.find(s => s.properties.name === statePicked)

    dispatch({ type: 'SET_SCALE', payload: 1 })
    dispatch({ type: 'SET_TRANSLATE', payload: [0, 0] })
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    dispatch({ type: 'SET_STATE_TO_SHOW', payload: stateToShow })
  }, [topoData])

  useEffect(() => {
    const fipsCode = Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === statePicked)
    const stateName = statePicked
    const stateData = { fipsCode, stateName }
    const newConfig = _.cloneDeep(config)
    newConfig.general.statePicked = stateData
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    setScaleAndTranslate('reset')
  }, [statePicked])

  // TODO: same as city list projection?
  const projection = geoAlbersUsaTerritories()
    .translate([SVG_WIDTH / 2, SVG_HEIGHT / 2])
    .scale(1)

  const _statePickedData = topoData?.states?.find(s => s.properties.name === statePicked)
  const newProjection = projection.fitExtent(
    [
      [SVG_PADDING, SVG_PADDING],
      [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
    ],
    _statePickedData
  )

  // Work for centering the state.
  let [x, y] = newProjection.translate()
  x = x - SVG_WIDTH / 2
  y = y - SVG_HEIGHT / 2

  const path: GeoPath = geoPath().projection(projection)
  const featureCenter = path.centroid(_statePickedData)
  const stateCenter = newProjection.invert(featureCenter)

  const switchState = () => {
    dispatch({ type: 'SET_STATE_TO_SHOW', payload: _statePickedData })
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
    statePicked,
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
