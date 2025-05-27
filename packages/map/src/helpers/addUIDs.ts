import {
  supportedCities,
  supportedCounties,
  supportedCountries,
  supportedRegions,
  supportedStates,
  supportedTerritories
} from './../data/supported-geos'

import { SUPPORTED_DC_NAMES, GEO_TYPES, GEOCODE_TYPES } from './constants'
import { DataRow, MapConfig } from '../types/MapConfig'

// Build lookup maps and sets for O(1) access
const stateMap = Object.create(null)
const territoryMap = Object.create(null)
const regionMap = Object.create(null)
const countryMap = Object.create(null)
const countySet = new Set(Object.keys(supportedCounties))
const citySet = new Set(Object.keys(supportedCities))
const dcNameSet = new Set(SUPPORTED_DC_NAMES.map(n => n.toUpperCase()))

for (const key of Object.keys(supportedStates)) {
  for (const name of supportedStates[key]) {
    stateMap[name.toUpperCase()] = key
  }
}
for (const key of Object.keys(supportedTerritories)) {
  for (const name of supportedTerritories[key]) {
    territoryMap[name.toUpperCase()] = key
  }
}
for (const key of Object.keys(supportedRegions)) {
  for (const name of supportedRegions[key]) {
    regionMap[name.toUpperCase()] = key
  }
}
for (const key of Object.keys(supportedCountries)) {
  for (const name of supportedCountries[key]) {
    countryMap[name.toUpperCase()] = key
  }
}

const hasValidCoordinates = (row: Row, columns: GeoConfig['columns']): boolean => {
  return !!(
    columns.latitude?.name &&
    columns.longitude?.name &&
    row[columns.latitude.name] &&
    row[columns.longitude.name]
  )
}

const normalizeGeoName = (value: unknown): string => {
  if (value == null) return ''
  return String(value).toUpperCase()
}

const findCityUID = (geoName: string): string | undefined => {
  if (!geoName) return undefined
  const norm = geoName.toUpperCase()
  return citySet.has(norm) ? norm : undefined
}

const handleDCDisplay = (geoName: string, displayAsHex: boolean): string | null => {
  if (displayAsHex && dcNameSet.has(geoName.toUpperCase())) {
    return 'US-DC'
  }
  return null
}

const handleUSLocation = (row: DataRow, geoColumn: string, displayAsHex: boolean): string | null => {
  const geoName = normalizeGeoName(row[geoColumn])
  let uid = stateMap[geoName]
  if (!uid) uid = territoryMap[geoName]
  if (!uid) uid = findCityUID(geoName)
  if (!uid) uid = handleDCDisplay(geoName, displayAsHex)
  return uid
}

const handleWorldLocation = (row: DataRow, geoColumn: string, isWorldGeocodeType: boolean): string | null => {
  const geoName = normalizeGeoName(row[geoColumn])
  let uid = countryMap[geoName]
  if (!uid && (isWorldGeocodeType || geoName)) {
    uid = findCityUID(geoName)
  }
  return uid
}

const handleCountyLocation = (row: DataRow, geoColumn: string): string | undefined => {
  const fips = row[geoColumn]
  return countySet.has(fips) ? fips : undefined
}

const setRowUID = (row: DataRow, uid: string | null): void => {
  row.uid = uid || null
}

/**
 * Adds unique identifiers to geographic data rows based on their location type and name.
 * @param {MapConfig} configObj - Configuration object containing data and processing rules
 * @param {string} fromColumn - Source column identifier
 * @throws {Error} When configuration is invalid or required data is missing
 */
export const addUIDs = (configObj: MapConfig, fromColumn: string) => {
  const { general, columns, data } = configObj
  const { displayAsHex, geoType, type: geocodeType } = general
  const { geo } = columns

  data.forEach(row => {
    let uid = null
    row.uid = null // Reset existing UID

    if (!geo.name) return

    switch (geoType) {
      case GEO_TYPES.US:
        uid = handleUSLocation(row, geo.name, displayAsHex)
        break
      case GEO_TYPES.US_REGION:
        uid = regionMap[normalizeGeoName(row[geo.name])]
        break
      case GEO_TYPES.WORLD:
        uid = handleWorldLocation(row, geo.name, geocodeType === GEOCODE_TYPES.WORLD)
        break
      case GEO_TYPES.US_COUNTY:
      case GEO_TYPES.SINGLE_STATE:
        if (geocodeType !== GEOCODE_TYPES.US) {
          uid = handleCountyLocation(row, geo.name)
        }
        break
    }

    // Handle special cases
    if (!uid) {
      if (geocodeType === GEOCODE_TYPES.US) {
        uid = row[geo.name]
      } else if (hasValidCoordinates(row, columns)) {
        uid = `${row[geo.name]}`
      }
    }

    setRowUID(row, uid)
  })

  configObj.data.fromColumn = fromColumn
}
