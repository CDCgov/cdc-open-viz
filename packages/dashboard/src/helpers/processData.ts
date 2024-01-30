import { FilterBehavior } from '../components/Header/Header'
import { DataSet } from '../types/DataSet'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { getFormattedData } from './getFormattedData'

export const processData = async (dataSet: DataSet, filterBehavior) => {
  if (dataSet.dataUrl && filterBehavior !== FilterBehavior.Apply) {
    const dataset = await fetchRemoteData(`${dataSet.dataUrl}`)
    return getFormattedData(dataset, dataSet.dataDescription)
  }

  return dataSet.formattedData || dataSet.data
}
