import React, { useState, useEffect, memo } from 'react';

import 'core-js/stable'

import GlobalState from './context';
import DataImport from './components/DataImport';
import ChooseTab from './components/ChooseTab';
import ConfigureTab from './components/ConfigureTab';
import TabPane from './components/TabPane';
import Tabs from './components/Tabs';

import './scss/main.scss';

export default function CdcEditor({ config: configObj = null, hostname }) {
  const [config, setConfig] = useState(configObj)
  const [dataURL, setDataURL] = useState(null)
  const [data, setData] = useState(null)
  const [keepURL, setKeepURL] = useState(false)
  const [errors, setErrors] = useState([])

  let startingType = null
  let startingSubType = null

  if(configObj && configObj.type) {
    startingType = configObj.type
  }

  const [type, setType] = useState(startingType)

  if(configObj && configObj.visualizationType) {
    startingSubType = configObj.visualizationType
  }

  if(configObj && configObj.general && configObj.general.geoType) {
    startingSubType = configObj.geoType
  }

  const [subType, setSubType] = useState(startingSubType)

  let startingTab = config ? 2 : 0;

  const [globalActive, setGlobalActive] = useState(startingTab);

  useEffect(() => {
    if(globalActive > -1) {
      setGlobalActive(-1)
    }
  }, [globalActive])

  useEffect(() => {
    if(config && config.hasOwnProperty('data')) {
      setData(config.data)
    }
    if(config && config.hasOwnProperty('type')) {
      setType(config.type)
    }
  }, [config])

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
    data,
    setData,
    type,
    setType,
    subType,
    setSubType,
    config,
    setConfig,
    errors,
    setErrors,
    errorMessages,
    maxFileSize,
    dataURL,
    setDataURL,
    keepURL,
    setKeepURL,
    hostname,
    globalActive,
    setGlobalActive
  }

  return (
    <GlobalState.Provider value={state}>
      <div className="cdc-open-viz-module cdc-editor">
        <Tabs className="top-level" startingTab={globalActive}>
          <TabPane title="1. Import Data" className="data-designer">
            <DataImport />
          </TabPane>
          <TabPane title="2. Choose Visualization Type" className="choose-type" disableRule={null === data}>
            <ChooseTab />
          </TabPane>
          <TabPane title="3. Configure" disableRule={null === data || null === type}>
            <ConfigureTab />
          </TabPane>
        </Tabs>
      </div>
    </GlobalState.Provider>
  );
}
