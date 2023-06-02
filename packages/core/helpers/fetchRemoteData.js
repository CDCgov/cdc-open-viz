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
        .then(response => {
          //debugger
          console.log("response type",typeof response)
          let cleanText = response.text()
          console.log("#fetch cleanText",cleanText)
          return cleanText
        })
        .then(responseText => {
          // put placeholder for any commas inside headers since we parse cols separated with commas
          
          // remove all double quotes
          responseText = responseText.replace(/["]+/g, '')
 //debugger
          const parsedCsv = Papa.parse(responseText, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            //delimiter: ',', // dont add this, just leave it at "default" which will guess the delimiter and is more flexible
            //quoteChar: "'", // dont add this or it will break on single quotes or if text has apostrophe in it (TT)
          })
          console.log("fetchRemote responseText:",responseText)
          console.log("fetchRemote parsedCsv:",parsedCsv)
          //debugger
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
