import Papa from 'papaparse'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'

export default async function (_url, visualizationType = '') {
  let url = new URL(_url, window.location.origin)
  try {
    const path = url.pathname
    const regex = /(?:\.([^.]+))?$/
    const ext = regex.exec(path)[1]

    if ('csv' === ext || isSolrCsv(_url)) {
      return await fetch(url.href)
        .then(response => response.text())
        .then(responseText => {
          // for every comma NOT inside quotes, replace with a pipe delimiter
          // - this will let commas inside the quotes not be parsed as a new column
          // - Limitation: if a delimiter other than comma is used in the csv this will break
          // Examples of other delimiters that would break: tab
          responseText = responseText.replace(/(".*?")|,/g, (...m) => m[1] || '|')
          // now strip the double quotes
          responseText = responseText.replace(/["]+/g, '')
          const parsedCsv = Papa.parse(responseText, {
            //quotes: "true",  // dont need these
            //quoteChar: "'",  // has no effect that I can tell
            header: true,
            skipEmptyLines: true,
            delimiter: '|', // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
            dynamicTyping: false
          })
          return parsedCsv.data
        })
    } else {
      return await fetch(isSolrCsv(_url) ? _url : url.href).then(response => response.json())
    }
  } catch {
    // If we can't parse it, still attempt to fetch it
    try {
      let response = await (await fetch(url)).json()
      return response
    } catch {
      console.error(`Cannot parse URL: ${url}`)
    }
  }
}
