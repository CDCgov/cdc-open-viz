import React, { useState, useEffect, memo } from 'react';

import 'core-js/stable'

import GlobalState from './context';
import DataImport from './components/DataImport';
import ChooseTab from './components/ChooseTab';
import ConfigureTab from './components/ConfigureTab';
import TabPane from './components/TabPane';
import Tabs from './components/Tabs';

import './scss/main.scss';

export default function CdcEditor({ config: configObj = {newViz: true}, hostname }) {
  const [config, setConfig] = useState(configObj)
  const [tempConfig, setTempConfig] = useState(null)
  const [errors, setErrors] = useState([])

  let startingTab = config.data ? 2 : 0;

  const [globalActive, setGlobalActive] = useState(startingTab);

  useEffect(() => {
    if(globalActive > -1) {
      setGlobalActive(-1)
    }
  }, [globalActive])

  const maxFileSize = 5; // Represents number of MB. Maybe move this to a prop eventually but static for now.

  const errorMessages = {
    emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
    emptyData: "Your data file is empty.",
    dataType: "Your datatype is not supported.",
    fileType: "The file type that you are trying to upload is not supported.",
    formatting: "Please check the formatting of your data file.",
    failedFetch: "Error fetching or parsing data file.",
    urlInvalid: "Please make sure to use a valid URL.",
    cannotReach: "Cannot reach URL, please make sure it's correct.",
    fileTooLarge: `File is too large. Maximum file size is ${maxFileSize}MB.`
  };

  const state = {
    config,
    setConfig,
    errors,
    setErrors,
    errorMessages,
    maxFileSize,
    hostname,
    globalActive,
    setGlobalActive,
    tempConfig,
    setTempConfig
  }

  return (
    <GlobalState.Provider value={state}>
      <div className="cdc-open-viz-module cdc-editor">
        <Tabs className="top-level" startingTab={globalActive}>
          <TabPane title="1. Import Data" className="data-designer">
            <DataImport />
          </TabPane>
          <TabPane title="2. Choose Visualization Type" className="choose-type" disableRule={!config.data}>
            <ChooseTab />
          </TabPane>
          <TabPane title="3. Configure" disableRule={null === config.data || !config.type}>
            <ConfigureTab />
          </TabPane>
        </Tabs>
      </div>
    </GlobalState.Provider>
  );
}
