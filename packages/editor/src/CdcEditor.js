import React, { useState } from 'react';
import Context from './context';
import DataImport from './components/DataImport';
import TabPane from './components/TabPane';
import Tabs from './components/Tabs';

import './scss/main.scss';

export default function CdcEditor() {
  return (
    <Context.Provider>
      <div className="cdc-open-viz-module cdc-editor">
        <Tabs className="tab-content editor-container mb-2">
          <TabPane title="1. Design Data" className="data-designer">
            <DataImport />
          </TabPane>
          <TabPane title="2. Choose Visualization">
            <DataImport />
          </TabPane>
          <TabPane title="3. Configure">
            <DataImport />
          </TabPane>
        </Tabs>
      </div>
    </Context.Provider>
  );
}
