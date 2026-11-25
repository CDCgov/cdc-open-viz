import { filterVizData } from '@cdc/core/helpers/filterVizData'
import type { VizFilter } from '@cdc/core/types/VizFilter'
import type { DataRow, MapConfig } from '../types/MapConfig'
import { addUIDs } from './addUIDs'
import { getMapRuntimeGeoColumnName } from './bubbleLayers'
import { rowMatchesRuntimeFilters } from './generateRuntimeData'

/** Preserve every matching source row; runtimeData keeps only the first row per geography. */
export const getLocationInformationRows = (
  config: MapConfig,
  sourceData: DataRow[],
  runtimeFilters: VizFilter[],
  selectedId: string
): DataRow[] => {
  if (!selectedId) return []

  // addUIDs mutates rows and array metadata. Recompute IDs on copies so aliases match
  // exactly as they do on the map, without changing source data or trusting stale IDs.
  const rows = sourceData.map(row => ({ ...row }))
  addUIDs({ ...config, data: rows }, getMapRuntimeGeoColumnName(config))
  const selectedRows = rows.filter(row => row.uid === selectedId && rowMatchesRuntimeFilters(row, runtimeFilters))
  return filterVizData(config.dashboardFilters || [], selectedRows)
}
