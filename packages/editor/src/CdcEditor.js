import React, { useState, useEffect, memo } from 'react';
import GlobalState from './context';
import DataImport from './components/DataImport';
import ConfigTab from './components/ConfigTab';
import TabPane from './components/TabPane';
import Tabs from './components/Tabs';

import './scss/main.scss';

export default function CdcEditor({ startingTab = null, config: configObj = null, hostname }) {
  const [config, setConfig] = useState(configObj)
  const [dataURL, setDataURL] = useState(null);
  const [data, setData] = useState(null);
  const [keepURL, setKeepURL] = useState(false)
  const [type, setType] = useState('map'); // Default to map, temporarily
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if(config && config.hasOwnProperty('data')) {
      setData(config.data)
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
    hostname
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
