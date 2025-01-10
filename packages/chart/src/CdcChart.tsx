import React, { useEffect, useState, useCallback, useRef } from 'react'
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
  const [isConfigLoading, setIsConfigLoading] = useState(false)
  const [isDataLoading, setIsDataLoading] = useState(false)
  const prevFiltersRef = useRef(config.filters)
  const loadConfig = useCallback(async configUrl => {
    const response = await fetch(configUrl)
    return response.json()
  }, [])

  const parseCsv = (responseText, delimiter = '|') => {
    // Replace commas outside quotes with pipe delimiter and strip double quotes
    const sanitizedText = responseText.replace(/(".*?")|,/g, (...m) => m[1] || delimiter).replace(/["]+/g, '')

    // Parse CSV
    return Papa.parse(sanitizedText, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      delimiter
    }).data
  }

  const fetchAndParseData = async (url, ext) => {
    try {
      const response = await fetch(url)
      if (ext === 'csv' || isSolrCsv(url)) {
        const responseText = await response.text()
        return parseCsv(responseText)
      } else if (ext === 'json' || isSolrJson(url)) {
        return await response.json()
      }
    } catch (error) {
      console.error(`Error parsing URL: ${url}`, error)
      return [] // Return an empty array on failure
    }
  }

  const loadData = async response => {
    let data: any[] = response.data || []

    const urlFilters = _.some(_.get(response, 'filters', []), { type: 'url' })

    if (response.dataUrl && !urlFilters) {
      try {
        const ext = getFileExtension(response.dataUrl)
        data = await fetchAndParseData(`${response.dataUrl}?v=${cacheBustingString()}`, ext)
      } catch {
        console.error(`COVE: Cannot parse URL: ${response.dataUrl}`)
        data = []
      }
    }

    return data
  }

  const reloadURLData = async () => {
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
        const ext = getFileExtension(dataUrlFinal)
        data = await fetchAndParseData(dataUrlFinal, ext)
      } catch {
        console.error(`Cannot parse URL: ${dataUrlFinal}`)
        data = []
      } finally {
      }

      return [data, dataUrlFinal]
    }
  }

  useEffect(() => {
    const load = async () => {
      setIsConfigLoading(true)

      try {
        const loadedConfig = await loadConfig(configUrl)
        setIsConfigLoading(false)
        // Start data loading
        setIsDataLoading(true)
        try {
          const data = await loadData(loadedConfig)
          const newConfig = {
            ...loadedConfig,
            data: data
          }
          setConfig(newConfig as ChartConfig)
        } catch (e) {
          console.error('Could not Load data!')
        } finally {
          setIsDataLoading(false)
        }
      } catch (err) {
        console.error('Could not Load config!')
        setIsConfigLoading(false)
      }
    }

    load()
  }, [])

  useEffect(() => {
    if (!_.isEqual(prevFiltersRef.current, config.filters)) {
      prevFiltersRef.current = config.filters
      const reload = async () => {
        setIsDataLoading(true)
        try {
          const [data, runtimeDataUrl] = await reloadURLData()
          const newData = Object.assign(data, { urlFiltered: true })
          setConfig(
            prev =>
              ({
                ...prev,
                data: newData,
                runtimeDataUrl,
                formattedData: newData
              } as ChartConfig)
          )
        } catch (err) {
          console.error('Could not reload URL Data!', err)
        } finally {
          setIsDataLoading(false)
        }
      }
      reload()
    }
  }, [config?.filters])

  if (isConfigLoading || isDataLoading) {
    return <Loading />
  }

  return <CdcChartComponent config={config} configUrl={configUrl} isEditor={isEditor} isDebug={isDebug} />
}

export default CdcChart
