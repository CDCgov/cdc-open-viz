import { useContext, useEffect } from 'react'

import L from 'leaflet'
import { useMap } from 'react-leaflet'
import 'leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import ConfigContext from '../../../context'

export const customMarker = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
})

const createCustomMarkerIcon = color => {
  return L.divIcon({
    html: `<div style="background-color: ${color}; width: 25px; height: 25px; border-radius: 50%;"></div>`,
    className: 'custom-marker-icon',
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  })
}

const MarkerCluster = () => {
  const { state, applyLegendToRow } = useContext(ConfigContext)
  const map = useMap()

  useEffect(() => {
    const mcg = L.markerClusterGroup()
    mcg.clearLayers()
    state.data.forEach((item, itemIndex) => {
      const color = applyLegendToRow(item)[0] || '#e6e6e6'
      const customMarkerIcon = createCustomMarkerIcon(color)
      L.marker(new L.LatLng(item?.[state.columns.latitude.name], item?.[state.columns.longitude.name]), {
        icon: customMarkerIcon
      })
        .addTo(mcg)
        .bindPopup(`Location: ${item[state.columns.geo.name]}`)
    })

    // optionally center the map around the markers
    // map.fitBounds(mcg.getBounds());

    // add the marker cluster group to the map
    map.addLayer(mcg)

    // Cleanup function to remove the layer when the component unmounts or markers change
    return () => {
      map.removeLayer(mcg)
    }
  }, [state.data, state.visual])

  return null
}

export default MarkerCluster
