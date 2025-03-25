import {
  supportedCities,
  supportedCounties,
  supportedCountries,
  supportedRegions,
  supportedStates,
  supportedTerritories
} from './../data/supported-geos'

// Data props
const stateKeys = Object.keys(supportedStates)
const territoryKeys = Object.keys(supportedTerritories)
const regionKeys = Object.keys(supportedRegions)
const countryKeys = Object.keys(supportedCountries)
const countyKeys = Object.keys(supportedCounties)
const cityKeys = Object.keys(supportedCities)

// Tag each row with a UID. Helps with filtering/placing geos. Not enumerable so doesn't show up in loops/console logs except when directly addressed ex row.uid
// We are mutating state in place here (depending on where called) - but it's okay, this isn't used for rerender
export const addUIDs = (configObj, fromColumn) => {
  const { general, columns, data } = configObj
  const { displayAsHex, geoType } = general
  const { geo } = columns

  data.forEach(row => {
    let uid = null

    if (row.uid) row.uid = null // Wipe existing UIDs

    // United States check
    if ('us' === geoType && geo.name) {
      let geoName = ''
      if (row[geo.name] !== undefined && row[geo.name] !== null) {
        geoName = String(row[geo.name])
        geoName = geoName.toUpperCase()
      }

      // States
      uid = stateKeys.find(key => supportedStates[key].includes(geoName))

      // Territories
      if (!uid) {
        uid = territoryKeys.find(key => supportedTerritories[key].includes(geoName))
      }

      // Cities
      if (!uid && geoName) {
        uid = cityKeys.find(key => key === geoName.toUpperCase())
      }

      if (displayAsHex) {
        const upperCaseKey = geoName.toUpperCase()
        const supportedDc = [
          'WASHINGTON D.C.',
          'DISTRICT OF COLUMBIA',
          'WASHINGTON DC',
          'DC',
          'WASHINGTON DC.',
          'D.C.',
          'D.C'
        ]
        if (supportedDc.includes(upperCaseKey)) {
          uid = 'US-DC'
        }
      }
    }

    if ('us-region' === geoType && geo.name) {
      // const geoName = row[configObj.columns.geo.name] && typeof row[configObj.columns.geo.name] === "string" ? row[configObj.columns.geo.name].toUpperCase() : '';
      let geoName = ''

      if (row[geo.name] !== undefined && row[geo.name] !== null) {
        geoName = String(row[geo.name])
        geoName = geoName.toUpperCase()
      }

      // Regions
      uid = regionKeys.find(key => supportedRegions[key].includes(geoName))
    }

    // World Check
    if ('world' === geoType) {
      const geoName = row[geo.name]

      uid = countryKeys.find(key => supportedCountries[key].includes(geoName))

      // Cities
      if (!uid && 'world-geocode' === general.type) {
        uid = cityKeys.find(key => key === geoName?.toUpperCase())
      }

      // Cities
      if (!uid && geoName) {
        uid = cityKeys.find(key => key === geoName.toUpperCase())
      }
    }

    // County Check
    if (('us-county' === geoType || 'single-state' === geoType) && 'us-geocode' !== general.type) {
      const fips = row[geo.name]
      uid = countyKeys.find(key => key === fips)
    }

    if ('us-geocode' === general.type) {
      uid = row[geo.name]
    }

    if (
      !uid &&
      columns.latitude?.name &&
      columns.longitude?.name &&
      row[columns.latitude?.name] &&
      row[columns.longitude?.name]
    ) {
      uid = `${row[geo.name]}`
    }

    if (uid) {
      Object.defineProperty(row, 'uid', {
        value: uid,
        writable: true
      })
    }
  })

  configObj.data.fromColumn = fromColumn
}
