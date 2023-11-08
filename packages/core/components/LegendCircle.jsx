import React from 'react'

export default function LegendCircle({ fill, borderColor, display = 'block' }) {
  const styles = {
    marginRight: '5px',
    borderRadius: '300px',
    verticalAlign: 'middle',
    display: 'inline-block',
    height: '1em',
    width: '1em',
    border: borderColor ? `${borderColor}  1px solid` : 'rgba(0,0,0,.3) 1px solid',
    backgroundColor: fill,
    display: display
  }

  return <span className='legend-item' style={styles} />
}
