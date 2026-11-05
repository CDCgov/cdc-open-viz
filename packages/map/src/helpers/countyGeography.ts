import type { MapConfig } from '../types/MapConfig'

/** The two selection checks applied by the county rendering loop. */
export const isCountyGeographyIncluded = (config: MapConfig, uid: string, filteredStateCode?: string) => {
  const hideCounty =
    !config.general.showNeighboringStates && filteredStateCode && uid.length > 2 && uid.indexOf(filteredStateCode) !== 0
  if (hideCounty) return false
  if (!filteredStateCode && config.general.type === 'us-geocode' && uid.length > 2) return false
  return true
}

/** Franklin City's broken shape is excluded during county topology preparation. */
export const isCountyShapeSupported = (uid: string) => uid !== '51620'
