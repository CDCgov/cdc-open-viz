import React, { useState } from 'react'
import { Group } from '@visx/group'
import { genPolygonPoints, pointsToString } from './helpers'

type RadarPolygonProps = {
  values: number[]
  scale: (n: number) => number
  color: string
  fillOpacity: number
  strokeWidth: number
  showPoints: boolean
  pointRadius: number
  entityName: string
  isHighlighted: boolean
  shouldMute: boolean
  onMouseEnter?: (e: React.MouseEvent, data: { entityName: string; values: number[] }) => void
  onMouseLeave?: () => void
}

/**
 * RadarPolygon renders a single data polygon on the radar chart
 * with optional data points at vertices
 */
const RadarPolygon: React.FC<RadarPolygonProps> = ({
  values,
  scale,
  color,
  fillOpacity,
  strokeWidth,
  showPoints,
  pointRadius,
  entityName,
  isHighlighted,
  shouldMute,
  onMouseEnter,
  onMouseLeave
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const points = genPolygonPoints(values, scale)
  const polygonString = pointsToString(points)

  const opacity = shouldMute ? 0.2 : isHovered ? fillOpacity + 0.2 : fillOpacity
  const currentStrokeWidth = isHovered ? strokeWidth + 1 : strokeWidth

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovered(true)
    onMouseEnter?.(e, { entityName, values })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onMouseLeave?.()
  }

  return (
    <Group className={`radar-polygon radar-polygon-${entityName.replace(/\s+/g, '-')}`}>
      {/* Data polygon */}
      <polygon
        points={polygonString}
        fill={color}
        fillOpacity={opacity}
        stroke={color}
        strokeWidth={currentStrokeWidth}
        strokeOpacity={shouldMute ? 0.3 : 1}
        style={{ cursor: 'pointer', transition: 'opacity 0.2s ease' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Data points at vertices */}
      {showPoints &&
        points.map((point, i) => (
          <circle
            key={`point-${i}`}
            cx={point.x}
            cy={point.y}
            r={isHovered ? pointRadius + 1 : pointRadius}
            fill={color}
            stroke="#fff"
            strokeWidth={1}
            opacity={shouldMute ? 0.3 : 1}
            style={{ cursor: 'pointer', transition: 'r 0.2s ease' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
    </Group>
  )
}

export default RadarPolygon
