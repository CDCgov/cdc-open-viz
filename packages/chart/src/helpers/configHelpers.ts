import { cloneDeep } from 'lodash'
import { ChartConfig } from '../types/ChartConfig'

/* editConfigKeys
 * Add edit or update config keys
 * keyUpdates: { path: string[], value: any }[]
 * path is the array of keys needed to reach the value to be updated
 * value is the new value to be set
 */
export function editConfigKeys(config: ChartConfig, keyUpdates: { path: string[]; value: any }[]): ChartConfig {
  const configDeepCopy = cloneDeep(config)

  const newConfig = keyUpdates.reduce((acc, { path, value }) => {
    const pathCopy = [...path]
    const lastKey = pathCopy.pop()
    const target = pathCopy.reduce((target, key) => target[key], acc)
    target[lastKey] = value
    return acc
  }, configDeepCopy)

  return newConfig
}
