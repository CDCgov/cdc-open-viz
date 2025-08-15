import React from 'react'
import Modal from './Modal'
import UsaMap from './UsaMap'
import WorldMap from './WorldMap'
import GoogleMap from './GoogleMap'
import { MapConfig } from '../types/MapConfig'
import { LOGO_MAX_WIDTH } from '../helpers/constants'

interface MapContainerProps {
  config: MapConfig
  modal: any
  currentViewport: string
  geoType: string
  general: any
  logo: string
  mapSvgRef: React.RefObject<HTMLElement>
}

const MapContainer: React.FC<MapContainerProps> = ({
  config,
  modal,
  currentViewport,
  geoType,
  general,
  logo,
  mapSvgRef
}) => {
  return (
    <section className='outline-none geography-container w-100 position-relative' ref={mapSvgRef} tabIndex={0}>
      {currentViewport && (
        <>
          {modal && <Modal />}
          {'single-state' === geoType && <UsaMap.SingleState />}
          {'us' === geoType && 'us-geocode' !== config.general.type && <UsaMap.State />}
          {'us-region' === geoType && <UsaMap.Region />}
          {'us-county' === geoType && <UsaMap.County />}
          {'world' === geoType && <WorldMap />}
          {'google-map' === geoType && <GoogleMap />}
          {
            /* logo is handled in UsaMap.State when applicable */
            // prettier-ignore
            'data' === general.type && logo && ('us' !== geoType || 'us-geocode' === general.type) && (
              <img src={logo} alt='' className='map-logo' style={{ maxWidth: LOGO_MAX_WIDTH }} />
            )
          }
        </>
      )}
    </section>
  )
}

export default MapContainer
