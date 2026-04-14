import { titleCase } from './titleCase'
import {
  supportedStates,
  supportedTerritories,
  supportedCountries,
  supportedCounties,
  supportedCities,
  stateKeys,
  territoryKeys,
  countryKeys,
  countyKeys,
  cityKeys
} from '../data/supported-geos'

/**
 * Converts a geographic key to its display name.
 *
 * @param {string} key - The geographic key to convert.
 * @param {string} [displayOverride] - If provided, returns this value immediately (used for translated/alternate display names).
 * @returns {string} - The display name for the geographic key.
 */
export const displayGeoName = (key: string, displayOverride?: string): string => {
  const rawKey = String(key || '')
  const trimmedOverride = typeof displayOverride === 'string' ? displayOverride.trim() : ''
  const normalizedKey = rawKey.toUpperCase()
  const normalizedOverride = trimmedOverride.toUpperCase()

  if (trimmedOverride && normalizedOverride !== normalizedKey) {
    return trimmedOverride
  }

  let value = rawKey
  let wasLookedUp = false

  // Map to first item in values array which is the preferred label
  if (stateKeys.includes(normalizedKey)) {
    value = titleCase(supportedStates[normalizedKey][0])
    wasLookedUp = true
  }

  if (territoryKeys.includes(normalizedKey)) {
    value = titleCase(supportedTerritories[normalizedKey][0])
    wasLookedUp = true
    if (value === 'U.s. Virgin Islands') {
      value = 'U.S. Virgin Islands'
    }
  }

  if (countryKeys.includes(normalizedKey)) {
    value = titleCase(supportedCountries[normalizedKey][0])
    wasLookedUp = true
  }

  if (countyKeys.includes(value)) {
    value = titleCase(supportedCounties[key])
    wasLookedUp = true
  }

  // Check dictionary replacements before city lookup to handle special cases like DC
  const dict = {
    'Washington D.C.': 'District of Columbia',
    'WASHINGTON DC': 'District of Columbia',
    DC: 'District of Columbia',
    'WASHINGTON DC.': 'District of Columbia',
    'DISTRICT OF COLUMBIA': 'District of Columbia',
    Dc: 'District of Columbia',
    Congo: 'Republic of the Congo'
  }

  if (Object.keys(dict).includes(value)) {
    value = dict[value]
    wasLookedUp = true
  }

  if (cityKeys.includes(normalizedKey)) {
    value = titleCase(String(value) || '')
    wasLookedUp = true
  }

  // If value was looked up from our dictionaries and needs formatting, or if it's a 2-letter abbreviation, return as-is
  if (value?.length === 2 || value === 'U.S. Virgin Islands' || wasLookedUp) {
    return value
  } else {
    // Apply titleCase to unrecognized values (e.g., "DISTRICT OF COLUMBIA" -> "District of Columbia")
    return titleCase(value)
  }
}
