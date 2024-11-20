import React, { useContext, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerCluster from './MarkerCluster'
import ConfigContext from '../../../context'
import './leaflet.styles.css'

const LeafletMap = () => {
  const [mapCenter, setMapCenter] = useState([33.749, -84.388])
  const { state } = useContext(ConfigContext)

  const tileLayerUrl = {
    osm: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    positron: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    darkMatter: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    toner: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
    watercolor: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
    opentopomap: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    satellite:
      'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN',
    terrain: 'https://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
    outdoors: 'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=YOUR_THUNDERFOREST_API_KEY',
    transport: 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=YOUR_THUNDERFOREST_API_KEY',
    landscape: 'https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=YOUR_THUNDERFOREST_API_KEY',
    esriWorldImagery: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    esriWorldTopoMap: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    hikeBike: 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png'
  }

  return (
    <div>
      <MapContainer center={mapCenter} zoom={4} style={{ height: '500px', width: '100%' }}>
        <TileLayer url={tileLayerUrl[state?.leaflet?.theme]} />
        <MarkerCluster />
      </MapContainer>
    </div>
  )
}

export default LeafletMap
