import React, { memo } from 'react'

const Geo = ({ path, styles, stroke, strokeWidth, ...props }) => {
  const { className, ...restProps } = props
  const geoClassName = String(props.additionalData?.stateName)?.toLowerCase()?.replaceAll(' ', '') || 'country'
  return (
    <g className={`geo-group ${geoClassName}`} style={styles} {...restProps}>
      <path tabIndex={-1} className={`single-geo ${geoClassName}`} stroke={stroke} strokeWidth={strokeWidth} d={path} />
    </g>
  )
}

export default memo(Geo)
