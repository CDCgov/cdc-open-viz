import React from 'react'
import { Line } from '@visx/shape'
import { handleLineType } from '../../helpers/handleLineType'
import type { PreliminaryDataItem } from '../../types/ChartConfig'
import type { EffectLegendStyle } from './helpers/resolveEffectLegendStyle'

type EffectLegendSwatchProps = {
  effect: PreliminaryDataItem
  style: EffectLegendStyle
}

const EffectLegendSwatch: React.FC<EffectLegendSwatchProps> = ({ effect, style }) => {
  const isCircle = effect.style?.includes('Circles')
  const isFilled = effect.style === 'Filled Circles'
  const circleSize = Number(effect.circleSize) || 6
  const circleDiameter = circleSize * 2
  const swatchStyle = isCircle
    ? {
        overflow: 'visible',
        width: `${circleDiameter}px`,
        height: `${circleDiameter}px`,
        marginLeft: `calc((1em - ${circleDiameter}px) / 2)`,
        marginRight: `calc(0.5rem + (1em - ${circleDiameter}px) / 2)`
      }
    : { overflow: 'visible', marginRight: '0.5rem' }

  return (
    <svg
      width={30}
      height={isCircle ? circleDiameter : 10}
      viewBox={isCircle ? `0 0 ${circleDiameter} ${circleDiameter}` : '0 0 30 10'}
      style={swatchStyle}
      className={`effect-legend-swatch${isCircle ? ' effect-legend-swatch--circle' : ''}`}
      aria-hidden='true'
    >
      {!isCircle && (
        <Line
          from={{ x: 0, y: 5 }}
          to={{ x: 30, y: 5 }}
          stroke={style.color}
          strokeWidth={style.weight}
          strokeDasharray={handleLineType(effect.style || '')}
          vectorEffect='non-scaling-stroke'
        />
      )}
      {isCircle && (
        <circle
          cx={circleSize}
          cy={circleSize}
          r={circleSize}
          fill={isFilled ? style.color : '#fff'}
          stroke={style.color}
          strokeWidth={style.weight}
        />
      )}
    </svg>
  )
}

export default EffectLegendSwatch
