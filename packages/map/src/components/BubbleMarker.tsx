import React from 'react'

export const NEUTRAL_BUBBLE_LEGEND_COLOR = '#6B6B6B'
export const BUBBLE_OUTLINE_COLOR = '#1c1d1f'

type BubbleMarkerProps = React.SVGProps<SVGCircleElement> & {
  centerX: number
  centerY: number
  className: string
  extraBubbleBorder?: boolean
  fillColor: string
  radius: number
}

const BubbleMarker = ({
  centerX,
  centerY,
  className,
  extraBubbleBorder = false,
  fillColor,
  radius,
  ...circleProps
}: BubbleMarkerProps) => {
  const commonCircleProps = {
    cx: centerX,
    cy: centerY,
    ...circleProps
  }

  return (
    <circle
      {...commonCircleProps}
      className={className}
      r={radius}
      fill={fillColor}
      stroke={extraBubbleBorder ? BUBBLE_OUTLINE_COLOR : fillColor}
      strokeWidth={extraBubbleBorder ? 1 : 1.25}
      fillOpacity={0.9}
    />
  )
}

export default BubbleMarker
