import { DataSet } from '../types/DataSet'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { getFormattedData } from './getFormattedData'

export const processData = async (dataSet: DataSet, hasFilterChangeBehavior: boolean) => {
  if (dataSet.dataUrl && hasFilterChangeBehavior) {
    const dataset = await fetchRemoteData(`${dataSet.dataUrl}`)
    return getFormattedData(dataset, dataSet.dataDescription)
  }

  return dataSet.formattedData || dataSet.data
}
