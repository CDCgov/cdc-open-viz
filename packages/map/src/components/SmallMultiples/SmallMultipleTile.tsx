import React, { useContext, useMemo, useRef, useState, useEffect } from 'react'
import { MapConfig, DataRow } from '../../types/MapConfig'
import { getTileData, getTileDisplayTitle } from '../../helpers/smallMultiplesHelpers'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import ConfigContext from '../../context'
import { MapContext } from '../../types/MapContext'
import { DimensionsType } from '@cdc/core/types/Dimensions'
import generateRuntimeData from '../../helpers/generateRuntimeData'
import UsaMap from '../UsaMap'
import WorldMap from '../WorldMap'
import ResizeObserver from 'resize-observer-polyfill'
import getViewport from '@cdc/core/helpers/getViewport'
import { MapRefInterface } from '../../hooks/useProgrammaticMapTooltip'
import SynchronizedTooltip from './SynchronizedTooltip'

interface SmallMultipleTileProps {
  tileValue: string | number
  tileColumn: string
  config: MapConfig
  data: DataRow[]
  isFirstInRow?: boolean
  tilesPerRow: number
  onHeaderRef?: (ref: HTMLDivElement | null) => void
  onMapRef?: (ref: MapRefInterface | null) => void
  onMapHover?: (geoId: string | null, yCoordinate?: number) => void
}

const SmallMultipleTile: React.FC<SmallMultipleTileProps> = ({
  tileValue,
  tileColumn,
  config,
  data,
  isFirstInRow,
  tilesPerRow,
  onHeaderRef,
  onMapRef,
  onMapHover
}) => {
  const parentContext = useContext<MapContext>(ConfigContext)
  const tileMapRef = useRef<HTMLDivElement>(null)
  const [tileDimensions, setTileDimensions] = useState<DimensionsType>([0, 0])
  const mapRefForSync = useRef<MapRefInterface | null>(null)

  // Generate unique tooltip ID for this tile to ensure each tile has its own ReactTooltip instance
  const tileTooltipId = useMemo(() => {
    return `${parentContext.tooltipId}-tile-${String(tileValue).replace(/[^a-zA-Z0-9]/g, '_')}`
  }, [parentContext.tooltipId, tileValue])

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

  // Notify parent when map ref is ready
  useEffect(() => {
    if (onMapRef && mapRefForSync.current) {
      onMapRef(mapRefForSync.current)
    }
    return () => {
      if (onMapRef) {
        onMapRef(null)
      }
    }
  }, [onMapRef, tileValue])

  // Create tile-specific context with filtered config, filtered runtimeData, and tile dimensions
  // Parent's runtimeLegend is already unified (forced in CdcMapComponent for small multiples)
  const tileContext: MapContext = useMemo(
    () => ({
      ...parentContext,
      config: tileConfig,
      runtimeData: tileRuntimeData as any,
      dimensions: tileDimensions,
      vizViewport: getViewport(tileDimensions[0]),
      useDynamicViewbox,
      // Override tooltipId with unique tile-specific ID
      tooltipId: tileTooltipId,
      // Small multiples synchronization: pass wrapped callback
      handleSmallMultipleHover: onMapHover,
      // Internal: ref for programmatic tooltip control
      mapRefForSync
    }),
    [parentContext, tileConfig, tileRuntimeData, tileDimensions, useDynamicViewbox, tileTooltipId, onMapHover]
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
          {config.general.geoType === 'us-county' && <UsaMap.County />}
          {config.general.geoType === 'world' && <WorldMap />}
        </ConfigContext.Provider>

        {/* Custom tooltip component that responds to both natural and synthetic events */}
        {!window.matchMedia('(any-hover: none)').matches && config.tooltips.appearanceType === 'hover' && (
          <SynchronizedTooltip
            tileTooltipId={tileTooltipId}
            opacity={config.tooltips.opacity}
            containerRef={tileMapRef}
          />
        )}
      </div>
    </div>
  )
}

export default SmallMultipleTile
