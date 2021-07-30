import React, { useState, useEffect, useCallback } from 'react';

// IE11
import 'core-js/stable'
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import parse from 'html-react-parser';

import Loading from '@cdc/core/components/Loading';
import DataTransform from '@cdc/core/components/DataTransform';
import getViewport from '@cdc/core/helpers/getViewport';

import CdcMap from '@cdc/map';
import CdcChart from '@cdc/chart';
import CdcDataBite from '@cdc/data-bite';

import EditorPanel from './components/EditorPanel';
import Grid from './components/Grid';
import Header from './components/Header';
import Context from './context';
import defaults from './data/initial-state';
import Widget from './components/Widget';
import DataTable from './components/DataTable';

import './scss/main.scss';

const addVisualization = (type, subType) => {
  let newVisualizationConfig = {newViz: true};
  newVisualizationConfig.uid = type + Date.now();
  newVisualizationConfig.type = type;

  switch(type) {
    case 'chart':
      newVisualizationConfig.visualizationType = subType;
      break;
    case 'map':
      newVisualizationConfig.general = {};
      newVisualizationConfig.general.geoType = subType;
      break;
    case 'data-bite':
      newVisualizationConfig.visualizationType = type;
      break;
  }

  return newVisualizationConfig
}

const VisualizationsPanel = () => (
  <div className="visualizations-panel">
    <p style={{fontSize: '14px'}}>Click and drag an item onto the grid to add it to your dashboard.</p>
    <span className="subheading-3">Chart</span>
    <div className="drag-grid">
      <Widget addVisualization={() => addVisualization('chart', 'Bar')} type="Bar" />
      <Widget addVisualization={() => addVisualization('chart', 'Line')} type="Line" />
      <Widget addVisualization={() => addVisualization('chart', 'Pie')} type="Pie" />
    </div>
    <span className="subheading-3">Map</span>
    <div className="drag-grid">
      <Widget addVisualization={() => addVisualization('map', 'us')} type="us" />
      <Widget addVisualization={() => addVisualization('map', 'world')} type="world" />
    </div>
    <span className="subheading-3">Misc.</span>
    <div className="drag-grid">
      <Widget addVisualization={() => addVisualization('data-bite', '')} type="data-bite" />
    </div>
  </div>
)

export default function CdcDashboard(
  { configUrl = '', config: configObj = undefined, isEditor = false, setConfig: setParentConfig }
) {

  const transform = new DataTransform();

  const [config, setConfig] = useState(configObj ?? {});

  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState();

  const [loading, setLoading] = useState(true);

  const [preview, setPreview] = useState(false);

  const [currentViewport, setCurrentViewport] = useState('lg')

  const { title, description } = config.dashboard || config;

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json();

    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {}

    if(response.dataUrl) {
      const dataString = await fetch(response.dataUrl);

      data = await dataString.json();

      try {
        data = transform.autoStandardize(data);
        data = transform.developerStandardize(data, response.dataDescription);
      } catch(e) {
        //Data not able to be standardized, leave as is
      }
    }

    setData(data);

    let newConfig = {...defaults, ...response}

    updateConfig(newConfig, data);

    setLoading(false);
  }

  const filterData = (filters, data) => {
    let filteredData = [];

    data.forEach((row) => {
      let add = true;

      filters.forEach((filter) => {
        if(row[filter.columnName] !== filter.active) {
          add = false;
        }
      });

      if(add) filteredData.push(row);
    });

    return filteredData;
  }

  // Gets filer values from dataset
  const generateValuesForFilter = (columnName, data = this.state.data) => {
    const values = [];

    data.forEach( (row) => {
        const value = row[columnName]
        if(value && false === values.includes(value)) {
            values.push(value)
        }
    });

    return values;
  }

  const updateConfig = (newConfig, dataOverride = null) => {    
    // After data is grabbed, loop through and generate filter column values if there are any
    if (newConfig.dashboard.filters) {
      const filterList = [];

      newConfig.dashboard.filters.forEach((filter) => {
          filterList.push(filter.columnName);
      });

      filterList.forEach((filter, index) => {
          const filterValues = generateValuesForFilter(filter, (dataOverride || data));

          newConfig.dashboard.filters[index].values = filterValues;

          // Initial filter should be active
          newConfig.dashboard.filters[index].active = filterValues[0];
      });

      setFilteredData(filterData(newConfig.dashboard.filters, (dataOverride || data)));
    }

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {};

    setConfig(newConfig);
  };

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
  }, []);

  // Pass up to <CdcEditor /> if it exists when config state changes
  useEffect(() => {
    if(setParentConfig && isEditor) {
      setParentConfig(config);
    }
  }, [config])

  const updateChildConfig = (visualizationKey, newConfig) => {
    let updatedConfig = {...config}

    updatedConfig.visualizations[visualizationKey] = newConfig;
    setConfig(updatedConfig);
  };

  const Filters = () => {
    const changeFilterActive = (index, value) => {
      let dashboardConfig = {...config.dashboard};

      dashboardConfig.filters[index].active = value;

      setConfig({...config, dashboard: dashboardConfig});

      setFilteredData(filterData(dashboardConfig.filters, data));
    };

    const announceChange = (text) => {

    };

    return config.dashboard.filters.map((singleFilter, index) => {
      const values = [];

      singleFilter.values.forEach((filterOption, index) => {
        values.push(<option
          key={index}
          value={filterOption}
        >{filterOption}
        </option>);
      });

      return (
        <section className="dashboard-filters-section" key={index}>
          <label htmlFor={`filter-${index}`}>{singleFilter.label}</label>
          <select
            id={`filter-${index}`}
            className="filter-select"
            data-index="0"
            value={singleFilter.active}
            onChange={(val) => {
              changeFilterActive(index, val.target.value);
              announceChange(`Filter ${singleFilter.label} value has been changed to ${val.target.value}, please reference the data table to see updated values.`);
            }}
          >
            {values}
          </select>
        </section>
      );
    });;
  }

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        let newViewport = getViewport(entry.contentRect.width)

        setCurrentViewport(newViewport)
    }
  });

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
        resizeObserver.observe(node);
    }
  },[]);

  // Prevent render if loading
  if(loading) return <Loading />

  let body = null

  // Editor mode
  if(isEditor && !preview) {
    let subVisualizationEditing = false;

    Object.keys(config.visualizations).forEach(visualizationKey => {
      let visualizationConfig = config.visualizations[visualizationKey];

      visualizationConfig.data = filteredData || data;

    if(visualizationConfig.editing) {
        subVisualizationEditing = true;

        const back = () => {
          const newConfig = {...config}

          delete newConfig.visualizations[visualizationKey].editing

          setConfig(newConfig)
        }

        const updateConfig = (newConfig) => updateChildConfig(visualizationKey, newConfig)

        switch(visualizationConfig.type){
          case 'chart':
            body = <><Header back={back} subEditor="Chart" /><CdcChart key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true} /></>;
            break;
          case 'map': 
            body = <><Header back={back} subEditor="Map" /><CdcMap key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true} /></>;
            break;
          case 'data-bite':
            visualizationConfig = {...visualizationConfig, newViz: true}
            body = <><Header back={back} subEditor="Data Bite" /><CdcDataBite key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={updateConfig} isDashboard={true} /></>
            break;
        }
      }
    });

    if(!subVisualizationEditing){
      body = (
        <DndProvider backend={HTML5Backend}>
          <Header preview={preview} setPreview={setPreview} />
          <div className="layout-container">
            <VisualizationsPanel />
            <Grid />
          </div>
        </DndProvider>
      )
    }
  } else {
    body = (
      <>
        {isEditor && <Header preview={preview} setPreview={setPreview} />}
        {isEditor && <EditorPanel />}
        <div className="cdc-dashboard-inner-container">
          {/* Title */}
          {title && <div role="heading" className={`dashboard-title ${config.dashboard.theme ?? 'theme-blue'}`}>{title}</div>}

          {/* Filters */}
          {config.dashboard.filters && <Filters />}

          {/* Visualizations */}
          {config.rows && config.rows.map(row => {
            return (
              <div className="dashboard-row">
                {row.map(col => {
                  if(col.width) {
                    if(!col.widget) return <div className={`dashboard-col dashboard-col-${col.width}`}></div>

                    let visualizationConfig = config.visualizations[col.widget];

                    visualizationConfig.data = filteredData || data;
            
                    return <div className={`dashboard-col dashboard-col-${col.width}`}>
                      {visualizationConfig.type === 'chart' && <CdcChart key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {updateChildConfig(col.widget, newConfig)}} isDashboard={true} />}
                      {visualizationConfig.type === 'map' && <CdcMap key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {updateChildConfig(col.widget, newConfig)}} isDashboard={true} />}
                      {visualizationConfig.type === 'data-bite' && <CdcDataBite key={col.widget} config={visualizationConfig} isEditor={false} setConfig={(newConfig) => {updateChildConfig(col.widget, newConfig)}} isDashboard={true} />}
                    </div>
                  }
                })}
              </div>);
          })}

          {/* Description */}
          {description && <div className="dashboard-description">{parse(description)}</div>}

          {/* Data Table */}
          {config.table.show && <DataTable />}
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
  );
}
