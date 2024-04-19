import React from 'react'

export default function LegendCircle({ fill, borderColor, display = 'inline-block', viewport }) {
  const dimensions = ['sm', 'xs', 'xxs'].includes(viewport) ? { width: '0.7em', height: '0.7em' } : { width: '1em', height: '1em' }
  const styles = {
    marginRight: '5px',
    borderRadius: '300px',
    verticalAlign: 'middle',
    display: display,
    height: dimensions.height || '1em',
    width: dimensions.width || '1em',
    border: borderColor ? `${borderColor}  1px solid` : 'rgba(0,0,0,.3) 1px solid',
    backgroundColor: fill
  }

  return <span className='legend-item' style={styles} />
}
