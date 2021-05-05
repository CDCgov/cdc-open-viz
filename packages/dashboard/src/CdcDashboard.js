import React, { useState, useEffect } from 'react';

// IE11
import 'core-js/stable'
import 'whatwg-fetch'

import parse from 'html-react-parser';

import Loading from '@cdc/core/components/Loading';
import Waiting from '@cdc/core/components/Waiting';
import CdcMap from '@cdc/map';
import CdcChart from '@cdc/chart';

import EditorPanel from './components/EditorPanel';
import Context from './context';
import defaults from './data/initial-state';

import './scss/main.scss';

export default function CdcDashboard(
  { configUrl = '', config: configObj = undefined, isEditor = false } 
) {

  const [config, setConfig] = useState({});

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  
  const { title, description } = config.dashboard || config;

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json();

    // If data is included through a URL, fetch that and store
    let data = response.data ?? {}

    if(response.dataUrl) {
      const dataString = await fetch(response.dataUrl);

      data = await dataString.json();
    }

    setData(data);

    let newConfig = {...defaults, ...response}

    updateConfig(newConfig);

    setLoading(false);
  }

  const updateConfig = (newConfig) => {
    // Deeper copy
    Object.keys(defaults).forEach( key => {
      if(newConfig[key] && 'object' === typeof newConfig[key]) {
        newConfig[key] = {...defaults[key], ...newConfig[key]}
      }
    });

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {};

    setConfig(newConfig);
  };

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
  }, []);

  // Prevent render if loading
  let body = (<Loading />)

  if(false === loading) {
    body = (
      <>
        {isEditor && <EditorPanel />}
        {!config.newViz && !config.runtime.editorErrorMessage && <div className="cdc-dashboard-inner-container">
          {/* Title */}
          {title && <h1 className={`dashboard-title ${config.dashboard.theme}`}>{title}</h1>}

          {/* Visualizations */}
          {Object.keys(config.visualizations).map(visualizationKey => {
            let visualizationConfig = config.visualizations[visualizationKey];
            visualizationConfig.data = data;

            switch(visualizationConfig.type){
              case 'chart':
                return <CdcChart key={visualizationKey} config={visualizationConfig} />;
              case 'map': 
                return <CdcMap key={visualizationKey} config={visualizationConfig} />;
                default: 
              return <></>;
            }
          })}

          {/* Description */}
          {description && <div className="dashboard-description">{parse(description)}</div>}
        </div>}
      </>
    )
  }

  return (
    <Context.Provider value={{ config, data, loading, updateConfig }}>
      <div className="cdc-open-viz-module type-dashboard">
        {body}
      </div>
    </Context.Provider>
  );
}
