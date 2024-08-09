import React from 'react'
import useZoomPan from '../hooks/useZoomPan'

type ZoomableGroupProps = {
  center: [number, number]
  zoom: number
  minZoom: number
  maxZoom: number
  translateExtent: [[number, number], [number, number]]
  filterZoomEvent: (event: any) => boolean
  onMoveStart: (event: any) => void
  onMoveZoom: (event: any) => void
  onMoveEnd: (event: any) => void
  onMove: (event: any) => void
  width: number
  height: number
}

const ZoomableGroup: React.FC<ZoomableGroupProps> = ({
  center = [0, 0],
  zoom = 1,
  minZoom = 1,
  maxZoom = 8,
  translateExtent,
  filterZoomEvent,
  onMoveStart,
  onMove,
  onMoveEnd,
  className,
  projection,
  width,
  height,
  ...restProps
}) => {
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
