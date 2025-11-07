import React, { useContext, useEffect, useRef, useState, useMemo, useCallback } from 'react'
import SmallMultipleTile from './SmallMultipleTile'
import ConfigContext from '../../ConfigContext'
import useReduceData from '../../hooks/useReduceData'
import getMinMax from '../../helpers/getMinMax'
import {
  getTileData,
  getTileConfig,
  createCombinedDataForYAxis,
  applyTileOrder,
  createTileColorScale
} from '../../helpers/smallMultiplesHelpers'
import { isMobileSmallMultiplesViewport } from '@cdc/core/helpers/viewports'
import './SmallMultiples.css'
import { ChartConfig } from '../../types/ChartConfig'

interface SmallMultiplesProps {
  config: ChartConfig
  data: object[]
  svgRef?: React.RefObject<SVGAElement>
  parentWidth?: number
  parentHeight?: number
}

type TileItem = {
  key: string | number
  mode: 'by-series' | 'by-column'
  seriesKey?: string
  tileValue?: any
  tileColumn?: string
}

type ChartRefWithTooltipMethods = {
  triggerTooltipAtDataValue?: (xAxisValue: any, yCoordinate: number) => void
  hideTooltip?: () => void
}

type TileHeaderRows = Array<Array<HTMLDivElement>>

type TileHeaderEntries = Array<[string, HTMLDivElement]>

const SmallMultiples: React.FC<SmallMultiplesProps> = ({ config, data, svgRef, parentWidth, parentHeight }) => {
  const { currentViewport, colorScale, parentRef } = useContext(ConfigContext)
  const { mode, tileColumn, tilesPerRowDesktop, tilesPerRowMobile } = config.smallMultiples || {}

  const isMobile = isMobileSmallMultiplesViewport(currentViewport)
  const tilesPerRow = isMobile ? tilesPerRowMobile || 2 : tilesPerRowDesktop || 3

  // Figure out what objects to iterate over based on mode - memoized to prevent recalculation
  const tileItems = useMemo<Array<TileItem>>(() => {
    let items: Array<TileItem> = []

    if (mode === 'by-series') {
      items = config.series.map(series => ({
        key: series.dataKey,
        mode: 'by-series' as const,
        seriesKey: series.dataKey
      }))
    } else if (mode === 'by-column') {
      const uniqueValues = Array.from(new Set(data.map(row => row[tileColumn])))
        .filter(val => val != null)
        .sort()
      items = uniqueValues.map(value => ({
        key: value,
        mode: 'by-column' as const,
        tileValue: value,
        tileColumn: tileColumn
      }))
    }

    // Apply tile ordering based on user preference
    return applyTileOrder(
      items,
      config.smallMultiples?.tileOrderType || 'asc',
      config.smallMultiples?.tileOrder,
      config
    )
  }, [
    mode,
    config.series,
    data,
    tileColumn,
    config.smallMultiples?.tileOrderType,
    config.smallMultiples?.tileOrder,
    config.smallMultiples?.tileTitles
  ])

  // Calculate the grid styling based on tiles per row
  const gridGap = isMobile ? '1rem' : '2rem'
  const gridStyle = {
    gridTemplateColumns: `repeat(${tilesPerRow}, 1fr)`,
    gap: gridGap
  }

  const [tileHeights, setTileHeights] = useState<Record<string, number>>({})

  // Refs to all LinearChart instances for tooltip coordination
  const chartRefs = useRef<Record<string, ChartRefWithTooltipMethods>>({})

  // Refs to all tile header elements for height alignment
  const headerRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Create combined data and config for consistent Y-axis calculation
  const combinedDataForYAxis = useMemo(
    () => createCombinedDataForYAxis(config, data, tileItems),
    [config, data, tileItems]
  )

  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(
    combinedDataForYAxis.config,
    combinedDataForYAxis.data
  )

  const yAxisProperties = useMemo(
    () => ({
      data: combinedDataForYAxis.data,
      tableData: combinedDataForYAxis.data,
      config: combinedDataForYAxis.config,
      minValue,
      maxValue,
      isAllLine,
      existPositiveValue,
      xAxisDataMapped: [],
      xMax: parentWidth,
      yMax: parentHeight
    }),
    [combinedDataForYAxis, minValue, maxValue, isAllLine, existPositiveValue, parentWidth, parentHeight]
  )

  const { min, max } = getMinMax(yAxisProperties)

  // Use consistent Y-axis if the feature is enabled and we have valid values
  const globalYAxisValues = useMemo(() => {
    if (config.smallMultiples?.independentYAxis) return null
    if (typeof min !== 'number' || typeof max !== 'number') return null
    if (combinedDataForYAxis.data.length === 0) return null

    return { min, max }
  }, [config.smallMultiples?.independentYAxis, min, max, combinedDataForYAxis.data.length])

  const numberOfRows = useMemo(() => Math.ceil(tileItems.length / tilesPerRow), [tileItems.length, tilesPerRow])

  // Handle tile height changes from ResizeObserver
  const handleTileHeightChange = useCallback((tileKey: string, height: number) => {
    setTileHeights(prev => ({ ...prev, [tileKey]: height }))
  }, [])

  // Handle tooltip synchronization across small multiple tiles
  const handleChartHover = useCallback(
    (sourceTileKey: string, xAxisValue: any, yCoordinate: number) => {
      if (!config.smallMultiples?.synchronizedTooltips) return

      // If xAxisValue is null, it means mouse left the chart - hide all tooltips
      if (xAxisValue === null) {
        Object.entries(chartRefs.current).forEach(([tileKey, chartRef]) => {
          if (tileKey !== sourceTileKey && chartRef?.hideTooltip) {
            chartRef.hideTooltip()
          }
        })
        return
      }

      // For each OTHER chart in the grid, trigger tooltip at same X-axis data value and exact Y coordinate
      Object.entries(chartRefs.current).forEach(([tileKey, chartRef]) => {
        if (tileKey === sourceTileKey || !chartRef) return

        if (chartRef.triggerTooltipAtDataValue) {
          chartRef.triggerTooltipAtDataValue(xAxisValue, yCoordinate)
        }
      })
    },
    [config.smallMultiples?.synchronizedTooltips]
  )

  // Align tile header heights per row
  useEffect(() => {
    const headerEntries = Object.entries(headerRefs.current).filter(([_, ref]) => ref) as TileHeaderEntries
    if (headerEntries.length === 0) return

    // Group headers by row based on their index in tileItems
    const headersByRow: TileHeaderRows = []

    tileItems.forEach((item, index) => {
      const rowIndex = Math.floor(index / tilesPerRow)
      const header = headerRefs.current[String(item.key)]

      headersByRow[rowIndex] ||= []
      headersByRow[rowIndex].push(header)
    })

    // For each row, find the header with longest text and align others to it
    headersByRow.forEach(rowHeaders => {
      let longestHeader: HTMLDivElement | null = null
      let maxTextLength = 0

      rowHeaders.forEach(header => {
        const textLength = header.textContent?.length || 0
        if (textLength > maxTextLength) {
          maxTextLength = textLength
          longestHeader = header
        }
      })

      if (!longestHeader) return

      // Get the height of the longest header in this row
      const targetHeight = longestHeader.offsetHeight

      // Apply that height to all other headers in this row
      rowHeaders.forEach(header => {
        header.style.minHeight = header !== longestHeader ? `${targetHeight}px` : 'auto'
      })
    })
  }, [tileItems, tilesPerRow])

  // Calculate container height from measured tile heights
  useEffect(() => {
    if (!parentRef.current) return

    const measuredHeights = Object.values(tileHeights)
    if (measuredHeights.length === 0) {
      return
    }

    const maxTileHeight = Math.max(...measuredHeights)
    const gapSize = isMobile ? 18 : 36
    const totalGapsHeight = (numberOfRows - 1) * gapSize
    const totalHeight = numberOfRows * maxTileHeight + totalGapsHeight

    parentRef.current.style.height = `${totalHeight}px`
  }, [tileHeights, numberOfRows, isMobile, parentRef, tilesPerRow])

  if (tileItems.length === 0) {
    return null
  }

  return (
    <div className='small-multiples-container'>
      <div className='small-multiples-grid' style={gridStyle}>
        {tileItems.map((item, index) => {
          const customColorScale = createTileColorScale(item, config, colorScale, index, tileItems.length)

          return (
            <SmallMultipleTile
              key={item.key}
              tileKey={String(item.key)}
              mode={item.mode}
              seriesKey={item.seriesKey}
              tileValue={item.tileValue}
              tileColumn={item.tileColumn}
              customColorScale={customColorScale}
              config={config}
              data={data}
              svgRef={svgRef}
              parentWidth={parentWidth}
              parentHeight={parentHeight}
              globalYAxisMax={globalYAxisValues?.max}
              globalYAxisMin={globalYAxisValues?.min}
              isFirstInRow={index % tilesPerRow === 0}
              onHeightChange={handleTileHeightChange}
              onChartRef={ref => {
                chartRefs.current[String(item.key)] = ref
              }}
              onHeaderRef={ref => {
                headerRefs.current[String(item.key)] = ref
              }}
              onChartHover={(xAxisValue, yCoordinate) => handleChartHover(String(item.key), xAxisValue, yCoordinate)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SmallMultiples
