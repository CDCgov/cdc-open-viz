import React, { useState, useEffect, memo } from 'react';
import GlobalState from './context';
import DataImport from './components/DataImport';
import ConfigTab from './components/ConfigTab';
import TabPane from './components/TabPane';
import Tabs from './components/Tabs';

import './scss/main.scss';

export default function CdcEditor({ startingTab = null, config: configObj = null }) {
  const [config, setConfig] = useState(configObj)
  const [data, setData] = useState(null);
  const [type, setType] = useState('map'); // Default to map, temporarily
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if(config && config.hasOwnProperty('data')) {
      setData(config.data)
    }
  }, [config])

  const state = {
    data,
    setData,
    type,
    setType,
    config,
    setConfig,
    errors,
    setErrors
  }

  if(null === startingTab) {
    startingTab = config ? 1 : 0;
  }

  return (
    <GlobalState.Provider value={state}>
      <div className="cdc-open-viz-module cdc-editor">
        <Tabs className="top-level" startingTab={startingTab}>
          <TabPane title="1. Import Data" className="data-designer">
            <DataImport />
          </TabPane>
          <TabPane title="2. Configure" disableRule={null === data}>
            <ConfigTab />
          </TabPane>
        </Tabs>
      </div>
    </GlobalState.Provider>
  );
}
