export const US_TERRITORY_STATE_FIPS_PREFIXES = new Set(['60', '66', '69', '72', '78'])

export type CountyTerritoryVisibility = {
  showTerritories: boolean
  showAllTerritories: boolean
  statePrefixes: Set<string>
  countyIds: Set<string>
  key: string
}

export const getCountyTerritoryVisibility = (
  territoriesAlwaysShow: boolean | undefined,
  runtimeData?: Record<string, any>
): CountyTerritoryVisibility => {
  const countyIds = new Set<string>()
  const statePrefixes = new Set<string>()

  if (runtimeData) {
    Object.keys(runtimeData).forEach(key => {
      if (key.length <= 2) return

      const statePrefix = key.slice(0, 2)
      if (!US_TERRITORY_STATE_FIPS_PREFIXES.has(statePrefix)) return

      countyIds.add(key)
      statePrefixes.add(statePrefix)
    })
  }

  const showAllTerritories = territoriesAlwaysShow === true
  const showTerritories = showAllTerritories || (territoriesAlwaysShow !== false && countyIds.size > 0)
  const key = showAllTerritories
    ? 'true:all'
    : `${showTerritories}:${showTerritories ? Array.from(countyIds).sort().join(',') : ''}`

  return {
    showTerritories,
    showAllTerritories,
    statePrefixes,
    countyIds,
    key
  }
}
