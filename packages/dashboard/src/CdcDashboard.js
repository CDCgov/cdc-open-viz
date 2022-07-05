import React, { useState, useEffect, useCallback } from 'react'

// IE11
import 'core-js/stable'
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import parse from 'html-react-parser'

import Loading from '@cdc/core/components/Loading'
import DataTransform from '@cdc/core/components/DataTransform'
import getViewport from '@cdc/core/helpers/getViewport'

import CdcMap from '@cdc/map'
import CdcChart from '@cdc/chart'
import CdcDataBite from '@cdc/data-bite'
import CdcWaffleChart from '@cdc/waffle-chart'
import CdcMarkupInclude from '@cdc/markup-include'
import FilteredText from '@cdc/filtered-text';

import EditorPanel from './components/EditorPanel'
import Grid from './components/Grid'
import Header from './components/Header'
import Context from './context'
import defaults from './data/initial-state'
import Widget from './components/Widget'
import DataTable from './components/DataTable'

import Papa from 'papaparse'

import './scss/main.scss'

const addVisualization = (type, subType) => {
  let newVisualizationConfig = {
    newViz: true,
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
  }

  return newVisualizationConfig
}

const VisualizationsPanel = () => (
  <div className="visualizations-panel">
    <p style={{ fontSize: '14px' }}>Click and drag an item onto the grid to add it to your dashboard.</p>
    <span className="subheading-3">Chart</span>
    <div className="drag-grid">
      <Widget addVisualization={() => addVisualization('chart', 'Bar')} type="Bar"/>
      <Widget addVisualization={() => addVisualization('chart', 'Line')} type="Line"/>
      <Widget addVisualization={() => addVisualization('chart', 'Pie')} type="Pie"/>
    </div>
    <span className="subheading-3">Map</span>
    <div className="drag-grid">
      <Widget addVisualization={() => addVisualization('map', 'us')} type="us"/>
      <Widget addVisualization={() => addVisualization('map', 'world')} type="world"/>
      <Widget addVisualization={() => addVisualization('map', 'single-state')} type="single-state"/>
    </div>
    <span className="subheading-3">Misc.</span>
    <div className="drag-grid">
      <Widget addVisualization={() => addVisualization('data-bite', '')} type="data-bite"/>
      <Widget addVisualization={() => addVisualization('waffle-chart', '')} type="waffle-chart"/>
      <Widget addVisualization={() => addVisualization('markup-include', '')} type="markup-include"/>
      <Widget addVisualization={() => addVisualization('filtered-text', '')} type="filtered-text"/>
    </div>
  </div>
)

export default function CdcDashboard(
  { configUrl = '', config: configObj = undefined, isEditor = false, setConfig: setParentConfig, hostname }
) {

  const transform = new DataTransform()

  const [ config, setConfig ] = useState(configObj)

  const [ data, setData ] = useState([])

  const [ filteredData, setFilteredData ] = useState()

  const [ loading, setLoading ] = useState(true)

  const [ preview, setPreview ] = useState(false)

  const [ currentViewport, setCurrentViewport ] = useState('lg')

  const { title, description } = config ? (config.dashboard || config) : {}

  // Supports JSON or CSV
  const fetchRemoteData = async (url) => {
    try {
      const urlObj = new URL(url)
      const regex = /(?:\.([^.]+))?$/

      let data = []

      const ext = (regex.exec(urlObj.pathname)[1])
      if ('csv' === ext) {
        data = await fetch(url)
          .then(response => response.text())
          .then(responseText => {
            const parsedCsv = Papa.parse(responseText, {
              header: true,
              dynamicTyping: true,
              skipEmptyLines: true
            })
            return parsedCsv.data
          })
      }

      if ('json' === ext) {
        data = await fetch(url)
          .then(response => response.json())
      }

      return data
    } catch {
      // If we can't parse it, still attempt to fetch it
      try {
        let response = await (await fetch(configUrl)).json()
        return response
      } catch {
        console.error(`Cannot parse URL: ${url}`)
      }
    }
  }

  const loadConfig = async (configObj) => {
    // Set loading flag
    if (!loading) setLoading(true)

    let newState = configObj || await (await fetch(configUrl)).json()

    // If a dataUrl property exists, always pull from that.
    if (newState.dataUrl) {
      if (newState.dataUrl[0] === '/') {
        newState.dataUrl = 'https://' + hostname + newState.dataUrl
      }

      let newData = await fetchRemoteData(newState.dataUrl)

      if (newData && newState.dataDescription) {
        newData = transform.autoStandardize(newData)
        newData = transform.developerStandardize(newData, newState.dataDescription)
      }

      if (newData) {
        newState.data = newData
      }
    }

    // If data is included through a URL, fetch that and store
    let data = newState.formattedData || newState.data || {}

    setData(data)

    let newConfig = { ...defaults, ...newState }

    updateConfig(newConfig, data)

    setLoading(false)
  }

  const filterData = (filters, data) => {
    let filteredData = []

    data.forEach((row) => {
      let add = true

      filters.forEach((filter) => {
        if (row[filter.columnName] !== filter.active) {
          add = false
        }
      })

      if (add) filteredData.push(row)
    })

    return filteredData
  }

  // Gets filer values from dataset
  const generateValuesForFilter = (columnName, data = this.state.data) => {
    const values = []

    data.forEach((row) => {
      const value = row[columnName]
      if (value && false === values.includes(value)) {
        values.push(value)
      }
    })

    return values
  }

  const updateConfig = (newConfig, dataOverride = null) => {
    // After data is grabbed, loop through and generate filter column values if there are any
    if (newConfig.dashboard.filters) {
      const filterList = []

      newConfig.dashboard.filters.forEach((filter) => {
        filterList.push(filter.columnName)
      })

      filterList.forEach((filter, index) => {
        const filterValues = generateValuesForFilter(filter, (dataOverride || data))

        if (newConfig.dashboard.filters[index].order === 'asc') {
          filterValues.sort()
        }
        if (newConfig.dashboard.filters[index].order === 'desc') {
          filterValues.sort().reverse()
        }

        newConfig.dashboard.filters[index].values = filterValues

        // Initial filter should be active
        newConfig.dashboard.filters[index].active = filterValues[0]
      })

      setFilteredData(filterData(newConfig.dashboard.filters, (dataOverride || data)))
    }

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}

    setConfig(newConfig)
  }

  // Load data when component first mounts
  useEffect(() => {
    loadConfig(config)
  }, [])

  // Pass up to <CdcEditor /> if it exists when config state changes
  useEffect(() => {
    if (setParentConfig && isEditor) {
      setParentConfig(config)
    }
  }, [ config ])

  const updateChildConfig = (visualizationKey, newConfig) => {
    let updatedConfig = { ...config }

    updatedConfig.visualizations[visualizationKey] = newConfig
    setConfig(updatedConfig)
  }

  const Filters = () => {
    const changeFilterActive = (index, value) => {
      let dashboardConfig = { ...config.dashboard }

      dashboardConfig.filters[index].active = value

      setConfig({ ...config, dashboard: dashboardConfig })

      setFilteredData(filterData(dashboardConfig.filters, data))
    }

    const announceChange = (text) => {

    }

    return config.dashboard.filters.map((singleFilter, index) => {
      const values = []

      singleFilter.values.forEach((filterOption, index) => {
        values.push(<option
          key={index}
          value={filterOption}
        >{filterOption}
        </option>)
      })

      return (
        <section className="dashboard-filters-section" key={index}>
          <label htmlFor={`filter-${index}`}>{singleFilter.label}</label>
          <select
            id={`filter-${index}`}
            className="filter-select"
            data-index="0"
            value={singleFilter.active}
            onChange={(val) => {
              changeFilterActive(index, val.target.value)
              announceChange(`Filter ${singleFilter.label} value has been changed to ${val.target.value}, please reference the data table to see updated values.`)
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
  if (loading) return <Loading/>

  let body = null

  // Editor mode
  if (isEditor && !preview) {
    let subVisualizationEditing = false

    Object.keys(config.visualizations).forEach(visualizationKey => {
      let visualizationConfig = config.visualizations[visualizationKey]

      visualizationConfig.data = filteredData || data

      if (visualizationConfig.editing) {
        subVisualizationEditing = true

        const back = () => {
          const newConfig = { ...config }

          delete newConfig.visualizations[visualizationKey].editing

          setConfig(newConfig)
        }

        const updateConfig = (newConfig) => updateChildConfig(visualizationKey, newConfig)

        switch (visualizationConfig.type) {
          case 'chart':
            body = <><Header back={back} subEditor="Chart"/><CdcChart key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true}/></>
            break
          case 'map':
            body = <><Header back={back} subEditor="Map"/><CdcMap key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true}/></>
            break
          case 'data-bite':
            visualizationConfig = { ...visualizationConfig, newViz: true }
            body = <><Header back={back} subEditor="Data Bite"/><CdcDataBite key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true}/></>
            break
          case 'waffle-chart':
            body = <><Header back={back} subEditor="Waffle Chart"/><CdcWaffleChart key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true}/></>
            break
          case 'markup-include':
            body = <><Header back={back} subEditor="Markup Include"/><CdcMarkupInclude key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true}/></>
            break
            case 'filtered-text':
              body = <><Header back={back} subEditor="Filtered Text"/><FilteredText key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true}/></>
              break
        }
      }
    })

    if (!subVisualizationEditing) {
      body = (
        <DndProvider backend={HTML5Backend}>
          <Header preview={preview} setPreview={setPreview}/>
          <div className="layout-container">
            <VisualizationsPanel/>
            <Grid/>
          </div>
        </DndProvider>
      )
    }
  } else {
    body = (
      <>
        {isEditor && <Header preview={preview} setPreview={setPreview}/>}
        {isEditor && <EditorPanel/>}
        <div className="cdc-dashboard-inner-container">
          {/* Title */}
          {title && <div role="heading" className={`dashboard-title ${config.dashboard.theme ?? 'theme-blue'}`}>{title}</div>}

          {/* Filters */}
          {config.dashboard.filters && <Filters/>}

          {/* Visualizations */}
          {config.rows && config.rows.map((row, index) => {
            // Empty check
            if (row.filter(col => col.widget).length === 0) return null

            return (
              <div className="dashboard-row" key={`row__${index}`}>
                {row.map((col, index) => {
                  if (col.width) {
                    if (!col.widget) return <div className={`dashboard-col dashboard-col-${col.width}`}></div>

                    let visualizationConfig = config.visualizations[col.widget]

                    visualizationConfig.data = filteredData || data

                    return <div className={`dashboard-col dashboard-col-${col.width}`} key={`vis__${index}`}>
                      {visualizationConfig.type === 'chart' && <CdcChart key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'map' && <CdcMap key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'data-bite' && <CdcDataBite key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'waffle-chart' && <CdcWaffleChart key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'markup-include' && <CdcMarkupInclude key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'filtered-text' && <FilteredText key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                    </div>
                  }
                })}
              </div>)
          })}

          {/* Data Table */}
          {config.table.show && <DataTable/>}

          {/* Description */}
          {description && <div className="subtext">{parse(description)}</div>}
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
    setPreview
  }

  return (
    <Context.Provider value={contextValues}>
      <div className={`cdc-open-viz-module type-dashboard ${currentViewport}`} ref={outerContainerRef}>
        {body}
      </div>
    </Context.Provider>
  )
}
