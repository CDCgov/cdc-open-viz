import { useEffect, useId, useState, type MouseEvent, type ChangeEvent, useContext } from 'react'
import { feature } from 'topojson-client'
import { Group } from '@visx/group'
import { MapConfig } from '../types/MapConfig'
import _ from 'lodash'
import { MapDispatchContext } from '../context'

/**
 * This is the starting structure for adding custom geoJSON shape layers to a projection.
 * The expectation should be that geoJSON is saved somewhere externally.
 *
 * todo: save map layers to local state and add debounce fn to improve performance
 * todo: usaMap is using objects.cove which needs to be converted to a dynamic value
 *
 * User Interface Expectations:
 * 1) Direct users  to https://www.google.com/maps/about/mymaps to create a map
 * 2) Export the shape layer as a kml file and import into mapshaper.org
 * 3) Clean (ie. mapshaper -clean) and edit the shape as needed and export the new layer as geoJSON
 * 4) Save the geoJSON somewhere external.
 */
export default function useMapLayers(config: MapConfig, pathGenerator: Function, tooltipId: string) {
  const [fetchedTopoJSON, setFetchedTopoJSON] = useState([])
  const geoId = useId()
  const dispatch = useContext(MapDispatchContext)

  // small reminder that we export the feature and the path as options
  const [pathArray, setPathArray] = useState([])
  const [featureArray, setFeatureArray] = useState([])

  useEffect(() => {
    fetchGeoJSONLayers()
  }, [config.map.layers])

  useEffect(() => {
    if (pathGenerator) {
      generateCustomLayers()
    }
  }, [fetchedTopoJSON])

  const fetchGeoJSONLayers = async () => {
    try {
      const geos = await getMapTopoJSONLayers()
      setFetchedTopoJSON(geos)
    } catch (e) {
      console.error('Error fetching GeoJSON layers:', e)
    }
  }

  const handleRemoveLayer = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault()
    const newState = _.cloneDeep(config)
    const layers = newState.map.layers.filter((_layer, i) => i !== index)
    newState.map.layers = layers
    dispatch({ type: 'SET_STATE', payload: newState })
  }

  const handleAddLayer = (e: Event) => {
    e.preventDefault()
    const placeHolderLayer = {
      name: 'New Custom Layer',
      url: ''
    }
    const newState = _.cloneDeep(config)
    newState.map.layers.unshift(placeHolderLayer)
    dispatch({ type: 'SET_STATE', payload: newState })
  }

  const handleMapLayer = (e: ChangeEvent<HTMLInputElement>, index: number, layerKey: string) => {
    e.preventDefault()

    let layerValue = e.target.value

    if (layerKey === 'fillOpacity') {
      layerValue = layerValue / 100
    }

    let newLayers = _.cloneDeep(config.map.layers)
    _.set(newLayers, `[${index}][${layerKey}]`, layerValue)

    dispatch({ type: 'SET_STATE', payload: { ...config, map: { ...config.map, layers: newLayers } } })
  }

  /**
   * Fetches TopoJSON urls found in config.map.layers and stores it locally.
   * @returns
   */
  const getMapTopoJSONLayers = async () => {
    let TopoJSONObjects = []
    if (!config.map.layers) return

    for (const mapLayer of config.map.layers) {
      let newLayerItem = await fetch(mapLayer.url)
        .then(res => res.json())
        .catch(e => console.warn('error with newLayer item', e)) // eslint-disable-line
      if (!newLayerItem) newLayerItem = []
      TopoJSONObjects.push(newLayerItem)
    }

    return TopoJSONObjects
  }

  /**
   * Updates the custom map layers based on the topojson data
   */
  const generateCustomLayers = (): void => {
    if (fetchedTopoJSON.length === 0 || !fetchedTopoJSON) return
    let tempArr = []
    let tempFeatureArray = []

    // loop on each file.
    fetchedTopoJSON?.map((layer, index) => {
      if (layer.length === 0) return null
      let layerObjects = layer.objects[config.map.layers[index].namespace]
      if (!layerObjects) return null

      let layerData = feature(layer, layerObjects).features

      // now loop on each feature
      layerData.forEach(item => {
        let layerClasses = [`custom-map-layer`, `custom-map-layer--${item.properties.name.replace(' ', '-')}`]

        // feature array for county maps
        tempFeatureArray.push(item)
        tempArr.push(
          <Group
            className={layerClasses.join(' ')}
            key={`customMapLayer-${item.properties.name.replace(' ', '-')}-${index}`}
          >
            {/* prettier-ignore */}
            <path
              d={pathGenerator(item)}
              fill={config.map.layers[index].fill ? config.map.layers[index].fill : item.properties.fill ? item.properties.fill : 'transparent'}
              fillOpacity={config.map.layers[index].fillOpacity ? config.map.layers[index].fillOpacity : item.properties['fill-opacity'] ? item.properties['fill-opacity'] : '1'}
              key={geoId} data-id={geoId}
              stroke={config.map.layers[index].stroke ? config.map.layers[index].stroke : item.properties.stroke ? item.properties.stroke : 'transparent'}
              strokeWidth={config.map.layers[index].strokeWidth ? config.map.layers[index].strokeWidth : item.properties['stroke-width']}
              data-tooltip-id={`tooltip__${tooltipId}`}
              data-tooltip-html={config.map.layers[index].tooltip ? config.map.layers[index].tooltip : ''}
            />
          </Group>
        )
      })
    })

    // export options for either the feature or the path
    setPathArray(tempArr)
    setFeatureArray(tempFeatureArray)
  }

  const MapLayerHandlers = () => null
  MapLayerHandlers.handleRemoveLayer = handleRemoveLayer
  MapLayerHandlers.handleAddLayer = handleAddLayer
  MapLayerHandlers.handleMapLayer = handleMapLayer

  return { pathArray, featureArray, MapLayerHandlers }
}
