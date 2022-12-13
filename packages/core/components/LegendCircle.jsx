import React from 'react'

export default function LegendCircle({ fill }) {
  const styles = {
    marginRight: '5px',
    borderRadius: '300px',
    verticalAlign: 'middle',
    display: 'inline-block',
    height: '1em',
    width: '1em',
    border: 'rgba(0,0,0,.3) 1px solid',
    backgroundColor: fill
  }

  return <span className='legend-item' style={styles} />
}
