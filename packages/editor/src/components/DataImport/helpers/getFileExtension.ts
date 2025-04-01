import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import { supportedDataTypes } from './supportedDataTypes'

export const getFileExtension = (url: URL) => {
  // check if its a url object or string
  if (typeof url === 'string') {
    url = new URL(url)
  }

  return isSolrCsv(url.href)
    ? '.csv'
    : isSolrJson(url.href)
    ? '.json'
    : Object.keys(supportedDataTypes).find(extension => url.pathname.endsWith(extension))
}
