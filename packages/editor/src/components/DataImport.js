import React, { useState, useContext, useCallback, useEffect } from 'react';
import {useDropzone} from 'react-dropzone'
import {csvParse} from 'd3';
import { useDebounce } from 'use-debounce';
import { get } from 'axios';

import GlobalState from '../context';
import '../scss/data-import.scss';
import TabPane from './TabPane';
import Tabs from './Tabs';
import PreviewDataTable from './PreviewDataTable';

import LinkIcon from '../assets/icons/link.svg';
import FileUploadIcon from '../assets/icons/file-upload-solid.svg';
import CloseIcon from '../assets/icons/close.svg';

import validMapData from '../../example/valid-data-map.csv';
import validChartData from '../../example/valid-chart-data.json';

import { DataTransform } from '@cdc/core/components/DataTransform';

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
  } = useContext(GlobalState);

  const transform = new DataTransform();

  const [externalURL, setExternalURL] = useState('')

  const [ debouncedExternalURL ] = useDebounce(externalURL, 200);

  const [keepURL, setKeepURL] = useState(config.dataUrl || false)

  const supportedDataTypes = {
    '.csv': 'text/csv',
    '.json': 'application/json'
  };

  useEffect(() => {
    if(tempConfig !== null) {
        setConfig(tempConfig)
        setTempConfig(null)
    }
  })

  useEffect(() => {
    if(true === keepURL) {
      setConfig({...config, dataUrl: debouncedExternalURL})
    }
  }, [debouncedExternalURL, keepURL])

  const loadExternal = async () => {
    let dataURL = '';
    // Is URL valid?
    try {
      dataURL = new URL(externalURL);
    } catch {
      throw errorMessages.urlInvalid
    }
    let responseBlob = null;

    const fileExtension = Object.keys(supportedDataTypes).find(extension => dataURL.pathname.endsWith(extension))

    const typeDictionary = {
      '.csv': 'text/csv',
      '.json': 'application/json'
    }
    try {
      const response = await get( dataURL,
        {
          responseType: 'blob'
        })
        .then((response) => {
          responseBlob = response.data;

          // Sometimes the files are coming in as plain text types... Maybe when saved from Macs
          if ( fileExtension === ".csv" && responseBlob.type === "text/plain" ) {
            responseBlob = responseBlob.slice(0, responseBlob.size, "text/csv")
          } else if ( fileExtension === ".json" && responseBlob.type === "text/plain" ) {
            responseBlob = responseBlob.slice(0, responseBlob.size, "application/json")
          }
        });
    } catch (err) {
      console.error(err)

      const error = err.toString();

      if( Object.values(errorMessages).includes(err) ) {
        throw error
      }

      throw errorMessages.failedFetch
    }
    
    return responseBlob;
  }

  const onDrop = useCallback(([uploadedFile]) => loadData(uploadedFile), [])

  /**
   * Handle loading data
   */
  const loadData = async (fileBlob = null) => {

    let fileData = fileBlob;

    // Get the raw data as text from the file
    if(null === fileData) {
      try {
        fileData = await loadExternal();
      } catch (error) {
        setErrors([error]);
        return;
      }
    }

    // Pull out mime type of file
    let { type: mimeType } = fileData;

    // Catch empty types - sometimes these are blank on Windows machines...
    if ( mimeType === "" ) {
      const fileExtension = Object.keys(supportedDataTypes).find(extension => fileBlob.name.endsWith(extension));
      mimeType = ( fileExtension === ".csv" ) ? 'text/csv' : 'application/json';
    }
    
    // Consolidate CSV types since we need to know this before choosing encoding
    switch (mimeType) {
      case 'text/csv':
      case 'application/csv':
      case 'application/vnd.ms-excel':
      case 'application/x-csv':
      case 'text/x-comma-separated-values':
      case 'text/comma-separated-values':
        mimeType = 'text/csv';
        break;
      default: 
        mimeType = mimeType;
        break;
    }

    // Check if file is too big
    if(fileData.size > (maxFileSize * 1048576) ) {
      setErrors([errorMessages.fileTooLarge]);
      return;
    }

    // Convert from blob into raw text
    // Have to use FileReader instead of just .text because IE11 and the polyfills for this are bugged
    let filereader = new FileReader();
    // Set encoding for CSV files - needed to render special characters properly
    let encoding = ( mimeType === 'text/csv' ) ? 'ISO-8859-1' : '';
    filereader.onload = function() {

      let text = this.result

      switch (mimeType) {
        case 'text/csv': 
          text = csvParse(text);
          break;
        case 'text/plain':
        case 'application/json':
          try {
            text = JSON.parse(text);
          } catch (errors) { 
            setErrors([errorMessages.formatting]);
            return;
          }
          break;
        default:
          setErrors([errorMessages.fileType]);
          return;
      }
  
      // Validate parsed data and set if no issues.
      try {
        text = transform.autoStandardize(text);

        setConfig({...config, data:text});
      } catch (err) {
          setErrors(err);
      }

    }
      filereader.readAsText(fileData, encoding)    
  }

  useEffect(() => {
    if(!config.formattedData && config.dataDescription) {
        try {
            setConfig({...config, formattedData: transform.developerStandardize(config.data, config.dataDescription)});
        } catch(e) {
            //Data description not sufficient
        }
    }
  }, [config.dataDescription]);

  const updateDescriptionProp = (key, value) => {
      setConfig({...config, formattedData: undefined, dataDescription: {...config.dataDescription, [key]: value}})
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <>
      <div className="left-col px-4">
        <Tabs className="mb-4">
          <TabPane title="Upload File" icon={<FileUploadIcon className="inline-icon" />}>
            <div className={isDragActive ? 'drag-active cdcdataviz-file-selector' : 'cdcdataviz-file-selector'} {...getRootProps()}>
              <FileUploadIcon />
              <input {...getInputProps()} />
              {
                isDragActive ?
                <p>Drop file here</p> :
                <p>Drag file to this area, or <span>select a file</span>.</p>
              }
            </div>
          </TabPane>
          <TabPane title="Load from URL" icon={<LinkIcon className="inline-icon" />}>
            <form className="input-group d-flex" onSubmit={(e) => e.preventDefault()}>
              <input id="external-data" type="text" className="form-control flex-grow-1 border-right-0" placeholder="e.g., https://data.cdc.gov/resources/file.json" aria-label="Load data from external URL" aria-describedby="load-data" value={externalURL} onChange={(e) => setExternalURL(e.target.value)} />
              <button className="input-group-text btn btn-primary px-4" type="submit" id="load-data" onClick={() => loadData()}>Load</button>
            </form>
            <label htmlFor="keep-url" className="mt-1 d-flex keep-url">
              <input type="checkbox" id="keep-url" defaultChecked={keepURL} onClick={() => setKeepURL(!keepURL)} /> Always load from URL (normally will only pull once)
            </label>
          </TabPane>
        </Tabs>
        {errors && (errors.map ? errors.map((message, index) => (
          <div className="error-box slim mt-2" key={`error-${message}`}>
            <span>{message}</span> <CloseIcon className='inline-icon dismiss-error' onClick={() => setErrors( errors.filter((val, i) => i !== index) )} />
          </div>
        )) : errors.message)}
        <p className="footnote mt-2 mb-4">Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}MB.</p>
        {/* TODO: Add more sample data in, but this will do for now. */}
        <span className="heading">Load Sample Data:</span>
        <ul className="sample-data-list">
          <li onClick={() => loadData(new Blob([validMapData], {type : 'text/csv'}))}>United States Sample Data #1</li>
          <li onClick={() => setConfig({...config, data: validChartData})}>Chart Sample Data</li>
        </ul>
        <a href="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html" target="_blank" rel="noopener noreferrer" className="guidance-link">
          <div>
            <h3>Get Help</h3>
            <p>Documentation and examples on formatting data and configuring visualizations.</p>
          </div>
        </a>
        {config.data && (
          <>
            <div>
              <div className="question">
                <span>Is the geography/X-axis value in your data structured horizontally, or vertically?</span>
                <div>
                  <div className={'table-button' + (config.dataDescription && config.dataDescription.horizontal === false ? ' active' : '')} onClick={() => {updateDescriptionProp('horizontal', false)}}>
                    <p>Data is vertical. Geography/X-axis values are contained on a single column.</p>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Value</th>
                            <th>...</th>
                        </tr>
                        <tr>
                            <td>01/01/2020</td>
                            <td>150</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>02/01/2020</td>
                            <td>150</td>
                            <td>...</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>State</th>
                            <th>Value</th>
                            <th>...</th>
                        </tr>
                        <tr>
                            <td>Georgia</td>
                            <td>150</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Florida</td>
                            <td>150</td>
                            <td>...</td>
                        </tr>
                    </table>
                  </div>
                  <div className={'table-button' + (config.dataDescription && config.dataDescription.horizontal === true ? ' active' : '')} onClick={() => {updateDescriptionProp('horizontal', true)}}>
                    <p>Data is horizontal. Geography/X-axis values are contained on a single row.</p>
                    <table>
                        <tr>
                            <th>Date</th>
                            <td>01/01/2020</td>
                            <td>02/01/2020</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <th>Value</th>
                            <td>100</td>
                            <td>150</td>
                            <td>...</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>State</th>
                            <td>Georgia</td>
                            <td>Florida</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <th>Value</th>
                            <td>100</td>
                            <td>150</td>
                            <td>...</td>
                        </tr>
                    </table>
                  </div>
                </div>
              </div>

              {config.dataDescription && (
                  <>
                      <div className="question">
                          <span>Are there multiple series represented in your data?</span>
                          <div>
                              <button className="btn btn-primary" onClick={() => {updateDescriptionProp('series', true)}}>Yes</button>
                              <button className="btn btn-primary" onClick={() => {updateDescriptionProp('series', false)}}>No</button>
                          </div>
                      </div>
                      {config.dataDescription.horizontal === true && config.dataDescription.series === true && (
                        <div className="question">
                          <span>Which property in the dataset represents which series the row is describing?</span>
                          <select onChange={(e) => {updateDescriptionProp('seriesKey', e.target.value)}}>
                              <option value="">Choose an option</option>
                              {Object.keys(config.data[0]).map(key => <option value={key}>{key}</option>)}
                          </select>
                        </div>
                      )}
                      {config.dataDescription.horizontal === false && config.dataDescription.series === true && (
                          <>
                              <div className="question">
                                  <span>Are the series values in your data represented in a single row, or across multiple rows?</span><br/>
                                  <div className={'table-button' + (config.dataDescription.singleRow === true ? ' active' : '')} onClick={() => {updateDescriptionProp('singleRow', true)}}>
                                      <p>Each row contains the data for an individual series in itself.</p>
                                      <table>
                                          <tr>
                                              <th>Virus</th>
                                              <th>01/01/2020</th>
                                              <th>02/01/2020</th>
                                              <th>...</th>
                                          </tr>
                                          <tr>
                                              <td>Virus 1</td>
                                              <td>100</td>
                                              <td>150</td>
                                              <td>...</td>
                                          </tr>
                                          <tr>
                                              <td>Virus 2</td>
                                              <td>15</td>
                                              <td>20</td>
                                              <td>...</td>
                                          </tr>
                                      </table>
                                  </div>
                                  <div className={'table-button' + (config.dataDescription.singleRow === false ? ' active' : '')} onClick={() => {updateDescriptionProp('singleRow', false)}}>
                                      <p>Each series data is broken out into multiple rows.</p>
                                      <table>
                                          <tr>
                                              <th>Virus</th>
                                              <th>Date</th>
                                              <th>Value</th>
                                          </tr>
                                          <tr>
                                              <td>Virus 1</td>
                                              <td>01/01/2020</td>
                                              <td>100</td>
                                          </tr>
                                          <tr>
                                              <td>Virus 1</td>
                                              <td>02/01/2020</td>
                                              <td>150</td>
                                          </tr>
                                          <tr>
                                              <td>...</td>
                                              <td>...</td>
                                              <td>...</td>
                                          </tr>
                                          <tr>
                                              <td>Virus 2</td>
                                              <td>01/01/2020</td>
                                              <td>15</td>
                                          </tr>
                                          <tr>
                                              <td>Virus 2</td>
                                              <td>02/01/2020</td>
                                              <td>20</td>
                                          </tr>
                                          <tr>
                                              <td>...</td>
                                              <td>...</td>
                                              <td>...</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                              {config.dataDescription.singleRow === false && (
                                  <>
                                      <div className="question">
                                          <span>Which property in the dataset represents which series the row is describing?</span>
                                          <select onChange={(e) => {updateDescriptionProp('seriesKey', e.target.value)}}>
                                              <option value="">Choose an option</option>
                                              {Object.keys(config.data[0]).map(key => <option value={key}>{key}</option>)}
                                          </select>
                                      </div>
                                      <div className="question">
                                          <span>Which property in the dataset represents the X-axis, or geography value?</span>
                                          <select onChange={(e) => {updateDescriptionProp('xKey', e.target.value)}}>
                                              <option value="">Choose an option</option>
                                              {Object.keys(config.data[0]).map(key => <option value={key}>{key}</option>)}
                                          </select>
                                      </div>
                                      <div className="question">
                                          <span>Which property in the dataset represents the numeric value?</span>
                                          <select onChange={(e) => {updateDescriptionProp('valueKey', e.target.value)}}>
                                              <option value="">Choose an option</option>
                                              {Object.keys(config.data[0]).map(key => <option value={key}>{key}</option>)}
                                          </select>
                                      </div>
                                  </>
                              )}
                          </>
                      )}
                  </>
              )}
          </div>
          {config.formattedData && (
              <button className="btn btn-primary" style={{float: 'right'}} onClick={() => setGlobalActive(1)}>Select your visualization type &raquo;</button>
          )}
        </>
        )}
      </div>
      <div className="right-col">
        <PreviewDataTable data={config.data} />
      </div>
    </>
  );
}
