import { useEffect, useId, useState } from 'react'
import { feature } from 'topojson-client'
import { Group } from '@visx/group'

/**
 * This is the starting structure for adding custom geoJSON shape layers to a projection.
 * The expectation should be that geoJSON is saved somewhere externally.
 * If a user needs help creating a shape direct them to https://www.google.com/maps/about/mymaps
 * Export the shape layer as a kml file and import into mapshaper.org
 * Clean and edit the shape as needed and export the new layer as geoJSON
 * Finnally save the geoJSON somewhere external.
 */
export default function useMapLayers(config, pathGenerator) {

  // layers - arrays of geoJSON, use mapShaper to edit shape data/colors for now...
  // let mapLayers = []
  const [fetchedTopoJSON, setFetchedTopoJSON] = useState([])
  const [layers, setLayers] = useState([])
  const geoId = useId()

  useEffect(() => {
    fetchGeoJSONLayers()
  }, []) //eslint-disable-line

  useEffect(() => {
    fetchGeoJSONLayers()
  }, [config.map.layers]) //eslint-disable-line

  const fetchGeoJSONLayers = async () => {
    let geos = await getMapGeoJSONLayers()
    setFetchedTopoJSON(geos)
  }

  useEffect(() => {
    generateCustomLayers()
  }, [fetchedTopoJSON]) //eslint-disable-line

  // future loop over objects..
  const getMapGeoJSONLayers = async () => {
    let GeoJSONObjects = []
    if (!config.map.layers) return;

    for (const mapLayer of config.map.layers) {
      let newLayerItem = await fetch(mapLayer.url).then(res => res.json()).catch(e => console.warn('error with newLayer item'))
      if (!newLayerItem) newLayerItem = [];
      GeoJSONObjects.push(newLayerItem)
    }

    return GeoJSONObjects
  }

  const generateCustomLayers = () => {


    if (fetchedTopoJSON.length === 0 || !fetchedTopoJSON) return false;
    let tempArr = []

    // loop on each file.
    fetchedTopoJSON?.map((layer, index) => {
      if (layer.length === 0) return null

      let layerData = feature(layer, layer.objects.cove).features

      // console.log(layerData[0].properties.stro)

      // now loop on each feature
      layerData.forEach(item => {

        let layerClasses = [
          `custom-map-layer`,
          `custom-map-layer--${item.properties.name.replace(' ', '-')}`,
        ]

        tempArr.push(
          <Group className={layerClasses.join(' ')} key={`customMapLayer--${index}`} >
            <path
              d={pathGenerator(item)}
              fill={item.properties.fill}
              fillOpacity={item.properties['fill-opacity']}
              key={geoId} data-id={geoId}
              stroke={item.properties.stroke}
              stroke-width={item.properties['stroke-width']}
            />
          </Group>
        )
      })

    })
    setLayers(tempArr)
  }

  return { layers }
}
