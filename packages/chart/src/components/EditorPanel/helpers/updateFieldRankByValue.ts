import DataTransform from '@cdc/core/helpers/DataTransform'
import { ChartConfig } from '../../../types/ChartConfig'
import _ from 'lodash'

const transform = new DataTransform()

const indexOfObj = (data, obj) => {
  for (let i = 0; i < data.length; i++) {
    let keys = Object.keys(data[i])
    let equal = true
    for (let j = 0; j < keys.length; j++) {
      if (data[i][keys[j]] !== obj[keys[j]]) {
        equal = false
        break
      }
    }
    if (equal) {
      return i
    }
  }
  return -1
}

export const updateFieldRankByValue = (
  config: ChartConfig,
  newValue: 'asc' | 'desc' | undefined,
  preTransformedData: Object[]
): [ChartConfig, Object[]?] => {
  const newConfig = _.cloneDeep(config)
  newConfig.rankByValue = newValue

  if (config.rankByValue && !newValue) {
    const CIkeys: string[] = Object.values(config.confidenceKeys) as string[]
    const seriesKeys: string[] = config.series.map(s => s.dataKey)
    const keysToClean: string[] = seriesKeys.concat(CIkeys)
    const cleanData = config?.xAxis?.dataKey
      ? transform.cleanData(config.data, config.xAxis.dataKey, keysToClean)
      : config.data
    const newData = preTransformedData.sort((a, b) => {
      const aIndex = indexOfObj(cleanData, a)
      const bIndex = indexOfObj(cleanData, b)
      return aIndex - bIndex
    })
    return [newConfig, newData]
  }
  return [newConfig]
}
