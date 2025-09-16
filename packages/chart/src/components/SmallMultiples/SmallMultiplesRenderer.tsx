import React from 'react'
import SmallMultipleTile from './SmallMultipleTile'
import './SmallMultiples.scss'

interface SmallMultiplesRendererProps {
  config: any
  data: any[]
  svgRef?: React.RefObject<SVGElement>
  parentWidth?: number
  parentHeight?: number
}

const SmallMultiplesRenderer: React.FC<SmallMultiplesRendererProps> = ({
  config,
  data,
  svgRef,
  parentWidth,
  parentHeight
}) => {
  const { mode, tileColumn } = config.smallMultiples || {}

  // Figure out what objects to iterate over based on mode
  let tileItems: Array<{
    key: string | number
    mode: 'by-series' | 'by-column'
    seriesKey?: string
    tileValue?: any
    tileColumn?: string
  }> = []

  if (mode === 'by-series') {
    tileItems = config.series.map(series => ({
      key: series.dataKey,
      mode: 'by-series' as const,
      seriesKey: series.dataKey
    }))
  } else if (mode === 'by-column') {
    const uniqueValues = [...new Set(data.map(row => row[tileColumn]))].filter(val => val != null).sort()
    tileItems = uniqueValues.map(value => ({
      key: value,
      mode: 'by-column' as const,
      tileValue: value,
      tileColumn: tileColumn
    }))
  }

  // Return early if no valid mode
  if (tileItems.length === 0) {
    return null
  }

  // Create tiles for all items in a unified way
  return (
    <div className='small-multiples-container'>
      <div className='small-multiples-grid'>
        {tileItems.map(item => (
          <SmallMultipleTile
            key={item.key}
            mode={item.mode}
            seriesKey={item.seriesKey}
            tileValue={item.tileValue}
            tileColumn={item.tileColumn}
            config={config}
            data={data}
            svgRef={svgRef}
            parentWidth={parentWidth}
            parentHeight={parentHeight}
          />
        ))}
      </div>
    </div>
  )
}

export default SmallMultiplesRenderer
