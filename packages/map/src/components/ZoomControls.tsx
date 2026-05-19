import React, { useContext } from 'react'
import ConfigContext from '../context'
import { type MapConfig } from '../types/MapConfig'
import { MapContext } from '../types/MapContext'
import './zoomControls.styles.css'

type ZoomControlsProps = {
  handleZoomIn: (coordinates: [Number, Number]) => void
  handleZoomOut: (coordinates: [Number, Number]) => void
  handleZoomReset: (setRuntimeData: Function) => void
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ handleZoomIn, handleZoomOut, handleZoomReset }) => {
  const { config, setRuntimeData, position } = useContext<MapContext>(ConfigContext)
  if (!config.general.allowMapZoom) return

  const isUsGeocodeMap = config.general.type === 'us-geocode'
  const shouldShowUsGeocodeReset = isUsGeocodeMap && position.zoom > 1
  const shouldShowBottomReset = config.general.geoType === 'single-state' || config.general.type === 'bubble'

  if (!isUsGeocodeMap) {
    return (
      <div className='zoom-controls' data-html2canvas-ignore='true'>
        <button onClick={() => handleZoomIn(position)} aria-label='Zoom In'>
          <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
            <line x1='12' y1='5' x2='12' y2='19' />
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
        </button>
        <button onClick={() => handleZoomOut(position)} aria-label='Zoom Out'>
          <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
        </button>
        {shouldShowBottomReset && (
          <button onClick={() => handleZoomReset(setRuntimeData)} className='reset' aria-label='Reset Zoom'>
            Reset Zoom
          </button>
        )}
      </div>
    )
  }

  return (
    <>
      <div className='zoom-controls' data-html2canvas-ignore='true'>
        <button onClick={() => handleZoomIn(position)} aria-label='Zoom In'>
          <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
            <line x1='12' y1='5' x2='12' y2='19' />
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
        </button>
        <button onClick={() => handleZoomOut(position)} aria-label='Zoom Out'>
          <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
        </button>
      </div>

      {shouldShowUsGeocodeReset && (
        <div className='zoom-controls zoom-controls--top-right' data-html2canvas-ignore='true'>
          <button onClick={() => handleZoomReset(setRuntimeData)} className='reset' aria-label='Reset Zoom'>
            Reset Zoom
          </button>
        </div>
      )}
    </>
  )
}

export default ZoomControls
