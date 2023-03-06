import React, { useState, useEffect, useRef } from 'react'

// Third Party
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import parse from 'html-react-parser'

// Store
import useGlobalStore from '@cdc/core/stores/global/globalSlice'
import useConfigStore from '@cdc/core/stores/config/configSlice'
import useDataStore from '@cdc/core/stores/data/dataSlice'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'
import dataTransform from '@cdc/core/helpers/data/dataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

// Components - Core
import MediaControls from '@cdc/core/components/ui/MediaControls'
import RenderFallback from '@cdc/core/components/loader/RenderFallback'

// Components - Local
import Builder from './builder/Builder'
import BuilderWidget from './builder/Builder.Widget'
import DataTable from './DataTable'
import Header from './Header'

// Visualizations
import CdcMap from '@cdc/map/src/CdcMap'
import CdcChart from '@cdc/chart/src/CdcChart'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import CdcFilteredText from '@cdc/filtered-text/src/CdcFilteredText'

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
  // Store Selectors
  const { viewMode, setViewMode } = useGlobalStore()

  const { config, setConfig, updateConfig, updateConfigField, updateParentConfig } = useConfigStore()
  const { data, datasets, filteredData } = useDataStore()

  const { title, description } = config.dashboard || config

  const [ previewingVisualization, setPreviewingVisualization ] = useState(false)

  const [ tabSelected, setTabSelected ] = useState(0)
  const [ imageId ] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  let editingVisualization = useRef(false)
  const transform = new dataTransform()

  useEffect(() => {
    setViewMode('isDashboard', true)
  }, [])

  let body = null

  // Editor mode
  if (viewMode.isEditor && !previewingVisualization) {
    editingVisualization.current = false

    Object.keys(config.visualizations).forEach(visualizationKey => {
      let visualizationConfig = config.visualizations[visualizationKey]

      if (visualizationConfig.editing) {
        editingVisualization.current = true

        switch (visualizationConfig.type) {
          case 'chart':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} subEditor="Chart"/>
                <CdcChart key={visualizationKey} config={visualizationConfig} isEditor={true} isDashboard={true}/>
              </>
            )
            break
          case 'map':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} subEditor="Map"/>
                <CdcMap key={visualizationKey} config={visualizationConfig} isEditor={true} isDashboard={true}/>
              </>
            )
            break
          case 'data-bite':
            visualizationConfig = { ...visualizationConfig, newViz: true }
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} subEditor="Data Bite"/>
                <CdcDataBite
                  config={visualizationConfig}
                  key={visualizationKey}
                />
              </>
            )
            break
          case 'waffle-chart':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} subEditor="Waffle Chart"/>
                <CdcWaffleChart key={visualizationKey} config={visualizationConfig} isDashboard={true}/>
              </>
            )
            break
          case 'markup-include':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} subEditor="Markup Include"/>
                <CdcMarkupInclude
                  config={visualizationConfig}
                  visualizationKey={visualizationKey}
                  key={visualizationKey}
                />
              </>
            )
            break
          case 'filtered-text':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} subEditor="Filtered Text"/>
                <CdcFilteredText key={visualizationKey} config={visualizationConfig} isDashboard={true}/>
              </>
            )
            break
          default:
            body = <></>
            break
        }
      }
    })

    if (!editingVisualization.current) {
      body = (
        <DndProvider backend={HTML5Backend}>
          <Header tabSelected={tabSelected} setTabSelected={setTabSelected} preview={previewingVisualization} setPreview={setPreviewingVisualization}/>
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
          <Header tabSelected={tabSelected} setTabSelected={setTabSelected} preview={previewingVisualization} setPreview={setPreviewingVisualization}/>
        }
        <div className={`cdc-dashboard-inner-container${viewMode.isWizard ? ' is-wizard' : ''}`}>
          Showing dashboard inner container
          {/* Title */}
          {title && (
            <div role="heading" aria-level="3" className={`cove-dashboard-title ${config.dashboard.theme ?? 'blue'}`}>
              {title}
            </div>
          )}

          {/* Description */}
          {description &&
            <div className="cove-dashboard-description">
              {parse(description)}
            </div>
          }

          {/* Filters */}
          {config.dashboard.sharedFilters && (
            <div className="cove-dashboard-filters">
              {/*<Filters/>*/}
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

                        let visualizationConfig = config.visualizations[col.widget]

                        return (
                          <React.Fragment key={`vis__${index}__${colIndex}`}>
                            <div className={`dashboard-col dashboard-col-${col.width}`}>
                              {visualizationConfig.type === 'chart' && (
                                <CdcChart
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  isDashboard={true}
                                />
                              )}
                              {visualizationConfig.type === 'map' && (
                                <CdcMap
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  isDashboard={true}
                                />
                              )}
                              {visualizationConfig.type === 'data-bite' && (
                                <CdcDataBite
                                  config={visualizationConfig}
                                  isPreview={true}
                                  key={col.widget}
                                />
                              )}
                              {visualizationConfig.type === 'waffle-chart' && (
                                <CdcWaffleChart
                                  config={visualizationConfig}
                                  isPreview={true}
                                  key={col.widget}
                                />
                              )}
                              {visualizationConfig.type === 'markup-include' && (
                                <CdcMarkupInclude
                                  config={visualizationConfig}
                                  isPreview={true}
                                  key={col.widget}
                                />
                              )}
                              {visualizationConfig.type === 'filtered-text' && (
                                <CdcFilteredText
                                  config={visualizationConfig}
                                  isPreview={true}
                                  key={col.widget}
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
        </div>
      </>
    )
  }

  return (
    <div className={`cove cove-dashboard${1 === 'isSubEditor' ? ' cove-dashboard--subviz' : ''}`} data-download-id={imageId}>
      {body}
    </div>
  )
}

export default Dashboard
