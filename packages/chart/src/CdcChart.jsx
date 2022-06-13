import React, { useEffect } from 'react'

//Context
import { useGlobalContext } from '@cdc/core/context/GlobalContext'
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Hooks
import useLoadConfig from '@cdc/core/hooks/useLoadConfig'

//Components
import Chart from './components/Chart'
import Editor from '@cdc/core/components/Editor'
import EditorPanels from './components/EditorPanels'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import './scss/cove-chart.scss'

//Visualization
const CdcChart = ({ configUrl }) => {
  const { view } = useGlobalContext()
  const { config, configActions } = useConfigContext()
  const [ reloadConfig ] = useLoadConfig(config, configUrl)

  useEffect(() => {
    reloadConfig()
  }, [ reloadConfig ])

  const updateConfig = (newConfig, dataOverride = undefined) => {
    let data = dataOverride || stateData

    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    // Loop through and set initial data with exclusions - this should persist through any following data transformations (ie. filters)
    let newExcludedData

    if (newConfig.exclusions && newConfig.exclusions.active) {

      if (newConfig.xAxis.type === 'categorical' && newConfig.exclusions.keys?.length > 0) {
        newExcludedData = data.filter(e => !newConfig.exclusions.keys.includes(e[newConfig.xAxis.dataKey]))
      } else if (
        newConfig.xAxis.type === 'date' &&
        (newConfig.exclusions.dateStart || newConfig.exclusions.dateEnd) &&
        newConfig.xAxis.dateParseFormat
      ) {

        // Filter dates
        const timestamp = (e) => new Date(e).getTime()

        let startDate = timestamp(newConfig.exclusions.dateStart)
        let endDate = timestamp(newConfig.exclusions.dateEnd) + 86399999 //Increase by 24h in ms (86400000ms - 1ms) to include selected end date for .getTime() comparative

        let startDateValid = undefined !== typeof startDate && false === isNaN(startDate)
        let endDateValid = undefined !== typeof endDate && false === isNaN(endDate)

        if (startDateValid && endDateValid) {
          newExcludedData = data.filter(e =>
            (timestamp(e[newConfig.xAxis.dataKey]) >= startDate) &&
            (timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
          )
        } else if (startDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) >= startDate)
        } else if (endDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
        }

      } else {
        newExcludedData = dataOverride || stateData
      }
    } else {
      newExcludedData = dataOverride || stateData
    }

    setExcludedData(newExcludedData)

    // After data is grabbed, loop through and generate filter column values if there are any
    let currentData

    if (newConfig.filters) {
      newConfig.filters.forEach((filter, index) => {
        let filterValues = []
        filterValues = generateValuesForFilter(filter.columnName, newExcludedData)
        newConfig.filters[index].values = filterValues
        // Initial filter should be active
        newConfig.filters[index].active = filterValues[0]
      })
      currentData = filterData(newConfig.filters, newExcludedData)
      setFilteredData(currentData)
    }

    if (!currentData) currentData = newExcludedData
  }

  useEffect(() => {
    return buildChartData()
  }, [])

  const buildChartData = () => {
    let newConfig = {}

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []
    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.visualizationType === 'Pie') {
      newConfig.runtime.seriesKeys = config.data.map(data => data[newConfig.xAxis.dataKey])
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

    // Check for duplicate x axis values in data
    let uniqueXValues = {}
    let currentData

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
    console.log('new chart config', newConfig)
  }

  return (
    <ErrorBoundary component="CdcChart">
      <>
        {view === 'editor' ?
          <>
            <Editor panels={EditorPanels()}>
              <Chart/>
            </Editor>
          </>
          :
          <Chart/>
        }
      </>
    </ErrorBoundary>
  )
}

export default CdcChart
