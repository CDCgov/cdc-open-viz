import { FC, useEffect, useState } from 'react'
import CdcChart from './CdcChart.Component'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import defaults from './data/initial-state'
import _ from 'lodash'
import { ChartConfig } from './types/ChartConfig'
import Loading from '@cdc/core/components/Loading'
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
    try {
      if (response.dataUrl && !hasUrlFilters) {
        data = await fetchRemoteData(response.dataUrl)
      }
    } catch (err) {
      data = []
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
