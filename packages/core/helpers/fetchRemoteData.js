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
          const parsedCsv = Papa.parse(responseText, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true
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
