import generateRuntimeData from './generateRuntimeData'
import { prepareBubbleCandidates } from './bubbleRenderData'
import {
  getBubbleLocation,
  getBubbleProjection,
  getVisibleStateTerritories,
  isTerritoryBubblePlaceable
} from './bubblePlacement'
import {
  supportedStates,
  supportedTerritories,
  supportedCounties,
  supportedStatesFipsCodes
} from '../data/supported-geos'
import { getCountyTerritoryVisibility, isCountyTerritoryGeographyIncluded } from './countyTerritories'
import { isCountyGeographyIncluded, isCountyShapeSupported } from './countyGeography'
import { getMatchingPatternForRow } from './getMatchingPatternForRow'
import { getTileData, getTileValues } from './smallMultiplesHelpers'
import type { DataRow, MapConfig, RuntimeFilters } from '../types/MapConfig'

type VisibilityInput = {
  config: MapConfig
  runtimeData?: Record<string, any>
  runtimeFilters?: RuntimeFilters
  filteredStateCode?: string
}

/** Match patterns only on geographies included by the existing map selection rules. */
const getUsedPatternIndex = (
  row: DataRow,
  uid: string,
  config: MapConfig,
  runtimeData: Record<string, any>,
  filteredStateCode?: string
): number | undefined => {
  let eligible = false
  if (config.general.geoType === 'us') {
    eligible = supportedTerritories[uid]
      ? !config.general.displayAsHex && getVisibleStateTerritories(config, runtimeData).includes(uid)
      : Boolean(supportedStates[uid])
  } else if (config.general.geoType === 'us-county') {
    eligible =
      Boolean(supportedCounties[uid] || supportedStatesFipsCodes[uid]) &&
      isCountyShapeSupported(uid) &&
      isCountyGeographyIncluded(config, uid, filteredStateCode) &&
      isCountyTerritoryGeographyIncluded(
        uid,
        getCountyTerritoryVisibility(config.general.territoriesAlwaysShow, runtimeData),
        config.migrations?.showPuertoRico
      )
  }
  if (!eligible) return undefined
  const match = getMatchingPatternForRow(row, config.map?.patterns)
  return match && ['circles', 'waves', 'diagonalLines'].includes(match.pattern.pattern) ? match.patternIndex : undefined
}

/** Usage ignores temporary legend toggles, pan, and zoom, so restore controls remain available. */
export const getOverlayLegendVisibility = ({
  config,
  runtimeData = {},
  runtimeFilters,
  filteredStateCode
}: VisibilityInput) => {
  const patternIndexes = new Set<number>()
  const bubbleLayerIndexes = new Set<number>()

  const smallMultiples = config.smallMultiples
  const views = smallMultiples?.mode
    ? getTileValues(config.data, smallMultiples.tileColumn).map(tile => ({
        ...config,
        smallMultiples: undefined,
        data: getTileData(config.data, smallMultiples.tileColumn, tile).map(row => ({ ...row }))
      }))
    : [config]
  const projection = getBubbleProjection(config.general.geoType)

  views.forEach(view => {
    // Match tile runtime generation; ordinary maps consume the current runtime view.
    const filters = smallMultiples?.mode ? view.filters || [] : ((runtimeFilters ?? config.filters ?? []) as any)
    const rows = smallMultiples?.mode
      ? generateRuntimeData(view, filters, 0, view.legend.type === 'category')
      : runtimeData
    Object.entries(rows).forEach(([uid, row]) => {
      const patternIndex = getUsedPatternIndex(row, uid, view, rows, filteredStateCode)
      if (patternIndex !== undefined) patternIndexes.add(patternIndex)
    })
    prepareBubbleCandidates({ config: view, geoType: view.general.geoType, runtimeFilters: filters }).forEach(
      candidate => {
        if (
          getBubbleLocation(candidate, view.general.geoType, projection) ||
          isTerritoryBubblePlaceable(candidate, view, rows)
        ) {
          bubbleLayerIndexes.add(candidate.layerIndex)
        }
      }
    )
  })
  return { patternIndexes, bubbleLayerIndexes }
}
