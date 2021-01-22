import React, { useState, useEffect } from 'react';
import Context from './context';
import DataImport from './components/DataImport';
import ChooseVis from './components/ChooseVisualization';
import ConfigVis from './components/ConfigureVisualization';
import TabPane from './components/TabPane';
import Tabs from './components/Tabs';

import './scss/main.scss';

export default function CdcEditor() {

useEffect(() => {
  
});
  return (
    <Context.Provider>
      <div className="cdc-open-viz-module cdc-editor">
        <Tabs className="tab-content editor-container mb-2">
          <TabPane title="1. Design Data" className="data-designer">
            <DataImport />
          </TabPane>
          <TabPane title="2. Choose Visualization">
            <ChooseVis />
          </TabPane>
          <TabPane title="3. Configure">
            <ConfigVis />
          </TabPane>
        </Tabs>
      </div>
    </Context.Provider>
  );
}
