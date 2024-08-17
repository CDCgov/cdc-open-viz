import React from 'react'

interface LegendCircleProps {
  fill: string
  borderColor?: string
  display?: 'inline-block' | 'block' | 'inline'
  viewport: 'sm' | 'xs' | 'xxs' | 'lg' | 'md'
  shape?: 'circle' | 'square' | 'gradient'
}

const LegendCircle: React.FC<LegendCircleProps> = props => {
  const { fill, borderColor, display = 'inline-block', viewport, shape = 'circle' } = props
  const isGradient = shape === 'gradient'
  const dimensions = isGradient ? { width: '4rem', height: '1.5em' } : { width: '1em', height: '1em' }
  const marginRight = ['circle', 'square'].includes(shape) ? '5px' : '0'
  const styles = {
    marginRight: marginRight,
    borderRadius: shape === 'circle' ? '50%' : '0px',
    verticalAlign: 'middle',
    display: display,
    height: dimensions.height,
    width: dimensions.width,
    border: borderColor ? `${borderColor} 1px solid` : 'rgba(0,0,0,.3) 1px solid',
    backgroundColor: fill
  }

  return <span className='legend-item' style={styles} />
}

export default LegendCircle
