import React, { useState, useEffect, useCallback } from 'react'

// IE11
import 'core-js/stable'
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

import Grid from './components/Grid'
import Header from './components/Header'
import defaults from './data/initial-state'
import Widget from './components/Widget'
import DataTable from './components/DataTable'

import './scss/main.scss'
import '@cdc/core/styles/v2/main.scss'

const addVisualization = (type, subType) => {
  let newVisualizationConfig = {
    newViz: true,
    openModal: true,
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
    default:
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
    </div>
  </div>
)

export default function CdcDashboard({ configUrl = '', config: configObj = undefined, isEditor = false, setConfig: setParentConfig }) {
  const [ config, setConfig ] = useState(configObj ?? {})
  const [ data, setData ] = useState([])
  const [ filteredData, setFilteredData ] = useState()
  const [ loading, setLoading ] = useState(true)
  const [ preview, setPreview ] = useState(false)
  const [ tabSelected, setTabSelected ] = useState(0);
  const [ currentViewport, setCurrentViewport ] = useState('lg')

  const { title, description } = config.dashboard || config

  const transform = new DataTransform()

  const processData = async (config) => {
    let dataset = config.formattedData || config.data

    if (!dataset && config.dataUrl) {
      dataset = await fetchRemoteData(config.dataUrl)

      if (dataset && config.dataDescription) {
        try {
          dataset = transform.autoStandardize(data)
          dataset = transform.developerStandardize(data, config.dataDescription)
        } catch (e) {
          //Data not able to be standardized, leave as is
        }
      }
    }

    return dataset
  }

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json()
    let datasets = {}

    if (response.datasets) {
      await Promise.all(Object.keys(response.datasets).map(async (key) => {
        datasets[key] = await processData(response.datasets[key])
      }))
    } else {
      datasets['backwards-compatibility'] = await processData(response)
    }

    setData(datasets)

    let newConfig = { ...defaults, ...response }

    updateConfig(newConfig, datasets)
    setLoading(false)
  }

  const filterData = (filters, data) => {
    let filteredData = []

    if(data){
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
      let applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1);
      
      if (applicableFilters.length > 0) {
        const visualization = newConfig.visualizations[visualizationKey]
        
        newFilteredData[visualizationKey] = filterData(applicableFilters, visualization.formattedData || data[visualization.dataKey])
      }
    })

    setFilteredData(newFilteredData)
    setConfig(newConfig)
  }

  // Gets filer values from dataset
  const generateValuesForFilter = (columnName, data = this.state.data) => {
    const values = []

    Object.keys(data).forEach(key => {
      data[key].forEach((row) => {
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
            const filterValues = generateValuesForFilter(filter.columnName, (dataOverride || data))

            if (newConfig.dashboard.sharedFilters[i].order === 'asc') {
              filterValues.sort()
            }
            if (newConfig.dashboard.sharedFilters[i].order === 'desc') {
              filterValues.sort().reverse()
            }

            newConfig.dashboard.sharedFilters[i].values = filterValues
            if(filterValues.length > 0){
              newConfig.dashboard.sharedFilters[i].active = newConfig.dashboard.sharedFilters[i].active || newConfig.dashboard.sharedFilters[i].values[0];
            }
            break
          }
        }

        if ((!newConfig.dashboard.sharedFilters[i].values || newConfig.dashboard.sharedFilters[i].values.length === 0) && newConfig.dashboard.sharedFilters[i].showDropdown) {
          newConfig.dashboard.sharedFilters[i].values = generateValuesForFilter(filter.columnName, (dataOverride || data))
          if(newConfig.dashboard.sharedFilters[i].values.length > 0){
            newConfig.dashboard.sharedFilters[i].active = newConfig.dashboard.sharedFilters[i].active || newConfig.dashboard.sharedFilters[i].values[0];
          }
        }
      })

      visualizationKeys.forEach(visualizationKey => {
        let applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1);

        if (applicableFilters.length > 0) {
          newFilteredData[visualizationKey] = filterData(applicableFilters, newConfig.visualizations[visualizationKey].formattedData || newConfig.visualizations[visualizationKey].data || (dataOverride || data)[newConfig.visualizations[visualizationKey].dataKey])
        }
      })
    }

    setFilteredData(newFilteredData)

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    setConfig(newConfig)
  }

  // Backwards compatiblity support for .filters after moving to .sharedFilters
  useEffect(() => {
    let legacyUpdateNeeded = false
    let newConfig

    if (config.data || config.dataUrl) {
      legacyUpdateNeeded = true
      newConfig = { ...config }

      newConfig.datasets = {}
      newConfig.datasets[config.dataFileName || 'dataset-1'] = {
        data: config.data,
        dataUrl: config.dataUrl,
        dataFileName: config.dataFileName || 'dataset-1',
        dataFileSourceType: config.dataFileSourceType
      }

      Object.keys(newConfig.visualizations).forEach(vizKey => {
        newConfig.visualizations[vizKey].dataKey = config.dataFileName || 'dataset-1'
        newConfig.visualizations[vizKey].dataDescription = newConfig.dataDescription
        newConfig.visualizations[vizKey].formattedData = newConfig.formattedData
      })

      delete newConfig.data
      delete newConfig.dataUrl
      delete newConfig.dataFileName
      delete newConfig.dataFileSourceType
      delete newConfig.dataDescription
      delete newConfig.formattedData
    }

    if (config.dashboard && config.dashboard.filters) {
      legacyUpdateNeeded = true
      newConfig = { ...(newConfig || config) }

      newConfig.dashboard.sharedFilters = newConfig.dashboard.sharedFilters || []
      newConfig.dashboard.filters.forEach(filter => {
        newConfig.dashboard.sharedFilters.push({ ...filter, key: filter.label, showDropdown: true, usedBy: Object.keys(newConfig.visualizations) })
      })

      delete newConfig.dashboard.filters
    }

    if (legacyUpdateNeeded) {
      updateConfig(newConfig)
      if (newConfig.datasets) {
        let newData = {}
        Object.keys(newConfig.datasets).forEach(dataKey => newData[dataKey] = newConfig.datasets[dataKey].data)
        setData(newData)
      }
    }
  })

  // Load data when component first mounts
  useEffect(() => {
    loadConfig()
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
        if(applicableFilters.length > 0){
          newFilteredData[key] = filterData(applicableFilters, config.visualizations[key].formattedData || data[config.visualizations[key].dataKey])
        }
      })

      setFilteredData(newFilteredData)
    }

    const announceChange = (text) => {}

    return config.dashboard.sharedFilters.map((singleFilter, index) => {
      if (!singleFilter.showDropdown) return

      const values = []

      singleFilter.values.forEach((filterOption, index) => {
        values.push(<option
          key={`${singleFilter.key}-option-${index}`}
          value={filterOption}
        >{filterOption}
        </option>)
      })

      return (
        <section className="dashboard-filters-section" key={`${singleFilter.key}-filtersection-${index}`}>
          <label htmlFor={`filter-${index}`}>{singleFilter.key}</label>
          <select
            id={`filter-${index}`}
            className="filter-select"
            data-index="0"
            value={singleFilter.active}
            onChange={(val) => {
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
  if (loading) return <Loading/>

  let body = null

  // Editor mode
  if (isEditor && !preview) {
    let subVisualizationEditing = false

    Object.keys(config.visualizations).forEach(visualizationKey => {
      let visualizationConfig = { ...config.visualizations[visualizationKey] }

      const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'

      visualizationConfig.data = filteredData && filteredData[visualizationKey] ? filteredData[visualizationKey] : data[dataKey]
      if (visualizationConfig.formattedData) {
        visualizationConfig.originalFormattedData = visualizationConfig.formattedData;
        visualizationConfig.formattedData = visualizationConfig.data
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

        const updateConfig = (newConfig) => {
          let dataCorrectedConfig = visualizationConfig.originalFormattedData ? {...newConfig, formattedData: visualizationConfig.originalFormattedData} : newConfig;
          updateChildConfig(visualizationKey, dataCorrectedConfig)
        }

        switch (visualizationConfig.type) {
          case 'chart':
            body = <><Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Chart"/>
              <CdcChart
                key={visualizationKey}
                config={visualizationConfig}
                isEditor={true}
                setConfig={updateConfig}
                setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                isDashboard={true}
              />
            </>
            break
          case 'map':
            body = <><Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Map"/>
              <CdcMap
                key={visualizationKey}
                config={visualizationConfig}
                isEditor={true}
                setConfig={updateConfig}
                setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                setSharedFilterValue={setSharedFilterValue}
                isDashboard={true}
              />
            </>
            break
          case 'data-bite':
            visualizationConfig = { ...visualizationConfig, newViz: true }
            body = <><Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Data Bite"/>
              <CdcDataBite
                key={visualizationKey}
                config={visualizationConfig}
                isEditor={true}
                setConfig={updateConfig}
                isDashboard={true}
              />
            </>
            break
          case 'waffle-chart':
            body = <><Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Waffle Chart"/>
              <CdcWaffleChart
                key={visualizationKey}
                config={visualizationConfig}
                isEditor={true}
                setConfig={updateConfig}
                isDashboard={true}
              />
            </>
            break
          case 'markup-include':
            body = <><Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Markup Include"/>
              <CdcMarkupInclude
                key={visualizationKey}
                config={visualizationConfig}
                isEditor={true}
                setConfig={updateConfig}
                isDashboard={true}
              />
            </>
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
          <Header tabSelected={tabSelected} setTabSelected={setTabSelected} preview={preview} setPreview={setPreview}/>
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
   
        {isEditor && <Header tabSelected={tabSelected} setTabSelected={setTabSelected} preview={preview} setPreview={setPreview}/>}
        <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''}`}>
          {/* Title */}
          {title &&
            <div role="heading" aria-level="3" className={`dashboard-title ${config.dashboard.theme ?? 'theme-blue'}`}>{title}</div>}
          {/* Description */}
          {description && <div className="subtext">{parse(description)}</div>}
          {/* Filters */}
          {config.dashboard.sharedFilters && <Filters/>}

          {/* Visualizations */}
          {config.rows && config.rows.filter(row => row.filter(col => col.widget).length !== 0).map((row, index) => {

            return (

              <div className={`dashboard-row ${row.equalHeight ? 'equal-height' : ''}`} key={`row__${index}`}>
                {row.map((col, colIndex) => {
                  if (col.width) {
                    if (!col.widget) return <div key={`row__${index}__col__${colIndex}`} className={`dashboard-col dashboard-col-${col.width}`}></div>

                    let visualizationConfig = { ...config.visualizations[col.widget] }

                    const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'

                    visualizationConfig.data = filteredData && filteredData[col.widget] ? filteredData[col.widget] : data[dataKey]
                    if (visualizationConfig.formattedData) {
                      visualizationConfig.formattedData = visualizationConfig.data
                    }

                    const setsSharedFilter = config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget).length > 0
                    const setSharedFilterValue = setsSharedFilter ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget)[0].active : undefined
                    const tableLink = <a  href={`#data-table-${visualizationConfig.dataKey}`}>{visualizationConfig.dataKey} (Go to Table)</a>;
                   
                    return (
                      <React.Fragment key={`vis__${index}__${colIndex}`}>
                        <div  className={`dashboard-col dashboard-col-${col.width}`}>
                          {visualizationConfig.type === 'chart' && (
                            <CdcChart
                              key={col.widget}
                            config={visualizationConfig}
                            isEditor={false}
                            setConfig={(newConfig) => {
                              updateChildConfig(col.widget, newConfig)
                            }}
                            setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                            isDashboard={true}
                            link = { config.table && config.table.show && config.datasets ? tableLink : undefined }
                            />
                            )}
                          {visualizationConfig.type === 'map' && (
                            <CdcMap
                            key={col.widget}
                            config={visualizationConfig}
                            isEditor={false}
                            setConfig={(newConfig) => {
                              updateChildConfig(col.widget, newConfig)
                            }}
                            setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                            setSharedFilterValue={setSharedFilterValue}
                            isDashboard={true}
                            link = { config.table && config.table.show && config.datasets ? tableLink : undefined }
                            />
                            )}
                          {visualizationConfig.type === 'data-bite' && (
                            <CdcDataBite
                            key={col.widget}
                            config={visualizationConfig}
                            isEditor={false}
                            setConfig={(newConfig) => {
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
                            setConfig={(newConfig) => {
                              updateChildConfig(col.widget, newConfig)
                              }}
                              isDashboard={true}
                              link = { config.table && config.table.show && config.datasets ? tableLink : undefined }
                              />
                          )}
                          {visualizationConfig.type === 'markup-include' && (
                            <CdcMarkupInclude
                              key={col.widget}
                              config={visualizationConfig}
                              isEditor={false}
                              setConfig={(newConfig) => {
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
              </div>)
          })}

          {/* Data Table */}
          {config.table && config.table.show && config.data && <DataTable data={config.data} config={config}/>}
          {config.table && config.table.show && config.datasets && Object.keys(config.datasets).map(datasetKey => {
            
            //For each dataset, find any shared filters that apply to all visualizations using the dataset
            //Apply these filters to the table
            let filteredTableData;
            if(config.dashboard.sharedFilters && config.dashboard.sharedFilters.length > 0){
              //Gets list of visuailzations using the dataset
              let vizKeysUsingDataset = [];
              Object.keys(config.visualizations).forEach(visualizationKey => {
                if(config.visualizations[visualizationKey].dataKey === datasetKey){
                  vizKeysUsingDataset.push(visualizationKey);
                }
              });

              //Checks shared filters against list to see if all visualizations are represented
              let applicableFilters = [];
              config.dashboard.sharedFilters.forEach(sharedFilter => {
                let allMatch = true;
                vizKeysUsingDataset.forEach(visualizationKey => {
                  if(sharedFilter.usedBy.indexOf(visualizationKey) === -1){
                    allMatch = false;
                  }
                });
                if(allMatch){
                  applicableFilters.push(sharedFilter);
                }
              });

              //Applys any applicable filters
              if(applicableFilters.length > 0){
                filteredTableData = filterData(applicableFilters, config.datasets[datasetKey].data)
              }
            }

            return (<div className="multi-table-container" id={`data-table-${datasetKey}`} key={`data-table-${datasetKey}`}>
              <DataTable data={filteredTableData || config.datasets[datasetKey].data} datasetKey={datasetKey} config={config}></DataTable>
            </div>)
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
    setPreview
  }

  return (
    <GlobalContextProvider>
      <ConfigContext.Provider value={contextValues}>
        <div className={`cdc-open-viz-module type-dashboard ${currentViewport}`} ref={outerContainerRef}>
          {body}
        </div>
        <OverlayFrame/>
      </ConfigContext.Provider>
    </GlobalContextProvider>
  )
}
