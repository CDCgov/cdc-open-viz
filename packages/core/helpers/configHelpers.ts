import { cloneDeep } from 'lodash'

/* editConfigKeys
 * Add edit or update config keys
 * keyUpdates: { path: string[], value: any }[]
 * path is the array of keys needed to reach the value to be updated
 * value is the new value to be set
 * if the key does not exist, it will be created
 */
export function editConfigKeys<T = any>(config: T, keyUpdates: { path: string[]; value: any }[]): T {
  const configDeepCopy = cloneDeep(config)

  const newConfig = keyUpdates.reduce((acc, { path, value }) => {
    const pathCopy = [...path]
    const lastKey = pathCopy.pop()
    const target = pathCopy.reduce((target, key) => {
      if (!target[key]) {
        target[key] = {}
      }
      return target[key]
    }, acc)
    target[lastKey] = value
    return acc
  }, configDeepCopy)

  return newConfig
}
