import React, { memo } from 'react'

const Geo = ({ path, styles, stroke, strokeWidth, ...props }) => {
  return (
    <g className='geo-group' css={styles} {...props}>
      <path tabIndex={-1} className='single-geo' stroke={stroke} strokeWidth={strokeWidth} d={path} />
    </g>
  )
}

export default memo(Geo)
