import Papa from 'papaparse'

export default async function (url, visualizationType = '') {
  try {
    url = new URL(url)

    const path = url.pathname
    const regex = /(?:\.([^.]+))?$/
    const ext = regex.exec(path)[1]

    let data = []

    if ('csv' === ext) {
      data = await fetch(url.href)
        .then(response => response.text())
        .then(responseText => {
          // for every comma NOT inside quotes, replace with a pipe delimiter
          // - this will let commas inside the quotes not be parsed as a new column
          // - Limitation: if a delimiter other than comma is used in the csv this will break
          // Examples of other delimiters that would break: tab
          responseText = responseText.replace(
            /(".*?")|,/g,
            (...m) => m[1] || "|"
          );
          // now strip the double quotes
          responseText = responseText.replace(/["]+/g, '')
          const parsedCsv = Papa.parse(responseText, {
            //quotes: "true",  // dont need these
            //quoteChar: "'",  // has no effect that I can tell
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            delimiter: '|', // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
          })
          return parsedCsv.data
        })
    }

    if ('json' === ext) {
      data = await fetch(url.href).then(response => response.json())
    }

    return data
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
