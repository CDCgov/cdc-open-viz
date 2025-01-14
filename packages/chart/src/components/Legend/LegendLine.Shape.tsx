import React from 'react'
import { handleLineType } from '../../helpers/handleLineType'
import { Line } from '@visx/shape'
import { GlyphDiamond, GlyphCircle, GlyphSquare, GlyphTriangle, GlyphCross } from '@visx/glyph'
import { Text } from '@visx/text'

// Define glyph shapes
const glyphs = {
  0: GlyphCircle,
  1: GlyphSquare,
  2: GlyphTriangle,
  3: GlyphDiamond,
  4: GlyphTriangle, // Reuse GlyphTriangle
  5: GlyphCross
}

const LegendLineShape = props => {
  const { config, label, index } = props
  const Shape = glyphs[index] || (() => <></>)
  const isReversedTriangle = index === 4
  const transform = `translate(${15}, ${3}) ${isReversedTriangle ? 'rotate(180)' : ''}`
  const indexOfPentagonShape = 6
  const maximumShapeAmount = config.visual.maximumShapeAmount

  return (
    <svg width={30} height={10} style={{ overflow: 'visible' }} className='me-2'>
      {/* Render line */}
      <Line
        from={{ x: 0, y: 3 }}
        to={{ x: 30, y: 3 }}
        stroke={label.value}
        strokeWidth={2}
        strokeDasharray={handleLineType(config.series[index]?.type || '')}
      />

      {index < maximumShapeAmount && (
        <g transform={transform}>
          {index === indexOfPentagonShape ? (
            <Text textAnchor='middle' verticalAnchor='middle' fill={label.value} fontSize={5}>
              &#x2B1F; {/* Render Filled Pentagon */}
            </Text>
          ) : (
            <Shape strokeWidth={0} fill={label.value} stroke={label.value} size={55} />
          )}
        </g>
      )}
    </svg>
  )
}

export default LegendLineShape
