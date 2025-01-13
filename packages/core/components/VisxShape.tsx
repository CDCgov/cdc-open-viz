import React from 'react'
import { GlyphDiamond, GlyphCircle, GlyphSquare, GlyphTriangle } from '@visx/glyph'

type GlyphKeys = 0 | 1 | 2 | 3 | 4

type GlyphMap = {
  [key in GlyphKeys]: React.ComponentType<{ fill?: string; stroke?: string; size?: number; strokeWidth?: number }>
}

const glyphs: GlyphMap = {
  0: GlyphCircle,
  1: GlyphSquare,
  2: GlyphTriangle,
  3: GlyphDiamond,
  4: GlyphTriangle
}

interface VisxShapeProps {
  fill: string
  size: number
  left: number
  top: number
  display: boolean
  index: GlyphKeys
  stroke: string
  key: string | number
}

const VisxShape: React.FC<VisxShapeProps> = ({ fill, size, left, top, display, index, stroke, key }) => {
  if (!display) {
    return null
  }

  const Shape = glyphs[index]
  const isFlipped = index === 4
  const transform = `translate(${left}, ${top}) ${isFlipped ? 'rotate(180)' : ''}`

  return (
    <g key={key} transform={transform}>
      <Shape strokeWidth={0} fill={fill} stroke={stroke} size={size} />
    </g>
  )
}

export default VisxShape
