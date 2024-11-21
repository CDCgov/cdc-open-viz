import React, { useContext, useState, useEffect } from 'react'
import { MapContainer, TileLayer, AttributionControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerCluster from './MarkerCluster'
import ConfigContext from '../../../context'
import { layerSettings } from './layerSettings'
import './leaflet.styles.css'

const LeafletMap = () => {
  const { state } = useContext(ConfigContext)
  const currentLayerSettings = layerSettings.find(l => l.key === state?.leaflet?.theme)
  const [mapCenter, setMapCenter] = useState([33.749, -84.388])
  const [attribution, setAttribution] = useState(`${currentLayerSettings.attribution} & Leaflet`)

  useEffect(() => {
    const newAttribution = `${currentLayerSettings.attribution} & Leaflet`
    setAttribution(newAttribution)
  }, [state.leaflet.theme])

  return (
    <>
      <MapContainer center={mapCenter} zoom={4} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url={currentLayerSettings.url}
          // attribution={false}
          // attribution={attribution}
        />
        <AttributionControl prefix={false} />
        <MarkerCluster />
      </MapContainer>
      <p className='attribution mt-2 float-right'>{`${currentLayerSettings.attribution}, Leaflet`}</p>
    </>
  )
}

export default LeafletMap
