import get from 'lodash.get'

// DEV NOTE: These are global helpers assigned for setting/getting config values.
// DO NOT modify these unless you completely understand the system, and accept all risks.

// Check if two objects are equal
export const isConfigEqual = (a, b) => (JSON.stringify(a) === JSON.stringify(b))

export const setConfigKeyValue = (configKeyArray, setKeyValue) => {
  /**********************************************************************************************************
   * Returns an object, built from provided array, with final key set to the provided value.
   * Spreads the root config object with this returned object, to either add, or update the key's value
   **********************************************************************************************************/

  // If a string was provided instead of an array, return an object with single key/value pair
  if (typeof configKeyArray === 'string') return { [configKeyArray]: setKeyValue }

  // Construct new object with keys/subkeys, based on the provided array,
  // and set the final key to the provided value
  return configKeyArray.reduceRight((acc, configKey, index, array) => index + 1 === array.length ? { [configKey]: setKeyValue } : { [configKey]: acc }, {})
}

export const getConfigKeyValue = (configKeyArray, objectToParse) => {
  /*********************************************************************************************************
   * Traverse the supplied object using the key values from the supplied array, and return that key's value
   **********************************************************************************************************/

  // If received a string instead of an array, check if the property exists and return the value
  if (typeof configKeyArray === 'string') return objectToParse[configKeyArray]
  // If received an array, and if only one value provided, just get the initial value and bypass reducer
  if (configKeyArray.length === 1) return objectToParse[configKeyArray[0]]
  // Drill through the object using multiple array values provided, and return the final value if found
  if (get(objectToParse, configKeyArray.map(k => k).join('.'))) return configKeyArray.reduce((acc, configKey) => (acc[configKey]), objectToParse)
  // If nothing found, return undefined
  return undefined
}
