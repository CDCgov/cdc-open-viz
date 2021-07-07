import React, { useState, useEffect } from 'react';

// IE11
import 'core-js/stable'
import 'whatwg-fetch'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import parse from 'html-react-parser';

import Loading from '@cdc/core/components/Loading';
import DataTransform from '@cdc/core/components/DataTransform';
import CdcMap from '@cdc/map';

import CdcChart from '@cdc/chart';

import EditorPanel from './components/EditorPanel';
import Grid from './components/Grid';
import Context from './context';
import defaults from './data/initial-state';

import './scss/main.scss';

export default function CdcDashboard(
  { configUrl = '', config: configObj = undefined, isEditor = false, setParentConfig = undefined } 
) {

  const transform = new DataTransform();

  const [config, setConfig] = useState({});

  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState();

  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState('');
  
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

  const updateChildConfig = (visualizationKey, newConfig) => {
    let updatedConfig = JSON.parse(JSON.stringify(config));

    if(!updatedConfig.visualizations) updatedConfig.visualizations = {};
    updatedConfig.visualizations[visualizationKey] = newConfig;

    if(setParentConfig){
      setParentConfig(updatedConfig);
    } else {
      setConfig(updatedConfig);
    }
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
        <section className="filters-section" key={index}>
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

  // Prevent render if loading
  if(loading) return <Loading />

  let body = null

  // Editor mode
  if(isEditor) {
    body = (
      <>
        <EditorPanel />
        <Grid />
      </>
    )
  } else {
    body = (
      <div className="cdc-dashboard-inner-container">
        {/* Title */}
        {title && <div role="heading" className={`dashboard-title ${config.dashboard.theme}`}>{title}</div>}

        {/* Filters */}
        {config.dashboard.filters && <Filters />}

        {/* Visualizations */}
        {Object.keys(config.visualizations).map(visualizationKey => {
          let visualizationConfig = config.visualizations[visualizationKey];

          visualizationConfig.data = filteredData || data;

          switch(visualizationConfig.type){
            case 'chart':
              return <CdcChart key={visualizationKey} config={visualizationConfig} isEditor={visualizationKey === editing} setConfig={(newConfig) => {updateChildConfig(visualizationKey, newConfig)}} isDashboard={true} setEditing={setEditing} />;
            case 'map': 
              return <CdcMap key={visualizationKey} config={visualizationConfig} isEditor={visualizationKey === editing} setConfig={(newConfig) => {updateChildConfig(visualizationKey, newConfig)}} isDashboard={true} setEditing={setEditing} />;
              default: 
            return <></>;
          }
        })}

        {/* Description */}
        {description && <div className="dashboard-description">{parse(description)}</div>}
      </div>
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
    setEditing
  }

  return (
    <Context.Provider value={contextValues}>
      <div className="cdc-open-viz-module type-dashboard">
        <DndProvider backend={HTML5Backend}>
          {body}
        </DndProvider>
      </div>
    </Context.Provider>
  );
}
