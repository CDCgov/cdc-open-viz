import React, { useContext, useMemo, useRef, useEffect } from 'react'
import SmallMultipleTile from './SmallMultipleTile'
import ConfigContext from '../../context'
import { MapContext } from '../../types/MapContext'
import { getTileValues, applyTileOrder } from '../../helpers/smallMultiplesHelpers'
import { isMobileSmallMultiplesViewport } from '@cdc/core/helpers/viewports'
import './SmallMultiples.css'

interface SmallMultiplesProps {}

const SmallMultiples: React.FC<SmallMultiplesProps> = () => {
  const { config, currentViewport } = useContext<MapContext>(ConfigContext)

  const { mode, tileColumn, tilesPerRowDesktop, tilesPerRowMobile, tileOrderType, tileOrder, tileTitles } =
    config.smallMultiples || {}

  const data = config.data || []

  const isMobile = isMobileSmallMultiplesViewport(currentViewport)
  const tilesPerRow = isMobile ? tilesPerRowMobile || 1 : tilesPerRowDesktop || 3

  const rawTileValues = useMemo(() => {
    return getTileValues(data, tileColumn)
  }, [data, tileColumn])

  const orderedTileValues = useMemo(() => {
    return applyTileOrder(rawTileValues, tileOrderType, tileOrder, tileTitles)
  }, [rawTileValues, tileOrderType, tileOrder, tileTitles])

  // Refs to all tile header elements for height alignment
  const headerRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Align tile header heights per row
  useEffect(() => {
    const headerEntries = Object.entries(headerRefs.current).filter(([_, ref]) => ref) as Array<
      [string, HTMLDivElement]
    >
    if (headerEntries.length === 0) return

    // Group headers by row based on their index in orderedTileValues
    const headersByRow: Array<Array<HTMLDivElement>> = []

    orderedTileValues.forEach((tileValue, index) => {
      const rowIndex = Math.floor(index / tilesPerRow)
      const header = headerRefs.current[String(tileValue)]

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
  }, [orderedTileValues, tilesPerRow])

  // Calculate grid styling
  const gridGap = isMobile ? '1rem' : '2rem'
  const gridStyle = {
    gridTemplateColumns: `repeat(${tilesPerRow}, 1fr)`,
    gap: gridGap
  }

  return (
    <div className='small-multiples-container mt-4'>
      <div className='small-multiples-grid' style={gridStyle}>
        {orderedTileValues.map((tileValue, index) => (
          <SmallMultipleTile
            key={String(tileValue)}
            tileValue={tileValue}
            tileColumn={tileColumn}
            config={config}
            data={data}
            isFirstInRow={index % tilesPerRow === 0}
            tilesPerRow={tilesPerRow}
            onHeaderRef={ref => {
              headerRefs.current[String(tileValue)] = ref
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default SmallMultiples
