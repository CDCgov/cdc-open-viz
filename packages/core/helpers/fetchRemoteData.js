export default async function (url) {
    try {
        const regex = /(?:\.([^.]+))?$/

        let data = []

        const ext = (regex.exec(url)[1])
        if ('csv' === ext) {
            data = await fetch(url)
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
            data = await fetch(url)
                .then(response => response.json())
        }

        return data;
    } catch {
        // If we can't parse it, still attempt to fetch it
        try {
            let response = await (await fetch(configUrl)).json()
            return response
        } catch {
            console.error(`Cannot parse URL: ${url}`);
        }
    }
}