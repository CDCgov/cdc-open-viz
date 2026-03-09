import { isSolrCsv } from '@cdc/core/helpers/isSolr'
import { parseCsvWithQuotes } from '@cdc/core/helpers/parseCsvWithQuotes'
import { extractDataAndMetadata } from '@cdc/core/helpers/extractDataAndMetadata'

type FetchResult = { data: any[]; dataMetadata: Record<string, string> }

export default function fetchRemoteData(_url): Promise<FetchResult> {
  let url = new URL(_url, window.location.origin)
  const path = url.pathname
  const regex = /(?:\.([^.]+))?$/
  const ext = regex.exec(path)[1]

  if ('csv' === ext || isSolrCsv(_url)) {
    return fetch(url.href)
      .then(response => response.text())
      .then(responseText => {
        const data = parseCsvWithQuotes(responseText, {
          delimiter: '|',
          dynamicTyping: false
        })
        return { data, dataMetadata: {} }
      })
  } else {
    return fetch(isSolrCsv(_url) ? _url : url.href)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response)
        }
        return response.json()
      })
      .then(json => extractDataAndMetadata(json))
  }
}
