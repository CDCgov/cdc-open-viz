import { MapConfig } from '../types/MapConfig'

/**
 * Validates and ensures proper formatting of FIPS codes in the provided `MapConfig` object.
 *
 * - If the `geoType` is "us-county" or "us" with associated data:
 *   - Iterates through each data entry in `newState.data`.
 *   - Checks if the value in the `geo` column is numeric and has a length of 4.
 *     - If so, prepends a `0` to ensure a valid 5-digit FIPS code.
 *   - Converts the `geo` column value to a string for consistency.
 *
 * @param newState - The state object containing map data and configuration.
 * @returns The updated state object with corrected FIPS code formatting.
 */
export const validateFipsCodeLength = (newState: MapConfig) => {
  if (newState.general.geoType === 'us-county' || (newState.general.geoType === 'us' && newState?.data)) {
    newState?.data.forEach(dataPiece => {
      if (dataPiece[newState.columns.geo.name]) {
        if (
          !isNaN(parseInt(dataPiece[newState.columns.geo.name])) &&
          dataPiece[newState.columns.geo.name].length === 4
        ) {
          dataPiece[newState.columns.geo.name] = 0 + dataPiece[newState.columns.geo.name]
        }
        dataPiece[newState.columns.geo.name] = dataPiece[newState.columns.geo.name].toString()
      }
    })
  }
  return newState
}
