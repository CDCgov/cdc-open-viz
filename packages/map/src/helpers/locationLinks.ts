import type { LocationLinks, MapConfig } from '../types/MapConfig'

export const getLocationLinks = (config: Pick<MapConfig, 'locationLinks'>): Required<LocationLinks> =>
  config.locationLinks as Required<LocationLinks>

export const hasLocationLinkColumn = (config: Pick<MapConfig, 'columns'>): boolean =>
  typeof config.columns.navigate?.name === 'string' && !!config.columns.navigate.name.trim()

export const canNavigateMap = (config: MapConfig) =>
  config.general.type !== 'data' || (hasLocationLinkColumn(config) && getLocationLinks(config).enableMapNavigation)
