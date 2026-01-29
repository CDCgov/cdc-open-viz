import React from 'react'
import { Group } from '@visx/group'
import { genPoints, pointsToString } from './helpers'

type RadarGridProps = {
  levels: number
  radius: number
  axisCount: number
  gridStyle: 'circles' | 'polygons'
  showGrid: boolean
  strokeColor?: string
  strokeWidth?: number
}

/**
 * RadarGrid renders concentric rings (either circles or polygons)
 * for the radar chart background grid
 */
const RadarGrid: React.FC<RadarGridProps> = ({
  levels,
  radius,
  axisCount,
  gridStyle,
  showGrid,
  strokeColor = '#e0e0e0',
  strokeWidth = 1
}) => {
  if (!showGrid) return null

  return (
    <Group className="radar-grid">
      {[...new Array(levels)].map((_, i) => {
        const levelRadius = ((i + 1) * radius) / levels
        const key = `grid-level-${i}`

        if (gridStyle === 'circles') {
          return (
            <circle
              key={key}
              cx={0}
              cy={0}
              r={levelRadius}
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeOpacity={0.5}
            />
          )
        }

        // Polygon grid
        const points = genPoints(axisCount, levelRadius)
        return (
          <polygon
            key={key}
            points={pointsToString(points)}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeOpacity={0.5}
          />
        )
      })}
    </Group>
  )
}

export default RadarGrid
