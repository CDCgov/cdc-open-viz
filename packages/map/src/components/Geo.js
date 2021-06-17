import React from 'react';

const Geo = ({path, styles, ...props}) => {
  return (
    <g
      className="geo-group"
      css={styles}
      {...props}
    >
      <path
        tabIndex={-1}
        className='single-geo'
        d={path}
      />
    </g>
  )
}

export default Geo;