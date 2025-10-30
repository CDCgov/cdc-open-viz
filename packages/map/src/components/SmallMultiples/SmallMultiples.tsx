import React, { useContext, useMemo, useRef, useEffect, useCallback } from 'react'
import SmallMultipleTile from './SmallMultipleTile'
import ConfigContext from '../../context'
import { MapContext } from '../../types/MapContext'
import { getTileValues, applyTileOrder } from '../../helpers/smallMultiplesHelpers'
import { isMobileSmallMultiplesViewport } from '@cdc/core/helpers/viewports'
import { MapRefInterface } from '../../hooks/useProgrammaticMapTooltip'
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

  // Refs to all tile map components for tooltip synchronization
  const tileMapRefs = useRef<Record<string, MapRefInterface | null>>({})

  // Handle tooltip synchronization across small multiple tiles
  // This follows the chart package pattern where we manage the source tile key here
  const handleMapHover = useCallback(
    (sourceTileKey: string, geoId: string | null, yCoordinate?: number) => {
      if (!config.smallMultiples?.synchronizedTooltips) {
        return
      }

      // If geoId is null, mouse left the geography - hide all tooltips
      if (geoId === null) {
        Object.entries(tileMapRefs.current).forEach(([tileKey, mapRef]) => {
          if (tileKey !== sourceTileKey && mapRef?.hideTooltip) {
            mapRef.hideTooltip()
          }
        })
        return
      }

      // Show tooltip for same geography on all other tiles
      Object.entries(tileMapRefs.current).forEach(([tileKey, mapRef]) => {
        if (tileKey === sourceTileKey || !mapRef) {
          return
        }

        if (mapRef.triggerTooltipAtGeo && yCoordinate !== undefined) {
          mapRef.triggerTooltipAtGeo(geoId, yCoordinate)
        }
      })
    },
    [config.smallMultiples?.synchronizedTooltips]
  )

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
        {orderedTileValues.map((tileValue, index) => {
          const tileKey = String(tileValue)
          return (
            <SmallMultipleTile
              key={tileKey}
              tileValue={tileValue}
              tileColumn={tileColumn}
              config={config}
              data={data}
              isFirstInRow={index % tilesPerRow === 0}
              tilesPerRow={tilesPerRow}
              onHeaderRef={ref => {
                headerRefs.current[tileKey] = ref
              }}
              onMapRef={ref => {
                tileMapRefs.current[tileKey] = ref
              }}
              onMapHover={(geoId, yCoordinate) => handleMapHover(tileKey, geoId, yCoordinate)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SmallMultiples
