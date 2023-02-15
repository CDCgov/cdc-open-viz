import React, { useState, useEffect, useRef } from 'react'

// Third Party
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import parse from 'html-react-parser'

// Store
import { useGlobalStore } from '@cdc/core/stores/globalStore'
import { useConfigStore } from '@cdc/core/stores/configStore'

// Helpers
import filterData from '@cdc/core/helpers/filterData'
import dataTransform from '@cdc/core/helpers/dataTransform'

// Components - Core
import MediaControls from '@cdc/core/components/ui/MediaControls'

// Components - Local
import Builder from './builder/Builder'
import BuilderWidget from './builder/Builder.Widget'
import DataTable from './DataTable'
import Header from './Header'


// Visualization
import CdcMap from '@cdc/map'
import CdcChart from '@cdc/chart'
import CdcDataBite from '@cdc/data-bite'
import CdcWaffleChart from '@cdc/waffle-chart'
import CdcMarkupInclude from '@cdc/markup-include'
import CdcFilteredText from '@cdc/filtered-text'

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

const VisualizationsPanel = () => (
  <div className="cove-dashboard__sidebar">
    <p className="mb-2" style={{ fontSize: '14px' }}>
      Click and drag an item onto the grid to add it to your dashboard.
    </p>
    <div className="cove-dashboard__sidebar-title">Chart</div>
    <div className="cove-dashboard__viz-grid">
      <BuilderWidget addVisualization={() => addVisualization('chart', 'Bar')} type="Bar"/>
      <BuilderWidget addVisualization={() => addVisualization('chart', 'Line')} type="Line"/>
      <BuilderWidget addVisualization={() => addVisualization('chart', 'Pie')} type="Pie"/>
    </div>
    <div className="cove-dashboard__sidebar-title">Map</div>
    <div className="cove-dashboard__viz-grid">
      <BuilderWidget addVisualization={() => addVisualization('map', 'us')} type="us"/>
      <BuilderWidget addVisualization={() => addVisualization('map', 'world')} type="world"/>
      <BuilderWidget addVisualization={() => addVisualization('map', 'single-state')} type="single-state"/>
    </div>
    <div className="cove-dashboard__sidebar-title">Misc</div>
    <div className="cove-dashboard__viz-grid">
      <BuilderWidget addVisualization={() => addVisualization('data-bite', '')} type="data-bite"/>
      <BuilderWidget addVisualization={() => addVisualization('waffle-chart', '')} type="waffle-chart"/>
      <BuilderWidget addVisualization={() => addVisualization('markup-include', '')} type="markup-include"/>
      <BuilderWidget addVisualization={() => addVisualization('filtered-text', '')} type="filtered-text"/>
    </div>
  </div>
)

const Dashboard = () => {
  const { viewMode } = useGlobalStore()
  const { config, updateConfig, updateWizardConfig } = useConfigStore()

  const { title, description } = config.dashboard || config

  const [ filteredData, setFilteredData ] = useState()
  const [ preview, setPreview ] = useState(false)

  const [ tabSelected, setTabSelected ] = useState(0)
  const [ imageId ] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  const transform = new dataTransform()
  let isSubEditor = useRef(false)

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

        newFilteredData[visualizationKey] = filterData(applicableFilters, visualization.formattedData || config.data[visualization.dataKey])
      }
    })

    setFilteredData(newFilteredData)
    updateConfig(newConfig)
  }

  // Pass up to <CdcEditor /> if it exists when config state changes
  useEffect(() => {
    if (updateWizardConfig && viewMode.isWizard) {
      updateWizardConfig(config)
    }
  }, [ config ])

  const updateChildConfig = (visualizationKey, newConfig) => {
    let updatedConfig = { ...config }

    updatedConfig.visualizations[visualizationKey] = newConfig
    updatedConfig.visualizations[visualizationKey].formattedData = config.visualizations[visualizationKey].formattedData

    updateConfig(updatedConfig)
  }

  const Filters = () => {
    const changeFilterActive = (index, value) => {
      let dashboardConfig = { ...config.dashboard }

      dashboardConfig.sharedFilters[index].active = value

      updateConfig({ ...config, dashboard: dashboardConfig })

      let newFilteredData = {}
      Object.keys(config.visualizations).forEach(key => {
        let applicableFilters = dashboardConfig.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(key) !== -1)
        if (applicableFilters.length > 0) {
          newFilteredData[key] = filterData(applicableFilters, config.visualizations[key].formattedData || config.data[config.visualizations[key].dataKey])
        }
      })

      setFilteredData(newFilteredData)
    }

    const announceChange = text => {}

    return config.dashboard.sharedFilters.map((singleFilter, index) => {
      if (singleFilter.showDropdown) {
        return (
          <section className="dashboard-filters-section" key={`${singleFilter.key}-filtersection-${index}`}>
            <label htmlFor={`filter-${index}`}>{singleFilter.key}</label>
            <select
              id={`filter-${index}`}
              className="filter-select"
              data-index="0"
              value={singleFilter.active}
              onChange={val => {
                changeFilterActive(index, val.target.value)
                announceChange(`Filter ${singleFilter.key} value has been changed to ${val.target.value}, please reference the data table to see updated values.`)
              }}
            >
              {singleFilter.values.map((filterOption, index) => (
                <option key={`${singleFilter.key}-option-${index}`} value={filterOption}>
                  {filterOption}
                </option>
              ))}
            </select>
          </section>
        )
      }
    })
  }

  let body = null

  // Editor mode
  if (viewMode.isEditor && !preview) {
    isSubEditor.current = false
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
        visualizationConfig.data = config.data[dataKey]
        if (visualizationConfig.formattedData) {
          visualizationConfig.originalFormattedData = visualizationConfig.formattedData
          visualizationConfig.formattedData = transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) || visualizationConfig.data
        }
      }

      const setsSharedFilter = config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey).length > 0
      const setSharedFilterValue = setsSharedFilter ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey)[0].active : undefined

      if (visualizationConfig.editing) {
        isSubEditor.current = true
        subVisualizationEditing = true

        const back = () => {
          const newConfig = { ...config }
          delete newConfig.visualizations[visualizationKey].editing
          updateConfig(newConfig)
        }

        const updateSubConfig = newConfig => {
          let dataCorrectedConfig = visualizationConfig.originalFormattedData ? { ...newConfig, formattedData: visualizationConfig.originalFormattedData } : newConfig
          updateChildConfig(visualizationKey, dataCorrectedConfig)
        }

        switch (visualizationConfig.type) {
          case 'chart':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Chart"/>
                <CdcChart key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateSubConfig} setSharedFilter={setsSharedFilter ? setSharedFilter : undefined} isDashboard={true}/>
              </>
            )
            break
          case 'map':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Map"/>
                <CdcMap key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateSubConfig} setSharedFilter={setsSharedFilter ? setSharedFilter : undefined} setSharedFilterValue={setSharedFilterValue} isDashboard={true}/>
              </>
            )
            break
          case 'data-bite':
            visualizationConfig = { ...visualizationConfig, newViz: true }
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Data Bite"/>
                <CdcDataBite key={visualizationKey} config={visualizationConfig} isWizard={true} setConfig={updateSubConfig} isDashboard={true}/>
              </>
            )
            break
          case 'waffle-chart':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Waffle Chart"/>
                <CdcWaffleChart key={visualizationKey} config={visualizationConfig} isWizard={true} setConfig={updateSubConfig} isDashboard={true}/>
              </>
            )
            break
          case 'markup-include':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Markup Include"/>
                <CdcMarkupInclude key={visualizationKey} config={visualizationConfig} isWizard={true} setConfig={updateSubConfig} isDashboard={true}/>
              </>
            )
            break
          case 'filtered-text':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor="Filtered Text"/>
                <CdcFilteredText key={visualizationKey} config={visualizationConfig} isWizard={true} setConfig={updateSubConfig} isDashboard={true}/>
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
          <Header tabSelected={tabSelected} setTabSelected={setTabSelected} preview={preview} setPreview={setPreview}/>
          <div className="cove-dashboard__content">
            <VisualizationsPanel/>
            <Builder/>
          </div>
        </DndProvider>
      )
    }
  } else {
    body = (
      <>
        {viewMode.isWizard &&
          <Header tabSelected={tabSelected} setTabSelected={setTabSelected} preview={preview} setPreview={setPreview}/>
        }
        <div className={`cdc-dashboard-inner-container${viewMode.isWizard ? ' is-wizard' : ''}`}>
          {/* Title */}
          {title && (
            <div role="heading" aria-level="3" className={`dashboard-title ${config.dashboard.theme ?? 'blue'}`}>
              {title}
            </div>
          )}

          {/* Description */}
          {description &&
            <div className="subtext">
              {parse(description)}
            </div>
          }

          {/* Filters */}
          {config.dashboard.sharedFilters && (
            <div className="cove-dashboard-filters">
              <Filters/>
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
                          visualizationConfig.data = config.data[dataKey]
                          if (visualizationConfig.formattedData) {
                            visualizationConfig.originalFormattedData = visualizationConfig.formattedData
                            visualizationConfig.formattedData = transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) || visualizationConfig.data
                          }
                        }

                        const setsSharedFilter = config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget).length > 0
                        const setSharedFilterValue = setsSharedFilter ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget)[0].active : undefined
                        const tableLink = <a href={`#data-table-${visualizationConfig.dataKey}`}>{visualizationConfig.dataKey} (Go to Table)</a>

                        console.log(config.rows)

                        return (
                          <React.Fragment key={`vis__${index}__${colIndex}`}>
                            <div className={`dashboard-col dashboard-col-${col.width}`}>
                              {visualizationConfig.type === 'chart' && (
                                <CdcChart
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                                  isDashboard={true}
                                  link={config.table && config.table.show && config.datasets ? tableLink : undefined}
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
                                  link={config.table && config.table.show && config.datasets ? tableLink : undefined}
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
                                  link={config.table && config.table.show && config.datasets ? tableLink : undefined}
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
          <section>
            {config.table?.downloadImageButton &&
              <MediaControls.Button title="Download Dashboard as Image" type="image" state={config} text="Download Dashboard Image" elementToCapture={imageId}/>
            }
            {config.table?.downloadPdfButton &&
              <MediaControls.Button title="Download Dashboard as PDF" type="pdf" state={config} text="Download Dashboard PDF" elementToCapture={imageId}/>
            }
          </section>

          {/* Data Table */}
          {/*{config.table && config.data &&
            <DataTable data={config.data} config={config} imageRef={imageId}/>
          }*/}
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
                    if (sharedFilter.usedBy.indexOf(visualizationKey) === -1) {
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
                <div className="cove-dashboard__data-table" id={`data-table-${datasetKey}`} key={`data-table-${datasetKey}`}>
                  <DataTable data={filteredTableData || config.datasets[datasetKey].data} downloadData={config.datasets[datasetKey].data} dataFileSourceType={dataFileSourceType} datasetKey={datasetKey} config={config} imageRef={imageId}/>
                </div>
              )
            })}
        </div>
      </>
    )
  }

  /*const contextValues = {
          config,
          rawData: data,
    data: filteredData ?? data,
          visualizations: config.visualizations,
    rows: config.rows,
          loading,
          updateConfig,
          setParentConfig,
    setPreview
  }*/

  return (
    <div className={`cove-dashboard${isSubEditor.current ? ' cove-dashboard--subviz' : ''}`} data-download-id={imageId}>
      {body}
    </div>
  )
}

export default Dashboard
