import { FilterBehavior } from '../components/Header/Header'
import { DataSet } from '../types/DataSet'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { getFormattedData } from './getFormattedData'

export const processData = async (dataSet: DataSet, filterBehavior) => {
  let dataset = dataSet.formattedData || dataSet.data

  if (dataSet && dataSet.dataUrl && filterBehavior !== FilterBehavior.Apply) {
    dataset = await fetchRemoteData(`${dataSet.dataUrl}`)

    dataset = getFormattedData(dataset, dataSet.dataDescription)
  }

  return dataset
}
