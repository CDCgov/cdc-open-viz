import { FREELY_ASSOCIATED_STATE_UIDS } from '../../../helpers/freelyAssociatedStateUIDs'

export const COUNTY_TERRITORY_STATE_ID_TO_UID: Record<string, string> = {
  '60': 'US-AS',
  '66': 'US-GU',
  '69': 'US-MP',
  '72': 'US-PR',
  '78': 'US-VI'
}

export const COUNTY_TERRITORY_UIDS = Object.values(COUNTY_TERRITORY_STATE_ID_TO_UID)

export const COUNTY_TERRITORY_GROUPS = [
  { territoryId: 'US-AS', stateId: '60', group: 'territory' },
  { territoryId: 'US-GU', stateId: '66', group: 'territory' },
  { territoryId: 'US-MP', stateId: '69', group: 'territory' },
  { territoryId: 'US-PR', stateId: '72', group: 'territory' },
  { territoryId: 'US-VI', stateId: '78', group: 'territory' },
  { territoryId: 'US-FM', stateId: 'US-FM', group: 'freely-associated' },
  { territoryId: 'US-MH', stateId: 'US-MH', group: 'freely-associated' },
  { territoryId: 'US-PW', stateId: 'US-PW', group: 'freely-associated' }
] as const

const countyTerritoryPrefixes = new Set(Object.keys(COUNTY_TERRITORY_STATE_ID_TO_UID))
const countyTerritoryStateIds = new Set([
  ...Object.keys(COUNTY_TERRITORY_STATE_ID_TO_UID),
  ...FREELY_ASSOCIATED_STATE_UIDS
])

export const getCountyTerritoryUidForCountyId = (countyId?: string): string | undefined => {
  if (!countyId) return undefined

  if (FREELY_ASSOCIATED_STATE_UIDS.includes(countyId)) {
    return countyId
  }

  const countyPrefix = String(countyId).slice(0, 2)
  return COUNTY_TERRITORY_STATE_ID_TO_UID[countyPrefix]
}

export const isCountyTerritoryCountyId = (countyId?: string): boolean => {
  if (!countyId) return false
  if (FREELY_ASSOCIATED_STATE_UIDS.includes(countyId)) return true
  return countyTerritoryPrefixes.has(String(countyId).slice(0, 2))
}

export const isCountyTerritoryStateId = (stateId?: string): boolean => {
  if (!stateId) return false
  return countyTerritoryStateIds.has(String(stateId))
}
