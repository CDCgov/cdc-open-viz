import {
  supportedCities,
  supportedCounties,
  supportedCountries,
  supportedRegions,
  supportedStates,
  supportedTerritories,
  stateKeys,
  territoryKeys,
  regionKeys,
  countryKeys,
  countyKeys,
  cityKeys
} from './../data/supported-geos'

import { SUPPORTED_DC_NAMES, GEO_TYPES, GEOCODE_TYPES } from './constants'
import { DataRow, MapConfig } from '../types/MapConfig'
import { MapColumns } from '../types/MapColumns'

// Note: Key arrays are now imported from supported-geos for better performance

type GeoLookup = {
  keys: string[]
  data: Record<string, string[]>
}

const geoLookups: Record<string, GeoLookup> = {
  state: { keys: stateKeys, data: supportedStates },
  territory: { keys: territoryKeys, data: supportedTerritories },
  region: { keys: regionKeys, data: supportedRegions },
  country: { keys: countryKeys, data: supportedCountries }
}

const memoizedFindUID = (geoName: string, type: keyof typeof geoLookups): string | undefined => {
  const lookup = geoLookups[type]
  return lookup.keys.find(key => lookup.data[key].includes(geoName))
}

const hasValidCoordinates = (row: DataRow, columns: MapColumns): boolean => {
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
  return cityKeys.find(key => key === geoName.toUpperCase())
}

const handleDCDisplay = (geoName: string, displayAsHex: boolean): string | null => {
  if (displayAsHex && SUPPORTED_DC_NAMES.includes(geoName as (typeof SUPPORTED_DC_NAMES)[number])) {
    return 'US-DC'
  }
  return null
}

const handleUSLocation = (row: DataRow, geoColumn: string, displayAsHex: boolean): string | null => {
  const geoName = normalizeGeoName(row[geoColumn])

  let uid = memoizedFindUID(geoName, 'state')
  if (!uid) {
    uid = memoizedFindUID(geoName, 'territory')
  }

  if (!uid) uid = handleDCDisplay(geoName, displayAsHex)
  if (!uid) uid = findCityUID(geoName)

  return uid
}

const handleWorldLocation = (row: DataRow, geoColumn: string, isWorldGeocodeType: boolean): string | null => {
  const geoName = normalizeGeoName(row[geoColumn])
  let uid = memoizedFindUID(geoName, 'country')
  if (!uid && (isWorldGeocodeType || geoName)) {
    uid = findCityUID(geoName)
  }

  return uid
}

const handleCountyLocation = (row: DataRow, geoColumn: string): string | undefined => {
  const fips = row[geoColumn]
  return countyKeys.find(key => key === fips)
}

const setRowUID = (row: DataRow, uid: string | null): void => {
  if (uid) {
    Object.defineProperty(row, 'uid', {
      value: uid,
      writable: true
    })
  }
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
    if (row.uid) {
      row.uid = null // Reset existing UID
    }

    if (!geo.name) return

    switch (geoType) {
      case GEO_TYPES.US:
        uid = handleUSLocation(row, geo.name, displayAsHex)
        break

      case GEO_TYPES.US_REGION:
        uid = memoizedFindUID(normalizeGeoName(row[geo.name]), 'region')
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
