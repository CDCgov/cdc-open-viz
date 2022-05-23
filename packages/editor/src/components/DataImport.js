import React, { useState, useContext, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { csvParse } from 'd3'
import { get } from 'axios'

import GlobalState from '../context'
import '../scss/data-import.scss'
import TabPane from './TabPane'
import Tabs from './Tabs'
import PreviewDataTable from './PreviewDataTable'

import LinkIcon from '../assets/icons/link.svg'
import FileUploadIcon from '../assets/icons/file-upload-solid.svg'
import CloseIcon from '@cdc/core/assets/icon-close.svg'

import validMapData from '../../example/valid-data-map.csv'
import validChartData from '../../example/valid-data-chart.csv'
import validCountyMapData from '../../example/valid-county-data.csv'

import DataQuestionnaire from '@cdc/core/components/DataQuestionnaire'
import { DataTransform } from '@cdc/core/components/DataTransform'

import '@cdc/core/styles/dataquestionnaire.scss'

export default function DataImport() {
  const {
    config,
    setConfig,
    errors,
    setErrors,
    errorMessages,
    maxFileSize,
    setGlobalActive,
    tempConfig,
    setTempConfig
  } = useContext(GlobalState)

  const transform = new DataTransform()

  const [ externalURL, setExternalURL ] = useState(config.dataFileSourceType === 'url' ? config.dataFileName : (config.dataUrl || ''))

  const [ keepURL, setKeepURL ] = useState(!!config.dataUrl)

  const [ addingDataset, setAddingDataset ] = useState(true);

  const supportedDataTypes = {
    '.csv': 'text/csv',
    '.json': 'application/json'
  }

  const displayFileName = (name) => {
    const nameParts = name.split('/');
    return nameParts[nameParts.length - 1];
  }

  const displaySize = (size) => {
    if(size === undefined) return '';
    
    if(size > Math.pow(1024, 3)){
      return Math.round(size / Math.pow(1024, 3) * 100) / 100 + ' GB';
    } else if(size > Math.pow(1024, 2)){
      return Math.round(size / Math.pow(1024, 2) * 100) / 100 + ' MB';
    } else if(size > 1024){
      return Math.round(size / 1024 * 100) / 100 + ' KB';
    } else {
      return size + ' B'
    }
  }

  /**
   * Check to see all series for the viz exists in the new dataset
   */
  const dataExists = (newData, oldSeries, oldAxisX) => {

    // Loop through old series to make sure each exists in the new data
    oldSeries.map(function (currentValue, index, newData) {
      if (!newData.find(element => element.dataKey === currentValue.dataKey))
        return false
    })

    // Is the X Axis still in the dataset?
    if (newData.columns.indexOf(oldAxisX) < 0)
      return false

    return true
  }

  const loadExternal = async () => {
    let dataURL = ''
    // Is URL valid?
    try {
      dataURL = new URL(externalURL)
    } catch {
      throw errorMessages.urlInvalid
    }
    let responseBlob = null

    const fileExtension = Object.keys(supportedDataTypes).find(extension => dataURL.pathname.endsWith(extension))

    try {
      const response = await get(dataURL,
        {
          responseType: 'blob'
        })
        .then((response) => {
          responseBlob = response.data

          // Sometimes the files are coming in as plain text types... Maybe when saved from Macs
          if (fileExtension === '.csv' && responseBlob.type === 'text/plain') {
            responseBlob = responseBlob.slice(0, responseBlob.size, 'text/csv')
          } else if (fileExtension === '.json' && responseBlob.type === 'text/plain') {
            responseBlob = responseBlob.slice(0, responseBlob.size, 'application/json')
          }
        })
    } catch (err) {
      console.error(err)

      const error = err.toString()

      if (Object.values(errorMessages).includes(err)) {
        throw error
      }

      throw errorMessages.failedFetch
    }

    return responseBlob
  }

  const onDrop = ([ uploadedFile ]) => loadData(uploadedFile)

  /**
   * Handle loading data
   */
  const loadData = async (fileBlob = null, fileName) => {
    let fileData = fileBlob
    let fileSource = fileData?.path ?? fileName ?? null
    let fileSourceType = 'file'

    // Get the raw data as text from the file
    if (null === fileData) {
      fileSourceType = 'url'
      try {
        fileData = await loadExternal()
        fileSource = externalURL
      } catch (error) {
        setErrors([ error ])
        return
      }
    }

    let fileSize = fileData.size;

    // Check if file is too big
    if (fileSize > (maxFileSize * 1048576)) {
      setErrors([ errorMessages.fileTooLarge ])
      return
    }

    let path = fileBlob?.name || externalURL || fileName
    let fileExtension = path.match(/(?:\.([^.]+))?$/g)

    if (fileExtension.length === 0) {
      fileExtension = '.csv'
    } else {
      fileExtension = fileExtension[0]
    }

    let mimeType = supportedDataTypes[fileExtension]

    // Convert from blob into raw text
    // Have to use FileReader instead of just .text because IE11 and the polyfills for this are bugged
    let filereader = new FileReader()

    // Set encoding for CSV files - needed to render special characters properly
    let encoding = (mimeType === 'text/csv') ? 'ISO-8859-1' : ''

    filereader.onload = function () {
      let text = this.result

      switch (mimeType) {
        case 'text/csv':
          text = csvParse(text)
          break
        case 'text/plain':
        case 'application/json':
          try {
            text = JSON.parse(text)
          } catch (errors) {
            setErrors([ errorMessages.formatting ])
            return
          }
          break
        default:
          setErrors([ errorMessages.fileType ])
          return
      }

      // Validate parsed data and set if no issues.
      try {
        text = transform.autoStandardize(text)

        if (config.data && config.series) {
          if (dataExists(text, config.series, config?.xAxis.dataKey)) {
            if(config.type === 'dashboard'){
              let newDatasets = {...config.datasets};

              Object.keys(newDatasets).forEach(datasetKey => newDatasets[datasetKey].preview = false);

              newDatasets[fileSource] = {
                data: text, // new data
                dataFileSize: fileSize,
                dataFileName: fileSource, // new file source
                dataFileSourceType: fileSourceType,// new file source type
                dataFileFormat: fileExtension.replace('.', '').toUpperCase(),
                preview: true
              }

              setConfig({
                ...config,
                ...tempConfig,
                dataset: newDatasets
              })
            } else {
              setConfig({
                ...config,
                ...tempConfig,
                data: text, // new data
                dataFileName: fileSource, // new file source
                dataFileSourceType: fileSourceType// new file source type
              })
            }
          } else {
            resetEditor({
              data: text,
              dataFileName: fileSource,
              dataFileSourceType: fileSourceType
            }, 'It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?')
          }
        } else {
          if(config.type === 'dashboard') {
            let newDatasets = {...config.datasets};

            Object.keys(newDatasets).forEach(datasetKey => newDatasets[datasetKey].preview = false);

            newDatasets[fileSource] = {
              data: text, // new data
              dataFileSize: fileSize,
              dataFileName: fileSource, // new file source
              dataFileSourceType: fileSourceType,// new file source type
              dataFileFormat: fileExtension.replace('.', '').toUpperCase(),
              preview: true
            }

            setConfig({ ...config, datasets: newDatasets })
          } else {
            setConfig({
              ...config,
              ...tempConfig,
              data: text, // new data
              dataFileName: fileSource, // new file source
              dataFileSourceType: fileSourceType// new file source type
            })
          }
        }

        setAddingDataset(false);
      } catch (err) {
        setErrors(err)
      }

    }
    filereader.readAsText(fileData, encoding)
  }

  useEffect(() => {
    let newConfig = { ...config }
    if (tempConfig !== null) {
      newConfig = { ...tempConfig }
    }

    if (undefined === config.formattedData && config.dataDescription) {
      const formattedData = transform.developerStandardize(config.data, config.dataDescription)

      if (formattedData) newConfig.formattedData = formattedData
    }

    if (tempConfig !== null) setTempConfig(null)

    setConfig(newConfig)
  }, [])

  const updateDescriptionProp = (visualizationKey, datasetKey, key, value) => {
    if(config.type === 'dashboard') {
      let dataDescription = { ...config.datasets[datasetKey].dataDescription, [key]: value }
      let formattedData = transform.developerStandardize(config.datasets[datasetKey].data, dataDescription)

      let newDatasets = {...config.datasets}
      newDatasets[datasetKey] = {...newDatasets[datasetKey], dataDescription, formattedData};

      setConfig({ ...config, datasets: newDatasets })
    } else {
      let dataDescription = { ...config.dataDescription, [key]: value }
      let formattedData = transform.developerStandardize(config.data, dataDescription)

      console.log('setConfig');
      setConfig({ ...config, formattedData, dataDescription })
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const loadFileFromUrl = (url) => {
    // const extUrl = (url) ? url : config.dataFileName // set url to what is saved in config unless the user has entered something
    
    return (
      <>
        <form className="input-group d-flex" onSubmit={(e) => e.preventDefault()}>
          <input id="external-data" type="text" className="form-control flex-grow-1 border-right-0"
                 placeholder="e.g., https://data.cdc.gov/resources/file.json" aria-label="Load data from external URL"
                 aria-describedby="load-data" value={externalURL} onChange={(e) => setExternalURL(e.target.value)}/>
          <button className="input-group-text btn btn-primary px-4" type="submit" id="load-data"
                  onClick={() => loadData(null, externalURL)}>Load
          </button>
        </form>
        <label htmlFor="keep-url" className="mt-1 d-flex keep-url">
          <input type="checkbox" id="keep-url" checked={keepURL} onChange={() => setKeepURL(!keepURL)}/> Always
          load from URL (normally will only pull once)
        </label>
      </>
    )
  }

  const resetEditor = (config = {}, message = 'Are you sure you want to do this?') => {
    config.newViz = true
    const confirmDataReset = window.confirm(message)

    if (confirmDataReset === true) {
      setTempConfig(null)
      setConfig(config)
      setAddingDataset(true)
    }
  }

  const resetButton = () => {
    return ( //todo convert to modal
      <button className="btn danger"
              onClick={() => resetEditor({type: config.type}, 'Reseting will remove your data and settings. Do you want to continue?')}>Clear
        <CloseIcon/>
      </button>
    )
  }

  const setGlobalDatasetProp = (datasetKey, prop, value) => {
    let newDatasets = {...config.datasets};

    if(value === true){
      Object.keys(newDatasets).forEach(datasetKeyIter => {
        if(datasetKeyIter !== datasetKey){
          newDatasets[datasetKeyIter][prop] = false;
        } else {
          newDatasets[datasetKeyIter][prop] = true;
        }
      })
    } else {
      newDatasets[datasetKey][prop] = value;
    }

    setConfig({...config, datasets: newDatasets});
  };

  const removeDataset = (datasetKey) => {
    let newDatasets = {...config.datasets};

    delete newDatasets[datasetKey];

    setConfig({...config, datasets: newDatasets});
  }

  let previewData, configureData, readyToConfigure = false;
  if(config.type === 'dashboard'){
    readyToConfigure = Object.keys(config.datasets).length > 0;
    Object.keys(config.datasets).forEach(datasetKey => {
      if(config.datasets[datasetKey].preview){
        previewData = config.datasets[datasetKey].data;
      }
    });
  } else {
    previewData = config.data;
    configureData = config;
    readyToConfigure = !!config.formattedData;
  }

  return (
    <>
      <div className="left-col">
        {config.type === 'dashboard' && Object.keys(config.datasets).length > 0 && (
          <>
            <div className="heading-3">Data Sources</div>
            <table>
              <thead>
                <tr>
                  <th>Name</th><th>Size</th><th>Type</th><th colSpan="3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(config.datasets).map(datasetKey => config.datasets[datasetKey].dataFileName && (
                  <tr key={`tr-${datasetKey}`}>
                    <td>{displayFileName(config.datasets[datasetKey].dataFileName)}</td>
                    <td>{displaySize(config.datasets[datasetKey].dataFileSize)}</td>
                    <td>{config.datasets[datasetKey].dataFileFormat}</td>
                    <td><button className="btn btn-primary" onClick={() => setGlobalDatasetProp(datasetKey, 'preview', true)}>Preview Data</button></td>
                    <td><button className="btn btn-primary" onClick={() => removeDataset(datasetKey)}>X</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {configureData && configureData.data && (
          <>
            {config.type !== 'dashboard' && (
              <>
                <div className="heading-3">Data Source</div>
                <div className="file-loaded-area">
                  {config.dataFileSourceType === 'file' && (
                    <div className="data-source-options">
                      <div
                        className={isDragActive ? 'drag-active cdcdataviz-file-selector loaded-file' : 'cdcdataviz-file-selector loaded-file'} {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                          isDragActive ?
                            <p>Drop file here</p> :
                            <p><FileUploadIcon/> <span>{config.dataFileName ?? 'Replace data file'}</span></p>
                        }
                      </div>
                      <div>
                        {resetButton()}
                      </div>
                    </div>
                  )}

                  {config.dataFileSourceType === 'url' && (
                    <div className="url-source-options">
                      <div>
                        {loadFileFromUrl(externalURL)}
                      </div>
                      <div>
                        {resetButton()}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            <DataQuestionnaire visuzliationKey={null} dataKey={configureData.dataFileName} configureData={configureData} updateDescriptionProp={updateDescriptionProp} />
          </>
        )}

        {addingDataset && (   // dataFileSourceType needs to be checked here since earlier versions did not track this state
          <div className="load-data-area">
            <div className="heading-3">Add Dataset</div>
            <Tabs>
              <TabPane title="Upload File" icon={<FileUploadIcon className="inline-icon"/>}>
                <div
                  className={isDragActive ? 'drag-active cdcdataviz-file-selector' : 'cdcdataviz-file-selector'} {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop file here</p> :
                      <p>Drag file to this area, or <span>select a file</span>.</p>
                  }
                </div>
              </TabPane>
              <TabPane title="Load from URL" icon={<LinkIcon className="inline-icon"/>}>
                {loadFileFromUrl(externalURL)}
              </TabPane>
            </Tabs>
            {errors && (errors.map ? errors.map((message, index) => (
              <div className="error-box slim mt-2" key={`error-${message}`}>
                <span>{message}</span> <CloseIcon className="inline-icon dismiss-error"
                                                  onClick={() => setErrors(errors.filter((val, i) => i !== index))}/>
              </div>
            )) : errors.message)}
            <p className="footnote">Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file
              size {maxFileSize}MB.</p>
            {/* TODO: Add more sample data in, but this will do for now. */}
            <span className="heading-3">Load Sample Data:</span>
            <ul className="sample-data-list">
              <li
                onClick={() => loadData(new Blob([ validMapData ], { type: 'text/csv' }), 'valid-data-map.csv')}>United
                States Sample Data #1
              </li>
              <li
                onClick={() => loadData(new Blob([ validChartData ], { type: 'text/csv' }), 'valid-data-chart.csv')}>Chart
                Sample Data
              </li>
              <li
                onClick={() => loadData(new Blob([ validCountyMapData ], { type: 'text/csv' }), 'valid-county-data.csv')}>United
                States Counties Sample Data
              </li>
            </ul>
          </div>
        )}

        {config.type === 'dashboard' && !addingDataset && <p><button className="btn btn-primary" onClick={() => setAddingDataset(true)}>+ Add More Files</button></p>}

        {readyToConfigure && <p><button className="btn btn-primary" onClick={() => setGlobalActive(2)}>Configure your visualization</button></p>}

        <a href="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html" target="_blank"
            rel="noopener noreferrer" className="guidance-link">
          <div>
            <h3>Get Help</h3>
            <p>Documentation and examples on formatting data and configuring visualizations.</p>
          </div>
        </a>
      </div>
      <div className="right-col">
        <PreviewDataTable data={previewData}/>
      </div>
    </>
  )
}
