import React, { useContext } from 'react'
import ConfigContext from '../context'
import { type MapConfig } from '../types/MapConfig'
import { MapContext } from '../types/MapContext'
import './ZoomControls.styles.css'

type ZoomControlsProps = {
  handleZoomIn: (coordinates: [Number, Number]) => void
  handleZoomOut: (coordinates: [Number, Number]) => void
  handleReset: (state: MapConfig, setState: Function, setRuntimeData: Function) => void
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ handleZoomIn, handleZoomOut, handleReset }) => {
  const { state, setState, setRuntimeData, position } = useContext<MapContext>(ConfigContext)
  if (!state.general.allowMapZoom) return
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
      {state.general.type === 'bubble' && (
        <button
          onClick={() => handleReset(state, setState, setRuntimeData)}
          className='reset'
          aria-label='Reset Zoom and Map Filters'
        >
          Reset Filters
        </button>
      )}
      {(state.general.type === 'world-geocode' || state.general.geoType === 'single-state') && (
        <button onClick={() => handleReset(state, setState, setRuntimeData)} className='reset' aria-label='Reset Zoom'>
          Reset Zoom
        </button>
      )}
    </div>
  )
}

export default ZoomControls
