const US_TERRITORY_STATE_FIPS_PREFIXES = new Set(['60', '66', '69', '72', '78'])

export const getVisibleCountyTerritoryPrefixes = (runtimeData?: Record<string, any>): Set<string> => {
  if (!runtimeData) return new Set()

  return new Set(
    Object.keys(runtimeData)
      .filter(key => key.length > 2 && US_TERRITORY_STATE_FIPS_PREFIXES.has(key.slice(0, 2)))
      .map(key => key.slice(0, 2))
  )
}

export const getVisibleCountyTerritoryIds = (runtimeData?: Record<string, any>): Set<string> => {
  if (!runtimeData) return new Set()

  return new Set(
    Object.keys(runtimeData).filter(key => key.length > 2 && US_TERRITORY_STATE_FIPS_PREFIXES.has(key.slice(0, 2)))
  )
}

export const hasCountyTerritoryData = (runtimeData?: Record<string, any>): boolean => {
  return getVisibleCountyTerritoryPrefixes(runtimeData).size > 0
}

export const shouldShowCountyTerritories = (
  territoriesAlwaysShow: boolean | undefined,
  runtimeData?: Record<string, any>
): boolean => {
  return Boolean(territoriesAlwaysShow) && hasCountyTerritoryData(runtimeData)
}
