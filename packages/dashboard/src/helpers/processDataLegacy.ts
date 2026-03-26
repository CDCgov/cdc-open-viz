import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { getFormattedData } from './getFormattedData'

export const processDataLegacy = async (
  response: any
): Promise<{ data: any[]; dataMetadata: Record<string, string> }> => {
  let dataset = response.formattedData || response.data
  let dataMetadata: Record<string, string> = {}

  if (response.dataUrl) {
    const result = await fetchRemoteData(`${response.dataUrl}`)
    dataset = result.data
    dataMetadata = result.dataMetadata

    dataset = getFormattedData(dataset, response.dataDescription)
  }

  return { data: dataset, dataMetadata }
}
