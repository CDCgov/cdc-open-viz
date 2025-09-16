import React, { useContext } from 'react'
import LinearChart from '../LinearChart'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import ConfigContext from '../../ConfigContext'

interface SmallMultipleTileProps {
  mode: 'by-series' | 'by-column'
  config: any
  data: any[]
  seriesKey?: string
  tileValue?: any
  tileColumn?: string
  svgRef?: React.RefObject<SVGElement>
  parentWidth?: number
  parentHeight?: number
}

const SmallMultipleTile: React.FC<SmallMultipleTileProps> = ({
  mode,
  config,
  data,
  seriesKey,
  tileValue,
  tileColumn,
  svgRef,
  parentWidth,
  parentHeight
}) => {
  let tileConfig = { ...config }
  let tileData = data
  let tileTitle = ''

  if (mode === 'by-series') {
    // BY-SERIES: One series per tile, all data
    const singleSeries = config.series.find(s => s.dataKey === seriesKey)
    tileConfig = {
      ...config,
      series: [singleSeries], // Single series
      runtime: {
        ...config.runtime,
        series: config.runtime.series.filter(s => s.dataKey === seriesKey),
        seriesKeys: [seriesKey],
        seriesLabels: { [seriesKey]: config.runtime.seriesLabels?.[seriesKey] || seriesKey },
        seriesLabelsAll: [config.runtime.seriesLabels?.[seriesKey] || seriesKey]
      },
      showTitle: false, // Individual tiles don't need the main title
      smallMultiples: undefined // Remove smallMultiples to prevent infinite loop
    }
    tileData = data // All data, but only one series will render
    tileTitle = seriesKey // "COVID-19", "RSV", etc.
  } else if (mode === 'by-column') {
    // BY-COLUMN: All series, filtered data by tile column value
    tileConfig = {
      ...config,
      showTitle: false, // Individual tiles don't need the main title
      smallMultiples: undefined // Remove smallMultiples to prevent infinite loop
    }
    tileData = data.filter(row => row[tileColumn] === tileValue) // Filtered data
    tileTitle = tileValue // "State A", "Region 1", etc.
  }

  // Get the original context values to merge with our filtered config
  const originalContextValues = useContext(ConfigContext)

  // Create new context values with our filtered config
  const tileContextValues = {
    ...originalContextValues,
    config: tileConfig,
    transformedData: tileData
  }

  return (
    <div className='small-multiple-tile'>
      <div className='tile-header'>
        <h4 className='tile-title'>{tileTitle}</h4>
      </div>
      <div className='tile-chart'>
        <ConfigContext.Provider value={tileContextValues}>
          <ParentSize>
            {parent => <LinearChart ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />}
          </ParentSize>
        </ConfigContext.Provider>
      </div>
    </div>
  )
}

export default SmallMultipleTile
