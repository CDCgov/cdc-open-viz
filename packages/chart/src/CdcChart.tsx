import React, { useEffect, useState } from 'react'
import CdcChartComponent from './CdcChartComponent'
import { ChartConfig } from './types/ChartConfig'
import { getFileExtension } from '@cdc/core/helpers/getFileExtension'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import Papa from 'papaparse'
import 'react-tooltip/dist/react-tooltip.css'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import Loading from '@cdc/core/components/Loading'
import _ from 'lodash'

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

    const urlFilters = _.some(_.get(response, 'filters', []), { type: 'url' })
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

  const reloadURLData = async () => {
    let dataLoadedFromUrl = false
    if (config.dataUrl) {
      const dataUrl = new URL(config.runtimeDataUrl || config.dataUrl, window.location.origin)
      let qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))

      let isUpdateNeeded = false
      config.filters?.forEach(filter => {
        if (filter.type === 'url' && qsParams[filter.queryParameter] !== decodeURIComponent(filter.active)) {
          qsParams[filter.queryParameter] = filter.active
          isUpdateNeeded = true
        }
      })

      if ((!config.formattedData || config.formattedData.urlFiltered) && !isUpdateNeeded) return

      let dataUrlFinal = `${dataUrl.origin}${dataUrl.pathname}${Object.keys(qsParams)
        .map((param, i) => {
          let qs = i === 0 ? '?' : '&'
          qs += param + '='
          qs += qsParams[param]
          return qs
        })
        .join('')}`

      let data: any[] = []

      try {
        const ext = getFileExtension(dataUrl.href)
        if ('csv' === ext || isSolrCsv(dataUrlFinal)) {
          data = await fetch(dataUrlFinal)
            .then(response => response.text())
            .then(responseText => {
              const parsedCsv = Papa.parse(responseText, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true
              })
              return parsedCsv.data
            })
        } else if ('json' === ext || isSolrJson(dataUrlFinal)) {
          data = await fetch(dataUrlFinal).then(response => response.json())
        } else {
          data = []
        }
      } catch {
        console.error(`Cannot parse URL: ${dataUrlFinal}`)
        data = []
      } finally {
        dataLoadedFromUrl = true
      }

      return [data, dataUrlFinal, dataLoadedFromUrl]
    }
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

  useEffect(() => {
    const reload = async () => {
      setIsloading(true)
      try {
        const [data, runtimeDataUrl, dataLoadedFromUrl] = await reloadURLData()
        let newData = data
        if (config.dataUrl || dataLoadedFromUrl) {
          newData = Object.assign(data, { urlFiltered: true })
        }
        const newConfig = {
          ...config,
          data: newData,
          dataLoadedFromUrl,
          runtimeDataUrl,
          formattedData: newData
        }
        setConfig(newConfig)
      } catch (err) {
        console.error('Could not reLoad URL Data!')
      } finally {
        setIsloading(false)
      }
    }

    reload()
  }, [JSON.stringify(config.filters)])

  if (isLoading) {
    return <Loading />
  }

  return <CdcChartComponent config={config} configUrl={configUrl} isEditor={isEditor} isDebug={isDebug} />
}

export default CdcChart
