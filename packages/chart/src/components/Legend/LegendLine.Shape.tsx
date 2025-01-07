import React from 'react'
import { handleLineType } from '../../helpers/handleLineType'
import { GlyphDiamond, GlyphCircle, GlyphSquare, GlyphTriangle } from '@visx/glyph'
import { Line } from '@visx/shape'

const ShapeComponent = ({ fill, size, left, top, display, index }) => {
  const glyphs = {
    0: GlyphCircle,
    1: GlyphSquare,
    2: GlyphTriangle,
    3: GlyphDiamond,
    4: GlyphTriangle
  }

  const Shape = glyphs[index]
  if (!display) {
    return <></>
  }
  // Handle inverted triangle for index 4
  const isFlipped = index === 4
  const transform = `translate(${left}, ${top}) ${isFlipped ? 'rotate(180)' : ''}`

  return (
    <g transform={transform}>
      <Shape fill={fill} size={size} />
    </g>
  )
}

const LegendLineShape = props => {
  const { config, label, index } = props

  return (
    <svg width={30} height={10} style={{ overflow: 'visible' }} className='me-2'>
      <Line
        from={{ x: 0, y: 3 }}
        to={{ x: 30, y: 3 }}
        stroke={label.value}
        strokeWidth={2}
        strokeDasharray={handleLineType(config.series[index]?.type ? config.series[index]?.type : '')}
      />

      <ShapeComponent
        index={index}
        display={config.legend.hasShape && index !== 5}
        left={15}
        top={3}
        fill={label.value}
        size={55}
      />
    </svg>
  )
}

export default LegendLineShape
