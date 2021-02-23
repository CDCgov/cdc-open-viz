import React, { useState, useContext, useCallback, useEffect } from 'react';
import {useDropzone} from 'react-dropzone'
import {csvParse} from 'd3';
import { useDebounce } from 'use-debounce';

import GlobalState from '../context';
import '../scss/data-import.scss';
import TabPane from './TabPane';
import Tabs from './Tabs';
import PreviewDataTable from './PreviewDataTable'

import LinkIcon from '../assets/icons/link.svg';
import FileUploadIcon from '../assets/icons/file-upload-solid.svg';
import CloseIcon from '../assets/icons/close.svg';

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
  const validateData = async (parsedData) => {
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

    try {
      const response = await fetch(dataURL);

      if(response.status !== 200) {
        throw errorMessages.cannotReach
      }

      const responseText = await response.text();

      const fileExtension = Object.keys(supportedDataTypes).find(extension => dataURL.pathname.endsWith(extension))

      const typeDictionary = {
        '.csv': 'text/csv',
        '.json': 'application/json'
      }
      // Manually construct blob instead of calling response.blob() to get around inconsistent mimeType inference
      responseBlob = new Blob([responseText], {
        type: typeDictionary[fileExtension]
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
    const { type: mimeType } = fileData;

    // Check if file is too big
    if(fileData.size > (maxFileSize * 1048576) ) {
      setErrors([errorMessages.fileTooLarge]);
      return;
    }

    // Convert from blob into raw text
    fileData = await fileData.text();

    switch (mimeType) {
      case 'text/csv':
      case 'application/csv':
      case 'application/vnd.ms-excel':
      case 'application/x-csv':
      case 'text/x-comma-separated-values':
      case 'text/comma-separated-values':
        fileData = csvParse(fileData);
        break;
      case 'application/json':
        try {
          fileData = JSON.parse(fileData);
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
      fileData = await validateData(fileData);
      setData(fileData);
    } catch (err) {
        setErrors(err);
    }
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
