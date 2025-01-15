import React from 'react'
import { handleLineType } from '../../helpers/handleLineType'
import { Line } from '@visx/shape'
import { GlyphDiamond, GlyphCircle, GlyphSquare, GlyphTriangle, GlyphCross, Glyph as CustomGlyph } from '@visx/glyph'
import { Text } from '@visx/text'

// Define glyph shapes
const Glyphs = [
  GlyphCircle,
  GlyphSquare,
  GlyphTriangle,
  GlyphDiamond,
  GlyphTriangle,
  GlyphCross,
  ({ fill }: { fill: string }) => (
    <CustomGlyph>
      {/* Render Filled Pentagon */}
      <Text fill={fill} fontSize={14} textAnchor='middle' verticalAnchor='middle'>
        &#x2B1F;
      </Text>
    </CustomGlyph>
  )
]

const LegendLineShape = props => {
  const { config, label, index } = props
  const isReversedTriangle = index === 4

  const Shape =
    Glyphs[config.visual.lineDatapointSymbol === 'standard' && index < config.visual.maximumShapeAmount ? index : 0]
  const transform = `translate(${15}, ${3}) ${isReversedTriangle ? 'rotate(180)' : ''}`

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

      <g transform={transform}>
        <Shape fillOpacity={1} fill={label.value} />
      </g>
    </svg>
  )
}

export default LegendLineShape
