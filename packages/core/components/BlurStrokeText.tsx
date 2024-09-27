import React from 'react'
import { Text } from '@visx/text'

// Extension for visx Text component that creates a second text element and a def with a blur effect to create a feathered stroke effect using a filter with Gaussian blur. No actual stroke is used

export interface BlurStrokeTextProps extends React.ComponentProps<typeof Text> {
  blurRadius?: number
  stroke?: string
  strokeWidth?: number
  strokeMiterLimit?: number
  disableStroke?: boolean
  disableBlur?: boolean
}

export const BlurStrokeText: React.FC<BlurStrokeTextProps> = ({
  blurRadius = 1,
  stroke = 'white',
  strokeWidth = 4.5,
  strokeMiterLimit = 2,
  disableStroke = false,
  disableBlur = false,
  ...props
}) => {
  return (
    <>
      <defs>
        <filter id='blur' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur in='SourceGraphic' stdDeviation={blurRadius} />
        </filter>
      </defs>
      {!disableStroke && (
        <Text
          {...props}
          filter={disableBlur ? undefined : 'url(#blur)'}
          fill={stroke}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeMiterlimit={strokeMiterLimit}
        />
      )}
      <Text {...props} />
    </>
  )
}
