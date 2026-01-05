import React from 'react'
import LegendShape from '@cdc/core/components/LegendShape'
import { RecommendationCategory } from '../types/Config'

type ScheduleLegendProps = {
  recommendations: RecommendationCategory[]
}

const ScheduleLegend: React.FC<ScheduleLegendProps> = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) {
    return null
  }

  return (
    <div className='schedule-legend' role='list' aria-label='Legend'>
      <h3 className='schedule-legend__title'>Legend</h3>
      <div className='schedule-legend__items'>
        {recommendations.map((rec, index) => (
          <div key={rec.value || index} className='schedule-legend__item' role='listitem'>
            <LegendShape fill={rec.color} shape='square' display='inline-block' />
            <span className='schedule-legend__label'>{rec.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleLegend
