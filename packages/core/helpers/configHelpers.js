import get from 'lodash.get'
/**
 * DEV NOTE: These are global helpers assigned for setting/getting config values.
 * DO NOT modify these unless you completely understand the system, and accept all risks.
 */

export const isConfigEqual = (a, b) => (JSON.stringify(a) === JSON.stringify(b))

/**Returns an object, built from provided array, with final key set to the provided value.
 * Spreads the root config object with this returned object, to either add, or update the key's value
 * @param {array||string} configKeyArray - Array of keys to traverse through the config object, or a string for direct child lookup
 * @param {any} setKeyValue - Value to set the final key to in the returned object
 * @returns {object} - Object with keys/subkeys, based on the provided array, and set the final key to the provided value
 */

export const setConfigKeyValue = (configKeyArray, setKeyValue) => {
  // If a string was provided instead of an array, return an object with single key/value pair
  if (typeof configKeyArray === 'string')
    return { [configKeyArray]: setKeyValue }

  return configKeyArray.reduceRight((acc, configKey, index, array) => index + 1 === array.length ? { [configKey]: setKeyValue } : { [configKey]: acc }, {})
}

/** Returns the value of the final key in the provided array, by traversing through the provided object.
 * If the final key is not found, returns undefined
 * @param configKeyArray{array}
 * @param objectToParse{object}
 * @returns {undefined|*}
 */
export const getConfigKeyValue = (configKeyArray, objectToParse) => {
  if (typeof configKeyArray === 'string') return objectToParse[configKeyArray]
  if (configKeyArray.length === 1) return objectToParse[configKeyArray[0]]
  if (get(objectToParse, configKeyArray.map(k => k).join('.'))) return configKeyArray.reduce((acc, configKey) => (acc[configKey]), objectToParse)
  return undefined
}
