import { FC, useEffect, useState } from 'react'
import CdcChart from './CdcChartComponent'
import defaults from './data/initial-state'
import _ from 'lodash'
import Papa from 'papaparse'
import { ChartConfig } from './types/ChartConfig'
import Loading from '@cdc/core/components/Loading'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import { isSolrJson, isSolrCsv } from '@cdc/core/helpers/isSolr.js'
import { getFileExtension } from '@cdc/core/helpers/getFileExtension'
interface Props {
  configUrl: string
  isEditor: boolean
  isDebug: boolean
  isDashboard: boolean
}
const CdcChartWrapper: FC<Props> = props => {
  const [config, setConfig] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [rawData, setRawData] = useState([])
  const { configUrl, isDashboard } = props

  const loadConfig = async () => {
    try {
      const response = await (await fetch(configUrl)).json()
      const newConfig = { ...defaults, ...response }
      return newConfig
    } catch (error) {
      console.error('Failed to load configuration:', error)

      return {}
    }
  }

  const loadData = async response => {
    let data = _.get(response, 'data', [])
    // Check for URL filters
    const hasUrlFilters = _.some(_.get(response, 'filters', []), { type: 'url' })
    if (response.dataUrl && !hasUrlFilters) {
      try {
        const ext = getFileExtension(response.dataUrl)
        if ('csv' === ext || isSolrCsv(response.dataUrl)) {
          data = await fetch(response.dataUrl + `?v=${cacheBustingString()}`)
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
                dynamicTyping: true,
                skipEmptyLines: true,
                delimiter: '|' // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
              })
              return parsedCsv.data
            })
        }

        if ('json' === ext || isSolrJson(response.dataUrl)) {
          data = await fetch(response.dataUrl + `?v=${cacheBustingString()}`).then(response => response.json())
        }
      } catch {
        console.error(`COVE: Cannot parse URL: ${response.dataUrl}`) // eslint-disable-line
        data = []
      }
    }

    return data
  }

  useEffect(() => {
    const load = async () => {
      setIsLoading(true)
      try {
        const rawConfig = await loadConfig()
        const rawData = await loadData(rawConfig)
        setRawData(rawData)
        setConfig(rawConfig)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
      }
    }

    load()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return <CdcChart {...props} isDashboard={isDashboard} config={config as ChartConfig} data={rawData} />
}

export default CdcChartWrapper
