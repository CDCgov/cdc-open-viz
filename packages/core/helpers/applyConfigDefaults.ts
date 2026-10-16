import cloneDeep from 'lodash/cloneDeep'
import isPlainObject from 'lodash/isPlainObject'

/**
 * Returns a new config with missing plain-object properties filled from defaults.
 * Arrays and all non-plain-object values are treated as authored atomic values.
 */
export const applyConfigDefaults = <T>(config: T, defaults: unknown): T => {
  const fill = (value: unknown, defaultValue: unknown): unknown => {
    if (value === undefined) return cloneDeep(defaultValue)
    if (!isPlainObject(value) || !isPlainObject(defaultValue)) return cloneDeep(value)

    const result = cloneDeep(defaultValue) as Record<string, unknown>
    Object.entries(value).forEach(([key, nestedValue]) => {
      result[key] = fill(nestedValue, result[key])
    })
    return result
  }

  return fill(config, defaults) as T
}

export default applyConfigDefaults
