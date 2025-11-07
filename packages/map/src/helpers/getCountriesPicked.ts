import { supportedCountries } from '../data/supported-geos'
import type { MapConfig } from '../types/MapConfig'

export interface CountryPickedInfo {
  iso: string
  name: string
}

export const getCountriesPicked = (config: MapConfig): CountryPickedInfo[] => {
  if (!config.general.countriesPicked || config.general.countriesPicked.length === 0) {
    return []
  }

  return config.general.countriesPicked.map(country => {
    // Validate that the ISO code exists in our supported countries
    if (!supportedCountries[country.iso]) {
      console.error(`Country ISO code "${country.iso}" not found in supported countries.`)
    }

    return {
      iso: country.iso,
      name: country.name
    }
  })
}

/**
 * ISO codes that are in supported-geos.js but don't have geometries in world-topo.json
 * These are filtered out to prevent users from selecting countries that won't render
 */
const EXCLUDED_ISOS = new Set([
  // US Territories (not in topology - grouped with USA or missing)
  'ASM',
  'GUM',
  'MNP',
  'VIR',
  // Small territories/islands without separate geometries
  'ALA',
  'AIA',
  'AND',
  'ABW',
  'BES',
  'BMU',
  'BVT',
  'CXR',
  'CCK',
  'COK',
  'CUW',
  'FRO',
  'GGY',
  'HMD',
  'IMN',
  'JEY',
  'LIE',
  'MCO',
  'MSR',
  'NRU',
  'NIU',
  'NFK',
  'PCN',
  'SGS',
  'SJM',
  'TKL',
  'TCA',
  'TUV',
  'VAT',
  'WLF'
])

/**
 * Helper to get all supported countries formatted for dropdown options
 * Filters to only valid ISO 3166-1 alpha-3 codes and removes countries without topology
 */
export const getSupportedCountryOptions = () => {
  return Object.keys(supportedCountries)
    .filter(iso => /^[A-Z]{3}$/.test(iso)) // Only proper 3-letter ISO codes
    .filter(iso => !EXCLUDED_ISOS.has(iso)) // Exclude countries without topology
    .map(iso => ({
      value: iso,
      label: supportedCountries[iso][0] // Use the first (primary) name
    }))
    .sort((a, b) => a.label.localeCompare(b.label)) // Sort alphabetically by name
}

/**
 * Helper to determine if the map should show only selected countries
 * Returns true if countries are selected, false if showing all countries
 */
export const isMultiCountryActive = (config: MapConfig): boolean => {
  return Boolean(config.general.countriesPicked && config.general.countriesPicked.length > 0)
}

/**
 * Helper to determine display mode for unselected countries
 * Returns 'hidden' if showWholeMap is false, 'grayed' if true
 */
export const getUnselectedCountryDisplayMode = (config: MapConfig): 'hidden' | 'grayed' | 'normal' => {
  if (!isMultiCountryActive(config)) {
    return 'normal' // Show all countries normally when none are specifically selected
  }

  return config.general.showWholeMap ? 'grayed' : 'hidden'
}
