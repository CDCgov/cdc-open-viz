import React from 'react'
import { Line } from '@visx/shape'
import { type Anchor } from '@cdc/core/types/Axis'

const DEFAULT_ANCHOR_STROKE_WIDTH = 1

export const alignStrokeToPixel = (position: number, strokeWidth = DEFAULT_ANCHOR_STROKE_WIDTH) =>
  strokeWidth % 2 === 1 ? Math.round(position - 0.5) + 0.5 : Math.round(position)

const hasAnchorValue = (value: Anchor['value']) => value !== undefined && value !== null && value !== ''

type ValueAxisAnchorsProps = {
  anchors?: Anchor[]
  className: string
  getOffset?: () => number
  handleLineType: (lineStyle: string) => string
  keyPrefix: string
  xEnd: number
  xStart: number
  yScale: (value: string) => number
}

const ValueAxisAnchors: React.FC<ValueAxisAnchorsProps> = ({
  anchors,
  className,
  getOffset = () => 0,
  handleLineType,
  keyPrefix,
  xEnd,
  xStart,
  yScale
}) => (
  <>
    {anchors?.map((anchor, index) => {
      if (!hasAnchorValue(anchor.value)) return null

      const position = yScale(anchor.value)
      if (position === undefined || position === null || Number.isNaN(Number(position))) return null

      const anchorYPosition = alignStrokeToPixel(position - getOffset())

      return (
        // prettier-ignore
        <Line
          key={`${keyPrefix}-${anchor.value}--${index}`}
          strokeDasharray={handleLineType(anchor.lineStyle)}
          stroke={anchor.color ? anchor.color : 'rgba(0,0,0,1)'}
          fill={anchor.color ? anchor.color : 'rgba(0,0,0,1)'}
          className={className}
          from={{ x: xStart, y: anchorYPosition }}
          to={{ x: xEnd, y: anchorYPosition }}
        />
      )
    })}
  </>
)

export default ValueAxisAnchors
