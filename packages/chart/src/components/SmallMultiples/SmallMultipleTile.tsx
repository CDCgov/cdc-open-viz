import React, { useContext, useRef, useEffect } from 'react'
import LinearChart from '../LinearChart'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import ConfigContext from '../../ConfigContext'
import { ColorScale } from '../../types/ChartContext'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { getTileDisplayTitle } from '../../helpers/smallMultiplesHelpers'
import getViewport from '@cdc/core/helpers/getViewport'

interface SmallMultipleTileProps {
  mode: 'by-series' | 'by-column'
  config: any
  data: any[]
  tileKey: string
  seriesKey?: string
  tileValue?: any
  tileColumn?: string
  customColorScale?: ColorScale
  svgRef?: React.RefObject<SVGAElement>
  parentWidth?: number
  parentHeight?: number
  globalYAxisMax?: number
  globalYAxisMin?: number
  isFirstInRow?: boolean
  onHeightChange?: (tileKey: string, height: number) => void
  onChartRef?: (ref: any) => void
  onChartHover?: (xAxisValue: any, yCoordinate: number) => void
}

const SmallMultipleTile: React.FC<SmallMultipleTileProps> = ({
  mode,
  config,
  data,
  tileKey,
  seriesKey,
  tileValue,
  tileColumn,
  customColorScale,
  svgRef,
  parentWidth,
  globalYAxisMax,
  globalYAxisMin,
  isFirstInRow,
  onHeightChange,
  onChartRef,
  onChartHover
}) => {
  let tileConfig = cloneConfig(config)
  let tileData = data

  if (mode === 'by-series') {
    // BY-SERIES: One series per tile, all data
    const singleSeries = tileConfig.series.find(s => s.dataKey === seriesKey)
    tileConfig = {
      ...tileConfig,
      series: [singleSeries], // Single series
      runtime: {
        ...tileConfig.runtime,
        series: tileConfig.runtime.series.filter(s => s.dataKey === seriesKey),
        seriesKeys: [seriesKey],
        seriesLabels: { [seriesKey]: tileConfig.runtime.seriesLabels?.[seriesKey] || seriesKey },
        seriesLabelsAll: [tileConfig.runtime.seriesLabels?.[seriesKey] || seriesKey],
        // Filter area chart specific series keys for proper rendering
        ...(tileConfig.runtime.areaSeriesKeys && {
          areaSeriesKeys: tileConfig.runtime.areaSeriesKeys.filter(s => s.dataKey === seriesKey)
        }),
        // Filter line chart specific series keys for proper rendering
        ...(tileConfig.runtime.lineSeriesKeys && {
          lineSeriesKeys: tileConfig.runtime.lineSeriesKeys.filter(key => key === seriesKey)
        })
      },
      showTitle: false, // Individual tiles don't need the main title
      smallMultiples: undefined // Remove smallMultiples to prevent infinite loop
    }
    tileData = data // All data, but only one series will render
  } else if (mode === 'by-column') {
    // BY-COLUMN: All series, filtered data by tile column value
    tileConfig = {
      ...tileConfig,
      showTitle: false, // Individual tiles don't need the main title
      smallMultiples: undefined // Remove smallMultiples to prevent infinite loop
    }
    tileData = data.filter(row => row[tileColumn] === tileValue) // Filtered data
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

  // Small multiples-specific modifications
  tileConfig = {
    ...tileConfig,
    xAxis: {
      ...tileConfig.xAxis,
      label: isFirstInRow ? tileConfig.xAxis?.label : undefined
    },
    yAxis: {
      ...tileConfig.yAxis,
      label: isFirstInRow ? tileConfig.yAxis?.label : undefined
    },
    runtime: {
      ...tileConfig.runtime,
      xAxis: {
        ...tileConfig.runtime?.xAxis,
        label: isFirstInRow ? tileConfig.xAxis?.label : undefined
      },
      yAxis: {
        ...tileConfig.runtime?.yAxis,
        label: isFirstInRow ? tileConfig.yAxis?.label : undefined
      }
    },
    legend: {
      ...tileConfig.legend,
      hide: true
    },
    showAreaUnderLine: config.smallMultiples?.showAreaUnderLine || false
  }

  const displayTitle = getTileDisplayTitle(mode, seriesKey, tileValue, tileKey, config)

  // Get the original context values to merge with our filtered config
  const originalContextValues = useContext(ConfigContext)

  // Create a tile-specific parentRef for this tile's chart
  const tileParentRef = useRef<HTMLDivElement>(null)

  // Create a ref for the entire tile (including header) for height measurement
  const fullTileRef = useRef<HTMLDivElement>(null)

  // Create a ref for the LinearChart instance for tooltip coordination
  const linearChartRef = useRef<any>(null)

  // Create new context values with our filtered config
  const tileContextValues = {
    ...originalContextValues,
    config: tileConfig,
    transformedData: tileData,
    parentRef: tileParentRef, // Override with tile-specific parentRef
    updateConfig: () => {}, // Prevent tile hooks from modifying global config
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

  // Pass chart ref to parent SmallMultiples component for tooltip coordination
  useEffect(() => {
    if (onChartRef && linearChartRef.current) {
      onChartRef(linearChartRef.current)
    }
  }, [onChartRef])

  return (
    <div ref={fullTileRef} className='small-multiple-tile'>
      <div className='tile-header'>
        <div className='tile-title'>{displayTitle}</div>
      </div>
      <div ref={tileParentRef} className='tile-chart'>
        <ParentSize
          key={`${mode}-${seriesKey || tileValue}-${config.smallMultiples?.tilesPerRowDesktop}-${
            config.smallMultiples?.tilesPerRowMobile
          }-${parentWidth}`}
        >
          {parent => (
            <ConfigContext.Provider
              value={{
                ...tileContextValues,
                dimensions: [parent.width, parent.height], // Override with tile-specific dimensions
                vizViewport: getViewport(parent.width), // Override with tile-specific viewport
                handleSmallMultipleHover: onChartHover
              }}
            >
              <LinearChart ref={linearChartRef} parentWidth={parent.width} parentHeight={parent.height} />
            </ConfigContext.Provider>
          )}
        </ParentSize>
      </div>
    </div>
  )
}

export default SmallMultipleTile
