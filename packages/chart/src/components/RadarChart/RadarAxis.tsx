import React, { useContext, useMemo } from 'react'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import { genPoints, getTextAnchor } from './helpers'
import ConfigContext from '../../ConfigContext'

type RadarAxisProps = {
  radius: number
  strokeColor?: string
  strokeWidth?: number
  labelColor?: string
  fontSize?: number
}

/**
 * RadarAxis renders the axis lines from center to edge
 * and the axis labels at each vertex
 */
const RadarAxis: React.FC<RadarAxisProps> = ({
  radius,
  strokeColor = '#999999',
  strokeWidth = 1,
  labelColor = '#333333',
  fontSize = 12
}) => {
  const { config } = useContext(ConfigContext)

  const radarConfig = config.radar
  const labelOffset = radarConfig?.axisLabelOffset ?? 15

  const labels = useMemo(() => {
    if (!config.series || config.series.length === 0) return []
    return config.series.map(s => s.dataKey).filter(Boolean)
  }, [config.series])
  const axisCount = labels.length
  const axisPoints = genPoints(axisCount, radius)
  const labelPoints = genPoints(axisCount, radius + labelOffset)

  return (
    <Group className='radar-axis'>
      {/* Axis lines from center to edge */}
      {axisPoints.map((point, i) => (
        <Line
          key={`axis-line-${i}`}
          from={{ x: 0, y: 0 }}
          to={point}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeOpacity={0.7}
        />
      ))}

      {/* Axis labels */}
      {labelPoints.map((point, i) => {
        const angle = (i * 2 * Math.PI) / axisCount - Math.PI / 2
        const textAnchor = getTextAnchor(angle)

        return (
          <Text
            key={`axis-label-${i}`}
            x={point.x}
            y={point.y}
            textAnchor={textAnchor}
            verticalAnchor='middle'
            fill={labelColor}
            fontSize={fontSize}
            fontFamily='sans-serif'
          >
            {labels[i]}
          </Text>
        )
      })}
    </Group>
  )
}

export default RadarAxis
