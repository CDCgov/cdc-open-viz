import { useEffect, useMemo, useRef } from 'react'
import type { DataRow, MapConfig } from '../types/MapConfig'
import type { VizFilter } from '@cdc/core/types/VizFilter'
import { getLocationHighlighter, isLocationHighlighterEligible } from '../helpers/locationHighlighter'

type LocationHighlighterData = {
  config: MapConfig
  runtimeData: Record<string, DataRow>
  sourceData: DataRow[]
  runtimeFilters: VizFilter[]
}

type LocationHighlighterDataInput = Omit<LocationHighlighterData, 'runtimeData'> & { runtimeData: unknown }

/** Adapt the map's runtime lifecycle without exposing filter payloads to the selector. */
export const useLocationHighlighterData = ({
  config,
  runtimeData,
  sourceData,
  runtimeFilters
}: LocationHighlighterDataInput): LocationHighlighterData | null => {
  const enabled = isLocationHighlighterEligible(config) && getLocationHighlighter(config).enabled
  const lastData = useRef<LocationHighlighterData | null>(null)
  const currentData = useMemo(() => {
    // Legacy year/filter changes temporarily put a filter array in runtimeData.
    // Generated geography data is a record, including when the completed result is empty.
    if (!runtimeData || typeof runtimeData !== 'object' || Array.isArray(runtimeData) || 'init' in runtimeData) {
      return null
    }
    return { config, runtimeData: runtimeData as Record<string, DataRow>, sourceData, runtimeFilters }
  }, [config, runtimeData, sourceData, runtimeFilters])

  useEffect(() => {
    if (!enabled) lastData.current = null
    else if (currentData) lastData.current = currentData
  }, [enabled, currentData])

  if (!enabled) return null
  // Hold all selector inputs together so old options cannot mix with new-year details.
  return currentData ?? lastData.current
}
