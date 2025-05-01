import React, { useContext, useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import ConfigContext from '../../../context'

// center on USA
const center = {
  lat: 37.09024,
  lng: -95.712891
}

type GoogleMapComponentProps = {
  apiKey?: string
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ apiKey = '' }) => {
  const mapRef = useRef(null)
  const { config: state } = useContext(ConfigContext)

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly'
    })

    loader
      .load()
      .then(() => {
        if (mapRef.current) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: 4
          })

          const markers = state.data.map(d => {
            const markerContent = document.createElement('div')
            markerContent.style.backgroundColor = 'orange' // Set the background color
            markerContent.style.width = '25px'
            markerContent.style.height = '25px'
            markerContent.style.borderRadius = '50%'
            markerContent.style.display = 'flex'
            markerContent.style.alignItems = 'center'
            markerContent.style.justifyContent = 'center'
            markerContent.style.color = 'white'
            markerContent.innerText = d[state.columns.geo.name]

            const marker = new google.maps.Marker({
              position: { lat: Number(d[state.columns.latitude.name]), lng: Number(d[state.columns.longitude.name]) },
              title: d[state.columns.geo.name],
              map: map
            })

            return marker
          })

          new MarkerClusterer({ markers, map })
        }
      })
      .catch(e => {
        console.error('Error loading Google Maps API:', e)
      })
  }, [apiKey, state])

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />
}

export default GoogleMapComponent
