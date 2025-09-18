import React from 'react'

interface PatternInfo {
  pattern: string
  patternId: string
  size?: string
}

interface LegendShapeProps {
  fill: string
  borderColor?: string
  display?: 'inline-block' | 'block' | 'inline'
  shape?: 'circle' | 'square'
  patternInfo?: PatternInfo
}

const LegendShape: React.FC<LegendShapeProps> = props => {
  const { fill, borderColor, display = 'inline-block', shape = 'circle', patternInfo } = props
  const dimensions = { width: '1em', height: '1em' }
  const isCircleOrSquare = ['circle', 'square'].includes(shape)

  // If pattern is provided, use SVG with pattern fill
  if (patternInfo) {
    const sizes = {
      small: '8',
      medium: '10',
      large: '12'
    }
    const patternSize = sizes[patternInfo.size as keyof typeof sizes] || '10'

    return (
      <span className={`legend-item ${isCircleOrSquare ? 'me-2' : ''}`} style={{ display, verticalAlign: 'middle', width: dimensions.width, height: dimensions.height }}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" className="legend-shape-svg">
          {/* Pattern definitions */}
          <defs>
            {patternInfo.pattern === 'waves' && (
              <pattern
                id={patternInfo.patternId}
                patternUnits="userSpaceOnUse"
                width={patternSize}
                height={patternSize}
              >
                <path
                  d={`M0,${parseInt(patternSize) / 2} Q${parseInt(patternSize) / 4},0 ${parseInt(patternSize) / 2},${parseInt(patternSize) / 2} T${patternSize},${parseInt(patternSize) / 2}`}
                  stroke="#000"
                  strokeWidth="0.25"
                  fill="none"
                />
              </pattern>
            )}
            {patternInfo.pattern === 'circles' && (
              <pattern
                id={patternInfo.patternId}
                patternUnits="userSpaceOnUse"
                width={patternSize}
                height={patternSize}
              >
                <circle
                  cx={parseInt(patternSize) / 2}
                  cy={parseInt(patternSize) / 2}
                  r="1.25"
                  fill="#000"
                />
              </pattern>
            )}
            {patternInfo.pattern === 'lines' && (
              <pattern
                id={patternInfo.patternId}
                patternUnits="userSpaceOnUse"
                width={patternSize}
                height={patternSize}
              >
                <line
                  x1="0"
                  y1="0"
                  x2={patternSize}
                  y2={patternSize}
                  stroke="#000"
                  strokeWidth="0.75"
                />
              </pattern>
            )}
          </defs>

          {shape === 'circle' ? (
            <circle
              fill={fill}
              r={7.5}
              cx={8}
              cy={8}
              stroke={borderColor || 'rgba(0,0,0,.3)'}
              strokeWidth={1}
            />
          ) : (
            <rect
              fill={fill}
              width={15}
              height={15}
              x={0.5}
              y={0.5}
              stroke={borderColor || 'rgba(0,0,0,.3)'}
              strokeWidth={1}
            />
          )}
          {shape === 'circle' ? (
            <circle
              fill={`url(#${patternInfo.patternId})`}
              r={7.5}
              cx={8}
              cy={8}
              stroke='none'
            />
          ) : (
            <rect
              fill={`url(#${patternInfo.patternId})`}
              width={15}
              height={15}
              x={0.5}
              y={0.5}
              stroke='none'
            />
          )}
        </svg>
      </span>
    )
  }

  // Default solid color shape
  const styles = {
    borderRadius: shape === 'circle' ? '50%' : '0px',
    display: display,
    height: dimensions.height,
    width: dimensions.width,
    border: borderColor ? `${borderColor} 1px solid` : 'rgba(0,0,0,.3) 1px solid',
    backgroundColor: fill,
  }

  return <span className={`legend-item ${isCircleOrSquare ? 'me-2' : ''}`} style={styles} />
}

export default LegendShape
