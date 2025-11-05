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
 * @param {boolean} [convertFipsCodes=true] - Whether to convert FIPS codes.
 * @returns {string} - The display name for the geographic key.
 */
export const displayGeoName = (key: string, convertFipsCodes = true): string => {
  if (!convertFipsCodes) return key
  let value = key
  let wasLookedUp = false

  // Map to first item in values array which is the preferred label
  if (stateKeys.includes(value)) {
    value = titleCase(supportedStates[key][0])
    wasLookedUp = true
  }

  if (territoryKeys.includes(value)) {
    value = titleCase(supportedTerritories[key][0])
    wasLookedUp = true
    if (value === 'U.s. Virgin Islands') {
      value = 'U.S. Virgin Islands'
    }
  }

  if (countryKeys.includes(value)) {
    value = titleCase(supportedCountries[key][0])
    wasLookedUp = true
  }

  if (countyKeys.includes(value)) {
    value = titleCase(supportedCounties[key])
    wasLookedUp = true
  }

  if (cityKeys.includes(value)) {
    value = titleCase(String(value) || '')
    wasLookedUp = true
  }

  const dict = {
    'Washington D.C.': 'District of Columbia',
    'WASHINGTON DC': 'District of Columbia',
    DC: 'District of Columbia',
    'WASHINGTON DC.': 'District of Columbia',
    Congo: 'Republic of the Congo'
  }

  if (Object.keys(dict).includes(value)) {
    value = dict[value]
    wasLookedUp = true
  }

  // If value was looked up from our dictionaries and needs formatting, or if it's a 2-letter abbreviation, return as-is
  if (value?.length === 2 || value === 'U.S. Virgin Islands' || wasLookedUp) {
    return value
  } else {
    // Value is user data that wasn't in our lookups - return as-is to preserve original formatting
    return value
  }
}
