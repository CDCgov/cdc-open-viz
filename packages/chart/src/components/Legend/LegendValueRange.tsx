import React from 'react'
import { LegendItem, LegendLabel } from '@visx/legend'
import LegendShape from '@cdc/core/components/LegendShape'
import { generateValueRanges, GenerateValueRangesOptions, ValueRange } from './helpers/generateValueRanges'

export type LegendValueRangeProps = GenerateValueRangesOptions & {
  colors: string[]
  shape?: 'circle' | 'square'
  onClick?: (index: number, range: ValueRange) => void
  innerClasses?: string[]
  reverseLabelOrder?: boolean
}

/**
 * LegendValueRange - Generic component for displaying value range legends
 *
 * Used by Horizon Charts to show layer intensity ranges (e.g., 1-100, 101-200).
 * Can be reused by other chart types that need binned value legends.
 */
const LegendValueRange: React.FC<LegendValueRangeProps> = ({
  minValue = 0,
  maxValue,
  numRanges,
  distribution = 'equal',
  formatNumber,
  colors,
  shape = 'square',
  onClick,
  innerClasses = ['legend-container__inner'],
  reverseLabelOrder = false
}) => {
  const ranges = generateValueRanges({ minValue, maxValue, numRanges, distribution, formatNumber })

  if (ranges.length === 0) return null

  // Reverse both ranges and colors when reverseLabelOrder is true
  const displayRanges = reverseLabelOrder ? [...ranges].reverse() : ranges
  const displayColors = reverseLabelOrder ? [...colors].reverse() : colors

  return (
    <div className={innerClasses.join(' ')}>
      {displayRanges.map((range, i) => {
        const color = displayColors[i % displayColors.length]
        const isClickable = typeof onClick === 'function'
        const className = ['legend-item', `legend-text--range-${i}`, !isClickable && 'not-clickable'].filter(Boolean)

        return (
          <LegendItem
            className={className.join(' ')}
            tabIndex={isClickable ? 0 : -1}
            key={`legend-range-${i}`}
            onKeyDown={e => {
              if (isClickable && e.key === 'Enter') {
                e.preventDefault()
                onClick(i, range)
              }
            }}
            onClick={e => {
              if (isClickable) {
                e.preventDefault()
                onClick(i, range)
              }
            }}
            role={isClickable ? 'button' : undefined}
          >
            <LegendShape shape={shape} fill={color} />
            <LegendLabel align='left' className='m-0'>
              {range.label}
            </LegendLabel>
          </LegendItem>
        )
      })}
    </div>
  )
}

export default LegendValueRange
