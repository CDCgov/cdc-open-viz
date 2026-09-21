import React from 'react'

import createBarElement from '@cdc/core/components/createBarElement'

import { type ChartConfig } from '../../../types/ChartConfig'
import { type PortionPatternRenderData } from '../helpers/portionPattern'

type PortionPatternBoundaryProps = {
  renderData: PortionPatternRenderData
  brush?: boolean
  style?: React.CSSProperties
}

type BarPortionPatternOverlayProps = PortionPatternBoundaryProps & {
  config: ChartConfig
  index: number
  transformOrigin: string
}

export const PortionPatternBoundary = ({ renderData, brush = false, style }: PortionPatternBoundaryProps) => {
  if (!renderData.patternColor || !renderData.boundaryGeometry) return null

  return (
    <line
      className={`pattern-overlay__boundary${brush ? ' pattern-overlay__boundary--brush' : ''}`}
      {...renderData.boundaryGeometry}
      stroke={renderData.patternColor}
      strokeWidth={0.75}
      vectorEffect='non-scaling-stroke'
      pointerEvents='none'
      aria-hidden='true'
      style={style}
    />
  )
}

export const BarPortionPatternOverlay = ({
  config,
  index,
  renderData,
  transformOrigin,
  style
}: BarPortionPatternOverlayProps) => (
  <>
    {createBarElement({
      config,
      index: renderData.placement === 'end' ? index : undefined,
      className: 'pattern-overlay pattern-overlay--portion',
      background: renderData.patternUrl,
      borderColor: 'transparent',
      borderWidth: '0px',
      ...renderData.geometry,
      styleOverrides: {
        transformOrigin,
        ...style,
        pointerEvents: 'none'
      }
    })}
    <PortionPatternBoundary renderData={renderData} style={style} />
  </>
)
