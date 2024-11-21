import { MapConfig } from '../types/MapConfig'

/**
 * Returns the stroke color for geographical borders based on the provided map configuration.
 *
 * @param {MapConfig} config - The map configuration object.
 * @returns {string} The stroke color for geographical borders.
 * @see DEV-9726 Map Border Colors and Fills
 *
 */
export const getGeoStrokeColor = (config: MapConfig) => {
  const bodyStyles = getComputedStyle(document.body)
  if (config.general.geoBorderColor === 'darkGray') {
    return bodyStyles.getPropertyValue('--cool-gray-90')
  } else {
    return bodyStyles.getPropertyValue('--white')
  }
}

export const getGeoFillColor = (config: MapConfig) => {
  const bodyStyles = getComputedStyle(document.body)
  return bodyStyles.getPropertyValue('--cool-gray-10')
}
