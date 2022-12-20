/**
 * validateFipsCodeLength
 *
 * When stateOrData is an object...
 * This is used for validating maps fips codes during runtime where we
 * In this scenario a user is able to choose the column their Fips Codes are in.
 *
 * When stateOrData is an array...
 * The user hasn't chose which column has their FIPS codes in it. We still
 * want to present the FIPS Codes in a friendly format so we attempt to add leading zeros.
 *
 * @param {object|array} stateOrData
 * @returns {object|array} stateOrData
 */
export default function validateFipsCodeLength(stateOrData) {
  // FIPS are within obj.
  if (!Array.isArray(stateOrData)) {
    if (stateOrData.general.geoType === 'us-county' || stateOrData.general.geoType === 'single-state' || (stateOrData.general.geoType === 'us' && stateOrData?.data)) {
      stateOrData?.data.forEach(dataPiece => {
        if (dataPiece[stateOrData.columns.geo.name]) {
          if (!isNaN(parseInt(dataPiece[stateOrData.columns.geo.name])) && dataPiece[stateOrData.columns.geo.name].length === 4) {
            dataPiece[stateOrData.columns.geo.name] = 0 + dataPiece[stateOrData.columns.geo.name]
          }
          dataPiece[stateOrData.columns.geo.name] = dataPiece[stateOrData.columns.geo.name].toString()
        }
      })
    }
  }

  // Only includes data - get column name from somewhere else
  if (Array.isArray(stateOrData)) {
    let columns = Object.keys(stateOrData[0])

    let potentialColumnNames = ['fips', 'FIPS', 'fips codes', 'FIPS CODES', 'Fips Codes', 'fips Codes', 'Fips codes', 'FIPS Codes']

    const fipsCol = columns.filter(columnName => potentialColumnNames.includes(columnName))

    if (!fipsCol.length) return // no column name to reference, leave the fips alone.

    stateOrData?.forEach(dataPiece => {
      if (dataPiece[fipsCol]) {
        // specific to county fips codes.
        if (!isNaN(parseInt(dataPiece[fipsCol])) && dataPiece[fipsCol].length === 4) {
          dataPiece[fipsCol] = 0 + dataPiece[fipsCol]
        }
        dataPiece[fipsCol] = dataPiece[fipsCol].toString()
      }
    })
  }

  return stateOrData
}
