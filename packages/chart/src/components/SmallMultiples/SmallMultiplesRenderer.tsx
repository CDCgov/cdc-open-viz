import React, { useContext, useEffect, useRef, useState } from 'react'
import SmallMultipleTile from './SmallMultipleTile'
import ConfigContext from '../../ConfigContext'
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
  const { currentViewport } = useContext(ConfigContext)
  const { mode, tileColumn, tilesPerRowDesktop, tilesPerRowMobile } = config.smallMultiples || {}

  // Determine if current viewport is mobile (xs, sm) or desktop (md, lg, xl)
  const isMobile = currentViewport === 'xs' || currentViewport === 'sm'
  const tilesPerRow = isMobile ? tilesPerRowMobile : tilesPerRowDesktop

  // Ref for the container to set height dynamically
  const containerRef = useRef<HTMLDivElement>(null)

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
    const uniqueValues = Array.from(new Set(data.map(row => row[tileColumn])))
      .filter(val => val != null)
      .sort()
    tileItems = uniqueValues.map(value => ({
      key: value,
      mode: 'by-column' as const,
      tileValue: value,
      tileColumn: tileColumn
    }))
  }

  // Calculate the grid styling based on tiles per row
  const gridGap = isMobile ? '1rem' : '2rem'
  const gridStyle = {
    gridTemplateColumns: `repeat(${tilesPerRow}, 1fr)`,
    gap: gridGap
  }

  const [tileHeights, setTileHeights] = useState<Record<string, number>>({})

  const numberOfRows = Math.ceil(tileItems.length / tilesPerRow)

  // Handle tile height changes from ResizeObserver
  const handleTileHeightChange = (tileKey: string, height: number) => {
    setTileHeights(prev => ({ ...prev, [tileKey]: height }))
  }

  // Calculate container height from measured tile heights
  useEffect(() => {
    if (!containerRef.current) return

    const measuredHeights = Object.values(tileHeights)
    if (measuredHeights.length === 0) {
      return
    }

    const maxTileHeight = Math.max(...measuredHeights)
    const gapSize = isMobile ? 18 : 36
    const totalGapsHeight = (numberOfRows - 1) * (gapSize + 36) // 36 is padding on .small-multiples-container
    const containerPadding = 36 // Padding on .small-multiple-tile
    const totalHeight = numberOfRows * maxTileHeight + totalGapsHeight + containerPadding

    containerRef.current.style.height = `${totalHeight}px`
  }, [tileHeights, numberOfRows, isMobile])

  if (tileItems.length === 0) {
    return null
  }

  return (
    <div ref={containerRef} className='small-multiples-container'>
      <div className='small-multiples-grid' style={gridStyle}>
        {tileItems.map((item, index) => {
          // Determine if this tile is the first in its row
          const isFirstInRow = index % tilesPerRow === 0
          // Determine if axis labels should be shown on this tile
          const showAxisLabels = config.smallMultiples?.showAllAxisLabels || isFirstInRow

          return (
            <SmallMultipleTile
              key={item.key}
              tileKey={String(item.key)}
              mode={item.mode}
              seriesKey={item.seriesKey}
              tileValue={item.tileValue}
              tileColumn={item.tileColumn}
              config={config}
              data={data}
              svgRef={svgRef}
              parentWidth={parentWidth}
              parentHeight={parentHeight}
              tilesPerRow={tilesPerRow}
              showAxisLabels={showAxisLabels}
              onHeightChange={handleTileHeightChange}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SmallMultiplesRenderer
