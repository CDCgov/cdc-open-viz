import React, { useContext, useMemo, useRef, useState, useEffect } from 'react'
import { MapConfig, DataRow } from '../../types/MapConfig'
import { getTileData, getTileDisplayTitle } from '../../helpers/smallMultiplesHelpers'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import ConfigContext from '../../context'
import { MapContext } from '../../types/MapContext'
import { DimensionsType } from '@cdc/core/types/Dimensions'
import generateRuntimeData from '../../helpers/generateRuntimeData'
import UsaMap from '../UsaMap'
import ResizeObserver from 'resize-observer-polyfill'
import getViewport from '@cdc/core/helpers/getViewport'

interface SmallMultipleTileProps {
  tileValue: string | number
  tileColumn: string
  config: MapConfig
  data: DataRow[]
  isFirstInRow?: boolean
  tilesPerRow: number
  onHeaderRef?: (ref: HTMLDivElement | null) => void
}

const SmallMultipleTile: React.FC<SmallMultipleTileProps> = ({
  tileValue,
  tileColumn,
  config,
  data,
  isFirstInRow,
  tilesPerRow,
  onHeaderRef
}) => {
  const parentContext = useContext<MapContext>(ConfigContext)
  const tileMapRef = useRef<HTMLDivElement>(null)
  const [tileDimensions, setTileDimensions] = useState<DimensionsType>([0, 0])

  // Measure this tile's actual dimensions for pattern stroke calculation
  useEffect(() => {
    if (!tileMapRef.current) return

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect
        setTileDimensions([width, height])
      }
    })

    resizeObserver.observe(tileMapRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const tileData = useMemo(() => getTileData(data, tileColumn, tileValue), [data, tileColumn, tileValue])

  const tileTitle = useMemo(
    () => getTileDisplayTitle(tileValue, config.smallMultiples?.tileTitles),
    [tileValue, config.smallMultiples?.tileTitles]
  )

  // Clone config and modify for this tile
  const tileConfig = useMemo(() => {
    let clonedConfig = cloneConfig(config) as MapConfig

    // Remove smallMultiples config to prevent infinite loop
    clonedConfig.smallMultiples = undefined

    // Hide the main title on individual tiles
    if (clonedConfig.general) {
      clonedConfig.general.showTitle = false
    }

    // CRITICAL: Force unified legend for small multiples
    // This ensures the legend is generated from ALL data (all pathogens), not just this tile's data
    if (clonedConfig.legend) {
      clonedConfig.legend.unified = true
    }

    // Replace data with filtered tile data
    clonedConfig.data = tileData

    return clonedConfig
  }, [config, tileData])

  // Generate tile-specific runtimeData from filtered data
  const tileRuntimeData = useMemo(() => {
    if (!tileData || tileData.length === 0) return {}

    const isCategoryLegend = tileConfig?.legend?.type === 'category'
    const hash = Math.random()

    return generateRuntimeData(tileConfig, tileConfig.filters || [], hash, isCategoryLegend, false)
  }, [tileConfig, tileData])

  const useDynamicViewbox = config.general.geoType === 'single-state' && tilesPerRow > 1

  // Create tile-specific context with filtered config, filtered runtimeData, and tile dimensions
  // Parent's runtimeLegend is already unified (forced in CdcMapComponent for small multiples)
  const tileContext: MapContext = useMemo(
    () => ({
      ...parentContext,
      config: tileConfig,
      runtimeData: tileRuntimeData as any,
      dimensions: tileDimensions,
      vizViewport: getViewport(tileDimensions[0]),
      useDynamicViewbox
    }),
    [parentContext, tileConfig, tileRuntimeData, tileDimensions, useDynamicViewbox]
  )

  return (
    <div className='small-multiple-tile'>
      <div ref={onHeaderRef} className='tile-header'>
        <div className='tile-title'>{tileTitle}</div>
      </div>
      <div className='tile-map' ref={tileMapRef}>
        <ConfigContext.Provider value={tileContext}>
          {config.general.geoType === 'us' && <UsaMap.State />}
          {config.general.geoType === 'single-state' && <UsaMap.SingleState />}
          {config.general.geoType === 'us-region' && <UsaMap.Region />}
        </ConfigContext.Provider>
      </div>
    </div>
  )
}

export default SmallMultipleTile
