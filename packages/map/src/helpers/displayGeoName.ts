import { titleCase } from './titleCase'
import { supportedStates, supportedTerritories, supportedCountries, supportedCounties } from '../data/supported-geos'

/**
 * Converts a geographic key to its display name.
 *
 * @param {string} key - The geographic key to convert.
 * @param {boolean} [convertFipsCodes=true] - Whether to convert FIPS codes.
 * @returns {string} - The display name for the geographic key.
 */
export const displayGeoName = (key: string, convertFipsCodes = true): string => {
  if (!convertFipsCodes) return key
  const stateKeys = Object.keys(supportedStates)
  const territoryKeys = Object.keys(supportedTerritories)
  const countryKeys = Object.keys(supportedCountries)
  const countyKeys = Object.keys(supportedCounties)
  let value = key

  // Map to first item in values array which is the preferred label
  if (stateKeys.includes(value)) {
    value = titleCase(supportedStates[key][0])
  }

  if (territoryKeys.includes(value)) {
    value = titleCase(supportedTerritories[key][0])
    if (value === 'U.s. Virgin Islands') {
      value = 'U.S. Virgin Islands'
    }
  }

  if (countryKeys.includes(value)) {
    value = titleCase(supportedCountries[key][0])
  }

  if (countyKeys.includes(value)) {
    value = titleCase(supportedCounties[key])
  }

  const dict = {
    'Washington D.C.': 'District of Columbia',
    'WASHINGTON DC': 'District of Columbia',
    DC: 'District of Columbia',
    'WASHINGTON DC.': 'District of Columbia',
    Congo: 'Republic of the Congo'
  }

  if (true === Object.keys(dict).includes(value)) {
    value = dict[value]
  }
  // if you get here and it's 2 letters then DONT titleCase state abbreviations like "AL"
  if (value.length === 2 || value === 'U.S. Virgin Islands') {
    return value
  } else {
    return titleCase(value)
  }
}
