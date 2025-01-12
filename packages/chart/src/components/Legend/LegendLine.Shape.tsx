import React from 'react'
import { handleLineType } from '../../helpers/handleLineType'
import { Line } from '@visx/shape'
import VisxShape from '@cdc/core/components/VisxShape'

const LegendLineShape = props => {
  const { config, label, index } = props

  return (
    <svg width={30} height={10} style={{ overflow: 'visible' }} className='me-2'>
      <Line
        from={{ x: 0, y: 3 }}
        to={{ x: 30, y: 3 }}
        stroke={label.value}
        strokeWidth={2}
        strokeDasharray={handleLineType(config.series[index]?.type ? config.series[index]?.type : '')}
      />

      <VisxShape
        index={index}
        display={config.legend.hasShape && index !== 5}
        left={15}
        top={3}
        key={`legend_shape_${index}`}
        stroke={label.value}
        fill={label.value}
        size={55}
      />
    </svg>
  )
}

export default LegendLineShape
