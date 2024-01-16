import { useEffect, useMemo, useState } from 'react'
import CdcDashboard from './CdcDashboard'
import { MultiDashboard } from './types/MultiDashboard'
import Loading from '@cdc/core/components/Loading'
import defaults from './data/initial-state'
import { processData } from './helpers/processData'
import { getVizKeys } from './helpers/getVizKeys'
import { processDataLegacy } from './helpers/processDataLegacy'
import { EditorProps } from '@cdc/core/types/EditorProps'

const MultiDashboardWrapper: React.FC<EditorProps> = ({ configUrl, isEditor, isDebug, setConfig }) => {
  const [multiConfig, setMultiConfig] = useState<MultiDashboard>(undefined)
  const [selectedConfig, setSelectedConfig] = useState<string | null>(undefined) // if null we are handling normal dashboard

  const handleSelectedConfig = (multiConfig: MultiDashboard) => {
    if (!multiConfig.multiDashboards) setSelectedConfig(null)
    // TODO: if query parameter select based on query parameter
    // else select the first available
  }

  const loadConfig = async () => {
    //dispatch({ type: 'SET_LOADING', payload: true })
    const response = await fetch(configUrl)
    const multiConfig: MultiDashboard = await response.json()
    handleSelectedConfig(multiConfig)
    let newConfig = { ...defaults, ...multiConfig }
    let datasets = {}

    if (multiConfig.datasets) {
      await Promise.all(
        Object.keys(multiConfig.datasets).map(async key => {
          datasets[key] = await processData(multiConfig.datasets[key], multiConfig.filterBehavior)
        })
      )

      getVizKeys(newConfig).forEach(vizKey => {
        newConfig.visualizations[vizKey].formattedData = datasets[newConfig.visualizations[vizKey].dataKey]
      })

      Object.keys(datasets).forEach(key => {
        newConfig.datasets[key].data = datasets[key]
      })
    } else {
      let dataKey = newConfig.dataFileName || 'backwards-compatibility'
      datasets[dataKey] = await processDataLegacy(multiConfig)

      let datasetsFull = {}
      datasetsFull[dataKey] = {
        data: datasets[dataKey],
        dataDescription: newConfig.dataDescription
      }
      newConfig.datasets = datasetsFull

      getVizKeys(newConfig).forEach(vizKey => {
        newConfig.visualizations[vizKey].dataKey = dataKey
        newConfig.visualizations[vizKey].dataDescription = newConfig.dataDescription
        newConfig.visualizations[vizKey].formattedData = newConfig.formattedData
      })

      newConfig.data = []
      newConfig.dataUrl = ''
      newConfig.dataFileName = ''
      newConfig.dataFileSourceType = ''
      newConfig.dataDescription = {}
      newConfig.formattedData = []

      if (newConfig?.dashboard?.filters) {
        newConfig.dashboard.sharedFilters = newConfig.dashboard.sharedFilters || []
        newConfig.dashboard.filters.forEach(filter => {
          newConfig.dashboard.sharedFilters.push({ ...filter, key: filter.label, showDropdown: true, usedBy: getVizKeys(newConfig) })
        })

        newConfig.dashboard.filters = undefined
      }
    }
  }

  useEffect(() => {
    loadConfig()
  }, [])

  if (!multiConfig) return <Loading />
  const config = useMemo(() => {
    const selectedDashboard = multiConfig.multiDashboards[selectedConfig]
    return {
      ...multiConfig,
      ...selectedDashboard,
      multiDashboards: undefined
    }
  }, [selectedConfig])
  return <CdcDashboard isEditor={isEditor} isDebug={isDebug} config={config} setConfig={setConfig} />
}

export default MultiDashboardWrapper
