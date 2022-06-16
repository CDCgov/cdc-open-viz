import React, { useEffect } from 'react'

//Context
import { useGlobalContext } from '@cdc/core/context/GlobalContext'
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Data
import defaults from './data/initial-state'

//Hooks
import useLoadConfig from '@cdc/core/hooks/useLoadConfig'

//Components - Core
import Editor from '@cdc/core/components/Editor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

//Components - Local
import Chart from './components/Chart'
import EditorPanels from './components/EditorPanels'

import './scss/cove-chart.scss'

//Visualization
const CdcChart = ({ configObj, configUrlObj }) => {
  const { view } = useGlobalContext()
  const { data, configActions } = useConfigContext()

  const configChartRuntime = (newConfig, dataOverride = data) => {
    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []
    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.visualizationType === 'Pie') {
      newConfig.runtime.seriesKeys = dataOverride.map(d => d[newConfig.xAxis.dataKey])
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys
    } else {
      newConfig.runtime.seriesKeys = newConfig.series ? newConfig.series.map((series) => {
        newConfig.runtime.seriesLabels[series.dataKey] = series.label || series.dataKey
        newConfig.runtime.seriesLabelsAll.push(series.label || series.dataKey)
        return series.dataKey
      }) : []
    }

    if (newConfig.visualizationType === 'Combo' && newConfig.series) {
      newConfig.runtime.barSeriesKeys = []
      newConfig.runtime.lineSeriesKeys = []
      newConfig.series.forEach((series) => {
        if (series.type === 'Bar') {
          newConfig.runtime.barSeriesKeys.push(series.dataKey)
        }
        if (series.type === 'Line') {
          newConfig.runtime.lineSeriesKeys.push(series.dataKey)
        }
      })
    }

    if ((newConfig.visualizationType === 'Bar' && newConfig.orientation === 'horizontal') || newConfig.visualizationType === 'Paired Bar') {
      newConfig.runtime.xAxis = newConfig.yAxis
      newConfig.runtime.yAxis = newConfig.xAxis
      newConfig.runtime.horizontal = true
    } else {
      newConfig.runtime.xAxis = newConfig.xAxis
      newConfig.runtime.yAxis = newConfig.yAxis
      newConfig.runtime.horizontal = false
    }

    newConfig.runtime.uniqueId = Date.now()
    newConfig.runtime.editorErrorMessage = newConfig.visualizationType === 'Pie' && !newConfig.yAxis.dataKey ? 'Data Key property in Y Axis section must be set for pie charts.' : ''

    let currentData

    // Check for duplicate x axis values in data
    let uniqueXValues = {}

    if (newConfig.visualizationType !== 'Paired Bar') {
      for (let i = 0; i < currentData?.length; i++) {
        if (uniqueXValues[currentData[i][newConfig.xAxis.dataKey]]) {
          newConfig.runtime.editorErrorMessage = 'Duplicate keys in data. Try adding a filter.'
        } else {
          uniqueXValues[currentData[i][newConfig.xAxis.dataKey]] = true
        }
      }
    }

    configActions.setConfig(newConfig)
  }

  const [ loadingConfig, reloadConfig ] = useLoadConfig(configObj, configUrlObj, defaults, configChartRuntime)

  useEffect(() => {
    reloadConfig()
  }, [ reloadConfig ])

  return (
    <ErrorBoundary component="CdcChart">
      <>
        {loadingConfig ?
          <p>Loading...</p> :
          <>
            {view === 'editor' ?
              <>
                <Editor EditorPanels={EditorPanels}>
                  <Chart/>
                </Editor>
              </> :
              <Chart/>
            }
          </>
        }
      </>
    </ErrorBoundary>
  )
}

export default CdcChart
