import type { LocationHighlighter, MapConfig } from '../types/MapConfig'
import { stateKeys, territoryKeys, countryKeys, cityKeys } from '../data/supported-geos'
import { displayGeoName } from './displayGeoName'

/** Read settings after config defaults have been applied. */
export const getLocationHighlighter = (config: Pick<MapConfig, 'locationHighlighter'>): Required<LocationHighlighter> =>
  ({
    ...config.locationHighlighter,
    position: config.locationHighlighter.position === 'below' ? 'below' : 'above'
  } as Required<LocationHighlighter>)

export const isLocationHighlighterEligible = (config: MapConfig) =>
  config.general.type === 'data' &&
  ['us', 'world'].includes(config.general.geoType) &&
  config.smallMultiples?.mode !== 'by-column'

export type LocationOption = { id: string; label: string }

/** Runtime keys are canonical IDs and already reflect filters and the current playback frame. */
export const buildLocationOptions = (config: MapConfig, runtimeData: Record<string, any>): LocationOption[] => {
  if (!isLocationHighlighterEligible(config)) return []
  const world = config.general.geoType === 'world'
  const recognized = world ? [...countryKeys, ...cityKeys] : [...stateKeys, ...territoryKeys, ...cityKeys]
  const picked = config.general.countriesPicked ?? []
  const column = getLocationHighlighter(config).filterColumn
  return Object.keys(runtimeData ?? {})
    .filter(id => recognized.includes(id))
    .filter(
      id =>
        !world ||
        cityKeys.includes(id) ||
        !config.general.hideUnselectedCountries ||
        !picked.length ||
        picked.some(country => country.iso === id)
    )
    .filter(id => {
      const value = runtimeData[id]?.[column]
      return !column || (value != null && (typeof value !== 'string' || value.trim() !== ''))
    })
    .map(id => {
      const row = runtimeData[id]
      const displayColumn = config.columns.geo.displayColumn
      return {
        id,
        label: displayGeoName(id, displayColumn ? row[displayColumn] : undefined, config.locale)
      }
    })
    .sort((a, b) => a.label.localeCompare(b.label, config.locale) || a.id.localeCompare(b.id))
}
