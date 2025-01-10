import React, { useEffect, useState } from 'react'
import CdcChartComponent from './CdcChartComponent'
import { ChartConfig } from './types/ChartConfig'
import { getFileExtension } from '@cdc/core/helpers/getFileExtension'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import Papa from 'papaparse'
import 'react-tooltip/dist/react-tooltip.css'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import Loading from '@cdc/core/components/Loading'

interface CdcChartProps {
  configUrl?: string
  isEditor?: boolean
  isDebug?: boolean
}
const CdcChart: React.FC<CdcChartProps> = props => {
  const { configUrl, isEditor, isDebug } = props
  const [config, setConfig] = useState({} as ChartConfig)
  const [isLoading, setIsloading] = useState(false)
  const loadConfig = async (configUrl: string): Promise<ChartConfig> => {
    const response = await (await fetch(configUrl)).json()
    return response
  }

  const loadData = async response => {
    let data: any[] = response.data || []

    const urlFilters = response.filters
      ? response.filters.filter(filter => filter.type === 'url').length > 0
        ? true
        : false
      : false

    if (response.dataUrl && !urlFilters) {
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

  // Load data when component first mounts
  useEffect(() => {
    const load = async () => {
      setIsloading(true)
      try {
        const loadedConfig = await loadConfig(configUrl)
        try {
          const data = await loadData(loadedConfig)
          const newConfig = {
            data: data,
            ...loadedConfig
          }
          setConfig(newConfig as ChartConfig)
        } catch (e) {
          console.error('Could not Load data!')
        }
      } catch (err) {
        console.error('Could not Load config!')
      } finally {
        setIsloading(false)
      }
    }

    load()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return <CdcChartComponent config={config} configUrl={configUrl} isEditor={isEditor} isDebug={isDebug} />
}

export default CdcChart
