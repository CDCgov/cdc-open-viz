import { useContext, useEffect } from 'react'
import ConfigContext from '../context'
import { geoAlbersUsaTerritories, GeoProjection } from 'd3-composite-projections'
import { MapContext } from '../types/MapContext'
import { geoPath, GeoPath } from 'd3-geo'
import _ from 'lodash'

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

const useSetScaleAndTranslate = (statePicked: string, topoData: { states: StateData[] }) => {
  const { setTranslate, setScale, setStateToShow, setPosition, state } = useContext<MapContext>(ConfigContext)

  // If the topodata or state has changed, reset the scale and translate
  // to focus on the state
  useEffect(() => {
    switchState()
  }, [state.general.statePicked, topoData])

  // SVG ITEMS
  const WIDTH = 880
  const HEIGHT = 500
  const PADDING = 50

  /*
    NORMALIZATION_FACTOR NOTES:
    This is used during state switching,
    I'm not sure why the value is 1070 but it does appear to work during the switching.
    During zoom it does not work.
  */
  const NORMALIZATION_FACTOR = 1070
  const _statePickedData = topoData?.states?.find(s => s.properties.name === statePicked)
  const projection: GeoProjection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
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
    setTranslate([x, y]) // needed for state switcher
    setScale(normalizedScale) // needed for state switcher
    setStateToShow(_statePickedData)
  }

  const setScaleAndTranslate = (zoomFunction: string = '') => {
    console.log('zoomFunction', zoomFunction)

    setPosition((pos: Position) => {
      let newZoom = pos.zoom
      let newCoordinates = pos.coordinates
      if (zoomFunction === 'zoomIn' && pos.zoom < 4) {
        newZoom = pos.zoom * 1.5
        newCoordinates = pos.coordinates[0] !== 0 && pos.coordinates[1] !== 0 ? pos.coordinates : stateCenter
      } else if (zoomFunction === 'zoomOut' && pos.zoom > 1) {
        newZoom = pos.zoom / 1.5
        newCoordinates = pos.coordinates[0] !== 0 && pos.coordinates[1] !== 0 ? pos.coordinates : stateCenter
      } else if (zoomFunction === 'reset') {
        newZoom = 1
        newCoordinates = stateCenter
      }
      return {
        zoom: newZoom,
        coordinates: newCoordinates
      }
    })
    setScale(normalizedScale)
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

  return { setScaleAndTranslate, switchState, handleZoomIn, handleZoomOut, handleMoveEnd, handleReset }
}

export default useSetScaleAndTranslate
