import React, { useState, useEffect, useCallback } from 'react'

// IE11
// import 'core-js/stable'
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import parse from 'html-react-parser'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import ConfigContext from './ConfigContext'

import OverlayFrame from '@cdc/core/components/ui/OverlayFrame'
import Loading from '@cdc/core/components/Loading'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import getViewport from '@cdc/core/helpers/getViewport'

import CdcMap from '@cdc/map'
import CdcChart from '@cdc/chart'
import CdcDataBite from '@cdc/data-bite'
import CdcWaffleChart from '@cdc/waffle-chart'
import CdcMarkupInclude from '@cdc/markup-include'
import CdcFilteredText from '@cdc/filtered-text'

import Grid from './components/Grid'
import Header from './components/Header'
import defaults from './data/initial-state'
import Widget from './components/Widget'
import DataTable from './components/DataTable'
import CoveMediaControls from '@cdc/core/components/CoveMediaControls'

import './scss/main.scss'
import '@cdc/core/styles/v2/main.scss'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'

/* eslint-disable react-hooks/exhaustive-deps */

const addVisualization = (type, subType) => {
  let modalWillOpen = type === 'markup-include' ? false : true
  let newVisualizationConfig = {
    newViz: true,
    openModal: modalWillOpen,
    uid: type + Date.now(),
    type
  }

  switch (type) {
    case 'chart':
      newVisualizationConfig.visualizationType = subType
      break
    case 'map':
      newVisualizationConfig.general = {}
      newVisualizationConfig.general.geoType = subType
      break
    case 'data-bite':
      newVisualizationConfig.visualizationType = type
      break
    case 'waffle-chart':
      newVisualizationConfig.visualizationType = type
      break
    case 'markup-include':
      newVisualizationConfig.visualizationType = type
      break
    case 'filtered-text':
      newVisualizationConfig.visualizationType = type
      break
    default:
      newVisualizationConfig.visualizationType = type
      break
  }

  return newVisualizationConfig
}

const VisualizationsPanel = ({ loadConfig, config }) => (
  <div className='visualizations-panel'>
    <p style={{ fontSize: '14px' }}>Click and drag an item onto the grid to add it to your dashboard.</p>
    <span className='subheading-3'>Chart</span>
    <div className='drag-grid'>
      <Widget addVisualization={() => addVisualization('chart', 'Bar')} type='Bar' />
      <Widget addVisualization={() => addVisualization('chart', 'Line')} type='Line' />
      <Widget addVisualization={() => addVisualization('chart', 'Pie')} type='Pie' />
    </div>
    <span className='subheading-3'>Map</span>
    <div className='drag-grid'>
      <Widget addVisualization={() => addVisualization('map', 'us')} type='us' />
      <Widget addVisualization={() => addVisualization('map', 'world')} type='world' />
      <Widget addVisualization={() => addVisualization('map', 'single-state')} type='single-state' />
    </div>
    <span className='subheading-3'>Misc.</span>
    <div className='drag-grid'>
      <Widget addVisualization={() => addVisualization('data-bite', '')} type='data-bite' />
      <Widget addVisualization={() => addVisualization('waffle-chart', '')} type='waffle-chart' />
      <Widget addVisualization={() => addVisualization('markup-include', '')} type='markup-include' />
      <Widget addVisualization={() => addVisualization('filtered-text', '')} type='filtered-text' />
    </div>
    <span className='subheading-3'>Advanced</span>
    <AdvancedEditor loadConfig={loadConfig} state={config} />
  </div>
)

export default function CdcDashboard({ configUrl = '', config: configObj = undefined, isEditor = false, isDebug = false, setConfig: setParentConfig }) {
  const [config, setConfig] = useState(configObj ?? {})
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState()
  const [loading, setLoading] = useState(true)
  const [preview, setPreview] = useState(false)
  const [tabSelected, setTabSelected] = useState(0)
  const [currentViewport, setCurrentViewport] = useState('lg')
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  const { title, description } = config.dashboard || config

  const transform = new DataTransform()

  const getFormattedData = (data, dataDescription) => {
    if (data && dataDescription) {
      try {
        let formattedData = transform.autoStandardize(data)
        formattedData = transform.developerStandardize(data, dataDescription)
        return formattedData
      } catch (e) {
        return data
      }
    }

    return data
  }

  const processData = async config => {
    let dataset = config.formattedData || config.data

    if (config.dataUrl) {
      dataset = await fetchRemoteData(`${config.dataUrl}`)

      dataset = getFormattedData(dataset, config.dataDescription)
    }

    return dataset
  }

  const reloadURLData = async () => {
    if (config.datasets) {
      let newData = { ...data }
      let newDatasets = { ...config.datasets }
      let datasetsNeedsUpdate = false
      let datasetKeys = Object.keys(config.datasets)
      for (let i = 0; i < datasetKeys.length; i++) {
        const dataset = config.datasets[datasetKeys[i]]
        if (dataset.dataUrl && config.dashboard && config.dashboard.sharedFilters) {
          const dataUrl = new URL(dataset.runtimeDataUrl || dataset.dataUrl)
          let qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))

          let isUpdateNeeded = false

          config.dashboard.sharedFilters.forEach(filter => {
            if (filter.type === 'url' && qsParams[filter.queryParameter] !== decodeURIComponent(filter.active)) {
              qsParams[filter.queryParameter] = filter.active
              isUpdateNeeded = true
            }
          })

          if (!isUpdateNeeded) return

          let dataUrlFinal = `${dataUrl.origin}${dataUrl.pathname}${Object.keys(qsParams)
            .map((param, i) => {
              let qs = i === 0 ? '?' : '&'
              qs += param + '='
              qs += qsParams[param]
              return qs
            })
            .join('')}`

          let newDataset = await fetchRemoteData(`${dataUrlFinal}`)

          if (newDataset && dataset.dataDescription) {
            try {
              newDataset = transform.autoStandardize(newDataset)
              newDataset = transform.developerStandardize(newDataset, dataset.dataDescription)
            } catch (e) {
              //Data not able to be standardized, leave as is
            }
          }

          newDatasets[datasetKeys[i]].runtimeDataUrl = dataUrlFinal
          newData[datasetKeys[i]] = newDataset
          datasetsNeedsUpdate = true
        }
      }

      if (datasetsNeedsUpdate) {
        setData(newData)

        let newFilteredData = {}
        let newConfig = { ...config }
        Object.keys(config.visualizations).forEach(key => {
          let dataKey = config.visualizations[key].dataKey

          let applicableFilters = config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(key) !== -1)
          if (applicableFilters.length > 0) {
            newFilteredData[key] = filterData(applicableFilters, newData[dataKey])
          }

          if (newData[dataKey]) {
            newConfig.visualizations[key].formattedData = newData[dataKey]
          }
        })
        setFilteredData(newFilteredData)

        newConfig.datasets = newDatasets
        setConfig(newConfig)
      }
    }
  }

  const loadConfig = async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    let newConfig = { ...defaults, ...response }
    let datasets = {}

    if (response.datasets) {
      await Promise.all(
        Object.keys(response.datasets).map(async key => {
          datasets[key] = await processData(response.datasets[key])
        })
      )

      Object.keys(newConfig.visualizations).forEach(vizKey => {
        newConfig.visualizations[vizKey].formattedData = datasets[newConfig.visualizations[vizKey].dataKey]
      })

      Object.keys(datasets).forEach(key => {
        newConfig.datasets[key].data = datasets[key]
      })
    } else {
      let dataKey = newConfig.dataFileName || 'backwards-compatibility'
      datasets[dataKey] = await processData(response)

      let datasetsFull = {}
      datasetsFull[dataKey] = {
        data: datasets[dataKey],
        dataDescription: newConfig.dataDescription
      }
      newConfig.datasets = datasetsFull

      Object.keys(newConfig.visualizations).forEach(vizKey => {
        newConfig.visualizations[vizKey].dataKey = dataKey
        newConfig.visualizations[vizKey].dataDescription = newConfig.dataDescription
        newConfig.visualizations[vizKey].formattedData = newConfig.formattedData
      })

      delete newConfig.data
      delete newConfig.dataUrl
      delete newConfig.dataFileName
      delete newConfig.dataFileSourceType
      delete newConfig.dataDescription
      delete newConfig.formattedData

      if (newConfig.dashboard && newConfig.dashboard.filters) {
        newConfig.dashboard.sharedFilters = newConfig.dashboard.sharedFilters || []
        newConfig.dashboard.filters.forEach(filter => {
          newConfig.dashboard.sharedFilters.push({ ...filter, key: filter.label, showDropdown: true, usedBy: Object.keys(newConfig.visualizations) })
        })

        delete newConfig.dashboard.filters
      }
    }

    setData(datasets)
    updateConfig(newConfig, datasets)
    setLoading(false)
  }

  const filterData = (filters, data) => {
    let filteredData = []

    if (data) {
      data.forEach(row => {
        let add = true

        filters.forEach(filter => {
          if (filter.type !== 'url' && row[filter.columnName] != filter.active) {
            add = false
          }
        })

        if (add) filteredData.push(row)
      })

      return filteredData
    }
  }

  const setSharedFilter = (key, datum) => {
    let newConfig = { ...config }
    let newFilteredData = { ...filteredData }

    for (let i = 0; i < newConfig.dashboard.sharedFilters.length; i++) {
      if (newConfig.dashboard.sharedFilters[i].setBy === key) {
        newConfig.dashboard.sharedFilters[i].active = datum[newConfig.dashboard.sharedFilters[i].columnName]
        break
      }
    }

    Object.keys(newConfig.visualizations).forEach(visualizationKey => {
      let applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1)

      if (applicableFilters.length > 0) {
        const visualization = newConfig.visualizations[visualizationKey]

        const formattedData = visualization.dataDescription ? getFormattedData(data[visualization.dataKey] || visualization.data, visualization.dataDescription) : undefined

        newFilteredData[visualizationKey] = filterData(applicableFilters, formattedData || data[visualization.dataKey])
      }
    })

    setFilteredData(newFilteredData)
    setConfig(newConfig)
  }

  // Gets filer values from dataset
  const generateValuesForFilter = (columnName, data = this.state.data) => {
    const values = []

    Object.keys(data).forEach(key => {
      data[key].forEach(row => {
        const value = row[columnName]
        if (value && false === values.includes(value)) {
          values.push(value)
        }
      })
    })

    return values
  }

  const updateConfig = (newConfig, dataOverride = null) => {
    let newFilteredData = {}
    let visualizationKeys = Object.keys(newConfig.visualizations)

    if (newConfig.dashboard.sharedFilters) {
      newConfig.dashboard.sharedFilters.forEach((filter, i) => {
        for (let j = 0; j < visualizationKeys.length; j++) {
          if (visualizationKeys[j] === filter.setBy) {
            const filterValues = generateValuesForFilter(filter.columnName, dataOverride || data)

            if (newConfig.dashboard.sharedFilters[i].order === 'asc') {
              filterValues.sort()
            }
            if (newConfig.dashboard.sharedFilters[i].order === 'desc') {
              filterValues.sort().reverse()
            }

            newConfig.dashboard.sharedFilters[i].values = filterValues
            if (filterValues.length > 0) {
              newConfig.dashboard.sharedFilters[i].active = newConfig.dashboard.sharedFilters[i].active || newConfig.dashboard.sharedFilters[i].values[0]
            }
            break
          }
        }

        if ((!newConfig.dashboard.sharedFilters[i].values || newConfig.dashboard.sharedFilters[i].values.length === 0) && newConfig.dashboard.sharedFilters[i].showDropdown) {
          newConfig.dashboard.sharedFilters[i].values = generateValuesForFilter(filter.columnName, dataOverride || data)
          if (newConfig.dashboard.sharedFilters[i].values.length > 0) {
            newConfig.dashboard.sharedFilters[i].active = newConfig.dashboard.sharedFilters[i].active || newConfig.dashboard.sharedFilters[i].values[0]
          }
        }
      })

      visualizationKeys.forEach(visualizationKey => {
        let applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1)

        if (applicableFilters.length > 0) {
          const visualization = newConfig.visualizations[visualizationKey]

          const formattedData = getFormattedData(visualization.data, visualization.dataDescription)

          newFilteredData[visualizationKey] = filterData(applicableFilters, formattedData || visualization.data || (dataOverride || data)[visualization.dataKey])
        }
      })
    }

    setFilteredData(newFilteredData)

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    setConfig(newConfig)
  }

  // Load data when component first mounts
  useEffect(() => {
    loadConfig()
  }, [])

  // Pass up to <CdcEditor /> if it exists when config state changes
  useEffect(() => {
    if (setParentConfig && isEditor) {
      setParentConfig(config)
    }
  }, [config])

  useEffect(() => {
    reloadURLData()
  }, [JSON.stringify(config.dashboard ? config.dashboard.sharedFilters : undefined)])

  const updateChildConfig = (visualizationKey, newConfig) => {
    let updatedConfig = { ...config }

    updatedConfig.visualizations[visualizationKey] = newConfig
    updatedConfig.visualizations[visualizationKey].formattedData = config.visualizations[visualizationKey].formattedData

    setConfig(updatedConfig)
  }

  const Filters = () => {
    const changeFilterActive = (index, value) => {
      let dashboardConfig = { ...config.dashboard }

      dashboardConfig.sharedFilters[index].active = value

      setConfig({ ...config, dashboard: dashboardConfig })

      let newFilteredData = {}
      Object.keys(config.visualizations).forEach(key => {
        let applicableFilters = dashboardConfig.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(key) !== -1)
        if (applicableFilters.length > 0) {
          const visualization = config.visualizations[key]

          const formattedData = visualization.dataDescription ? getFormattedData(data[config.visualizations[key].dataKey] || visualization.data, visualization.dataDescription) : undefined

          newFilteredData[key] = filterData(applicableFilters, formattedData || data[config.visualizations[key].dataKey])
        }
      })

      setFilteredData(newFilteredData)
      if (dashboardConfig.sharedFilters[index].active === dashboardConfig.sharedFilters[index].resetLabel) {
        setFilteredData(data)
      }
    }

    const announceChange = text => {}

    return config.dashboard.sharedFilters.map((singleFilter, index) => {
      if (singleFilter.type !== 'url' && !singleFilter.showDropdown) return <></>

      const values = []

      if (singleFilter.resetLabel) {
        values.push(
          <option key={`${singleFilter.resetLabel}-option-${index}`} value={singleFilter.resetLabel}>
            {singleFilter.resetLabel}
          </option>
        )
      }

      singleFilter.values.forEach((filterOption, index) => {
        values.push(
          <option key={`${singleFilter.key}-option-${index}`} value={filterOption}>
            {singleFilter.labels ? singleFilter.labels[filterOption] || filterOption : filterOption}
          </option>
        )
      })

      return (
        <section className='dashboard-filters-section' key={`${singleFilter.key}-filtersection-${index}`}>
          <label htmlFor={`filter-${index}`}>{singleFilter.key}</label>
          <select
            id={`filter-${index}`}
            className='filter-select'
            data-index='0'
            value={singleFilter.active}
            onChange={val => {
              changeFilterActive(index, val.target.value)
              announceChange(`Filter ${singleFilter.key} value has been changed to ${val.target.value}, please reference the data table to see updated values.`)
            }}
          >
            {values}
          </select>
        </section>
      )
    })
  }

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width)

      setCurrentViewport(newViewport)
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  // Prevent render if loading
  if (loading) return <Loading />

  let body = null

  // Editor mode
  if (isEditor && !preview) {
    let subVisualizationEditing = false

    Object.keys(config.visualizations).forEach(visualizationKey => {
      let visualizationConfig = { ...config.visualizations[visualizationKey] }

      const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'

      if (filteredData && filteredData[visualizationKey]) {
        visualizationConfig.data = filteredData[visualizationKey]
        if (visualizationConfig.formattedData) {
          visualizationConfig.originalFormattedData = visualizationConfig.formattedData
          visualizationConfig.formattedData = visualizationConfig.data
        }
      } else {
        visualizationConfig.data = data[dataKey]
        if (visualizationConfig.formattedData) {
          visualizationConfig.originalFormattedData = visualizationConfig.formattedData
          visualizationConfig.formattedData = transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) || visualizationConfig.data
        }
      }

      const setsSharedFilter = config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey).length > 0
      const setSharedFilterValue = setsSharedFilter ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey)[0].active : undefined

      if (visualizationConfig.editing) {
        subVisualizationEditing = true

        const back = () => {
          const newConfig = { ...config }

          delete newConfig.visualizations[visualizationKey].editing

          setConfig(newConfig)
        }

        const updateConfig = newConfig => {
          let dataCorrectedConfig = visualizationConfig.originalFormattedData ? { ...newConfig, formattedData: visualizationConfig.originalFormattedData } : newConfig
          updateChildConfig(visualizationKey, dataCorrectedConfig)
        }

        switch (visualizationConfig.type) {
          case 'chart':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Chart' />
                <CdcChart key={visualizationKey} config={visualizationConfig} isEditor={true} isDebug={isDebug} setConfig={updateConfig} setSharedFilter={setsSharedFilter ? setSharedFilter : undefined} setSharedFilterValue={setSharedFilterValue} dashboardConfig={config} isDashboard={true} />
              </>
            )
            break
          case 'map':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Map' />
                <CdcMap key={visualizationKey} config={visualizationConfig} isEditor={true} isDebug={isDebug} setConfig={updateConfig} setSharedFilter={setsSharedFilter ? setSharedFilter : undefined} setSharedFilterValue={setSharedFilterValue} isDashboard={true} />
              </>
            )
            break
          case 'data-bite':
            visualizationConfig = { ...visualizationConfig, newViz: true }
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Data Bite' />
                <CdcDataBite key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true} />
              </>
            )
            break
          case 'waffle-chart':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Waffle Chart' />
                <CdcWaffleChart key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true} />
              </>
            )
            break
          case 'markup-include':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Markup Include' />
                <CdcMarkupInclude key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true} />
              </>
            )
            break
          case 'filtered-text':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Filtered Text' />
                <CdcFilteredText key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true} />
              </>
            )
            break
          default:
            body = <></>
            break
        }
      }
    })

    if (!subVisualizationEditing) {
      body = (
        <DndProvider backend={HTML5Backend}>
          <Header tabSelected={tabSelected} setTabSelected={setTabSelected} preview={preview} setPreview={setPreview} />
          <div className='layout-container'>
            <VisualizationsPanel loadConfig={loadConfig} config={config} />
            <Grid />
          </div>
        </DndProvider>
      )
    }
  } else {
    body = (
      <>
        {isEditor && <Header tabSelected={tabSelected} setTabSelected={setTabSelected} preview={preview} setPreview={setPreview} />}
        <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''}`}>
          {/* Title */}
          {title && (
            <div role='heading' aria-level='3' className={`dashboard-title ${config.dashboard.theme ?? 'theme-blue'}`}>
              {title}
            </div>
          )}
          {/* Description */}
          {description && <div className='subtext'>{parse(description)}</div>}
          {/* Filters */}
          {config.dashboard.sharedFilters && (
            <div className='cove-dashboard-filters'>
              {' '}
              <Filters />
            </div>
          )}

          {/* Visualizations */}
          {config.rows &&
            config.rows
              .filter(row => row.filter(col => col.widget).length !== 0)
              .map((row, index) => {
                return (
                  <div className={`dashboard-row ${row.equalHeight ? 'equal-height' : ''}`} key={`row__${index}`}>
                    {row.map((col, colIndex) => {
                      if (col.width) {
                        if (!col.widget) return <div key={`row__${index}__col__${colIndex}`} className={`dashboard-col dashboard-col-${col.width}`}></div>

                        let visualizationConfig = { ...config.visualizations[col.widget] }

                        const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'

                        if (filteredData && filteredData[col.widget]) {
                          visualizationConfig.data = filteredData[col.widget]
                          if (visualizationConfig.formattedData) {
                            visualizationConfig.originalFormattedData = visualizationConfig.formattedData
                            visualizationConfig.formattedData = visualizationConfig.data
                          }
                        } else {
                          visualizationConfig.data = data[dataKey]
                          if (visualizationConfig.formattedData) {
                            visualizationConfig.originalFormattedData = visualizationConfig.formattedData
                            visualizationConfig.formattedData = transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) || visualizationConfig.data
                          }
                        }

                        const setsSharedFilter = config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget).length > 0
                        const setSharedFilterValue = setsSharedFilter ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget)[0].active : undefined
                        const tableLink = (
                          <a href={`#data-table-${visualizationConfig.dataKey}`} className='margin-left-href'>
                            {visualizationConfig.dataKey} (Go to Table)
                          </a>
                        )

                        return (
                          <React.Fragment key={`vis__${index}__${colIndex}`}>
                            <div className={`dashboard-col dashboard-col-${col.width}`}>
                              {visualizationConfig.type === 'chart' && (
                                <CdcChart
                                  key={col.widget}
                                  config={visualizationConfig}
                                  dashboardConfig={config}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                                  isDashboard={true}
                                  link={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                                />
                              )}
                              {visualizationConfig.type === 'map' && (
                                <CdcMap
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                                  setSharedFilterValue={setSharedFilterValue}
                                  isDashboard={true}
                                  link={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                                />
                              )}
                              {visualizationConfig.type === 'data-bite' && (
                                <CdcDataBite
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  isDashboard={true}
                                />
                              )}
                              {visualizationConfig.type === 'waffle-chart' && (
                                <CdcWaffleChart
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  isDashboard={true}
                                  link={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                                />
                              )}
                              {visualizationConfig.type === 'markup-include' && (
                                <CdcMarkupInclude
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  isDashboard={true}
                                />
                              )}
                              {visualizationConfig.type === 'filtered-text' && (
                                <CdcFilteredText
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  isDashboard={true}
                                />
                              )}
                            </div>
                          </React.Fragment>
                        )
                      }
                      return <React.Fragment key={`vis__${index}__${colIndex}`}></React.Fragment>
                    })}
                  </div>
                )
              })}

          {/* Image or PDF Inserts */}
          <section className='download-buttons'>
            {config.table.downloadImageButton && <CoveMediaControls.Button title='Download Dashboard as Image' type='image' state={config} text='Download Dashboard Image' elementToCapture={imageId} />}
            {config.table.downloadPdfButton && <CoveMediaControls.Button title='Download Dashboard as PDF' type='pdf' state={config} text='Download Dashboard PDF' elementToCapture={imageId} />}
          </section>

          {/* Data Table */}
          {config.table && config.data && <DataTable data={config.data} config={config} imageRef={imageId} />}
          {config.table &&
            config.datasets &&
            Object.keys(config.datasets).map(datasetKey => {
              //For each dataset, find any shared filters that apply to all visualizations using the dataset
              //Apply these filters to the table
              let filteredTableData
              if (config.dashboard.sharedFilters && config.dashboard.sharedFilters.length > 0) {
                //Gets list of visuailzations using the dataset
                let vizKeysUsingDataset = []
                Object.keys(config.visualizations).forEach(visualizationKey => {
                  if (config.visualizations[visualizationKey].dataKey === datasetKey) {
                    vizKeysUsingDataset.push(visualizationKey)
                  }
                })

                //Checks shared filters against list to see if all visualizations are represented
                let applicableFilters = []
                config.dashboard.sharedFilters.forEach(sharedFilter => {
                  let allMatch = true
                  vizKeysUsingDataset.forEach(visualizationKey => {
                    if (sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) === -1) {
                      allMatch = false
                    }
                  })
                  if (allMatch) {
                    applicableFilters.push(sharedFilter)
                  }
                })

                //Applys any applicable filters
                if (applicableFilters.length > 0) {
                  filteredTableData = filterData(applicableFilters, config.datasets[datasetKey].data)
                }
              }

              let dataFileSourceType = config.datasets[datasetKey]?.dataFileSourceType

              return (
                <div className='multi-table-container' id={`data-table-${datasetKey}`} key={`data-table-${datasetKey}`}>
                  <DataTable data={filteredTableData || config.datasets[datasetKey].data || []} downloadData={config.datasets[datasetKey].data} dataFileSourceType={dataFileSourceType} datasetKey={datasetKey} config={config} imageRef={imageId}></DataTable>
                </div>
              )
            })}
        </div>
      </>
    )
  }

  const contextValues = {
    config,
    rawData: data,
    data: filteredData ?? data,
    visualizations: config.visualizations,
    rows: config.rows,
    loading,
    updateConfig,
    setParentConfig,
    setPreview,
    outerContainerRef,
    isDebug
  }

  const dashboardContainerClasses = ['cdc-open-viz-module', 'type-dashboard', `${currentViewport}`]

  return (
    <GlobalContextProvider>
      <ConfigContext.Provider value={contextValues}>
        <div className={dashboardContainerClasses.join(' ')} ref={outerContainerRef} data-download-id={imageId}>
          {body}
        </div>
        <OverlayFrame />
      </ConfigContext.Provider>
    </GlobalContextProvider>
  )
}
