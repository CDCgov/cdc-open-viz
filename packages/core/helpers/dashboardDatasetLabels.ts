import { DataSet, Datasets } from '@cdc/core/types/DataSet'

export const getDatasetLabel = (datasetKey: string, dataset?: Partial<DataSet>) => dataset?.label?.trim() || datasetKey

export const getDatasetDisplayLabel = (datasetKey: string, datasets: Datasets = {}) => {
  const label = getDatasetLabel(datasetKey, datasets[datasetKey])
  const matchingKeys = Object.keys(datasets).filter(key => getDatasetLabel(key, datasets[key]) === label)

  return matchingKeys.length > 1 ? `${label} (${datasetKey})` : label
}

export const getUniqueDatasetKey = (label: string, datasets: Datasets = {}) => {
  const baseKey = label.trim()
  if (!Object.prototype.hasOwnProperty.call(datasets, baseKey)) return baseKey

  let suffix = 2
  while (Object.prototype.hasOwnProperty.call(datasets, `${baseKey}-${suffix}`)) {
    suffix += 1
  }

  return `${baseKey}-${suffix}`
}
