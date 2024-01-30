import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { getFormattedData } from './getFormattedData'

export const processDataLegacy = async (response: any) => {
  let dataset = response.formattedData || response.data

  if (response.dataUrl) {
    dataset = await fetchRemoteData(`${response.dataUrl}`)

    dataset = getFormattedData(dataset, response.dataDescription)
  }

  return dataset
}
