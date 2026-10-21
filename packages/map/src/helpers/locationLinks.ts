import type { LocationLinks, MapConfig } from '../types/MapConfig'
import { stateKeys, territoryKeys, countryKeys } from '../data/supported-geos'
import { displayGeoName } from './displayGeoName'

type EffectiveLocationLinks = Required<Omit<LocationLinks, 'selector'>> & {
  selector: Required<NonNullable<LocationLinks['selector']>>
}

/** Read runtime settings after applyConfigDefaults or createNewMapConfig has prepared the config. */
export const getLocationLinks = (config: Pick<MapConfig, 'locationLinks'>): EffectiveLocationLinks => {
  const links = config.locationLinks as EffectiveLocationLinks
  return {
    ...links,
    selector: {
      ...links.selector,
      position: links.selector.position === 'above' ? 'above' : 'below'
    }
  }
}

export const isLocationSelectorEligible = (config: MapConfig) =>
  config.general.type === 'data' &&
  ['us', 'world'].includes(config.general.geoType) &&
  config.smallMultiples?.mode !== 'by-column'

export const hasLocationLinkColumn = (config: Pick<MapConfig, 'columns'>): boolean =>
  typeof config.columns.navigate?.name === 'string' && !!config.columns.navigate.name.trim()

export const canNavigateMap = (config: MapConfig) =>
  config.general.type !== 'data' || (hasLocationLinkColumn(config) && getLocationLinks(config).enableMapNavigation)

export type LocationOption = { id: string; label: string; url?: string }

/** Runtime keys are canonical IDs and already reflect filters and the current playback frame. */
export const buildLocationOptions = (config: MapConfig, runtimeData: Record<string, any>): LocationOption[] => {
  if (!isLocationSelectorEligible(config)) return []
  const world = config.general.geoType === 'world'
  const recognized = world ? countryKeys : [...stateKeys, ...territoryKeys]
  const picked = config.general.countriesPicked ?? []
  return Object.keys(runtimeData ?? {})
    .filter(id => recognized.includes(id))
    .filter(
      id =>
        !world ||
        !config.general.hideUnselectedCountries ||
        !picked.length ||
        picked.some(country => country.iso === id)
    )
    .map(id => {
      const row = runtimeData[id]
      const urlColumn = config.columns.navigate?.name
      const displayColumn = config.columns.geo.displayColumn
      const url = urlColumn ? row[urlColumn] : undefined
      return {
        id,
        label: displayGeoName(id, displayColumn ? row[displayColumn] : undefined, config.locale),
        url: typeof url === 'string' && url.trim() ? url.trim() : undefined
      }
    })
    .sort((a, b) => a.label.localeCompare(b.label, config.locale) || a.id.localeCompare(b.id))
}
