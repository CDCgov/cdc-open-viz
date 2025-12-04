import { isSolrCsv } from '@cdc/core/helpers/isSolr'
import { parseCsvWithQuotes } from '@cdc/core/helpers/parseCsvWithQuotes'

export default function fetchRemoteData(_url, timeout = 60000) {
  let url = new URL(_url, window.location.origin)
  const path = url.pathname
  const regex = /(?:\.([^.]+))?$/
  const ext = regex.exec(path)[1]

  // Create an AbortController for timeout
  const controller = new AbortController()
  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeout)

  const fetchOptions = { signal: controller.signal }

  const handleResponse = (response: Response) => {
    clearTimeout(timeoutId)
    if (!response.ok) {
      return Promise.reject(response)
    }
    return response
  }

  const handleError = (err: Error) => {
    clearTimeout(timeoutId)
    if (err.name === 'AbortError') {
      return Promise.reject(new Error(`Request timed out after ${timeout}ms`))
    }
    return Promise.reject(err)
  }

  if ('csv' === ext || isSolrCsv(_url)) {
    return fetch(url.href, fetchOptions)
      .then(handleResponse)
      .then(response => response.text())
      .then(responseText => {
        return parseCsvWithQuotes(responseText, {
          delimiter: '|',
          dynamicTyping: false
        })
      })
      .catch(handleError)
  } else {
    return fetch(isSolrCsv(_url) ? _url : url.href, fetchOptions)
      .then(handleResponse)
      .then(response => response.json())
      .catch(handleError)
  }
}
