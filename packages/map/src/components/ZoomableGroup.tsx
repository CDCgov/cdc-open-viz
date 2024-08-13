import React from 'react'
import useZoomPan from '../hooks/useZoomPan'

const ZoomableGroup = ({ center = [0, 0], zoom = 1, minZoom = 1, maxZoom = 8, translateExtent, filterZoomEvent, onMoveStart, onMove, onMoveEnd, className, projection, width, height, ...restProps }) => {
  const { mapRef, transformString } = useZoomPan({
    center,
    filterZoomEvent,
    onMoveStart,
    onMove,
    onMoveEnd,
    scaleExtent: [minZoom, maxZoom],
    translateExtent,
    zoom,
    width,
    height,
    projection
  })

  return (
    <g ref={mapRef}>
      <rect width={width} height={height} fill='transparent' />
      <g transform={transformString} {...restProps} />
    </g>
  )
}

export default ZoomableGroup
