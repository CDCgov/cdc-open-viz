import React, { memo } from 'react'

type GeoProps = {
  styles?: React.CSSProperties
  stroke?: string
  strokeWidth?: number
  path?: string
  className?: string
  onMouseEnter?: () => void
  onClick?: () => void
  'data-country-code'?: string
  'data-tooltip-id'?: string
  'data-tooltip-html'?: string
  additionalData?: any
  geoData?: any
  additionaldata?: string
  geodata?: string
  tabIndex?: number
}

const Geo: React.FC<GeoProps> = ({ path, styles, stroke, strokeWidth, ...props }) => {
  const { className, 'data-country-code': dataCountryCode, ...restProps } = props
  const geoClassName = String(props.additionalData?.name)?.toLowerCase()?.replace(/\s+/g, '') || 'country'
  return (
    <g className={`geo-group ${geoClassName}`} style={styles} {...restProps}>
      <path
        tabIndex={-1}
        className={`single-geo ${geoClassName} ${className || ''}`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin='round'
        strokeLinecap='round'
        d={path}
        data-country-code={dataCountryCode}
      />
    </g>
  )
}

export default memo(Geo)
