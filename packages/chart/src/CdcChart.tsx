import React, { useEffect, useState, useCallback, useRef, useContext } from 'react'
import CdcChart from './CdcChartComponent'
import { ChartConfig } from './types/ChartConfig'
import { getFileExtension } from '@cdc/core/helpers/getFileExtension'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import Papa from 'papaparse'
import 'react-tooltip/dist/react-tooltip.css'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import Loading from '@cdc/core/components/Loading'
import _ from 'lodash'
import EditorContext from '../../editor/src/ConfigContext'
interface CdcChartProps {
  configUrl?: string
  isEditor?: boolean
  isDebug?: boolean
  config?: ChartConfig
}

const CdcChartWrapper: React.FC<CdcChartProps> = ({ configUrl, isEditor, isDebug, config: editorsConfig }) => {
  const editorContext = useContext(EditorContext)
  const [config, _setConfig] = useState<ChartConfig>({} as ChartConfig)
  const setConfig = newConfig => {
    _setConfig(newConfig)
    if (isEditor) {
      editorContext.setTempConfig(newConfig)
    }
  }
  const [isLoading, setIsLoading] = useState(true)
  const prevFiltersRef = useRef(config.filters)

  const loadConfig = useCallback(
    async (url: string) => {
      const response = editorsConfig || (await (await fetch(url)).json())
      return response
    },
    [editorsConfig]
  )

  const reloadFilteredData = useCallback(async () => {
    if (config.dataUrl) {
      const dataUrl = new URL(config.runtimeDataUrl || config.dataUrl, window.location.origin)
      const qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))
      let isUpdateNeeded = false

      config.filters?.forEach(filter => {
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
    const load = async () => {
      setIsLoading(true)
      try {
        const loadedConfig = await loadConfig(configUrl)
        setConfig(loadedConfig)
      } catch (error) {
        console.error('Failed to load configuration or data', error)
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [configUrl, loadConfig])

  useEffect(() => {
    if (!_.isEqual(prevFiltersRef.current, config.filters)) {
      prevFiltersRef.current = config.filters
      reloadFilteredData()
    }
  }, [config.filters, reloadFilteredData])

  if (isLoading) return <Loading />

  return <CdcChart config={config} isEditor={isEditor} isDebug={isDebug} configUrl={configUrl} />
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
