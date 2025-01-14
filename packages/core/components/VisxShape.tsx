import React from 'react'
import { GlyphDiamond, GlyphCircle, GlyphSquare, GlyphTriangle, GlyphCross } from '@visx/glyph'
import { Text } from '@visx/text'

const glyphs = {
  0: GlyphCircle,
  1: GlyphSquare,
  2: GlyphTriangle,
  3: GlyphDiamond,
  4: GlyphTriangle,
  5: GlyphCross
}

interface VisxShapeProps {
  fill: string
  size: number
  left: number
  top: number
  display: boolean
  index: number
  stroke: string
  key: string | number
  strokeWidth?: number
}

const VisxShape: React.FC<VisxShapeProps> = ({
  fill,
  size,
  left,
  top,
  display,
  index,
  stroke,
  key,
  strokeWidth = 0
}) => {
  if (!display) {
    return <g></g>
  }

  const Shape = glyphs[index]
  const isFlipped = index === 4

  const transform = `translate(${left}, ${top}) ${isFlipped ? 'rotate(180)' : ''}`

  return (
    <g key={key} transform={transform}>
      {index === 6 ? (
        <Text textAnchor='start' fill={fill} dy={3.5} dx={-5} fontSize={size / 4}>
          &#x2B1F;
        </Text>
      ) : (
        <Shape strokeWidth={strokeWidth} fill={fill} stroke={stroke} size={size} />
      )}
    </g>
  )
}

export default VisxShape
