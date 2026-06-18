import React from 'react'

type RegionRectProps = {
  label: string
  text?: string
  stroke?: string
  strokeWidth?: number
  [key: string]: any
}

const RegionRect: React.FC<RegionRectProps> = ({ label, text, stroke, strokeWidth, ...props }) => {
  return (
    <svg viewBox='0 0 45 28'>
      <g {...props} strokeLinejoin='round'>
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d='M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z'
        />
        <text textAnchor='middle' dominantBaseline='middle' x='50%' y='54%' fill={text}>
          {label}
        </text>
      </g>
    </svg>
  )
}

export default RegionRect
