import React, { useEffect, useState, useCallback, useRef } from 'react'
import CdcChart from './CdcChartComponent'
import { AllChartsConfig, ChartConfig } from './types/ChartConfig'
import { getFileExtension } from '@cdc/core/helpers/getFileExtension'
import initialConfig from './data/initial-state'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import Papa from 'papaparse'
import 'react-tooltip/dist/react-tooltip.css'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import Loading from '@cdc/core/components/Loading'
import _ from 'lodash'

interface CdcChartProps {
  configUrl?: string
  config: ChartConfig
  isEditor?: boolean
  isDebug?: boolean
}

const CdcChartWrapper: React.FC<CdcChartProps> = ({ configUrl, isEditor, config: editorConfig, isDebug }) => {
  const [config, setConfig] = useState<ChartConfig>(undefined)
  const prevFiltersRef = useRef(config?.filters)

  const loadConfig = async () => {
    try {
      const loadedConfig = editorConfig || ((await await fetch(configUrl)).json() as AllChartsConfig)
      const data = await loadDataFromConfig(loadedConfig)
      const _loadedConfig = { ...initialConfig, ...loadedConfig }
      setConfig({
        ..._loadedConfig,
        data
      })
    } catch {
      console.error('Failed to load configuration or data', error)
    }
  }

  const reloadFilteredData = useCallback(async () => {
    if (config?.dataUrl) {
      const dataUrl = new URL(config?.runtimeDataUrl || config?.dataUrl, window.location.origin)
      const qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))
      let isUpdateNeeded = false

      config?.filters?.forEach(filter => {
        if (filter.type === 'url' && qsParams[filter.queryParameter] !== decodeURIComponent(filter.active)) {
          qsParams[filter.queryParameter] = filter.active
          isUpdateNeeded = true
        }
      })

      if (!isUpdateNeeded) return

      const finalUrl = `${dataUrl.origin}${dataUrl.pathname}${new URLSearchParams(qsParams)}`
      const ext = getFileExtension(finalUrl)
      const data = await fetchAndParseData(finalUrl, ext)

      setConfig(prev => ({
        ...prev,
        data: { ...data, urlFiltered: true },
        runtimeDataUrl: finalUrl,
        formattedData: { ...data, urlFiltered: true }
      }))
    }
  }, [config])

  useEffect(() => {
    loadConfig()
  }, [])

  useEffect(() => {
    if (!_.isEqual(prevFiltersRef.current, config?.filters)) {
      prevFiltersRef.current = config?.filters
      reloadFilteredData()
    }
  }, [config?.filters, reloadFilteredData])

  if (!config) return <Loading />

  return <CdcChart config={config} isEditor={isEditor} isDebug={isDebug} />
}

export default CdcChartWrapper

const parseCsv = (responseText: string, delimiter = '|') => {
  const sanitizedText = responseText.replace(/(".*?")|,/g, (...m) => m[1] || delimiter).replace(/["]+/g, '')

  return Papa.parse(sanitizedText, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    delimiter
  }).data
}

const fetchAndParseData = async (url: string, ext: string) => {
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
    return []
  }
}

const loadDataFromConfig = async (response: any) => {
  if (!response.dataUrl || _.some(_.get(response, 'filters', []), { type: 'url' })) {
    return response.data || []
  }

  const ext = getFileExtension(response.dataUrl)
  const urlWithCacheBuster = `${response.dataUrl}?v=${cacheBustingString()}`

  try {
    return await fetchAndParseData(urlWithCacheBuster, ext)
  } catch {
    console.error(`Cannot parse URL: ${response.dataUrl}`)
    return []
  }
}
