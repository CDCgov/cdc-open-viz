import React, { useContext, useRef, useEffect } from 'react'
import LinearChart from '../LinearChart'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import ConfigContext from '../../ConfigContext'
import { ColorScale } from '../../types/ChartContext'

interface SmallMultipleTileProps {
  mode: 'by-series' | 'by-column'
  config: any
  data: any[]
  tileKey: string
  seriesKey?: string
  tileValue?: any
  tileColumn?: string
  customTitle?: string
  customColorScale?: ColorScale
  svgRef?: React.RefObject<SVGAElement>
  parentWidth?: number
  parentHeight?: number
  tilesPerRow?: number
  showAxisLabels?: boolean
  globalYAxisMax?: number
  globalYAxisMin?: number
  onHeightChange?: (tileKey: string, height: number) => void
}

const SmallMultipleTile: React.FC<SmallMultipleTileProps> = ({
  mode,
  config,
  data,
  tileKey,
  seriesKey,
  tileValue,
  tileColumn,
  customTitle,
  customColorScale,
  svgRef,
  parentWidth,
  parentHeight,
  tilesPerRow,
  showAxisLabels,
  globalYAxisMax,
  globalYAxisMin,
  onHeightChange
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
    tileTitle = customTitle || seriesKey
  } else if (mode === 'by-column') {
    // BY-COLUMN: All series, filtered data by tile column value
    tileConfig = {
      ...config,
      showTitle: false, // Individual tiles don't need the main title
      smallMultiples: undefined // Remove smallMultiples to prevent infinite loop
    }
    tileData = data.filter(row => row[tileColumn] === tileValue) // Filtered data
    tileTitle = customTitle || tileValue
  }

  // Conditionally hide axis labels and tick marks based on showAxisLabels prop
  if (!showAxisLabels) {
    tileConfig = {
      ...tileConfig,
      xAxis: {
        ...tileConfig.xAxis,
        hideLabel: true,
        hideTicks: true
      },
      yAxis: {
        ...tileConfig.yAxis,
        hideLabel: true,
        hideTicks: true
      },
      // Also update runtime properties since LinearChart checks runtime.yAxis.hideTicks
      runtime: {
        ...tileConfig.runtime,
        xAxis: {
          ...tileConfig.runtime?.xAxis,
          hideLabel: true,
          hideTicks: true
        },
        yAxis: {
          ...tileConfig.runtime?.yAxis,
          hideLabel: true,
          hideTicks: true
        }
      }
    }
  }

  // Apply global Y-axis values for consistent scaling if provided
  if (globalYAxisMax !== undefined) {
    tileConfig = {
      ...tileConfig,
      yAxis: {
        ...tileConfig.yAxis,
        max: globalYAxisMax,
        min: globalYAxisMin
      },
      // Also update runtime properties since LinearChart checks runtime.yAxis.max
      runtime: {
        ...tileConfig.runtime,
        yAxis: {
          ...tileConfig.runtime?.yAxis,
          max: globalYAxisMax,
          min: globalYAxisMin
        }
      }
    }
  }

  // Get the original context values to merge with our filtered config
  const originalContextValues = useContext(ConfigContext)

  // Create a tile-specific parentRef for this tile's chart
  const tileParentRef = useRef<HTMLDivElement>(null)

  // Create a ref for the entire tile (including header) for height measurement
  const fullTileRef = useRef<HTMLDivElement>(null)

  // Create new context values with our filtered config
  const tileContextValues = {
    ...originalContextValues,
    config: tileConfig,
    transformedData: tileData,
    parentRef: tileParentRef, // Override with tile-specific parentRef
    ...(customColorScale && { colorScale: customColorScale }) // Override colorScale if provided
  }

  // Use ResizeObserver to capture actual full tile height changes (including header)
  useEffect(() => {
    if (!fullTileRef.current || !onHeightChange) return

    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const { height } = entry.contentRect
        onHeightChange(tileKey, height)
      })
    })

    resizeObserver.observe(fullTileRef.current)
    return () => resizeObserver.disconnect()
  }, [tileKey, onHeightChange])

  return (
    <div ref={fullTileRef} className='small-multiple-tile'>
      <div className='tile-header'>
        <h4 className='tile-title'>{tileTitle}</h4>
      </div>
      <div ref={tileParentRef} className='tile-chart'>
        <ParentSize key={`${tilesPerRow}-${mode}-${seriesKey || tileValue}`}>
          {parent => (
            <ConfigContext.Provider
              value={{
                ...tileContextValues,
                dimensions: [parent.width, parent.height] // Override with tile-specific dimensions
              }}
            >
              <LinearChart ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />
            </ConfigContext.Provider>
          )}
        </ParentSize>
      </div>
    </div>
  )
}

export default SmallMultipleTile
