import React, { useContext, useEffect, useRef, useState, useMemo, useCallback } from 'react'
import SmallMultipleTile from './SmallMultipleTile'
import ConfigContext from '../../ConfigContext'
import useReduceData from '../../hooks/useReduceData'
import useMinMax from '../../hooks/useMinMax'
import {
  getTileData,
  getTileConfig,
  createCombinedDataForYAxis,
  applyTileOrder,
  createTileColorScale
} from '../../helpers/smallMultiplesHelpers'
import { calculateYAxisWithAutoPadding } from '../../helpers/calculateYAxisWithAutoPadding'
import './SmallMultiples.scss'

interface SmallMultiplesRendererProps {
  config: any
  data: any[]
  svgRef?: React.RefObject<SVGAElement>
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
  const { currentViewport, colorScale, parentRef } = useContext(ConfigContext)
  const { mode, tileColumn, tilesPerRowDesktop, tilesPerRowMobile } = config.smallMultiples || {}

  const isMobile = currentViewport === 'xs' || currentViewport === 'sm'
  const tilesPerRow = isMobile ? tilesPerRowMobile || 2 : tilesPerRowDesktop || 3

  // Figure out what objects to iterate over based on mode - memoized to prevent recalculation
  const tileItems = useMemo<
    Array<{
      key: string | number
      mode: 'by-series' | 'by-column'
      seriesKey?: string
      tileValue?: any
      tileColumn?: string
    }>
  >(() => {
    let items: Array<{
      key: string | number
      mode: 'by-series' | 'by-column'
      seriesKey?: string
      tileValue?: any
      tileColumn?: string
    }> = []

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

  // Create combined data and config for consistent Y-axis calculation
  const combinedDataForYAxis = useMemo(
    () => createCombinedDataForYAxis(config, data, tileItems),
    [config, data, tileItems]
  )

  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(
    combinedDataForYAxis.config,
    combinedDataForYAxis.data
  )

  // Check if auto-padding should be applied to unified Y-axis
  const shouldApplyUnifiedAutoPadding = !config.smallMultiples?.independentYAxis
  const inlineLabel = combinedDataForYAxis.config.yAxis?.inlineLabel
  const inlineLabelHasNoSpace = !inlineLabel?.includes(' ')
  const shouldApplyAutoPadding = shouldApplyUnifiedAutoPadding && inlineLabel && !inlineLabelHasNoSpace

  // Create config that disables scale padding when auto-padding will be applied
  const configForMinMax = shouldApplyAutoPadding
    ? {
        ...combinedDataForYAxis.config,
        yAxis: {
          ...combinedDataForYAxis.config.yAxis,
          enablePadding: false,
          scalePadding: 0
        }
      }
    : combinedDataForYAxis.config

  const yAxisProperties = useMemo(
    () => ({
      data: combinedDataForYAxis.data,
      tableData: combinedDataForYAxis.data,
      config: configForMinMax,
      minValue,
      maxValue,
      isAllLine,
      existPositiveValue,
      xAxisDataMapped: [],
      xMax: parentWidth,
      yMax: parentHeight
    }),
    [
      combinedDataForYAxis.data,
      configForMinMax,
      minValue,
      maxValue,
      isAllLine,
      existPositiveValue,
      parentWidth,
      parentHeight
    ]
  )

  const { min: baseMin, max: baseMax } = useMinMax(yAxisProperties)

  // Apply auto-padding only if needed (on raw values), otherwise use scale-padded values
  const { min, max } = shouldApplyAutoPadding
    ? calculateYAxisWithAutoPadding(
        baseMin,
        baseMax,
        combinedDataForYAxis.config,
        combinedDataForYAxis.data,
        parentHeight,
        currentViewport
      )
    : { min: baseMin, max: baseMax }

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

  // Calculate container height from measured tile heights
  useEffect(() => {
    if (!parentRef.current) return

    const measuredHeights = Object.values(tileHeights)
    if (measuredHeights.length === 0) {
      return
    }

    const maxTileHeight = Math.max(...measuredHeights)
    const gapSize = isMobile ? 18 : 36
    const totalGapsHeight = (numberOfRows - 1) * (gapSize + 36) // 36 is padding on .small-multiples-container
    const containerPadding = 36 // Padding on .small-multiple-tile
    const totalHeight = numberOfRows * maxTileHeight + totalGapsHeight + containerPadding

    parentRef.current.style.height = `${totalHeight}px`
  }, [tileHeights, numberOfRows, isMobile, parentRef])

  if (tileItems.length === 0) {
    return null
  }

  return (
    <div className='small-multiples-container'>
      <div className='small-multiples-grid' style={gridStyle}>
        {tileItems.map((item, index) => {
          // Create custom colorScale for this tile based on color mode
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
            />
          )
        })}
      </div>
    </div>
  )
}

export default SmallMultiplesRenderer
