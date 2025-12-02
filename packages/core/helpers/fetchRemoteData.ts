import { isSolrCsv } from '@cdc/core/helpers/isSolr'
import { parseCsvWithQuotes } from '@cdc/core/helpers/parseCsvWithQuotes'

export default function fetchRemoteData(_url) {
  let url = new URL(_url, window.location.origin)
  const path = url.pathname
  const regex = /(?:\.([^.]+))?$/
  const ext = regex.exec(path)[1]

  if ('csv' === ext || isSolrCsv(_url)) {
    return fetch(url.href)
      .then(response => response.text())
      .then(responseText => {
        return parseCsvWithQuotes(responseText, {
          delimiter: '|',
          dynamicTyping: false
        })
      })
  } else {
    return fetch(isSolrCsv(_url) ? _url : url.href).then(response => {
      if (!response.ok) {
        return Promise.reject(response)
      }
      return response.json()
    })
  }
}
