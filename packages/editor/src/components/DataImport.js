import React, { useState, useContext, useCallback, useEffect } from 'react';
import {useDropzone} from 'react-dropzone'
import {csvParse} from 'd3';
import { useDebounce } from 'use-debounce';
import { get } from 'axios';

import GlobalState from '../context';
import '../scss/data-import.scss';
import TabPane from './TabPane';
import Tabs from './Tabs';
import PreviewDataTable from './PreviewDataTable'

import LinkIcon from '../assets/icons/link.svg';
import FileUploadIcon from '../assets/icons/file-upload-solid.svg';
import CloseIcon from '../assets/icons/close.svg';

import validMapData from '../../sampledata/valid-data-map.csv';

export default function DataImport() {
  const {data, setData, errors, setErrors, errorMessages, maxFileSize, setDataURL, keepURL, setKeepURL} = useContext(GlobalState);

  const [externalURL, setExternalURL] = useState('')

  const [ debouncedExternalURL ] = useDebounce(externalURL, 200);

  const supportedDataTypes = {
    '.csv': 'text/csv',
    '.json': 'application/json'
  };

  useEffect(() => {
    if(true === keepURL) {
      setDataURL(debouncedExternalURL)
    }
  }, [debouncedExternalURL, keepURL])

  /**
   * validateData:
   * Check data for common issues
   */
  const validateData = (parsedData) => {
    const errorsFound = []

    // Empty data
    if ( 0 === parsedData.length ) {
      errorsFound.push(errorMessages.emptyData)
    }

    // Does it have the correct data structure?
    if (parsedData.filter(row =>  row.constructor !== Object).length > 0) {
      errorsFound.push(errorMessages.formatting);
    }

    if(errorsFound.length > 0) {
      throw errorsFound;
    }

    return parsedData;
  }

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
      let text = this.result;

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
        text = validateData(text);
        setData(text);
      } catch (err) {
          setErrors(err);
      }

    }
      filereader.readAsText(fileData, encoding)    
  }

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
        {errors.map((message, index) => (
          <div className="error-box slim mt-2" key={`error-${message}`}>
            <span>{message}</span> <CloseIcon className='inline-icon dismiss-error' onClick={() => setErrors( errors.filter((val, i) => i !== index) )} />
          </div>
        ))}
        <p className="footnote mt-2 mb-4">Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}MB.</p>
        {/* TODO: Add more sample data in, but this will do for now. */}
        <h3>Load Sample Data:</h3>
        <ul className="sample-data-list">
          <li onClick={() => loadData(new Blob([validMapData], {type : 'text/csv'}))}>United States Sample Data #1</li>
        </ul>
        <a href="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html" target="_blank" rel="noopener noreferrer" className="guidance-link">
          <div>
            <h3>Get Help</h3>
            <p>Documentation and examples on formatting data and configuring visualizations.</p>
          </div>
        </a>
      </div>
      <div className="right-col">
        <PreviewDataTable data={data} />
      </div>
    </>
  );
}
