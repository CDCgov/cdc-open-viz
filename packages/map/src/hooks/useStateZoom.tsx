import { useContext, useEffect, useState } from 'react'
import ConfigContext from '../context'
import { geoAlbersUsaTerritories, GeoProjection } from 'd3-composite-projections'
import { MapContext } from '../types/MapContext'
import { geoPath, GeoPath } from 'd3-geo'
import _ from 'lodash'
import { getFilterControllingStatePicked } from './../components/UsaMap/helpers/map'
import { supportedStatesFipsCodes } from './../data/supported-geos'

interface StateData {
  geometry: { type: 'MultiPolygon'; coordinates: number[][][][] }
  // FIPS ID of US state
  id: string
  // name of US state
  properties: { name: string }
  type: 'Feature'
}

interface Position {
  zoom: number
  coordinates: [number, number]
}

const useSetScaleAndTranslate = (topoData: { states: StateData[] }) => {
  const { setTranslate, setScale, setStateToShow, setPosition, state, setState, runtimeFilters } =
    useContext<MapContext>(ConfigContext)
  const statePicked = getFilterControllingStatePicked(state, runtimeFilters)

  useEffect(() => {
    const fipsCode = Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === statePicked)
    const stateName = statePicked
    const stateData = { fipsCode, stateName }

    setState({
      ...state,
      general: {
        ...state.general,
        statePicked: stateData
      }
    })
  }, [statePicked])

  // SVG ITEMS
  const WIDTH = 880
  const HEIGHT = 500
  const PADDING = 50
  const [projection, setProjection] = useState(() =>
    geoAlbersUsaTerritories()
      .translate([WIDTH / 2, HEIGHT / 2])
      .scale(1)
  )

  /*
    NORMALIZATION_FACTOR NOTES:
    This is used during state switching,
    I'm not sure why the value is 1070 but it does appear to work during the switching.
    During zoom it does not work.
  */
  const NORMALIZATION_FACTOR = 1070
  const _statePickedData = topoData?.states?.find(s => s.properties.name === statePicked)
  const newProjection = projection.fitExtent(
    [
      [PADDING, PADDING],
      [WIDTH - PADDING, HEIGHT - PADDING]
    ],
    _statePickedData
  )

  // Work for centering the state.
  const newScale = newProjection.scale()
  const normalizedScale = newScale / NORMALIZATION_FACTOR
  let [x, y] = newProjection.translate()
  x = x - WIDTH / 2
  y = y - HEIGHT / 2

  const path: GeoPath = geoPath().projection(projection)
  const featureCenter = path.centroid(_statePickedData)
  const stateCenter = newProjection.invert(featureCenter)

  const switchState = () => {
    setStateToShow(_statePickedData)
    setScaleAndTranslate('reset')
  }

  const setScaleAndTranslate = (zoomFunction: string = '') => {
    console.log('zoomFunction', zoomFunction)

    setPosition((pos: Position) => {
      let newZoom = pos.zoom
      let newCoordinates = pos.coordinates
      if (zoomFunction === 'zoomIn' && pos.zoom < 4) {
        console.log('zooming in', pos.zoom)
        newZoom = pos.zoom * 1.5
        newCoordinates = pos.coordinates[0] !== 0 && pos.coordinates[1] !== 0 ? pos.coordinates : stateCenter
      } else if (zoomFunction === 'zoomOut' && pos.zoom > 1) {
        console.log('zooming out', pos.zoom)
        newZoom = pos.zoom / 1.5
        newCoordinates = pos.coordinates[0] !== 0 && pos.coordinates[1] !== 0 ? pos.coordinates : stateCenter
      } else if (zoomFunction === 'reset') {
        console.log('resetting zoom')
        newZoom = 1
        newCoordinates = stateCenter
      }
      return {
        zoom: newZoom,
        coordinates: newCoordinates
      }
    })

    if (zoomFunction === 'reset') {
      setTranslate([0, 0]) // needed for state switcher
      setScale(1) // needed for state switcher
    }
  }

  const handleZoomIn = () => {
    setScaleAndTranslate('zoomIn')
  }

  const handleZoomOut = () => {
    setScaleAndTranslate('zoomOut')
  }

  const handleMoveEnd = position => {
    setPosition(position)
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
