import React, { useState, useEffect } from 'react';
import GlobalState from './context';
import DataImport from './components/DataImport';
import ChooseVisTab from './components/ChooseVisTab';
import ConfigTab from './components/ConfigTab';
import TabPane from './components/TabPane';
import Tabs from './components/Tabs';

import './scss/main.scss';

export default function CdcEditor({ startingTab }) {
  const [data, setData] = useState(null);
  const [type, setType] = useState('map'); // Default to map, temporarily

  const state = {
    data,
    setData,
    type,
    setType
  }

  return (
    <GlobalState.Provider value={state}>
      <div className="cdc-open-viz-module cdc-editor">
        <Tabs className="top-level" startingTab={startingTab}>
          <TabPane title="1. Import Data" className="data-designer">
            <DataImport />
          </TabPane>
          <TabPane title="2. Choose Visualization">
            <ChooseVisTab />
          </TabPane>
          <TabPane title="3. Configure">
            <ConfigTab />
          </TabPane>
        </Tabs>
      </div>
    </GlobalState.Provider>
  );
}
