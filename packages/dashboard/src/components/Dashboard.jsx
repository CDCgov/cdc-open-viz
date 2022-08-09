import React, { useState, useEffect } from 'react'

// Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

// Components - Core
import Component from '@cdc/core/components/Component'

// Components - Local
import Widget from './Widget'

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
    case 'data-byte':
      newVisualizationConfig.visualizationType = type
      break
    case 'waffle-chart':
      newVisualizationConfig.visualizationType = type
      break
    case 'markup-include':
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
      <Widget addVisualization={() => addVisualization('map', 'Usa')} type="us"/>
      <Widget addVisualization={() => addVisualization('map', 'World')} type="world"/>
      <Widget addVisualization={() => addVisualization('map', 'Al')} type="single-state"/>
    </div>
    <span className="subheading-3">Misc.</span>
    <div className="drag-grid">
      <Widget addVisualization={() => addVisualization('data-byte', '')} type="data-byte"/>
      <Widget addVisualization={() => addVisualization('waffle-chart', '')} type="waffle-chart"/>
      <Widget addVisualization={() => addVisualization('markup-include', '')} type="markup-include"/>
    </div>
  </div>
)

// Visualization
const Dashboard = ({ configObj, configUrlObj, setParentConfig, editorMode, isConsumed }) => {
  const { config, configActions, missingRequiredSections } = useConfigContext()
  let { title, theme } = config

  const [ filteredData, setFilteredData ] = useState()
  const [ preview, setPreview ] = useState(false)

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

  useEffect(() => {
    if (setParentConfig) setParentConfig(config)
  }, [ config ])

  const updateChildConfig = (visualizationKey, newConfig) => {
    let updatedConfig = { ...config }

    updatedConfig.visualizations[visualizationKey] = newConfig
    configActions.setConfig(updatedConfig)
  }

  const Filters = () => {
    const changeFilterActive = (index, value) => {
      let dashboardConfig = { ...config.dashboard }

      dashboardConfig.filters[index].active = value

      configActions.setConfig({ ...config, dashboard: dashboardConfig })

      setFilteredData(filterData(dashboardConfig.filters, config.data))
    }

    const announceChange = (text) => {}

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

  // Editor mode
  if (editorMode && !preview) {
    let subVisualizationEditing = false

    Object.keys(config.visualizations).forEach(visualizationKey => {
      let visualizationConfig = config.visualizations[visualizationKey]

      visualizationConfig.data = filteredData || data

      if (visualizationConfig.editing) {
        subVisualizationEditing = true

        const back = () => {
          const newConfig = { ...config }

          delete newConfig.visualizations[visualizationKey].editing

          configActions.setConfig(newConfig)
        }

        const updateConfig = (newConfig) => updateChildConfig(visualizationKey, newConfig)

        switch (visualizationConfig.type) {
          case 'chart':
            body = <><Header back={back} subEditor="Chart"/><CdcChart key={visualizationKey} config={visualizationConfig} editorMode={true} setConfig={updateConfig} isDashboard={true}/></>
            break
          case 'map':
            body = <><Header back={back} subEditor="Map"/><CdcMap key={visualizationKey} config={visualizationConfig} editorMode={true} setConfig={updateConfig} isDashboard={true}/></>
            break
          case 'data-byte':
            visualizationConfig = { ...visualizationConfig, newViz: true }
            body = <><Header back={back} subEditor="Data Byte"/><CdcDataByte key={visualizationKey} config={visualizationConfig} editorMode={true} setConfig={updateConfig} isDashboard={true}/></>
            break
          case 'waffle-chart':
            body = <><Header back={back} subEditor="Waffle Chart"/><CdcWaffleChart key={visualizationKey} config={visualizationConfig} editorMode={true} setConfig={updateConfig} isDashboard={true}/></>
            break
          case 'markup-include':
            body = <><Header back={back} subEditor="Markup Include"/><CdcMarkupInclude key={visualizationKey} config={visualizationConfig} editorMode={true} setConfig={updateConfig} isDashboard={true}/></>
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
        {editorMode && <Header preview={preview} setPreview={setPreview}/>}
        {editorMode && <EditorPanels/>}
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
                      {visualizationConfig.type === 'chart' && <CdcChart key={col.widget} config={visualizationConfig} editorMode={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'map' && <CdcMap key={col.widget} config={visualizationConfig} editorMode={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'data-byte' && <CdcDataByte key={col.widget} config={visualizationConfig} editorMode={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'waffle-chart' && <CdcWaffleChart key={col.widget} config={visualizationConfig} editorMode={false} setConfig={(newConfig) => {
                        updateChildConfig(col.widget, newConfig)
                      }} isDashboard={true}/>}
                      {visualizationConfig.type === 'markup-include' && <CdcMarkupInclude key={col.widget} config={visualizationConfig} editorMode={false} setConfig={(newConfig) => {
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
    <Component className="cove-dashboard" title={title} theme={theme}>
      {!missingRequiredSections && !config.newViz && (<>

      </>)}
    </Component>
  )
}

export default Dashboard
