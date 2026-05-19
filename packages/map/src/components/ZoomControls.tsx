import React, { useContext } from 'react'
import ConfigContext from '../context'
import { MapContext } from '../types/MapContext'
import './zoomControls.styles.css'

type ZoomControlsProps = {
  handleZoomIn?: (coordinates: [Number, Number]) => void
  handleZoomOut?: (coordinates: [Number, Number]) => void
  handleZoomReset?: (setRuntimeData: Function) => void
  /** When true, only renders the Clear Selection button (no zoom controls) */
  clearSelectionOnly?: boolean
}

const ZoomControls: React.FC<ZoomControlsProps> = ({
  handleZoomIn,
  handleZoomOut,
  handleZoomReset,
  clearSelectionOnly = false
}) => {
  const { config, setRuntimeData, position, clearSharedFilter, hasActiveSharedFilter } =
    useContext<MapContext>(ConfigContext)

  const handleClearSelection = () => {
    if (clearSharedFilter && config.uid) {
      clearSharedFilter(config.uid)
    }
  }

  // Respect the showClearSelectionButton editor setting (defaults to true)
  const showClearSelection =
    config.general.showClearSelectionButton !== false && hasActiveSharedFilter && clearSharedFilter

  // When clearSelectionOnly mode, only show clear selection button (no zoom needed)
  if (clearSelectionOnly) {
    if (!showClearSelection) return null
    return (
      <div className='zoom-controls zoom-controls--top-right' data-html2canvas-ignore='true'>
        <button onClick={handleClearSelection} className='reset' aria-label='Clear Selection'>
          Clear Selection
        </button>
      </div>
    )
  }

  // Below this point, zoom handlers are required
  if (!handleZoomIn || !handleZoomOut) return null

  if (!config.general.allowMapZoom) {
    if (!showClearSelection) return null
    return (
      <div className='zoom-controls zoom-controls--top-right' data-html2canvas-ignore='true'>
        <button onClick={handleClearSelection} className='reset' aria-label='Clear Selection'>
          Clear Selection
        </button>
      </div>
    )
  }

  const isUsGeocodeMap = config.general.type === 'us-geocode'
  const shouldShowUsGeocodeReset = isUsGeocodeMap && position.zoom > 1
  const shouldShowBottomReset = config.general.geoType === 'single-state' || config.general.type === 'bubble'

  if (!isUsGeocodeMap) {
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
          {shouldShowBottomReset && handleZoomReset && (
            <button onClick={() => handleZoomReset(setRuntimeData)} className='reset' aria-label='Reset Zoom'>
              Reset Zoom
            </button>
          )}
        </div>
        {showClearSelection && (
          <div className='zoom-controls zoom-controls--top-right' data-html2canvas-ignore='true'>
            <button onClick={handleClearSelection} className='reset' aria-label='Clear Selection'>
              Clear Selection
            </button>
          </div>
        )}
      </>
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

      <div className='zoom-controls zoom-controls--top-right' data-html2canvas-ignore='true'>
        {shouldShowUsGeocodeReset && handleZoomReset && (
          <button onClick={() => handleZoomReset(setRuntimeData)} className='reset' aria-label='Reset Zoom'>
            Reset Zoom
          </button>
        )}
        {showClearSelection && (
          <button onClick={handleClearSelection} className='reset' aria-label='Clear Selection'>
            Clear Selection
          </button>
        )}
      </div>
    </>
  )
}

export default ZoomControls
