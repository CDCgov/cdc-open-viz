import versionNeedsUpdate from '@cdc/core/helpers/ver/versionNeedsUpdate'
import { MapConfig } from '../types/MapConfig'

/**
 * Returns the stroke color for geographical borders based on the provided map configuration.
 *
 * @param {MapConfig} config - The map configuration object.
 * @returns {string} The stroke color for geographical borders.
 *
 * The function determines the stroke color based on the following logic:
 * - If `config.general.geoBorderColor` is 'darkGray', the stroke color is set to a predefined dark gray color (`#1C1D1F`).
 * - If `config.general.geoBorderColor` is not 'darkGray', the stroke color defaults to white (`rgb(255, 255, 255)`).
 * - If the map version needs an update (determined by `versionNeedsUpdate(state.version, '4.24.11')`) and the border color is 'darkGray', the stroke color defaults to a previous gray color based on the `geoType`.
 */
export const getGeoStrokeColor = (config: MapConfig) => {
  if (config.general.geoBorderColor === 'darkGray') {
    const grayCool90 = '#1C1D1F'
    const previousGray = config.general.geoType === 'us-county' ? 'rgb(90,90,90)' : 'rgba(0, 0, 0, 0.2)'
    let geoStrokeColor = grayCool90

    // If the version is not 4.24.11 and the border color is darkGray, default to previous darkGray color
    if (versionNeedsUpdate(config.version, '4.24.11')) {
      geoStrokeColor = previousGray
    }
    return geoStrokeColor
  } else {
    // geoBorderColor isn't set or the setting is 'sameAsBackground' (white)
    return 'rgb(255, 255, 255)'
  }
}

export const getGeoFillColor = (config: MapConfig) => {
  const grayCool10 = '#DFE1E2'
  const previousFillColor = '#E6E6E6'
  let fillColor = previousFillColor

  // If the version is not 4.24.11
  if (versionNeedsUpdate(config.version, '4.24.11')) {
    return fillColor
  } else {
    return grayCool10
  }
}
